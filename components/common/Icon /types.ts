import type { ICONS } from './config'

interface TIconConfig {
  url: string
  baseline: number
}

type TIconList = keyof typeof ICONS

interface TIconProps {
  className?: string
  icon: TIconList
  width?: number
  height?: number
}

export type { TIconConfig, TIconProps, TIconList }
