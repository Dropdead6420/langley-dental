'use client'
import ContactMain from '@/components/Contact.jsx/ContactMain'
import React from 'react'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
const Page = () => {
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
     <ContactMain/> 
    </>
  )
}

export default Page
