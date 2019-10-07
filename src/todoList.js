import React from 'react';
import Todo from './todo';

function TodoList({ todos, removeTodo, toggleTodo, updateTodoText }) {
  const todoItems = todos.map(todo => (
    <li key={todo.id}>
      <Todo 
        removeTodo={ removeTodo }
        updateTodoText={ updateTodoText }
        todoId={ todo.id }
        toggleTodo={ toggleTodo }
        todoIsComplete={ todo.isComplete }
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
