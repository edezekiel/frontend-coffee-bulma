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

function renderBlend(blend){
  const div = document.querySelector(".show-panel")
  div.dataset.blendId = blend.id
  div.innerHTML = `
  <h2>${blend.name}</h2>
  <p>${blend.origin}</p>
  <p.${blend.variety}</p>`
}
