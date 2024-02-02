import React from "react";
import "./Tell_us.css";
import FeedbackSlider from "../Components/FeedbackSlider";
const Tell_us = () => {
  return (
    <div className="tellus_container">
      <div className="tellus_background-image"></div>
      <div className="tellus_content">
        <h1 className="tellus-text">
          <strong>Tell us Everything</strong>
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <FeedbackSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tell_us;
