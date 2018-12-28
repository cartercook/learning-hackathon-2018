import React from "react";

import "./Panel.css";

class Panel extends React.Component {
    render() {
        return (
          <div className="component-panel">
            <div>{this.props.value}</div>
          </div>
        );
    }
}

export default Panel;
