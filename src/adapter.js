function getBlends(){
  return fetch(BLENDS_URL)
  .then(res => res.json())
}

function getBlend(id){
  return fetch(`${BLENDS_URL}/${id}`)
  .then(res => res.json())
}
