import type { FC, PropsWithChildren } from 'react'
import { useMemo, memo } from 'react'

import { Route, RouteSkeleton } from './Route'
import type { TRangingRoute, TRoutesProps } from './types'

const ROUTES_ACTIVE_BY_DEFAULT = 3

const Routes: FC<PropsWithChildren<TRoutesProps>> = memo(() => {
  const routes: TRangingRoute[] = []

  const isSkeletonsVisible = routes.length < 5

  const countOfSkeletons = Math.max(6 - routes.length, 1)
  const skeletonArray = useMemo(() => new Array(countOfSkeletons).fill(null), [countOfSkeletons])

  return (
    <section className="flex flex-col overflow-y-auto overflow-x-hidden">
        <div>
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
