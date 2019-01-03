// re-render starting page


// Read Blend(s) and Note

function showBlends(event){
  event.preventDefault()
  renderCards()
}

function showBlend(event){
  event.preventDefault()
  const blendId = parseInt(event.target.parentNode.parentNode.parentNode.dataset.blendId)
  renderBlend(blendId)
}

// Create Note


// Delete Note


// Update Note
