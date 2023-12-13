import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-creative"
import '../styles/Gallery.css'
import { Pagination, Navigation } from 'swiper/modules';

const Gallery = () => {
  return (
    <>
      <Swiper
        grabCursor={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop="true"
        modules={[Pagination, Navigation]}

        className="mySwiper noSelect"
      >
        <SwiperSlide>
          <img src="./cover1.jpg" alt="" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./cover2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./g4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./g5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./g6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./g8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./g9.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./g10.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./g11.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./g7.jpg" alt="" />
        </SwiperSlide>

      </Swiper>
    </>
  );
}

export default Gallery