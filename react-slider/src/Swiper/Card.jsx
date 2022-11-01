import React from "react";
import "./Card.css";
const Card = () => {
  const url =
    "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
  return (
    <>
      <div className="main-container">
        <div className="upper-card">
          <img src={url} alt="sliderimage" />
        </div>
        <div className="lower-card">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
            delectus nisi optio distinctio neque alias soluta unde commodi,
            temporibus a debitis amet? Incidunt illum ex explicabo laudantium
            totam, doloremque ipsa.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
