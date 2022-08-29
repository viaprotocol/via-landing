import type { TWalletListProps } from '@/views/IndexPage/Wallets/components/types'
import Image from 'next/image'
import { memo } from 'react'
import Marquee from 'react-fast-marquee'

const WalletList = memo(({ items, delay = 0, speed = 20, direction = 'right' }: TWalletListProps) => {
  return (
    <Marquee gradient={false} delay={delay} speed={speed} direction={direction}>
      <div className="mb-7 flex items-center md:mb-9">
        {items.map((wallet) => {
          return (
            <div className="mx-3.5 md:mx-5" key={wallet.name}>
              <Image src={wallet.logo} alt={wallet.name} width={86} height={86} className="md:h-40 md:w-40" />
            </div>
          )
        })}
      </div>
    </Marquee>
  )
})

WalletList.displayName = 'WalletList'

export { WalletList }
