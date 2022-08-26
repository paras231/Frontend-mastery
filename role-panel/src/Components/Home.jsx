import React, { useContext } from "react";
import Admin from "./Admin";
import Agent from "./Agent";
import Staff from "./Staff";
import Superadmin from "./Superadmin";
import { AuthContext } from "../Context/Authcontext";

const Home = () => {
  const { role,dispatch } = useContext(AuthContext);
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <>
      {role.roles === "Agent" ? (
        <Agent />
      ) : role.roles === "Admin" ? (
        <Admin />
      ) : role.roles === "Superadmin" ? (
        <Superadmin />
      ) : role.roles === "Staff" ? (
        <Staff />
      ) : null}
       <button onClick={logout}>Logout</button>
    </>
  );
};

export default Home;
