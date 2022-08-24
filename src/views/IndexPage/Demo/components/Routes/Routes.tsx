import type { FC, PropsWithChildren } from 'react'
import { useMemo, memo } from 'react'
import cx from 'classnames'
import { Route, RouteSkeleton } from './Route'
import type { TRangingRoute, TRoutesProps } from './types'

import UsdtLogo from 'public/images/tokens/usdt.svg'
import EthLogo from 'public/images/tokens/eth.svg'
import { Icon } from '@/components/ui'
import { useRoutes } from '@/hooks/useRoutes/useRoutes'
const ROUTES_ACTIVE_BY_DEFAULT = 3

const Routes: FC<PropsWithChildren<TRoutesProps>> = memo(({ className }) => {
  const routes: TRangingRoute[] = useRoutes()

  const isSkeletonsVisible = routes.length < 5

  const countOfSkeletons = Math.max(6 - routes.length, 1)
  const skeletonArray = useMemo(() => new Array(countOfSkeletons).fill(null), [countOfSkeletons])

  return (
    <section className={className}>
      <header className='dark:bg-[#ffffff0a] py-6 px-4 rounded-2xl flex items-center gap-6 mb-2'>
        <div className='flex'>
          <UsdtLogo className='w-10 h-10 mr-[10px]' />
          <div className='flex flex-col'>
            <p className='text-semibold text-base text-[18px] mb-1 tracking-tight'>1000</p>
            <span className='text-xs text-white/40'>on Phantom</span>
          </div>
        </div>
        <Icon icon="arrowRight" className='text-gray-500' width={24} height={24} />
        <div className='flex'>
          <EthLogo className='w-10 h-10 mr-[10px]' />
          <div className='flex flex-col'>
            <p className='text-semibold text-base text-[18px] mb-1 tracking-tight'>1000</p>
            <span className='text-xs text-white/40'>on Ethereum</span>
          </div>
        </div>
      </header>
      <div className='h-[556px] overflow-y-auto overflow-x-hidden'>
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
