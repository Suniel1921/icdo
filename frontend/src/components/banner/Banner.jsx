import React from 'react';
import './../banner/banner.css'
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Banner = () => {
  return (
    <>
      <div className='banner_container '>
        <div className='banner_content global_flex container'>

          <div className='banner_left global_flex'>
            <p>+977 015573382</p>
            <p>mail2icdo@gmail.com</p>
          </div>

          <div className='bannerMid'>
            <img className='flag' src="/image/nepalFlag.gif" alt="" />
          </div>

          <div className='banner_right'>
            <div className='social_icons global_flex'>
            <Link to='https://facebook.com' target='_blank' className='social_icon'> <p><FaFacebookF /></p> </Link>
            <Link to='https://facebook.com' target='_blank' className='social_icon'> <p><FaSquareInstagram /> </p></Link>
            <Link to='https://facebook.com' target='_blank' className='social_icon'> <p><FaTwitter /></p> </Link>
            </div>
          </div>

          

        </div>
      </div>

    </>
  )
}

export default Banner
