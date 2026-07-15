
import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import ScrollTrigger  from "gsap/ScrollTrigger";
import {Swiper,SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import "swiper/css";

import driverImg from "../assets/services/driverImg.png";
import instantImg from "../assets/services/instantImg.png";
import rentalImg from "../assets/services/rentalImg.png";

const edgeData = [
  {
    title: "PRIVATE DRIVER",
    description:
      "We have professional agents to accompany your trip useful for your protection from disturbances that you do not like.",
    image: driverImg,
  },
  {
    title: "INSTANT RENT",
    description:
      "We provide direct rental services when you need wherever you are. Our officers are quick to respond in carrying out this task.",
    image: instantImg,
  },
  {
    title: "LONG TRIP",
    description:
      "Long trips whenever and wherever you want can comfortably use our car collection that supports long and long trips.",
    image: rentalImg,
  },
];

const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(
      ScrollTrigger
    );

    const ctx = gsap.context(() => {
      const tl =
        gsap.timeline({
          scrollTrigger: {
            trigger:
              sectionRef.current,
            start: "top 75%",
          },
        });

      // TITLE
      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // DESKTOP CARDS
      tl.from(
        cardsRef.current
          ?.children || [],
        {
          y: 60,
          scale: 0.96,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section data-theme="light" id="services"
      ref={sectionRef}
      className="py-6 lg:py-8"
    >
      <div className="mx-auto">
        {/* TITLE */}
        <div
          ref={titleRef}
          className="px-5 md:px-8 lg:px-12"
        >
          <div className="flex flex-col justify-center items-center">
          <h2 style={{fontFamily: "Agrandir Wide Light"}}
            className="
              text-center
              text-[34px] font-semibold
              uppercase
              tracking-tighter
              text-[#111]
              lg:text-[46px]
            "
          >
            OUR SERVICES
          </h2>

          <p style={{fontFamily: "Agrandir Regular"}} className="text-[14px] font-normal capitalize leading-[24px] tracking-tight">
            Our service is not only renting a car, but we also provide a private chauffeur service that can guide you on your trip and also longtrip packages to support your travel needs.
          </p>
          </div>

          {/* DESKTOP BAR */}
          <div className="relative mt-4 hidden h-[2px] w-full bg-[#D7D7D7] lg:block">
            <div
              className="
                absolute
                top-0
                h-full
                w-1/3
                bg-black
                transition-all
                duration-500
                ease-in-out
              "
              style={{
                transform: `translateX(${
                  activeIndex *
                  100
                }%)`,
              }}
            />
          </div>
        </div>

        {/* MOBILE SWIPER */}
        <div className="mt-10 lg:hidden">
          {/* MOBILE BAR */}
          <div className="mb-6 px-5">
            <div className="relative h-[2px] w-full bg-[#D7D7D7]">
              <div
                className="
                  absolute
                  top-0
                  h-full
                  w-1/3
                  bg-black
                  transition-all
                  duration-500
                  ease-in-out
                "
                style={{
                  transform: `translateX(${
                    activeIndex *
                    100
                  }%)`,
                }}
              />
            </div>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            centeredSlides={false}
            loop={true}
            speed={800}
            allowTouchMove={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            onSlideChange={(
              swiper
            ) => {
              setActiveIndex(
                swiper.realIndex
              );
            }}
            className="px-5"
          >
            {edgeData.map(
              (item, index) => (
                <SwiperSlide
                  key={index}
                >
                  <div
                    className="mx-5
                      relative
                      overflow-hidden
                    "
                  >
                    {/* IMAGE */}
                    <div className="relative h-[620px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        fill
                        priority
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* OVERLAY */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(102,102,102,0.2) 100%)",
                      }}
                    />

                    {/* GLASS CONTENT */}
                    <div
                      className="
                        absolute
                        bottom-6
                        left-1/2
                        w-[90%] h-[30%]
                        -translate-x-1/2
                        rounded-[20px]
                        border
                        border-white/30
                        bg-white/10
                        p-10
                        shadow-[inset_0px_1px_2px_rgba(255,255,255,0.8)]
                        backdrop-blur-[2px]
                      "
                    >
                      <h4 style={{fontFamily: "Agrandir Regular"}}
                        className="
                          font-small
                          text-[20px] leading-[24px]
                          font-[400]
                          uppercase
                          text-white
                        "
                      >
                        {item.title}
                      </h4>

                      <p style={{fontFamily: "Agrandir Regular"}}
                        className="
                          mt-4
                          text-[16px]
                          leading-[20px]
                          text-white
                        "
                      >
                        {
                          item.description
                        }
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>

        {/* DESKTOP GRID */}
        <div
          ref={cardsRef}
          className="
            mt-10
            hidden
            gap-4
            lg:grid
            lg:grid-cols-3
          "
        >
          {edgeData.map(
            (item, index) => (
              <div
                key={index}
                onClick={() =>
                  setActiveIndex(
                    index
                  )
                }
                className={`
                  group
                  relative
                  cursor-pointer
                  overflow-hidden
                  transition-all
                  duration-500
                  md:h-[500px]
                  ${
                    activeIndex ===
                    index
                      ? "scale-[1.02]"
                      : "scale-[0.96] opacity-80"
                  }
                `}
              >
                <div className="relative h-[550px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    fill
                    priority
                    className="object-cover object-center transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.48) 25%, rgba(102,102,102,0.2) 100%)",
                  }}
                />

                <div
                  className="
                    absolute
                    bottom-8
                    left-1/2
                    h-[187px]
                    w-[390px]
                    -translate-x-1/2
                    rounded-[20px]
                    border
                    border-white/30
                    bg-white/10
                    p-4
                    px-6 py-6
                    shadow-[inset_0px_1px_2px_rgba(255,255,255,0.8)]
                    backdrop-blur-[2px]
                  "
                >
                  <h4 style={{fontFamily: "Agrandir Regular"}} className="font-small text-[30px] leading-[32px] font-[300] uppercase text-white">
                    {item.title}
                  </h4>

                  <p style={{fontFamily: "Agrandir Regular"}} className="mt-4 w-[28ch] text-[18px] leading-[22px] text-white">
                    {
                      item.description
                    }
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default OurServices;