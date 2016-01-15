import React from "react";
import { render } from "react-dom"
import TodoInput from "./TodoInput"
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

module.exports = React.createClass({
    render(){
        return(
            <div className="todo-app container">
                <TodoInput />
                <TodoList />
            </div>
        )
    }
});

