import type { FunctionComponent, PropsWithChildren, SVGProps } from 'react'

import closeIcon from 'public/images/icons/close.svg'
import arrowDown from 'public/images/icons/arrow-down.svg'
import highRiskDark from 'public/images/icons/security/highrisk.svg'
import potentialRiskDark from 'public/images/icons/security/potentialrisk.svg'
import secureRiskDark from 'public/images/icons/security/secure.svg'
import timeIcon from 'public/images/icons/new-time.svg'
import gasIcon from 'public/images/icons/new-gas.svg'
import transactionIcon from 'public/images/icons/transactions.svg'
import approveIcon from 'public/images/icons/approve.svg'
import successIcon from 'public/images/icons/success.svg'
import errorIcon from 'public/images/icons/error.svg'
import StepBridge from 'public/images/icons/step-bridge.svg'
import StepSwap from 'public/images/icons/step-swap.svg'

const icon = (
  Component: FunctionComponent<PropsWithChildren<SVGProps<SVGSVGElement>>> & { title?: string | undefined },
  baseline = 0
) => ({
  Component,
  baseline
})

const ICONS = {
  close: icon(closeIcon),
  arrowDown: icon(arrowDown),
  highRiskDark: icon(highRiskDark),
  potentialRiskDark: icon(potentialRiskDark),
  secureRiskDark: icon(secureRiskDark),
  time: icon(timeIcon),
  gas: icon(gasIcon),
  transactions: icon(transactionIcon),
  approve: icon(approveIcon),
  success: icon(successIcon),
  error: icon(errorIcon),
  stepBridge: icon(StepBridge),
  stepSwap: icon(StepSwap)
}

export { ICONS }
