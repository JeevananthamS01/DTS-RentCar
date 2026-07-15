import { useEffect, useRef, useState } from "react";

export const useSectionTheme = (position) => {
  const [theme, setTheme] = useState("light");
  const previousTheme = useRef("light");
  const ticking = useRef(false);

  useEffect(() => {
    let sections = [];

    const getViewportHeight = () =>
      window.visualViewport?.height || window.innerHeight;

    const updateSections = () => {
      sections = Array.from(
        document.querySelectorAll("section[data-theme]")
      );
    };

    const getTriggerY = () => {
      const vh = getViewportHeight();
      return position === "top" ? vh * 0.1 : vh * 0.9;
    };

    const detectTheme = () => {
      if (!sections.length) {
        updateSections();
        if (!sections.length) return;
      }

      const triggerY = getTriggerY();

      let foundTheme = null;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= triggerY && rect.bottom > triggerY) {
          const t = section.dataset.theme;
          if (t) foundTheme = t;
        }
      }

      if (foundTheme && foundTheme !== previousTheme.current) {
        previousTheme.current = foundTheme;
        setTheme(foundTheme);
      } else if (!foundTheme && previousTheme.current !== "light") {
        previousTheme.current = "light";
        setTheme("light");
      }
    };

    const rafDetect = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          detectTheme();
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    let resizeTimeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        updateSections();
        detectTheme();
      }, 150);
    };

    updateSections();
    detectTheme();

    const observer = new MutationObserver(() => {
      updateSections();
      detectTheme();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    window.addEventListener("scroll", rafDetect, { passive: true });
    window.addEventListener("touchmove", rafDetect, { passive: true });
    window.addEventListener("resize", handleResize);

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleResize);
      window.visualViewport.addEventListener("scroll", rafDetect);
    }

    return () => {
      clearTimeout(resizeTimeout);

      window.removeEventListener("scroll", rafDetect);
      window.removeEventListener("touchmove", rafDetect);
      window.removeEventListener("resize", handleResize);

      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleResize);
        window.visualViewport.removeEventListener("scroll", rafDetect);
      }

      observer.disconnect();
    };
  }, [position]);

  return theme;
};