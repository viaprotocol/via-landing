import type { TTool } from '@/api/routerApi.types'
import { ToolTypeEnum } from '@/api/routerApi.types'

const aggregators: TTool[] = [
  {
    name: 'Rango',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/rango.svg'
  },
  {
    name: 'Symbiosis',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/symbiosis.svg'
  },
  {
    name: 'deBridge',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/debridge.svg'
  },
  {
    name: 'Li Finance',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/lifi.svg'
  },
  {
    name: 'XY Finance',
    type: ToolTypeEnum.Aggregator,
    logoURI: '/images/aggregators/xy.svg'
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
