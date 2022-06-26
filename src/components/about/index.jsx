import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Img from '../../assets/pexels-james-wheeler-417074.jpg'
import './style.css'
const About = () => {
  return (
      <div className='about'>
          <div className='container'>
              <div className='content'>
                  <h1>
                      MOUNTAINS
                      are the beginning
                  </h1>
                  <p>Once a landscape is industrialized, its wild character is lost for good. You can't recreate untouched tundra, mountain meadows, crystal clear streams, and animals that have never encountered toxic waste. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                  
                      <BsArrowRight className='icons'/> 
                  
              </div>
              <div className='border_img'>
                  <img src={Img} alt="travel mountain" />
              </div>
          </div>
    </div>
  )
}

export default About