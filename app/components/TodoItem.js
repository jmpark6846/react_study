/**
 * Created by semo on 2016. 1. 15..
 */
import React from "react";
import ReactDOM from "react-dom";

module.exports = React.createClass({
  render:function(){
    return (
      <div className="todo-item well">
        <input type="checkbox" />
        <span>
          할일 이옵니다.
        </span>
        <i className="pull-right fa fa-ellipsis-h" />
      </div>
    )
  },

});