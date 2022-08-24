import cx from 'classnames'
import type { PropsWithChildren } from 'react'

import type { TTileGroupProps, TTileProps } from './types'

function Tile({ slots = 1, className, children }: PropsWithChildren<TTileProps>) {

  return (
    <div className={cx(
      className,
      'col-span-1 min-h-[180px] md:min-h-[320px] bg-white/5 rounded-2xl p-10',
      ({
        1: `md:col-span-1`,
        2: `md:col-span-2`,
        3: `md:col-span-3`,
      }[slots])
    )}>
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
