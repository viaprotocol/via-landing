import { Icon } from '@/components/kit'

import type { TTimeInfoProps } from './types'

const TimeInfo = (props: TTimeInfoProps) => {
  const { toolName } = props
  return (
    <div className="flex max-w-[185px] items-start gap-1">
      <div>
        <Icon icon="time" />
      </div>
      <div>
        Average duration of the last 10 transactions via <b className="font-bold ">{toolName}</b>
      </div>
    </div>
  )
}

export { TimeInfo }
