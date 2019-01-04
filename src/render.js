const cardContainer = document.querySelector(".columns.is-multiline.is-mobile")

function renderCards(){
  getBlends()
  .then(blends => blends.forEach(
    blend => renderCard(blend)
  ))
}

// blend cards on the initial page
function renderCard(blend){
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
  .then(blend => renderBlendPage(blend))
}

function renderBlendPage(blend){
  cardContainer.innerHTML = ""
  cardContainer.appendChild(renderCardHTML(blend))
  cardContainer.appendChild(renderAddNoteForm(blend))
  renderNoteCards(blend)
  // const addNoteButton = document.querySelector(".add-note")
  // createNoteHandler(addNoteButton)
}


function renderNoteCards(blend){
  blend.notes.forEach(note => cardContainer.append(renderNoteCard(blend, note)))
}

function renderNoteCard(blend, note) {
  const noteCard = document.createElement("div")
  noteCard.className = "column is-one-third"
  noteCard.dataset.blendId = blend.id
  noteCard.innerHTML = `
    <div class="card">
      <div class="card-content">
        <div class="content">
          <p>${note.body}</p>
        </div>
      </div>
    </div>
  `
  return noteCard
}


function renderAddNoteForm(blend){
  const addNoteForm = document.createElement("div")
  addNoteForm.className = "column is-one-third"
  addNoteForm.dataset.blendId = blend.id
  addNoteForm.innerHTML = `
  <div class="card">
      <div class="field">
        <label class="label"></label>
        <div class="control">
          <textarea class="textarea" rows="5" placeholder="this coffee is delicious ..."></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button add-note is-link is-outlined is-primary is-rounded">Add Note</button>
        </div>
      </div>
  </div>
  `
  return addNoteForm
}
