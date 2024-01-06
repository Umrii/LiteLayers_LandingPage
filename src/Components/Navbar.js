import React from "react";
import "./Navbar.css"; // Importing the CSS file
import image from "../Assets/logo.png";
import logos from "../Assets/LiteLayers.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logos} alt="Lite Layer Logo" className="logo" />
        <div class="logo-divider"></div>
        <div class="text-top">LITE</div>
        <div class="text-bottom">LAYER</div>
      </div>
      <div className="buttons-container">
        <button className="browse-now">
          <strong>Browse Now</strong>
        </button>
        <button className="button grab-the-app">Grab the app</button>
      </div>
    </nav>
  );
};

export default Navbar;
