import React, { useState, useEffect } from "react";
import axios from "axios";
import MainList from "./MainList";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";

const ClickFetch = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const location = "Andman";
  const handleFetch = async () => {
    const { data } = await axios.post(
      "https://travel-andman.herokuapp.com/api/user/search/hotel",
      { location }
    );
    console.log("fetched data on click", data?.hotels);
    setData(data?.hotels);
    if (data?.hotels) {
      navigate("/fetchedclick");
    }
  };

  return (
    <>
      <button onClick={handleFetch}>Click me</button>


     
    </>
  );
};

export default ClickFetch;
