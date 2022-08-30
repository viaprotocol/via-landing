import { useMediaQuery } from 'react-responsive'

export function useMedia() {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isLarge = useMediaQuery({ minWidth: 1024 })

  return {
    isMobile,
    isLarge
  }
}
