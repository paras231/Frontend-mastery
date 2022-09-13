import React from "react";
import "./FerryTravelSummary.scss";

const FerryTravelSummary = () => {
  return (
    <>
      <div className="summary-wrapper-new">
        <p className="summary-heading">Trip Summary:</p>
        <p className="summary-title">Trip - 1:</p>
        <p className="location-1">PORTBLAIR → HAVELOCK</p>
        <div className="date-wrapper">
          <p className="date-text">Date:</p>
          <p className="date">10 Sep 2022</p>
        </div>
        <div className="time-wrapper">
          <p className="time-text">Time:</p>
          <p className="time">7:00 AM - 9:15 AM ( 135 Minutes )</p>
        </div>
        <div className="ferry-name-wrapper">
          <p className="ferry-text">Ferry:</p>
          <p className="ferry-name">Green Ocean 1 ( Economy Class )</p>
        </div>
        <div className="total-fare-wrapper">
          <p className="total-text">Total Fare:</p>
          <p className="total">0 x Adult($1,100) = $0</p>
        </div>
      </div>
    </>
  );
};

export default FerryTravelSummary;
