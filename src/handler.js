function showBlendHandler(viewBlend){
  viewBlend.addEventListener('click', showBlend)
  return viewBlend
}

function createNoteHandler(form){
  form.addEventListener("submit", createNote)
  return form
}

function deleteNoteHandler(deleteButton){
  deleteButton.addEventListener('click', deleteNote)
  return deleteButton
}

function editNoteHandler(editButton) {
  editButton.addEventListener('click', displayEditForm)
  return editButton
}

function editFormHandler(editForm){
  editForm.addEventListener('submit', editNote)
  return editForm
}
