import React from "react";
import { useInputStore } from "../state";
import { Link } from "react-router-dom";

const PageOne = () => {
  const name = useInputStore((state) => state.name);
  const email = useInputStore((state) => state.email);
  const setName = useInputStore((state) => state.setName);

  return (
    <>
      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>{name}</h1>
      <Link to="/two">
        <button>Go to next Page</button>
      </Link>
    </>
  );
};

export default PageOne;
