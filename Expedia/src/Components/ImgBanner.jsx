import React from 'react'
import {useState, useEffect} from 'react'
import "./ImgBanner.css"

const ImgBanner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 579);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 579);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='bannerImgMainDiv'>
      {isMobile?(<img className='bannerImg' src="https://a.travel-assets.com/travel-assets-manager/cread-2444/BEX-WinterSunPackages-HP-Hero-M-327x436.jpg?impolicy=fcrop&w=450&h=600&q=mediumHigh" alt="banner img" />):(<img className='bannerImg' src="https://a.travel-assets.com/travel-assets-manager/cread-2444/BEX-WinterSunPackages-HP-Hero-D-928x398.jpg?impolicy=fcrop&w=1400&h=600&q=mediumHigh" alt="banner img" />)}
        
        <div className='heading-BtnDiv'>
            <div><h1 className='headingText'>Bundle your winter getaway and save</h1></div>
            <div><p className='subHeadingText'>Package your flight and hotel together to save more on a warm-weather escape this winter.</p></div>
            <div><button className='dealsBtn'>See package deals</button></div>
        </div>
    </div>
  )
}

export default ImgBanner
