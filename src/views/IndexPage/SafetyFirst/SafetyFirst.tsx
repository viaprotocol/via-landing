import React from 'react'
import { Section } from '@/components/layout'
import { Tile } from '@/components/kit'

import WatchdogIcon from 'public/images/features/watchdog.svg'
import SecurityScoreIcon from 'public/images/features/security-score.svg'
import RefuelIcon from 'public/images/features/refuel.svg'
import AuditIcon from 'public/images/features/audit.svg'
import AdvancedRoutesIcon from 'public/images/features/advanced-routes.svg'

function SafetyFirst() {
  return (
    <Section>
      <>
        <h2 className="mb-6 ml-2 text-[36px] font-semibold leading-[44px] lg:hidden">Safety first</h2>
        <Tile.Group>
          <Tile title="Safety first" className="hidden lg:flex" />
          <Tile
            icon={<WatchdogIcon/>}
            title="Bridges' watchdog"
            description="We analyze bridges' transactions and automatically disable those hacked or lacking liquidity"
            isMobileColumned
          />
          <Tile
            icon={<SecurityScoreIcon/>}
            title="Security score"
            description="Conduct a research about the bridge according the decentralization, the actuality of audits and existence of centralized relayers"
            isMobileColumned
          />
          <Tile
            icon={<RefuelIcon/>}
            title="Refuel"
            description="Move gas between any networks in 1 click"
          />
          <Tile
            icon={<AuditIcon/>}
            title="Passed audit"
            description="Audit by Pessimistic successfully passed in Q4 2022. Next one is scheduled for Q2 2023"
            isMobileColumned
          />
          <Tile
            icon={<AdvancedRoutesIcon/>}
            title="Advanced routes"
            description="Transfer tokens between any two networks, even if there is no direct bridge between them"
            isMobileColumned
          />
        </Tile.Group>
      </>
    </Section>
  )
}

export { SafetyFirst }
