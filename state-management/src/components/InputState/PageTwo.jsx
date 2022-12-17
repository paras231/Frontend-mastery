import React from "react";
import { useInputStore } from "../state";

const PageTwo = () => {
  const name = useInputStore((state) => state.name);
  const setName = useInputStore((state) => state.setName);
  return (
    <>
      <input type="text" />
      <h1>Page 2</h1>
      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>{name}</h1>
    </>
  );
};

export default PageTwo;
