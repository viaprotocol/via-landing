import React from 'react'
import { Section } from '@/components/layout'
import { Tile } from '@/components/kit'

import ProgressBarIcon from 'public/images/features/progress-bar.svg'

function ForOrganizations() {
  return (
    <Section>
      <>
        <div className="mx-2.5 mb-10">
          <h2 className="mb-3 text-center text-[36px] font-semibold leading-[44px] lg:mb-6 lg:text-[48px] lg:leading-[56px]">Efficient for organizations</h2>
          <p className="mx-auto max-w-[1094px] text-center text-[24px] leading-[32px] text-white/40 lg:text-[32px] lg:leading-[40px]">Do you want to transfer a large amount, but there is not enough liquidity or are you afraid of losing on a slippage? Via is the perfect option for you</p>
          </div>
        <Tile.Group>
          <Tile
            slots={3}
            icon={<ProgressBarIcon/>}
            mobileIcon={<ProgressBarIcon/>}
            title="Highest efficiency for large amounts"
            description="By making on-chain transactions using 1inch and splitting large amounts into different bridges - bridge any amounts without fear of a huge slippage"
          />
          <Tile
            icon={<ProgressBarIcon/>}
            title="Infinty liquidity"
            description="Bridge any amounts without fear of a huge slippage"
          />
          <Tile
            icon={<ProgressBarIcon/>}
            title="Gnosis Safe"
            description="Use your favorite multisig wallet"
          />
          <Tile
            icon={<ProgressBarIcon/>}
            title="Address validation"
            description="Be sure that you will not send tokens to a smart contract that is not deployed in the destination network."
          />
        </Tile.Group>
      </>
    </Section>
  )
}

export { ForOrganizations }
