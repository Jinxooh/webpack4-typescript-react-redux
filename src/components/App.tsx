import { hot } from 'react-hot-loader';
import * as React from "react";
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import Counter from './Counter';
import './App.scss';

const store = configureStore();

const logo = require('../assets/logo.svg');
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="app">
                    <Counter />
                    <p>Foo to the barz</p>
                    <img src={logo} height="480"/>
                </div>
            </Provider>
        );
    }
}

export default hot(module)(App);
