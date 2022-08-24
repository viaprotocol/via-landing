import type { QueryObserverSuccessResult } from '@tanstack/react-query'

import type { TGasPriceChainResponse } from '@/api/explorerApi.types'

type TUseGasPriceQuery = {
  chainId?: number
}

type TUseGasPriceResult = QueryObserverSuccessResult<TGasPriceChainResponse | null, never>

export type { TUseGasPriceQuery, TUseGasPriceResult }
