import cx from 'classnames'
import type { FC, PropsWithChildren } from 'react'
import { memo } from 'react'
import dynamic from 'next/dynamic'
import { getTokenDescription } from '../../helpers'
import type { TExchangeInfoProps, TExchangeInfoStandProps, TToken } from '../../types'
import { getNotAvailablePriceText } from '../helpers'
import { CURRENCY_CRYPTO, formatValue } from '@/format-crypto/format'

import type { TTooltipProps } from '@/components/kit'
import { Icon, Logo, NetworkLogo } from '@/components/kit'

import { fromDecimal, networks } from '../../utils'

const MIN_NO_PRICE = 2
const MAX_NO_PRICE = 5

const Tooltip = dynamic<PropsWithChildren<TTooltipProps>>(() => import('@/components/kit/Tooltip/Tooltip').then(mod => mod.Tooltip), {
  ssr: false
})

const ExchangeInfoStand: FC<PropsWithChildren<TExchangeInfoStandProps>> = memo(
  ({ token, tokenAmount }: PropsWithChildren<TExchangeInfoStandProps>) => {
    const getNetwork = ({ chainId }: TToken) => networks.find(network => network.chainId === chainId)

    const network = getNetwork(token)
    const notAvailablePrice = !tokenAmount || !Number(tokenAmount)
    const notAvailablePriceText = getNotAvailablePriceText(
      MIN_NO_PRICE + Math.round(Math.random() * (MAX_NO_PRICE - MIN_NO_PRICE))
    )

    return (
      <div className="flex items-center gap-2">
        <Tooltip content={getTokenDescription({ name: token.name, network: network?.name })} isAnimated={false}>
          <NetworkLogo
            coinLogo={token.logoURI}
            networkLogo={network?.logoURI}
            networkBackgroundColor={network?.color}
          />
        </Tooltip>
        <div>
          {notAvailablePrice
            ? (
            <Tooltip content="We don't know intermediate amount" isAnimated={false}>
              {notAvailablePriceText}
            </Tooltip>
              )
            : (
                formatValue(CURRENCY_CRYPTO, fromDecimal(tokenAmount, token.decimals))
              )}
        </div>
      </div>
    )
  }
)

const ExchangeInfo: FC<PropsWithChildren<TExchangeInfoProps>> = memo(
  ({
    fromToken,
    fromTokenAmount,
    toToken,
    toTokenAmount,
    type,
    tool,
    isDisabled = false
  }: PropsWithChildren<TExchangeInfoProps>) => {
    return (
      <div className="flex">
        <div
          className={cx(
            'inline-flex gap-3.5 rounded-2xl p-1 pr-2 md:p-[1px] md:pr-2.5 md:gap-2',
            isDisabled
              ? 'text-[#1112157a] dark:text-[#ffffff52] bg-[#1112150a] dark:bg-[#ffffff0a]'
              : 'bg-[#11121514] dark:bg-[#ffffff14]'
          )}
        >
          <div className="hidden md:mr-1 md:flex">
            <Tooltip content={getTokenDescription({ name: tool.name })}>
              <Logo className="bg-white" src={tool.logoURI} />
            </Tooltip>
          </div>
          <ExchangeInfoStand token={fromToken} tokenAmount={fromTokenAmount} />
          <div className="flex justify-center">
            <div className='flex w-full h-full items-center justify-center'>
              {type === 'swap' ? <Icon icon="stepSwap" /> : <Icon icon="stepBridge" />}
            </div>
          </div>
          <ExchangeInfoStand token={toToken} tokenAmount={toTokenAmount} />
        </div>
      </div>
    )
  }
)

ExchangeInfoStand.displayName = 'ExchangeInfoStand'
ExchangeInfo.displayName = 'ExchangeInfo'

export { ExchangeInfo }
