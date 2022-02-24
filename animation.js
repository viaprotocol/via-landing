function animate(selector, numberOfItems) {
  var wrapper = document.querySelector(selector)
  var itemWidth = 40

  var wrapperWidth, gap

  function reinit() {
    wrapperWidth = wrapper.clientWidth
    var slots = Math.min(
      Math.floor(wrapperWidth / itemWidth),
      window.innerWidth >= 960 ? 10 : 9000
    )
    gap = (wrapperWidth - slots * itemWidth) / (slots - 1)
  }

  window.addEventListener('resize', reinit)
  reinit()

  var i = 1

  function redraw() {
    for (let j = 1; j <= numberOfItems; j++) {
      var pos
      if (j === numberOfItems + 1 - i) {
        pos = -120
      } else {
        pos = ((i + j - 2) % numberOfItems) * (itemWidth + gap)
      }
      setPosition(j, pos)
    }

    if (itemWidth * numberOfItems <= wrapperWidth) {
      return
    }

    if (i === numberOfItems) {
      i = 1
    } else {
      i++
    }
  }

  function setPosition(n, pos) {
    var img = document.querySelector(selector + ' [src*="-' + n + '."]')
    img.style.opacity = (pos < 0 || pos >= wrapperWidth) ? 0 : 1
    img.style.transform = 'translateX(' + pos + 'px)'
  }

  redraw()
  setInterval(redraw, 1000)
}

animate('.dexs .items', 40)
animate('.bridges .items', 10)