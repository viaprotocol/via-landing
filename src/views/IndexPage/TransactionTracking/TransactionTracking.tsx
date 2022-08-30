import React from 'react'
import { Section } from '@/components/layout'
import { Tile } from '@/components/kit'

import WatchdogIcon from 'public/images/features/watchdog.svg'
import SecurityScoreIcon from 'public/images/features/security-score.svg'
import TransferGasIcon from 'public/images/features/transfer-gas.svg'
import AdvancedRoutesIcon from 'public/images/features/advanced-routes.svg'

function TransactionTracking() {
  return (
    <Section>
      <>
        <div className="ml-2.5 lg:ml-0 mb-10">
          <h2 className="mb-3 lg:mb-6 font-semibold text-[36px] lg:text-[48px] leading-[44px] lg:leading-[56px]">Transaction tracking</h2>
          <p className="max-w-[940px] text-white/40 text-[24px] lg:text-[32px] leading-[32px] lg:leading-[40px]">Be sure that the money is on the way and will arrive at the appointed moment.</p>
          </div>
        <Tile.Group>
          <Tile
            slots={3}
            icon={<WatchdogIcon/>}
            title="Progress bar"
            description="Track the transaction on the progress page"
          />
          <Tile
            slots={2}
            icon={<TransferGasIcon/>}
            title="Push notifications"
            description="Subscribe to browser notifications to receive transaction status updates"
          />
          <Tile
            icon={<AdvancedRoutesIcon/>}
            title="Dynamic title"
            description="Don't be afraid to go to another page and miss the second transaction"
          />
        </Tile.Group>
      </>
    </Section>
  )
}

export { TransactionTracking }
