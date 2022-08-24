import { Routes } from './components/Routes'
import styles from './Demo.module.scss'

function Demo() {
  return (
    <section className={styles.demo}>
      <h2 className={styles.title}>All cross-chain<br />routes in one interface</h2>
      <p className={styles.description}>
        <span>Be sure that you will make a<br/>cross-chain transfer in the<br/>most efficient and safe way</span>
        <a href="https://router.via.exchange/" target="_blank" rel="noopener norefferer noreferrer" className={styles.button}>Open</a>
      </p>
      <Routes className={styles.routes} />
    </section>
  )
}

export { Demo }
