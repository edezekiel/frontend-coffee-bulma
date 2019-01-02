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
  const showDiv = document.querySelector(".show-panel")
  showDiv.dataset.blendId = blend.id
  showDiv.innerHTML = `
  <h3>${blend.name}</h3>
  <p>Origin: ${blend.origin}</p>
  <p>Variety: ${blend.variety}</p>
  <p>Notes: <ul class="blend-notes"></ul></p>`
  blendNotes(blend)
  renderAddNoteForm(showDiv)
}

function blendNotes(blend) {
  const ul = document.querySelector(".blend-notes")
  blend.notes.forEach(function(note) {
    const noteString = note.body.toString()
    const li = document.createElement('li')
    li.innerHTML = `${noteString}`
    ul.appendChild(li)
  })
  // return allNotes
}

function renderAddNoteForm(showDiv) {
  const formDiv = document.createElement("div")
  const form = document.createElement('form')
  form.className = "note-form"
  form.innerHTML = `
    <input type="submit" value="Add Note">
    <input type="text" name="body" value="">`
  formDiv.append(createNoteHandler(form))
  showDiv.append(formDiv)
}
