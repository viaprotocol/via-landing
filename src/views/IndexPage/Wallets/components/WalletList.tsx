import type { TWalletListProps } from '@/views/IndexPage/Wallets/components/types'
import Image from 'next/image'
import { memo } from 'react'
import Marquee from 'react-fast-marquee'

const WalletList = memo(({ items }: TWalletListProps) => {
  return (
        <Marquee gradient={false}>
                <div className="flex items-center gap-6 md:gap-10">
                    {items.map((wallet) => {
                      return (
                            <Image src={wallet.logo} alt={wallet.name} width={86} height={86} className="md:h-40 md:w-40" />
                      )
                    })}
                </div>
        </Marquee>
  )
})

export { WalletList }
