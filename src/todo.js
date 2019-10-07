import React, { useState, useEffect } from 'react';
import EditForm from './editForm';

function Todo({ todoId, todoText, removeTodo, updateTodoText }) {
  const [ isEditing, setIsEditing ] = useState(false);
  return (
    <>
      { isEditing 
        ? <EditForm 
            todoId={ todoId } 
            updateTodoText={ updateTodoText }
            setIsEditing={ setIsEditing }
            todoText={ todoText } 
          /> 
        : todoText 
      }
      <button onClick={() => removeTodo(todoId) }>Delete</button>
      <button onClick={() => setIsEditing(!isEditing) }>Edit</button>
    </>
  )
}

export default Todo;


