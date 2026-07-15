import React from "react";

const Footer = () => {
  return (
    <section
      data-theme="dark"
      className="bg-black px-5 py-8 lg:px-10 lg:py-6 lg:min-h-screen flex flex-col"
    >
      {/* Top Content */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-8 text-start lg:text-left">
        {/* About */}
        <div className="max-w-[420px]">
          <h3
            style={{ fontFamily: "Agrandir Wide Light" }}
            className="text-white text-[28px] sm:text-[34px] lg:text-[40px] font-medium"
          >
            About Us
          </h3>

          <p
            style={{ fontFamily: "Agrandir Regular" }}
            className="mt-3 text-white/60 text-[14px] lg:text-[13px] leading-7"
          >
            We provide reliable, comfortable, and affordable car rentals for
            city rides, airport transfers, and outstation trips, delivering
            seamless travel experiences with professional drivers, transparent
            pricing, and customer-first service.
          </p>
        </div>

        {/* Navigation */}
        <nav>
          <ul
            style={{ fontFamily: "Agrandir Regular" }}
            className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 text-white"
          >
            <li>
              <a href="#about" className="hover:text-white/70 transition">
                About Us
              </a>
            </li>

            <li>
              <a href="#our-models" className="hover:text-white/70 transition">
                Our Models
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-white/70 transition">
                Our Services
              </a>
            </li>

            <li>
              <a
                href="#testimonials"
                className="hover:text-white/70 transition"
              >
                Testimonials
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-white/70 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Center Section */}
      <div className="flex-1 flex flex-col items-center justify-center py-8 lg:py-0">
        <img
          src="./logo.png"
          alt="RentCar Logo"
          className="w-[80px] sm:w-[100px] lg:w-[120px]"
        />

        <h2
          style={{ fontFamily: "Agrandir Wide Light" }}
          className="
            text-white/80
            text-center
            tracking-tight
            mt-4
            text-[42px]
            leading-[44px]
            sm:text-[70px]
            sm:leading-[74px]
            md:text-[110px]
            md:leading-[118px]
            lg:text-[180px]
            lg:leading-[180px]
            xl:text-[220px]
            xl:leading-[220px]
          "
        >
          RENTCAR
        </h2>
      </div>

      {/* Bottom */}
      <div className="mt-auto">
        <hr className="border-white/20 mb-5" />

        <div
          style={{ fontFamily: "Agrandir Regular" }}
          className="flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left"
        >
          <span className="text-white text-[13px] lg:text-[14px]">
            © 2026 RentCar. All Rights Reserved.
          </span>

          <span className="text-white text-[13px] lg:text-[14px]">
            Designed & Developed by Dazzle Tech Solution
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;