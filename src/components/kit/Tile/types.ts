type TTileProps = {
  className?: string
  ySlots?: 1 | 2
  slots?: 1 | 2 | 3
  icon?: any
  mobileIcon?: any
  title?: string
  description?: string
  isMobileColumned?: boolean
  isDesktopReversed?: boolean
}

type TTileGroupProps = {
  className?: string
}

export type { TTileProps, TTileGroupProps }
