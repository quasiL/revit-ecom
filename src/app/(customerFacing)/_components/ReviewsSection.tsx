"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    text: "This product is amazing! I highly recommend it.",
    name: "John Doe",
  },
  {
    id: 2,
    text: "Great quality and fast delivery. I'm very satisfied!",
    name: "Jane Smith",
  },
  {
    id: 3,
    text: "Excellent customer service and fantastic product!",
    name: "Michael Johnson",
  },
  {
    id: 4,
    text: "I love it! Will definitely buy again.",
    name: "Emily Davis",
  },
];

export default function ReviewsSection() {
  return (
    <section className="container mx-auto py-12 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4">Reviews</h2>
      <h3 className="text-xl mb-2">
        From all corners of the world, users speak out about the game changing
        Plugin
      </h3>
      <div className="flex gap-1 justify-center">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="icon_gold mgc_star_fill text-2xl"></span>
        ))}
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-4">&quot;{review.text}&quot;</p>
              <h4 className="font-semibold">{review.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
