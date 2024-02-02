import React from "react";
import "./Navbar.css";
import logos from "../Assets/LiteLayers.png";

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
              <a href="/" className="d-flex text-decoration-none">
                <button className="browse-now">Browse Now</button>
              </a>
              <a href="/" className="text-decoration-none">
                <button className="button grab-the-app">Grab the app</button>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
