var tools
var toolsWrappers = [
  '.tools .row-1',
  '.tools .row-2',
  '.tools .row-3',
  '.tools .row-4',
  '.tools .row-5',
].map(function(wrapper) {
  return document.querySelector(wrapper)
})

function getPlaceholder(text) {
  return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='80' width='80'%3E%3Ccircle cx='40' cy='40' r='40' fill='%23d4d4d4' fill-opacity='0.6' /%3E%3Ctext style='fill: rgb(0,0,0,0.6); font-family: Arial, sans-serif; font-size: 11px; line-height: 16px; text-anchor: middle; white-space: pre;' x='40' y='45'%3E" + text + "%3C/text%3E%3C/svg%3E"
}

function append(item, parent) {
  var image = document.createElement('img')
  image.addEventListener('error', function() {
    image.setAttribute('src', getPlaceholder(item.name))
  })
  image.setAttribute('src', item.logoURI)
  image.setAttribute('alt', item.name)
  image.setAttribute('title', item.name)
  parent.appendChild(image)
}

function filterTools(tools, toolType) {
  return tools.filter(function(tool) { return !toolType || tool.type === toolType })
}

function fillRows(toolType) {
  var toolsFiltered = filterTools(tools, toolType)
  var sortFunc = function() { return (Math.random() > .5) ? 1 : -1 }
  toolsWrappers.map(function(wrapper) {
    wrapper.style.display = 'none'
    wrapper.classList.remove('animated')
    wrapper.innerHTML = ''
    var sortedTools = toolsFiltered.sort(sortFunc)
    while (sortedTools.length && sortedTools.length < 120) {
      sortedTools = sortedTools.concat(sortedTools)
    }
    sortedTools.forEach(function(tool) { append(tool, wrapper) })
    wrapper.style.display = 'block'
    wrapper.classList.add('animated')
  })
}

fetch('https://router-api.via.exchange/api/v2/tools')
  .then(function(response) { return response.json() })
  .then(function(data) {
    tools = data.tools
    document.querySelector('.bridges-number').innerText = filterTools(tools, 'cross').length
    document.querySelector('.dexs-number').innerText = filterTools(tools, 'swap').length
    fillRows()
  })
  .catch(console.error)

var buttons = document.querySelectorAll('.tools-switch button')
buttons.forEach(function(button) {
  button.onclick = function() {
    if (button.classList.contains('active')) {
      return
    }
    buttons.forEach(function(button) {
      button.classList.remove('active')
    })
    button.classList.add('active')
    setTimeout(function() {
      fillRows(button.value)
    }, 1)
  }
})