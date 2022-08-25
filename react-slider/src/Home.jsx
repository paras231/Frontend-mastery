import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import {motion} from "framer-motion";
import styled from "styled-components";
import "./Home.css";
const images = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
];

const Icon1 = styled(IoIosArrowDropleft)`
  height: 38px;
  width: 38px;
  color: rgba(20, 88, 67, 1);
  margin-left: 65vmax;
  margin-top: -10vmax;
  cursor: pointer;
`;
const Icon2 = styled(IoIosArrowDropright)`
  height: 38px;
  width: 38px;
  color: rgb(20, 88, 67);
  /* margin-left: 65vmax; */
  margin-top: -31vmax;
  /* position: absolute; */
  cursor: pointer;
`;
const PrevButton = (props) => {
  const { className, style, onClick } = props;
  return <Icon1 style={{ style }} onClick={onClick} />;
};

const NextButton = (props) => {
  const { className, style, onClick } = props;
  return <Icon2 style={{ style }} onClick={onClick} />;
};
const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  centerMode: true,

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
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
      },
    },
  ],
};
const Home = () => {
  const customeSlider = React.useRef();
  const gotoNext = () => {
    customeSlider.current.slickNext(); //important function of slick slider
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev(); //important function of slick slider
  };
  return (
    <>
      <div style={{ width: "80%", margin: "0 auto", marginTop: "10vh" }}>
        <div >
          <PrevButton onClick={() => gotoPrev()} />
          <NextButton onClick={() => gotoNext()} />
        </div>
        <Slider {...settings} ref={customeSlider}>
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
