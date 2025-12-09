"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutUs() {
  const [open,setOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname)
  return (
    <section className="relative bg-gradient-to-r from-white via-sky-50 to-white py-16 px-6 sm:px-10 md:px-20 z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="overflow-hidden rounded-2xl shadow-xl max-h-[600px]">
          <Image
            src="/assets/images/satpreet-singh.png" // replace with actual image in /public folder
            alt="Dental Care"
            width={700}
            height={500}
            className="object-cover w-full h-full bg-[linear-gradient(180deg,_#e8e1da,_#f7f4f1)]"
          />
        </div>

        {/* Right Content */}
        <div className="text-slate-800 space-y-6 wow fadeInUp">
          <h4 className="text-sm font-semibold !tracking-tight !jost-font uppercase text-blue-500">
            Welcome to Langley  dental Office
          </h4>
          <h1 className="!text-4xl md:!text-5xl font-bold !jost-font !tracking-tight text-slate-900">
           {/* Dental care is our game. <br /> */}
            <span className="text-blue-600">Excellence is our goal.</span>
          </h1>
          <p className="!text-base md:text-lg !mt-[20px] text-slate-600 !leading-relaxed">
           We are conveniently located in 20654 Fraser Hwy Unit #1, Langley, BC V3A 4G5, Canada. We have a huge parking lot and it’s free at all the times. At Langley Dental our goal is to care for your teeth and help you maintain them.
          </p>
          {open && (
          <p className="!text-base md:text-lg text-slate-600 !leading-relaxed">
           Our brand new, state of the art dental office uses the latest technology for your dental treatment. We provide dental care for your whole family. Whether you are looking for regular checkup and cleanings, cosmetic dentistry or a specific concern,  you are always welcome.
          </p>
          )}
          {pathname === '/' ? (
           <Link href="/about" className="!mt-6 px-6 py-3 rounded-xl !bg-blue-700 !text-white text-sm !font-semibold shadow-md hover:bg-blue-800 transition">
            {open ? 'read less':'read more'} 
          </Link>
          ):(
          <button onClick={()=>setOpen(!open)} className="!mt-6 px-6 py-3 rounded-xl !bg-blue-700 !text-white text-sm !font-semibold shadow-md hover:bg-blue-800 transition">
            {open ? 'read less':'read more'} 
          </button>
          )}
        </div>
      </div>
    </section>
  );
}
