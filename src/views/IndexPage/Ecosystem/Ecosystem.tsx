import { Section } from '@/components/layout'
import { useMemo } from 'react'
import type { TSimpleNetwork } from '@/data/networks'
import { networks } from '@/data/networks'
import styles from './Ecosystem.module.scss'
import { useMedia } from '@/hooks'
import { EcoBlock } from './components/EcoBlock'

function Ecosystem() {
  const { isMobile } = useMedia()

  const blockLength = (isMobile ? 7 * 5 : 10 * 6) - 6

  const blocks = useMemo(() => {
    const res: Array<TSimpleNetwork | null> = networks.slice(0, blockLength / 2)

    while (res.length < blockLength) {
      res.push(null)
    }

    return res.sort(() => Math.random() - 0.5)
  }, [blockLength])
  return (
    <div className={styles.bg}>
      <Section className="relative min-h-[704px] w-full">
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h2 className={styles.title}>Advanced routes <br /> for all ecosystems</h2>
            <p className={styles.subtitle}>Seamlessly move tokens between ecosystems, even if there is no direct bridge</p>
          </div>
          {blocks.map((network, index) => (
            <EcoBlock key={index} network={network} />
          ))}
        </div>
      </Section>
    </div>
  )
}

export { Ecosystem }
