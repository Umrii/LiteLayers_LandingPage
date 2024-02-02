import React, { useState } from "react";
import "./Diverse.css";
import icon1 from "../Assets/icon1.png";
import icon2 from "../Assets/icon2.png";
import icon3 from "../Assets/icon3.png";
import icon4 from "../Assets/icon4.png";
import icon5 from "../Assets/icon5.png";
import icon6 from "../Assets/icon6.png";

import change1 from "../Assets/change1.png";
import change2 from "../Assets/change2.png";
import change3 from "../Assets/change3.png";
import change4 from "../Assets/change4.png";
import change5 from "../Assets/change5.png";
import change6 from "../Assets/change6.png";
import useWindowDimensions from "../utils/getWindowDimensions";
const Diverse = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const { width } = useWindowDimensions();
  console.log(width);

  const imageTitles = [
    "AI Enhancer",
    "Change Background",
    "Remove Background",
    "Remove Watermark",
    "Collage",
    "Editor",
  ];

  const diverseImages = [icon1, icon2, icon4, icon5, icon3, icon6];
  const slideImages = [change1, change2, change3, change4, change5, change6];
  const paraText = [
    " Upscale images by increasing resolution",
    "Transform the scene with a new backdrop by effortlessly changing the background",
    "Bring memories to life in a vibrant tapestry of moments with a customize collage that captures the journey",
    "Unveil the true beauty of your visuals by seamlessly removing watermarks,ensuring a pristine and polished presentation",
    "Bring memories to life in a vibrant tapestry of moments with a customize collage that captures the journey",
    "Empower your creativity with a versatile editor, where every stroke transforms ideas into stunning visual narratives",
  ];

  return (
    <div className="diverse-parent">
      <p className="diverse-text">Diverse Content Catering to Every Taste</p>
      <div className="diverse-icon-row">
        <div
          className="selected-div-moving"
          style={
            width >= 786
              ? { left: `${(100 / 6) * selectedImage}%` }
              : {
                  left: `${
                    (100 / 3) *
                    (selectedImage > 2 ? selectedImage - 3 : selectedImage)
                  }%`,
                  top: `${selectedImage < 3 ? 0 : 50}%`,
                }
          }
        ></div>
        {diverseImages.map((image, index) => (
          <div
            className={`div-img-text ${
              selectedImage === index ? "selected-img" : ""
            }`}
            key={index}
            onClick={() => handleImageClick(index)}
          >
            <div
              className={`image-container1 ${
                selectedImage === index ? "" : ""
              }`}
            >
              <img
                src={image}
                alt={`img${index + 1}`}
                className="diverse-image-class"
              />
            </div>
            <p className="image-title">{imageTitles[index]}</p>
          </div>
        ))}
      </div>

      <div className="diverse-background">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="hd-imagetext">
                      <img
                        className="hd-image"
                        alt="hd-icon"
                        src={diverseImages[selectedImage]}
                      />
                      <p className="hdtext">{imageTitles[selectedImage]}</p>
                    </div>
                    <div className="col-md-8">
                      <p className="hdtext-content">
                        {paraText[selectedImage]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="diverse-outline-wrapper">
                <img
                  src={slideImages[selectedImage]}
                  alt="arrows"
                  className="diverse-outline image-class"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diverse;
