const BASE_URL = "http://localhost:3000/api/v1"
const BLENDS_URL = `${BASE_URL}/blends`
const NOTES_URL = `${BASE_URL}/notes`


document.addEventListener("DOMContentLoaded", initPage)

function initPage(){
  getBlends()
}

function getBlends(){
  fetch(`${BLENDS_URL}`)
  .then(res => res.json())
  .then(console.log)
}
