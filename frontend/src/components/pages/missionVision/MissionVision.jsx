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
          Thematic Area and Program
          </h3>
          <button className="contactBtn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
        <div className="card">
          <div className="serviceContent">
            <img className="serviceIcon" src="/img/service (3).png" alt="" />
            <h3>Adaptation (DRR & CCA)</h3>
            <p>
            Disaster Risk Reduction (DRR) and Climate Change Adaptation (CCA) aims to build resilient communities, reduce vulnerability and strengthen climate smart development activities. As part of this, ICDO-Lalitpur will continue to be active in strengthening local and district level actors, building their capacity to prepare for disasters according to their context and environment.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="serviceContent">
            <img className="serviceIcon" src="/img/service (2).png" alt="" />
            <h3>Sustainable Livelihood</h3>
            <p>
            Rural livelihood in Nepal is supported by services generated from biodiversity and natural resource. The conservation of biodiversity will ensure that rural communities’ access to natural resources is sustained. It is, therefore, necessary to support the government and other actors to devise policies as well as implement programs that will build livelihood assets of poor and marginalized communities living in both the rural and urban areas.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="serviceContent">
            <img className="serviceIcon" src="/img/service (5).png" alt="" />
            <h3>Organizational Development</h3>
            <p>
            Nepal is in the stage of transition to peace, democracy and stability. The development pathways are necessary but challenging. The agencies and actors in Nepal need to demonstrate leadership by supporting government and communities to achieve prosperity and socio-economic development. It is also time for NGOs like ICDO-Lalitpur to empower communities and rural institutions, with a focus.
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
            <h3>Governance and Justice</h3>
            <p>
            ICDO-Lalitpur focuses on actions which enable poor and oppressed sections of the community to obtain equitable access to resources and services. This approach involves intervention at local, as well as district and national levels. Emphasis will also be on lobbying for priority populations’ rights-based policies, strategies and programs through adopting evidence-based and participatory advocacy approach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;


