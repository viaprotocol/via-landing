import type IsoWebSocket from 'isomorphic-ws'
import { useEffect, useRef, useState } from 'react'
import { cli } from '@/api/router'
import { useFormattedRoutes } from './useFormattedRoutes'
import type { TRoute } from '@/views/IndexPage/Demo/components/Routes'

export function useRoutes() {
  const [routes, setRoutes] = useState<TRoute[]>([])
  const [, setStatus] = useState<string>('idle')
  const ws = useRef<IsoWebSocket>()

  useEffect(() => {
    ws.current = cli.getRoutesViaWs({
      fromAddress: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
      toAddress: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
      fromAmount: 1000000000,
      fromChainId: 250,
      toChainId: 1,
      fromTokenAddress: '0x049d68029688eAbF473097a2fC38ef61633A3C7A',
      toTokenAddress: '0x0000000000000000000000000000000000000000',
      multiTx: true
    })

    const wsCurrent = ws.current

    ws.current.onopen = () => {
      setRoutes([])
      setStatus('inited')
    }
    ws.current.onclose = () => setStatus('closed')
    ws.current.onmessage = (e) => {
      const data = JSON.parse(e.data as string)
      if (Array.isArray(data)) {
        setRoutes(routes => [...routes, ...data])
      } else {
        const { finished, all } = data.status
        if (finished === all) {
          wsCurrent.close()
        }
      }
    }

    return () => {
      wsCurrent.close()
    }
  }, [])

  const formattedRoutes = useFormattedRoutes(routes)

  return formattedRoutes
}
