import React, { useState, useContext } from "react";
import { signup } from "../Context/apiCalls";
import { AuthContext } from "../Context/Authcontext";

const Signup = () => {
  const { loading, error, dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRole] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, roles, dispatch);
  };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="text"
          value={roles}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role"
        />
        <button type="submit" disabled={loading}>
          Signup
        </button>
        {error && <h1>{error.message}</h1>}
      </form>
    </>
  );
};

export default Signup;
