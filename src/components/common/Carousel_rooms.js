import carousel from '../../img/gallery2.jpg'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';
import FotoNote from './FotoNote';

SwiperCore.use([Pagination,Navigation]);


export default function RoomsSlider() {

  return (
    <>
    <Swiper 
    
    slidesPerView={2} 
    spaceBetween={24}
    loopFillGroupWithBlank={true} 
    pagination={{
      "clickable": true
    }}
    navigation={true} 
    className="roomsSwiper">
  <SwiperSlide>
    <div className="rooms-carousel">
      <img  src={carousel} alt="carousel"/>
      <FotoNote />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="rooms-carousel">
      <img  src={carousel} alt="carousel"/>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="rooms-carousel">
      <img  src={carousel} alt="carousel"/>
    </div>
  </SwiperSlide>
  
  </Swiper>
    </>
  )
}



