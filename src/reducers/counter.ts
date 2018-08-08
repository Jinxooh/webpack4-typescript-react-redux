import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const incrementAsync = () => (dispatch) => {
  // 0.5초 뒤 액션 디스패치
  setTimeout(
      () => { dispatch(actionCreators.increment()); },
      500,
  );
};

export const decrementAsync = () => (dispatch) => {
  // 0.5초 뒤 액션 디스패치
  setTimeout(
      () => { dispatch(actionCreators.decrement()); },
      500,
  );
};

export const actionCreators = {
  increment: createAction(INCREMENT),
  decrement: createAction(DECREMENT),
  incrementAsync,
  decrementAsync,
};

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 23,
};

export default handleActions<CounterState>(
  {
    [INCREMENT]: (state) => produce(state, (draft) => {
      draft.value = state.value + 1;
    }),
    [DECREMENT]: (state) => produce(state, (draft) => {
      draft.value = state.value - 1;
    }),
  },
  initialState,
);
