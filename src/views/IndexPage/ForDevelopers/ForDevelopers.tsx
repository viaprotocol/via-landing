import React from 'react'
import { Section } from '@/components/layout'
import { Tile } from '@/components/kit'

import { SafeMode, Sdk } from './components/'

import GrantProgramIcon from 'public/images/features/grant-program.svg'
import TrustedTokensIcon from 'public/images/features/trusted-tokens.svg'

function ForDevelopers() {
  return (
    <Section>
      <>
        <div className="ml-2.5 mb-10 lg:ml-0">
          <h2 className="mb-3 text-[36px] font-semibold leading-[44px] lg:mb-6 lg:text-[48px] lg:leading-[56px]">For developers</h2>
          <p className="max-w-[940px] text-[24px] leading-[32px] text-white/40 lg:text-[32px] lg:leading-[40px]">The most potent SDK with all aggregators and security features</p>
        </div>
        <Tile.Group>
          <Tile
            slots={3}
            disableEffect
          >
            <Sdk />
          </Tile>
          <Tile
            slots={3}
            className="lg:min-h-[280px]"
          >
            <SafeMode />
          </Tile>
          <Tile
            ySlots={2}
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
            title="Multichain trusted token standard"
            description="Tokenlist of trusted tokens across 25 chains"
            isDesktopReversed
          />
        </Tile.Group>
      </>
    </Section>
  )
}

export { ForDevelopers }
