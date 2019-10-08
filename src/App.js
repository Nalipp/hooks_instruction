import React, { useState, useEffect } from 'react';
import TodoList from './todoList';
import TodoForm from './todoForm';
import uuid from 'uuid';
import './App.css';

function App() {
  const todos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  const [ allTodos, setTodos ] = useState(todos);
  console.log(allTodos)

  function addTodos(todoText, urgency) {
    console.log(urgency)
    setTodos([...allTodos, 
       { id: uuid(), 
         todoText,
         urgency,
         isComplete: false, }
    ]);
  }

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

  function toggleTodo(todoId) {
    const updatedTodos = allTodos.map(todo => {
      if (todo.id === todoId) todo.isComplete = !todo.isComplete;
      return todo;
    });
    setTodos(updatedTodos);
  }

  function updateUrgency(todoId, newUrgency) {
    const updatedTodos = allTodos.map(todo => {
      if (todo.id === todoId) todo.urgency = newUrgency;
      return todo;
    });
    setTodos(updatedTodos);
  }

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(allTodos));
  });

  return (
    <div className="App">
      <TodoForm 
        allTodos={ allTodos }
        addTodos={ addTodos } 
      />
      <TodoList 
        removeTodo={ removeTodo }
        todos={ allTodos } 
        updateUrgency={ updateUrgency }
        updateTodoText={ updateTodoText } 
        toggleTodo={ toggleTodo }
      />
    </div>
  );
}

export default App;
