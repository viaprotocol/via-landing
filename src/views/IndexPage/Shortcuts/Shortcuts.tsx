import { Section } from '@/components/layout'
import styles from './Shortcuts.module.scss'
import { Image } from '@/components/kit'

function Shortcuts() {
  return (
    <Section className="flex flex-col items-center justify-center">
      <div className="mb-1 ml-[2em] text-center text-[12px] leading-[12px] tracking-[2em] text-[#00FF60]">SOON</div>
      <h2 className={styles.title}>Shortcuts</h2>
      <p className={styles.description}>Use the interface without a&nbsp;mouse from start to finish</p>
      <Image className={styles.image} src="/images/shortcuts.svg" alt="Shortcuts" width="335" height="81" />
    </Section>
  )
}

export { Shortcuts }
