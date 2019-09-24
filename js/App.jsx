import React from 'react';
import Buttons from './Buttons.jsx';
import Result from './Result.jsx';

class App extends React.Component {

    state = {
      result: ''
    };

    buttonPressed = () => {
      console.log("działa 123")
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