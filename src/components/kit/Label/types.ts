import type { COLORS } from './config'

type TLabelProps = {
  testId?: string
  isActive?: boolean
  type?: 'regular' | 'bold'
  activeColor?: keyof typeof COLORS
  alt?: string
}

export type { TLabelProps }
