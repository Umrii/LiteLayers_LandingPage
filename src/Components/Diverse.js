import React, { useState } from "react";
import "./Diverse.css";
import diverseimg1 from "../Assets/diverse1.png";
import diverseimg2 from "../Assets/diverse2.png";
import diverseimg3 from "../Assets/diverse3.png";
import diverseimg4 from "../Assets/diverse4.png";
import diverseimg5 from "../Assets/diverse5.png";
import diverseimg6 from "../Assets/diverse6.png";
import diverseimg7 from "../Assets/diverse-arrow.PNG";

const Diverse = () => {
  const [selectedImage, setSelectedImage] = useState(0); // Track the selected image index

  const handleImageClick = (index) => {
    setSelectedImage(index); // Set the selected image index
  };

  const imageTitles = [
    "Image HD",
    "Change Background",
    "Collage",
    "Remove Background",
    "Remove Background",
    "Editor",
  ];

  const diverseImages = [
    diverseimg1,
    diverseimg2,
    diverseimg3,
    diverseimg4,
    diverseimg5,
    diverseimg6,
  ];

  return (
    <div className="diverse-parent">
      <p className="diverse-text">Diverse Content Catering to Every Taste</p>
      <div className="diverse-icon-row">
        {diverseImages.map((image, index) => (
          <div
            className={`div-img-text ${
              selectedImage === index ? "selected-img" : ""
            }`}
            key={index}
            onClick={() => handleImageClick(index)}
          >
            <img src={image} alt={`img${index + 1}`} />
            <p>{imageTitles[index]}</p>
          </div>
        ))}
      </div>
      <div className="diverse-background">
        <div className="hd-imagetext">
          <img className="hd-image" alt="hd-icon" src={diverseimg1} />
          <p className="hdtext">Image HD</p>
          <p className="hdtext-content">
            Upscale images by increasing resolution.
          </p>
        </div>
        {/* <img src={diverseimg8} alt="arrows" className="diverse-outline" /> */}
        <img src={diverseimg7} alt="change-bg" className="diverse-change-bg" />
      </div>
    </div>
  );
};

export default Diverse;
