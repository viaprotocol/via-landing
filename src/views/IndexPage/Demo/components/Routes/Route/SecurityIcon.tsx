import { Icon } from '@/components/kit'

import type { TSecurityIconType } from './types'
import type { TSecurityScoreType } from '../types'

const securityIconConfig: {
  [key in TSecurityScoreType]: JSX.Element
} = {
  HIGH_RISK: <Icon icon="highRiskDark" />,
  POTENTIAL_RISK: <Icon icon="potentialRiskDark" />,
  SAFE_ROUTE: <Icon icon="secureRiskDark" />

}

const SecurityIcon = ({ score }: TSecurityIconType) => {
  return securityIconConfig[score]
}

export { SecurityIcon }
