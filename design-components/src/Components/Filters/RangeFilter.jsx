import React, { useState } from "react";
import { products } from "./data";
const RangeFilter = () => {
  const [range, setRange] = useState(0);
  console.log();
 

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20vmax",
        }}
      >
        <input
          type="range"
          value={range}
          max={500}
          min={100}
          onChange={(e) => setRange(e.target.value)}
        />
        <h1>{range}</h1>
      </div>
    </>
  );
};

export default RangeFilter;
