import React, { useState, useContext } from "react";
import { login } from "../Context/apiCalls";
import { AuthContext } from "../Context/Authcontext";

const Login = () => {
  const { loading, error, dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, dispatch);
  };
  if (error) {
    return <h1>Something went wrong</h1>;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
