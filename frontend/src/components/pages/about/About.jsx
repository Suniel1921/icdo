import React, { useEffect, useState } from "react";
import '../about/about.css';


const About = () => {
 

  return (
    <>
      <div className="about_container">
        <div className="about_content global_flex container">
          <div className="about_left" data-aos="fade-down-right">
            <img src="/image/about2.jpg" alt="about image" />
          </div>
          <div className="about_right">
            <div className="small_image">
              <img src="/image/about2.png" alt="image" />
              <h3>Welcome to ICDO</h3>
            </div>
            {/* <h2 className="secondary_heading">Short Description about ICDO</h2> */}
            <h2 className="secondary_heading">Short Description about ICDO </h2>
            <p></p>

            <p>ICDO  is a non-profit making, non-governmental (NGO) and non-political network organization of Community Based Organizations (CBOs) of Lalitpur committed to enhance the well-being of poor, vulnerable and marginalized people/communities. ICDO-Lalitpur envisions to enhance the well- being of target groups by managing resources, building capacity, promoting social justice and developing multi-stakeholder partnership. With it headquarter located at Chapagaun, Lalitpur, it covers much of the remote wards  of southern Lalitpur.</p>
            <p>
            The organization focuses on Disaster Risk Reduction and Climate Change Adaptation, Sustainable Livelihood, Governance and Justice, and Organizational Development. Key policies include the Finance and Administration Policy for sound financial management, the Employment Policy for fair hiring practices, and the Code of Conduct and Code of Ethics for maintaining ethical standards. A Complaint Handling Mechanism ensures transparent grievance resolution. The Child Protection Policy prioritizes children's safety, while the Gender Equality and Social Inclusion (GESI) Policy promotes inclusivity and equal opportunities for all, especially marginalized groups.

            </p>
          
            {/* <div className="button_container">
              <button className="btn readMore_btn">Read more</button>
              <button className="btn ">How we work</button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
