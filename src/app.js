// Read Blend and Note
function showBlend(event){
  event.preventDefault()
  const blendId = parseInt(event.target.parentNode.parentNode.parentNode.dataset.blendId)
  renderBlend(blendId)
}

// Create Note
function createNote(event) {
  const body = document.querySelector(".textarea").value
  const blendId = parseInt(document.querySelector(".tile.is-child.notification.is-primary").dataset.blendId)
  const note = {body: body, blend_id: blendId }
  postNote(note)
  .then(note => renderBlend(blendId))
}

// Delete Note
function deleteNote(event){
  const blendId = parseInt(event.target.parentNode.parentNode.parentNode.parentNode.dataset.blendId)
  const noteId = parseInt(event.target.parentNode.parentNode.dataset.noteId)
  deleteNoteRequest(noteId)
  .then(note => renderBlend(blendId))
}

// Update Note

function displayEditForm(event){
  const noteId = parseInt(event.target.parentNode.parentNode.dataset.noteId)
  getNote(noteId)
  .then(note => renderEditForm(event, note))
}

function editNote(event){
  event.preventDefault()
  const body = document.querySelector('input[name="edit-form-input"]').value
  const noteId = parseInt(event.target.parentNode.parentNode.parentNode.dataset.noteId)
  const note = {body: body, id: noteId}
  const blendId = parseInt(document.querySelector("article").dataset.blendId)
  editNoteRequest(note)
  .then(note => renderBlend(blendId))
}
