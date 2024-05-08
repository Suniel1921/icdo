import React from "react";
import '../../pages/missionVision/missionVision.css'
import { useNavigate } from "react-router-dom";

const MissionVision = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="servceChild_Heading">
        <h2 className="title">Heading goes here </h2>
        <p className="sersecondryHeading">
        ICDO aims to empower marginalized people for a self-reliant, just, and prosperous society through rights advocacy, <br /> access to education and healthcare, and fostering sustainable development.
        </p>
      </div>
      <div className="servicechild_Grid">
        <div className="card firstCard">
          <h3>
          Vision, Mission and Objectives.
          </h3>
          <button className="contactBtn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
        <div className="card">
          <div className="serviceContent">
            <img className="serviceIcon" src="/img/service (3).png" alt="" />
            <h3>Vision</h3>
            <p>
            ICDO envisions a self-reliant, well-governed, prosperous, just, and equitable society, fostering sustainable development, environmental stewardship, cultural preservation, technological advancement, inclusive governance, gender equality, education for all, healthcare accessibility, peaceful coexistence, and respect for human rights, diversity, and indigenous knowledge.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="serviceContent">
            <img className="serviceIcon" src="/img/service (2).png" alt="" />
            <h3>Mission</h3>
            <p>
            Capacity development of discriminated, poor and marginalized people's organizations on identifying, mobilizing and exchanging resources for their empowerment to make self- reliant, well-governed, prosperous, just and equitable society.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="serviceContent">
            <img className="serviceIcon" src="/img/service (5).png" alt="" />
            <h3>Goal</h3>
            <p>
            To uplift the living standard of discriminated, poor, and marginalized people, ICDO empowers them to claim their rights, access education, healthcare, and economic opportunities. By fostering social inclusion, sustainable development, and cultural preservation, we aim for a just, equitable, and prosperous society.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="serviceContent">
            <img
              className="serviceIcon"
              src="/img/service (1).png"
              alt=""
            />
            <h3>Testing</h3>
            <p>
            ICDO aims to empower marginalized people for a self-reliant, just, and prosperous society through rights advocacy, access to education and healthcare, and fostering sustainable development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;


