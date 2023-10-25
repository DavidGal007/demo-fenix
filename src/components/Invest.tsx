// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Card from './Card';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default () => {
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={4}
      loop={true}
      centeredSlides={true}
      modules={[Autoplay, Pagination, Navigation]}
      // autoplay={{
      //   delay: 500,
      //   disableOnInteraction: false,
      // }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        375: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 24,
        },

      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='slider-center'
    >
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
