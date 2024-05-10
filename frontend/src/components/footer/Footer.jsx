import React from 'react'
import '../footer/footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const openLink = () => {
    window.open('https://instechnepal.com', '_blank');
  };

  return (
    <>
    <div className="footer_container">
        <div className="container">
        <div className='footer'>
          <div className='allrightReserved'>
            <h3>©2024. IssdfCfeDO. All Rights Reserved.</h3>
          </div>
          <div className='instech' onClick={openLink}>Powered By Ins Technology</div>
          <div className='socila_icons'>
            <p><FaFacebookF/></p>
            <p><FaSquareInstagram/></p>
            <p><FaTwitter/></p>
          </div>
        </div>
        </div>
    </div>
      
    </>
  )
}

export default Footer
