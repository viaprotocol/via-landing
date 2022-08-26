import React from 'react'
import { Section } from '@/components/layout'
import { Tile } from '@/components/kit'

import WatchdogIcon from 'public/images/features/watchdog.svg'
import SecurityScoreIcon from 'public/images/features/security-score.svg'
import TransferGasIcon from 'public/images/features/transfer-gas.svg'
import AdvancedRoutesIcon from 'public/images/features/advanced-routes.svg'

function Safety() {
  return (
    <Section>
      <>
        <h2 className="lg:hidden mb-6 ml-2 font-semibold text-[36px] leading-[44px]">Safety first</h2>
        <Tile.Group>
          <Tile title="Safety first" className="hidden lg:flex" />
          <Tile
            icon={<WatchdogIcon/>}
            title="Bridges' watchdog"
            description="We analyze bridges' transactions and automatically disable those hacked or lacking liquidity"
          />
          <Tile
            icon={<SecurityScoreIcon/>}
            title="Security score"
            description="Conduct a research about the bridge according the decentralization, the actuality of audits and existence of centralized relayers"
          />
          <Tile
            slots={2}
            icon={<TransferGasIcon/>}
            title="Transfer gas"
            description="Move gas between any networks in 1 click"
          />
          <Tile
            icon={<AdvancedRoutesIcon/>}
            title="Advanced routes"
            description="Transfer tokens between any two networks, even if there is no direct bridge between them"
          />
        </Tile.Group>
      </>
    </Section>
  )
}

export { Safety }
