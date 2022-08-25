import React from 'react'
import { investors } from '@/data/investors'
import { Section } from '@/components/layout'
import { useMedia } from '@/hooks'

const becomeLink = (
  <a className="block mt-6 md:mt-1 -ml-2 md:ml-12 px-2 py-1.5 font-semibold text-white/80 hover:text-white" href="mailto:serafim@via.exchange">Become an Investor</a>
) 

function Investors() {
  const { isMobile } = useMedia()

  return (
    <Section>
      <div className="px-2.5 md:px-0">
        <div className="flex items-center mb-4 md:mb-10">
          <h2 className="">Investors</h2>
          {!isMobile && becomeLink}
        </div>
        <div className="flex items-bottom md:items-center justify-start md:justify-between gap-2.5 md:gap-[95px]">
          {investors.map(investor => (
            <div className="flex items-end w-[140px] h-[120px] md:w-auto md:h-auto p-5 md:p-0 rounded-lg bg-white/5 md:bg-transparent" key={investor.title}>
              <img
                className="md:opacity-50"
                src={`/images/investors/${isMobile ? investor.fileNameSmall : investor.fileNameBig}`}
                title={investor.title}
                alt={investor.title}
              />
            </div>
          ))}
        </div>
        {isMobile && becomeLink}
      </div>
    </Section>
  )
}

export { Investors }
