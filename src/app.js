// Read Blend and Note
function showBlend(event){
  const id = parseInt(event.target.dataset.blendId)
  getBlend(id)
  .then(blend => renderBlend(blend))
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
  .then(note => renderNewBlend(blendId))
}
