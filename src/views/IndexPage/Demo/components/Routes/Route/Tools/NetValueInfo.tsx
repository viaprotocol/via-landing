import cx from 'classnames'
import type { PropsWithChildren } from 'react'

import type { TInfoPanelProps, TNetValueInfoProps } from '../types'
import { InfoPanelTypeEnum } from '../types'

const InfoPanel = ({ children, usd, type, tokenInfo }: PropsWithChildren<TInfoPanelProps>) => {
  if (!Number(usd)) {
    return null
  }

  return (
    <div className="flex gap-[0.5ch]">
      <div>{children}</div>
      {tokenInfo && <div className="font-semibold">{tokenInfo}</div>}
      <div className={cx(!tokenInfo && 'text-[#FF2E2E] font-semibold')}>
        {type === InfoPanelTypeEnum.loss && '-'}${usd}
      </div>
    </div>
  )
}

const NetValueInfo = (props: TNetValueInfoProps) => {
  const { meta, symbol, isMultiplyTransaction = false } = props
  const {
    price: { priceUSD, tokenWorth },
    calculatedToTokenAmountUSD,
    gasActionApproveUSD,
    gasActionUSD,
    providerFeeUSD
  } = meta

  const receiveInfo = `${tokenWorth} ${symbol}`

  return (
    <article className="text-11">
      <InfoPanel type={InfoPanelTypeEnum.receive} usd={priceUSD} tokenInfo={receiveInfo}>
        You receive:
      </InfoPanel>

      <InfoPanel type={InfoPanelTypeEnum.loss} usd={gasActionApproveUSD}>
        {isMultiplyTransaction ? 'Approves' : 'Approve'} <span>gas:</span>
      </InfoPanel>

      <InfoPanel type={InfoPanelTypeEnum.loss} usd={gasActionUSD}>
        {isMultiplyTransaction ? 'Txs' : 'Tx'} <span>gas:</span>
      </InfoPanel>

      <InfoPanel type={InfoPanelTypeEnum.loss} usd={providerFeeUSD}>
        Protocol fee
      </InfoPanel>

      <div className="text-right font-bold">{`Net: $${calculatedToTokenAmountUSD}`}</div>
    </article>
  )
}

export { NetValueInfo }
