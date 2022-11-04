import React from "react";
import "./Input.css";

const Input = () => {
  const [maininput, setMaininput] = React.useState("");

  const [child, setChild] = React.useState(0);
  const [adult, setAdult] = React.useState(0);
  const [show, setShow] = React.useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const incrementChild = () => {
    setChild(child + 1);
  };
  const decrementChild = () => {
    if (child <= 1) return;
    setChild(child - 1);
  };

  const incrementAdult = () => {
    setAdult(adult + 1);
  };
  const decrementAdult = () => {
    if (adult <= 1) return;
    setAdult(adult - 1);
  };
  return (
    <>
      <div>
        <input
          onClick={handleShow}
          style={{ width: "auto", outline: "none", border: "none" }}
          value={`children: ${child}  , Adults:  ${adult}`}
        />

        {show && (
          <div style={{ display: "grid" }}>
            <div style={{ display: "flex" }}>
              <span>Children</span>
              <button onClick={decrementChild}>-</button>
              <input
                style={{
                  width: "2vmax",
                  border: "none",
                  outline: "none",
                  backgroundColor: "red",
                }}
                type="text"
                aria-label="Children"
                value={child}
                onChange={(e) => setChild(e.target.value)}
              />
              <button onClick={incrementChild}>+</button>
            </div>
            <div style={{ display: "flex" }}>
              <span>Adults</span>
              <button onClick={decrementAdult}>-</button>
              <input
                style={{ width: "6vmax" }}
                type="text"
                aria-label="Children"
                value={adult}
                onChange={(e) => setAdult(e.target.value)}
              />
              <button onClick={incrementAdult}>+</button>
            </div>
            <input style={{ width: "6vmax" }} type="text" />
            <input style={{ width: "6vmax" }} type="text" />
          </div>
        )}
      </div>
    </>
  );
};

export default Input;
