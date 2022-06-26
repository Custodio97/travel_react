import React from 'react'
import Img from '../../assets/img0.jpg'
import './style.css'
const Service = () => {
  return (
      <div className='service'>
          <div>
              <h1>
                  TRAVELING
                  planning a trip
              </h1>
              <p>Travel Styles collect tours based around common themes together. No matter what kind of traveller you are, we’ve got a tour (or a dozen) that’ll fit you just right. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
          </div>
          <img src={Img} alt="img" />
    </div>
  )
}

export default Service