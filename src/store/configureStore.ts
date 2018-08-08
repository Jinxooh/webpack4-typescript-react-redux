import { createStore } from 'redux';
import reducers from '../reducers';

const configureStore = () => createStore(
  reducers, /* preloadedState, */
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

const store = configureStore();
export default store;
