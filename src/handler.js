function createNoteHandler(form){
  form.addEventListener("submit", createNote)
  return form
}

function showBlendHandler(li){
  li.addEventListener('click', showBlend)
  return li
}

function deleteNoteHandler(deleteButton){
  deleteButton.addEventListener('click', deleteNote)
  return deleteButton
}
