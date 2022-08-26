import { Section } from '@/components/layout'
import wallets from '@/data/wallets.json'
import dynamic from 'next/dynamic'
import type { TWalletListProps } from '@/views/IndexPage/Wallets/components/types'
import { useMemo } from 'react'
import styles from './Wallets.module.scss'

const middleIndex = Math.ceil(wallets.items.length / 2)

const WalletList = dynamic<TWalletListProps>(() => import('./components/WalletList').then(mod => mod.WalletList), {
  ssr: false
})

function Wallets() {
  const firstHalfWallets = useMemo(() => [...wallets.items].splice(0, middleIndex), [])
  const secondHalfWallets = useMemo(() => [...wallets.items].splice(-middleIndex), [])

  return (
      <Section>
        <h2 className={styles.title}>Your favorite wallets</h2>
        <p className={styles.description}>All major wallets with the ability to keep connected all at the same time</p>

                  <WalletList items={firstHalfWallets}></WalletList>
                  <WalletList items={secondHalfWallets} speed={15}></WalletList>

      </Section>
  )
}

export { Wallets }
