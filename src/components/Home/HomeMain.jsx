import React from 'react'
import HeroSection from './HeroSection'
import CircleService from './CircleService'
import Header from './Header'
import AboutUs from '../AboutUs'
import Services from './Services'
import Footer from './Footer'

const HomeMain = () => {
  return (
    <>
    <Header/>
     <HeroSection/>
        <AboutUs/>
        <Services/>
     <CircleService/> 
    <Footer/>
    </>
  )
}

export default HomeMain
