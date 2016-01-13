import React from "react";
import { render } from 'react-dom'

var Main = React.createClass({
    render(){
        return (
            <div className="well container">
                Hello {this.props.name}
            </div>
        );
    },
});

module.exports = Main;

