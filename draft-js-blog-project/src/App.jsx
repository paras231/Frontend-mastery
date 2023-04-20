import React from "react";
import DrafSetup from "./Initiate/DrafSetup";
import Blogs from "./Initiate/Blogs";
const App = () => {
  // note -> remove strict mode , which causes error
  return (
    <>
      <DrafSetup />
      <Blogs />
    </>
  );
};

export default App;
