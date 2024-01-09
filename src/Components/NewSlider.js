import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./NewSlider.css";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import image1 from "../Assets/slide1.jpg";
import image2 from "../Assets/slider4.png";
import image3 from "../Assets/slide3.jpg";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="slider" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
