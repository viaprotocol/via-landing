import cx from 'classnames'
import { useContext } from 'react'

import { StateContext } from '@/state'
import { Icon } from '@/components/kit'

function MobileMenu() {
  const { isMobileMenuOpen, closeMobileMenu } = useContext(StateContext)

  return (
    <section className={cx(
      'mobile-menu',
      isMobileMenuOpen && 'mobile-menu--opened'
    )}>
      <header className="mobile-menu__header">
        <button type="button" className="mobile-menu__close" onClick={closeMobileMenu}>
          <Icon icon="close" />
        </button>

        <a href="https://docs.via.exchange/product-docs/" className="mobile-menu__docs" target="_blank" rel="noopener noreferrer">
          <span>Via Docs</span>
          <img src="/images/icons/external.svg" alt="External link" width="16" height="16" />
        </a>
      </header>

      <h3 className="mobile-menu__title">Products</h3>

      <ul className="mobile-menu__products">
        <li className="mobile-menu__product menu-product">
          <a href="https://router.via.exchange/" className="menu-product__wrapper" target="_blank" rel="noopener noreferrer">
            <div className="menu-product__image-wrapper">
              <img className="menu-product__image" width={24} height={24} src="/images/icons/router.svg" alt="Cross-chain Aggregation Protocol" />
            </div>
            <div className="menu-product__info">
              <h4 className="menu-product__title">Cross-chain Aggregation Protocol</h4>
              <p className="menu-product__description">The best router for any-to-any cross-chain swaps</p>
            </div>
          </a>
        </li>
        <li className="mobile-menu__product menu-product">
          <a href="https://github.com/viaprotocol/via-sdk-js" className="menu-product__wrapper" target="_blank" rel="noopener noreferrer">
            <div className="menu-product__image-wrapper">
              <img className="menu-product__image" width={24} height={24} src="/images/icons/api.svg" alt="API" />
            </div>
            <div className="menu-product__info">
              <h4 className="menu-product__title">API</h4>
              <p className="menu-product__description">Access to multi-chain for wallets, games and marketplaces</p>
            </div>
          </a>
        </li>
      </ul>
      <ul className="mobile-menu__socials">
        <li>
          <a className="mobile-menu__social-link" href="https://gitcoin.co/grants/4665/via-protocol" target="_blank" rel="noopener noreferrer">
            <Icon icon="gitcoin" width={24} height={24} />
            <span className="visually-hidden">Gitcoin</span>
          </a>
        </li>
        <li>
          <a className="mobile-menu__social-link" href="https://github.com/viaprotocol" target="_blank" rel="noopener noreferrer">
            <Icon icon="github" width={24} height={24} />
            <span className="visually-hidden">Github</span>
          </a>
        </li>
        <li>
          <a className="mobile-menu__social-link" href="https://discord.gg/viaexchange" target="_blank" rel="noopener noreferrer">
            <Icon icon="discord" width={24} height={24} />
            <span className="visually-hidden">Discord</span>
          </a>
        </li>
        <li>
          <a className="mobile-menu__social-link" href="https://twitter.com/via_protocol" target="_blank" rel="noopener noreferrer">
            <Icon icon="twitter" width={24} height={24} />
            <span className="visually-hidden">Twitter</span>
          </a>
        </li>
        <li>
          <a className="mobile-menu__social-link" href="https://t.me/viaexchange" target="_blank" rel="noopener noreferrer">
            <Icon icon="telegram" width={24} height={24} />
            <span className="visually-hidden">Telegram</span>
          </a>
        </li>
        <li>
          <a className="mobile-menu__social-link" href="https://medium.com/via-exchange" target="_blank" rel="noopener noreferrer">
            <Icon icon="medium" width={24} height={24} />
            <span className="visually-hidden">Medium</span>
          </a>
        </li>
      </ul>
    </section>
  )
}

export { MobileMenu }
