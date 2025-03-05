import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
  const params = {
    modules: [Navigation, Pagination],
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
    navigation: true,
  };

  return (
    <Swiper {...params}>
      <SwiperSlide>
        <img
          className="w-full h-screen object-cover"
          src="https://i0.wp.com/totalinfobd.com/wp-content/uploads/2019/09/MBSTU-main-gate.jpg?fit=1200%2C630&ssl=1"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-screen object-cover"
          src="https://naeemur.github.io/mbstu/assets/a/17.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-screen object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Academic_building_at_Mawlana_Bhashani_Science_and_Technology_University_01.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-screen object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/MBSTU_Memorial.jpg/640px-MBSTU_Memorial.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-screen object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Mawlana_Bhashani_Science_and_Technology_University_01.jpg/640px-Mawlana_Bhashani_Science_and_Technology_University_01.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
