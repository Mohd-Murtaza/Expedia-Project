import React from 'react'
import Navbar from '../Components/Navbar'
import SearchBar from '../Components/SearchBar'
import Offer from '../Components/Offer'
import RecentSearch from '../Components/RecentSearch'
import ImgBanner from '../Components/ImgBanner'
import Footer from '../Components/Footer'
import TrendingDestination from '../Components/TrendingDestination'
// import { Slider } from '@mui/material'
import Slider from '../Components/TrendingDestination'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import ImgContainer from '../Components/ImgContainer'

// import { Slider } from '@mui/material'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <Offer/>
      <RecentSearch/>
      <ImgBanner/>
      <TrendingDestination/>
      {/* <Slider/> */}
      <ImgContainer/>
      <Footer/>
    </div>
  )
}
export default Home
