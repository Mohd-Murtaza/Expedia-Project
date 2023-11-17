import React from "react";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.css";
import GetApp from "../pages/GetApp";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isTab = useMediaQuery({ minWidth: 900 });
  const largeMobile = useMediaQuery({ minWidth: 670 });
  const ismobile = useMediaQuery({ minWidth: 460 });
  return (
    <>
      <div className="navbar">
        <div className="navbarRightMainDiv">
        <Link to="/">
          <img
            className={ismobile ? "brandImgLarge" : "brandImgSmall"}
            src="https://www.expedia.com/_dms/header/logo.svg?locale=en_US&siteid=1&2&3ec60977"
            alt="Brand-logo"
          />
        </Link>
          {ismobile ? (
            <div className="shopTravelDiv">
              <button className="shopTravelButton">
                Shop Travel <i class="fas fa-chevron-down"></i>
              </button>
            </div>
          ) : null}
        </div>
        <div className="navbarLeftMainDiv">
          <Link to="/get-app">
            <button className={largeMobile ? "getAppTextBtn" : "getAppBtn"}>
              {largeMobile ? (
                <>
                  <i
                    style={{ color: "#1668e3", marginRight: "5px" }}
                    class="fas fa-mobile-alt"
                  ></i>
                  <span>Get the app</span>
                </>
              ) : (
                <i style={{ color: "#1668e3" }} class="fas fa-mobile-alt"></i>
              )}
            </button>
          </Link>
          <button className="navbarBtn">
            {isTab ? (
              <>
                <i class="fas fa-globe-americas"></i>
                <span>English</span>
              </>
            ) : (
              <i class="fas fa-globe-americas"></i>
            )}
          </button>
          {isTab ? (
            <>
              <button className="navbarBtn">List your property</button>
              <button className="navbarBtn">Support</button>
              <button className="navbarBtn">Trips</button>
            </>
          ) : null}
          {ismobile ? (
            <button className="navbarBtn">
              <i style={{ fontSize: "24px" }} class="fas fa-bell"></i>
            </button>
          ) : null}
          <Link to="/signin">
            {largeMobile ? (
              <button className="navbarBtn">Sign in</button>
            ) : (
              <button className="navbarBtn">
                <i style={{ fontSize: "24px" }} class="fas fa-user-circle"></i>
              </button>
            )}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
