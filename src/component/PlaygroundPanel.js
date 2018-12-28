import React from "react";
import PropTypes from "prop-types";

import "./Panel.css";

class PlaygroundPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          x: 0,
          y: 0
        };
      }

    render() {
        return (
          <div className="component-panel">
            <span>
                <b>x</b> = <input type='number' name='x' value={this.state.x} onChange={this.handleChangeX.bind(this)}/><br/>
                <b>x</b> + 3 = {Number(this.state.x) + 3}<br/>
                <br/>
                <b>y</b> = <input type='number' name='y' value={this.state.y} onChange={this.handleChangeY.bind(this)}/><br/>
                <b>y</b> × 2 = {this.state.y * 2}
            </span>
          </div>
        );
    }

    handleChangeX(event) {
        this.setState({x: event.target.value});
    }

    handleChangeY(event) {
        this.setState({y: event.target.value});
    }
}

export default PlaygroundPanel;
