import type { TNetwork } from '@/views/IndexPage/Demo/components/Routes'

type TRouteFetchStatus = {
  status: RouteFetchStatusEnum
  analytics?: {
    FromNetwork: string
    ToNetwork: string
    FromToken: string
    ToToken: string
  }
  StartTimestampInSeconds?: number | null
}

type TRouteDuration = {
  routeId: string
  duration: string
  providerId: string
}

enum RouteFetchStatusEnum {
  null = 'null',
  loading = 'loading',
  finished = 'finished'
}

type TChainInfo = {
  gasTokenPrice: number | null
  gas: string
  wei: number
  priceUSD: string
  network?: TNetwork
}

type TChainMap = {
  [chainId: number]: TChainInfo
}

type TFormatActionOpts = {
  chainMap: TChainMap
}

type TFormatRouteOpts = {
  startTime: number
  chainMap: TChainMap
  toTokenPrice: number | null
}

export type {
  TRouteFetchStatus,
  TRouteDuration,
  TFormatRouteOpts,
  TFormatActionOpts,
  TChainInfo,
  TChainMap
}
export { RouteFetchStatusEnum }
