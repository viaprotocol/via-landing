import type { PropsWithChildren } from 'react'
import { useEffect, useMemo, useState } from 'react'
import useCollapse from 'react-collapsed'
import cx from 'classnames'
import { Icon, Skeleton } from '@/components/kit'

import type { TRouteSkeletonProps } from '../types'

const RouteSkeleton = function RouteSkeleton({ active }: PropsWithChildren<TRouteSkeletonProps>) {
  const [isExpanded, setExpanded] = useState(active)
  const { getToggleProps, getCollapseProps } = useCollapse({ isExpanded })
  const { onClick } = useMemo(
    () =>
      getToggleProps({
        onClick: (e) => {
          // Stop event bubbling
          e.preventDefault()
          e.stopPropagation()

          setExpanded(currentStatus => !currentStatus)
        }
      }),
    [getToggleProps, setExpanded]
  )
  // @ts-expect-error ref not found in type definition
  const { style: collapseStyles, onTransitionEnd, ref } = useMemo(() => getCollapseProps(), [getCollapseProps])

  useEffect(() => setExpanded(active), [active])

  return (
    <section className="mb-2 rounded-xl bg-[#1112150a] py-3 px-2 hover:bg-[#11121514] active:bg-[#11121529] dark:bg-[#ffffff0a] dark:hover:bg-[#ffffff14] dark:active:bg-[#ffffff29] md:p-4">
      <Skeleton h="16px" />
      <main ref={ref} style={collapseStyles} onTransitionEnd={onTransitionEnd}>
        <article className="flex flex-row gap-1 pt-4">
          <div className="flex items-center justify-center gap-1.5 rounded-3xl bg-[#1112150a] dark:bg-[#ffffff0a]">
            <Skeleton w="32px" h="32px" className="mr-1.5 rounded-3xl" />

            <Skeleton w="24px" h="24px" className="rounded-3xl" />
            <Skeleton w="48px" h="16px" className="mr-3.5 rounded-3xl" />

            <Skeleton w="24px" h="24px" className="rounded-3xl" />
            <Skeleton w="48px" h="16px" className="mr-3.5 rounded-3xl" />
          </div>
          <div className="flex w-8 items-center justify-center rounded-3xl bg-[#1112150a]">
            <Skeleton w="16px" h="16px" className="rounded-3xl" />
          </div>
        </article>
      </main>
    </section>
  )
}

export { RouteSkeleton }
