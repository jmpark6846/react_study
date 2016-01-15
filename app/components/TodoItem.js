/**
 * Created by semo on 2016. 1. 15..
 */
import React from "react";
import ReactDOM from "react-dom";

var TodoItem = React.createClass({
  render:function(){
    return (
      <div className="well">
        <input type="checkbox" />
        <span>
          할일 이옵니다,
        </span>
        <i className="fa fa-ellipsis-h" />
      </div>
    )
  },

});