'use client'
import HomeMain from "@/components/Home/HomeMain";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Home() {
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
   <HomeMain/>
   </>
  );
}
