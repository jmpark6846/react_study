import React from "react";
import { render } from 'react-dom'
import TodoInput from "./TodoApp"
import TodoList from "./TodoList"

/*
  <TodoApp>
    <TodoInput />
    <TodoList>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      ...
    </TodoList>
  </TodoApp>

*/

var TodoApp = React.createClass({
  render: function(){
      return (
        <div className="todo-app">
          <TodoInput />
          <TodoList />
        </div>
      )
  }
});

module.exports = TodoApp;

