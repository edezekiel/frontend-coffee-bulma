function renderTitles(){
  const panel = document.querySelector(".list-panel")
  const ul = document.createElement('ul')
  panel.appendChild(ul)
  renderRefresh(ul)
  getBlends()
  .then( blends => blends.forEach(
    blend => renderBlendTitle(blend)
  ))
}

function renderRefresh(ul) {
  ul.innerHTML = ""
  const show = document.querySelector(".show-panel")
  show.innerHTML = ""
}

function renderBlendTitle(blend) {
  const ul = document.querySelector('ul')
  const li = document.createElement('li')
  li.innerHTML = blend.name
  li.dataset.blendId = blend.id
  ul.append(showBlendHandler(li))
}
