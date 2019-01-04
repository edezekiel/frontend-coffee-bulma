
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
      <article class="tile is-child notification is-primary" data-blend-id="${blend.id}">
        <p class="title">${blend.name}</p>
        <p class="subtitle">${blend.origin}, ${blend.variety}</p>
        <p class="subtitle"> Notes: </p>
          <div class="content blend-notes">
          <!--  -->
          </div>
      </article>
    </div>
    </div>
    `
    renderBlendNotes(blend)
    renderAddNoteForm()
}

function renderBlendNotes(blend){
  const blendNotes = document.querySelector(".blend-notes")
  blend.notes.forEach(function(note){
    blendNotes.appendChild(renderBlendNote(note))
  })
  return blendNotes
}

function renderBlendNote(note){
  const blendNote = document.createElement('div')
  blendNote.innerHTML = `
    ${note.body}`
  blendNote.appendChild(renderNoteButtons(note))
  return blendNote
}

function renderNoteButtons(note){
  const noteButtons = document.createElement('div')
  noteButtons.className = "buttons"
  noteButtons.innerHTML = `
    <span class="button edit-note is-info is-small is-outlined is-primary is-inverted is-rounded is-hovered" data-note-id="${note.id}">Edit</span>
    <span class="button delete-note is-danger is-small is-outlined is-primary is-inverted is-rounded is-hovered" data-note-id="${note.id}">Delete</span>
  `
  return noteButtons
}

function renderAddNoteForm(){
  blendNotes = document.querySelector(".blend-notes")
  blendNotes.innerHTML += `
    <div class="field">
      <label class="label"></label>
      <div class="control">
        <textarea class="textarea" rows="1" placeholder="this coffee is delicious ..."></textarea>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-link is-small is-outlined is-primary is-inverted is-rounded is-hovered">Add Note</button>
      </div>
    </div>
  `
  const addNoteButton = document.querySelector("button.button.is-link")
  createNoteHandler(addNoteButton)
}
