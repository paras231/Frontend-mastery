import React from "react";
import "./Dropdown.css";

const Dropdown = () => {
  return (
    <>
      <div className="container">
        <button className="my-button">Hover me</button>
        <div className="list-wrapper">
          <ul>
            <li>HOME</li>
            <li>MESSAGE</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>SERVICES</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
