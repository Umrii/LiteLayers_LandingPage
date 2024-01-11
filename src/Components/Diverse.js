import React, { useState } from "react";
import "./Diverse.css";
// import diverseimg1 from "../Assets/diverse1.png";
// import diverseimg2 from "../Assets/diverse2.png";
// import diverseimg3 from "../Assets/diverse3.png";
// import diverseimg4 from "../Assets/diverse4.png";
// import diverseimg5 from "../Assets/diverse5.png";
// import diverseimg6 from "../Assets/diverse6.png";
// import diverseimg7 from "../Assets/diverse-arrow.PNG";
// import diverseimg8 from "../Assets/diverse-bg.png";
// // import diverseimg9 from "../Assets/slide1.jpg";
// import diverseimg10 from "../Assets/slide2.jpg";
// import diverseimg11 from "../Assets/icon2.png";
// import diverseimg11 from "../Assets/slide3.jpg";
// import diverseimg12 from "../Assets/slide1.jpg";
// import diverseimg13 from "../Assets/slide2.jpg";
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
const Diverse = () => {
  // const images = document.querySelectorAll(".diverse-icon-row img");

  // images.forEach((image, index) => {
  //   image.addEventListener("click", () => {
  //     const selectedDiv = document.querySelector(".selected-div-moving");
  //     const parent = document.querySelector(".diverse-icon-row");

  //     const imageRect = image.getBoundingClientRect();
  //     const parentRect = parent.getBoundingClientRect();

  //     const relativePosition = {
  //       top: ((imageRect.top - parentRect.top) / parentRect.height) * 100,
  //       left: ((imageRect.left - parentRect.left) / parentRect.width) * 100,
  //     };

  //     selectedDiv.style.top = `${relativePosition.top}%`;
  //     selectedDiv.style.left = `${relativePosition.left}%`;
  //   });
  // });

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

  const diverseImages = [icon1, icon2, icon3, icon4, icon5, icon6];
  const slideImages = [change1, change2, change3, change4, change5, change6];
  const paraText = [
    "  Upscale images by increasing resolution",
    "Transform the scene with a new backdrop by effortlessly changing the background",
    "Bring memories to life in a vibrant tapestry of moments with a customize collage that captures the journey",
    "Bring memories to life in a vibrant tapestry of moments with a customize collage that captures the journey",
    "Unveil the true beauty of your visuals by seamlessly removing watermarks,ensuring a pristine and polished presentation",
    "Empower your creativity with a versatile editor, where every stroke transforms ideas into stunning visual narratives",
  ];

  return (
    <div className="diverse-parent">
      <p className="diverse-text">Diverse Content Catering to Every Taste</p>
      <div className="diverse-icon-row">
        {/* <div className="selected-div-moving"></div> */}
        {diverseImages.map((image, index) => (
          <div
            className={`div-img-text ${
              selectedImage === index ? "selected-img" : ""
            }`}
            key={index}
            onClick={() => handleImageClick(index)}
            style={
              selectedImage === index ? { height: "187px", width: "115px" } : {}
            }
          >
            <div
              className={`image-container1 ${
                selectedImage === index ? "active-img" : ""
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
            {/* <img src={diverseimg7} alt="change-bg" className="diverse-change-bg" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diverse;
