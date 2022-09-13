import React from "react";
import Todo from "./Todo";
import Home from "./Home";
import Post from "./Post";
import Cart from "./Cart";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      {/* <Todo />
      <Home />
      <Post /> */}
      {/* <Cart/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
