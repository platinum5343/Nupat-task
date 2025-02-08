import React from 'react'
import img1 from '../../Asset/1.png'
import img2 from '../../Asset/4.png'
import img3 from '../../Asset/6.png'
import img4 from '../../Asset/5.png'

import './Section3.scss'
const Section3 = () => {
  return (
    <div className='section3'>
      <div className="row">
        <div className="campus-col">
          <img src={img1} alt="" />
          <div className="layer">
            <h3>Liquid Transportation</h3>
            <p>premium tanks</p>
          </div>
          
        </div>
      
        <div className="campus-col">
          <img src={img2} alt="" />
          <div className="layer">
            <h3>Liquid Transportation</h3>
            <p>premium tanks</p>
          </div>
          
        </div>
        <div className="campus-col">
          <img src={img3} alt="" />
          <div className="layer">
            <h3>Liquid Transportation</h3>
            <p>premium tanks</p>
          </div>
          
        </div>
        <div className="campus-col">
          <img src={img4} alt="" />
          <div className="layer">
            <h3>Liquid Transportation</h3>
            <p>premium tanks</p>
          </div>
          
        </div>
      </div>
      <div>
      <button>More Work</button>
      </div>
    </div>
  )
}

export default Section3