import type { TSimpleNetwork } from '@/data/networks'
import Image from 'next/image'
import type { CSSProperties } from 'react'

function EcoBlock({ network }: { network: TSimpleNetwork | null }) {
  const DELAY = Math.floor(Math.random() * (9 - 3 + 1) + 3)
  return network ? (
    <Image src={network.logoURI} alt={network.name} width={80} height={80} className="animate-opacityInfinity rounded-[24px]" style={{
      '--loading-time': `${DELAY}s`
    } as CSSProperties} />
  ) : (
      <div className="h-[80px] w-[80px] animate-opacityInfinity rounded-[24px] bg-white/10" style={{
        '--loading-time': `${DELAY}s`
      } as CSSProperties} />
  )
}

export { EcoBlock }
