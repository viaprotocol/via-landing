import cx from 'classnames'
import type { PropsWithChildren } from 'react'

import type { TTileGroupProps, TTileProps } from './types'

function Tile({ className, children }: PropsWithChildren<TTileProps>) {
  return (
    <div className={cx(className, 'min-h-[180px] md:min-h-[320px] bg-white/5 rounded-2xl p-10')}>
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
