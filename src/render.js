
function renderCards(){
  getBlends()
  .then(blends => blends.forEach(
    blend => renderCard(blend)
  ))
}

function renderCard(blend){
  const cardContainer = document.querySelector(".columns.is-multiline.is-mobile")
  cardContainer.append(renderCardHTML(blend))
  const viewBlend = document.querySelector(`[data-blend-id="${blend.id}"] a`);
  showBlendHandler(viewBlend)
}

function renderCardHTML(blend){
  const blendCard = document.createElement('div')
  blendCard.className = "column is-one-third"
  blendCard.dataset.blendId = blend.id
  blendCard.innerHTML = `
  <div class="card">
    <header class="card-header weigth-bold">
      <p class="card-header-title is-centered">
        ${blend.name}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <p>Origin: ${blend.origin}</p>
        <p>Variety: ${blend.variety}</p>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">View Blend</a>
    </footer>
  </div>`
  return blendCard
}

// renderBlend is called by showBlend in the app.js file
// showBlend is called by the showBlenderHandler
function renderBlend(blendId){
  getBlend(blendId)
  .then(blend => renderBlendHTML(blend))
}

function renderBlendHTML(blend){
  const cardContainer = document.querySelector(".columns.is-multiline.is-mobile")
  cardContainer.innerHTML = `
    <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child notification is-primary">
        <p class="title">${blend.name}</p>
        <p class="subtitle">${blend.origin}, ${blend.variety}</p>
        <div class="content blend-notes">
        <!--  -->
        </div>
      </article>
    </div>
    </div>
    `
    renderBlendNotes(blend)
}

function renderBlendNotes(blend){
  const blendNote = document.querySelector(".blend-notes")
  blendNote.innerHTML = ""
  blend.notes.forEach(function(note){
    blendNote.innerHTML += `
      <div class="blend-note">
        ${note.body}
      </div>
    `
  })
}
