import cx from 'classnames'
import type { PropsWithChildren } from 'react'

import { COLORS } from './config'
import type { TLabelProps } from './types'

const Label = function Label({
  children,
  activeColor = 'green',
  type = 'regular',
  isActive = false,
  testId,
  alt
}: PropsWithChildren<TLabelProps>) {
  const labelActiveStyles = COLORS[activeColor]
  const isBold = type === 'bold'

  return (
    <div
      className={cx(
        'flex items-center h-6 rounded-lg px-1.5 py-1 gap-1 text-13 leading-none whitespace-nowrap',
        isBold && 'font-bold',
        isActive && labelActiveStyles,
        isActive
          ? 'text-white dark:text-coal'
          : 'text-gray bg-white border border-[#11121529] dark:border-[#ffffff14] dark:text-[#ffffff66] dark:bg-[#111215]'
      )}
      title={alt}
      {...(testId && { 'data-testid': testId })}
    >
      {children}
    </div>
  )
}

export { Label }
