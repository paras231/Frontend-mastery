import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import Test from "./Test";

const App = () => {
  console.log(import.meta.env.VITE_SOME_KEY); // working
  console.log(import.meta.env.VITE_SOME_KEY_2); // working
  console.log(import.meta.env.VITE_TOKEN); // working
  return (
    <>
      <Card />
      {/* <Test/> */}
    </>
  );
};

export default App;
