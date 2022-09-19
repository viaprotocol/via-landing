import React from 'react'
import { investors } from '@/data/investors'
import { Section } from '@/components/layout'
import { useMedia } from '@/hooks'

function Investors() {
  const { isMobile } = useMedia()

  return (
    <Section>
      <div className="px-2.5 md:px-0">
        <h2 className="mb-4 md:mb-10 text-[36px] font-semibold leading-[44px] lg:text-[48px] lg:leading-[56px]">Investors</h2>
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
      </div>
    </Section>
  )
}

export { Investors }
