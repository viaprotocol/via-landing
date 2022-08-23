import type { RouteViewEnum } from '..'

import type { TRangingRoute, TRouteActionWithMeta, TSecurity, TSecurityScoreType } from '../types'

type TTotalFeeProps = {
  totalGasUSD: string
  actions: TRouteActionWithMeta[]
}

type TActionFeeProps = {
  action: TRouteActionWithMeta
  isNeedGas?: boolean
  transactionNo: number
  getHeader: (transactionNo: number, action: TRouteActionWithMeta) => JSX.Element | string
}

type TTitleProps = {
  type?: RouteViewEnum
  symbol: string
  meta: TRangingRoute['meta']
  isMultiplyTransaction?: boolean
}

type TNetValueInfoProps = {
  symbol: string
  meta: TRangingRoute['meta']
  isMultiplyTransaction?: boolean
}

enum InfoPanelTypeEnum {
  receive = 'receive',
  loss = 'loss'
}

type TInfoPanelProps = {
  type: InfoPanelTypeEnum
  tokenInfo?: string
  usd: string | null
}

type TSecurityIconType = {
  score: TSecurityScoreType
}

type TRiskInfoProps = {
  security: TSecurity
  bridgeName: string
}

type TSuccessRateBody = {
  progress: string
  limit?: string
}

type TSuccessRateIconProps = TSuccessRateBody

type TTransactionsRateProps = TSuccessRateBody & { bridgeName: string }

export { InfoPanelTypeEnum }
export type {
  TTotalFeeProps,
  TActionFeeProps,
  TTitleProps,
  TNetValueInfoProps,
  TInfoPanelProps,
  TSecurityIconType,
  TRiskInfoProps,
  TSuccessRateIconProps,
  TTransactionsRateProps
}
