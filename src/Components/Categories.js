import React from "react";
import "./Categories.css";
import ctg1 from "../Assets/ctg1.png";
import ctg2 from "../Assets/ctg2.png";
import ctg3 from "../Assets/ctg3.png";
import ctg4 from "../Assets/ctg4.png";
import ctg5 from "../Assets/ctg5.png";
import Slider from './Slider';
const Categories = () => {
  return (
   
      <div className="ctg-parent">
        <p className="ctg-text">Categories</p>
        <div className="swiper"><Slider/></div>
        <div className="app-text">
          <p className="best-app-text">The Best App You'll Ever Need</p>
        </div>
        <div className="img-row">
          <img src={ctg1} alt="categorey1" />
          <img src={ctg2} alt="categorey2" />
          <img src={ctg3} alt="categorey2" />
          <img src={ctg4} alt="categorey2" />
          <img src={ctg5} alt="categorey2" />
        </div>
      </div>
    
  );
};

export default Categories;
