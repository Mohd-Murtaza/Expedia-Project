import React from "react";
import "./SearchBar.css";
import "@fortawesome/fontawesome-free/css/all.css";
import StaysSearchBar from "./StaysSearch";


const SearchBar = () => {
  return (
    <div className="searchBarMainDiv">
      <div className="searchBarOptionsMainDiv">
        <div>
          <button className="searchOptionBtn" style={
            {
              borderBottom:"5px solid #1668e3"
            }
          }>Stays</button>
          <button className="searchOptionBtn">Flights</button>
          <button className="searchOptionBtn">Car</button>
          <button className="searchOptionBtn">Bundle & save</button>
          <button className="searchOptionBtn">Things to do</button>
          <button className="searchOptionBtn">Cruises</button>
        </div>
      </div>
      <div className="seachBarFilterMainDiv">
        <StaysSearchBar />
      </div>
    </div>
  );
};

export default SearchBar;
