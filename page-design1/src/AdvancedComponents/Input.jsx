import React, { useState, useEffect } from "react";
import "./Input.css";
import axios from "axios";


const Input = () => {
  const [data, setData] = useState([]);

  const myData = [
    {
      name: "Hellow world",
      location: "Jaipur",
    },
    {
      name: "Javascript",
      location: "Ajmer",
    },
    {
      name: "Pyhton",
      location: "Alwar",
    },
    {
      name: "Hellow world",
      location: "Jaipur",
    },
  ];
  const location = "Andman"
  console.log(location)
  const handleFetch = async () => {
    const  {data}  = await axios.post(
      "https://travel-andman.herokuapp.com/api/user/search/hotel",
      {location}

    );
    // console.log("data here",data?.hotels);
    setData(data?.hotels);

  };
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
  console.log(data,'fetched data here')
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
      <button onClick={handleFetch}>Click me</button>
    </>
  );
};

export default Input;
