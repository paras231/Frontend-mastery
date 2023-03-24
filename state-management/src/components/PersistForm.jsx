import React from "react";
import { useInputStore } from "./state";

const PersistForm = () => {
  const name = useInputStore((state) => state.name);
  const email = useInputStore((state) => state.email);
  const setName = useInputStore((state) => state.setName);
  const setEmail = useInputStore((state) => state.setEmail);
  return (
    <>
      <form action="">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
    </>
  );
};

export default PersistForm;
