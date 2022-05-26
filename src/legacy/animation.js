function animate(selector, numberOfItems) {
  var wrapper = document.querySelector(selector)
  var itemWidth = 40

  var wrapperWidth, slots, gap

  function reinit() {
    wrapperWidth = wrapper.clientWidth
    slots = Math.min(
      Math.floor(wrapperWidth / itemWidth),
      window.innerWidth >= 960 ? 10 : 9000
    )
    gap = (wrapperWidth - slots * itemWidth) / (slots - 1)
  }

  window.addEventListener('resize', reinit)
  reinit()

  var pointer = 1

  function redraw() {
    for (let i = 1; i <= numberOfItems; i++) {
      var pos = (itemWidth + gap) * ((slots - i + pointer - 1) % numberOfItems)
      pos = (pos >= wrapperWidth + itemWidth + gap) ? -120 : pos
      setPosition(i, pos)
    }

    if (itemWidth * numberOfItems <= wrapperWidth) {
      return
    }

    pointer = pointer === numberOfItems ? 1 : ++pointer
  }

  function setPosition(n, pos) {
    var img = document.querySelector(selector + ' [src*="-' + n + '."]')
    img.style.opacity = (pos < 0 || pos >= wrapperWidth) ? 0 : 1
    img.style.transform = 'translateX(' + pos + 'px)'
  }

  redraw()
  setInterval(redraw, 1000)
  setTimeout(function() {
    wrapper.classList.add('inited')
  }, 1)
}

animate('.dexs .items', 40)
animate('.bridges .items', 11)