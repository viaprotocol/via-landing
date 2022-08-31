import cx from 'classnames'
import type { PropsWithChildren } from 'react'
import { useState } from 'react'

import type { TTileGroupProps, TTileProps } from './types'

import styles from './Tile.module.scss'

function Tile({ slots = 1, className, icon, mobileIcon, title, description, isMobileColumned, isDesktopReversed, children }: PropsWithChildren<TTileProps>) {
  const isOnlyTitle = title && !description
  const isIconAndText = (title || description) && icon

  const [cursorX, setCursorX] = useState<null | number>(null)
  const [cursorY, setCursorY] = useState<null | number>(null)

  const setCursorPosition = (e: any) => {
    setCursorX(e.nativeEvent.layerX)
    setCursorY(e.nativeEvent.layerY)
  }

  return (
    <div
      className={cx(
        className,
        'flex col-span-1 min-h-[180px] lg:min-h-[320px] bg-white/5 rounded-xl lg:rounded-2xl overflow-hidden',
        isMobileColumned ? 'flex-row-reverse lg:flex-col justify-between items-center lg:items-start' : 'flex-col',
        (isOnlyTitle || slots >= 2) && 'lg:items-center lg:justify-center',
        isIconAndText && 'lg:justify-between',
        isIconAndText && slots >= 2 &&
          (isDesktopReversed ? 'lg:flex-row' : 'lg:flex-row-reverse'),
        isMobileColumned ? 'px-5 py-6 lg:px-10 lg:py-10' : 'px-10 py-10',
        slots === 3 && 'lg:!py-[66px]',
        ({
          1: 'lg:col-span-1',
          2: 'lg:col-span-2',
          3: 'lg:col-span-3'
        }[slots]),
        styles.tileEffect
      )}
      onMouseMove={setCursorPosition}
      style={{ '--cursor-x': cursorX, '--cursor-y': cursorY } as React.CSSProperties}
    >
      {icon &&
        <>
          <div className={mobileIcon && 'hidden lg:block'}>
            {icon}
          </div>
          {mobileIcon &&
            <div className="lg:hidden">
              {mobileIcon}
            </div>
          }
        </>
      }
      <div className={cx(
        slots === 3 ? 'max-w-[300px]' : 'max-w-[400px]',
        !isMobileColumned ? 'mt-6 lg:mt-0' : 'mr-6 lg:mr-0',
        isIconAndText && slots >= 2 &&
          (isDesktopReversed ? 'ml-5' : 'mr-5')
      )}>
        {title &&
          <h3 className={cx(
            'font-semibold',
            slots >= 2 && '!text-[28px] lg:!text-[32px]',
            !description ? 'text-[48px]' : 'text-[18px]',
            description && slots >= 2 ? 'mb-3 lg:mb-2' : 'mb-3'
          )}>
            {title}
          </h3>
        }
        {description &&
          <p className={cx(
            'text-white/40',
            slots >= 2 && 'text-[24px] max-w-[300px]'
          )}>
            {description}
          </p>
        }
      </div>
      {children}
    </div>
  )
}

function TileGroup({ className, children }: PropsWithChildren<TTileGroupProps>) {
  return (
    <div className={cx(className, 'grid grid-cols-1 lg:grid-cols-3 gap-4')}>
      {children}
    </div>
  )
}

Tile.Group = TileGroup

export { Tile }
