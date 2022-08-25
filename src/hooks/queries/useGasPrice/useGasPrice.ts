import { useQuery } from '@tanstack/react-query'

import { createQueryParams } from './config'
import type { TUseGasPriceQuery, TUseGasPriceResult } from './types'

function useGasPrice(params: TUseGasPriceQuery) {
  const queryData = useQuery(...createQueryParams(params))

  return queryData as TUseGasPriceResult
}

export { useGasPrice }
