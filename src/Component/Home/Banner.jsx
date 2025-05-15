import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    image:
      'https://i0.wp.com/totalinfobd.com/wp-content/uploads/2019/09/MBSTU-main-gate.jpg?fit=1200%2C630&ssl=1',
    title: 'Welcome to TradeNest',
    description:
      'Empowering MBSTU students to buy and sell products easily within campus — trusted, convenient, and student-driven.',
  },
  {
    image: 'https://naeemur.github.io/mbstu/assets/a/17.jpg',
    title: 'Your Campus Marketplace',
    description:
      'From gadgets and books to fashion and essentials — discover everything you need from fellow students at fair prices.',
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d9/Academic_building_at_Mawlana_Bhashani_Science_and_Technology_University_01.jpg',
    title: 'Start Selling Today',
    description:
      'Have something to offer? List your items in minutes and reach the entire MBSTU community instantly through TradeNest.',
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/MBSTU_Memorial.jpg/640px-MBSTU_Memorial.jpg',
    title: 'Safe & Verified Transactions',
    description:
      'TradeNest ensures secure, student-verified deals with built-in safeguards to protect both buyers and sellers at MBSTU.',
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Mawlana_Bhashani_Science_and_Technology_University_01.jpg/640px-Mawlana_Bhashani_Science_and_Technology_University_01.jpg',
    title: 'Inspiring the Future',
    description: 'Join the journey of creating impactful futures.',
  },
];

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{ delay: 20000, disableOnInteraction: false }}
      loop={true}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={1500}
      className="relative"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-screen">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10 left-10 md:left-16 text-white max-w-xl bg-black/50 p-4 md:p-6 rounded-lg shadow-lg backdrop-blur-sm">
              <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
              <p className="mt-2 text-sm md:text-lg">{slide.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
