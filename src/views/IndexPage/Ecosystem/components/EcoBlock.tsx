import { Image } from '@/components/kit'
import type { CSSProperties } from 'react'
import { useMemo } from 'react'
import type { TBlock } from '../types'
import { getRandomNumber } from '../utils'
import cx from 'classnames'

function EcoBlock({ network }: { network: TBlock }) {
  const DELAY = getRandomNumber(4, 9, false)
  const isShowEmpty = getRandomNumber(0, 2, true)
  const specifyEmptyBlockColor = useMemo(() => {
    if (isShowEmpty === 1) {
      return 'bg-transparent'
    } else if (isShowEmpty === 2) {
      return 'bg-gray/10'
    } else {
      return 'bg-white/10'
    }
  }, [])
  return network ? (
    <Image title={network.name} src={network.logoURI} alt={network.name} width={80} height={80} className="animate-opacityInfinity rounded-[24px] opacity-0 lg:h-[120px] lg:w-[120px]" style={{
      '--loading-time': `${DELAY}s`
    } as CSSProperties} />
  ) : (
      <div className={cx('h-[80px] w-[80px] animate-opacityInfinity rounded-[24px] opacity-0 lg:h-[120px] lg:w-[120px]', specifyEmptyBlockColor)} style={{
        '--loading-time': `${DELAY}s`
      } as CSSProperties} />
  )
}

export { EcoBlock }
