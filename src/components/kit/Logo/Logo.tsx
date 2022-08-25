import cx from 'classnames'
import type { FC } from 'react'
import { memo } from 'react'

import { Image } from '../Image/Image'

import type { TLogoProps } from './types'

const DEFAULT_WIDTH = 32
const DEFAULT_HEIGHT = 32

const Logo: FC<TLogoProps> = memo(
  ({ className, imageClassName = '', src, alt, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT, style }: TLogoProps) => {
    return (
      // Need to fix using styles
      <div className={cx(className, 'rounded-2xl overflow-hidden')} style={{ width, height }} title={alt}>
        <Image src={src} alt={alt} style={style} className={cx('h-full w-full', imageClassName)} />
      </div>
    )
  }
)

Logo.displayName = 'Logo'

export { Logo }
