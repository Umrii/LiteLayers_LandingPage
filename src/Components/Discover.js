import React from "react";
import "./Discover.css";
import discover_img from "../Assets/discover2.PNG";

const Discover = () => {
  return (
    <div className="background-parent">
      <img className="discover-img" src={discover_img} alt="discover-img" />
      <div className="custom-background">
        <div class="discover-text-div">
          <p className="discover-heading">Discover</p>
          <p className="discover-text">
            LITELAYERS: Your go-to AI wallpaper app, offering endless
            personalised backgrounds for a vibrant device makeover.
          </p>
          <p className="discover-sub_text">Join the excitement!</p>
          <p className="discover-download">Download the app for FREE now</p>
        </div>
      </div>
    </div>
  );
};

export default Discover;
