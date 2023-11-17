import React from 'react'
import "./RecentSearch.css"
import  "@fortawesome/fontawesome-free/css/all.css";
const RecentSearch = () => {
  return (
    <div className='recentSearchMainDiv'>
        <h3>Your recent search</h3>
        <div className='recentSearchDiv'>
            <div className='searchIconDiv'>
              <i id='searchIcon' class='fas fa-search'></i>
            </div>
            <div className='detailsDiv'>
                <span className='locationText'>location</span>
                <span className='dateText'>date</span>
                <span className='travelersText'>travelers</span>
            </div>
        </div>
      
    </div>
  )
}

export default RecentSearch
