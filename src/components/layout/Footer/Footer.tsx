import styles from './Footer.module.scss'

function Footer() {
  return (
    <div className={styles.Footer}>
      <img src="images/logo-footer.svg" alt="Via" width="74" height="16" />
      <div className={styles.descriptionAndYear}>
        <span className="description">Cross&#8209;chain aggregation protocol, 2022</span>
      </div>
      <a href="https://docs.via.exchange/product-docs/" className={styles.docsLink} target="_blank" rel="noreferrer">Docs</a>
    </div>
  )
}

export { Footer }
