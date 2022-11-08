import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import Card from "./Card";
import Cards2 from "./Cards2";

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button style={{ marginTop: "20vh" }} onClick={() => swiper.slideNext()}>
      {children}
    </button>
  );
};

const SwiperComponent = () => {
  const data = [
    <Cards2 />,
    <Cards2 />,
    <Cards2 />,
    <Cards2 />,
    <Cards2 />,
    <Cards2 />,
    <Cards2 />,
    <Cards2 />,
    <Cards2 />,
  ];
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((value) => {
          return (
            <>
              <SwiperSlide className="next">{value}</SwiperSlide>
            </>
          );
        })}

        <SwiperButtonNext>Slide</SwiperButtonNext>
      </Swiper>
    </>
  );
};

export default SwiperComponent;
