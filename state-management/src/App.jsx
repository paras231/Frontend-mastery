import React from "react";
import Home from "./components/Home";
import Products from "./components/Products";
import PageOne from "./components/InputState/PageOne";
import PageTwo from "./components/InputState/PageTwo";
import Hotel from "./components/Hotel";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Home /> */}

      {/* <Products/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hotel />} />
          <Route path="/two" element={<PageTwo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
