import React, { useState } from "react";

const ArrayMethods = () => {
  const [state, setState] = useState({
    from: "",
    to: "",
  });
  console.log(state.from);
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  const [addObj, setaddObj] = useState(0);
  const myObj = {
    name: "Paras Sharma",
    age: 23,
  };
  const handleIncrease = () => {
    setaddObj(addObj + 1);
    console.log(addObj);
  };
  //   const value = Array.from({ length: 10 }, (test, index) =>
  //     console.log(index, "index here")
  //   );
  //   console.log(value, "value of array formed");
  return (
    <>
      <h1>Array methods to create div</h1>
      <button onClick={handleIncrease}>Add More</button>
      {Array.from({ length: addObj }, (test, index) => index + 1).map((i) => {
        return (
          <>
            <div>
              <p>{i + 1}</p>
              <input
                type="text"
                name="from"
                onChange={handleChange}
                value={state.from}
              />
              <input
                type="text"
                name="from"
                onChange={handleChange}
                value={state.from}
              />
              <span>{myObj.age}</span>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ArrayMethods;
