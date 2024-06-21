
import React from 'react';
import '../about/NewAbout.css'
import About from './About';

const NewAbout = () => {
  return (
    <div id='new-about-container'>
    <About/>
      <div className="container">
        <div id="new-about-content">
          <div id="welcome-section">
            <h2>Welcome to ICDO-Lalitpur</h2>
            <p id="welcome-text">
              ICDO-Lalitpur is a dynamic, responsive, and innovative organization with institutional capacity and expertise in implementing development programs. Our focus areas include Disaster Risk Reduction (DRR), climate change adaptation, agriculture, entrepreneurship development, WASH (Water, Sanitation, and Hygiene), land rights campaigns, CBOs (Community-Based Organizations) development & strengthening, good governance, policy advocacy, and social justice. We are committed to being a partner of choice for communities, government, and other institutions, working together to enhance the well-being of communities and achieve socio-economic transformation.
            </p>
          </div>
          <div id="vision-section">
            <h2>Vision</h2>
            <p id="vision-text">
              ICDO envisions a self-reliant, well-governed, prosperous, just, and equitable society.
            </p>
          </div>
          <div id="mission-section">
            <h2>Mission</h2>
            <p id="mission-text">
              Our mission is to facilitate the capacity development of discriminated, poor, and marginalized people's organizations to identify, mobilize, and exchange resources for their empowerment. We aim to contribute to creating a self-reliant, well-governed, prosperous, just, and equitable society.
            </p>
          </div>
          <div id="goal-section">
            <h2>Goal</h2>
            <p id="goal-text">
              Our goal is to uplift the living standards of discriminated, poor, and marginalized people by enabling them to claim their rights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewAbout;
