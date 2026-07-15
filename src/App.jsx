import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";
import OurModels from "./components/OurModels";
import Testimonial from "./components/Testimonial";
import CarLoop from "./components/CarLoop";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatBtn from "./components/ChatBtn";

const App = () => {
  return (
    <div className="w-[100%] mx-auto">
      <Navbar />
      <ChatBtn />
       <Hero />
      <CarLoop />
      <AboutUs />
      <OurServices />
      <OurModels />
      <CarLoop />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
