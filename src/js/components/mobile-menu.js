export default class MobileMenu {
  constructor() {
    this._bodyEl = document.body
    this._el = document.querySelector('.mobile-menu')
    this._openEl = document.querySelector('.header__burger-button')
    this._closeEl = document.querySelector('.mobile-menu__close')

    this.isMenuOpened = false
  }

  _toggleScroll() {
    this._bodyEl.classList.toggle('no-scroll', this.isMenuOpened)
  }

  _openMenu() {
    this._el.classList.add('mobile-menu--opened')
    this.isMenuOpened = true
    this._toggleScroll()
  }

  _closeMenu() {
    this._el.classList.remove('mobile-menu--opened')
    this.isMenuOpened = false
    this._toggleScroll()
  }

  _initHandleOpenMenu() {
    this._openEl.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()

      this._openMenu()
    })
  }

  _initHandleCloseMenu() {
    this._closeEl.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()

      this._closeMenu()
    })
  }

  init() {
    this._initHandleCloseMenu()
    this._initHandleOpenMenu()
    console.log('inited')
  }
}
