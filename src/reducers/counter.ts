import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const actionCreators = {
  increment: createAction(INCREMENT),
  decrement: createAction(DECREMENT),
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
