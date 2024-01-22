import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./FeedbackSlider.css";
import { Pagination, Autoplay } from "swiper/modules";

const texts = [
  [
    "LiteLayer is my favorite app right now. It has so many awesome wallpapers, ringtones and notifications For your phone.",
    "Umair Hashmi",
  ],
  [
    "Aesthetics is my favorite app right now. It has so many awesome wallpapers, ringtones and notifications For your phone.",
    " Anas",
  ],
  [
    "Blossom is my favorite app right now. It has so many awesome wallpapers, ringtones and notifications For your phone.",
    "Usman",
  ],
  [
    "Cars & Vehicles is my favorite app right now. It has so many awesome wallpapers, ringtones and notifications For your phone.",
    "Max",
  ],
];

const objects = texts.map(([appName, description]) => ({
  appName,
  description,
}));

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
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
        {objects.map((object, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide-one">
              <div className="centered-text-slider-text">
                <p>{object.appName}</p>
                <p>{object.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
