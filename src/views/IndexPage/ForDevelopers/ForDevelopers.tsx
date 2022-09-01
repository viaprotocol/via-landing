import React from 'react'
import { Section } from '@/components/layout'
import { Tile } from '@/components/kit'

import { Sdk } from './components/Sdk'

import GrantProgramIcon from 'public/images/features/grant-program.svg'
import TrustedTokensIcon from 'public/images/features/trusted-tokens.svg'

function ForDevelopers() {
  return (
    <Section>
      <>
        <div className="ml-2.5 lg:ml-0 mb-10">
          <h2 className="mb-3 lg:mb-6 font-semibold text-[36px] lg:text-[48px] leading-[44px] lg:leading-[56px]">For developers</h2>
          <p className="max-w-[940px] text-white/40 text-[24px] lg:text-[32px] leading-[32px] lg:leading-[40px]">The most potent SDK with all aggregators and security features</p>
        </div>
        <Tile.Group>
          <Tile
            slots={3}
            // title="SDK"
            // description="Show routes 5 times faster than with other aggregators API"
            disableEffect
            // noPaddings
          >
            <Sdk />
          </Tile>
          <Tile
            slots={3}
            title="Safe mode"
            description="Don't worry about hacks and bridge bugs. Your users will not encounter them"
          />
          <Tile
            icon={<GrantProgramIcon/>}
            title="Grant program"
            description="Grant program for wallets & multichain dapps"
          />
          <Tile
            slots={2}
            title="Web3 Wallets library"
            description="Wallets for 6 ecosystems with multiconnect"
          />
          <Tile
            slots={2}
            icon={<TrustedTokensIcon/>}
            title="Multichian trusted token standart"
            description="Tokenlist of trusted tokens across 25 chains"
            isDesktopReversed
          />
        </Tile.Group>
      </>
    </Section>
  )
}

export { ForDevelopers }
