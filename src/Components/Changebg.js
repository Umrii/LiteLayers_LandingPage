import React from "react";
import "./Changebg.css";
import filter_image from "../Assets/filters.PNG";
// import bg_play from "../Assets/image 12.svg";
// import bg_apple from "../Assets/apple1.png";
// import qr_code from "../Assets/QR.png";
import QR from "../Assets/Changebg-QR-Download.png";
import iosimg from "../Assets/apple1.png";
import googleImg from "../Assets/googleplayimage.png";

import qr2 from "../Assets/qr2.PNG";
const Changebg = () => {
  return (
    <div className="parent">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="bg-text">
              <p class="bg-heading">
                Create, Remove & Change Background Instantly
              </p>
              <p className="bg-sub_text">
                <strong>
                  Creativity with just a click! Craft, erase, and switch
                  backgrounds effortlessly, enhancing your visuals with seamless
                  editing. Your creative journey, simplified at your fingertips!
                </strong>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-content">
              <img class="main-image" src={filter_image} alt="logo" />
              {/* Div */}
              <div className="qr-code-box">
                <div className="hover-div">
                  <h1>Download Our App</h1>
                  <div className="div-horizontal">
                    <div className="qr-div">
                      <img src={QR} alt="qrcode" className="bg-QR" />
                    </div>
                    <span>or</span>
                    <div className="ios-android-div">
                      <a href="/">
                        <img
                          src={googleImg}
                          alt="downlaod"
                          className="hover-google"
                        />
                      </a>
                      <a href="/">
                        <img
                          src={iosimg}
                          alt="download"
                          className="hover-ios"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Div */}
                <div className="download-button">
                  <img src={qr2} alt="qrcode" className="qr2" />
                  <p className="download-app">Download App</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="image-content">
          <p class="our-app">Download Our App</p>
          <p className="bg-OR">OR</p>
          <img src={qr_code} alt="qr_code" className="QR" />
          <img src={bg_play} alt="google play link" className="bg-play" />
          <img src={bg_apple} alt="ios link" className="bg-apple" />
        </div>
         </div> */}
          {/* <div className="sticky-btn">
          <img src={qr2} alt="qrcode" className="qr2" />
          <p>Download App</p>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Changebg;
