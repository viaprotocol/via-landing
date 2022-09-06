enum ToolTypeEnum {
  Swap = 'swap',
  Cross = 'cross',
  Aggregator = 'aggregator'
}

type TTool = {
  name: string
  type: ToolTypeEnum
  logoURI: string
}

type TToolResponse = {
  tools: TTool[]
}
export type { TTool, TToolResponse }
export { ToolTypeEnum }
