import React from "react";
import "./About.css";
import banner_image from "../Assets/about-image.png";
import play from "../Assets/image 12.svg";
import apple from "../Assets/apple1.png";

const About = () => {
  return (
    <div className="about-parent">
      <div className="text">
        <div className="heading">
          <p>About LiteLayer</p>
        </div>
        <div className="sub_text">
          <p>
            Litelayer transforms your smartphone with personalized wallpapers
            and more, allowing you to express your emotions, tastes, and
            interests in style
          </p>
        </div>
      </div>

      <div className="banner">
        <div className="image-banner">
          <div className="content">
            {" "}
            <p>Download Our App</p>
          </div>
          <div className="play">
            <img src={play} alt="google play" />
          </div>
          <div className="apple">
            <img className="apple1" src={apple} alt="ios" />
          </div>
          <div>
            <p className="or">or</p>
          </div>
          <img className="image" src={banner_image} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default About;
