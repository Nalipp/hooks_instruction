import React, { useState, useEffect } from 'react';
import TodoList from './todoList';
import TodoForm from './todoForm';
import './App.css';

function App() {
  const todos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  const [ allTodos, setTodos ] = useState(todos);

  function removeTodo(curId) {
    const updatedTodos = allTodos.filter(todo => todo.id !== curId);
    setTodos(updatedTodos);
  }

  function updateTodoText(todoId, newTodoText) {
    const updatedTodos = allTodos.map(todo => {
      if (todo.id === todoId) todo.todoText = newTodoText;
      return todo;
    });
    setTodos(updatedTodos);
  }

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(allTodos));
  });

  return (
    <div className="App">
      <TodoForm allTodos={ allTodos } setTodos={ setTodos } />
      <TodoList 
        removeTodo={ removeTodo }
        todos={ allTodos } 
        updateTodoText = { updateTodoText } 
      />
    </div>
  );
}

export default App;
