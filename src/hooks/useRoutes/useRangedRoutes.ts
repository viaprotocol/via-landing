import { useMemo } from 'react'

import { CURRENCY_USD, formatValue } from '@/format-crypto/format'

import { useTokenPrice } from '@/hooks/queries/useTokenPrice'

import type { TRouteWithMeta, TRangingRoute } from '@/views/IndexPage/Demo/components/Routes'
import { calculateRouteTime, EVM_BASE_TOKEN_ADDRESS, getRouteByMinProperty, getTokenWorth, getUsdAmount } from './utils'

function useRangedRoutes(routes: TRouteWithMeta[]) {
  const { data: toTokenPrice } = useTokenPrice({ address: EVM_BASE_TOKEN_ADDRESS, chainId: 1 } || {})

  const bestItemID = routes.length === 0 ? -1 : 0
  const bestTimeItemID = useMemo(
    () => getRouteByMinProperty(routes, route => calculateRouteTime(route.calculatedSteps)),
    [routes]
  )

  // Example: [2, 0, 1, 2, 3, 0, 1, 3, 4, 5] -> [2, 0, 1, 3, 4, 5]
  const routesIDList = useMemo(
    () =>
      [
        bestItemID,
        // Place the "Fast" route in 2nd place
        ...[bestTimeItemID]
      ]
        .concat(Array.from(routes.keys()))
        .filter(v => v >= 0) // Filter bestGasItemID and bestTimeItemID if they have a negative value
        .filter((v, i, a) => a.indexOf(v) === i), // remove duplicates
    [bestItemID, bestTimeItemID, routes]
  )

  // Example: [2, 0, 1, 3, 4, 5] -> [* route with id 2*, *route with id 0*, etc]
  const formatterRouterList = useMemo(() => routesIDList.map(ID => routes[ID]), [routesIDList, routes])

  const rangedRoutes: TRangingRoute[] = useMemo(() => {
    if (!formatterRouterList.length) {
      return []
    }

    const bestItem = routes[bestItemID]
    const bestWorth = getTokenWorth(bestItem.toTokenAmount, bestItem.calculatedSteps)
    const bestUSDPrice = formatValue(CURRENCY_USD, getUsdAmount(bestWorth, toTokenPrice))

    return formatterRouterList.map((route) => {
      const tokenWorth = getTokenWorth(route.toTokenAmount, route.calculatedSteps)
      const priceUSD = formatValue(CURRENCY_USD, getUsdAmount(tokenWorth, toTokenPrice))
      const loss = (Number(bestUSDPrice) - Number(priceUSD)) / (Number(bestUSDPrice) / 100)
      const estimateTime = calculateRouteTime(route.calculatedSteps)

      return {
        ...route,
        meta: {
          ...route.meta,
          isBest: route === bestItem,
          isBestTime: route === routes[bestTimeItemID],
          estimateTime,
          price: {
            tokenWorth,
            priceUSD,
            loss
          }
        }
      } as TRangingRoute
    })
  }, [formatterRouterList, bestTimeItemID, bestItemID])

  return rangedRoutes
}

export { useRangedRoutes }
