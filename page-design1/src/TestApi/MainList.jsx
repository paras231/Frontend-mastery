import React, { useState, useEffect } from "react";
import axios from "axios";

const MainList = ({ props }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.post(
      "https://travel-andman.herokuapp.com/api/user/search/hotel"
    );
    // console.log("data here",data?.hotels);
    setData(data?.hotels);
  };
  useEffect(() => {
    fetchData();
  });
  console.log("fetched data here after redirect", props);
  return (
    <>
      {data?.map((value) => {
        return (
          <>
            <p>{value.name}</p>
          </>
        );
      })}
    </>
  );
};

export default MainList;
