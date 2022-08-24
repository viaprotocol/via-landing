import React from 'react'
import { Section } from '@/components/layout'
import { Tile } from '@/components/kit'
import { useMedia } from '@/hooks'

function Safety() {
  const { isMobile } = useMedia()

  return (
    <Section>
      <>
        {isMobile &&
          <h2 className="md:hidden mb-6 ml-2">Safety first</h2>
        }
        <Tile.Group>
          {!isMobile &&
            <Tile title="Safety first" />
          }
          <Tile
            title="Bridges' watchdog"
            description="We analyze bridges' transactions and automatically disable those hacked or lacking liquidity."
          />
          <Tile
            title="Security score"
            description="Conduct a research about the bridge according the decentralization, the actuality of audits and existence of centralized relayers."
          />
          <Tile
            slots={2}
            title="Transfer gas"
            description="Move gas between any networks in 1 click"
          />
          <Tile
            title="Advanced routes"
            description="Transfer tokens between any two networks, even if there is no direct bridge between them."
          />
        </Tile.Group>
      </>
    </Section>
  )
}

export { Safety }
