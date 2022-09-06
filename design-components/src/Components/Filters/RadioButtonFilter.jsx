import React, { useState } from "react";
import { packageData, ferryData } from "./data.js";

const RadioButtonFilter = () => {
  // ? here i have created a radio button filter which is working perfectly
  const [selected, setSelected] = useState("ferries"); // if  ferries will be selected by default
  return (
    <>
      <h1>Please select One</h1>
      <div style={{ display: "flex", gap: "30px" }}>
        <input
          style={{ cursor: "pointer" }}
          type="radio"
          name="something"
          value="packages"
          checked={selected === "packages"}
          onChange={() => setSelected("packages")}
        />
        <p>packages</p>
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        <input
          style={{ cursor: "pointer" }}
          type="radio"
          name="something"
          value="ferries"
          checked={selected === "ferries"}
          onChange={() => setSelected("ferries")}
        />
        <p>ferries</p>
      </div>
      {selected === "packages" ? (
        <div>
          {packageData.map((value) => {
            return (
              <div key={value.id}>
                <span>{value.name}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {ferryData.map((value) => {
            return (
              <div key={value.id}>
                <span>{value.name}</span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default RadioButtonFilter;
