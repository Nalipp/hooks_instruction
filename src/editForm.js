import React, { useState } from 'react';

function EditForm({ 
  todoId,
  todoText,
  updateTodoText,
  setIsEditing,
  updateUrgency,
  curUrgency }) {

  const [ newTodoText, setTodoText ] = useState(todoText);
  console.log('curUrgency...', curUrgency);

  function handleUpdateUrgency(todoId, status) {
    console.log('handleUpdateUrgency...', todoId, status)
    updateUrgency(todoId, status);
    setIsEditing(false);
  }

  return (
    <form onSubmit={ e => {
      e.preventDefault();
      updateTodoText(todoId, newTodoText);
      setTodoText(todoText);
      setIsEditing(false);
    }}>
      <input onChange={ e => setTodoText(e.target.value) } value={ newTodoText } />
      <select 
        value={curUrgency}
        onChange={e => handleUpdateUrgency(todoId, e.target.value)}
      >
        <option value='low'>low</option>
        <option value='medium'>medium</option>
        <option value='high'>high</option>
      </select>
    </form>
  )
}

export default EditForm;
