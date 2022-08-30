import cx from 'classnames'
import type { PropsWithChildren } from 'react'

import { ICONS } from './config'
import type { TIconProps } from './types'

const ICONS_NAME_LIST = Object.keys(ICONS) as Array<keyof typeof ICONS>

const DEFAULT_WIDTH = 16
const DEFAULT_HEIGHT = 16

function Icon({
  className,
  icon,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT
}: PropsWithChildren<TIconProps>) {
  const IconComponent = ICONS[icon].Component
  return <IconComponent style={{ width, height }} className={cx(className)} />
}

export { Icon, ICONS, ICONS_NAME_LIST }
