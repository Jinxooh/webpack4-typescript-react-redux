import axios from 'axios';
import produce from 'immer';
import { Dispatch } from 'redux';
import { handleActions } from 'redux-actions';

const getPostAPI = postId => axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);

const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

const getPostSuccess = response => ({
  type: GET_POST_SUCCESS,
  payload: response,
});

const getPostFailure = error => ({
  type: GET_POST_FAILURE,
  payload: error,
});

const getPost = (postId: number) => async (dispatch: Dispatch) => {
  dispatch({type: GET_POST_PENDING});
  try {
    const response = await getPostAPI(postId);
    if (response) {
      dispatch(getPostSuccess(response));
    }
  } catch (error) {
    dispatch(getPostFailure(error));
  }
};

export const actionCreators = {
  getPost,
};

export interface PostState {
  pending: boolean;
  error: boolean;
  data: {
    title: string;
    body: string;
  };
}

const initialState: PostState = {
  pending: false,
  error: false,
  data: {
    title: '',
    body: '',
  },
};

export default handleActions({
  // [GET_POST_PENDING]: state => {
  //   ...state,
  //   pending: true,
  //   error: false,
  // },
  // [GET_POST_SUCCESS]: (state, action) => {
  //     const { title, body } = action.payload.data;

  //     return {
  //         ...state,
  //         pending: false,
  //         data: {
  //             title, body,
  //         },
  //     };
  // },
  // [GET_POST_FAILURE]: (state, action) => {
  //     return {
  //         ...state,
  //         pending: false,
  //         error: true,
  //     };
  // },
  [GET_POST_PENDING]: state => produce(state, (draft) => {
    draft.pending = true;
    draft.error = false;
  }),
  [GET_POST_SUCCESS]: (state, action) => produce(state, (draft) => {
    const { data } = action.payload;
    draft.pending = false;
    draft.data = data;
  }),
  [GET_POST_FAILURE]: (state, action) => produce(state, (draft) => {
    const { data } = action.payload;
    draft.pending = false;
    draft.error = true;
  }),
}, initialState);
