import React, { useEffect, useState } from "react";
import '../about/about.css';


const About = () => {
 

  return (
    <>
      <div className="about_container">
        <div className="about_content global_flex container">
          <div className="about_left" data-aos="fade-down-right">
            <img src="/image/about.png" alt="about image" />
          </div>
          <div className="about_right">
            <div className="small_image">
              <img src="/image/about2.png" alt="image" />
              <h3>Welcome to ICDO</h3>
            </div>
            <h2 className="secondary_heading">A world where poverty will not exists </h2>
            <p>We are the largest crowdfunding</p>
            <p>
            At INGO, our mission is to create a world without poverty. We link compassionate individuals with impactful projects, guaranteeing that each contribution brings tangible change
            </p>
            <p>
            In our efforts at ICDO, we're dedicated to eliminating poverty worldwide. By matching caring donors with meaningful initiatives, we ensure that every gift has a genuine effect
            </p>
            <p>
            Here at ICDO, our goal is clear: eradicating poverty globally. Through our platform, we unite kind-hearted supporters with vital projects, guaranteeing that every donation counts
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
