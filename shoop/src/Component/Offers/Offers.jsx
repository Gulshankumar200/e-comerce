import React from 'react'
import './Offer.css'
import exclusive_image from '../../photo/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offer foe you</h1>
            <p>ONLY ON BEST SELLER PRODUCT</p>
            <button className='btn'>Cheak Now</button>
        </div>
        <div className="offer-right">
            <img src={exclusive_image} alt=''/>
        </div>
      
    </div>
  )
}

export default Offers
