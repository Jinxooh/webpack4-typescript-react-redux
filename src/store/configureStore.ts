import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';

declare const module: any;

const configureStore = () => {
  const store = createStore(
    reducers, /* preloadedState, */
    compose(
      applyMiddleware(reduxThunk),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );

  if (module.hot) {
    module.hot.accept("../reducers", () =>
      store.replaceReducer(require("../reducers").default),
    );
  }
  return store;
};

export default configureStore();
