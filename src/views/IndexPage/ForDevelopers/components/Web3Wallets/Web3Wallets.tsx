import React from 'react'

import WalletsIcons from 'public/images/wallets/all-wallets.svg'
import { ActionLink } from '../ActionLink'

function Web3Wallets() {
  return (
    <div className="flex h-full w-full flex-col-reverse lg:flex-row lg:justify-between">
      <div className="flex flex-col justify-between p-10">
        <div className="lg:w-[300px]">
          <h3 className="mb-3 text-[28px] font-semibold leading-[40px] lg:text-[32px] lg:leading-[44px]">Web3 Wallets library</h3>
          <p className="mb-6 max-w-[250px] text-[24px] leading-[32px] text-white/40 lg:mb-8 lg:max-w-none lg:text-[24px] lg:leading-[36px]">Wallets for 6 ecosystems with&nbsp;multiconnect</p>
        </div>
        <ActionLink text="Learn more" href="https://github.com/viaprotocol/web3-wallets#readme" />
      </div>
      <div className="hidden lg:block">
        <WalletsIcons/>
      </div>
    </div>
  )
}

export { Web3Wallets }
