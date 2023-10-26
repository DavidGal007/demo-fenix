import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Card from './Card';
import { Autoplay } from 'swiper/modules';


export default () => {

  return (
    <Swiper
      spaceBetween={24}
      modules={[Autoplay]}
      loop={true}
      speed={8000}
      freeMode={true}
      slidesPerView={'auto'}
      // allowSlideNext={false}
      a11y={{
        enabled: false
      }}
      allowTouchMove={false}
      // allowSlidePrev={false}
      autoplay={{
        delay: 0.5,

        disableOnInteraction: false,
      }}
      className='slider-center'
    >
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
    </Swiper>
  );
};
