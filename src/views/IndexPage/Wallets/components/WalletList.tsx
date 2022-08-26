import type { TWalletListProps } from '@/views/IndexPage/Wallets/components/types'
import Image from 'next/image'
import { memo } from 'react'
import Marquee from 'react-fast-marquee'

const WalletList = memo(({ items, delay = 0, speed = 20 }: TWalletListProps) => {
  return (
        <Marquee gradient={false} delay={delay} speed={speed} style={{ marginBlockEnd: '0' }}>
                <div className="mb-7 flex items-center gap-6 pl-6 md:mb-10 md:gap-10 md:pl-10">
                    {items.map((wallet) => {
                      return <Image key={wallet.name} src={wallet.logo} alt={wallet.name} width={86} height={86} className="md:h-40 md:w-40" />
                    })}
                </div>
        </Marquee>
  )
})

WalletList.displayName = 'WalletList'

export { WalletList }
