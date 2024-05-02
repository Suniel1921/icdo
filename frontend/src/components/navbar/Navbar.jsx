import React from 'react'
import './../navbar/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navbar_container">
    <div className='global_flex container'>
      <h3>logo</h3>
      <ul className='navlinks global_flex'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
      </ul>
    </div>
    </div>
      
    </>
  )
}

export default Navbar
