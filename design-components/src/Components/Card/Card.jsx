import React from "react";
import "./Card.scss";

const Card = () => {
  const url =
    "https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60";
  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="wrapper1">
            <img src={url} alt="laptop" />
          </div>
          <div className="wrapper2">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              cum quisquam reprehenderit ex magnam laboriosam nulla ullam
              mollitia, soluta aut.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="wrapper1">
            <img src={url} alt="laptop" />
          </div>
          <div className="wrapper2">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              cum quisquam reprehenderit ex magnam laboriosam nulla ullam
              mollitia, soluta aut.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="wrapper1">
            <img src={url} alt="laptop" />
          </div>
          <div className="wrapper2">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              cum quisquam reprehenderit ex magnam laboriosam nulla ullam
              mollitia, soluta aut.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
