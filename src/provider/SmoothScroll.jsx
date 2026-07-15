import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DESKTOP_QUERY = "(min-width: 768px)";
const SMOOTH_CLASS = "smooth-scroll";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const root = document.documentElement;
    const mq = window.matchMedia(DESKTOP_QUERY);

    const applyScrollBehavior = (isDesktop) => {
      root.classList.toggle(SMOOTH_CLASS, isDesktop);
    };

    applyScrollBehavior(mq.matches);

    const handleChange = (e) => {
      applyScrollBehavior(e.matches);
    };

    if (mq.addEventListener) {
      mq.addEventListener("change", handleChange);
    } else {
      // Safari support
      mq.addListener(handleChange);
    }

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", handleChange);
      } else {
        mq.removeListener(handleChange);
      }

      root.classList.remove(SMOOTH_CLASS);
    };
  }, []);

  return <>{children}</>;
}