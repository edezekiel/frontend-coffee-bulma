function renderCards(){
  getBlends()
  .then(blends => blends.forEach(
    blend => renderCard(blend)
  ))
}



function renderCard(blend){
  console.log(blend)
}
