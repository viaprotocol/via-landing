import type { FC, PropsWithChildren } from 'react'
import { useMemo, memo } from 'react'
import cx from 'classnames'
import { Route, RouteSkeleton } from './Route'
import type { TRangingRoute, TRoutesProps } from './types'

import UsdtLogo from 'public/images/tokens/usdt.svg'
import EthLogo from 'public/images/tokens/eth.svg'
import { Icon } from '@/components/kit'
import { useRoutes } from '@/hooks/useRoutes/useRoutes'
import styles from '../../Demo.module.scss'

const ROUTES_ACTIVE_BY_DEFAULT = 3

const Routes: FC<PropsWithChildren<TRoutesProps>> = memo(({ className }) => {
  const routes: TRangingRoute[] = useRoutes()
  // const routes = []

  const isSkeletonsVisible = routes.length < 5

  const countOfSkeletons = Math.max(11 - routes.length, 1)
  const skeletonArray = useMemo(() => new Array(countOfSkeletons).fill(null), [countOfSkeletons])

  return (
    <section className={className}>
      <header className="mb-2 flex items-center gap-2 rounded-2xl py-6 px-4 dark:bg-[#ffffff0a] md:gap-6">
        <div className="flex">
          <UsdtLogo className="mr-[10px] h-10 w-10" />
          <div className="flex flex-col">
            <p className="text-semibold mb-1 text-base text-[18px] tracking-tight">1000</p>
            <span className="text-xs text-white/40">on Phantom</span>
          </div>
        </div>
        <Icon icon="arrowRight" className="text-gray-500" width={24} height={24} />
        <div className="flex">
          <EthLogo className="mr-[10px] h-10 w-10" />
          <div className="flex flex-col">
            <p className="text-semibold mb-1 text-base text-[18px] tracking-tight">1000</p>
            <span className="text-xs text-white/40">on Ethereum</span>
          </div>
        </div>
      </header>
      <div className={styles.content}>
        {routes.map((route, routeIndex) => (
          <Route
            index={routeIndex + 1}
            key={route.routeId}
            route={route}
            expanded={routeIndex < ROUTES_ACTIVE_BY_DEFAULT}
            showGas={true}
          />
        ))}
        {isSkeletonsVisible
          && skeletonArray.map((_, index) => (
            <RouteSkeleton key={index} active={routes.length + index < ROUTES_ACTIVE_BY_DEFAULT} />
          ))}
      </div>
    </section>
  )
})

Routes.displayName = 'Routes'

export { Routes }
