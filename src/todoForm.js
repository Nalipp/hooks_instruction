import React, { useState } from 'react';

function TodoForm({ allTodos, addTodos }) {
  const [ todoText, setTodo ] = useState('');
  const [ urgency, setUrgency ] = useState('medium');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('urgency...', urgency)
    addTodos(todoText, urgency);
    setTodo('');
  }

  return (
    <form onSubmit={ e => handleSubmit(e) }>
      <select 
        value={ urgency }
        onChange={e => setUrgency(e.target.value)}
      >
        <option value='low'>low</option>
        <option value='medium'>medium</option>
        <option value='high'>high</option>
      </select>

      <input value={ todoText } onChange={e => setTodo(e.target.value) } />
    </form>
  )
}

export default TodoForm;
