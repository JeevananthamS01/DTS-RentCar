import BorderGlow from "../lib/BorderGlow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import testimonialImg1 from "../assets/testimonials/testimonialImg1.png";
import testimonialImg2 from "../assets/testimonials/testimonialImg2.png";
import testimonialImg3 from "../assets/testimonials/testimonialImg3.jpg";
import testimonialImg4 from "../assets/testimonials/testimonialImg4.jpg";
import testimonialImg5 from "../assets/testimonials/testimonialImg5.jpg";
import testimonialImg6 from "../assets/testimonials/testimonialImg6.jpg";

const testimonials = [
  {
    img: testimonialImg1,
    name: "Michael Anderson",
    review:
      "Outstanding service from start to finish. The vehicle arrived right on time, was impeccably clean, and the chauffeur was professional throughout the journey.",
  },
  {
    img: testimonialImg2,
    name: "Emily Carter",
    review:
      "Our road trip was absolutely fantastic. The SUV was spacious, comfortable, and in excellent condition. Booking was simple and exceeded expectations.",
  },
  {
    img: testimonialImg3,
    name: "Daniel Brooks",
    review:
      "I booked an Innova for a family vacation. Plenty of room for luggage, smooth ride quality and excellent customer support.",
  },
  {
    img: testimonialImg4,
    name: "Sophia Miller",
    review:
      "The airport transfer service was flawless. My driver tracked my delayed flight and greeted me professionally.",
  },
  {
    img: testimonialImg5,
    name: "Ethan Walker",
    review:
      "Excellent fleet, transparent pricing and exceptional customer service. Highly recommended.",
  },
  {
    img: testimonialImg6,
    name: "Olivia Bennett",
    review:
      "From booking to drop-off everything was handled professionally. Luxurious vehicle and courteous chauffeur.",
  },
];

export default function Testimonial() {
  return (
    <section data-theme="dark" id="testimonials" className="mx-auto bg-black px-10 py-10">
      {/* Title */}
      <div className="flex justify-center items-center mb-6">
        <h2
          style={{ fontFamily: "Agrandir Wide Light" }}
          className="text-white font-[500] text-[40px] leading-[44px]"
        >
          Testimonials
        </h2>
      </div>

      {/* Card Testimonial */}
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={["#c084fc", "#f472b6", "#38bdf8"]}
              className="relative"
            >
              <div className="h-[400px] p-8">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-[250px] rounded-[20px] object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full">
                  <div className="bg-[#120F17] backdrop-blur-md rounded-b-[20px] p-4 text-center">
                    <h2
                      style={{ fontFamily: "Agrandir Wide Light" }}
                      className="text-white text-[28px]"
                    >
                      {item.name}
                    </h2>

                    <p
                      style={{ fontFamily: "Agrandir Regular" }}
                      className="text-white text-[12px]"
                    >
                      {item.review}
                    </p>
                  </div>
                </div>
              </div>
            </BorderGlow>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
