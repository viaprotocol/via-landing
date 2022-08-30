import { /* getGasHref, */ getTokenWithSymbol } from '../helpers'
import type { TActionFeeProps, TTotalFeeProps } from '../types'

import type { TRouteActionWithMeta } from '../../types'
import { getNumberWithOrdinal } from '../../utils'

function ActionFeeTooltip(props: TActionFeeProps) {
  const { transactionNo, action, isNeedGas = false, getHeader } = props

  const { gasActionApprove, gasAction, providerFee, network } = action.meta
  const { currencySymbol } = network!
  // TODO: use URL helper instead of direct setting of href
  const gasHref = '' /* transferGasFromNetwork && getGasHref(transferGasFromNetwork, network!) */

  return (
    <div>
      <h2 className="pb-1 font-semibold">{getHeader(transactionNo, action)}</h2>
      <ul className="list-disc pl-4 marker:text-coal-240 dark:marker:text-white-240">
        {!!gasActionApprove.wei && (
          <li>
            <b className="font-semibold">{getTokenWithSymbol(gasActionApprove.token, currencySymbol)}</b>{' '}
            for approve gas
          </li>
        )}
        <li>
          <b className="font-semibold">{getTokenWithSymbol(gasAction.token, currencySymbol)}</b> for transaction gas
        </li>
        {!!providerFee.wei && (
          <li>
            <b className="font-semibold">{getTokenWithSymbol(providerFee.token, currencySymbol)}</b>{' '}
            provider fee
          </li>
        )}
      </ul>
      {isNeedGas && gasHref && (
        <a
          href={gasHref}
          className="mt-2.5 flex h-8 w-[92px] items-center rounded-md bg-coal/5 py-0.5 px-2 font-semibold transition-opacity hover:bg-coal/10 active:bg-coal/20 dark:bg-white/5 dark:hover:bg-white/10 dark:active:bg-white/20"
        >
          Transfer gas
        </a>
      )}
    </div>
  )
}

const getFeeHeader = (transactionNo: number, action: TRouteActionWithMeta) => {
  const transactionText = getNumberWithOrdinal(transactionNo)
  const { totalGas } = action.meta

  return (
    <>
      {`${transactionText} transaction ${getTokenWithSymbol(action.meta.totalGas.token, action.meta.network!.currencySymbol)}`}
      <span className="pl-[1ch] text-coal-640">${totalGas.usd}</span>
    </>
  )
}

function TotalFeeTooltip(props: TTotalFeeProps) {
  const { totalGasUSD, actions } = props
  return (
    <article className="text-xs">
      <header>
        <h2 className="font-semibold">
          Total fee: ${totalGasUSD}
        </h2>
      </header>
      <main>
        {actions.map((action, index) => (
          <div key={action.uuid} className="pt-2">
            <ActionFeeTooltip transactionNo={index + 1} action={action} getHeader={getFeeHeader} />
          </div>
        ))}
      </main>
    </article>
  )
}

export { TotalFeeTooltip, ActionFeeTooltip }
