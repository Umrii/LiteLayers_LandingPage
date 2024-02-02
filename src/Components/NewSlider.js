import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./NewSlider.css";
import { Pagination, Autoplay } from "swiper/modules";
import slideimg1 from "../Assets/Rectangle 115.png";
import slideimg2 from "../Assets/Rectangle 116.png";
import slideimg3 from "../Assets/Rectangle 117.png";
import slideimg4 from "../Assets/Rectangle 118.png";
import slideimg5 from "../Assets/Rectangle 119.png";
import slideimg6 from "../Assets/Rectangle 120.png";
import slideimg7 from "../Assets/Rectangle 121.png";

const texts = [
  "Text",
  "Aesthetics",
  "Text",
  "Blossom",
  "Text",
  "Text",
  "Cars & Vehicles",
];

export default function App() {
  return (
    <>
      <div className="images-slider-box">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slideActiveClass="slide-active"
          slideNextClass="slide-next"
          slidePrevClass="slide-prev"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {[
            slideimg1,
            slideimg2,
            slideimg3,
            slideimg4,
            slideimg5,
            slideimg6,
            slideimg7,
          ].map((image, index) => (
            <SwiperSlide key={0}>
              <div className="image-container">
                <img src={image} alt="slider" className="slider-image" />
                <div className="centered-text1">{texts[index]}</div>{" "}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
