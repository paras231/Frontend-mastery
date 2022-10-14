import React, { useContext } from "react";
import Register from "./Components/Register";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import "./App.css";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  //? creating protected route->

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
