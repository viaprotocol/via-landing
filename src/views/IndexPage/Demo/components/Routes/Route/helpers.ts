import type { TNetwork } from '../types'

const fruitsPlaceholders = [
  '🍑',
  '🍏',
  '🍎',
  '🍐',
  '🍊',
  '🍋',
  '🍌',
  '🍉',
  '🍇',
  '🥥',
  '🍍',
  '🥭',
  '🍑',
  '🍒',
  '🫐',
  '🍈',
  '🍓',
  '🥝'
]

const getNotAvailablePriceText = (length: number) =>
  Array(length)
    .fill(null)
    .map(() => fruitsPlaceholders[Math.floor(Math.random() * fruitsPlaceholders.length)])
    .join('')

const getGasHref = (fromNetwork: TNetwork, toNetwork: TNetwork) =>
  `/${fromNetwork.name}/${fromNetwork.currencySymbol}/${toNetwork.name}/${toNetwork.currencySymbol}`

const getTokenWithSymbol = (token: string, currencySymbol: string) => `${token} ${currencySymbol}`

export { fruitsPlaceholders, getNotAvailablePriceText, getGasHref, getTokenWithSymbol }
