type TGasPriceChainResponse = {
  gwei: number
  usd: number
}

type TGasPriceResponse = {
  [chainId: number]: TGasPriceChainResponse
}

type TBalancesResponse = {
  balances: TExplorerBalances
}

export type TExplorerToken = {
  balance: number
  balanceUsd: number
  USD?: number
  decimals: number
  logo: string
  name: string
  priceUsd: number
  symbol: string
  thumbnail?: string
  address: string
}

export type TExplorerBalance = {
  [chainId: number]: TExplorerToken
}

export type TExplorerBalanceResponse = {
  balances: TExplorerBalance
}

export type TExplorerBalances = {
  [index: number]: TExplorerToken[]
}

export type { TGasPriceResponse, TBalancesResponse, TGasPriceChainResponse }
