export const apiReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return {
        data: null,
        loading: true,
        error: null,
      };

    case "FETCH_SUCCESS":
      return {
        data: action.payload,
        loading: false,
        error: false,
      };

    case "FETCH_FAILURE":
      return {
        data: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
