import "./StaysSearch.css";

import "@fortawesome/fontawesome-free/css/all.css";
import { useState } from "react";
const StaysSearchBar = () => {
  const [location, setLocation] = useState("Going to");
  const [date, setDate] = useState("Date");
  const [travelers, setTravelers] = useState("Travelers");
  const [clickLocationDiv, setClickLocationDiv] = useState(false);
  const [clickDateDiv, setClickDateDiv] = useState(false);
  const [clickTravelersDiv, setClickTravelersDiv] = useState(false);

  const handleSearch = () => {
    if (!clickLocationDiv) {
      alert(`please enter your Location`);
    }
    if (!clickDateDiv) {
      alert(`Please enter the Date`);
    }
    if (!clickTravelersDiv) {
      alert(`Please enter the Travelers quantity`);
    }
    setClickLocationDiv(false);
    setClickDateDiv(false);
    setClickTravelersDiv(false);
  };
  return (
    <div className="StaysSearchBarMainDiv">
      <div className="StaysSearchFormDiv">
        <div
          onClick={() => {
            setClickLocationDiv(true);
          }}
          className={clickLocationDiv ? "clickedLocationDiv" : "locationDiv"}
        >
          {clickLocationDiv ? (
            <input
              onChange={(e)=>{setLocation(e.target.value)}}
              className="staysLocationSearchInp"
              type="text"
              value={location}
              name=""
              id=""
            />
          ) : (
            <>
              <i class="fas">&#xf3c5;</i>
              <span className="location-span">{location}</span>
            </>
          )}
        </div>
        <div
          onClick={() => {
            setClickDateDiv(true);
          }}
          className={clickDateDiv ? "clickedDateDiv" : "dateDiv"}
        >
          {clickDateDiv ? (
            <input onChange={(e)=>{setDate(e.target.value)}} className="staysDateInp" type="date" value={date} />
          ) : (
            <>
              <i class="far fa-calendar-alt"></i>
              <span className="date-span">{date}</span>
            </>
          )}
        </div>
        <div
          onClick={() => {
            setClickTravelersDiv(true);
          }}
          className={clickTravelersDiv ? "clickedTravelersDiv" : "travelersDiv"}
        >
          {clickTravelersDiv ? (
            <input onChange={(e)=>{setTravelers(e.target.value)}} type="number" className="staysTravelersInp" value={travelers}/>
          ) : (
            <>
              <i class="fas fa-user-alt"></i>
              <span className="travelers-span">{travelers}</span>
            </>
          )}
        </div>
        <div>
          <button className="staysSearchBtn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div>
        <input type="checkbox" name="" id="" />
        <label>Add a flight</label>
        <input type="checkbox" name="" id="" />
        <label>Add a car</label>
      </div>
    </div>
  );
};
export default StaysSearchBar;
