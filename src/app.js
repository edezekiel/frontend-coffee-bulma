// Read Blend and Note
function showBlend(event){
  blendId = parseInt(event.target.dataset.blendId)
  renderBlend(blendId)
}

// Create Note
function createNote(event){
  event.preventDefault()
  const ul = document.querySelector(".blend-notes")
  const form = event.target;
  const body = form.querySelector('input[name="body"]').value;
  const blendId = parseInt(event.target.parentElement.parentElement.dataset.blendId)
  const note = {body: body, blend_id: blendId}
  postNote(note)
  .then(note => renderBlend(blendId))
}

// Delete Note
function deleteNote(event) {
  const blendId = parseInt(event.target.parentNode.parentNode.parentNode.dataset.blendId)
  const noteId = parseInt(event.target.parentNode.dataset.noteId)

  deleteNoteRequest(noteId)
  .then(note => renderRefresh(blendId))
}

// Update Note

function displayEditForm(event) {
  const noteLi = event.target.previousElementSibling
  const noteString = event.target.previousElementSibling.innerHTML
  renderEditForm(noteLi, noteString)
}

function editNote(event) {
  event.preventDefault()
  const form = event.target;
  const body = form.querySelector('input[name="body"]').value;
  // const noteString = event.target.previousElementSibling.innerHTML
  const noteId = parseInt(event.target.parentNode.parentNode.dataset.noteId)
  const blendId = parseInt(event.target.parentNode.parentNode.parentNode.parentNode.dataset.blendId)
  const note = {body: body, id: noteId}
  editNoteRequest(note)
  .then(note => renderBlend(blendId))
}
