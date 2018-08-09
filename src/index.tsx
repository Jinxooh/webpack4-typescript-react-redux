import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from 'react-redux';
import App from "./components/App";
import store from './store/configureStore';

const rootEl = document.getElementById("root");

render(
  <AppContainer>
    <Provider store={store}>
        <App />
    </Provider>
  </AppContainer>,
  rootEl,
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
  const reload = () => {
    const NewApp = require("./components/App").default;

    render(
      <AppContainer>
        <Provider store={store}>
          <NewApp />
        </Provider>
      </AppContainer>,
      rootEl,
    );
  };

  module.hot.accept(['./components/App'], () => { reload(); });
}
