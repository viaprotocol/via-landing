import { fetchTools } from '@/api/routerApi'
import type { TTool } from '@/api/routerApi.types'
import { ToolTypeEnum } from '@/api/routerApi.types'
import { useEffect, useMemo, useState } from 'react'

export function useTools() {
  const [tools, setTools] = useState<TTool[] | null>(null)

  useEffect(() => {
    fetchTools().then(res => setTools(res))
  }, [])

  const filteredTools = useMemo(() => {
    if (!tools) {
      return {}
    }
    return tools.reduce(
      (acc, tool) => {
        if (tool.type === ToolTypeEnum.Swap) {
          acc.dex.push(tool)
        }
        if (tool.type === ToolTypeEnum.Cross) {
          acc.bridge.push(tool)
        }
        return acc
      }, { all: tools, dex: [] as TTool[], bridge: [] as TTool[], aggregator: [] as TTool[] })
  }, [tools])

  return { filteredTools }
}
