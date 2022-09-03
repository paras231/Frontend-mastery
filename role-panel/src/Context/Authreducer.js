const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
    case "SIGNUP_REQUEST":
      return {
        role: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
    case "SIGNUP_SUCCESS":
      return {
        role: action.payload,
        loading: false,
        error: false,
      };
    case "LOGIN_FAILURE":
    case "SIGNUP_FAILURE":
      return {
        role: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        role: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
