import cx from 'classnames'
import type { FC } from 'react'
import { memo } from 'react'

import { Logo } from '../Logo'

import type { TNetworkLogoProps } from './types'

const NetworkLogo: FC<TNetworkLogoProps> = memo(
  ({
    networkLogo,
    coinLogo,
    networkBackgroundColor: backgroundColor,
    className,
    coinClassName = '',
    networkClassName = ''
  }: TNetworkLogoProps) => {
    return (
      <div className={cx('relative', className)}>
        {networkLogo && (
          <Logo
            className="absolute -top-0.5 right-0 !rounded"
            src={networkLogo}
            imageClassName={networkClassName}
            width={12}
            height={12}
            style={{ backgroundColor }}
          />
        )}
        <Logo src={coinLogo} width={24} height={24} imageClassName={coinClassName} />
      </div>
    )
  }
)

NetworkLogo.displayName = 'NetworkLogo'

export { NetworkLogo }
