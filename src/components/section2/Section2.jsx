import React from 'react'
import './Section.scss'
import photo9 from '../../Asset/Photo9.png'
import photo10 from '../../Asset/Photo10.png'

const Section2 = () => {
  return (
    <div className='section2'>
      <div className="imgw"></div>
      <div className="box">
         




      <div className="d-sm-flex fence">
        <div className="fences">
                <div>
                    
                    <h1>this is why we are best from others</h1>
                    <p className='lead my-4'>high-defination video is video of higher resolution and quality than standard definition. while there’s no<br/> standard meaning for high definition, generally any standard video image</p>
                    <button className='btn btn-primary btn-lg'>view courses</button>
                </div>
                <div className='imgs'>

                <img className='a' src={photo9} alt="" />
                <div className='b'>
                    <img className='c' src={photo10} alt="" />
                </div>
                </div>
                
                </div>
            </div>



         
      </div>
      <div className='last'>
                <button className='last1'>done</button>
                
                <button className='last2'>done</button>
                </div>
    </div>
  )
}

export default Section2