import { classNames } from 'classnames';
import type { MouseEventHandler } from 'react'

export type TToken = {
  chainId: number
  address: string
  decimals: number
  logoURI: string
  name: string
  symbol: string
  color: string | null
}

export type TRouteStepTool = {
  name: string
  logoURI: string
  estimatedTime: number
  successRate: string
}

export type TRouteWithMeta = {
  meta: {
    // toTokenAmount with all loses
    calculatedToTokenAmountUSD: string // sort by this key
    totalGasUSD: string
    providerFeeUSD: string
    gasActionApproveUSD: string
    gasActionUSD: string
    // We are using to make deduplicate sort
    toolList: string
    searchDuration: string
    isNeedGas: boolean
  }
  calculatedSteps: TRouteStep[]
} & TRoute<TRouteActionWithMeta>

export type TRoute<T extends TRouteAction = TRouteAction> = {
  active: boolean
  fee: TFee
  actions: T[]
  toTokenAmount: string
  routeId: string
  security?: TSecurity
  extra: {
    routePath: string | null
  }
}

export type TRouteActionWithMeta = {
  meta: {
    network?: TNetwork
    gasAction: TTokenPrice
    gasActionApprove: TTokenPrice
    providerFee: TTokenPrice
    totalGas: TTokenPrice
    isNeedApprove: boolean
    isNeedGas: boolean
  }
} & TRouteAction

export type TRouteAction = {
  uuid: string
  additionalProviderFee: {
    amount: number
    token: TToken
  } | null
  allowanceValue: string
  provider: number
  contractAddress: string
  extra: any
  fee: TFee
  fromToken: TToken
  toToken: TToken
  fromTokenAmount: string
  toTokenAmount: string
  steps: TRouteStep[]
  txHash: string | null
  gasLimit: string | null
  gasUsed: string | null
  gasUsd: string | null
}

export type TFee = {
  gasActionUnits: number | null
  gasActionApproveUnits: number | null
  feeUsd: null | number
  gas: null | number
  gasFeeUsd: null | number
  slippagePerc: null | number
  totalLossUsd: null | number
  time: null | string
}

export type TNetwork = {
  chainId: number
  txPrefix: string
  key: string
  logoURI: string
  explorerUrl: string
  name: string
  color?: string
  currencySymbol: string
  currencyDecimals: number
}

export type TSecurityScoreType = 'HIGH_RISK' | 'SAFE_ROUTE' | 'POTENTIAL_RISK'

export type TSecurityCentralizationType = 'centralized' | 'semicentralized' | 'decentralized'

export type TTokenPrice = {
  usd: string
  wei: number
  token: string
}

export type TSecurity = {
  score: TSecurityScoreType
  nAudits: number
  hasCentralizedRelayers: boolean | null
  centralizationType: TSecurityCentralizationType
}

export type TRouteStep = {
  type: string
  tool: TRouteStepTool
  fromToken: TToken
  toToken: TToken
  fee: TFee
  fromTokenAmount: string
  toTokenAmount: string
}

export type TRangingRoute = TRouteWithMeta & {
  meta: {
    isBest: boolean
    isBestTime: boolean
    estimateTime: number
    price: {
      tokenWorth: string | null
      priceUSD: string | null
      loss: number
    }
  }
}

export enum RoutePriorityEnum {
  Smart = 'Smart',
  Fastest = 'Fastest',
  Safest = 'Safest',
  MaxReturn = 'MaxReturn'
}

type TRoutesProps = {
  className?: string
}

enum RouteViewEnum {
  regular = 'regular',
  smart = 'smart'
}

type TRouteProps = {
  sectionStyles?: string
  index?: number
  showGas?: boolean
  route: TRangingRoute
  isCollapsible?: boolean
  onClick?: VoidFunction
  expanded?: boolean
  type?: RouteViewEnum
}

type TExchangeInfoProps = {
  tool: TRouteStepTool
  fromToken: TToken
  fromTokenAmount: string
  toToken: TToken
  toTokenAmount: string
  type: string
  isDisabled?: boolean
}

type TExchangeInfoStandProps = {
  token: TToken
  tokenAmount: string
}

type TRouteSkeletonProps = {
  active?: boolean
}

enum CollapseEnum {
  default = 'default',
  collapse = 'collapse',
  expand = 'expand'
}

export { CollapseEnum, RouteViewEnum }
export type { TExchangeInfoProps, TExchangeInfoStandProps, TRouteProps, TRouteSkeletonProps, TRoutesProps }
