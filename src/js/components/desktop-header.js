export default class DesktopHeader {
  constructor() {
    this._productsButton = document.querySelector('.header__products-button')
    this._productsEl = document.querySelector('.header__products')
    this.isProductsOpened = false
  }

  _toggleProducts() {
    this.isProductsOpened = !this.isProductsOpened
    this._productsButton.classList.toggle('header__products-button--opened', this.isProductsOpened)
    this._productsEl.classList.toggle('header__products--opened', this.isProductsOpened)
  }

  _initHandleProductsButton() {
    this._productsButton.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()

      this._toggleProducts()
    })

    window.document.addEventListener('click', e => {
      let element = e.target
      do {
        if (element === this._productsEl) {
          return
        }
        element = element.parentNode
      } while (element && element !== window.document)

      if (this.isProductsOpened) {
        this._toggleProducts()
      }
    })
  }

  init() {
    this._initHandleProductsButton()
  }
}
