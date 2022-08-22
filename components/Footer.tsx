import cx from 'classnames'
import { socials } from '../data/socials'

function Footer() {
  return (
    <footer>
      <img src="images/logo-footer.svg" alt="Via" width="74" height="16" />
      <div className="description-and-year">
        <span className="description">Cross&#8209;chain aggregation protocol, 2022</span>
      </div>
      <a href="https://docs.via.exchange/product-docs/" className="docs-link" target="_blank" rel="noreferrer">Docs</a>
    </footer>
  )
}

export default Footer
