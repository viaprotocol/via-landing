import cx from 'classnames'
import type { PropsWithChildren } from 'react'

import type { TTileProps } from './types'

function Tile({ className }: PropsWithChildren<TTileProps>) {
  return (
    <div className={cx(className)}>Tile</div>
  )
}

export { Tile }
