var toolsWrappers = [
  '.tools .row-1',
  '.tools .row-2',
  '.tools .row-3',
  '.tools .row-4',
  '.tools .row-5',
].map(function(wrapper) {
  return document.querySelector(wrapper)
})

function append(item, parent) {
  var image = document.createElement('img')
  image.setAttribute('src', item.logoURI)
  image.setAttribute('alt', item.name)
  image.setAttribute('title', item.name)
  parent.appendChild(image)
}

function fillRows(tools) {
  var sortFunc = function() { return (Math.random() > .5) ? 1 : -1 }
  toolsWrappers.map(function(wrapper) {
    tools.sort(sortFunc).forEach(function(tool) { append(tool, wrapper) })
  })
}

fetch('https://router-api.via.exchange/api/v2/tools')
  .then(function(response) { return response.json() })
  .then(function(data) {
    //var dexs = data.tools.filter(function(tool) { return tool.type === 'swap' })
    fillRows(data.tools)
  })
  .catch(console.error)
