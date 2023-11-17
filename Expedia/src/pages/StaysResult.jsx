import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import "@fortawesome/fontawesome-free/css/all.css";
import './StaysResult.css';
import StaysSearchBar from '../Components/StaysSearch';

const StaysResult = () => {
    const isDesktop=useMediaQuery({minWidth:1200});
    const isTab=useMediaQuery({minWidth:1000});
  return (
    <>
    <Navbar/>
    <StaysSearchBar/>
      <div className='staysResultMainDiv'>
        {isTab?(<div className='staysResultFiltersMainDiv'>
            <div id="showMapDiv">
                <div className="mapouter">
                    <div className="gmap_canvas"><iframe width="700" height="400" id="gmap_canvas"
                            src="https://maps.google.com/maps?q=old%20delhi&t=&z=11&ie=UTF8&iwloc=&output=embed"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>
            </div>
            <hr style={{margin:"20px 0px"}}/>
            <div className='filterByDiv'>
                <h3>Filter by</h3>
                <div className='GuestRatingDiv'>
                    <h4>Guest Rating</h4>
                    <input type="radio" name="any" />
                    <label>Any</label>
                    <br />
                    <input type="radio" name="Excellent" />
                    <label>Excellent</label>
                    <br />
                    <input type="radio" name="Wonderful" />
                    <label>Wonderful</label>
                    <br />
                    <input type="radio" name="Very good" />
                    <label>Very Good</label>
                    <br />
                    <input type="radio" name="Exceptional" />
                    <label>Exceptional</label>
                    <br />
                    <input type="radio" name="Good" />
                    <label>Good</label>
                </div>
                <hr />
                <div className='StartRatingDiv'>
                    <h4>Start Rating</h4>
                    <div style={{border:"2px solid black", width:"40px", margin:"3px", padding:"5px", borderRadius:"8px"}}>1 <i class='fas fa-star'></i></div>
                    <div style={{border:"2px solid black", width:"40px", margin:"3px", padding:"5px", borderRadius:"8px"}}>2 <i class='fas fa-star'></i></div>
                    <div style={{border:"2px solid black", width:"40px", margin:"3px", padding:"5px", borderRadius:"8px"}}>3 <i class='fas fa-star'></i></div>
                    <div style={{border:"2px solid black", width:"40px", margin:"3px", padding:"5px", borderRadius:"8px"}}>4 <i class='fas fa-star'></i></div>
                    <div style={{border:"2px solid black", width:"40px", margin:"3px", padding:"5px", borderRadius:"8px"}}>5 <i class='fas fa-star'></i></div>
                </div>
                <hr />
                <div className='paymentTypeDiv'>
                    <h4>Payment type</h4>
                    <input type="checkbox" name="" id="" />
                    <label>Reserve now, pay later</label>
                </div>
                <hr />
                <div className="refundableType">
                    <h4>Refundable policie</h4>
                    <input type="checkbox" name="" id="" />
                    <label>Fully refundable</label>
                </div>
            </div>
        </div>):null}
        <div className='staysResultMainListDiv'>
            <div className='sortDiv'>
                <button className='priceSortBtn'>price: low to high</button>
                <button className='priceSortBtn'>price: high to low</button>
            </div>
            <div className='hotelsCard'>
                <div className='hotelImgDiv'>
                    <img className='hotelImg' src="https://images.trvl-media.com/hotels/1000000/540000/531700/531648/55467e67.jpg?impolicy=resizecrop&rw=455&ra=fit" alt="" />
                </div>
                <div className="hotelDetailsDiv">
                    <div className="hotelTitle-des">
                        <h3 className='hotelName'>Le Meridien New Delhi</h3>
                        <h4 className='hotelLocality'>New Delhi</h4>
                        <p className='hotelAminities'>1 bedroom, 1 bathroom</p>
                        <h5 className='paymentPoliciesText'>Fully refundable</h5>
                        <h5 className='paymentPoliciesText'>Reserve now, pay later</h5>
                    </div>
                    <div className="hotelReview-Price">
                        <div className="hotelReview">
                            <h4 className='ReviewText'>Excellent</h4>
                            <h5 className='numReviewText'>(523 reviews)</h5>
                        </div>
                        <div className="hotelPrice">
                            <span className='offerText'>We have 5 left at</span>
                            <h4 className='discountedPrice'>Rs8,650</h4>
                            <h5 className='totalPrice'>10207</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {isDesktop?(<div className='staysResultAddsBannerDiv'>
            <img className='AddsImg' src="https://tpc.googlesyndication.com/simgad/6360842044354336061?" alt="Adds image banner" />
            <img className='AddsImg' src="https://tpc.googlesyndication.com/simgad/9360128767577027709?" alt="Adds image banner" />
        </div>):null}
        
      </div>
    <Footer/>
    </>
  )
}

export default StaysResult
