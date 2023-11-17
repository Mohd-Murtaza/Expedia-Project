import React from 'react'
import "./Offer.css";

const Offer = () => {
  return (
    <div className='offerDiv'>
      <div className='imgDiv'>
        <img className='offerK-Img' src="https://a.travel-assets.com/egds/marks/onekey__standard.svg" alt="" />
      </div>
      <div className='offerText-BtnsDiv'>
        <div className='offerTextDiv'>
            <h3 className='offerText'>Save 10% or more on over 100,000 hotels with Member Prices. Also, members save up to 30% when you add a hotel to a flight</h3>
        </div>
        <div className='btnsDiv'>
            <button className='signInBtn'>Sign in</button>
            <button className='oneKeyBtn'>Learn about One Key</button>
        </div>
      </div>
    </div>
  )
}

export default Offer
