import React, { useState } from 'react';

function EditForm({ todoId, todoText, updateTodoText, setIsEditing }) {
  const [ newTodoText, setTodoText ] = useState(todoText);

  return (
    <form onSubmit={ e => {
      e.preventDefault();
      updateTodoText(todoId, newTodoText);
      setTodoText(todoText);
      setIsEditing(false);
    }}>
      <input onChange={ e => setTodoText(e.target.value) } value={ newTodoText } />
    </form>
  )
}

export default EditForm;
