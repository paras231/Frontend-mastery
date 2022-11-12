import React from "react";
import { useLocation } from "react-router-dom";

const A = () => {
  const location = useLocation();

  const data = location?.state?.data;

  console.log(data);
  console.log(location);
  return (
    <>
      <h1>COMPONENT A</h1>

      {data?.map((value) => (
        <>
          {/* <span>{value?.name}</span>
          <h2>{value?.language}</h2> */}
          <h2>{value?.name}</h2>
        </>
      ))}
    </>
  );
};

export default A;
