import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

const SlideCard = () => {
  return (
    <>
      <div className="py-16 bg-black">
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={2}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 4,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper mb-10"
        >
          <SwiperSlide>
            <img className="h-48" src="/images/team.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-48" src="/images/team1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-48" src="/images/team2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-48" src="/images/team.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-48" src="/images/team3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-48" src="/images/team2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-48" src="/images/team.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-48" src="/images/team1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-48" src="/images/team3.png" alt="" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          spaceBetween={30}
          dir="rtl"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={2}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 4,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="h-48" src="/images/team1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-48" src="/images/team3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-48" src="/images/team2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-48" src="/images/team1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-48" src="/images/team2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-48" src="/images/team3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-48" src="/images/team2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-48" src="/images/team1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-48" src="/images/team3.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SlideCard;
