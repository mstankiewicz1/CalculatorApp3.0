import React from 'react';
import Buttons from './Buttons.jsx';
import Result from './Result.jsx';

class App extends React.Component {


    render() {
        return (
            <div>
                <Result/>
                <Buttons/>
            </div>
        )
    }
}

export default App;