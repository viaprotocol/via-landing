import styles from './Footer.module.scss'

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className="flex flex-col items-center gap-2.5 lg:flex-row lg:gap-8">
        <img src="images/logo-footer.svg" alt="Via" width="74" height="16" />
        <div className={styles.descriptionAndYear}>
          Cross&#8209;chain aggregation protocol, 2022
        </div>
      </div>
      <div>Socials...</div>
    </div>
  )
}

export { Footer }
