import React, { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About Us" },
  { href: "#our-models", label: "Our Models" },
  { href: "#services", label: "Our Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = 80;
      const probeY = navHeight + 10;
      const sections = document.querySelectorAll("[data-theme]");
      let current = "dark";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom >= probeY) {
          current = section.getAttribute("data-theme") || "dark";
        }
      });

      setTheme(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isDark = theme === "dark";
  const textColor = isDark ? "text-white" : "text-black";
  const borderColor = isDark ? "border-white/40" : "border-black/40";

  const headerClass =
    "w-full fixed z-[10000] top-0 left-0 py-3 px-5 lg:py-4 lg:px-0 lg:mx-auto bg-gradient-to-r from-black/40 via-white/10 to-black/40 backdrop-blur-lg shadow-2xl border " +
    borderColor +
    " lg:rounded-full transition-colors duration-500";

  const titleClass =
    "text-xl lg:text-2xl " +
    textColor +
    " font-bold tracking-normal leading-[21px] transition-colors duration-500";

  const linkClass = textColor + " transition-colors duration-500";

  const buttonClass =
    textColor +
    " bg-transparent border " +
    borderColor +
    " px-6 py-3 rounded-full cursor-pointer transition-colors duration-500";

  const barClass =
    "block w-6 h-[2px] rounded-full " +
    (isDark ? "bg-white" : "bg-black") +
    " transition-colors duration-500";

  const mobilePanelClass =
    "fixed lg:hidden top-0 right-0 h-[100svh] w-full bg-black/95 backdrop-blur-lg z-[10001] transform transition-transform duration-500 ease-in-out " +
    (menuOpen ? "translate-x-0" : "translate-x-full");

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const desktopLinkItems = [];
  for (let i = 0; i < NAV_LINKS.length; i++) {
    const link = NAV_LINKS[i];
    desktopLinkItems.push(
      <li key={link.href}>
        <a style={{ fontFamily: "Agrandir Regular" }} className={linkClass} href={link.href}>
          {link.label}
        </a>
      </li>
    );
  }

  const mobileLinkItems = [];
  for (let i = 0; i < NAV_LINKS.length; i++) {
    const link = NAV_LINKS[i];
    mobileLinkItems.push(
      <li key={link.href}>
        <a
          style={{ fontFamily: "Agrandir Regular" }}
          className="text-white text-2xl"
          href={link.href}
          onClick={closeMenu}
        >
          {link.label}
        </a>
      </li>
    );
  }

  return (
    <>
      <header className={headerClass}>
        <div className="flex flex-row justify-between lg:justify-around items-center">
          <div className="flex items-center gap-2">
            <img className="w-9 h-9 lg:w-10 lg:h-10" src="/logo.png" alt="logo-img" />
            <h3 style={{ fontFamily: "Agrandir Regular" }} className={titleClass}>
              RentCar
            </h3>
          </div>

          <div className="hidden lg:flex items-center gap-[20px]">
            <ul className="flex flex-row gap-[20px] list-none no-underline">
              {desktopLinkItems}
            </ul>
          </div>

          <div className="hidden lg:flex items-center">
            <button style={{ fontFamily: "Agrandir Regular" }} className={buttonClass}>
              Get In Touch
            </button>
          </div>

          <button
            aria-label="Open menu"
            onClick={openMenu}
            className="flex lg:hidden flex-col justify-center items-center gap-[5px] w-9 h-9"
          >
            <span className={barClass}></span>
            <span className={barClass}></span>
            <span className={barClass}></span>
          </button>
        </div>
      </header>

      <div className={mobilePanelClass}>
        <div className="flex justify-between items-center px-5 py-4">
          <div className="flex items-center gap-2">
            <img className="w-9 h-9" src="/logo.png" alt="logo-img" />
            <h3 style={{ fontFamily: "Agrandir Regular" }} className="text-xl text-white font-bold leading-[21px]">
              RentCar
            </h3>
          </div>

          <button aria-label="Close menu" onClick={closeMenu} className="w-10 h-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-[calc(100%-88px)] gap-10 px-6">
          <ul className="flex flex-col items-center gap-8 list-none no-underline">
            {mobileLinkItems}
          </ul>

          <button
            style={{ fontFamily: "Agrandir Regular" }}
            className="text-white bg-transparent border border-white/40 px-8 py-3 rounded-full cursor-pointer"
            onClick={closeMenu}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;