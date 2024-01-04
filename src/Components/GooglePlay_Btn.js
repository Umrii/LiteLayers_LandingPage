import React from "react";
import "./GooglePlay.css";
import gplay from "../Assets/google-play.png";
const GooglePlay_Btn = () => {
  return (
    <a href="https://play.google.com" className="google-play-button">
      <svg
        className="google-play-logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#ffffff" // Set the fill color to white
      >
        {/* Define the SVG path for the Google Play icon here */}
      </svg>
      <span>GET IT ON</span>
      <span className="google-play-text">Google Play</span>
    </a>
   
  );
};

export default GooglePlay_Btn;


