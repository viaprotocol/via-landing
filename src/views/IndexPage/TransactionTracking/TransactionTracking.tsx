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
        <div className="mb-10">
          <h2 className="mb-3 lg:mb-6 text-[36px] font-semibold leading-[44px]">Transaction tracking</h2>
          <p>Be sure that the money is on the way and will arrive at the appointed moment.</p>
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
            isMobileColumned
          />
        </Tile.Group>
      </>
    </Section>
  )
}

export { TransactionTracking }
