import React from "react";

const A = (props: { name: String; age: Number }) => {
  const func1 = (price: Number, name: String) => {
    console.log(price);
  };

  func1(props.age, props.name);

  return (
    <>
      <h1>{props.name}</h1>
      <h3>{props.age.toString()}</h3>
    </>
  );
};

export default A;
