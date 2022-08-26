import { Section } from '@/components/layout'
import { items } from '@/data/wallets.json'
import dynamic from 'next/dynamic'
import type { TWalletListProps } from '@/views/IndexPage/Wallets/components/types'
import { useMemo } from 'react'

const middleIndex = Math.ceil(items.length / 2)

const WalletList = dynamic<TWalletListProps>(() => import('./components/WalletList').then(mod => mod.WalletList), {
  ssr: false
})

function Wallets() {
  const firstHalfWallets = useMemo(() => [...items].splice(0, middleIndex), [])
  const secondHalfWallets = useMemo(() => [...items].splice(-middleIndex), [])

  return (
      <Section>
        <h2>Your favorite wallets</h2>
        <p>All major wallets with the ability to keep connected all at the same time</p>

                  <WalletList items={firstHalfWallets}></WalletList>
                  <WalletList items={secondHalfWallets}></WalletList>

      </Section>
  )
}

export { Wallets }
