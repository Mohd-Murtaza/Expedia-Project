import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./TrendingDestination.css";
const TrendingDestination = () => {
  let sliderDetails = [
    {
      id: 1,
      img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/120000/120454-Eastbourne.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium",
      city: "Eastbourne",
      country: "United Kingdom",
    },
    {
      id: 2,
      img: "https://mediaim.expedia.com/destination/1/a05ff37e4da759689430321248e304e8.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium",
      city: "Ramnagar",
      country: "India",
    },
    {
      id: 3,
      img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/75000/75448-Mahabaleshwar-And-Vicinity.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium",
      city: "Mahabaleshwar",
      country: "India",
    },
    {
      id: 4,
      img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/97000/97609-Dehradun-And-Vicinity.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium",
      city: "Mussoorie",
      country: "India",
    },
    {
      id: 5,
      img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/88000/88565-Danbury-And-Vicinity.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium",
      city: "Denbury",
      country: "United States of America",
    },
    {
      id: 6,
      img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/75000/75441-Manali-And-Vicinity.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium",
      city: "Manali",
      country: "India",
    },
    {
      id: 7,
      img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/40000/40937-Istanbul.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium",
      city: "Istanbul",
      country: "Türkiye",
    },
    {
      id: 8,
      img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/72000/72395-Shimla-And-Vicinity.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium",
      city: "Shimla",
      country: "India",
    },
  ];

  return (
    <div className="trendingDestinationMainDiv">
      <h3 style={{ color: "#191e3b" }}>
        Explore stays in trending destination
      </h3>
      <Swiper
        modules={[Navigation]}
        spaceBetween={8}
        slidesPerView={2}
        navigation
        breakpoints={{
          350: {
            slidesPerView: 1.2,
          },
          579: {
            slidesPerView: 2.2,
          },
          990: {
            slidesPerView: 4.2,
          },
        }}
      >
        <div className="trendingDestinationSliderDiv">
          {sliderDetails.map((card) => (
            <SwiperSlide>
              <div className="trendingDestinationCard" key={card.id}>
                <img className="trendingDestinationImg" src={card.img} alt="" />
                <h3 className="trendingDestinationCity">{card.city}</h3>
                <h5 className="trendingDestinationCountry">{card.country}</h5>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default TrendingDestination;
