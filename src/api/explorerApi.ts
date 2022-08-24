import api from './api'
import { EXPLORER_URL } from './constants'
import type { TExplorerBalances, TGasPriceResponse } from './explorerApi.types'

export const EXPLORER_URLS = {
  fetchTokenPriceUrl: `${EXPLORER_URL}v1/token_price`,
  fetchGasPriceUrl: `${EXPLORER_URL}v1/gas_price`,
}

export const fetchTokenPrice = async (chainId: number, tokenAddress: string) => {
  const res = await api.get<TExplorerBalances>(EXPLORER_URLS.fetchTokenPriceUrl, {
    params: {
      chain: chainId,
      tokens_addresses: tokenAddress
    }
  })
  // @ts-expect-error key is always defined
  return res.data?.[chainId][tokenAddress].USD as number
}

export const fetchGasPrice = async (chainId: number) => {
  const res = await api.get<TGasPriceResponse>(EXPLORER_URLS.fetchGasPriceUrl, {
    params: {
      chains: chainId
    }
  })
  return res.data[chainId]
}
