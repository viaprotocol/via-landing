import React from 'react'

import { ActionLink } from '../ActionLink'

import TrustedTokensIcon from 'public/images/features/trusted-tokens.svg'

function TokenList() {
  return (
    <div className="flex h-full w-full flex-col lg:flex-row lg:justify-between">
      <div className="px-10 pt-10 lg:py-10 lg:pr-0 ">
        <TrustedTokensIcon/>
      </div>
      <div className="flex flex-col justify-between p-10 pt-6 lg:pt-10">
        <div className="lg:max-w-[300px]">
          <h3 className="mb-3 text-[28px] font-semibold leading-[40px] lg:text-[32px] lg:leading-[44px]">Multichain trusted token standard</h3>
          <p className="mb-[56px] text-[24px] leading-[32px] text-white/40 lg:mb-8 lg:max-w-none lg:text-[24px] lg:leading-[36px]">Tokenlist of trusted tokens across 25 chains</p>
        </div>
        <ActionLink text="Learn more" href="https://github.com/viaprotocol/tokenlists" />
      </div>
    </div>
  )
}

export { TokenList }
