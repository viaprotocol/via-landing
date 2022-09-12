export type TSimpleNetwork = {
  name: string
  logoURI: string
}

const networks: TSimpleNetwork[] = [
  'Arbitrum',
  'Aurora',
  'Bitcoin',
  'BitcoinCash',
  'Cosmos',
  'Fantom',
  'Harmony',
  'Hoirizon',
  'Huobi',
  'Litecoin',
  'Moonbeam',
  'Moonriver',
  'OEC',
  'Optimism',
  'Osmosis',
  'Polygon',
  'Ton',
  'astar',
  'avalance',
  'boba',
  'bsc',
  'celo',
  'cronos',
  'cube',
  'ethereum',
  'fuse',
  'gnosis',
  'juno',
  'kcc',
  'sifchain',
  'solana',
  'telos',
  'zkSync'
].map((name) => {
  return {
    name,
    logoURI: `/images/networks/${name}.svg`
  }
})

export { networks }
