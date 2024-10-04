import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from 'react';
import 'swiper/css/effect-fade';
import { Autoplay } from 'swiper';

export default function Slider() {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        style={{ background: 'black', color: 'white', textAlign: 'center' }}
        className="mySwiper"
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}>
        <SwiperSlide>
          <p>Available 50% Discounts Now</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Free Shipping in India & Free Shipping Worldwide on Orders Above Rs. 15,000</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
