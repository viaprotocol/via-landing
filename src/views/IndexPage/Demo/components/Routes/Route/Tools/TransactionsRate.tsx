import { SuccessRateIcon, getSuccessRate } from '../SuccessRateIcon'
import type { TTransactionsRateProps } from '../types'

const TransactionsRate = (props: TTransactionsRateProps) => {
  const { limit = '1', progress, bridgeName } = props
  const successRate = getSuccessRate(progress, limit)
  const nTransactions = successRate / 10
  return (
    <div className="flex max-w-[185px] gap-1.5">
      <div className="self-start">
        <SuccessRateIcon progress={progress} limit={limit} />
      </div>
      <div>
        <h2 className="pb-1 font-bold">{successRate}% success rate</h2>
        <p>
          {nTransactions} out of the 10 last txs via the <b className="font-bold">{bridgeName}</b> are successful
        </p>
      </div>
    </div>
  )
}

export { TransactionsRate }
