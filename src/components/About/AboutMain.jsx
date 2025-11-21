import React from 'react'
import HeroSection from './HeroSection'
import ClientLogo from './ClientLogo'
import AboutImages from './AboutImages'
import Team from './Team'
import Testimonials from './TestiMonials'
import AboutCta from './AboutCta'
import AboutUs from '../AboutUs'
import TeamTwo from './TeamTwo'

const AboutMain = () => {
  return (
    <>
      <HeroSection/>
      {/* <AboutUs/> */}
      <ClientLogo/>
      <AboutImages/>
      {/* <Team/> */}
      <TeamTwo />
      <Testimonials/>
      <AboutCta/>
    </>
  )
}

export default AboutMain
