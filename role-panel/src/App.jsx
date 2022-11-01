import React, { useContext } from "react";
import { AuthContext } from "./Context/Authcontext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup";
import Agent2 from "./Components/Agent2";
const App = () => {
  const { role } = useContext(AuthContext);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={role ? <Home /> : <Signup />} />
          <Route path="/agent" element={role ? <Agent2 /> : <Signup />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
