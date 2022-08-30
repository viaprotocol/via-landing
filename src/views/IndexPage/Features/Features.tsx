import React from 'react'
import { Section } from '@/components/layout'
import { Tile } from '@/components/kit'

import SmartSortingIcon from 'public/images/features/smart-sorting.svg'
import MultiAccountingIcon from 'public/images/features/multi-accounting.svg'
import FilterToolsIcon from 'public/images/features/filter-tools.svg'
import SlippageIcon from 'public/images/features/slippage.svg'
import DurationIcon from 'public/images/features/duration.svg'
import GasEstimationIcon from 'public/images/features/gas-estimation.svg'
import RecipientAddressIcon from 'public/images/features/recipient-address.svg'
import RouteRescuerIcon from 'public/images/features/route-rescuer.svg'
import MultilingualIcon from 'public/images/features/multilingual.svg'
import RoutePreviewIcon from 'public/images/features/route-preview.svg'

function Features() {
  return (
    <Section>
      <>
        <Tile.Group>
          <Tile
            icon={<SmartSortingIcon/>}
            title="Smart sorts"
            description="Choose the best route considering all possible attributes"
          />
          <Tile
            icon={<MultiAccountingIcon/>}
            title="Multi-accounting"
            description="Continue a transaction in another ecosystem wallet, see balances and history for all your wallets at one time"
          />
          <Tile
            icon={<FilterToolsIcon/>}
            title="Filter for bridges & DEXs"
            description="Search for routes through selected bridges or DEX without trade offs in decentralization"
          />
          <Tile
            slots={2}
            icon={<SlippageIcon/>}
            title="Slippage"
            description="Flexibly adjust the slippage without fear of an unexpected loss of a significant percentage"
          />
          <Tile
            icon={<DurationIcon/>}
            title="Current duration"
            description="Be sure of the duration of the transaction due to the dynamic calculation on historical data"
          />
          <Tile
            icon={<GasEstimationIcon/>}
            title="Gas usage estamation"
            description="We estimate gas on historical data for fair competition among bridges and aggregators"
          />
          <Tile
            icon={<RecipientAddressIcon/>}
            title="Recipient address"
            description="Send tokens to a friend or protocol to an address on another network"
          />
          <Tile
            icon={<RouteRescuerIcon/>}
            title="Route Rescuer"
            description="We disable a route if you don't have enough gas for the second transaction"
          />
          <Tile
            icon={<MultilingualIcon/>}
            title="Multilingual translation"
            description="Use the interface in your native language"
          />
          <Tile
            slots={2}
            icon={<RoutePreviewIcon/>}
            title="Route's preview"
            description="Quickly preview the best route with all its attributes"
          />
        </Tile.Group>
      </>
    </Section>
  )
}

export { Features }
