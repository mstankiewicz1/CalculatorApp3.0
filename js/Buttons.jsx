import React from 'react';

class Buttons extends React.Component {

    clickButton = () => {
      this.props.singleButtonPressed();
    };

    render () {
        return (
            <div>
                <button name='1' onClick={this.clickButton}>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>+</button>
                <button>-</button>
                <button>=</button>
            </div>
        )
    }
}

export default Buttons;