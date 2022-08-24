import { useMediaQuery } from 'react-responsive'

export function useMedia() {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return {
    isMobile,
  }
}
