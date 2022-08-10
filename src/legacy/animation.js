var dexsWrapper = document.querySelector('.dexs .items')
var bridgesWrapper = document.querySelector('.bridges .items')
var size = 40

function animate(wrapper) {
  var numberOfItems = wrapper.children.length
  var wrapperWidth, slots, gap

  function reinit() {
    wrapperWidth = wrapper.clientWidth
    slots = Math.min(Math.floor(wrapperWidth / size), window.innerWidth >= 960 ? 10 : 9000)
    gap = (wrapperWidth - slots * size) / (slots - 1)
  }

  window.addEventListener('resize', reinit)
  reinit()

  var pointer = 1

  function redraw() {
    for (var i = 1; i <= numberOfItems; i++) {
      var pos = (size + gap) * ((slots - i + pointer - 1) % numberOfItems)
      pos = pos >= wrapperWidth + size + gap ? -120 : pos
      setPosition(i, pos)
    }

    if (size * numberOfItems <= wrapperWidth) {
      return
    }

    pointer = pointer === numberOfItems ? 1 : ++pointer
  }

  function setPosition(n, pos) {
    var img = wrapper.querySelector('img:nth-child(' + n + ')')
    img.style.opacity = pos < 0 || pos >= wrapperWidth ? 0 : 1
    img.style.transform = 'translateX(' + pos + 'px)'
  }

  redraw()
  setInterval(redraw, 1000)
  setTimeout(function () {
    wrapper.classList.add('inited')
  }, 1)
}

function append(item, parent) {
  var image = document.createElement('img')
  image.setAttribute('src', item.logoURI)
  image.setAttribute('height', size)
  image.setAttribute('width', size)
  image.setAttribute('alt', item.name)
  parent.appendChild(image)
}

fetch('https://router-api.via.exchange/api/v2/tools')
  .then(function(response) { return response.json() })
  .then(function(data) {
    var dexs = data.tools.filter(function(tool) { return tool.type === 'swap' })
    dexs.forEach(function(dex) { append(dex, dexsWrapper) })
    animate(dexsWrapper)

    var bridges = data.tools.filter(function(tool) { return tool.type === 'cross' })
    bridges.forEach(function(bridge) { append(bridge, bridgesWrapper) })
    animate(bridgesWrapper)
  })
  .catch(console.error)


const features = document.querySelectorAll('.feature')
features.forEach(function(feature) {
  feature.onmousemove = function(e) {
    feature.style.setProperty('--cursor-x', e.layerX)
    feature.style.setProperty('--cursor-y', e.layerY)
  }
})
