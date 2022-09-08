import React from "react";
import "./Input.css";

const Input = () => {
  const [show, setShow] = React.useState("");
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <input onClick={handleShow} style={{ width: "10vmax" }} />

      {show && (
        <div style={{ display: "grid" }}>
          <input style={{ width: "6vmax" }} type="text" />
          <input style={{ width: "6vmax" }} type="text" />
          <input style={{ width: "6vmax" }} type="text" />
          <input style={{ width: "6vmax" }} type="text" />
        </div>
      )}
    </>
  );
};

export default Input;
