const AuthReducer = (state = {}, action) => {
    switch (action.type) {
      case "LOGIN_REQUEST":
        return {
          role: null,
          loading: true,
          error: null,
        };
      case "LOGIN_SUCCESS":
        return {
          role: action.payload,
          loading: false,
          error: false,
        };
      case "LOGIN_FAILURE":
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
        }
      default:
        return state;
    }
  };
  
  export default AuthReducer;