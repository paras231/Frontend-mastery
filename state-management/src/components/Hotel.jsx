import React from "react";
import { hotelStore } from "./state";

const Hotel = () => {
  const hotels = hotelStore((state) => state.hotels);
  const addHotel = hotelStore((state) => state.addHotel);

  const hotel = {
    name: "Ross Garden",
    location: "Havelock",
    price: 3400,
  };
   
  const addNewHotel = () => {
    addHotel(hotel);
  };
  console.log(hotels, "all added hotels here");



  return (
    <>
      <h2>All Hotels</h2>
      <button onClick={addNewHotel}>Add Hotel</button>
      {hotels.map((hotel) => {
        return <>{hotel.name}</>;
      })}
    </>
  );
};

export default Hotel;
