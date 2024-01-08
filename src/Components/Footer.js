import React from "react";
// import logo from "../Assets/logo.png";
import lite from "../Assets/footer-logo.png";
import facebook from "../Assets/facebook.png";
import insta from "../Assets/insta.png";
import twitter from "../Assets/twitter.png";
// import social from "../Assets/footer-social-media.png";
// import fit from "../Assets/fit.PNG";
import footerlogos from "../Assets/LiteLayers.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer_border">
        <footer>
          <div className="foot-parent">
            <div className="child_1">
              {" "}
              <img className="footer-logo" src={footerlogos} alt="logo" />
              <img className="lite-logo" src={lite} alt="logo" />
              <p className="logo-text">
                Litelayer transforms your smartphone with personalized
                wallpapers and more.
              </p>{" "}
            </div>
            <div className="child_2">
              <p className=" footer-headings">Content</p>
              <ul className="items">
                <li>Wallpapers</li>
                <li>Generative AI</li>
                <li>NFTs</li>
              </ul>
            </div>
            <div className="child_3">
              {" "}
              <p className=" footer-headings">Our Company</p>
              <ul className="items">
                <li>We're Hiring</li>
                <li>Investor Relation</li>
                <li>AI Art Masters</li>
              </ul>
            </div>
            <div className="child_4">
              <p className=" follow-us">Follow Us</p>
              <div className="footer-social-icons">
                <a href="/">
                  <img
                    className="facebook"
                    src={facebook}
                    alt="social media icons"
                  />
                </a>
                <a href="/">
                  <img
                    className="twitter"
                    src={twitter}
                    alt="social media icons"
                  />
                </a>
                <a href="/">
                  <img className="insta" src={insta} alt="social media icons" />
                </a>
              </div>
            </div>
          </div>

          <div className="last_parent">
            <div className="last_child">
              <p className="Copyright-Text">@ 2023 All rights reserved.</p>
            </div>
            <div className="last_child2">
              <ul class="same-line">
                <li>Privacy Policy</li>
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
