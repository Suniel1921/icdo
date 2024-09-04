import React from 'react';
import '../cover/coverBanner.css';
import { useNavigate } from 'react-router-dom';

const CoverBanner = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/contact');
  };

  return (
    <>
      <div className='coverBanner_container'>
        <div className='coverBanner_content'>
          <div className="container">
            <div className='content'>
              {/* <p className='coverBanner_para'>We are here to stop poverty</p> */}
              <h2 className='coverBanner_heading'>We are dedicated to Disaster Risk Reduction, Climate Change Adaptation, Sustainable
              Livelihoods, Governance, and Justice.</h2>
              {/* <button className='coverBanner_Btn' onClick={handleNavigate}>Contact</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverBanner;
