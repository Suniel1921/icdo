import React from 'react'
import { FaRecycle } from "react-icons/fa";
import { GiBurningTree } from "react-icons/gi";
import { FaHandHoldingWater } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import '../supportUs/support.css';

const SupportUs = () => {
  return (
    <>
    <div className='support_container'>
        <div className='support_content'>
            <div className="support_left">
                <p className='support_para'>SUPPORT US</p>
                <h3 className='support_heading'>Supporting People With Disabilities Since 1971</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</p>

                <div className='child_icons'>
                    <div className='child'>
                        <p className='support_icon'><FaRecycle/></p>
                        <div>
                        <h3>donate for earch</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>
                    </div>
                     <div className='child'>
                        <p className='support_icon'><GiBurningTree/></p>
                        <div>
                        <h3>donate for earch</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>
                    </div>
                     <div className='child'>
                        <p className='support_icon'><FaHandHoldingWater/></p>
                       <div>
                       <h3>donate for earch</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                       </div>
                    </div>
                     <div className='child'>
                        <p className='support_icon'><FaHandsHelping/></p>
                       <div>
                       <h3>donate for earch</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                       </div>
                    </div>
                </div>

            </div>
            <div className="support_right">
                <img src="/image/about3.png" alt="" />
            </div>
        </div>


    </div>
      
    </>
  )
}

export default SupportUs
