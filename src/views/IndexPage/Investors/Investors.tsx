import React from 'react'
import { investors } from '@/data/investors'
import { Section } from '@/components/layout'

function Investors() {
  return (
    <Section>
      <div className="flex items-center mb-10">
        <h2 className="">Investors</h2>
        <a className="ml-12 px-2 py-1.5 text-white/80 hover:text-white" href="mailto:serafim@via.exchange">Become an Investor</a>
      </div>
      <div className="flex align-bottom justify-between">
        {investors.map(investor => (
          <img src={`/images/investors/${investor.fileName}`} title={investor.title} alt={investor.title} key={investor.title} />
        ))}
      </div>
    </Section>
  )
}

export { Investors }
