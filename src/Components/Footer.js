import React from "react";
import logo from "../Assets/logo.png";
import lite from "../Assets/footer-logo.png";
// import social from "../Assets/footer-social-media.png";
import fit from "../Assets/fit.PNG";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer_border">
        <footer>
          <div className="foot-parent">
            <div className="child_1">
              {" "}
              <img className="footer-logo" src={logo} alt="logo" />
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
              <img
                className="social-icons"
                src={fit}
                alt="social media icons"
              />
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
