import { bindActionCreators } from 'redux';
import { actionCreators as counterActions } from '../reducers/counter';
import { actionCreators as postActions } from '../reducers/post';
import { actionCreators as todosActions } from '../reducers/todos';
import store from '../store/configureStore';

const { dispatch } = store;

export const CounterActions = bindActionCreators(counterActions, dispatch);
export const TodosActions = bindActionCreators(todosActions, dispatch);
export const PostActions = bindActionCreators(postActions, dispatch);
