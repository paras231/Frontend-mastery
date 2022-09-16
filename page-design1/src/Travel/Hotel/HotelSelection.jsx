import React from "react";
import "./HotelSelection.scss";
import bedroom from "../../assets/bedroom.png";
import hotel1 from "../../assets/hotel1.png";
import hotel2 from "../../assets/hotel2.png";
import Couple from "../../assets/Couple.png";
import green from "../../assets/green_circle.png";
import Line from "../../assets/line.png";
import { BsArrowRight } from "react-icons/bs";
import { IoIosBed } from "react-icons/io";
import HotelRoomList from "./HotelRoomList";
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
        </center>
        <section className="middle-section">
          <div className="middle-sectin-div">
            <div className="middle-section-left-part">
              <div className="circle-text-wrapper">
                <img src={green} alt="greenbg" />
                <p>
                  Blandit diam quisque pellentesque habitant suspendisse nam
                  feugiat.
                </p>
              </div>
              <div className="circle-text-wrapper">
                <img src={green} alt="greenbg" />
                <p>
                  Blandit diam quisque pellentesque habitant suspendisse nam
                  feugiat.
                </p>
              </div>
              <div className="circle-text-wrapper">
                <img src={green} alt="greenbg" />
                <p>
                  Blandit diam quisque pellentesque habitant suspendisse nam
                  feugiat.
                </p>
              </div>
            </div>
            <img src={Line} className="middle-section-line" />
            <div className="middle-section-right-part">
              <div className="middle-right-grid-1">
                <div className="right-detail-div">
                  <IoIosBed />
                  <p>Food And Dining</p>
                  <BsArrowRight className="right-arrow" />
                </div>
                <div className="right-detail-div">
                  <IoIosBed />
                  <p>Food And Dining</p>
                  <BsArrowRight className="right-arrow" />
                </div>
                <div className="right-detail-div">
                  <IoIosBed />
                  <p>Food And Dining</p>
                  <BsArrowRight className="right-arrow" />
                </div>
              </div>
              <div className="middle-right-grid-1">
                <div className="right-detail-div">
                  <IoIosBed />
                  <p>Food And Dining</p>
                  <BsArrowRight className="right-arrow" />
                </div>
                <div className="right-detail-div">
                  <IoIosBed />
                  <p>Food And Dining</p>
                  <BsArrowRight className="right-arrow" />
                </div>
                <div className="right-detail-div">
                  <IoIosBed />
                  <p>Food And Dining</p>
                  <BsArrowRight className="right-arrow" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <HotelRoomList/>
    </>
  );
};

export default HotelSelection;
