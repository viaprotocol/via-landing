/* eslint-disable @typescript-eslint/no-use-before-define */
import type { TNetwork } from './types'

type TFormatTimeOpts = {
  ceil?: boolean
}

/**
 * It takes a chainId and returns the network object that has the same chainId
 * @param {number} chainId - The chain ID of the network you want to connect to.
 * @returns The network object that matches the chainId
 */
export const getNetworkByChainId = (chainId: number) => {
  const network = networks.find(network => network.chainId === chainId)
  if (!network) {
    throw new Error(`Network with chainId ${chainId} not found`)
  }

  return network
}

/**
 * It takes a number of seconds and returns a string of the format `hrs`h `mins`m `secs`s
 * @param {number} time - The time in seconds to format.
 * @returns A string
 */
const formatTime = (time: number, opts: TFormatTimeOpts = { ceil: false }): string => {
  const hrs = Math.floor(time / 3600)
  let mins = Math.floor((time % 3600) / 60)
  let secs = Math.floor(time) % 60

  if (opts.ceil) {
    if (secs > 0 && mins > 0) {
      mins += 1
      secs = 0
    }
  }

  const parts: string[] = []
  if (hrs > 0) {
    parts.push(`${hrs}h`)
  }

  if (mins > 0) {
    parts.push(`${mins}m`)
  }

  if (hrs === 0 && !(mins > 0 && secs === 0)) {
    parts.push(`${secs}s`)
  }

  return parts.join(' ')
}

export { formatTime }

const getNumberWithOrdinal = (n: number) => {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}

export { getNumberWithOrdinal }

const getSmartRoundedNumber = (value: number): string => {
  if (typeof value !== 'number') {
    throw new TypeError('getSmartRoundedNumber: value must be a number')
  }

  if (value < 0.01) {
    return '<0.01'
  }

  if (value < 0.1) {
    return value.toFixed(2)
  }

  if (value < 0.95) {
    return value.toFixed(1)
  }

  return Math.round(value).toFixed()
}

export { getSmartRoundedNumber }

/**
 * It takes a number or string and returns a number
 * @param {number | string} am - The amount to convert.
 * @param {number | null} decimal - The number of decimal places the token has.
 * @returns A function that takes two arguments, am and decimal, and returns the amount divided by 10
 * to the power of decimal.
 */
const fromDecimal = (am: number | string, decimal: number | null) => {
  const amount = typeof am === 'string' ? Number(am) : am
  return decimal ? amount / 10 ** decimal : amount
}

export { fromDecimal }

const networks: TNetwork[] = [
  {
    name: 'Polygon',
    key: 'POL',
    chainId: 137,
    logoURI: 'https://webill.sfo3.digitaloceanspaces.com/networks/Polygon.svg',
    explorerUrl: 'https://polygonscan.com/',
    txPrefix: 'tx',
    currencySymbol: 'MATIC',
    currencyDecimals: 18,
    color: '#8247E5'
  },
  {
    name: 'Arbitrum',
    key: 'ARB',
    chainId: 42161,
    logoURI: 'https://webill.sfo3.digitaloceanspaces.com/networks/Arbitrum.svg',
    explorerUrl: 'https://arbiscan.io/',
    txPrefix: 'tx',
    currencySymbol: 'ETH',
    currencyDecimals: 18,
    color: '#2d374b'
  },
  {
    name: 'Optimism',
    key: 'OPT',
    chainId: 10,
    logoURI: 'https://webill.sfo3.digitaloceanspaces.com/networks/Optimism.svg',
    explorerUrl: 'https://optimistic.etherscan.io/',
    txPrefix: 'tx',
    currencySymbol: 'ETH',
    currencyDecimals: 18,
    color: '#FF0420'
  },
  {
    name: 'Ethereum',
    key: 'ETH',
    chainId: 1,
    logoURI: 'https://webill.sfo3.digitaloceanspaces.com/networks/Ethereum.svg',
    explorerUrl: 'https://etherscan.io/',
    txPrefix: 'tx',
    currencySymbol: 'ETH',
    currencyDecimals: 18,
    color: '#6179EE'
  },
  {
    name: 'BSC',
    key: 'BSC',
    chainId: 56,
    logoURI: 'https://webill.sfo3.digitaloceanspaces.com/networks/BSC.svg',
    explorerUrl: 'https://bscscan.com/',
    txPrefix: 'tx',
    currencySymbol: 'BNB',
    currencyDecimals: 18,
    color: '#F3BA2F'
  },
  {
    name: 'Avalanche',
    key: 'AVA',
    chainId: 43114,
    logoURI: 'https://webill.sfo3.digitaloceanspaces.com/networks/Avalanche.svg',
    explorerUrl: 'https://snowtrace.io/',
    txPrefix: 'tx',
    currencySymbol: 'AVAX',
    currencyDecimals: 18,
    color: '#E84142'
  },
  {
    name: 'Fantom',
    key: 'FTM',
    chainId: 250,
    logoURI: 'https://webill.sfo3.digitaloceanspaces.com/networks/FTM.svg',
    explorerUrl: 'https://ftmscan.com/',
    txPrefix: 'tx',
    currencySymbol: 'FTM',
    currencyDecimals: 18,
    color: '#13B5EC'
  },
  {
    name: 'Gnosis',
    key: 'DAI',
    chainId: 100,
    logoURI: 'https://webill.sfo3.digitaloceanspaces.com/networks/Gnosis.svg',
    explorerUrl: 'https://blockscout.com/xdai/mainnet/',
    txPrefix: 'tx',
    currencySymbol: 'xDAI',
    currencyDecimals: 18,
    color: '#037a5b'
  },
  {
    name: 'Solana',
    key: 'SOL',
    chainId: -1,
    logoURI: 'https://webill.sfo3.digitaloceanspaces.com/networks/Solana.svg',
    explorerUrl: 'https://solscan.io/',
    txPrefix: 'tx',
    currencySymbol: 'SOL',
    currencyDecimals: 9,
    color: '#000000'
  },
  {
    name: 'Moonbeam',
    key: 'GLMR',
    chainId: 1284,
    logoURI: 'https://cdn.via.exchange/networks/Moonbeam.svg',
    explorerUrl: 'https://moonscan.io/',
    txPrefix: 'tx',
    currencySymbol: 'GLMR',
    currencyDecimals: 18,
    color: '#111215'
  },
  {
    name: 'Aurora',
    key: 'ETH',
    chainId: 1313161554,
    logoURI: 'https://webill.sfo3.digitaloceanspaces.com/networks/Aurora.svg',
    explorerUrl: 'https://aurorascan.dev/',
    txPrefix: 'tx',
    currencySymbol: 'ETH',
    currencyDecimals: 18,
    color: '#79CF55'
  },
  {
    name: 'Moonriver',
    key: 'MOR',
    chainId: 1285,
    logoURI: 'https://webill.sfo3.digitaloceanspaces.com/networks/Moonriver.svg',
    explorerUrl: 'https://moonriver.moonscan.io/',
    txPrefix: 'tx',
    currencySymbol: 'MOVR',
    currencyDecimals: 18,
    color: '#060023'
  },
  {
    name: 'Harmony',
    key: 'ONE',
    chainId: 1666600000,
    logoURI: 'https://webill.sfo3.digitaloceanspaces.com/networks/Harmony.svg',
    explorerUrl: 'https://explorer.harmony.one/',
    txPrefix: 'tx',
    currencySymbol: 'ONE',
    currencyDecimals: 18,
    color: '#16BEE0'
  },
  {
    name: 'Boba',
    key: 'ETH',
    chainId: 288,
    logoURI: 'https://webill.sfo3.digitaloceanspaces.com/networks/Boba.svg',
    explorerUrl: 'https://bobascan.com/',
    txPrefix: 'tx',
    currencySymbol: 'ETH',
    currencyDecimals: 18,
    color: '#79CF55'
  },
  {
    name: 'Cronos',
    key: 'CRO',
    chainId: 25,
    logoURI: 'https://cdn.via.exchange/networks/Cronos.svg',
    explorerUrl: 'https://cronoscan.com/',
    txPrefix: 'tx',
    currencySymbol: 'CRO',
    currencyDecimals: 18,
    color: '#111215'
  },
  {
    name: 'Osmosis',
    key: 'OSMO',
    chainId: -101,
    logoURI: 'https://cdn.via.exchange/networks/Osmosis.svg',
    explorerUrl: 'https://atomscan.com/osmosis/',
    txPrefix: 'transactions',
    currencySymbol: 'OSMO',
    currencyDecimals: 6,
    color: '#79CF55'
  },
  {
    name: 'Celo',
    key: 'CELO',
    chainId: 42220,
    logoURI: 'https://cdn.via.exchange/networks/Celo.svg',
    explorerUrl: 'https://explorer.celo.org/',
    txPrefix: 'tx',
    currencySymbol: 'CELO',
    currencyDecimals: 18,
    color: '#79CF55'
  },
  {
    name: 'Cosmos',
    key: 'ATOM',
    chainId: -100,
    logoURI: 'https://cdn.via.exchange/networks/Cosmos.svg',
    explorerUrl: 'https://atomscan.com/',
    txPrefix: 'transactions',
    currencySymbol: 'ATOM',
    currencyDecimals: 6,
    color: '#79CF55'
  },
  {
    name: 'Astar',
    key: 'ASTR',
    chainId: 592,
    logoURI: 'https://cdn.via.exchange/networks/Astar.svg',
    explorerUrl: 'https://blockscout.com/astar/',
    txPrefix: 'tx',
    currencySymbol: 'ASTR',
    currencyDecimals: 18,
    color: '#13B5EC'
  },
  {
    name: 'Fuse',
    key: 'FUSE',
    chainId: 122,
    logoURI: 'https://cdn.via.exchange/networks/Fuse.svg',
    explorerUrl: 'https://explorer.fuse.io/',
    txPrefix: 'tx',
    currencySymbol: 'FUSE',
    currencyDecimals: 18,
    color: '#79CF55'
  },
  /* {
    name: 'HECO',
    key: 'HEC',
    chainId: 128,
    logoURI: 'https://webill.sfo3.digitaloceanspaces.com/networks/Huobi.svg',
    explorerUrl: 'https://hecoinfo.com/',
    currencySymbol: 'HT',
    currencyDecimals: 18,
    color: '#EDF0F4'
  },
  {
    name: 'OEC',
    key: 'OKT',
    chainId: 66,
    logoURI: 'https://webill.sfo3.digitaloceanspaces.com/networks/Okex.svg',
    explorerUrl: 'https://www.oklink.com/okexchain/',
    currencySymbol: 'OKT',
    currencyDecimals: 18,
    color: '#7ABDF7'
  },
  {
    name: 'Sifchain',
    key: 'ROWAN',
    chainId: -102,
    logoURI: 'https://cdn.via.exchange/networks/Sifchain.svg',
    explorerUrl: 'https://atomscan.com/sifchain/',
    txPrefix: 'transactions',
    currencySymbol: 'ROWAN',
    currencyDecimals: 18,
    color: '#79CF55'
  }, */
  {
    name: 'Bitcoin',
    key: 'BTC',
    chainId: -200,
    logoURI: 'https://cdn.via.exchange/networks/Bitcoin.svg',
    explorerUrl: 'https://www.blockchain.com/btc/',
    txPrefix: 'tx',
    currencySymbol: 'BTC',
    currencyDecimals: 8,
    color: '#F6931A'
  },
  {
    name: 'Litecoin',
    key: 'LTC',
    chainId: -201,
    logoURI: 'https://cdn.via.exchange/networks/Litecoin.svg',
    explorerUrl: 'https://blockchair.com/litecoin/',
    txPrefix: 'transaction',
    currencySymbol: 'LTC',
    currencyDecimals: 8,
    color: '#68e3f6'
  },
  {
    name: 'Bitcoin Cash',
    key: 'BCH',
    chainId: -202,
    logoURI: 'https://cdn.via.exchange/networks/BitcoinCash.svg',
    explorerUrl: 'https://www.blockchain.com/bch/',
    txPrefix: 'tx',
    currencySymbol: 'BCH',
    currencyDecimals: 8,
    color: '#7ad832'
  },
  {
    name: 'KCC',
    key: 'KCC',
    chainId: 321,
    logoURI: 'https://cdn.via.exchange/networks/Kcc.svg',
    explorerUrl: 'https://scan.kcc.io/',
    txPrefix: 'tx',
    currencySymbol: 'KCS',
    currencyDecimals: 18,
    color: '#79CF55'
  },
  {
    name: 'Cube',
    key: 'CUBE',
    chainId: 1818,
    logoURI: 'https://cdn.via.exchange/networks/Cube.svg',
    explorerUrl: 'https://www.cubescan.network/en-us/',
    txPrefix: 'tx',
    currencySymbol: 'CUBE',
    currencyDecimals: 18,
    color: '#418F8F'
  }
]

export { networks }
