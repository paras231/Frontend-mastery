import React from "react";
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar2";
import Cards from "./Components/Cards";
import Reviews from "./Components/Reviews";
import "./App.css";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar2 />
      <Cards/>
      <Reviews/>
    </>
  );
};

export default App;
