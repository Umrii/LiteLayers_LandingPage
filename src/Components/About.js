import React from "react";
import "./About.css";
import banner_image from "../Assets/image-circle1.png";
import QR from "../Assets/QR-Download.png";
import play from "../Assets/play.png";
import apple from "../Assets/apple1.png";

const About = () => {
  return (
    <div className="about-parent container-fluid" id="download">
      <div className="row">
        <div className="col-md-6">
          <div className="text">
            <h1>About Litelayers</h1>
            <p>
              Litelayer transforms your smartphone with personalized wallpapers
              and more, allowing you to express your emotions, tastes, and
              interests in style
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="banner">
            <div className="about-content">
              <p className="download-our-app">Download Our APP</p>
              <a href="/">
                <img className="about_play" src={play} alt="download" />
              </a>
              <a href="/">
                {" "}
                <img className="about_app" src={apple} alt="playstore" />
              </a>
            </div>

            <span style={{ fontSize: "18px" }}>
              <strong>OR</strong>
            </span>

            <div className="mobile-div">
              <p className="scan-me">Scan Me</p>
              <img className="mobile-image" src={banner_image} alt="mobilee" />
              <div className="centered-image">
                <img className="qr-code" src={QR} alt="qr-code" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
