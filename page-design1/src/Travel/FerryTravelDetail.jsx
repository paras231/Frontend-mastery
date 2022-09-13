import React from "react";
import "./FerryTravelDetail.scss";
import Line from "../assets/line.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import FerryTravelSummary from "./MobileView/FerryTravelSummary";

const FerryTravelDetail = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isMobile ? <FerryTravelSummary /> : null}
      <div className="main-container">
        <div className="summary-wrapper">
          <p className="summary-heading">Trip Summary:</p>
          <p className="summary-title">Trip - 1:</p>
          <p className="location">PORTBLAIR → HAVELOCK</p>
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
        <img src={Line} alt="line image" className="seperater-line" />
        <div className="detail-wrapper">
          <p className="ferry-heading">Ferry</p>
          <p className="add-traveller-text">Add Traveller(s) Details</p>
          <p className="adult-heading">Adult 1</p>
          {/* form div here */}
          <div className="form-wrapper-1">
            <div className="title-wrapper">
              <p className="title-text">Title</p>
              <select className="select-title">
                <option>Mr</option>
                <option>Mrs</option>
              </select>
            </div>
            <div className="full-name-wrapper">
              <p className="full-name-text">Full Name</p>
              <input
                type="text"
                className="full-name-input"
                placeholder="Full Name"
              />
            </div>
            <div className="gender-wrapper">
              <p className="gender-text">Gender</p>
              <select className="select-gender">
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Other</option>
              </select>
            </div>
          </div>
          {/* form div here */}
          <div className="fomr-wrapper-2">
            <div className="age-wrapper">
              <p className="age-text">Age</p>
              <input type="text" className="age-input" placeholder="Age" />
            </div>
            <div className="nationality-wrapper">
              <p className="natioanality-text">Nationality</p>
              <select name="" id="" className="select-natioanality">
                <option value="">Indian</option>
                <option value="">Australian</option>
                <option value="">Malaysian</option>
              </select>
            </div>
          </div>
          {/*  add contact details div here */}
          <div className="add-contacts-wrapper">
            <p className="contact-heading">Add Contact Details</p>
            <div className="contact-form-wrapper">
              <div className="contact-full-name-wrapper">
                <p className="full-name-text">Full Name</p>
                <input
                  type="text"
                  className="contact-full-name-input"
                  placeholder="Full Name"
                />
              </div>
              <div className="contact-email-wrapper">
                <p className="email-text">Email</p>
                <input
                  type="text"
                  className="contact-email-input"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="contact-mobile-number-wrapper">
              <div className="first-number-wrapper">
                <p className="mobile-text">Mobile Number</p>
                <div className="select-number-wrapper-1">
                  <select name="" id="">
                    <option value="">in +91</option>
                    <option value="">in +91</option>
                    <option value="">in +91</option>
                    <option value="">in +91</option>
                  </select>
                  <input
                    type="text"
                    className="mobile-input"
                    placeholder="Number"
                  />
                </div>
              </div>
              <div className="first-number-wrapper">
                <p className="mobile-text">Alternate Mobile Number</p>
                <div className="select-number-wrapper-1">
                  <select name="" id="">
                    <option value="">in +91</option>
                    <option value="">in +91</option>
                    <option value="">in +91</option>
                    <option value="">in +91</option>
                  </select>
                  <input
                    type="text"
                    className="mobile-input"
                    placeholder="Number"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FerryTravelDetail;
