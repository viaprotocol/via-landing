export default class DesktopHeader {
  constructor() {
    this._moreSocialsButton = document.querySelector('.header__more-button')
    this._moreSocialEl = document.querySelector('.header__more-socials')
  }

  _toggleSocials() {
    this._moreSocialsButton.classList.toggle('header__more-button--opened')
    this._moreSocialEl.classList.toggle('header__more-socials--opened')
  }

  _initHandleMoreSocialButton() {
    this._moreSocialsButton.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()

      this._toggleSocials()
    })
  }

  init() {
    this._initHandleMoreSocialButton()
  }
}
