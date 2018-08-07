import * as React from "react";
import Counter from 'components/Counter';
import './App.scss';
const logo = require('../assets/logo.svg');

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Counter />
                <p>Foo to the barz</p>
                <img src={logo} height="480"/>
            </div>
        );
    }
}
