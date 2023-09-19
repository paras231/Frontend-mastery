import React from "react";
import Test2 from "./Components/Test2";
import Test1 from "./Components/Test1";
import Todo from "./Todo";
import Home from "./Home";
import Post from "./Post";
import SearchComponent from "./Components/SearchComponent";
import Cart from "./Cart";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      {/* <Test1/>
      <Test2  /> */}
      {/* <Todo />
      <Home />
    
      {/* <Cart/> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Post /> */}
      <SearchComponent/>
    </>
  );
};

export default App;
