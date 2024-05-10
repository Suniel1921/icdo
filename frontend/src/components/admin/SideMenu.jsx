import React from 'react'
import '../admin/sideMenu.css'
import { MdOutlineAddHomeWork } from "react-icons/md";
// import { TbCategoryFilled } from "react-icons/tb";
import { FaHome, FaUserPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';


const SideMenu = () => {
  return (
    <div className='sideMenu_container'>
       <div className="sideMenu">
        <div className="sideItems">
          {/* <h2 style={{textAlign: 'center'}}>Hamro Rooms</h2> */}
          <Link to={"/dashboard/admin"} className="listItems">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link to={"/dashboard/admin/staffs"} className="listItems">
            <FaUserPlus />
            <span>Add Users</span>
          </Link>
          <Link to={"/dashboard/admin/staffList"} className="listItems">
            <FaUserPlus />
            <span>Manage Users</span>
          </Link>
          <Link to={"/dashboard/admin/contact"} className="listItems">
            <FaUserPlus />
            <span>Contact</span>
          </Link>
          
          
         
        </div>
      </div>
      
    </div>
  )
}

export default SideMenu
