import type { TTool } from '@/api/routerApi.types'
import { useMemo } from 'react'
import Marquee from 'react-fast-marquee'

const getSplitSize = (count: number) => {
  if (count <= 14) {
    return 2
  }
  if (count <= 20) {
    return 3
  }
  if (count <= 30) {
    return 4
  }
  return 6
}

const ToolsBlock = ({ tools }: { tools: TTool[] }) => {
  const splittedTools = useMemo(() => {
    const splitSize = getSplitSize(tools.length)

    const res = tools.reduce((acc, el) => {
      const arrLength = parseInt((tools.length / splitSize).toString())
      if (acc[acc.length - 1].length === arrLength && acc.length < splitSize) {
        acc.push([])
      }

      acc[acc.length - 1].push(el)
      return acc
    }, [[]] as TTool[][])

    return res
  }, [tools])

  return <div className="origin-left lg:-ml-28 lg:-mb-60 lg:-rotate-45 lg:pt-64">
    {splittedTools.map((tools, index) => (
      <Marquee key={index} gradient={false} delay={2 * index} speed={10 + index * 2} direction={index % 2 ? 'left' : 'right'}>
      <div className="mb-7 flex items-center md:mb-9">
        {tools.map((tool) => {
          return (
            <div className="mx-3.5 md:mx-5" key={tool.name}>
              <img src={tool.logoURI} alt={tool.name} width={48} height={48} className="md:h-20 md:w-20" />
            </div>
          )
        })}
      </div>
    </Marquee>
    ))}
  </div>
}

export { ToolsBlock }
