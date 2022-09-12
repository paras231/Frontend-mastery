import React, { useState } from "react";

const DivInput = () => {
  const [showInputs, setShowInputs] = useState(false);
  const [adult, setAdult] = useState(0);
  const [kid, setKid] = useState(0);
  const [room, setRoom] = useState(0);
  const handleShow = () => {
    setShowInputs(!showInputs);
  };
  const incrementKid = () => {
    setKid(kid + 1);
  };
  const decrementKid = () => {
    if (kid <= 1) return;
    setKid(kid - 1);
  };
  return (
    <>
      <h1>Hello world</h1>
      <div onClick={handleShow} style={{ display: "grid", gap: "2vmax" }}>
        kids {kid}
      </div>
      {showInputs && (
        <div style={{ display: "flex", gap: "2vmax" }}>
          <button onClick={decrementKid}>-</button>
          <input type="text" value={kid} />
          <button onClick={incrementKid}>+</button>
        </div>
      )}
    </>
  );
};

export default DivInput;
