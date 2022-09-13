import React, { useState } from "react";
import "./FerryTravelDetail.scss";
import Line from "../assets/line.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import FerryTravelSummary from "./MobileView/FerryTravelSummary";

const FerryTravelDetail = () => {
  const nationList = [
    "India",
    "Australia",
    "China",
    "Pakistan",
    "Sri Lanka",
    "UAE",
  ];
  const genderList = ["Male", "Female", "Other"];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [title, setTitle] = useState("");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [natioanality, setNationality] = useState("");
  const [contactFullName, setContactFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [alternateMobile, setAlternateMobile] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      title,
      fullName,
      gender,
      age,
      natioanality,
      contactFullName,
      email,
      mobile,
      alternateMobile
    );
  };
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
        <form onSubmit={handleSubmit}>
          <div className="detail-wrapper">
            <p className="ferry-heading">Ferry</p>
            <p className="add-traveller-text">Add Traveller(s) Details</p>
            <p className="adult-heading">Adult 1</p>
            {/* form div here */}
            <div className="form-wrapper-1">
              <div className="title-wrapper">
                <p className="title-text">Title</p>
                <select
                  onChange={(e) => setTitle(e.target.value)}
                  className="select-title"
                >
                  <option>Select</option>
                  <option vlaue={title}>Mr</option>
                  <option value={title}>Mrs</option>
                </select>
              </div>
              <div className="full-name-wrapper">
                <p className="full-name-text">Full Name</p>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  className="full-name-input"
                  placeholder="Full Name"
                />
              </div>
              <div className="gender-wrapper">
                <p className="gender-text">Gender</p>
                <select
                  onChange={(e) => setGender(e.target.value)}
                  className="select-gender"
                >
                  <option>Select</option>
                  {genderList.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* form div here */}
            <div className="fomr-wrapper-2">
              <div className="age-wrapper">
                <p className="age-text">Age</p>
                <input
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  type="text"
                  className="age-input"
                  placeholder="Age"
                />
              </div>
              <div className="nationality-wrapper">
                <p className="natioanality-text">Nationality</p>
                <select
                  onChange={(e) => setNationality(e.target.value)}
                  className="select-natioanality"
                >
                  <option>Select</option>
                  {nationList.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                  <option value={natioanality}>Indian</option>
                  <option value={natioanality}>Australian</option>
                  <option value={natioanality}>Malaysian</option>
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
                    value={contactFullName}
                    onChange={(e) => setContactFullName(e.target.value)}
                    type="text"
                    className="contact-full-name-input"
                    placeholder="Full Name"
                  />
                </div>
                <div className="contact-email-wrapper">
                  <p className="email-text">Email</p>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      type="text"
                      className="mobile-input"
                      placeholder="Number"
                    />
                  </div>
                </div>
                <div className="first-number-wrapper">
                  <p className="mobile-text">Alternate Mobile Number</p>
                  <div className="select-number-wrapper-1">
                    <select>
                      <option value="">in +91</option>
                      <option value="">in +91</option>
                      <option value="">in +91</option>
                      <option value="">in +91</option>
                    </select>
                    <input
                      value={alternateMobile}
                      onChange={(e) => setAlternateMobile(e.target.value)}
                      type="text"
                      className="mobile-input"
                      placeholder="Number"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* proceed button */}
            <button type="submit" className="button-proceed">
              Proceed
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FerryTravelDetail;
