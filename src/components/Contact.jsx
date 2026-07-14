import { Car, Mail, PhoneIcon } from "lucide-react";
import React from "react";
import bgImg from "../assets/contact/bg-Img.png";

const Contact = () => {
  return (
  <section
    data-theme="light"
    id="contact"
    className="bg-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-16"
  >
    {/* Title */}
    <h2
      style={{ fontFamily: "Agrandir Wide Light" }}
      className="
        mb-8
        lg:mb-12
        text-3xl
        sm:text-4xl
        lg:text-[40px]
        font-semibold
        leading-tight
      "
    >
      Contact Us
    </h2>

    {/* Main Card */}
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-2
        overflow-hidden
        rounded-[24px]
        lg:rounded-[32px]
        shadow-xl
      "
    >
      {/* Left Side */}
      <div
        className="
          relative
          min-h-[520px]
          sm:min-h-[620px]
          md:min-h-[680px]
          lg:min-h-[760px]
          bg-cover
          bg-center
        "
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div
          className="
            relative
            z-10
            flex
            h-full
            flex-col
            justify-center
            px-6
            sm:px-10
            lg:px-12
            py-10
            text-white
          "
        >
          {/* Badge */}
          <div
            className="
              mb-6
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              bg-white/20
              px-4
              py-2
              backdrop-blur-md
            "
          >
            <span className="h-2 w-2 rounded-full bg-amber-400" />

            <p
              style={{ fontFamily: "Agrandir Regular" }}
              className="text-[11px] sm:text-sm uppercase tracking-wide"
            >
              Car Rentals · City Rides · Tours
            </p>
          </div>

          {/* Heading */}
          <h3
            style={{ fontFamily: "Agrandir Wide Light" }}
            className="
              max-w-xl
              text-3xl
              sm:text-5xl
              lg:text-[60px]
              font-semibold
              leading-tight
              lg:leading-[60px]
            "
          >
            Book the right car for every journey.
          </h3>

          {/* Description */}
          <p
            style={{ fontFamily: "Agrandir Regular" }}
            className="
              mt-6
              mb-10
              max-w-xl
              text-sm
              sm:text-base
              leading-7
              text-white/90
            "
          >
            From airport pickups to outstation tours, tell us your route,
            travel dates, and preferred vehicle. We'll help you choose a clean,
            comfortable rental with transparent pricing and professional
            service.
          </p>

          {/* Contact Details */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-10
                  w-10
                  sm:h-12
                  sm:w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white/20
                  backdrop-blur-md
                  flex-shrink-0
                "
              >
                <Mail size={20} />
              </div>

              <span
                style={{ fontFamily: "Agrandir Regular" }}
                className="text-sm sm:text-base break-all"
              >
                rentcar255@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-10
                  w-10
                  sm:h-12
                  sm:w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white/20
                  backdrop-blur-md
                  flex-shrink-0
                "
              >
                <PhoneIcon size={20} />
              </div>

              <span
                style={{ fontFamily: "Agrandir Regular" }}
                className="text-sm sm:text-base"
              >
                +91 9876543210
              </span>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  h-10
                  w-10
                  sm:h-12
                  sm:w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white/20
                  backdrop-blur-md
                  flex-shrink-0
                "
              >
                <Car size={20} />
              </div>

              <span
                style={{ fontFamily: "Agrandir Regular" }}
                className="text-sm sm:text-base leading-6"
              >
                Sedans, SUVs, Chrysler Vans & Custom Tour Packages
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div
        className="
          bg-white
          p-6
          sm:p-10
          lg:p-16
          flex
          flex-col
          justify-center
        "
      >
        <h3
          style={{ fontFamily: "Agrandir Wide Light" }}
          className="
            text-2xl
            sm:text-3xl
            font-semibold
            mb-8
            text-black
          "
        >
          Get in Touch
        </h3>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              sm:px-5
              py-3
              sm:py-4
              outline-none
              transition
              focus:border-black
            "
          />

          <input
            type="email"
            placeholder="Email Address"
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              sm:px-5
              py-3
              sm:py-4
              outline-none
              transition
              focus:border-black
            "
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              sm:px-5
              py-3
              sm:py-4
              outline-none
              transition
              focus:border-black
            "
          />

          <textarea
            rows={6}
            placeholder="Message"
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-gray-300
              px-4
              sm:px-5
              py-3
              sm:py-4
              outline-none
              transition
              focus:border-black
            "
          />

          <button
            type="submit"
            style={{ fontFamily: "Agrandir Regular" }}
            className="
              w-full
              rounded-xl
              bg-black
              py-3
              sm:py-4
              text-white
              font-medium
              transition-all
              duration-300
              hover:bg-neutral-800
              cursor-pointer
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);
};

export default Contact;