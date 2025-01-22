import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";


const Portfolio = () => {
  const images = [
    "/IMG_7118.JPG",
    "/IMG_7101.JPG",
    "/IMG_7136.JPG",
    "/IMG_7121.JPG",
    "/IMG_7130.JPG",
    "/IMG_7145.JPG",
    "/IMG_7125.JPG",
    "/IMG_7110.JPG",
    "/IMG_7129.JPG",
    "/IMG_7248.JPG",
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12 lg:py-20 text-center">
      <h2 className="text-4xl font-extrabold text-purple-900 mb-10 tracking-wide">
        Event Highlights
      </h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2.5}
        spaceBetween={40}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{clickable: true}}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full max-w-screen-lg"
      >
        {images.map((img, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center"
            style={{ width: "300px", height: "350px" }}
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;
