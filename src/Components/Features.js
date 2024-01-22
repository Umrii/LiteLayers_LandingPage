import React from "react";
import "./Features.css";
import feature1img from "../Assets/feature1.png";
import feature2img from "../Assets/feature2.png";
import feature3img from "../Assets/feature3.png";
import feature4img from "../Assets/feature4.png";

const Features = () => {
  return (
    <div className="container">
      {" "}
      <div className="features-parent row">
        <div class="feature1 col-md-3">
          <img src={feature1img} alt="feature1" />
          <div className="feature1-h1-div">
            <h1 className="features-heading1">30 millions users</h1>
          </div>
          <p className="features-content1">
            Litelayers has more than 436 million downloads
          </p>
        </div>

        <div class="feature2 col-md-3">
          <img src={feature2img} alt="feature2" />
          <div className="feature2-h1-div">
            <h1 className="features-heading2">Free & Premium Content</h1>
          </div>
          <p className="features-content2">
            Millions of free pieces of content and featured content available
            now
          </p>
        </div>

        <div class="feature3 col-md-3">
          <img src={feature3img} alt="feature3" />
          <div className="feature3-h1-div">
            <h1 className="features-heading3">Top tier content creators</h1>
          </div>
          <p className="features-content3">
            From some of the top musicians in the world to local artists, we
            have it all on Litelayers
          </p>
        </div>

        <div class="feature4 col-md-3">
          <img src={feature4img} alt="feature4" />
          <div className="feature4-h1-div">
            <h1 className="features-heading4">NFTs made easy</h1>
          </div>
          <p className="features-content4">
            No cryptocurrency is required! Purchased NFTs can live on your
            device’s home screen
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
