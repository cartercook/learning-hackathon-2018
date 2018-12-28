import React from "react";
import PropTypes from "prop-types";

import "./Panel.css";

class DescriptionPanel extends React.Component {
    render() {
        return (
          <div className="component-panel">
            <span>
                <b>x</b> is a Variable.<br/>
                A Variable can be any letter or symbol, <b>a</b>, <b>b</b>, <b>c</b>, … <b>x</b>, <b>y</b>, <b>z</b>, <b>α</b>, <b>β</b>, <b>γ</b>, etc.<br/>
                It’s called a Variable because it can vary.<br/>
                For example, if we say <b>x = 5</b>, now <b>x = 5</b> is true.<br/>
                But now if we say <b>x = 10</b>, now <b>x = 10</b> is true.<br/>
                We have changed the value of <b>x</b>.
            </span>
          </div>
        );
    }
}

export default DescriptionPanel;
