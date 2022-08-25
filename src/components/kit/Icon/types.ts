import type { ICONS } from './config'

type TIconConfig = {
  url: string
  baseline: number
}

type TIconList = keyof typeof ICONS

type TIconProps = {
  className?: string
  icon: TIconList
  width?: number
  height?: number
}

export type { TIconConfig, TIconProps, TIconList }
