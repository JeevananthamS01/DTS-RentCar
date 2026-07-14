import { useState, useEffect } from 'react';
import LogoLoop from '../lib/LogoLoop';
import logo1 from '../assets/logoLoopImages/logo1.png';
import logo2 from '../assets/logoLoopImages/logo2.png';
import logo3 from '../assets/logoLoopImages/logo3.png';
import logo4 from '../assets/logoLoopImages/logo4.png';
import logo5 from '../assets/logoLoopImages/logo5.png';
import logo6 from '../assets/logoLoopImages/logo6.png';

// image sources
const imageLogos = [
  { src: logo1, alt: "Company 1", width: 100, height: 100 },
  { src: logo2, alt: "Company 2", width: 100, height: 100 },
  { src: logo3, alt: "Company 3", width: 100, height: 100 },
  { src: logo4, alt: "Company 1", width: 100, height: 100 },
  { src: logo5, alt: "Company 2", width: 100, height: 100 },
  { src: logo6, alt: "Company 3", width: 100, height: 100 },
];

function CarLoop() {
  const [logoHeight, setLogoHeight] = useState(60);
  const [gap, setGap] = useState(60);
  const [containerHeight, setContainerHeight] = useState("30vh");

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setLogoHeight(40);
        setGap(40);
        setContainerHeight("20vh");
      } else if (width < 1024) {
        setLogoHeight(50);
        setGap(50);
        setContainerHeight("25vh");
      } else {
        setLogoHeight(60);
        setGap(60);
        setContainerHeight("30vh");
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      data-theme="light"
      style={{
        position: 'relative',
        overflow: 'hidden',
        height: containerHeight,
      }}
      className="mt-2 md:mt-4 flex items-center justify-center"
    >
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={imageLogos}
        speed={100}
        direction="left"
        logoHeight={logoHeight}
        gap={gap}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}

export default CarLoop;