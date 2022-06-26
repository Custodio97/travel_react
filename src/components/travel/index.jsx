import React from 'react'
import { SiYourtraveldottv } from 'react-icons/si' 
import { MdOutlineAirplanemodeActive } from 'react-icons/md'
import { RiMotorbikeLine } from 'react-icons/ri'
import './style.css'
const Travel = () => {
  return (
      <div className='travel'>
          
              <div className="box">
                  <SiYourtraveldottv className='icon'/>
                  <h3>TRAVEL STYLES</h3>
                  <p>Travel Styles collect tours based around
                      common themes together. No matter what kind of
                      traveller you are, we’ve got a tour (or a dozen)
                      that’ll fit you just right.</p>
                        
              </div>
              <div className="box">
                  <MdOutlineAirplanemodeActive className='icon'/>
                  <h3>DESTINATIONS</h3>
                  <p>Vast, wide, bottomless, and limitless:
                      Welcome to Earth, the universe’s #1 travel destination.
                      There’s more to see, do, touch,
                      smell, and taste on this wondrous</p>
              </div>
              <div className="box">
                  <RiMotorbikeLine className='icon'/>
                  <h3>TRAVEL DEALS</h3>
                  <p>Travel Styles collect tours based around common themes together.
                    No matter what kind of traveller you are,
                    we’ve got a tour (or a dozen) that’ll fit you just right.</p>
                  
              </div>
         
    </div>
  )
}

export default Travel