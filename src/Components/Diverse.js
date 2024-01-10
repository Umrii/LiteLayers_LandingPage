import React, { useState } from "react";
import "./Diverse.css";
import diverseimg1 from "../Assets/diverse1.png";
import diverseimg2 from "../Assets/diverse2.png";
import diverseimg3 from "../Assets/diverse3.png";
import diverseimg4 from "../Assets/diverse4.png";
import diverseimg5 from "../Assets/diverse5.png";
import diverseimg6 from "../Assets/diverse6.png";
// import diverseimg7 from "../Assets/diverse-arrow.PNG";
import diverseimg8 from "../Assets/diverse-bg.png";
import diverseimg9 from "../Assets/slide1.jpg";
import diverseimg10 from "../Assets/slide2.jpg";
import diverseimg11 from "../Assets/slide3.jpg";
import diverseimg12 from "../Assets/slide1.jpg";
import diverseimg13 from "../Assets/slide2.jpg";

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
    "Remove Watermark",
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
  const slideImages = [
    diverseimg8,
    diverseimg10,
    diverseimg10,
    diverseimg10,
    diverseimg10,
    diverseimg10,
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
            <div className="image-container1">
              <img src={image} alt={`img${index + 1}`} />
            </div>
            {/* Only the <img> tag will be affected by the active class */}
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
                      <p className="hdtext-content ">
                        Upscale images by increasing resolution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              {/* <div className="diverse-outline-wrapper"> */}
              <img
                src={slideImages[selectedImage]}
                alt="arrows"
                className="diverse-outline image-class"
              />
              {/* </div> */}
            </div>
            {/* <img src={diverseimg7} alt="change-bg" className="diverse-change-bg" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diverse;
