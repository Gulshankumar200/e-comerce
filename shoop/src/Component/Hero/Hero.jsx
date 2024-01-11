import React from 'react';
import './Hero.css';

import arrow_icon from '../../photo/arrow.png'
import hero_image from '../../photo/hero_image.png'




 function Hero() {
  return (
    <div className='hero'>
              <div className="hero-left">
                  <h2>NEW ARRIVAL ONLY</h2>
                  <div>
                      <div className="hand-hand-icon">
                          <p>New</p>
                      
                         
                      </div>
                          <p>Collection</p>
                          <p>for everyone</p>
                    </div>
                  <div className="hero-latest-btn">
                    <div>latest Collection</div>
                    <img src={arrow_icon}/>
                  </div>
              </div>
              <div className="hero-right">
              
              <img src={hero_image}/>
              </div>
            
    </div>
  )
}

export default Hero
