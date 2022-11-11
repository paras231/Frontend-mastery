import React from "react";
import A from "./components/A";
import Post from "./components/Post";
import Inputs from "./components/Inputs";

const App = () => {
  const name = " name sending to Props";
  const age = 23;
  return (
    <>
      <h1>REACT WITH TYPESCRIPT</h1>
      <A name={name} age={age} />
      <Post title="Post Title" likes={80} desc="description" />
      <Inputs />
    </>
  );
};

export default App;
