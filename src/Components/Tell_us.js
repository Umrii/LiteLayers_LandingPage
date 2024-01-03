import React from "react";
import "./Tell_us.css";
import tellimg from "../Assets/tellus.PNG";
const Tell_us = () => {
  return (
    <div className="tell-parent">
      <div className="everything">
        <p className="tell-us-text">Tell us Everything</p>
      </div>
      <div className="tellus_sub_text_parent">
        <p className="tellus_sub_text">
          LiteLayer is my favorite app right now. It has so many awesome
          wallpapers, ringtones and notifications For your phone.
        </p>
      </div>
      <img className="tellimg" src={tellimg} alt="bg" />
    </div>
  );
};

export default Tell_us;
