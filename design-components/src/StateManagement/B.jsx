import React, { useState } from "react";
import { Link } from "react-router-dom";

const B = () => {
  const [data, setData] = useState([
    {
      name: "Paras",
      id: 1,
      age: 23,
      language: "JS",
    },
  ]);

  return (
    <>
      <h1>COMPONENT B</h1>
      <Link to="/gotoa" state={{ data: data }}>
        <button>Go to A</button>
      </Link>
      {/* <A handleClick={handleClick} data={data} /> */}
    </>
  );
};

export default B;
