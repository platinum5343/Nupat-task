import React from 'react'
import './Team.scss'
import imgt from '../../Asset/Photo12.png'


const Team = () => {
  return (
    <section className='bg-light'>
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-8 mx-auto text-center">
                    <h6 className="text">The transporters</h6>
                    <h1>Meet the expert Team</h1>
                </div>
            </div>
            <div className="divs">
            <div className="row">
                <div className="col-md-4">
                    <div className="blog-post card-effect">
                        <img src={imgt} alt="" />
                        <div className="layer">
            <h3>Jessca arrow</h3>
            <p>Designer</p>
          </div>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="blog-post card-effect">
                        <img src={imgt} alt="" />
                        <div className="layer">
            <h3>Jessca arrow</h3>
            <p>Designer</p>
          </div>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="blog-post card-effect">
                        <img src={imgt} alt="" />
                        <div className="layer">
            <h3>Jessca arrow</h3>
            <p>Designer</p>
          </div>

                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Team