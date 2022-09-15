import { useCallback, useContext, useState } from 'react'
import cx from 'classnames'

import styles from './Header.module.scss'
import { socials } from '@/data/socials'
import { StateContext } from '@/state'
import { Icon } from '@/components/kit'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(state => !state)
  }, [])

  const { openMobileMenu } = useContext(StateContext)

  return (
    <header className={styles.header}>
      <div className={styles.headerLogoContainer}>
        <img src="/images/logo.svg" alt="Via" className={styles.headerLogoImage} />
        <div className={styles.headerLogoDescription}>
          <strong>The most efficient</strong>
          <div>Cross-chain router</div>
        </div>
      </div>

      <ul className={styles.headerSocials}>
        {socials.map(social => (
          <li key={social.name}>
            <a href={social.link} className={styles.headerSocialLink} target="_blank" rel="noopener noreferrer">
              {social.icon}
              <span className="visually-hidden">{social.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <button type="button" className={styles.headerBurgerButton} onClick={openMobileMenu}>
        <img src="/images/icons/menu-icon.svg" alt="Menu icon" width="24" height="24" />
      </button>

      <nav className={styles.headerActions}>
        <a href="https://docs.via.exchange/product-docs/" className={styles.headerActionButton} target="_blank" rel="noreferrer">
          Docs
        </a>
        <button onClick={toggleMenu} className={cx(
          styles.headerActionButton,
          styles.headerProductsButton,
          isMenuOpen && styles.headerProductsButtonOpened
        )}>
          {isMenuOpen ?
            <Icon icon="close" className="mt-1" />
            :
            <span>Products</span>
          }
        </button>
        <div className={cx(
          styles.headerProducts,
          isMenuOpen && styles.headerProductsOpened
        )}>
          <ul className={styles.headerProductsList}>
            <li className={styles.menuProduct}>
              <a href="https://router.via.exchange/" className={styles.menuProductWrapper} target="_blank" rel="noopener noreferrer">
                <div className={styles.menuProductImageWrapper}>
                  <img className={styles.menuProductImage} width="24" height="24" src="/images/icons/router.svg" alt="Cross-chain Aggregation Protocol" />
                </div>
                <div className={styles.menuProductInfo}>
                  <h4 className={styles.menuProductTitle}>Cross-chain Aggregation Protocol</h4>
                  <p className={styles.menuProductDescription}>The best router for any-to-any cross-chain swaps</p>
                </div>
              </a>
            </li>
            <li className={styles.menuProduct}>
              <a href="https://github.com/viaprotocol/via-sdk-js" className={styles.menuProductWrapper} target="_blank" rel="noopener noreferrer">
                <div className={styles.menuProductImageWrapper}>
                  <img className={styles.menuProductImage} width="24" height="24" src="/images/icons/api.svg" alt="API" />
                </div>
                <div className={styles.menuProductInfo}>
                  <h4 className={styles.menuProductTitle}>API</h4>
                  <p className={styles.menuProductDescription}>Access to multi-chain for wallets, games and marketplaces</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export { Header }
