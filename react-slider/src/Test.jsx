import React from "react";
import styled from "styled-components";
import hotel from "./assets/hotel.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Container = styled.div`
  margin-top: 20vh;
  display:flex;
`;

const Wrapper = styled.div`
  background-image: url(${hotel});
  background-repeat: no-repeat;
  width: 25vw;
  height: 50vh;
  text-align: center;
`;

const Text = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: white;
  padding-top:40vh;
`;


const PrevButton = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" ,marginLeft:"-4vw",marginTop:"-10vh"}}
        onClick={onClick}
      />
    );
  };
  
  const NextButton = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red",marginTop:"-10vh" }}
        onClick={onClick}
      />
    );
  };
  const settings = {
  
    dots:true,
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

const Test = () => {
  return (
    <>
      <div style={{ width: "80%", margin: "0 auto",marginTop:'10vh' }}>
      <Slider {...settings}>
        <Container>
        <Wrapper>
          <Text>Hotel</Text>
        </Wrapper>
        <Wrapper>
          <Text>Hotel</Text>
        </Wrapper>
        <Wrapper>
          <Text>Hotel</Text>
        </Wrapper>
        </Container>
        </Slider>
        </div>
    </>
  );
};

export default Test;
