function getBlends(){
  return fetch(BLENDS_URL)
  .then(res => res.json())
}

function getBlend(id){
  return fetch(`${BLENDS_URL}/${id}`)
  .then(res => res.json())
}

function postNote(note) {
  const options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note)
  }
  return fetch(NOTES_URL, options)
  .then(res => res.json())
}
