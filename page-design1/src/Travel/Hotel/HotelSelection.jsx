import React from "react";
import "./HotelSelection.scss";
import bedroom from "../../assets/bedroom.png";
import hotel1 from "../../assets/hotel1.png";
import hotel2 from "../../assets/hotel2.png";
import Couple from "../../assets/Couple.png";

const HotelSelection = () => {
  return (
    <>
      <div className="hotel-selection-main-container">
        <section className="hotel-detail-section">
          <div className="big">
            <img src={bedroom} />
          </div>
          <div className="image-grid">
            <img src={hotel1} />
            <img src={hotel2} />
          </div>
          <div className="hotel-room-detail">
            <div className="hotel-room-detail-child">
              <div className="price-detail-div">
                <p className="price-detail-text">Price Starts At</p>
                <p className="price-detail-text">Per Night</p>
                <p className="price-detail-text">$365</p>
                <p className="price-detail-text-red">$250</p>
                <p className="price-detail-text">+$25 taxes & fees</p>
              </div>
              <div className="adult-count">
                <div className="coupel-image-text">
                  <img src={Couple} />
                  <p>For 2 adults</p>
                </div>
                <div className="coupel-image-text">
                  <img src={Couple} />
                  <p>For 2 adults</p>
                </div>
              </div>
            </div>
            <div className="view-option">
              <button className="view-option-button">
                View 5 More Options
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HotelSelection;
