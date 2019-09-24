import React from 'react';

class Buttons extends React.Component {

    clickButton = (e) => {
      this.props.singleButtonPressed(e.target.name);
    };

    render () {
        return (
            <div>
                <button name='1' onClick={this.clickButton}>1</button>
                <button name='2' onClick={this.clickButton}>2</button>
                <button name='3' onClick={this.clickButton}>3</button>
                <button name='4' onClick={this.clickButton}>4</button>
                <button name='5' onClick={this.clickButton}>5</button>
                <button name='6' onClick={this.clickButton}>6</button>
                <button name='7' onClick={this.clickButton}>7</button>
                <button name='8' onClick={this.clickButton}>8</button>
                <button name='9' onClick={this.clickButton}>9</button>
                <button name='+' onClick={this.clickButton}>+</button>
                <button name='-' onClick={this.clickButton}>-</button>
                <button name='/' onClick={this.clickButton}>/</button>
                <button name='*' onClick={this.clickButton}>*</button>
                <button name='=' onClick={this.clickButton}>=</button>
                <button name='C' onClick={this.clickButton}>C</button>
                <button name='CE' onClick={this.clickButton}>CE</button>
            </div>
        )
    }
}

export default Buttons;