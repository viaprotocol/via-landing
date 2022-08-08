var dexsWrapper = document.querySelector('.dexs .items')
var bridgesWrapper = document.querySelector('.bridges .items')
var size = 40

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

    var bridges = data.tools.filter(function(tool) { return tool.type === 'cross' })
    bridges.forEach(function(bridge) { append(bridge, bridgesWrapper) })
  })
  .catch(console.error)
