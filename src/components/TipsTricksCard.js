import tip1 from '../img/tipsImg1.svg'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

SwiperCore.use([Pagination,Navigation]);

export default function TipsSlider() {
  
  
  
  return (
    <>
    <Swiper 
    
    slidesPerView={3} 
    spaceBetween={25}
    loopFillGroupWithBlank={true} 
    pagination={{
      "clickable": true
    }}
    navigation={true} 
    className="mySwiper">
  <SwiperSlide>
    <div className="tips-card">
      <div className="tips-img" >
        <img src={tip1} alt="tips"/>
      </div>
      <div className="tips-text">
        <h5>How to create a living room to love</h5>
        <p>20 jan 2020</p>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="tips-card">
      <div className="tips-img" >
        <img src={tip1} alt="tips"/>
      </div>
      <div className="tips-text">
        <h5>How to create a living room to love</h5>
        <p>20 jan 2020</p>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="tips-card">
      <div className="tips-img" >
        <img src={tip1} alt="tips"/>
      </div>
      <div className="tips-text">
        <h5>How to create a living room to love</h5>
        <p>20 jan 2020</p>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="tips-card">
      <div className="tips-img" >
        <img src={tip1} alt="tips"/>
      </div>
      <div className="tips-text">
        <h5>How to create a living room to love</h5>
        <p>20 jan 2020</p>
      </div>
    </div>
  </SwiperSlide>
  
  </Swiper>
    </>
  )
}