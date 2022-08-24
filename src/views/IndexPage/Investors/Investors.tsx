import React from 'react'
import { investors } from '@/data/investors'
import { Section } from '@/components/layout'

const isMobile = true

const becomeLink = (
  <a className="block mt-6 md:mt-1 -ml-2 md:ml-12 px-2 py-1.5 font-semibold text-white/80 hover:text-white" href="mailto:serafim@via.exchange">Become an Investor</a>
) 

function Investors() {
  return (
    <Section>
      <div className="flex items-center mb-4 md:mb-10">
        <h2 className="">Investors</h2>
        {!isMobile && becomeLink}
      </div>
      <div className="flex align-bottom justify-start md:justify-evenly gap-2.5">
        {investors.map(investor => (
          <div className="p-5 md:p-0 rounded-lg bg-white/5 md:bg-transparent">
            <img
              className="md:opacity-50"
              src={`/images/investors/${investor.fileName}`}
              title={investor.title}
              alt={investor.title}
              key={investor.title}
            />
          </div>
        ))}
      </div>
      {isMobile && becomeLink}
    </Section>
  )
}

export { Investors }
