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
            <Tile>
              <h2>Safety first</h2>
            </Tile>
          }
          <Tile>
            <h2>Bridges' watchdog</h2>
            <p>We analyze bridges' transactions and automatically disable those hacked or lacking liquidity.</p>
          </Tile>
          <Tile>
            <h2>Security score</h2>
            <p>Conduct a research about the bridge according the decentralization, the actuality of audits and existence of centralized relayers.</p>
          </Tile>
          <Tile>
            <h2>Transfer gas</h2>
            <p>Move gas between any networks in 1 click</p>
          </Tile>
          <Tile  className="col-span-2">
            <h2>Advanced routes</h2>
            <p>Transfer tokens between any two networks, even if there is no direct bridge between them.</p>
          </Tile>
        </Tile.Group>
      </>
    </Section>
  )
}

export { Safety }
