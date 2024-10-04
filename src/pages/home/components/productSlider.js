import React from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import PropTypes from 'prop-types';
import { Autoplay, Navigation } from 'swiper';

export default function ProductSlider({ children, tabs, xs, sm, md, xl }) {
    return (
        <>
            <Swiper
                loop
                spaceBetween={30}
                slidesPerView={tabs}
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
                breakpoints={{
                    320: {
                        slidesPerView: xs,
                        spaceBetween: 0
                    },

                    600: {
                        slidesPerView: sm,
                        spaceBetween: 30
                    },
                    911: {
                        slidesPerView: md,
                        spaceBetween: 10
                    },
                    1100: {
                        slidesPerView: xl,
                        spaceBetween: 40
                    }
                }}
                className="mySwiper"
            >
                {children}
            </Swiper>
        </>
    );
}

ProductSlider.propTypes = {
    children: PropTypes.any.isRequired,
    tabs: PropTypes.number.isRequired,
    xs: PropTypes.number.isRequired,
    sm: PropTypes.number.isRequired,
    md: PropTypes.number.isRequired,
    xl: PropTypes.number.isRequired
};
