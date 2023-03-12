import React from "react";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Nav/Navbar";
import Review, { GridView } from "./Components/Home/Review";
import PackageListPage from "./Components/Home/PackageListPage";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Review /> */}
      {/* <GridView /> */}
      <PackageListPage />
    </>
  );
};

export default App;
