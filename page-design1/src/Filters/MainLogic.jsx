import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const LOCATIONS = ["Port Blair", "Havelock", "Andman", "Beru"];

const MainLogic = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.post(
      "https://travel-andman.herokuapp.com/api/user/search/hotel"
    );
    console.log("fetched ", data?.hotels);
    setData(data?.hotels);
  };

  const HotelFilteres = (props) => {
    const { categories, onFilterChange } = props;
    return (
      <>
        <section>
          <ul>
            {categories.map((value, index) => {
              return (
                <>
                  <li key={index}>
                    <label>
                      <input
                        onChange={onFilterChange}
                        type="checkbox"
                        value={value}
                      />
                      {value}
                    </label>
                  </li>
                </>
              );
            })}
          </ul>
        </section>
      </>
    );
  };

const Hotel = (props)=>{
    const {hotel} = props; 
return (
    <>
    </>
)
}

  return <></>;
};

export default MainLogic;
