import React, { useRef } from "react";
import { useStore, userInput } from "./state";

const Home = () => {
  const votes = useStore((state) => state.votes);
  const increment = useStore((state) => state.increment);

  const names = userInput((state) => state.names);
  const addName = userInput((state) => state.addName);
  const inputRef = useRef();
  const addNames = () => {
    addName(inputRef.current.value);
    inputRef.current.value = "";
  };
  console.log(names);

  return (
    <>
      <div>Home</div>
      <h2>{votes}</h2>
      <button onClick={increment}>Add</button>
      <input type="text" ref={inputRef} />
      <button onClick={addNames}>Add Name</button>
      {names?.map((value) => {
        return (
          <>
            <p>{value}</p>
          </>
        );
      })}
    </>
  );
};

export default Home;
