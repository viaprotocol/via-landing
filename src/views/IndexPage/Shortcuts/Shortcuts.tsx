import { Section } from '@/components/layout'
import styles from '@/views/IndexPage/Wallets/Wallets.module.scss'
import Image from 'next/image'

function Shortcuts() {
  return (
        <Section className="flex flex-col justify-center">
            <h2 className={styles.title}>Shortcuts</h2>
            <p className={styles.description}>Use the interface without a&nbsp;mouse from start to finish</p>
            <Image className={styles.image} src="/images/shortcuts.svg" alt="Shortcuts" width="335" height="81" />
        </Section>
  )
}

export { Shortcuts }
