import React from "react";
import herobg from "../assets/hero/hero-bg-2.png";
import frameImg from "../assets/hero/bg-frame.png";
import Car360Viewer from "./Car360Viewer";

const Hero = () => {
  return (
    <section data-theme="dark" id="hero" className="relative h-[80vh] lg:min-h-[600px] overflow-hidden">
      {/* Main */}
      <div className="relative w-full h-full">
        {/* Background Image */}
        <img
          src={herobg}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Decorative Frame  */}
        <img
          src={frameImg}
          alt=""
          className="hidden lg:block absolute top-0 right-0 w-[50vw] h-screen z-10 pointer-events-none"
        />

        {/* Content */}
        <div className="absolute inset-0 top-[25%] md:top-[20%] z-20 container mx-auto px-4 sm:px-5 h-full flex flex-col text-center">
          <div className="flex flex-col items-center">
            <h1
              style={{ fontFamily: "Agrandir Wide Light" }}
              className="
                text-white font-bold
                text-[28px] leading-[1.15]
                sm:text-4xl md:text-[30px]
                lg:text-[50px] xl:text-[54px] lg:leading-tight
                max-w-[280px] sm:max-w-md md:max-w-3xl lg:max-w-5xl px-2
              "
            >
              Find, Book & Rent Your Dream Car
            </h1>

            {/* <p
              style={{ fontFamily: "Agrandir Regular" }}
              className="
                text-white/90 mt-3
                max-w-[260px] sm:max-w-sm md:max-w-lg lg:max-w-full
                text-sm sm:text-base md:text-[16px] leading-relaxed
              "
            >
              Discover premium vehicles at affordable prices.
              Rent anytime, anywhere with your Android and iOS devices.
            </p> */}

            <button
              style={{ fontFamily: "Agrandir Regular" }}
              className="
                lg:hidden block mt-4 sm:mt-6
                bg-red-500 hover:bg-red-600 duration-300
                px-6 sm:px-8 py-2.5 sm:py-3
                rounded-full text-white text-sm sm:text-base font-semibold
              "
            >
              Explore Cars
            </button>
          </div>
        </div>

        {/* Car 360 Viewer  */}
        <div
          className="
            absolute bottom-30 lg:bottom-0 left-1/2 -translate-x-1/2 z-20
            w-[100vw] max-w-[600px]
            md:max-w-[650px]
            lg:max-w-[760px]
            xl:max-w-[900px]
            2xl:max-w-[1050px]
          "
        >
          <Car360Viewer />
        </div>

        {/* Drag Hint */}
        <p
          style={{ fontFamily: "Agrandir Regular" }}
          className="
            absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2
            text-white/70 text-xs sm:text-sm whitespace-nowrap animate-pulse z-30
          "
        >
          ← Drag to Rotate →
        </p>
      </div>
    </section>
  );
};

export default Hero;