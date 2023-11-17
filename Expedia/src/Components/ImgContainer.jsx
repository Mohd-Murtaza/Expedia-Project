import React from 'react'
import './ImgContainer.css';

const ImgContainer = () => {
  return (
    <div className='ImgContainerMainDiv'>
      <div className='firstImgContainerDiv'>
        <div className='firstImgContainerCard'>
            <img className='ImgContainerImages' src="https://a.travel-assets.com/travel-assets-manager/cread-2739-image-resize-prop/Mallorca_Hotel_384x256.jpg" alt="" />
            <p className='ImgContainerPText'>GET REWARDED WITH ONE KEY</p>
            <h3 className='ImgContainerH3Text'>Earn OneKeyCash on eligible flights, activities and more</h3>
        </div>
        <div className='firstImgContainerCard'>
            <img className='ImgContainerImages' src="https://a.travel-assets.com/travel-assets-manager/cread-2235/US-HP-Card-DM-384x256.jpg" alt="" />
            <p className='ImgContainerPText'>SPEND LESS ON WEEKENDS AWAY</p>
            <h3 className='ImgContainerH3Text'>Book an easy trip to your favorite city and save with Member Prices</h3>
        </div>
        <div className='firstImgContainerCard'>
            <img className='ImgContainerImages' src="https://a.travel-assets.com/travel-assets-manager/cread-2254/POSa-HP-Card-DM-3-2.jpg" alt="" />
            <p className='ImgContainerPText'>POPULAR PACKAGE DEALS</p>
            <h3 className='ImgContainerH3Text'>Save more by booking your hotel and flight at the sama time</h3>
        </div>
      </div>
      <div className='secondImgContainerDiv'>
        <div className='secondImgContainerCard'>
            <img className='ImgContainerImages' src="https://a.travel-assets.com/travel-assets-manager/cread-2274/US-HP-Card-DM-457x257.jpg" alt="" />
            <p className='ImgContainerPText'>SAVE ON WINTER TRAVEL</p>
            <h3 className='ImgContainerH3Text'>Book your winter trip early to avoide peak prices</h3>
        </div>
        <div  className='secondImgContainerCard'>
            <img className='ImgContainerImages' src="https://a.travel-assets.com/travel-assets-manager/cread-841/POSa-Site-Editorial2-457x257.jpg" alt="" />
            <p className='ImgContainerPText'>BOOK ONCE, EARN TWICE</p>
            <h3 className='ImgContainerH3Text'>Earn points on top of your airline miles</h3>
        </div>
      </div>
    </div>
  )
}

export default ImgContainer
