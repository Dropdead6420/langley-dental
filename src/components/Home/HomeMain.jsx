import React from "react";
import HeroSection from "./HeroSection";
import CircleService from "./CircleService";
import Header from "./Header";
import AboutUs from "../AboutUs";
import Services from "./Services";
import Footer from "./Footer";
import ImageSwitcher from "./ImageSwitcher";

const HomeMain = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <ImageSwitcher />
      <CircleService />
      <Footer />
    </>
  );
};

export default HomeMain;
