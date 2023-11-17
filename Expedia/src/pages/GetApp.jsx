import React from 'react'
import Navbar from '../Components/Navbar'
import "./GetApp.css"
import Footer from '../Components/Footer'

const GetApp = () => {
  return (
    <>
    <Navbar/>
    <div className='getappMainDiv'>
      <div className='getappBannerImgDiv'>
        <img className="getappBannerImg" src="https://forever.travel-assets.com/flex/flexmanager/images/2023/04/25/Bex_App_LP.png" alt="Banner Image" /> 
      </div>
      <div className="oneKeyGetappDiv">
        <h1 className='oneKeyGetappHeading'>One Key is even better on the app</h1>
        <p className='oneKeyGetappDiscription'>Earn OneKeyCash in the app and benefit from Expedia's Price Tracking tool to know the best time to book your next flight. If you need inspiration, let our personal travel advisor powered by ChatGPT help you with your trip planning and as always - once you have booked, use the app to easily view and manage your trip.</p>
      </div>
      <div className="getappScannerDiv">
        <div className='getappScannerTextDiv'>
            <h1 className='scannerTextMainHeading'>Scan the QR code and download our app</h1>
            <h3 className='scannerTextSubHeading'>It's easy</h3>
            <p className='scannerTextDiscription'>Use your mobile device to scan this QR code. You'll go straight to your app store to start downloading the app. Then you're ready to go!</p>
        </div>
        <div className='getappSennerImgDiv'>
            <img className='scannerImg' src="https://a.travel-assets.com/mad-service/qr-code/mad_button_qr/1_QR_MAD_BUTTON_CTA_APP_LP.png" alt="scanner image" />
            <h3 className='scannerText'>Scan the QR code</h3>
        </div>
      </div>
      <div className="getappManageMainDiv">
        <h2 className='getappManageText'>Manage your whole trip in one place</h2>
        <div className="getappManageDiv">
            <div className='manageDivs'>
                <img style={{width:"3rem"}} src="https://forever.travel-assets.com/flex/flexmanager/images/2022/09/14/lob__hotels_refresh.png" alt="stays Icon" />
                <h3 className='manageH3Text'>Stay for even less</h3>
                <p className='managePText'>Receive discounts on select hotels</p>
            </div>
            <div className='manageDivs'>
                <img style={{width:"3rem"}} src="https://forever.travel-assets.com/flex/flexmanager/images/2022/09/14/notifications_refresh.png" alt="bell icon" />
                <h3 className='manageH3Text'>Keep up-to-date</h3>
                <p className='managePText'>Get real-time notifications and alerts of any trip changes</p>
            </div>
            <div className='manageDivs'>
                <img style={{width:"3rem"}} src="https://forever.travel-assets.com/flex/flexmanager/images/2022/09/14/flight_refresh.png" alt="airplane icon" />
                <h3 className='manageH3Text'>Enjoy peace of mind</h3>
                <p className='managePText'>Members know when to book flights with price tracking</p>
            </div>
            <div className='manageDivs'>
                <img style={{width:"3rem"}} src="https://forever.travel-assets.com/flex/flexmanager/images/2022/09/14/local_offer_refresh.png" alt="tag icon" />
                <h3 className='manageH3Text'>More rewarding travel</h3>
                <p className='managePText'>Earn rewards for every night you stay</p>
            </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default GetApp
