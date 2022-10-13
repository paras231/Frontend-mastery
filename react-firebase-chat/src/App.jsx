import React from "react";
import Register from "./Components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
