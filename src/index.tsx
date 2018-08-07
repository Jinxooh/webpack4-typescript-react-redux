import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from 'react-redux';
import App, { reducer } from "./components/App";
import configureStore from './store/configureStore';

const rootEl = document.getElementById("root");
const store = configureStore();

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
    // const nextRootReducer = NewApp.reducer;
    // store.replaceReducer(nextRootReducer);

    render(
      <AppContainer>
        <Provider store={store}>
          <NewApp />
        </Provider>
      </AppContainer>,
      rootEl,
    );
  };

  module.hot.accept(['./components/App', './store/modules'], () => { reload(); });
  // module.hot.accept("./store/modules", () => {reload(); });
}
