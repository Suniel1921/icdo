import React from 'react'
import SideMenu from './SideMenu'
import '../admin/adminDashboard.css';
import AdminChart from './AdminChart';

const AdminDashboard = () => {
  return (
    <div className='sideMenuContainer container'>
            <div className='sidemenu'><SideMenu/></div>
            <div className='adminchart'><AdminChart/></div>
            
        </div>
  )
}

export default AdminDashboard
