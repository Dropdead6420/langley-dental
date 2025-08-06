'use client'
import AboutMain from '@/components/About/AboutMain'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import React from 'react'
const page = () => {
  const pathname = usePathname();
     useEffect(() => {
     const WOW = require("@/utils/wow");
     const wow = new WOW.default({
       animateClass: "animated",
       offset: 100,
       mobile: true,
       live: false,
     });
     wow.init();
   }, [pathname]);
  return (
    <>
    <AboutMain/>
    </>
  )
}

export default page
