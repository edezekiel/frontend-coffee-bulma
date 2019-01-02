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

function editNoteHandler(editButton) {
  editButton.addEventListener('click', displayEditForm)
  return editButton
}

function editFormHandler(editForm){
  editForm.addEventListener('submit', editNote)
}
