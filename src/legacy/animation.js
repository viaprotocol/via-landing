var toolsWrapper1 = document.querySelector('.tools .row-1')
var toolsWrapper2 = document.querySelector('.tools .row-2')
var toolsWrapper3 = document.querySelector('.tools .row-3')
var toolsWrapper4 = document.querySelector('.tools .row-4')
var toolsWrapper5 = document.querySelector('.tools .row-5')

function append(item, parent) {
  var image = document.createElement('img')
  image.setAttribute('src', item.logoURI)
  image.setAttribute('alt', item.name)
  image.setAttribute('title', item.name)
  parent.appendChild(image)
}

fetch('https://router-api.via.exchange/api/v2/tools')
  .then(function(response) { return response.json() })
  .then(function(data) {
    var dexs = data.tools.filter(function(tool) { return tool.type === 'swap' })
    var sort = function() { return (Math.random() > .5) ? 1 : -1 }
    data.tools.sort(sort).forEach(function(tool) { append(tool, toolsWrapper1) })
    data.tools.sort(sort).forEach(function(tool) { append(tool, toolsWrapper2) })
    data.tools.sort(sort).forEach(function(tool) { append(tool, toolsWrapper3) })
    data.tools.sort(sort).forEach(function(tool) { append(tool, toolsWrapper4) })
    data.tools.sort(sort).forEach(function(tool) { append(tool, toolsWrapper5) })
  })
  .catch(console.error)


const features = document.querySelectorAll('.feature')
features.forEach(function(feature) {
  feature.onmousemove = function(e) {
    feature.style.setProperty('--cursor-x', e.layerX)
    feature.style.setProperty('--cursor-y', e.layerY)
  }
})
