import type IsoWebSocket from 'isomorphic-ws'
import { useEffect, useRef, useState } from 'react'
import { cli } from '@/api/router'

export function useRoutes() {
  const [status, setStatus] = useState<string>('idle')
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

    ws.current.onopen = () => setStatus('inited')
    ws.current.onclose = () => setStatus('closed')
    ws.current.onmessage = (e) => {
      const message = JSON.parse(e.data as string)
      if (Array.isArray(message)) {
        console.log(message)
      } else {
        const { finished, all } = message.status
        if (finished === all) {
          wsCurrent.close()
        }
      }
    }

    return () => {
      wsCurrent.close()
    }
  }, [])

  return { status }
}
