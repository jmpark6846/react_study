import React from "react";
import { render } from "react-dom"
import TodoApp from "./components/TodoApp";
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
render(
    <TodoApp name="Joonmo" />,
    document.body
);