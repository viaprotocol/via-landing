import cx from 'classnames'
import type { PropsWithChildren } from 'react'

import type { TTileGroupProps, TTileProps } from './types'

function Tile({ slots = 1, className, title, description, children }: PropsWithChildren<TTileProps>) {
  const isOnlyTitle = title && !description

  return (
    <div className={cx(
      className,
      'flex flex-col col-span-1 min-h-[180px] md:min-h-[320px] bg-white/5 rounded-2xl p-10',
      (isOnlyTitle || slots === 2) && 'items-center justify-center',
      ({
        1: `md:col-span-1`,
        2: `md:col-span-2`,
        3: `md:col-span-3`,
      }[slots])
    )}>
      {title &&
        <h3 className={cx(
          'font-semibold',
          !description ? 'text-[48px]' : 'text-[18px]',
          description && slots === 2 ? 'mb-3 md:mb-2' : 'mb-3'
        )}>
          {title}
        </h3>
      }
      {description &&
        <p>{description}</p>
      }
      {children}
    </div>
  )
}

function TileGroup({ className, children }: PropsWithChildren<TTileGroupProps>) {
  return (
    <div className={cx(className, 'grid grid-cols-1 md:grid-cols-3 gap-4')}>
      {children}
    </div>
  )
}

Tile.Group = TileGroup

export { Tile }
