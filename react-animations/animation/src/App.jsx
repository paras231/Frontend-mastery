import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import Test from "./Test";
import Test1 from "./Test1";
import Test2 from "./Test2";
import Loader from "./Loader";
const App = () => {
  console.log(import.meta.env.VITE_SOME_KEY); // working
  console.log(import.meta.env.VITE_SOME_KEY_2); // working
  console.log(import.meta.env.VITE_TOKEN); // working
  return (
    <>
      {/* <Card /> */}
      {/* <Test/> */}
      {/* <Test1 /> */}
      {/* <Test2 /> */}
      <Loader/>
    </>
  );
};

export default App;
