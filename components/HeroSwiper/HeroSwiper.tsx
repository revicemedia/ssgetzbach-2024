"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HeroSwiper() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-full max-h-64 lg:max-h-[44rem]"
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide className="min-w-full min-h-full aspect-auto">
        <img
          src="../../images/volleyball.jpg"
          className="object-cover object-center w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide className="h-auto min-w-full">
        <img
          src="../../images/volleyball_2.jpg"
          className="object-cover object-center w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide className="h-auto min-w-full">
        <img
          src="../../images/test.jpg"
          className="object-cover object-center w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide className="h-auto min-w-full">
        <img
          src="../../images/test.jpg"
          className="object-cover object-center w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide className="h-auto min-w-full">
        <img
          src="../../images/test.jpg"
          className="object-cover object-center w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide className="h-auto min-w-full">
        <img
          src="../../images/test.jpg"
          className="object-cover object-center w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide className="h-auto min-w-full">
        <img
          src="../../images/test.jpg"
          className="object-cover object-center w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide className="h-auto min-w-full">
        <img
          src="../../images/test.jpg"
          className="object-cover object-center w-full h-auto"
        />
      </SwiperSlide>
    </Swiper>
  );
}
