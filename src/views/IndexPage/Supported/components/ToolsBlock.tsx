import type { TTool } from '@/api/routerApi.types'
import { Image } from '@/components/kit'
import { useMemo } from 'react'
import Marquee from 'react-fast-marquee'
import cx from 'classnames'
import { useMedia } from '@/hooks'

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
  if (count <= 40) {
    return 6
  }
  return 7
}

const ToolsBlock = ({ tools }: { tools: TTool[] }) => {
  const { isLarge } = useMedia()

  const splitSize = useMemo(() => getSplitSize(tools.length), [tools])
  const splittedTools = useMemo(() => {
    const res = tools.sort(() => Math.random() - 0.5).reduce((acc, el) => {
      const arrLength = parseInt((tools.length / splitSize).toString())
      if (acc[acc.length - 1].length === arrLength && acc.length < splitSize) {
        acc.push([])
      }

      acc[acc.length - 1].push(el)
      return acc
    }, [[]] as TTool[][])

    return res
  }, [tools])

  return <div className={cx('origin-left lg:-ml-36 lg:-mb-64 lg:-rotate-45')} style={isLarge ? {
    paddingTop: `${80 * 1 / Math.max(splitSize, 3)}rem`
  } : undefined}>
    {splittedTools.map((tools, index) => (
      <Marquee key={index} gradient={false} speed={10 + index * 2} direction={index % 2 ? 'left' : 'right'} style={{ paddingInlineStart: `${index * 4}px` }}>
      <div className="mb-5 flex items-center">
        {tools.map((tool) => {
          return (
            <div className="mx-2.5" key={tool.name}>
              <Image src={tool.logoURI} alt={tool.name} title={tool.name} width={48} height={48} className="rounded-full md:h-20 md:w-20" />
            </div>
          )
        })}
        {tools.map((tool) => {
          return (
            <div className="mx-3.5 md:mx-5" key={tool.name}>
              <Image src={tool.logoURI} alt={tool.name} title={tool.name} width={48} height={48} className="rounded-full md:h-20 md:w-20" />
            </div>
          )
        })}
      </div>
    </Marquee>
    ))}
  </div>
}

export { ToolsBlock }
