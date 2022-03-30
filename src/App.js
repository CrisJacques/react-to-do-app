import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const TodoApp = props => {
  return (
    <div className="container">
      <h1>To do App</h1>
      <TodoForm />
      <TodoList />
    </div>);
}

export default TodoApp;