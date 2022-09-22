import React from "react";
import Test2 from "./Test2";

const Test1 = () => {
  const myStr = "This is string to be used in test2 component";
  const posts = [];
  const clickAction = () => {
    setTimeout(() => {
      console.log("function is running");
    }, 1000);
  };
  // this is a parent component
  return (
    <>
      <Test2
        style={{ display: "none" }}
        message={myStr}
        posts={posts}
        action={clickAction}
      />
    </>
  );
};

export default Test1;
