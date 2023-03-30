import React from 'react'
import './Section1.scss'
import icon1 from '../../Asset/Icon1.png'
import icon2 from '../../Asset/Icon2.svg'
import icon3 from '../../Asset/Icon3.png'
import icon4 from '../../Asset/Icon4.png'

const Section1 = () => {
  return (
    <section className='p-5'>
        <div className="containerr">
                <div className="">
                    <h6>what we do</h6>
                    <h1>Safe & Reliable Cargo Solutions
</h1>
                </div>
                <div>
            <div className="row text-center">
                <div className="col d-flex section1">
                    <div className="iconbox">
                        <img src={icon1} alt="" />
                    </div>
                    <div className='vertical'>
                   
                    </div>
                    <div>
                    <h5 className=''>Sea Transport Services</h5>
                    <p>Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                </div>
                <div className="col d-flex section1">
                    <div className="iconbox">
                        <img src={icon3} alt="" />
                    </div>
                    <div className='vertical'>
                   
                    </div>
                    <div>
                    <h5 className=''>Warehousing Services</h5>
                    <p>Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                </div>
                
            </div>
            <div className="row text-center">
                <div className="col d-flex section1">
                    <div className="iconbox">
                        <img src={icon3} alt="" />
                    </div>
                    <div className='vertical'>
                   
                    </div>
                    <div>
                    <h5 className=''>Air Fright Services</h5>
                    <p>Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                </div>
                <div className="col d-flex section1">
                    <div className="iconbox">
                        <img src={icon4} alt="" />
                    </div>
                    <div className='vertical'>
                   
                    </div>
                    <div>
                    <h5 className=''>Local Shipping Services</h5>
                    <p>Following the quality of our service thus having gained trust of our many clients.</p>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
    </section>
  )
}

export default Section1