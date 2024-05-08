import React, { useEffect, useState } from "react";
import '../about/about.css';


const About = () => {
 

  return (
    <>
      <div className="about_container">
        <div className="about_content global_flex">
          <div className="about_left">
            <img src="/image/about.png" alt="about image" />
          </div>
          <div className="about_right">
            <div className="small_image">
              <img src="/image/about2.png" alt="image" />
              <h3>Welcome to text goes here</h3>
            </div>
            <h2 className="secondary_heading">A world where poverty will not exists </h2>
            <p>We are the largest crowdfunding</p>
            <p>
              lorem dolor sit amet, consectetur notted adipisicing elit sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
              sed do eiusmod tempor incididunt ut labore et simply free text
              dolore magna aliqua lonm andhn
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
              sed do eiusmod tempor incididunt ut labore et simply.
            </p>
            <div className="button_container">
              <button className="btn readMore_btn">Read more</button>
              <button className="btn ">How we work</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
