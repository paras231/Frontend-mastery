import { useState } from "react";

const Inputs = () => {
  const [name, setName] = useState("");
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>{name}</h3>
     
    </>
  );
};

export default Inputs;
