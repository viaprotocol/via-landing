export default class MobileMenu {
  constructor() {
    this._bodyEl = document.body
    this._menuEl = document.querySelector('.mobile-menu')
    this._openButton = document.querySelector('.header__burger-button')
    this._closeButton = document.querySelector('.mobile-menu__close')

    this.isMenuOpened = false
  }

  _toggleScroll() {
    this._bodyEl.classList.toggle('no-scroll', this.isMenuOpened)
  }

  _openMenu() {
    this._menuEl.classList.add('mobile-menu--opened')
    this.isMenuOpened = true
    this._toggleScroll()
  }

  _closeMenu() {
    this._menuEl.classList.remove('mobile-menu--opened')
    this.isMenuOpened = false
    this._toggleScroll()
  }

  _initHandleOpenMenu() {
    this._openButton.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()

      this._openMenu()
    })
  }

  _initHandleCloseMenu() {
    this._closeButton.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()

      this._closeMenu()
    })
  }

  init() {
    this._initHandleCloseMenu()
    this._initHandleOpenMenu()
  }
}
