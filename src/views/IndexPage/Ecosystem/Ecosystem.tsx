import { networks } from '@/data/networks'
import { useMedia } from '@/hooks'
import { useCallback, useEffect, useState } from 'react'
import { EcoBlock } from './components/EcoBlock'
import styles from './Ecosystem.module.scss'
import type { TBlocks } from './types'

function Ecosystem() {
  const { isLarge } = useMedia()
  const [blocks, setBlocks] = useState<TBlocks>([])

  const blockLength = (isLarge ? 9 * 6 : 7 * 5) - 6

  const refreshBlocks = useCallback(() => {
    const allNetworks = [...networks]
    const res: TBlocks = allNetworks.sort(() => Math.random() - 0.5).slice(0, 8)

    while (res.length < blockLength) {
      res.push(null)
    }
    console.log('update')

    setBlocks(res.sort(() => Math.random() - 0.5))
  }, [blockLength, networks])

  useEffect(() => {
    refreshBlocks()
  }, [])

  useEffect(() => {
    // refresh blocks every 20 seconds
    const interval = setInterval(refreshBlocks, 20 * 1000)
    return () => clearInterval(interval)
  }, [refreshBlocks])

  return (
    <div className={styles.bg}>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h2 className={styles.title}>Advanced routes <br /> for all ecosystems</h2>
            <p className={styles.subtitle}>Seamlessly move tokens between ecosystems, even if there is no direct bridge</p>
          </div>
          {blocks.map((network, index) => (
            <EcoBlock key={index} network={network} />
          ))}
        </div>
    </div>
  )
}

export { Ecosystem }
