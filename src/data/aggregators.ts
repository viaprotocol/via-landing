import type { TTool } from '@/api/routerApi.types'
import { ToolTypeEnum } from '@/api/routerApi.types'

const aggregators: TTool[] = [
  {
    name: 'Rango',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/aggregator-1.svg'
  },
  {
    name: 'Symbiosis',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/aggregator-2.svg'
  },
  {
    name: 'deBridge',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/aggregator-3.svg'
  },
  {
    name: 'Li Finance',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/aggregator-4.svg'
  },
  {
    name: 'XY Finance',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/aggregator-5.svg'
  },
  {
    name: 'Rubic',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/rubic.svg'
  },
  {
    name: 'Chainswap',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/chainswap.svg'
  },
  {
    name: 'o3swap',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/o3swap.svg'

  },
  {
    name: 'iSwap',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/iswap.svg'
  }
]

export { aggregators }
