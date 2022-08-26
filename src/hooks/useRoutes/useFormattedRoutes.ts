import type {TRoute, TRouteWithMeta} from '@/views/IndexPage/Demo/components/Routes'
import {useCallback, useEffect, useMemo, useState} from 'react'
import {EVM_BASE_TOKEN_ADDRESS, getFormattedRoutes, uniqueArrayByKey} from './utils'
import {useTokenPrice} from '@/hooks/queries/useTokenPrice'
import {useRangedRoutes} from './useRangedRoutes'

function useFormattedRoutes(routes: TRoute[] | null) {
  const [cachedRoutes, setCachedRoutes] = useState<TRouteWithMeta[]>([])
  const { data: toTokenPrice } = useTokenPrice({ address: EVM_BASE_TOKEN_ADDRESS, chainId: 1 } || {})

  const formatRoutes = useCallback(async () => {
    if (!routes) {
      return
    }

    const formattedRoutes = await getFormattedRoutes(routes)

    setCachedRoutes(formattedRoutes)
  }, [routes, toTokenPrice])

  // apply formatted routes to cached routes
  useEffect(() => {
    formatRoutes()
  }, [formatRoutes])

  const sortedRoutes = useMemo(() => {
    const sortedRoutesAll = [...cachedRoutes].sort((routeA, routeB) => {
      return Number(routeB.meta.calculatedToTokenAmountUSD) - Number(routeA.meta.calculatedToTokenAmountUSD)
    })
    const activeRoutes = sortedRoutesAll.filter(route => route.active)
    const availableRoutes = activeRoutes.filter(route => !route.meta.isNeedGas)
    const unavailableRoutes = activeRoutes.filter(route => route.meta.isNeedGas)

    const inactiveRoutes = sortedRoutesAll.filter(route => !route.active)

    const sortedByActiveStatus = [...availableRoutes, ...unavailableRoutes, ...inactiveRoutes]

    return uniqueArrayByKey(sortedByActiveStatus, 'meta.toolList')
  }, [cachedRoutes])

  return useRangedRoutes(sortedRoutes)
}

export { useFormattedRoutes }
