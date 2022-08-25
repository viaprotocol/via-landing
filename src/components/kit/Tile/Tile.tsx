import cx from 'classnames'
import type { PropsWithChildren } from 'react'

import type { TTileGroupProps, TTileProps } from './types'

function Tile({ slots = 1, className, icon, title, description, children }: PropsWithChildren<TTileProps>) {
  const isOnlyTitle = title && !description
  const isIconAndText = (title || description) && icon
  const isAllElements = title && description && icon

  return (
    <div className={cx(
      className,
      'flex flex-col col-span-1 min-h-[180px] lg:min-h-[320px] bg-white/5 rounded-2xl px-5 py-6 lg:px-10 lg:py-10',
      (isOnlyTitle || slots === 2) && 'lg:items-center lg:justify-center',
      isIconAndText && 'lg:justify-between',
      isIconAndText && slots === 2 && 'lg:flex-row-reverse',
      ({
        1: `lg:col-span-1`,
        2: `lg:col-span-2`,
        3: `lg:col-span-3`,
      }[slots]),
      isAllElements && slots === 1 && 'lg:pt-5 lg:pl-5',
    )}>
      {icon &&
        <div>
          {icon}
        </div>
      }
      <div className={cx(
        'max-w-[400px]',
        isAllElements && slots === 1 && 'lg:pl-5',
        isIconAndText && slots >= 2 && 'mt-6 lg:mt-0'
      )}>
        {title &&
          <h3 className={cx(
            'font-semibold',
            slots >= 2 && 'text-[28px] lg:text-[32px]',
            !description ? 'text-[48px]' : 'text-[18px]',
            description && slots === 2 ? 'mb-3 lg:mb-2' : 'mb-3'
          )}>
            {title}
          </h3>
        }
        {description &&
          <p className={cx(
            'text-white/40',
            slots >= 2 && 'text-[24px] max-w-[300px]',
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
