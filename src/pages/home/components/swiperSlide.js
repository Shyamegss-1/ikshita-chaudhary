import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';
import banner1 from '../../../images/homeBanner/1.jpg';
import banner2 from '../../../images/homeBanner/2.jpg';
import banner3 from '../../../images/homeBanner/3.jpg';
import banner4 from '../../../images/homeBanner/4.jpg';
import banner5 from '../../../images/homeBanner/5.jpg';
import banner6 from '../../../images/homeBanner/6.jpg';

const silderData = [
    {
        id: 1,
        navigateTo: '#',
        imgUrl: banner1
    },
    {
        id: 2,
        navigateTo: '#',
        imgUrl: banner2
    },
    {
        id: 3,
        navigateTo: '#',
        imgUrl: banner3
    },
    {
        id: 4,
        navigateTo: '#',
        imgUrl: banner4
    },
    {
        id: 5,
        navigateTo: '#',
        imgUrl: banner5
    },
    {
        id: 6,
        navigateTo: '#',
        imgUrl: banner6
    }
];

export default function SwiperSlider() {
    return (
        <>
            <Swiper
                loop
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {silderData.map((slider) => (
                    <SwiperSlide key={slider.id}>
                        <img src={slider.imgUrl} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>




    );
}

