import React from "react";
import lite from "../Assets/footer-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import footerlogos from "../Assets/new_black_logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer_border">
        <footer className="container-fluid">
          {" "}
          <div className="container-fluid p-0">
            {" "}
            <div className="foot-parent row">
              <div
                className="col-lg-4 col-md-4 col-sm-6"
                style={{ paddingLeft: "20px" }}
              >
                {" "}
                <img className="footer-logo" src={footerlogos} alt="logo" />
                <img className="lite-logo" src={lite} alt="logo" />
                <p className="logo-text">
                  <strong>
                    Litelayer transforms your smartphone with personalized
                    wallpapers and more.
                  </strong>
                </p>{" "}
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 space-left-section">
                <p className=" footer-headings">
                  <strong>Content</strong>
                </p>
                <ul className="items">
                  <li>
                    <strong>Wallpapers</strong>
                  </li>
                  <li>
                    <strong>Generative AI</strong>
                  </li>
                  <li>
                    <strong>NFTs</strong>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6  space-left-section-half">
                {" "}
                <p className=" footer-headings">
                  <strong>Our Company</strong>
                </p>
                <ul className="items">
                  <li>
                    <strong>We're Hiring</strong>
                  </li>
                  <li>
                    <strong>Investor Relation</strong>
                  </li>
                  <li>
                    <strong>AI Art Masters</strong>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6">
                <p className=" follow-us">
                  <strong>Follow Us</strong>
                </p>
                <div className="footer-social-icons">
                  <a href="/">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      size="2x"
                      style={{ color: "#4267B2" }}
                    />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a href="/">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="2x"
                      style={{ color: "red" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="last_parent">
            <div className="last_child">
              <p className="Copyright-Text">@ 2023 All rights reserved.</p>
            </div>
            <div className="last_child2">
              <ul class="same-line">
                <li>
                  <Link to="/privacy-policy" className="text-decoration-none">
                    Privacy Policy
                  </Link>
                </li>
                <li>Copyrights</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Footer;
