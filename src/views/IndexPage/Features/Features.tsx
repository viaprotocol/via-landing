import React from 'react'
import { Section } from '@/components/layout'
import { Tile } from '@/components/kit'

import WatchdogIcon from 'public/images/features/watchdog.svg'
import SecurityScoreIcon from 'public/images/features/security-score.svg'
import TransferGasIcon from 'public/images/features/transfer-gas.svg'
import AdvancedRoutesIcon from 'public/images/features/advanced-routes.svg'

function Features() {
  return (
    <Section>
      <>
        <Tile.Group>
          <Tile
            icon={<WatchdogIcon/>}
            title="Smart sorts"
            description="Choose the best route considering all possible attributes"
          />
          <Tile
            icon={<SecurityScoreIcon/>}
            title="Multi-accounting"
            description="Continue a transaction in another ecosystem wallet, see balances and history for all your wallets at one time"
          />
          <Tile
            icon={<SecurityScoreIcon/>}
            title="Filter for bridges & DEXs"
            description="Search for routes through selected bridges or DEX without trade offs in decentralization"
          />
          <Tile
            slots={2}
            icon={<TransferGasIcon/>}
            title="Slippage"
            description="Flexibly adjust the slippage without fear of an unexpected loss of a significant percentage"
          />
          <Tile
            icon={<AdvancedRoutesIcon/>}
            title="Current duration"
            description="Be sure of the duration of the transaction due to the dynamic calculation on historical data"
          />
          <Tile
            icon={<WatchdogIcon/>}
            title="Gas usage estamation"
            description="We estimate gas on historical data for fair competition among bridges and aggregators"
          />
          <Tile
            icon={<SecurityScoreIcon/>}
            title="Recipient address"
            description="Send tokens to a friend or protocol to an address on another network"
          />
          <Tile
            icon={<SecurityScoreIcon/>}
            title="Route Rescuer"
            description="We disable a route if you don’t have enough gas for the second transaction"
          />
          <Tile
            icon={<AdvancedRoutesIcon/>}
            title="Multilingual translation"
            description="Use the interface in your native language"
          />
          <Tile
            slots={2}
            icon={<TransferGasIcon/>}
            title="Route's preview"
            description="Quickly preview the best route with all its attributes"
          />
        </Tile.Group>
      </>
    </Section>
  )
}

export { Features }
