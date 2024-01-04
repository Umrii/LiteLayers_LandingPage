import React from "react";
import "./GooglePlay.css";
import gplay from "../Assets/google-play.png";
const GooglePlay_Btn = () => {
  return (
    <div className="play-btn-parent">
      <div className="play-btn">
        <img className="googleplay-img" alt="googleplay" src={gplay} />
        <p className="googleplay-text">
          <span style={{ textTransform: "uppercase" }}>Get It On</span>
          <span>Google Play</span>
        </p>
      </div>
    </div>
  );
};

export default GooglePlay_Btn;
