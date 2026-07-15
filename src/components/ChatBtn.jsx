import React from "react";
import whatsAppIcon from "../assets/hero/whatsAppImg.png";
import { useSectionTheme } from "@/hooks/useSectionTheme";


export default function ChatBtn() {
  const theme = useSectionTheme("bottom");
  const buttonClass =
    theme === "dark"
      ? "bg-white border-white"
      : "bg-black border-[#4b5563] backdrop-blur-md";

  return (
    <div
      className="fixed left-4 bottom-8 z-[10000] flex flex-col gap-2"
    >
      {/* WHATSAPP */}
      <a
        href="https://wa.me/+919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          flex w-[40px] h-[40px]
          lg:h-[60px]
          lg:w-[60px]
          items-center
          justify-center
          rounded-full
          border border-[#4b5563]
          bg-[rgba(0,37,106,0.3)]
          backdrop-blur-md
          shadow-md
          transition-all
          duration-300
          hover:scale-110
          ${buttonClass}

        `}
      >
        <img
          src={whatsAppIcon}
          alt="Whatsapp"
          width={20}
          height={20}
          priority
          className="object-contain h-[20px] w-[20px] lg:h-[30px] lg:w-[30px]"
        />
      </a>

      {/* CALL
      <a
        href="tel:+919962996977"
        className={`
          flex h-[30px] w-[30px]
          lg:h-[50px]
          lg:w-[50px]
          items-center
          justify-center
          rounded-full
          border border-[#4b5563]
          bg-[rgba(0,37,106,0.3)]
          backdrop-blur-md
          shadow-md
          transition-all
          duration-300
          hover:scale-110
          ${buttonClass}
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="black"
          className="h-[15px] w-[15px] lg:h-[20px] lg:w-[20px]"
        >
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </a>

      <a
        href="https://t.me/"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          flex h-[30px] w-[30px]
          lg:h-[50px]
          lg:w-[50px]
          items-center
          justify-center
          rounded-full
          border border-[#4b5563]
          bg-[rgba(0,37,106,0.3)]
          backdrop-blur-md
          shadow-md
          transition-all
          duration-300
          hover:scale-110
          ${buttonClass}
        `}
      >
        <Image
          src={shareIcon}
          alt="Chat"
          width={20}
          height={20}
          priority
          className="object-contain h-[15px] w-[15px] lg:h-[20px] lg:w-[20px]"
        />
      </a> */}
    </div>
  );
}