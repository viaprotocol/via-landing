import { memo } from 'react'

import { Icon } from '@/components/ui'

import { SecurityIcon } from '../SecurityIcon'
import type { TRiskInfoProps } from '../types'

import type { TSecurityCentralizationType, TSecurityScoreType } from '../../types'

const titles: { [key in TSecurityScoreType]: string } = {
  SAFE_ROUTE: 'Safe route',
  HIGH_RISK: 'High risk',
  POTENTIAL_RISK: 'Potential risk'
}

const centralization: { [key in TSecurityCentralizationType]: string } = {
  centralized: 'centralized',
  semicentralized: 'semi-centralized',
  decentralized: 'decentralized'
}

const RiskInfo = memo((props: TRiskInfoProps) => {
  const { security, bridgeName } = props
  const { hasCentralizedRelayers, nAudits, score, centralizationType } = security
  return (
    <main className="text-11 flex max-w-[260px] flex-row gap-1.5">
      <div className="self-start">
        <SecurityIcon score={security.score} />
      </div>
      <div>
        <h2 className="pb-1 font-bold">{titles[score]}</h2>
        <ul className="flex flex-col gap-1">
          <li className="flex gap-1.5">
            <div className="self-start">{nAudits > 0 ? <Icon icon="success" /> : <Icon icon="error" />}</div>
            <p>{nAudits === 0 ? 'Security audits not found' : `${nAudits} security audit${nAudits > 1 && 's'}`}</p>
          </li>
          {centralizationType && (
            <li className="flex gap-1.5">
              <div className="self-start">
                <Icon icon={centralizationType === 'centralized' ? 'error' : 'success'} />
              </div>
              <p>
                {bridgeName} is {centralization[centralizationType]}
              </p>
            </li>
          )}
          {hasCentralizedRelayers !== null && (
            <li className="flex gap-1.5">
              <div className="self-start">
                <Icon icon={hasCentralizedRelayers ? 'error' : 'success'} />
              </div>
              <p>
                {hasCentralizedRelayers ? 'Relayer executes the' : 'You own keys in the'}
                <br />
                intermediate transaction
              </p>
            </li>
          )}
        </ul>
      </div>
    </main>
  )
})

RiskInfo.displayName = 'RiskInfo'

export { RiskInfo }
