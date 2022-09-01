type TTileProps = {
  className?: string
  slots?: 1 | 2 | 3
  icon?: any
  mobileIcon?: any
  title?: string
  description?: string
  isMobileColumned?: boolean
  isDesktopReversed?: boolean
  disableEffect?: boolean
}

type TTileGroupProps = {
  className?: string
}

export type { TTileProps, TTileGroupProps }
