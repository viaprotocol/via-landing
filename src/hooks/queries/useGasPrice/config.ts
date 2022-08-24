import { fetchGasPrice } from '@/api/explorerApi'

import type { TUseGasPriceQuery } from './types'

const GAS_PRICE_INTERVAL = 1 * 15 * 1000

const createQueryKey = ({ chainId }: TUseGasPriceQuery) => ['gasPrice', chainId]

const createQueryFn =
  ({ chainId }: TUseGasPriceQuery) =>
  () =>
    fetchGasPrice(chainId!)

const createQueryConfig = ({ chainId }: TUseGasPriceQuery) => ({
  enabled: !!chainId,
  refetchOnMount: false,
  refetchOnReconnect: false,
  refetchOnWindowFocus: false,
  cacheTime: GAS_PRICE_INTERVAL,
  staleTime: GAS_PRICE_INTERVAL,
  placeholderData: null
})

const createQueryParams = (params: TUseGasPriceQuery) => {
  return [createQueryKey(params), createQueryFn(params), createQueryConfig(params)] as const
}

export { GAS_PRICE_INTERVAL, createQueryParams }
