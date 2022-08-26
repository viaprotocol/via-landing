type TWalletItem = {
  logo: string
  name: string
}

type TWalletListProps = {
  items: TWalletItem[]
  delay?: number
  speed?: number
}

export type { TWalletItem, TWalletListProps }
