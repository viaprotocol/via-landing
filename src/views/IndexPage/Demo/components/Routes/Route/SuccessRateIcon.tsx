import Route0 from 'public/images/routesuccuess/0.svg'
import Route1 from 'public/images/routesuccuess/1.svg'
import Route2 from 'public/images/routesuccuess/2.svg'
import Route3 from 'public/images/routesuccuess/3.svg'
import Route4 from 'public/images/routesuccuess/4.svg'
import Route5 from 'public/images/routesuccuess/5.svg'
import Route6 from 'public/images/routesuccuess/6.svg'
import Route7 from 'public/images/routesuccuess/7.svg'
import Route8 from 'public/images/routesuccuess/8.svg'
import Route9 from 'public/images/routesuccuess/9.svg'
import Route10 from 'public/images/routesuccuess/10.svg'

import type { TSuccessRateIconProps } from './types'

const config = [Route0, Route1, Route2, Route3, Route4, Route5, Route6, Route7, Route8, Route9, Route10]

const getSuccessRate = (progress: string, limit: string) =>
  Math.min(Math.floor((Number(progress) / Number(limit)) * 100), 100)

const SuccessRateIcon = (props: TSuccessRateIconProps) => {
  const { progress, limit = '1' } = props
  const currentIndex = Math.floor(getSuccessRate(progress, limit) / 10)

  const Component = config[currentIndex]

  return <Component />
}

export { SuccessRateIcon, getSuccessRate }
