import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const B = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://travel-andman.herokuapp.com/api/user/get/hotels"
      );
      setData(data?.hotels);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  });
  // const [data, setData] = useState([
  //   {
  //     name: "Paras",
  //     id: 1,
  //     age: 23,
  //     language: "JS",
  //   },
  // ]);

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
