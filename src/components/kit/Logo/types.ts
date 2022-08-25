import type { HTMLAttributes } from 'react'

import type { ImageProps } from '../Image/Image'

type TLogoProps = {
  className?: string
  imageClassName?: string
  src: string
  alt?: string
  width?: number
  height?: number
  style?: HTMLAttributes<any>['style']
} & ImageProps

export type { TLogoProps }
