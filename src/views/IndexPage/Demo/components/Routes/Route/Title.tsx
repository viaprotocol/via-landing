import { NetValueInfo } from './Tools/NetValueInfo'
import type { TTitleProps } from './types'
import dynamic from 'next/dynamic'
import type { TTooltipProps } from '@/components/ui'
import type { PropsWithChildren } from 'react'

const Tooltip = dynamic<PropsWithChildren<TTooltipProps>>(() => import('@/components/ui/Tooltip/Tooltip').then(mod => mod.Tooltip), {
  ssr: false
})

const Title = (props: TTitleProps) => {
  const { meta, symbol, type = 'regular', isMultiplyTransaction = false } = props
  const {
    calculatedToTokenAmountUSD,
    price: { tokenWorth, priceUSD }
  } = meta

  if (type === 'regular') {
    return (
      <>
        <h2 className="font-bold">
          {tokenWorth ? `${tokenWorth} ${symbol}` : <span title="We don't know intermediate amount">🍓🍓</span>}
        </h2>

        {priceUSD && (
          <div className="flex items-center gap-[1ch] text-13">
            <div className="text-gray-400 dark:text-[#ffffff66]">${priceUSD}</div>
          </div>
        )}
      </>
    )
  }

  return (
    <Tooltip
      content={<NetValueInfo isMultiplyTransaction={isMultiplyTransaction} meta={meta} symbol={symbol} />}
      isAnimated={false}
    >
      <h2>
        Net value: <span className="font-bold">${calculatedToTokenAmountUSD}</span>
      </h2>
    </Tooltip>
  )
}

export { Title }
