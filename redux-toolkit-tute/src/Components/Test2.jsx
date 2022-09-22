import React from "react";

const Test2 = (props) => {
  const { message, posts, action } = props;
  console.log(message);
  return (
    <>
      <h1>{message}</h1>
      <button onClick={action}>Click</button>
    </>
  );
};

export default Test2;
