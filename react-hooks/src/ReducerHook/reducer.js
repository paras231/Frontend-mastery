import { postActions } from "./actionTypes";

export const initialState = {
  posts: [],
  loading: false,
  error: null,
};
export const fetchPostReducer = (state, action) => {
  switch (action.type) {
    case postActions.FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case postActions.FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case postActions.FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// https://jsonplaceholder.typicode.com/posts
