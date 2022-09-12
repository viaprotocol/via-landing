import { useMedia } from '@/hooks'
import type { TWalletListProps } from '@/views/IndexPage/Wallets/components/types'
import Image from 'next/image'
import { memo } from 'react'
import Marquee from 'react-fast-marquee'
import styles from '../Wallets.module.scss'

const WalletList = memo(({ items, delay = 0, speed = 20, direction = 'right' }: TWalletListProps) => {
  const { isLarge } = useMedia()
  return (
    <Marquee gradient={false} delay={delay} speed={speed} direction={direction} className={styles.marquee}>
      <div className="mb-7 flex items-center md:mb-10">
        {items.map((wallet) => {
          return (
            <div className="mx-3.5 h-[86px] w-[86px] md:mx-5 md:h-[120px] md:w-[120px]" key={wallet.name}>
              <Image src={wallet.logo} alt={wallet.name} width={isLarge ? 120 : 86} height={isLarge ? 120 : 86} />
            </div>
          )
        })}
      </div>
    </Marquee>
  )
})

WalletList.displayName = 'WalletList'

export { WalletList }
