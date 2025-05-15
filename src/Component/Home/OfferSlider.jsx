import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const offers = [
  {
    title: '50% OFF on Laptops',
    text: 'Limited time offer. Get your laptop at half the price!',
    btnText: 'Shop Now',
    color: 'bg-blue-500',
    btnColor: 'text-blue-500',
  },
  {
    title: '10% Cashback',
    text: "Get 10% cashback on all orders. Don't miss out!",
    btnText: 'Claim Cashback',
    color: 'bg-green-500',
    btnColor: 'text-green-500',
  },
  {
    title: 'Buy 1 Get 1 Free',
    text: 'Double the fun! Buy one gadget and get another for free.',
    btnText: 'Grab Now',
    color: 'bg-red-500',
    btnColor: 'text-red-500',
  },
  // Add more offers here if needed
];

const OfferSlider = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">
          Special Offers
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {offers.map((offer, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`${offer.color} text-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 h-56 flex flex-col justify-between`}
              >
                <div>
                  <h3 className="text-2xl font-bold">{offer.title}</h3>
                  <p className="mt-2 text-sm">{offer.text}</p>
                </div>
                <a
                  href="#"
                  className={`mt-4 inline-block bg-white ${offer.btnColor} px-3 py-1.5 rounded-md font-semibold text-sm self-start`}
                >
                  {offer.btnText}
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OfferSlider;
