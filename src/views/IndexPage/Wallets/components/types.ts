type TWalletItem = {
  logo: string
  name: string
}

type TWalletListProps = {
  items: TWalletItem[]
  delay?: number
  speed?: number
  direction?: 'left' | 'right'
}

export type { TWalletItem, TWalletListProps }
