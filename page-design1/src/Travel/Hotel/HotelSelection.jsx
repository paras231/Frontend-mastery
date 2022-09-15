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
            <div className="checkout-detail-div">
              <div className="breakfast-free">Free Breakfast Available</div>
              <div className="checkout-checkin">
                <div className="checkin">
                  <p>check in</p>
                  <p> 12pm</p>
                </div>
                <div className="checkin">
                  <p>check out</p>
                  <p> 12pm</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section finished */}
        {/* centered about text */}
        <center className="about-hotel">About Vulputate mattis Hotel</center>
        <center>
          <div className="about-para">
            Felis vitae, habitasse ipsum dolor semper semper sed. Augue nibh
            diam amet, donec integer egestas faucibus non augue. Id ullamcorper
            ullamcorper integer volutpat. Turpis et, sed tellus a nullam odio
            nibh imperdiet id. Nulla tincidunt fermentum habitant donec. Massa a
            commodo, tellus fusce. Semper molestie morbi aliquam, in
            pellentesque.
          </div>
          <h1 className="heading_styled">Hello new heading</h1>
        </center>
      </div>
    </>
  );
};

export default HotelSelection;
