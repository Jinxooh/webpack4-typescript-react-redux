import axios from 'axios';
import produce from 'immer';
import { Dispatch } from 'redux';
import { handleActions } from 'redux-actions';

const getPostAPI = postId => axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);

const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

export const getPost = (postId: number) => (dispatch: Dispatch): Promise<any> => {
  // 먼저, 요청이 시작했다는것을 알립니다
  dispatch({type: GET_POST_PENDING});

  // 요청을 시작합니다
  // 여기서 만든 promise 를 return 해줘야, 나중에 컴포넌트에서 호출 할 때 getPost().then(...) 을 할 수 있습니다
  return getPostAPI(postId).then(
    (response) => {
      // 요청이 성공했을경우, 서버 응답내용을 payload 로 설정하여 GET_POST_SUCCESS 액션을 디스패치합니다.
      dispatch({
          type: GET_POST_SUCCESS,
          payload: response,
      });
    },
  ).catch ((error) => {
    dispatch({
      type: GET_POST_FAILURE,
      payload: error,
    });
  });
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
