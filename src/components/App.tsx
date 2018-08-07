import * as React from "react";
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import './App.scss';
import Counter from './Counter';

const store = configureStore();
const logo = require('../assets/logo.svg');

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="app">
                    <Counter />
                    <p>Foo 23to the 123barz</p>
                    <img src={logo} height="480"/>
                </div>
            </Provider>
        );
    }
}

export default App;
