import cx from 'classnames'
import { useContext, useEffect, useState } from 'react'

import styles from './Header.module.scss'
import { socials } from '@/data/socials'
import { StateContext } from '@/state'

function Header() {
  const { openMobileMenu } = useContext(StateContext)

  const [isHeaderCompact, setHeaderCompact] = useState(false)
  const [isSocialsExpanded, setSocialsExpanded] = useState(false)

  const handleScroll = () => {
    setHeaderCompact(window.pageYOffset > 5)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const socialItem = social => (
    <li key={social.name}>
      <a href={social.link} className={styles.headerSocialItem} target="_blank" rel="noopener noreferrer">
        {social.icon}
        <span className="visually-hidden">{social.name}</span>
      </a>
    </li>
  )

  const toggleSocials = () => { setSocialsExpanded(!isSocialsExpanded) }

  return (
    <header className={cx(styles.header, isHeaderCompact && styles.headerCompact)}>
      <div className={styles.headerLogoContainer}>
        <img src="/images/logo.svg" alt="Via" className={styles.headerLogoImage} />
        <div className={styles.headerLogoDescription}>
          <strong>The most efficient</strong>
          <div>Cross-chain router</div>
        </div>
      </div>

      <div className={styles.headerDesktopRight}>
        <div className={styles.headerSocialsWrapper}>
          <ul className={cx(styles.headerSocials, styles.headerSocialsPreview, isSocialsExpanded && styles.headerSocialsHidden)}>
            {socials.slice(0, 3).map(socialItem)}
            <button className={styles.headerSocialToggler} onClick={toggleSocials}>...</button>
          </ul>

          <ul className={cx(styles.headerSocials, !isSocialsExpanded && styles.headerSocialsHidden)}>
            {socials.map(socialItem)}
            <button className={styles.headerSocialToggler} onClick={toggleSocials}>...</button>
          </ul>
        </div>

        <nav className={styles.headerButtons}>
          <a href="https://docs.via.exchange/product-docs" className={styles.headerButton} target="_blank" rel="noreferrer">
            Docs
          </a>
          <a href="https://github.com/viaprotocol/via-sdk-js" className={styles.headerButton} target="_blank" rel="noreferrer">
            SDK
          </a>
          <a href="https://router.via.exchange" className={cx(styles.headerButton, styles.headerLaunchButton, isHeaderCompact && styles.headerLaunchButtonCompact)} target="_blank" rel="noreferrer">
            Launch
          </a>
        </nav>
      </div>

      <button type="button" className={styles.headerBurgerButton} onClick={openMobileMenu}>
        <img src="/images/icons/menu-icon.svg" alt="Menu icon" width="24" height="24" />
      </button>
    </header>
  )
}

export { Header }
