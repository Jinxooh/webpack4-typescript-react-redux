import { bindActionCreators } from 'redux';
import { actionCreators as counterActions } from '../reducers/counter';
import store from '../store/configureStore';

const { dispatch } = store;

export const CounterActions = bindActionCreators(counterActions, dispatch);
