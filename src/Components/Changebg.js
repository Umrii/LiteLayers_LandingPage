import React from "react";
import "./Changebg.css";
import filter_image from "../Assets/filters.PNG";
import bg_play from "../Assets/image 12.svg";
import bg_apple from "../Assets/apple1.png";
import qr_code from "../Assets/QR.png";
import qr2 from "../Assets/qr2.PNG";
const Changebg = () => {
  return (
    <div className="parent">
      <div className="bg-text">
        <p class="bg-heading">Create, Remove & Change Background Instantly</p>
        <p className="bg-sub_text">
          Creativity with just a click! Craft, erase, and switch backgrounds
          effortlessly, enhancing your visuals with seamless editing. Your
          creative journey, simplified at your fingertips!
        </p>
      </div>

      <div className="bg-content">
        <img class="main-image" src={filter_image} alt="logo" />
        <div className="image-content">
          <p class="our-app">Download Our App</p>
          <p className="bg-OR">OR</p>
          <img src={qr_code} alt="qr_code" className="QR" />
          <img src={bg_play} alt="google play link" className="bg-play" />
          <img src={bg_apple} alt="ios link" className="bg-apple" />
        </div>
      </div>
      <div className="download-button-div">
        <div className="download-button">
          <p className="download-app">Download App</p>
          <img src={qr2} alt="qrcode" className="qr2" />
        </div>
      </div>
    </div>
  );
};

export default Changebg;
