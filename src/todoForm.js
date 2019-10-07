import React, { useState } from 'react';
import uuid from 'uuid';

function TodoForm({ allTodos, setTodos }) {
  const [ todo, setTodo ] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([ ...allTodos, { id: uuid(), todoText: todo } ]);
    setTodo('');
  }

  return (
    <form onSubmit={ e => handleSubmit(e) }>
      <input value={ todo } onChange={e => setTodo(e.target.value) } />
    </form>
  )
}

export default TodoForm;
