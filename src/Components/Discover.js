import React from "react";
import "./Discover.css";
import discover_img from "../Assets/discover2.PNG";
import iosimg from "../Assets/apple1.png";
import googleImg from "../Assets/googleplayimage.png";

const Discover = () => {
  return (
    <div className="background-parent">
      <div className="custom-background">
        <div class="discover-text-div">
          <p className="discover-heading">Discover</p>
          <p className="discover-text">
            LITELAYERS: Your go-to AI wallpaper app, offering endless
            personalised backgrounds for a vibrant device makeover.
          </p>
          <p className="discover-sub_text">Join the excitement!</p>
          <p className="discover-download">Download the app for FREE now</p>
          <div className="iosimage-div">
            <a href="/" className="image-link">
              <img
                className="googleimage"
                src={googleImg}
                alt="Google Play Download Button"
              />
            </a>
            <a href="/" className="image-link">
              <img
                className="iosimage"
                src={iosimg}
                alt="App Store Download Button"
              />
            </a>
          </div>
        </div>

        <div className="banner-image-box">
          <img className="discover-img" src={discover_img} alt="discover-img" />
        </div>
      </div>
    </div>
  );
};

export default Discover;
