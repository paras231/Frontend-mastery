import React from "react";
import StateHooks from "./StateHooks";
import EffectHook from "./EffectHook";
import Test from "./Test";
import RefHook from "./RefHook";
import Post from "./Post";
import Users from "./Components/Users";
import WIndowscroll from "./Customhooks/WIndowscroll";
import Form from "./Formvalidation/Form";
const App = () => {
  return (
    <>
      <StateHooks />
      {/* <EffectHook /> */}
      {/* <Test /> */}
      {/* <RefHook /> */}
      {/* <Post /> */}
      {/* <WIndowscroll /> */}
      {/* <Users /> */}
      <Form/>
    </>
  );
};

export default App;
