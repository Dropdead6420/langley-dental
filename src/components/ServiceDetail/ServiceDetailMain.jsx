import React from 'react'
import HeroSection from './HeroSection'
import Content from './Content'

const ServiceDetailMain = ({treatment}) => {
  return (
    <>
      <HeroSection treatment={treatment}/>
      <Content treatment={treatment}/>
    </>
  )
}

export default ServiceDetailMain
