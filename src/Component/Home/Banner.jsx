import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      spaceBetween={0} // No gap between slides
      slidesPerView={1} // Show one slide at a time
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{ delay: 20000, disableOnInteraction: false }} // Change image every 20 sec
      loop={true} // Infinite loop
      effect="fade" // Smooth fade effect
      fadeEffect={{ crossFade: true }} // Ensure smooth transition
      speed={1500} // Transition duration of 1.5 sec
    >
      <SwiperSlide>
        <img
          className="w-full h-screen object-cover"
          src="https://i0.wp.com/totalinfobd.com/wp-content/uploads/2019/09/MBSTU-main-gate.jpg?fit=1200%2C630&ssl=1"
          alt="MBSTU Main Gate"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-screen object-cover"
          src="https://naeemur.github.io/mbstu/assets/a/17.jpg"
          alt="MBSTU Campus"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-screen object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Academic_building_at_Mawlana_Bhashani_Science_and_Technology_University_01.jpg"
          alt="MBSTU Academic Building"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-screen object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/MBSTU_Memorial.jpg/640px-MBSTU_Memorial.jpg"
          alt="MBSTU Memorial"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-screen object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Mawlana_Bhashani_Science_and_Technology_University_01.jpg/640px-Mawlana_Bhashani_Science_and_Technology_University_01.jpg"
          alt="MBSTU University"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
