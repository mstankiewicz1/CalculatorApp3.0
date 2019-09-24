import React from 'react';
import Buttons from './Buttons.jsx';
import Result from './Result.jsx';

class App extends React.Component {

    state = {
      result: ''
    };

    buttonPressed = (name) => {
      if (name === '='){
          this.operationResult();
      }else {
          this.setState({
              result: this.state.result + name,
          })
        }
    };

    operationResult = () => {
        console.log('Tu bedzie wynik');
    };





    render() {
        return (
            <div>
                <Result result={this.state.result}/>
                <Buttons singleButtonPressed={this.buttonPressed}/>
            </div>
        )
    }
}

export default App;