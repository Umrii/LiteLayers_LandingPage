import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./NewSlider.css";
import { Pagination, Autoplay } from "swiper/modules";

// import image1 from "../Assets/slide1.jpg";
import image2 from "../Assets/slider4.png";
// import image3 from "../Assets/slide3.jpg";

const texts = ["Aesthetics", "Blossom", "Cars and Vehicles", "Aesthetics"]; // Array of texts

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        slideActiveClass="slide-active"
        slideNextClass="slide-next"
        slidePrevClass="slide-prev"
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {[image2, image2, image2, image2].map((image, index) => (
          <SwiperSlide key={0}>
            <div className="image-container">
              <img src={image} alt="slider" />
              <div className="centered-text">{texts[index]}</div>{" "}
              {/* Text Overlay */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
