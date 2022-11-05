import React, { useState, useEffect } from "react";
import axios from "axios";
const Filter = () => {
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState([]);

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleFetch = async () => {
    const { data } = await axios.post(
      "https://travel-andman.herokuapp.com/api/user/search/hotel"
    );
    // console.log("data here",data?.hotels);
    setData(data?.hotels);
  };

  useEffect(() => {
    handleFetch();
  });

  console.log(data, "array here");

  if (checked) {
    return (
      <>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        {data
          ?.filter((hotel) => hotel.location === "Andman")
          .map((value) => {
            return (
              <>
                <span>{value.location}</span>
                <img src={value?.image?.url} alt="" />
              </>
            );
          })}
      </>
    );
  }

  

  return (
    <>
      <h1>Work with checkbox filter</h1>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <label htmlFor="">Andman</label>
      {data?.map((value) => {
        return (
          <>
            <p>{value?.name}</p>
            <img src={value.image?.url} alt="" />
          </>
        );
      })}
    </>
  );
};

export default Filter;
