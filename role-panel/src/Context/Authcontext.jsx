import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./Authreducer";
const INITIAL_STATE = {
  role: JSON.parse(localStorage.getItem("profile")),
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem("profile", JSON.stringify(state.role));
  }, [state.role]);
  return (
    <AuthContext.Provider
      value={{
        role: state.role,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};