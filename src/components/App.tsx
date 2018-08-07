import * as React from "react";

// const reactLogo = require("./../assets/img/react_logo.svg");

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="app">
                <h1>whatthe
                 World!?? peace</h1>
                <p>Foo to the barz</p>
            </div>
        );
    }
}