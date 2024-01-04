import React, { useState, useEffect } from 'react';
import './Slider.css'; // Make sure to create this CSS file
import image1 from '../Assets/slide1.jpg';
import image2 from '../Assets/slider4.png';
import image3 from '../Assets/slide3.jpg';

const images = [image2, image2, image2];

const AutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="slider-container">
   <div className="slider-div curved-div" style={{ borderRight: '2px solid white' , borderTopRightRadius: '8px', borderBottomRightRadius: '8px'}}>
  <img src={images[(currentIndex + images.length - 1) % images.length]} alt="Previous" style={{  borderTopRightRadius: '8px', borderBottomRightRadius: '8px'}} />
</div>

      <div className="slider-div center-div" style={{ backgroundImage: `url(${images[currentIndex]})` }} />
      <div className="slider-div curved-div" style={{ borderLeft: '2px solid white' }}>
        <img src={images[(currentIndex + 1) % images.length]} alt="Next" />
      </div>
    </div>
  );
};

export default AutoSlider;
