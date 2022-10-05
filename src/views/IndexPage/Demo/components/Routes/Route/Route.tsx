import cx from 'classnames'
import type { PropsWithChildren } from 'react'
import { memo, useEffect, useMemo, useState } from 'react'
import useCollapse from 'react-collapsed'
import { RouteViewEnum } from '..'

import { getTokenDescription } from '../helpers'
import type { TRouteProps } from '../types'
import { RoutePriorityEnum } from '../types'

import { SecurityIcon } from './SecurityIcon'
import { SuccessRateIcon } from './SuccessRateIcon'
import { Title } from './Title'
import { ExchangeInfo, RiskInfo, TransactionsRate } from './Tools'
import { TimeInfo } from './Tools/TimeInfo'
import { ActionFeeTooltip, TotalFeeTooltip } from './Tools/TotalFee'
import type { TTooltipProps } from '@/components/kit'
import { Icon, Logo, Label } from '@/components/kit'
import { formatTime, getNumberWithOrdinal, getSmartRoundedNumber } from '../utils'
import dynamic from 'next/dynamic'

const getFeeHeader = (transactionNo: number) => {
  const transactionText = getNumberWithOrdinal(transactionNo)

  return `For a ${transactionText} transaction you need to have`
}

const Tooltip = dynamic<PropsWithChildren<TTooltipProps>>(() => import('@/components/kit/Tooltip/Tooltip').then(mod => mod.Tooltip), {
  ssr: false
})

const Route = memo((props: PropsWithChildren<TRouteProps>) => {
  const {
    route,
    // index,
    expanded = false,
    showGas = true,
    sectionStyles,
    isCollapsible = false,
    type = RouteViewEnum.regular
  } = props

  const [isExpanded, setExpanded] = useState(expanded)
  const { getToggleProps, getCollapseProps } = useCollapse({ isExpanded })
  const routePriority = RoutePriorityEnum.Smart

  useEffect(() => {
    setExpanded(expanded)
  }, [expanded])

  const { calculatedSteps, meta, active: isRouteActive, actions, security } = route

  const { onClick: onClickCollapse } = useMemo(
    () =>
      getToggleProps({
        onClick: (e) => {
          // Stop event bubbling
          e.preventDefault()
          e.stopPropagation()

          setExpanded(currentStatus => !currentStatus)
        }
      }),
    [getToggleProps, setExpanded]
  )

  // @ts-expect-error ref undefined
  const { style: collapseStyles, onTransitionEnd, ref } = useMemo(() => getCollapseProps(), [getCollapseProps])

  const { isBest, isBestTime, estimateTime, totalGasUSD } = meta
  const lastStep = calculatedSteps[calculatedSteps.length - 1]

  const isInfoVisible = (showGas && Number(totalGasUSD)) || estimateTime

  const transactionText = `${actions.length} ${actions.length > 1 ? 'transactions' : 'transaction'}`

  const routeType = routePriority === RoutePriorityEnum.Smart ? RouteViewEnum.smart : type

  const timeLabel = !!Number(estimateTime) && (
    <Label isActive={isBestTime} activeColor="blue" testId="text-time-info">
      <Icon icon="time" />
      {formatTime(Number(estimateTime), { ceil: true })}
    </Label>
  )

  const crossStep = calculatedSteps.find(step => step.type === 'cross')

  return (
    <section
      aria-hidden="true"
      className={cx(
        'rounded-xl py-3 px-2 mb-2 md:p-4 transition-colors',
        sectionStyles || [
          isRouteActive && !meta.isNeedGas
            ? 'bg-[#1112150a] dark:bg-[#ffffff0a] hover:bg-[#11121514] dark:hover:bg-[#ffffff14] active:bg-[#11121529] dark:active:bg-[#ffffff29]'
            : 'border border-dashed bg-[#ffffff0a] dark:bg-[#1112150a] border-[#11121552] dark:border-[#ffffff52]',
          isRouteActive ? 'cursor-pointer' : 'cursor-not-allowed'
        ]
      )}
    >
      <header className="relative flex">
        <div className="flex flex-1 flex-col gap-1 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 md:pb-0">
            <Title
              isMultiplyTransaction={actions.length > 1}
              type={routeType}
              meta={meta}
              symbol={lastStep.toToken.symbol}
            />
            {!isRouteActive && (
              <Label activeColor="gray" isActive>
                Inactive
              </Label>
            )}
            {isBest && (
              <Label isActive={isBest} type="bold" activeColor="green">
                Best
              </Label>
            )}
            {isBestTime && (
              <Label isActive={isBestTime} type="bold" activeColor="blue">
                Fast
              </Label>
            )}
          </div>
          {isInfoVisible && (
            <div className="flex gap-0.5 pb-1.5 md:pr-2 md:pb-0">
              {crossStep && (
                <>
                  {!!security && (
                    <Tooltip
                      content={<RiskInfo security={security} bridgeName={crossStep.tool.name} />}
                      isAnimated={false}
                    >
                      <Label>
                        <SecurityIcon score={security.score} />
                      </Label>
                    </Tooltip>
                  )}
                  {!!crossStep.tool.successRate && (
                    <Tooltip
                      isAnimated={false}
                      content={
                        <TransactionsRate progress={crossStep.tool.successRate} bridgeName={crossStep.tool.name} />
                      }
                    >
                      <Label>
                        <SuccessRateIcon progress={crossStep.tool.successRate} />
                      </Label>
                    </Tooltip>
                  )}
                </>
              )}

              <Tooltip content={transactionText} isAnimated={false}>
                <Label>
                  <Icon icon="transactions" />
                  {actions.length}
                </Label>
              </Tooltip>

              {showGas && !!Number(totalGasUSD) && (
                <Tooltip content={<TotalFeeTooltip totalGasUSD={totalGasUSD} actions={actions} />} isAnimated={false}>
                  <Label activeColor="green">
                    <Icon icon="gas" />${getSmartRoundedNumber(Number(totalGasUSD))}
                  </Label>
                </Tooltip>
              )}

              {timeLabel && !!crossStep
                ? (
                <Tooltip content={<TimeInfo toolName={crossStep.tool.name} />} isAnimated={false}>
                  {timeLabel}
                </Tooltip>
                  )
                : (
                    timeLabel
                  )}
            </div>
          )}
        </div>
        {isCollapsible && (
          <button
            type="button"
            className="parent flex h-6 w-6 items-center rounded-md transition-colors hover:bg-[#11121514] active:bg-coal-160 dark:hover:bg-[#ffffff14] dark:active:bg-white-160"
            onClick={onClickCollapse}
            data-testid="button-show-route-details"
          >
            <div className="absolute -inset-y-3 -right-2 w-14 md:-inset-y-4 md:-right-4" />
            <div className="flex h-full w-full items-center justify-center">
              <Icon
                className={cx('text-[#111215cc] dark:text-[#ffffff66]', !isExpanded && '-rotate-90')}
                icon="arrowDown"
                width={19}
                height={19}
              />
            </div>
          </button>
        )}
      </header>
      <main
        {...(isCollapsible && { style: collapseStyles, onTransitionEnd })}
        ref={ref}
        data-testid="form-route-transaction-details"
      >
        {actions.map((action, actionIndex) => {
          const { isNeedGas, isNeedApprove } = action.meta
          const transactionNo = actionIndex + 1
          const isLastAction = transactionNo === actions.length
          return (
            <div key={action.uuid} className="md:first:pt-3">
              {action.steps.map((step, stepIndex) => (
                <article
                  className="flex gap-1 pt-3 text-sm md:pt-1"
                  key={`${step.tool.name}-${step.fromToken.name}-${step.toToken.name}`}
                >
                  <div className="md:hidden">
                    <Tooltip content={getTokenDescription({ name: step.tool.name })} isAnimated={false}>
                      <Logo className="bg-white" src={step.tool.logoURI} />
                    </Tooltip>
                  </div>
                  <div className="flex flex-1 flex-row flex-wrap items-center gap-1 md:gap-3">
                    <ExchangeInfo
                      isDisabled={isNeedGas}
                      tool={step.tool}
                      fromToken={step.fromToken}
                      fromTokenAmount={step.fromTokenAmount}
                      toToken={step.toToken}
                      toTokenAmount={step.toTokenAmount}
                      type={step.type}
                    />
                    <div className="flex gap-2.5 text-xs">
                      {step.tool.estimatedTime && (
                        <div className="flex gap-1 text-coal-500 dark:text-[#ffffff66]">
                          <Icon icon="time" />
                          <div className="min-w-max font-semibold text-coal dark:text-[#ffffffa3]">
                            {formatTime(Number(step.tool.estimatedTime))}
                          </div>
                        </div>
                      )}
                      {showGas && stepIndex === 0 && !!Number(action.meta.totalGas.token) && (
                        <Tooltip
                          isAnimated={false}
                          interactive={isNeedGas}
                          content={
                            <ActionFeeTooltip
                              action={action}
                              transactionNo={transactionNo}
                              isNeedGas={isNeedGas}
                              getHeader={getFeeHeader}
                            />
                          }
                        >
                          <div
                            className={cx(
                              'flex gap-0.5 text-xs',
                              isNeedGas ? 'text-[#FF2E2ECC]' : 'text-coal-500 dark:text-[#ffffff66]'
                            )}
                          >
                            <div className="flex">
                              {isNeedApprove && <Icon icon="approve" className="-mr-1" />}
                              <Icon icon="gas" />
                            </div>
                            <div
                              className={cx(isNeedGas ? 'text-[#ff2e2ecc]' : 'text-[#111215cc] dark:text-[#ffffffa3]')}
                            >
                              {action.meta.totalGas.token} {action.meta.network?.currencySymbol}
                            </div>
                          </div>
                        </Tooltip>
                      )}
                    </div>
                  </div>
                </article>
              ))}
              {!isLastAction && (
                <div className="-mr-2 flex items-center gap-4 pt-3 pl-4 md:pt-1.5 md:pb-0.5">
                  <div className="h-1 w-1 rounded-3xl bg-[#1112157A] dark:bg-[#FFFFFF52]" />

                  <div className="h-px w-full bg-[#11121514] dark:bg-[#FFFFFF14] md:hidden" />
                </div>
              )}
            </div>
          )
        })}
      </main>
    </section>
  )
})

Route.displayName = 'Route'

export { Route }
