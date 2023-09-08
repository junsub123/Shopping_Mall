import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/scss'; //basic
import 'swiper/scss/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay])

export default function Banner() {
    return (
        <div>
            <Swiper
                modules={[Navigation,Pagination, Autoplay]}
                pagination={{ clickable: true }}
                navigation={true}
                loop={true} // 루프 슬라이드
                autoplay={{ delay: 1000 }} // 자동 슬라이드
                spaceBetween={0} // 슬라이드간의 간격
                slidesPerView={1} // 한 번에 보여지는 슬라이드 개수
                breakpoints={{
                    0: {
                        slidesOffsetBefore: 0,
                        slidesPerView: 1,
                        spaceBetween: 8,
                        centeredSlides: false,
                    },
                    500: {
                        slidesOffsetBefore: 16,
                        slidesPerView: 2,
                        spaceBetween: 8,
                        centeredSlides: false,
                    }}}
            >
                <SwiperSlide >
                    <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220725_132%2F1658712269413vgdsd_PNG%2F59848112123002374_1751877375.PNG&type=sc960_832" alt="" />
                </SwiperSlide>
                <SwiperSlide >
                    <img src="https://gdimg.gmarket.co.kr/1172196521/still/600?ver=1553663241" alt="" />
                </SwiperSlide>
                <SwiperSlide >

                    <img src="/images/main-banner-02.jpg" alt="" />

                </SwiperSlide>
                <SwiperSlide >

                    <img src="/images/main-banner-03.jpg" alt="" />

                </SwiperSlide>
                <SwiperSlide >

                    <img src="/images/main-banner-04.jpg" alt="" />

                </SwiperSlide>
                <SwiperSlide >

                    <img src="/images/main-banner-05.jpg" alt="" />

                </SwiperSlide>
                <SwiperSlide >

                    <img src="/images/main-banner-06.jpg" alt="" />

                </SwiperSlide>
                <SwiperSlide >

                    <img src="/images/main-banner-07.jpg" alt="" />

                </SwiperSlide>
            </Swiper>
        </div>
    );
}