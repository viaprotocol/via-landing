import type { QueryObserverSuccessResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'

import { createQueryParams } from './config'
import type { TUseTokenPriceQuery } from './types'

function useTokenPrice(params: TUseTokenPriceQuery) {
  const queryData = useQuery(...createQueryParams(params))

  return queryData as QueryObserverSuccessResult<number | null, never>
}

export { useTokenPrice }
