import React from "react";
import "./Features.css";
import feature1img from "../Assets/feature1.png";
import feature2img from "../Assets/feature2.png";
import feature3img from "../Assets/feature3.png";
import feature4img from "../Assets/feature4.png";

const Features = () => {
  return (
    <div className="features-parent">
      <div class="feature1">
        <img src={feature1img} alt="feature1" />
        <p className="features-heading1">30 millions users</p>
        <p className="features-content1">
          LiteLayer has more than 436 million downloads
        </p>
      </div>
      <div class="feature2">
        <img src={feature2img} alt="feature2" />
        <p className="features-heading2">Free & Premium Content</p>
        <p className="features-content2">
          A vast array of content awaits, featuring millions of captivating
          pieces ready for your exploration.
        </p>
      </div>
      <div class="feature3">
        <img src={feature3img} alt="feature3" />
        <p className="features-heading3">Top tier content creators</p>
        <p className="features-content3">
          From globally renowned artists to talented local creators, our
          collection encompasses a diverse array of artistic brilliance.
        </p>
      </div>
      <div class="feature4">
        <img src={feature4img} alt="feature4" />
        <p className="features-heading4">NFTs made easy</p>
        <p className="features-content4">
          No cryptocurrency is required!Purchased NFTs can live on your device’s
          home screen
        </p>
      </div>
    </div>
  );
};

export default Features;
