import React from 'react'
import '../admin/adminChart.css'
import PiChart from './PiChart'
import TinyLine from './TinyLine'


const AdminChart = () => {
  return (
    <>
      <div className='admin_Grid_Dashboard'>
        <div className='charts chartBox1'>
        <h2>Congratulations 🎉</h2>
          <p>Your website has reached done 72% 🤩 more interactvie today.Check your new raising badge in your profile.</p>
        </div>
        <div className='charts chartBox2'><PiChart/></div>
        <div className='charts chartBox3'><TinyLine/></div>
        <div className='charts chartBox4'>box4</div>
        <div className='charts chartBox5'>box5</div>
        <div className='charts chartBox6'>box6</div>
        <div className='charts chartBox7'>box6</div>
       

      </div>
    </>
  )
}

export default AdminChart