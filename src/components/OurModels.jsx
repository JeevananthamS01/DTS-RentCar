import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import frameImg from "../assets/hero/bg-frame.png";

import innovaImg from "../assets/models/innovaImg.png";
import ertigaImg from "../assets/models/ertigaImg.png";
import sedanImg from "../assets/models/sedanImg.png";
import nissanImg from "../assets/models/nissanImg.png";
import suvImg from "../assets/models/suvImg.png";
import cadillacImg from "../assets/models/cadi-xts.png";
import vanImg from "../assets/models/vanChryslerImg.png";

const cars = [
  {
    id: 1,
    name: "Innova Crysta",
    image: innovaImg,
    specs: [
      "7 Seater",
      "15-16 km/l",
      "Large Luggage",
      "Premium Interior",
      "Perfect for Family",
    ],
  },
  {
    id: 2,
    name: "Ertiga",
    image: ertigaImg,
    specs: ["7 Seater", "20 km/l", "Comfort Ride", "Budget Friendly", "AC"],
  },
  {
    id: 3,
    name: "Sedan",
    image: sedanImg,
    specs: [
      "4 Seater",
      "22 km/l",
      "Executive",
      "Airport Travel",
      "Business Class",
    ],
  },
  {
    id: 4,
    name: "Nissan",
    image: nissanImg,
    specs: [
      "7 Seater",
      "Powerful Engine",
      "Mountain Ready",
      "Comfort Seats",
      "AC",
    ],
  },
  {
    id: 5,
    name: "SUV",
    image: suvImg,
    specs: [
      "7 Seater",
      "Luxury Interior",
      "Large Boot",
      "Adventure Ready",
      "Premium Ride",
    ],
  },
  {
    id: 6,
    name: "Cadillac XTS",
    image: cadillacImg,
    specs: [
      "Luxury Sedan",
      "VIP Travel",
      "Leather Seats",
      "Executive Class",
      "Premium Comfort",
    ],
  },
  {
    id: 7,
    name: "Chrysler Van",
    image: vanImg,
    specs: [
      "8 Seater",
      "Huge Luggage",
      "Group Travel",
      "Luxury Van",
      "Airport Pickup",
    ],
  },
];

const OurModels = () => {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % cars.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + cars.length) % cars.length);
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -100) {
      nextSlide();
    }

    if (info.offset.x > 100) {
      prevSlide();
    }
  };

  const slideVariants = {
    enter: {
      opacity: 0,
      x: 200,
      scale: 0.85,
    },

    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },

    exit: {
      opacity: 0,
      x: -200,
      scale: 0.85,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section
      data-theme="dark"
      id="our-models"
      className="relative bg-black overflow-hidden py-10 lg:py-14"
    >
      {/* Background */}
      <div className="absolute left-0 top-[30%] lg:top-0 w-[180px] sm:w-[250px] md:w-[320px] lg:w-[500px] rotate-180 opacity-80">
        <img
          src={frameImg}
          alt="bg-frame"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
        {/* Heading */}
        <div className="text-center">
          <h2
            style={{ fontFamily: "Agrandir Wide Light" }}
            className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
            text-white/90
          "
          >
            Our Models
          </h2>

          <p
            style={{ fontFamily: "Agrandir Regular" }}
            className="
            mx-auto
            mt-5
            max-w-xl
            lg:max-w-2xl
            text-sm
            sm:text-base
            leading-7
            text-white/60
          "
          >
            Choose the perfect vehicle for your journey. From family trips to
            executive travel, every ride offers comfort, safety and premium
            service.
          </p>
        </div>

        {/* Main Container */}
        <div
          className="
          mt-12
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-12
          lg:gap-20
        "
        >
          {/* Left Side */}
          <div
            className="
            w-full
            lg:w-1/2
            flex
            justify-center
            items-center
          "
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={cars[current].id}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={handleDragEnd}
                className="
                cursor-grab
                active:cursor-grabbing
                flex
                justify-center
                items-center
                w-full
                aspect-[4/3]
                sm:aspect-[16/10]
                lg:aspect-[16/9]
              "
              >
                <img
                  src={cars[current].image}
                  alt={cars[current].name}
                  draggable={false}
                  className="
                  max-h-full
                  max-w-full
                  object-contain
                  select-none
                  pointer-events-none
                "
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side */}
          <div
            className="
            w-full
            lg:w-1/2
            flex
            flex-col
            items-center
            lg:items-center
          "
          >
            {/* Car Name */}
            <div
              className="relative flex flex-col items-center lg:items-start"
              onMouseEnter={() => setHovered(current)}
              onMouseLeave={() => setHovered(null)}
            >
              <motion.h3
                layout
                style={{ fontFamily: "Agrandir Wide Light" }}
                className="
                cursor-pointer
                text-center
                lg:text-center
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                tracking-wide
                text-white/90
              "
              >
                {cars[current].name}
              </motion.h3>

              {/* Specifications */}
              <AnimatePresence mode="wait">
                {hovered === current && (
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="
                    mt-6
                    w-full
                    max-w-[340px]
                    rounded-3xl
                    border
                    border-white/20
                    bg-white/5
                    backdrop-blur-xl
                    p-6
                    shadow-2xl
                  "
                  >
                    <h4
                      style={{ fontFamily: "Agrandir Regular" }}
                      className="mb-4 text-xl font-semibold text-white"
                    >
                      Specifications
                    </h4>

                    <div className="space-y-3">
                      {cars[current].specs.map((spec) => (
                        <div key={spec} className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-white" />

                          <span
                            style={{ fontFamily: "Agrandir Regular" }}
                            className="text-white/70"
                          >
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div
              className="
              mt-10
              flex
              items-center
              justify-center
              lg:justify-start
              gap-5
              sm:gap-8
              lg:gap-10
            "
            >
              <button
                onClick={prevSlide}
                className="
                flex
                h-10
                w-10
                sm:h-12
                sm:w-12
                lg:h-14
                lg:w-14
                items-center
                justify-center
                rounded-full
                border
                border-gray-300
                text-white/40
                transition
                hover:bg-white
                hover:text-black
                cursor-pointer
              "
              >
                ←
              </button>

              {/* Dots */}
              <div className="flex items-center gap-3">
                {cars.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`cursor-pointer h-3 rounded-full transition-all duration-300 ${
                      current === index ? "w-10 bg-white" : "w-3 bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="
                flex
                h-10
                w-10
                sm:h-12
                sm:w-12
                lg:h-14
                lg:w-14
                items-center
                justify-center
                rounded-full
                border
                border-gray-300
                text-white/40
                transition
                hover:bg-white
                hover:text-black
                cursor-pointer
              "
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurModels;
