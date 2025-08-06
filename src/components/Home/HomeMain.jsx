import React from "react";
import HeroSection from "./HeroSection";
import CircleService from "./CircleService";
import AboutUs from "../AboutUs";
import Services from "./Services";
import ImageSwitcher from "./ImageSwitcher";

const HomeMain = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Services />
      <ImageSwitcher />
      <CircleService />
    </>
  );
};

export default HomeMain;
