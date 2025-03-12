import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
          autoplay={{ delay: 2500, disableOnInteraction: false }} // Auto-slide every 2.5s
          loop={true} // Infinite loop
          navigation={true} // Enables next/prev buttons
          pagination={{ clickable: true }} // Enables pagination dots
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile: 1 slide
            640: { slidesPerView: 2 }, // Tablet: 2 slides
            1024: { slidesPerView: 3 }, // Desktop: 3 slides
          }}
          className="w-full"
        >
          {/* Offer 1 */}
          <SwiperSlide>
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <h3 className="text-3xl font-bold">50% OFF on Laptops</h3>
              <p className="mt-2">
                Limited time offer. Get your laptop at half the price!
              </p>
              <a
                href="#"
                className="mt-4 inline-block bg-white text-blue-500 px-4 py-2 rounded-md font-semibold"
              >
                Shop Now
              </a>
            </div>
          </SwiperSlide>

          {/* Offer 2 */}
          <SwiperSlide>
            <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <h3 className="text-3xl font-bold">10% Cashback</h3>
              <p className="mt-2">
                Get 10% cashback on all orders. Don't miss out!
              </p>
              <a
                href="#"
                className="mt-4 inline-block bg-white text-green-500 px-4 py-2 rounded-md font-semibold"
              >
                Claim Cashback
              </a>
            </div>
          </SwiperSlide>

          {/* Offer 3 */}
          <SwiperSlide>
            <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <h3 className="text-3xl font-bold">Buy 1 Get 1 Free</h3>
              <p className="mt-2">
                Double the fun! Buy one gadget and get another for free.
              </p>
              <a
                href="#"
                className="mt-4 inline-block bg-white text-red-500 px-4 py-2 rounded-md font-semibold"
              >
                Grab Now
              </a>
            </div>
          </SwiperSlide>

          {/* Add more offers if needed */}
        </Swiper>
      </div>
    </div>
  );
};

export default OfferSlider;
