import type { CSSProperties, ImgHTMLAttributes } from 'react'
import { useCallback, useEffect, useState } from 'react'

export type ImageProps = {
  src?: string
  style?: CSSProperties
  borderColor?: string | null
  borderWidth?: number
  alt?: string
} & ImgHTMLAttributes<HTMLImageElement>

function ImageComponent({ src = '', style = {}, borderColor = '', borderWidth = 0, alt = '', ...props }: ImageProps) {
  const placeholderImg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23${
    borderColor ? borderColor.substring(1) : 'ffffff0d'
  }' fill-opacity='0.5' /%3E%3C/svg%3E`

  const [imgSrc, setSrc] = useState(placeholderImg || src)

  if (borderWidth) {
    style.borderWidth = borderWidth
    style.borderColor = borderColor ? `${borderColor}33` : '#ccc3'
  }

  const onLoad = useCallback(() => {
    setSrc(src)
  }, [src])

  const onError = useCallback(() => {
    setSrc(placeholderImg)
  }, [])

  useEffect(() => {
    const img = new Image()
    img.src = src as string
    img.addEventListener('load', onLoad)
    img.addEventListener('error', onError)
    return () => {
      img.removeEventListener('load', onLoad)
      img.removeEventListener('error', onError)
    }
  }, [src, onLoad, onError])

  return <img {...props} src={imgSrc} style={style} alt={alt} />
}

export { ImageComponent as Image }
