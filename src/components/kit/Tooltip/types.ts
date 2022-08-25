import type { ReactChild } from 'react'
import type { Config } from 'react-popper-tooltip'

type TTooltipProps = {
  content: ReactChild
  isAnimated?: boolean
  isVisible?: boolean
  isDelayed?: boolean
  width?: 'inherit' | 'big'
  interactive?: boolean
  placement?: Config['placement']
  theme?: 'regular' | 'transparent'
}

type TAnimationProps = {
  isAnimated: boolean
  isVisible: boolean
}

export type { TTooltipProps, TAnimationProps }
