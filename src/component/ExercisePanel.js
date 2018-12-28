import React from "react";
import PropTypes from "prop-types";

import "./Panel.css";

// if they can't figure it out, give them a new question
class ExercisePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getNewQuestionState();
        this.state.x = 0;
    }

    render() {
        return (
          <div className="component-panel">
            <span>
                If <b>x</b> {this.state.operationSymbol} {this.state.operand} = {this.state.result}<br/>
                <b>x</b> = <input type='number' name='x' value={this.state.x} onChange={this.handleChangeX.bind(this)}/>
                <form>
                    <button type="submit" onSubmit={this.handleSubmit.bind(this)}>Answer</button>
                </form>
            </span>
          </div>
        );
    }

    handleChangeX(event) {
        this.setState({x: event.target.value});
    }

    handleSubmit() {
        window.location.reload(false);
    }

    getNewQuestionState() {
        const operationIndex = Math.floor(Math.random() * 4)
        const operate = [
            (x, y) => x * y,
            (x, y) => x / y,
            (x, y) => x + y,
            (x, y) => x - y
        ][operationIndex];
        const operationSymbol = ['×', '÷', '+', '-'][operationIndex];
        let operand;
        let actualX;
        let result;
        
        if (operationIndex === 1) {
            // no decimals allowed, calculate backwards
            operand = this.randInt(2, 6);
            result = this.randInt(2, 10);

            actualX = operand * result;
        } else if (operationIndex === 0) {
            operand = this.randInt(2, 6);
            actualX = this.randInt(2, 10);
            result = operate(actualX, operand);
        } else {
            actualX = this.randInt(3, 20);
            operand = this.randInt(4, 20);
            result = operate(actualX, operand);
        }

        return {
            operationSymbol,
            actualX,
            operand,
            result,
            x: 0,
            tries: 3,
        };
    }

    /**
     * inclusive
     * @param {number} min 
     * @param {number} max 
     */
    randInt(min, max) {
        min = Math.floor(min);
        max = Math.floor(max);

        return min + Math.floor(Math.random() * (max + 1 - min));
    }
}

export default ExercisePanel;
