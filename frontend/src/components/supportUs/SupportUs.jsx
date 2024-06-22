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
                {/* <p className='support_para'>SUPPORT US</p> */}
                <h3 className='support_heading'>Working in Lalitpur Since 2010</h3>
                <p>For over five decades, we have been steadfast in our commitment to supporting individuals with disabilities. Our mission is rooted in providing essential resources, advocacy, and opportunities for empowerment. Through our unwavering dedication, we strive to create a world where every individual, regardless of ability, can live with dignity and independence.</p>

                <div className='child_icons'>
                    <div className='child'>
                        <p className='support_icon'><FaRecycle/></p>
                        <div>
                        <h3>Direct Impact</h3>
                        <p>Your donations directly impact individuals.</p>
                        </div>
                    </div>
                     <div className='child'>
                        <p className='support_icon'><GiBurningTree/></p>
                        <div>
                        <h3>Meaningful Programs</h3>
                        <p>Our programs meet individuals' unique needs.</p>
                        </div>
                    </div>
                     <div className='child'>
                        <p className='support_icon'><FaHandHoldingWater/></p>
                       <div>
                       <h3>Awareness and Education</h3>
                        <p>We raise awareness and educate about disabilities.</p>
                       </div>
                    </div>
                     <div className='child'>
                        <p className='support_icon'><FaHandsHelping/></p>
                       <div>
                       <h3>Accessibility Promotion</h3>
                        <p>We promote accessibility for everyone's benefit.</p>
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
