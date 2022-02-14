var wrapper = document.querySelector('.dexs .items')

var wrapperWidth, gap

var numberOfItems = 40
var itemWidth = 40

function reinit() {
  wrapperWidth = wrapper.clientWidth
  var slots = Math.floor(wrapperWidth / itemWidth)
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

  if (i === numberOfItems) {
    i = 1
  } else {
    i++
  }
}

function setPosition(n, pos) {
  var img = document.querySelector('[src*="dex-' + n + '."]')
  img.style.opacity = (pos < 0 || pos > wrapperWidth) ? 0 : 1
  img.style.transform = 'translateX(' + pos + 'px)'
}

redraw()
setInterval(redraw, 1000)