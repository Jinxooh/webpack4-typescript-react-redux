import * as React from "react";
import CounterContainer from '../containers/CounterContainer';
import reducers from '../reducers';
import './App.scss';

const logo = require('../assets/logo.svg');

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <CounterContainer />
                <p>F33gbez</p>
                <img src={logo} height="480"/>
            </div>
        );
    }
}

export const reducer = reducers;

export default App;
