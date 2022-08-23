import { Routes } from './components/Routes'
import styles from './Demo.module.scss'

function Demo() {
  // const { status } = useRoutes()

  // useEffect(() => {
  //   console.log({ status })
  // }, [status])

  return (
    <section className={styles.demo}>
      <h2 className={styles.title}>All cross-chain<br />routes in one interface</h2>
      <p className={styles.description}>
        <span>Be sure that you will make a cross-chain transfer in the most efficient and safe way</span>
        <a href="https://router.via.exchange/" target="_blank" rel="noopener norefferer noreferrer">Open</a>
      </p>
      <Routes />
    </section>
  )
}

export { Demo }
