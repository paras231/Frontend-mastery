import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button style={{ marginTop: "20vh" }} onClick={() => swiper.slideNext()}>
      {children}
    </button>
  );
};

const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button style={{ marginTop: "20vh" }} onClick={() => swiper.slidePrev()}>
      {children}
    </button>
  );
};

const Card = () => {
  const url =
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
  return (
    <>
      <div className="card ">
        <img className="card-img-top" src={url} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;

export const SwiperComponent = () => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
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
        <SwiperButtonNext>Next</SwiperButtonNext>
        <SwiperButtonPrev>Prev</SwiperButtonPrev>
      </Swiper>
    </>
  );
};
