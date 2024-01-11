
import React from 'react'
import './NwesLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offer On Your Email</h1>
      <p>Subscribe to Our newsletter and stay update</p>
      <div>
        <input type='Email' placeholder='Your Email Id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
