function animate(selector, numberOfItems) {
  var wrapper = document.querySelector(selector)
  var itemWidth = 40

  var wrapperWidth, slots, gap

  function reinit() {
    wrapperWidth = wrapper.clientWidth
    slots = Math.min(Math.floor(wrapperWidth / itemWidth), window.innerWidth >= 960 ? 10 : 9000)
    gap = (wrapperWidth - slots * itemWidth) / (slots - 1)
  }

  window.addEventListener('resize', reinit)
  reinit()

  var pointer = 1

  function redraw() {
    for (let i = 1; i <= numberOfItems; i++) {
      var pos = (itemWidth + gap) * ((slots - i + pointer - 1) % numberOfItems)
      pos = pos >= wrapperWidth + itemWidth + gap ? -120 : pos
      setPosition(i, pos)
    }

    if (itemWidth * numberOfItems <= wrapperWidth) {
      return
    }

    pointer = pointer === numberOfItems ? 1 : ++pointer
  }

  function setPosition(n, pos) {
    var img = document.querySelector(selector + ' img:nth-child(' + n + ')')
    img.style.opacity = pos < 0 || pos >= wrapperWidth ? 0 : 1
    img.style.transform = 'translateX(' + pos + 'px)'
  }

  redraw()
  setInterval(redraw, 1000)
  setTimeout(function () {
    wrapper.classList.add('inited')
  }, 1)
}

const append = (item, parent) => {
  const image = document.createElement('img')
  image.setAttribute('src', item.logoURI)
  image.setAttribute('height', 40)
  image.setAttribute('width', 40)
  image.setAttribute('alt', item.name)
  parent.appendChild(image)
}

const dexsContainer = document.querySelector('.dexs .items')
const bridgesContainer = document.querySelector('.bridges .items')

fetch('https://router-api.via.exchange/api/v2/tools')
  .then(response => response.json())
  .then(data => {
    const dexs = data.tools.filter(tool => tool.type === 'swap')
    dexs.forEach(dex => { append(dex, dexsContainer) })
    animate('.dexs .items', dexs.length)

    const bridges = data.tools.filter(tool => tool.type === 'cross')
    bridges.forEach(bridge => { append(bridge, bridgesContainer) })
    animate('.bridges .items', bridges.length)

  })
  .catch(console.error)
