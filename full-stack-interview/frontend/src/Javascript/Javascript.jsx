import React from "react";

const Javascript = () => {
  // example of reduce method

  const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
  const result = arr.reduce((accumulater, currentValue) => {
    return accumulater + currentValue;
  }, 0);
  console.log(result);

  // splice method with example
  const data = arr.splice(2, 2); // will remove 30,40 from array and return them
  console.log(data);
  //   console.log(arr) // new array
  // slice method with example
  const data2 = arr.slice(1, 5);
  console.log(data2);
  return <></>;
};

export default Javascript;
