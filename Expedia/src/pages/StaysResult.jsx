import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import "@fortawesome/fontawesome-free/css/all.css";
import './StaysResult.css';
import StaysSearchBar from '../Components/StaysSearch';
import { useLocation } from 'react-router-dom';

const StaysResult = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
  

    const to = queryParams.get('to');
    const date = queryParams.get('date');
    const travelers = queryParams.get('travelers');
  
    const [dataSet, setDataSet] = useState([]);

    const isDesktop=useMediaQuery({minWidth:1200});
    const isTab=useMediaQuery({minWidth:1000});

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(`https://expedia-mock-server.onrender.com/${to}`).then(resp=>resp.json())
        .then(resp=>{
            console.log(resp)
            setLoading(false);
            setDataSet(resp);
        })
    }, [to])
    


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
            <div className='hotels-list-cont'>
            {dataSet.map((el, ind)=><div key={ind} className='hotelsCard'>
                <div className='hotelImgDiv'>
                    <img className='hotelImg' src={el.img1} alt="" />
                </div>
                <div className="hotelDetailsDiv">
                    <div className="hotelTitle-des">
                        <h3 className='hotelName'>{el.heading1}</h3>
                        <h4 className='hotelLocality'>{el.heading2}</h4>
                        <p className='hotelAminities'>{el.text2}</p>
                        <h5 className='paymentPoliciesText'>{el.text3}</h5>
                        <h5 className='paymentPoliciesText'>{el.text4}</h5>
                    </div>
                    <div className="hotelReview-Price">
                        <div className="hotelReview">
                            <h4 className='ReviewText'>{el.review}</h4>
                            <h5 className='numReviewText'>{el.no_of_reviews}</h5>
                        </div>
                        <div className="hotelPrice">
                            <span className='offerText'>{el.heading3}</span>
                            <h4 className='discountedPrice'>{el.price1}</h4>
                            <h5 className='totalPrice'>{el.price2}</h5>
                        </div>
                    </div>
                </div>
            </div>)}
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
