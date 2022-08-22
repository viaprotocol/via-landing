import type { FunctionComponent, PropsWithChildren, SVGProps } from 'react'

import closeIcon from '../../../public/images/icons/close.svg'

const icon = (
  Component: FunctionComponent<PropsWithChildren<SVGProps<SVGSVGElement>>> & { title?: string | undefined },
  baseline = 0,
) => ({
  Component,
  baseline,
})

const ICONS = {
  close: icon(closeIcon),
}

export { ICONS }
