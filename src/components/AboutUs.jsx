import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  LayoutGroup,
  useMotionValue,
  useSpring,
} from "framer-motion";

import frameImg from "../assets/about/Vector.png";
import suvImg from "../assets/about/suvImg.png";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const magneticRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const motionX = useMotionValue(0);
  const motionY = useMotionValue(0);

  const x = useSpring(motionX, {
    stiffness: 180,
    damping: 18,
    mass: 0.4,
  });

  const y = useSpring(motionY, {
    stiffness: 180,
    damping: 18,
    mass: 0.4,
  });

  const handleMouseMove = (e) => {
    if (isOpen) return;

    if (!magneticRef.current) return;

    const rect = magneticRef.current.getBoundingClientRect();

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    motionX.set((mouseX - centerX) * 0.18);
    motionY.set((mouseY - centerY) * 0.18);
  };

  const handleMouseLeave = () => {
    motionX.set(0);
    motionY.set(0);
  };

  const spring = {
    type: "spring",
    stiffness: 180,
    damping: 22,
    mass: 0.7,
  };

  const blobOne = {
    animate: {
      x: [0, 30, 0],
      y: [0, -40, 0],
      scale: [1, 1.1, 1],
    },
    transition: {
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const blobTwo = {
    animate: {
      x: [0, -30, 0],
      y: [0, 35, 0],
      scale: [1, 0.9, 1],
    },
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const blobThree = {
    animate: {
      x: [0, -20, 0],
      y: [0, 20, 0],
    },
    transition: {
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const isMobileOrTablet = isMobile || isTablet;

  const renderCardContent = (showClose = true, showReadMoreToggle = true) => (
    <div className="relative z-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <motion.h2
          style={{ fontFamily: "Agrandir Wide Light" }}
          layout={!isMobileOrTablet}
          className="text-2xl font-semibold text-white md:text-3xl"
        >
          About Us
        </motion.h2>

        {showClose && (
          <motion.button
            whileHover={{
              rotate: 90,
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            transition={spring}
            onClick={() => {
              setReadMore(false);
              setIsOpen(false);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white cursor-pointer"
          >
            ✕
          </motion.button>
        )}
      </div>

      <motion.div layout={!isMobileOrTablet} className="my-6 h-px bg-white/10" />

      <motion.p
        style={{ fontFamily: "Agrandir Regular" }}
        layout={!isMobileOrTablet}
        initial={false}
        className="relative z-10 text-sm leading-7 text-white/85 md:text-base md:leading-8"
      >
        Experience premium travel with comfort, safety and reliability. Our
        professional chauffeurs, luxury fleet and customer-first approach ensure
        every journey is smooth, secure and memorable. Whether it's airport
        transfers, business travel, weddings or outstation trips, we deliver
        exceptional travel experiences with punctuality and elegance.
      </motion.p>

      {/* Full content */}
      <div className="relative z-10 mt-8">
        <AnimatePresence initial={false}>
          {(readMore || isMobileOrTablet) && (
            <motion.div
              layout={!isMobileOrTablet}
              key="about-read-more"
              initial={
                isMobileOrTablet
                  ? { opacity: 1, height: "auto" }
                  : { height: 0, opacity: 0 }
              }
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.45,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
            >
              <motion.div
                style={{ fontFamily: "Agrandir Regular" }}
                layout={!isMobileOrTablet}
                className="space-y-3 pt-6"
              >
                <p className="text-sm leading-7 text-white/75 md:text-base md:leading-8">
                  Every trip is designed around comfort, reliability and
                  attention to detail. Whether you're travelling for business,
                  leisure or a family vacation, our team ensures a premium
                  experience from pickup to destination.
                </p>

                <p className="text-sm leading-7 text-white/75 md:text-base md:leading-8">
                  Our fleet consists of clean, well-maintained vehicles driven
                  by experienced chauffeurs who value your safety, punctuality
                  and convenience. We believe every journey should feel
                  effortless and memorable.
                </p>

                <div className="grid grid-cols-1 gap-5 pt-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                    <h4 className="text-3xl font-semibold text-white">5000+</h4>
                    <p className="mt-2 text-sm text-white/60">
                      Successful Trips
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                    <h4 className="text-3xl font-semibold text-white">100%</h4>
                    <p className="mt-2 text-sm text-white/60">
                      Customer Satisfaction
                    </p>
                  </div>
                </div>

                <motion.button
                  whileTap={{
                    scale: 1,
                  }}
                  transition={spring}
                  style={{ fontFamily: "Agrandir Regular" }}
                  className="mt-4 w-full rounded-full bg-white px-7 py-3 font-medium text-black cursor-pointer md:w-auto"
                >
                  Explore Fleet →
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Read More */}
        {showReadMoreToggle && (
          <motion.button
            style={{ fontFamily: "Agrandir Regular" }}
            layout={!isMobileOrTablet}
            whileHover={{
              x: 5,
            }}
            transition={spring}
            onClick={() => setReadMore(!readMore)}
            className="mt-6 font-medium text-white transition-colors hover:text-yellow-300 cursor-pointer"
          >
            {readMore ? "Read Less ↑" : "Read More ↓"}
          </motion.button>
        )}
      </div>
    </div>
  );

  return (
    <LayoutGroup>
      <section
        data-theme="dark"
        id="about"
        className="relative min-h-screen overflow-hidden bg-black py-8 md:py-12 lg:py-0"
      >
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full flex-col lg:min-h-screen lg:flex-row md:min-h-[calc(100vh-6rem)]">
          {/* LEFT SIDE  */}
          <div className="relative flex w-full items-center justify-center py-4 lg:w-1/2 lg:py-0">
            {/* Decorative Frame  */}
            <div className="absolute left-0 hidden h-screen w-[500px] pointer-events-none lg:block">
              <img src={frameImg} alt="" className="w-full object-cover" />
            </div>

            {/* SUV Image */}
            <div className="flex w-full items-center justify-center z-[40]">
              <img
                src={suvImg}
                alt="SUV"
                className="max-h-[40vh] w-full max-w-[820px] object-contain lg:max-h-none"
              />
            </div>
          </div>

          {/* RIGHT SIDE - Magnetic Area */}
          <div className="relative flex w-full items-center justify-center lg:w-1/2">
            {/* Right Frame - hidden on tablet/mobile */}
            <div className="absolute right-0 hidden w-[500px] rotate-180 pointer-events-none lg:block">
              <img src={frameImg} alt="" className="w-full object-contain" />
            </div>

            {/* Blobs - desktop only */}
            {!isMobileOrTablet && (
              <>
                <motion.div
                  {...blobOne}
                  className="absolute left-16 top-16 h-56 w-56 rounded-full bg-white/5 blur-[100px]"
                />
                <motion.div
                  {...blobTwo}
                  className="absolute bottom-20 right-16 h-40 w-40 rounded-full bg-white/5 blur-[90px]"
                />
                <motion.div
                  {...blobThree}
                  className="absolute right-40 top-1/2 h-28 w-28 rounded-full bg-white/5 blur-[70px]"
                />
              </>
            )}

            {/* Magnetic Container */}
            <div
              ref={magneticRef}
              onMouseMove={!isMobileOrTablet ? handleMouseMove : undefined}
              onMouseLeave={!isMobileOrTablet ? handleMouseLeave : undefined}
              className="relative flex h-full w-full items-center justify-center overflow-hidden"
            >
              {/* Mobile/Tablet: static card always visible, no close, no read more toggle */}
              {isMobileOrTablet ? (
                <div className="relative w-full max-w-[95%] overflow-hidden rounded-[38px] border border-white/15 bg-white/[0.08] p-5 backdrop-blur-[35px] shadow-[0_40px_120px_rgba(0,0,0,.30)] sm:max-w-[650px]">
                  {renderCardContent(false, false)}
                </div>
              ) : (
                /* Desktop: animated morph between capsule and card */
                <AnimatePresence initial={false}>
                  {!isOpen ? (
                    <motion.div
                      key="capsule"
                      layout
                      layoutId="aboutMorph"
                      style={{ x, y }}
                      transition={spring}
                      onClick={() => setIsOpen(true)}
                      className="cursor-pointer"
                    >
                      <motion.div
                        layout
                        className="flex h-[74px] w-[240px] items-center justify-between rounded-full border border-white/60 bg-white/[0.08] px-8 backdrop-blur-[30px] shadow-[0_25px_80px_rgba(0,0,0,.25)] cursor-pointer"
                      >
                        <span
                          style={{ fontFamily: "Agrandir Wide Light" }}
                          className="text-lg font-semibold tracking-wide text-white"
                        >
                          ABOUT
                        </span>

                        <motion.span
                          animate={{ x: [0, 6, 0] }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                          }}
                          className="text-2xl text-white"
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="card"
                      layout
                      layoutId="aboutMorph"
                      transition={spring}
                      initial={false}
                      className="relative w-full max-w-[95%] overflow-hidden rounded-[38px] border border-white/15 bg-white/[0.08] p-5 backdrop-blur-[35px] shadow-[0_40px_120px_rgba(0,0,0,.30)] sm:max-w-[650px] lg:max-w-[560px] lg:p-8"
                    >
                      {/* Floating highlights - desktop only */}
                      <motion.div
                        animate={{
                          x: [0, 25, 0],
                          y: [0, -20, 0],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/10 blur-[110px]"
                      />
                      <motion.div
                        animate={{
                          x: [0, -15, 0],
                          y: [0, 20, 0],
                        }}
                        transition={{
                          duration: 12,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/5 blur-[120px]"
                      />

                      {/* Card content with fade-in after morph */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {renderCardContent(true, true)}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>
      </section>
    </LayoutGroup>
  );
};

export default AboutUs;