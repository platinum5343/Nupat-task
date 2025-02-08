import React from 'react';
import './Testimonial.scss';
import { BsArrowLeft, BsArrowRight} from 'react-icons/bs'
import { AiFillStar} from 'react-icons/ai'
import { CgQuote } from 'react-icons/cg'
import test1 from '../../Asset/test1.png'
import test2 from '../../Asset/Test2.png'

const Testimonial = () => {
  return (
    <div className="testimonial">
        <div className="top">
            <div>
                <h6>Testimonial</h6>
                <h1>What Our Customer Say</h1>
            </div>
            <div className="button">
              <div  className="button1"><BsArrowLeft/></div>
              <div className="button2">
                <BsArrowRight/>
                </div>
            </div>
        </div>
        <div className="row">
          <div className="col">
          <div className="col1">
            <div className="font">
              <div className="font1">
                <img src={test1} alt="" />
                <div className='text'>
                  <h2>Kathleen Smith</h2>
                  <p>Fuel Company</p>
                 
                  
                </div>
                  <CgQuote className='comme'/>

              </div>
              <div>
                <p className='p-tag'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                <div className='icona'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                </div>
              </div>
            </div>
          </div>
          <div className="col2">
            <div className="font">
              <div className="font1">
                <img src={test2} alt="" />
                <div className='text'>
                  <h2>John Martin</h2>
                  <p>Fuel Company</p>
                 
                  
                </div>
                  <CgQuote className='comme'/>

              </div>
              <div>
                <p className='p-tag'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                <div className='icona'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                </div>
              </div>
            </div>
          </div>
          
          </div>
        </div>
    </div>
  )
}

export default Testimonial