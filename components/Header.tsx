import Image from 'next/image'
import { useCallback, useState } from 'react'
import cx from 'classnames'
import { socials } from '../data/socials'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(state => !state)
  }, [])
  return (
    <header className="header">
      <div className="header__logo-container">
        <img src="/images/logo.svg" alt="Via" className="header__logo" />
        <div className="header__logo-description">
          <strong>Cross-chain</strong>
          <div>liquidity aggregation protocol</div>
        </div>
      </div>

      <ul className="header__socials">
        {socials.map(social => (
          <li key={social.name}>
            <a href={social.link} className="header__social-link" target="_blank" rel="noopener noreferrer">
              {social.icon}
              <span className="visually-hidden">{social.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <button type="button" className="header__burger-button">
        <img src="/images/icons/menu-icon.svg" alt="Menu icon" width="24" height="24" />
      </button>

      <nav className="header__actions">
        <a href="https://docs.via.exchange/product-docs/" className="header__action-button" target="_blank" rel="noreferrer">
          Docs
        </a>
        <button onClick={toggleMenu} className={cx('header__action-button header__products-button', isMenuOpen && 'header__products-button--opened')}>
          Products
          <Image className="header__products-icon" src="/images/icons/close.svg" width="16" height="16" />
        </button>
        <div className={cx('header__products', isMenuOpen && 'header__products--opened')}>
          <ul className="header__products-list">
            <li className="header__product menu-product">
              <a href="https://router.via.exchange/" className="menu-product__wrapper" target="_blank" rel="noopener noreferrer">
                <div className="menu-product__image-wrapper">
                  <img className="menu-product__image" width="24" height="24" src="/images/icons/router.svg" alt="Cross-chain Aggregation Protocol" />
                </div>
                <div className="menu-product__info">
                  <h4 className="menu-product__title">Cross-chain Aggregation Protocol</h4>
                  <p className="menu-product__description">The best router for any-to-any cross-chain swaps</p>
                </div>
              </a>
            </li>
            <li className="header__product menu-product">
              <a href="https://github.com/viaprotocol/via-sdk-js" className="menu-product__wrapper" target="_blank" rel="noopener noreferrer">
                <div className="menu-product__image-wrapper">
                  <img className="menu-product__image" width="24" height="24" src="/images/icons/api.svg" alt="API" />
                </div>
                <div className="menu-product__info">
                  <h4 className="menu-product__title">API</h4>
                  <p className="menu-product__description">Access to multi-chain for wallets, games and marketplaces</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
