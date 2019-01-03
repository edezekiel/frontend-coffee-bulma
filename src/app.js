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


// Update Note
