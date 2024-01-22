import React from "react";
import "./New.css";
import QR from "../Assets/QR-Download.png";
import iosimg from "../Assets/apple1.png";
import googleImg from "../Assets/googleplayimage.png";

const New = () => {
  return (
    <div>
      <div className="hover-div">
        <h1>Download Our App</h1>
        <div className="div-horizontal">
          <div className="qr-div">
            <img src={QR} alt="qrcode" />
          </div>
          <span>OR</span>
          <div className="ios-android-div">
            <a href="/">
              <img src={googleImg} alt="downlaod" className="hover-google" />
            </a>
            <a href="/">
              <img src={iosimg} alt="download" className="hover-ios" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
