import * as React from "react";
import modules from '../store/modules';
import './App.scss';
import Counter from './Counter';

const logo = require('../assets/logo.svg');

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Counter />
                <p>F33gbez</p>
                <img src={logo} height="480"/>
            </div>
        );
    }
}

export const reducer = modules;

export default App;
