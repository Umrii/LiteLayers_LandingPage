import React from "react";
import "./Navbar.css"; // Importing the CSS file
// import image from "../Assets/logo.png";
import logos from "../Assets/LiteLayers.png";
import btnQR from "../Assets/button-qr.png";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar">
            <div className="logo-container">
              <img src={logos} alt="Lite Layer Logo" className="logo" />
              <div className="logo-divider"></div>
              <div className="text-top">LITE</div>
              <div className="text-bottom">LAYERS</div>
            </div>
            <div className="buttons-container">
              <button className="browse-now">Browse Now</button>
              <a href="#download">
                <button className="button grab-the-app">
                  <img className="btnQR" src={btnQR} alt="qrcode" />
                  Download App
                </button>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
