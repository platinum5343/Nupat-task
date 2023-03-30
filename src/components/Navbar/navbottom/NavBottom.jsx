import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { FaInstagram } from 'react-icons/fa'
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'

import './NavBottom.scss'

const NavBottom = () => {
  return (
    <div className='bottom'>
        <div className="left">
            
            <div className='hoe'>Home</div>
            <div>About</div>
            <div>Pages <RiArrowDropDownLine/></div>
            <div>project</div>
            <div>Contact</div>

        </div>
        <div className="right">
            <div className="icon">
        <FaInstagram/>
        <BsFacebook/>
        <BsTwitter/>
        <BsLinkedin/>
        </div>
        <div className="bu">
        <button>Request Quote</button>
        </div>
        </div>
    </div>
  )
}

export default NavBottom