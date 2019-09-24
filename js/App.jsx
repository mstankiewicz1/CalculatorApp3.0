import React from 'react';
import Buttons from './Buttons.jsx';
import Result from './Result.jsx';

class App extends React.Component {

    state = {
      result: ''
    };

    buttonPressed = (name) => {
      if (name === '=') {
          this.operationResult();
      }else if (name === 'C') {
          this.clear();
      }else if (name === 'CE'){
          this.backspace();
      }else {
          this.setState({
              result: this.state.result + name,
          })
        }
    };

    operationResult = () => {
        try{this.setState({
            result: eval(this.state.result)
        })} catch(e) {
            this.setState({
                result: 'error'
            })
        }
    };

    clear = () => {
        this.setState({
            result: ''
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0,-1)
        })
    };


    render() {
        return (
            <div className="app">
                <div className="buttonsAndResult">
                    <Result result={this.state.result}/>
                    <Buttons singleButtonPressed={this.buttonPressed}/>
                </div>
            </div>
        )
    }
}

export default App;