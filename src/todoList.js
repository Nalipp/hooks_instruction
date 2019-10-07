import React from 'react';
import Todo from './todo';

function TodoList({ todos, removeTodo, updateTodoText }) {
  const todoItems = todos.map(todo => (
    <li key={todo.id}>
      <Todo 
        removeTodo={ removeTodo }
        updateTodoText={ updateTodoText }
        todoId={ todo.id }
        todoText={ todo.todoText } 
      />
    </li>
  ));

  return (
    <ul>
      { todoItems }
    </ul>
  )
}

export default TodoList;
