export default class DesktopHeader {
  constructor() {
    this._moreSocialsButton = document.querySelector('.header__more-button')
    this._moreSocialEl = document.querySelector('.header__more-socials')
    this._socialEl = document.querySelector('.header__socials')

    this._productsButton = document.querySelector('.header__products-button')
    this._productsEl = document.querySelector('.header__products')

    this.isSocialsOpened = false
    this.isProductsOpened = false
  }

  _toggleSocials() {
    this._moreSocialsButton.classList.toggle('header__more-button--opened', this.isSocialsOpened)
    this._moreSocialEl.classList.toggle('header__socials--opened', this.isSocialsOpened)
    this._socialEl.classList.toggle('header__socials--opened', this.isSocialsOpened)
  }

  _toggleProducts() {
    this._productsButton.classList.toggle('header__products-button--opened', this.isProductsOpened)
    this._productsEl.classList.toggle('header__products--opened', this.isProductsOpened)
  }

  _initHandleMoreSocialButton() {
    this._moreSocialsButton.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()

      this.isSocialsOpened = !this.isSocialsOpened

      this._toggleSocials()
    })
  }

  _initHandleProductsButton() {
    this._productsButton.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()

      this.isProductsOpened = !this.isProductsOpened

      this._toggleProducts()
    })
  }

  init() {
    this._initHandleMoreSocialButton()
    this._initHandleProductsButton()
  }
}
