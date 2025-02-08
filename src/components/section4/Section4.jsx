import React from 'react'
import './Section4.scss'
import img3 from '../../Asset/Photo12.png'

const Section4 = () => {
  return (
    <div className="section4 row">
        <div className="col-lg-6 col-img imglast">
            <img src={img3} alt="" />
        </div>
        <div className="col-lg-6">
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                    <div className="fences">
                <div>
                    
                    <h1>this is why we are best from others</h1>
                    <p className='lead my-4'>high-defination video is video of higher resolution and quality than standard definition. while there’s no<br/> standard meaning for high definition, generally any standard video image</p>
                   
                </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section4