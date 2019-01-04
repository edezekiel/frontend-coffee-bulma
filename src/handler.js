function showBlendHandler(viewBlend){
  viewBlend.addEventListener('click', showBlend)
  return viewBlend
}

function createNoteHandler(addNoteButton){
  addNoteButton.addEventListener("click", createNote)
  return addNoteButton
}

function deleteNoteHandler(deleteButton){
  deleteButton.addEventListener('click', deleteNote)
  return deleteButton
}

function editNoteHandler(editButton) {
  editButton.addEventListener('click', displayEditForm)
  return editButton
}

function editFormHandler(editFormButton){
  editFormButton.addEventListener('click', editNote)
  return editFormButton
}
