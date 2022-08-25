import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

import "./Home.css";
const images = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
];

const PrevButton = (props) => {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowDropleft
      className={className}
      style={{
        height: "38px",
        width: "38px",
        color: "rgba(20, 88, 67, 1)",
        marginLeft: "-5vmax",
        marginTop: "-7vmax",
      }}
      onClick={onClick}
    />
  );
};

const NextButton = (props) => {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowDropright
      className={className}
      style={{
        height: "38px",
        width: "38px",
        color: "rgba(20, 88, 67, 1)",
        marginRight: "-3vmax",
        marginTop: "-7vmax",
      }}
      onClick={onClick}
    />
  );
};
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  centerMode: true,
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};
const Home = () => {
  return (
    <>
      <div style={{ width: "80%", margin: "0 auto", marginTop: "10vh" }}>
        <Slider {...settings}>
          {images.map((i, index) => {
            return (
              <div key={index}>
                <img style={{ width: "25vw", height: "30vh" }} src={i} />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Home;
