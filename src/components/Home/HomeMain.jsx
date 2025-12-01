import React from "react";
import HeroSection from "./HeroSection";
import CircleService from "./CircleService";
import AboutUs from "../AboutUs";
import Services from "./Services";
import ImageSwitcher from "./ImageSwitcher";
import WhyChoose from "./WhyChoose";
import Testimonials from "./TestiMonials";
import Gallery from "./Gallery";


const HomeMain = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Services />
      <WhyChoose />
      <ImageSwitcher />
      <Gallery />
      <Testimonials />
      <CircleService />
    </>
  );
};

export default HomeMain;
