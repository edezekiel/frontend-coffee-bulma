function renderTitles(){
  const panel = document.querySelector(".list-panel")
  const ul = document.createElement('ul')
  panel.appendChild(ul)
  getBlends()
  .then( blends => blends.forEach(
    blend => renderBlendTitle(blend)
  ))
}

function renderBlendTitle(blend) {
  const titleList = document.querySelector('.list')
  const li = document.createElement('li')
  li.innerHTML = blend.name
  li.dataset.blendId = blend.id
  titleList.append(showBlendHandler(li))
}

function renderBlend(blendId){
  getBlend(blendId)
  .then(blend => renderShowDiv(blend))
}

function renderShowDiv(blend){
  const showDiv = document.querySelector(".show-panel")
  showDiv.dataset.blendId = blendId
  showDiv.innerHTML = `
  <h3>${blend.name}</h3>
  <p>Origin: ${blend.origin}</p>
  <p>Variety: ${blend.variety}</p>
  <p>Notes: <ul class="blend-notes"></ul></p>`
  renderBlendNotes(blend)
  renderAddNoteForm(showDiv)
}

function renderBlendNotes(blend) {
  const ul = document.querySelector(".blend-notes")
  ul.innerHTML = ""
  blend.notes.forEach(function(note) {
    const noteString = note.body.toString()
    const li = document.createElement('li')
    const noteStringDiv = document.createElement('div')
    noteStringDiv.innerHTML = `${noteString}`
    li.appendChild(noteStringDiv)
    li.dataset.noteId = note.id
    renderEditButton(li)
    // renderEditForm(li, noteString)
    renderDeleteButton(li)
    ul.appendChild(li)
  })
}

function renderRefresh(blendId){
  getBlend(blendId)
  .then(blend => renderBlendNotes(blend))
}

function renderAddNoteForm(showDiv) {
  const formDiv = document.createElement("div")
  const form = document.createElement('form')
  form.className = "note-form"
  form.innerHTML = `
    <input type="test" name="body" value="">
    <input type="submit" value="Add Note">`
  formDiv.append(createNoteHandler(form))
  showDiv.append(formDiv)
}

function renderDeleteButton(li){
  const deleteButton = document.createElement('button')
  deleteButton.innerHTML = "Delete"
  li.appendChild(deleteNoteHandler(deleteButton))
}

function renderEditButton(li){
  const editButton = document.createElement('button')
  editButton.className = "edit-button"
  editButton.innerHTML = "Edit"
  li.appendChild(editNoteHandler(editButton))
}

function renderEditForm(noteLi, noteString) {
  const editForm = document.createElement('form')
  editForm.className = "edit-note"
  editForm.innerHTML = `
    <input type="submit" value="Edit">
    <input style="width: 100%;" type="text" name="body" value="${noteString}">`

  noteLi.append(editFormHandler(editForm))
}
