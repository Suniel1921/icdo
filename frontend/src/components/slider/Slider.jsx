// Slider.jsx

import React, { useState, useEffect } from "react";
import "../slider/slider.css";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = ["/image/child.jpg", "/image/child2.jpg", "/image/child3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider_container">
      {images.map((image, idx) => (
        <div
          key={idx}
          className={idx === index ? "slide active" : "slide"}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="text container">
            <p>Always donote for children</p>
            <h2 className="heading">Lend a Helping Hand to Those in Need</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="btn contact_btn">Contact Us</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
