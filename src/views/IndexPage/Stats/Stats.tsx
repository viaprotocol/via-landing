import React from 'react'
import { Section } from '@/components/layout'

function Stats() {
  const items = [
    {
      title: <>$1,4b</>,
      text: <>Trading<br className="md:hidden" /> volume</>
    },
    {
      title: <>399k</>,
      text: <>All&nbsp;time<br className="md:hidden" /> trades</>
    },
    {
      title: <>74,7k</>,
      text: <>All&nbsp;time<br className="md:hidden" /> users</>
    }
  ]
  return (
    <Section>
      <div className="px-2.5 md:px-0">
        <div className="flex gap-2 border-y border-white/[0.12] py-4 md:py-10">
          {items.map((item, i) => (
            <div key={i} className="grow basis-0 text-center">
              <div className="text-[18px] font-semibold leading-6 md:text-[48px] md:leading-[56px]">{item.title}</div>
              <div className="mt-1 text-[16px] leading-6 text-white/40 md:mt-6 md:text-[24px] md:leading-9">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export { Stats }
