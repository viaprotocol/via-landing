import React from 'react'
import { investors } from '@/data/investors'
import { Section } from '@/components/layout'
import { useMedia } from '@/hooks'

const becomeLink = (
  <a className="mt-6 -ml-2 block px-2 py-1.5 font-semibold text-white/80 hover:text-white md:mt-1 md:ml-12" href="mailto:serafim@via.exchange">Become an Investor</a>
)

function Investors() {
  const { isMobile } = useMedia()

  return (
    <Section>
      <div className="px-2.5 md:px-0">
        <div className="mb-4 flex items-center md:mb-10">
          <h2 className="text-[36px] font-semibold leading-[44px] lg:text-[48px] lg:leading-[56px]">Investors</h2>
          {!isMobile && becomeLink}
        </div>
        <div className="items-bottom flex justify-start gap-2.5 md:items-center md:justify-between md:gap-[95px]">
          {investors.map(investor => (
            <div className="flex h-[120px] w-[140px] items-end rounded-lg bg-white/5 p-5 md:h-auto md:w-auto md:bg-transparent md:p-0" key={investor.title}>
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
