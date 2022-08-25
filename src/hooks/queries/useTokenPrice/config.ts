import { fetchTokenPrice } from '@/api/explorerApi'

import type { TUseTokenPriceQuery } from './types'

const TOKEN_PRICE_INTERVAL = 1 * 60 * 1000

const createQueryKey = ({ address, chainId }: TUseTokenPriceQuery) => ['tokenPrice', address, chainId]

const createQueryFn =
  ({ address, chainId }: TUseTokenPriceQuery) =>
  () =>
    fetchTokenPrice(chainId!, address!)

const createQueryConfig = ({ chainId }: TUseTokenPriceQuery) => ({
  enabled: !!chainId,
  refetchOnMount: false,
  refetchOnReconnect: false,
  refetchOnWindowFocus: false,
  cacheTime: TOKEN_PRICE_INTERVAL,
  staleTime: TOKEN_PRICE_INTERVAL,
  placeholderData: null
})

const createQueryParams = (params: TUseTokenPriceQuery) => {
  return [createQueryKey(params), createQueryFn(params), createQueryConfig(params)] as const
}

export { TOKEN_PRICE_INTERVAL, createQueryParams }
