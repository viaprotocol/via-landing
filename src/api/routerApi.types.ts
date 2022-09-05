enum ToolTypeEnum {
  Swap = 'swap',
  Cross = 'cross'
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
