import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './Component/AddTodo';
import TodoList from './Component/TodoList';
import FilterTab from './Component/FilterTab';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <AddTodo/>
       <TodoList/>
       <FilterTab/>
      </header>
    </div>
  );
}

export default App;
