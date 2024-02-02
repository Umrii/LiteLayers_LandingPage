import React from "react";
import "./Categories.css";
import ctg1 from "../Assets/ctg1.png";
import ctg2 from "../Assets/ctg2.png";
import ctg3 from "../Assets/ctg3.png";
import ctg4 from "../Assets/ctg4.png";
import ctg5 from "../Assets/ctg5.png";
import ctg6 from "../Assets/ctg6.png";

import Newslider from "./NewSlider";

const Categories = () => {
  return (
    <div className="ctg-parent">
      <p className="ctg-text">Categories</p>
      <div className="swiper">
        <Newslider />
      </div>
      <div className="app-text">
        <p className="best-app-text">The Best App You'll Ever Need</p>
      </div>
      <div className="img-row">
        <div className="ctg-img-div">
          <img src={ctg6} alt="categorey1" />
          <p className="ctg-img-text">AI Enhancer</p>
        </div>

        <div className="ctg-img-div">
          <img src={ctg1} alt="categorey1" />
          <p className="ctg-img-text">Change Background</p>
        </div>
        <div className="ctg-img-div">
          <img src={ctg4} alt="categorey2" />
          <p className="ctg-img-text">Remove Background</p>
        </div>
        <div className="ctg-img-div">
          <img src={ctg3} alt="categorey2" />
          <p className="ctg-img-text">Filters</p>
        </div>
        <div className="ctg-img-div">
          <img src={ctg2} alt="categorey2" />
          <p className="ctg-img-text">Create Background</p>
        </div>
        <div className="ctg-img-div">
          <img src={ctg5} alt="categorey2" />
          <p className="ctg-img-text">Editor</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
