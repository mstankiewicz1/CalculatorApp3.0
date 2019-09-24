import React from 'react';

class Buttons extends React.Component {

    clickButton = (e) => {
      this.props.singleButtonPressed(e.target.name);
    };

    render () {
        return (
            <div className="buttons">
                <button name='1' onClick={this.clickButton} className="singleButton">1</button>
                <button name='2' onClick={this.clickButton} className="singleButton">2</button>
                <button name='3' onClick={this.clickButton} className="singleButton">3</button>
                <button name='4' onClick={this.clickButton} className="singleButton">4</button>
                <button name='5' onClick={this.clickButton} className="singleButton">5</button>
                <button name='6' onClick={this.clickButton} className="singleButton">6</button>
                <button name='7' onClick={this.clickButton} className="singleButton">7</button>
                <button name='8' onClick={this.clickButton} className="singleButton">8</button>
                <button name='9' onClick={this.clickButton} className="singleButton">9</button>
                <button name='0' onClick={this.clickButton} className="singleButton">0</button>
                <button name='+' onClick={this.clickButton} className="singleButton">+</button>
                <button name='-' onClick={this.clickButton} className="singleButton">-</button>
                <button name='/' onClick={this.clickButton} className="singleButton">/</button>
                <button name='*' onClick={this.clickButton} className="singleButton">*</button>
                <button name='.' onClick={this.clickButton} className="singleButton">.</button>
                <button name='=' onClick={this.clickButton} className="singleButton">=</button>
                <button name='C' onClick={this.clickButton} className="singleButton">C</button>
                <button name='CE' onClick={this.clickButton} className="singleButton">CE</button>
                <button name='(' onClick={this.clickButton} className="singleButton">(</button>
                <button name=')' onClick={this.clickButton} className="singleButton">)</button>
            </div>
        )
    }
}

export default Buttons;