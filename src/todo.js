import React, { useState, useEffect } from 'react';
import EditForm from './editForm';

function Todo({ 
  todoId, 
  todoText,
  todoIsComplete,
  removeTodo,
  updateTodoText,
  toggleTodo 
}) {

  const [ isEditing, setIsEditing ] = useState(false);

  return (
    <>
      { isEditing 
        ? 
          <EditForm 
            todoId={ todoId } 
            updateTodoText={ updateTodoText }
            setIsEditing={ setIsEditing }
            todoText={ todoText } 
          /> 
        : 
          <span 
            onClick={() => toggleTodo(todoId) }
            style={{ textDecoration: todoIsComplete ? "line-through" : "none" }}
          >
            { todoText }
          </span> 
      }
      <button onClick={() => removeTodo(todoId) }>Delete</button>
      <button onClick={() => setIsEditing(!isEditing) }>Edit</button>
    </>
  )
}

export default Todo;


