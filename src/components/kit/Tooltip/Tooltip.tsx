import cx from 'classnames'
import type { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import { usePopperTooltip } from 'react-popper-tooltip'
import { CSSTransition } from 'react-transition-group'

import { TOOLTIP_DELAY } from './constants'
import type { TAnimationProps, TTooltipProps } from './types'

import 'react-popper-tooltip/dist/styles.css'

const TooltipWrapper = function Animation({ children, isAnimated, isVisible }: PropsWithChildren<TAnimationProps>) {
  if (isAnimated) {
    return (
      <CSSTransition
        in={isVisible}
        timeout={300}
        classNames={{
          appearActive: 'opacity-100',
          enterDone: 'opacity-100'
        }}
      >
        {children}
      </CSSTransition>
    )
  }

  if (isVisible) {
    return <>{children}</>
  }

  return null
}

const Tooltip =
  ({
    children,
    isVisible,
    content,
    width = 'inherit',
    interactive = false,
    isAnimated = true,
    isDelayed = true,
    placement = 'top-start',
    theme = 'regular'
  }: PropsWithChildren<TTooltipProps>) => {
    const { visible, setTriggerRef, setTooltipRef, getTooltipProps } = usePopperTooltip({
      trigger: 'hover',
      visible: isVisible,
      interactive,
      delayShow: isDelayed ? TOOLTIP_DELAY : 0,
      placement,
      offset: [0, 0]
    })

    const rootElement = document.body

    return (
      <>
        <span ref={setTriggerRef}>{children}</span>
        {createPortal(
          <TooltipWrapper isAnimated={isAnimated} isVisible={visible}>
            <div
              {...getTooltipProps({
                ref: setTooltipRef,
                className: cx(
                  'text-inherit shadow-none !py-1 !bg-transparent !border-none',
                  isAnimated
                    ? [visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none']
                    : [visible ? '!flex' : '!hidden']
                )
              })}
            >
              <div
                className={cx(
                  'px-2 py-2 rounded-lg border min-w-max',
                  width === 'big' && 'max-w-[xs]',
                  theme === 'regular' &&
                    'bg-white text-coal border-coal-80 dark:bg-coal dark:border-white-80 dark:text-white-800 text-xs shadow-lg',
                  theme === 'transparent' && 'bg-transparent border-none'
                )}
              >
                {content}
              </div>
            </div>
          </TooltipWrapper>,
          rootElement
        )}
      </>
    )
  }

export { Tooltip }
