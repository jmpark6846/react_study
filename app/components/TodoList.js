/**
 * Created by semo on 2016. 1. 15..
 */
import React from "react";
import ReactDOM from "react-dom";
import TodoItem from "./TodoItem"

module.exports = React.createClass({
  render: function(){
    return (
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    )
  }
});