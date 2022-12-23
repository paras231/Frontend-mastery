import React, { useState } from "react";

const Hook = () => {
  //? create a counter using hook->

  const [counter, setCounter] = useState(0);
  const [age, setAge] = useState();
  const [err, setErr] = useState(false);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    // value must not be less than 0
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  //? show an error message if the age is less than 18

  const handleAgeChange = (e) => {
    setErr(false);
    console.log(e.target.value);
    setAge(e.target.value);
    if (e.target.value < 18) {
      setErr(!err);
    }
  };

  return (
    <>
      <h1>my counter is</h1> <span>{counter}</span>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      {/* age logic */}
      <input type="text" value={age} onChange={handleAgeChange} />
      {err && <span>Age should be greater than 18</span>}
    </>
  );
};

export default Hook;
