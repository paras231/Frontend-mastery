import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import Card from "./Card";

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button style={{ marginTop: "20vh" }} onClick={() => swiper.slideNext()}>
      {children}
    </button>
  );
};

const SwiperComponent = () => {
  return (
    <>
      <Swiper
        spaceBetween={8}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="next">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="next">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="next">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="next">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="next">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="next">
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperButtonNext>Slide</SwiperButtonNext>
      </Swiper>
    </>
  );
};

export default SwiperComponent;
