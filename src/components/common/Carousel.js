import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';
import carouselImg1 from '../../img/Carousel1.jpg'
import carouselImg3 from '../../img/Carousel3.jpg'
import carouselImg4 from '../../img/Carousel4.jpg'
import carouselImg5 from '../../img/Carousel5.jpg'
import carouselImg6 from '../../img/Carousel6.jpg'

SwiperCore.use([Pagination,Navigation]);

export default function headerSlider() {

  return (
    <>
    <Swiper 
    
    slidesPerView={2} 
    spaceBetween={32}
    loopFillGroupWithBlank={true} 
    pagination={{
      "clickable": true
    }}
    navigation={true} 
    className="headerSwiper">
  <SwiperSlide>
  <div className="headerSlider">
    <img src={carouselImg1}/>
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="headerSlider">
    <img src={carouselImg1}/>
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="headerSlider">
    <img src={carouselImg3}/>
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="headerSlider">
    <img src={carouselImg4}/>
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="headerSlider">
    <img src={carouselImg5}/>
  </div>
  </SwiperSlide>
  <SwiperSlide>
  <div className="headerSlider">
    <img src={carouselImg6}/>
  </div>
  </SwiperSlide>
  </Swiper>
    </>
  )
}


  

 








