import React from 'react'

import { SAFE_ITEMS } from './constants'

function SafeMode() {
  return (
    <div className="flex flex-col lg:flex-row w-full p-10">
      <div className="lg:max-w-[300px] lg:pr-[80px] mb-10 lg:mb-0">
        <h3 className="mb-3 text-[28px] font-semibold leading-[40px] lg:text-[32px] lg:leading-[44px]">Safe mode</h3>
        <p className="max-w-[490px] text-[24px] leading-[32px] text-white/40 lg:mb-4 lg:text-[24px] lg:leading-[36px]">Don&apos;t worry about hacks and bridge bugs. Your users will not encounter them</p>
      </div>
      <div className="lg:ml-[100px]">
        <h3 className="mb-3.5 lg:mb-9 text-[28px] font-semibold leading-[40px] lg:text-[32px] lg:leading-[44px]">Exclude receiving via SDK</h3>
        <div className="flex flex-wrap gap-1 lg:gap-2">
          {SAFE_ITEMS.map((item, key) => (
            <div className="px-4 py-2.5 bg-white/5 text-white/40 text-[16px] leading-[24px] lg:text-[24px] lg:leading-[36px] rounded-[28px]" key={key}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { SafeMode }
