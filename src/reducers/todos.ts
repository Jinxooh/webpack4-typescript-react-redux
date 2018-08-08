import produce from 'immer';
import { Action, createAction, handleActions } from 'redux-actions';

const CREATE = 'todos/CREATE';
const REMOVE = 'todos/REMOVE';
const TOGGLE = 'todos/TOGGLE';
const CHANGE_INPUT = 'todos/CHANGE_INPUT';

type CreatePayload = string;
type RemovePayload = number;
type TogglePayload = number;
type ChangeInputPayload = string;

export const actionCreators = {
  create: createAction<CreatePayload>(CREATE),
  remove: createAction<RemovePayload>(REMOVE),
  toggle:  createAction<TogglePayload>(TOGGLE),
  changeInput: createAction<ChangeInputPayload>(CHANGE_INPUT),
};

export interface TodosItem {
  id: number;
  text: string;
  done: boolean;
}

export interface TodosState {
  todoItems: [TodosItem];
  input: string;
}

let id: number = 0;
const initialState: TodosState = {
  todoItems: [null],
  input: '',
};

export default handleActions<TodosState, any>(
  {
    [CREATE]: (state, action: Action<CreatePayload>): TodosState => {
      const { payload }: any = action;
      id = id + 1;
      return produce(state, (draft) => {
        draft.input = '';
        draft.todoItems.push({
          id,
          text: payload,
          done: false,
        });
      });
    },
    [REMOVE]: (state, action: Action<RemovePayload>): TodosState => {
      const { payload }: any = action;
      return produce(state, (draft) => {
        draft.todoItems = draft.todoItems.filter(
          (item) => item ? item.id !== action.payload : false,
        );
      });
    },
    [TOGGLE]: (state, action: Action<TogglePayload>): TodosState => {
      const { payload }: any = action;
      return produce(state, (draft) => {
        const index = draft.todoItems.findIndex((item) => item ? item.id === payload : false);
        const { done } = draft.todoItems[index];
        draft.todoItems[index].done = !done;
      });
    },
    [CHANGE_INPUT]: (state, action: Action<ChangeInputPayload>): TodosState => {
      const { payload }: any = action;
      return produce(state, (draft) => {
        draft.input = payload;
      });
    },
  },
  initialState,
);
