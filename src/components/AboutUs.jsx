"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative bg-gradient-to-r from-white via-sky-50 to-white py-16 px-6 sm:px-10 md:px-20">
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
          <h4 className="text-sm font-semibold tracking-widest jost-font uppercase text-blue-500">
            Welcome to richmond shine dental Office
          </h4>
          <h1 className="!text-4xl md:!text-5xl font-bold jost-font leading-tight text-slate-900">
           Dental care is our game. <br />
            <span className="text-blue-600">Excellence is our goal.</span>
          </h1>
          <p className="!text-base md:text-lg !mt-[20px] text-slate-600 !leading-relaxed">
            We are conveniently located in Surrey at the intersection of King George Blvd and 76th Ave in The King’s Cross Shopping Centre. We have a huge parking lot and it’s free at all the times. At Richmond Shine Dental our goal is to care for your teeth and help you maintain them.
          </p>
          <p className="!text-base md:text-lg text-slate-600 !leading-relaxed">
           Our brand new, state of the art dental office uses the latest technology for your dental treatment. We provide dental care for your whole family. Whether you are looking for regular checkup and cleanings, cosmetic dentistry or a specific concern,  you are always welcome.
          </p>

          <button className="!mt-4 px-6 py-3 rounded-xl bg-blue-700 !text-white text-sm font-semibold shadow-md hover:bg-blue-800 transition">
            Know More...
          </button>
        </div>
      </div>
    </section>
  );
}
