import type { TNetwork, TRoute, TRouteAction, TRouteActionWithMeta, TRouteStep, TRouteWithMeta, TToken, TTokenPrice } from '@/views/IndexPage/Demo/components/Routes'
import { queryClient } from '../queries/common/queryClient'
import { createQueryParams as createGasPriceQueryParams } from '@/hooks/queries/useGasPrice/config'
import { createQueryParams as createTokenPriceQueryParams } from '@/hooks/queries/useTokenPrice/config'
import type { TChainInfo, TChainMap, TFormatActionOpts, TFormatRouteOpts } from './types'
import { formatValue, CURRENCY_USD, CURRENCY_CRYPTO } from '@/format-crypto/format'
import { fromDecimal, getNetworkByChainId } from '@/views/IndexPage/Demo/components/Routes/utils'

export const EVM_BASE_TOKEN_ADDRESS = '0x0000000000000000000000000000000000000000'
const SOLANA_BASE_TOKEN_ADDRESS = 'So11111111111111111111111111111111111111111'

/**
 * It takes a token amount and a list of steps, and returns the worth of that token amount in the
 * currency of the last step
 * @param {string} toTokenAmount - The amount of the token you want to receive.
 * @param {TRouteStep[]} steps - The array of steps that the user will take to complete the
 * transaction.
 * @returns The last step of the route, and the amount of the token that is being converted.
 */
export const getTokenWorth = (toTokenAmount: string, steps: TRouteStep[]) => {
  const lastStep = steps[steps.length - 1]

  return formatValue(CURRENCY_CRYPTO, fromDecimal(toTokenAmount, lastStep.toToken.decimals))
}

/**
 * It takes a route and returns an array of route steps
 * @param {TRoute} route - TRoute - this is the route that we're calculating the steps for.
 */
const calculateSteps = (route: TRoute) =>
  route.actions.reduce<TRouteStep[]>((acc, action) => [...acc, ...action.steps], [])

export const getNativeTokenAddress = (chainId: number) =>
  chainId > 0 ? EVM_BASE_TOKEN_ADDRESS : SOLANA_BASE_TOKEN_ADDRESS

export const getUsdAmount = (amount: string | number, price: number | string | null) => {
  return Number(amount) * (Number(price) || 1)
}

const FIXED_PART = 50
const getTokenPriceInfo = ({
  wei,
  priceUSD,
  network
}: {
  wei: number | null | string
  priceUSD: string
  network: TNetwork | undefined
}): TTokenPrice => {
  const nWei = Number(wei || 0)
  const nToken = fromDecimal(nWei, network!.currencyDecimals).toFixed(FIXED_PART)
  const usd = getUsdAmount(nToken, priceUSD).toFixed(FIXED_PART)

  const formattedUSD = formatValue(CURRENCY_USD, usd)
  const formattedToken = formatValue(CURRENCY_CRYPTO, nToken)

  return {
    wei: nWei,
    usd: formattedUSD,
    token: formattedToken
  }
}

/**
 * It takes an action and returns an action with meta data
 * @param {TFormatActionOpts} opts - TFormatActionOpts
 * @returns An object with the following properties:
 * - action: The action object passed in
 * - meta: An object with the following properties:
 *   - gasActionUSD: The gas action USD
 *   - gasActionApproveUSD: The gas action approve USD
 *   - providerFeeUSD: The provider fee USD
 *   - totalGas: The total gas
 */
const formatAction =
  (opts: TFormatActionOpts) =>
    async (action: TRouteAction): Promise<TRouteActionWithMeta> => {
      const { chainMap } = opts
      const { fee, fromToken, additionalProviderFee } = action
      const { gasActionApproveUnits, gasActionUnits } = fee

      const { chainId, address } = fromToken

      const chainInfo = chainMap[chainId]

      const { wei, network, priceUSD } = chainInfo

      const isNativeToken = getNativeTokenAddress(chainId) === address

      const gasActionApprove = getTokenPriceInfo({
        wei: (gasActionApproveUnits || 0) * wei,
        priceUSD,
        network
      })
      const gasAction = getTokenPriceInfo({ wei: (gasActionUnits || 0) * wei, priceUSD, network })
      const providerFee = getTokenPriceInfo({ wei: additionalProviderFee?.amount || 0, priceUSD, network })

      const totalGas = getTokenPriceInfo({
        wei: gasAction.wei + gasActionApprove.wei + providerFee.wei,
        priceUSD,
        network
      })

      return {
        ...action,
        meta: {
          isNeedApprove: true,
          isNeedGas: false,
          network,
          gasAction,
          gasActionApprove,
          totalGas,
          providerFee
        }
      }
    }

/**
 * It takes a route and returns a route with meta data
 * @param {TFormatRouteOpts} opts - TFormatRouteOpts
 * @returns An object with the following properties:
 *   - actions: An array of objects with the following properties:
 *     - meta: An object with the following properties:
 *       - totalGas: A string representing the total gas cost of the action
 *       - providerFeeUSD: A string representing the provider fee in USD
 *     - tool: An object with the following properties:
 *       -
 */
const formatRoute =
  (opts: TFormatRouteOpts) =>
    async (route: TRoute): Promise<TRouteWithMeta> => {
      const { startTime, chainMap, toTokenPrice } = opts
      const actions = await Promise.all(route.actions.map(formatAction({ chainMap })))

      const calculatedSteps = calculateSteps(route)

      const [totalGasUSD, providerFeeUSD, gasActionApproveUSD, gasActionUSD] = actions
        .reduce(
          ([localGasUSD, localProviderFeeUSD, localActionApproveUSD, localActionUSD], { meta }) => [
            localGasUSD + Number(meta.totalGas.usd),
            localProviderFeeUSD + Number(meta.providerFee.usd),
            localActionApproveUSD + Number(meta.gasActionApprove.usd),
            localActionUSD + Number(meta.gasAction.usd)
          ],
          [0, 0, 0, 0]
        )
        .map(value => formatValue(CURRENCY_USD, value))

      const toTokenWorth = getUsdAmount(getTokenWorth(route.toTokenAmount, calculatedSteps), toTokenPrice || 1)

      const calculatedToTokenAmountUSD = formatValue(
        CURRENCY_USD,
        Number(formatValue(CURRENCY_USD, toTokenWorth)) - Number(totalGasUSD) - Number(providerFeeUSD)
      )

      const toolList = calculatedSteps.map(step => `${step.tool.name}${step.fromToken.symbol}`).join('')

      const isNeedGas = !!actions.find(action => action.meta.isNeedGas) || false

      return {
        ...route,
        actions,
        meta: {
          calculatedToTokenAmountUSD: String(calculatedToTokenAmountUSD),
          totalGasUSD: String(totalGasUSD),
          providerFeeUSD: String(providerFeeUSD),
          gasActionApproveUSD: String(gasActionApproveUSD),
          gasActionUSD: String(gasActionUSD),
          toolList,
          searchDuration: (Date.now() / 1000 - startTime).toFixed(2),
          isNeedGas
        },
        calculatedSteps
      }
    }

/**
 * It takes an array of routes and returns an object with the gas price and token price for each chain
 * @param {TRoute[]} routes - TRoute[] - an array of routes that we want to calculate the price for.
 */
const CHAIN_INFO_TEMPLATE: TChainInfo = {
  gasTokenPrice: null,
  gas: '0',
  wei: 0,
  priceUSD: '0'
}
const getChainMap = async (routes: TRoute[]): Promise<TChainMap> => {
  const chainMap: TChainMap = {}
  const uniqChainIdSet = new Set<number>()

  // Getting only unique chainIds
  const steps = routes.flatMap(route => calculateSteps(route))
  steps.forEach((step) => {
    uniqChainIdSet.add(step.fromToken.chainId)
    uniqChainIdSet.add(step.toToken.chainId)
  })

  await Promise.allSettled(
    Array.from(uniqChainIdSet).map(async (chainId) => {
      const gasPriceParams = {
        chainId
      }

      const tokenPriceParams = {
        ...gasPriceParams,
        address: getNativeTokenAddress(chainId)
      }

      const promiseMapResult = await Promise.allSettled([
        Promise.resolve(queryClient.fetchQuery(...createGasPriceQueryParams(gasPriceParams))),
        Promise.resolve(queryClient.fetchQuery(...createTokenPriceQueryParams(tokenPriceParams)))
      ])

      const [gasPriseResult, tokenPriceResult] = promiseMapResult
      const chainInfoResult: TChainInfo = { ...CHAIN_INFO_TEMPLATE }

      if (gasPriseResult.status === 'fulfilled') {
        const { usd = 0, gwei = 0 } = gasPriseResult.value || {}

        chainInfoResult.gas = usd.toFixed(18)
        chainInfoResult.wei = gwei * 10 ** 9
      }

      if (tokenPriceResult.status === 'fulfilled') {
        chainInfoResult.priceUSD = String(tokenPriceResult.value)
      }

      chainInfoResult.network = getNetworkByChainId(chainId)

      chainMap[chainId] = chainInfoResult
    })
  )

  return chainMap
}

/**
 * It takes an array of routes and returns token that user requested
 * @param {TRoute[]} routes - TRoute[]
 * @returns The last token in the route
 */
const getRoutesToToken = (routes: TRoute[]): TToken => {
  if (!routes.length) {
    throw new Error('No routes')
  }

  const [firstRoute] = routes
  const lastAction = firstRoute.actions[firstRoute.actions.length - 1]

  return lastAction.toToken
}

export const getFormattedRoutes = async (routes: TRoute[]) => {
  if (!routes.length) {
    return []
  }

  const chainMap = await getChainMap(routes)
  const { address, chainId } = getRoutesToToken(routes)
  const price = await queryClient.fetchQuery(...createTokenPriceQueryParams({ address, chainId }))

  return Promise.all(
    routes.map(
      formatRoute({
        startTime: 0,
        chainMap,
        toTokenPrice: price
      })
    )
  )
}

/**
 * Return a new array with duplicate objects removed, where uniqueness is determined by the value of a
 * given key.
 * @param {any[]} array - the array you want to filter
 * @param {string} key - The key to use to determine uniqueness.
 * @returns A new array with unique values based on the key provided.
 */
const uniqueArrayByKey = (array: any[], key: string) => {
  const seen = new Set()
  return array.filter((el) => {
    const keyMap = key.split('.')
    const k = keyMap.reduce((memo, innerKey) => memo[innerKey], el)
    return seen.has(k) ? false : seen.add(k)
  })
}

export { uniqueArrayByKey }

export const getRouteByMinProperty = <RouteType extends TRoute = TRouteWithMeta>(
  routes: RouteType[],
  func: (route: RouteType) => number,
  onlyActive = true
) => {
  const inputRoutes = onlyActive ? routes.filter(route => route.active) : routes

  if (inputRoutes.length <= 1) {
    return -1
  }

  const [bestRouteID, countOfMin] = getMinIDByProperty(inputRoutes, func)

  const bestRoute = inputRoutes[bestRouteID]
  const bestInputRouteID = routes.findIndex(route => route.routeId === bestRoute.routeId)

  return countOfMin <= 1 ? bestInputRouteID : -1
}

/**
 * It takes an array of objects, and a function that returns a number from each object, and returns the
 * index of the object with the lowest number, and the number of objects with that number
 * @param {TRouteWithMeta[]} objectArray - The array of objects to search through.
 * @param getObjectProperty - (route: TRouteWithMeta) => number
 * @returns An array of two numbers.
 */
export const getMinIDByProperty = <RouteType extends TRoute = TRouteWithMeta>(
  objectArray: RouteType[],
  getObjectProperty: (route: RouteType) => number
) => {
  return objectArray.reduce(
    (stateArr, obj, i, arr) => {
      const [iMin, countOfMin] = stateArr

      if (getObjectProperty(obj) === getObjectProperty(arr[iMin])) {
        return [iMin, countOfMin + 1]
      }

      return getObjectProperty(obj) < getObjectProperty(arr[iMin]) ? [i, 1] : [iMin, countOfMin]
    },
    [0, 0]
  )
}

/**
 * It takes an array of steps, and returns the sum of the estimatedTime property of each step's tool
 * @param {TRouteStep[]} steps - TRouteStep[] - the steps of the route
 */
export const calculateRouteTime = (steps: TRouteStep[]) =>
  steps.reduce((acc, step) => acc + Number(step.tool.estimatedTime), 0)
