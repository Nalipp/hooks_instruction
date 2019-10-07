import React, { useState } from 'react';

function TodoForm({ allTodos, addTodos }) {
  const [ todoText, setTodo ] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addTodos(todoText);
    setTodo('');
  }

  return (
    <form onSubmit={ e => handleSubmit(e) }>
      <input value={ todoText } onChange={e => setTodo(e.target.value) } />
    </form>
  )
}

export default TodoForm;
