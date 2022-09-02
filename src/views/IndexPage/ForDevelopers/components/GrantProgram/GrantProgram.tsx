import React from 'react'

import GrantProgramIcon from 'public/images/features/grant-program.svg'
import { ActionLink } from '../ActionLink'

function GrantProgram() {
  return (
    <div className="flex h-full flex-col p-10 lg:justify-between">
      <div>
        <GrantProgramIcon/>
        <h3 className="mt-11 mb-3 text-[28px] font-semibold leading-[40px] lg:mt-[66px] lg:text-[32px] lg:leading-[44px]">Grant program</h3>
        <p className="mb-6 text-[24px] leading-[32px] text-white/40 lg:mb-8 lg:text-[24px] lg:leading-[36px]">Grant program for wallets & multichain dapps</p>
        <ActionLink text="Apply" href="mailto:serafim@via.exchange" />
      </div>
      <p className="mt-10 text-white/40"><span className="font-semibold">Ideal for</span> Multichian wallets, Porfolio trackers, Yeld aggregators, Trading bots, Rebalasers, Cross-chain zaps</p>
    </div>
  )
}

export { GrantProgram }
