import React, { useState } from 'react';
import './../navbar/navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthGlobally } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import { BiMenuAltRight, BiX } from "react-icons/bi";

const Navbar = () => {
  const [auth, setAuth] = useAuthGlobally();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false); // State to handle menu visibility

  // Function to handle user logout
  const handleLogout = () => {
    setAuth({ ...auth, user: null, token: '' });
    localStorage.removeItem('token');
    toast.success("Logout successfully");
    navigate('/login');
  };

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="navbar_container">
        <div className='global_flex container'>
          {/* <h3>logo</h3> */}
          <img className='logo' src="/image/icdoLogo.png" alt="icdo logo" />
          {auth.user ? (
            <>
              <h3 className='userName'>Hi ! {auth.user.name}</h3>
              <ul className={`navlinks global_flex ${showMenu ? 'show' : ''}`}>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li><Link to={'/ourteam'}>Our Team</Link></li>
                <li className='logout' onClick={handleLogout}>Logout</li>
              </ul>
            </>
          ) : (
            <ul className={`navlinks global_flex ${showMenu ? 'show' : ''}`}>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/contact'}>Contact</Link></li>
              <li><Link to={'/ourteam'}>Our Team</Link></li>
              <li><Link to={'/login'}>Login</Link></li>
              <li><Link to={'/register'}>Register</Link></li>
            </ul>
          )}
          {/* Hamburger Menu */}
          <p className='hambugerMenu' onClick={toggleMenu}>
            {showMenu ? <BiX /> : <BiMenuAltRight />}
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
