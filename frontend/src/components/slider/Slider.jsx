// Slider.jsx

import React, { useState, useEffect } from "react";
import "../slider/slider.css";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = ["/image/sliderimg1.jpg", "/image/sliderimg2.jpg", "/image/sliderimg3.jpg", "/image/sliderimg4.jpg","/image/Gallery/g2.jpg", "/image/Gallery/g3.jpg"];
  // const images = ["/image/child.jpg", "/image/child2.jpg", "/image/child3.jpg"];

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
            {/* <p>Always donote for children</p> */}
            <h2 className="heading">Welcome to the ICDO</h2>
            <p>
            ICDO is a non-profit organization focused on improving the lives of marginalized communities in
southern Lalitpur by managing resources, building skills, and advocating for social justice.

            </p>
            {/* <button className="btn contact_btn">Contact Us</button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
