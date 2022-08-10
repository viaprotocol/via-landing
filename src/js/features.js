var features = document.querySelectorAll('.feature')
features.forEach(function(feature) {
  feature.onmousemove = function(e) {
    feature.style.setProperty('--cursor-x', e.layerX)
    feature.style.setProperty('--cursor-y', e.layerY)
  }
})
