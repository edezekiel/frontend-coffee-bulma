function showBlend(event){
  const id = parseInt(event.target.dataset.blendId)
  getBlend(id)
  .then(blend => renderBlend(blend))
}
