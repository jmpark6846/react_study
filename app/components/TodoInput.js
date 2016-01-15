/**
 * Created by semo on 2016. 1. 15..
 */
import React from "react";
import ReactDOM from "react-dom";

module.exports = React.createClass({
  render: function(){
    return (
      <div className="todo-input well">
        <div className="input-group">
          <input className="form-control" placeholder="할 일 추가.."/>
          <span className="input-group-btn">
            <button className="btn btn-default">추가</button>
          </span>

        </div>
      </div>
    )
  }
});