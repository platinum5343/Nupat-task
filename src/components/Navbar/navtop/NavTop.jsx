import React from 'react'
import img1 from '../../../Asset/Logo.png'
import './NavTop.scss';
import { MdSchedule, MdCall } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'

const NavTop = () => {
  return (
    <div className='main'>
        <div className="container">
        <div className='img1'>
            <div>
            <img src={img1} alt="" />
            </div>
        </div>
        <div className="right">
            <div className='ic2'>
            <MdSchedule className='ic1' />
            </div>
            <div className='time'>
           <span> mon-sat 9.00 - 18.00</span>
           <h6 >sunday closed</h6>
           </div>
        </div>
        <div className="right">
            <div className='ic2'>
            <AiOutlineMail className='ic1'/>
            </div>
            <div className='time'>
           <span> Email</span>
           <h6 > contact@logistics.com</h6>
           </div>
        </div>
        <div className="right">
            <div className='ic2'>
            <MdCall className='ic1'/>
            </div>
            <div className='time'>
           <span>  Call Us</span>
           <h6> (00) 112 365 489</h6>
           </div>
        </div>
        </div>
    </div>
  )
}

export default NavTop