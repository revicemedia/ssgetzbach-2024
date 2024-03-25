"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HeroSwiper({slides}: any) {

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-full h-64 lg:h-[44rem]"
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
      {slides.items.map((item: any) => (
      <SwiperSlide className="h-full w-full" key={item.fields.image.fields.file.url}>
        <img
          src={item.fields.image.fields.file.url}
          className="object-cover object-center min-w-full min-h-full"
          alt="BildSlider"
        />
      </SwiperSlide>
      ))}
    </Swiper>
  );
}
