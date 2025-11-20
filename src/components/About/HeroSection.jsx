import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useContactModal } from "../ContactModal";

const HeroSection = () => {
    const { setOpen: setModalOpen } = useContactModal();
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    
  return (
    <section className="section hero-about-b bg-white">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="w-layout-grid about-b-halves">
          <div
            id="w-node-_7af2ecb0-467a-dc63-8308-2d92ed7e6bce-e7a94e1c"
            className="about-b-left-wrap"
          >
            <div className="about-b-top-tile">
              {/* Your styled content block */}
               {/* Book Appointment Button */}
              <Link
                data-w-id="8d385fbb-a80a-30a7-a60b-8da8d45883c1"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setModalOpen(true);
                }}
                className="rating w-inline-block mt-8"
              >
                <div className="rating-icon-wrap">
                  <div className="icon-rating w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 18 18"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 0C4.02943 0 0 4.02943 0 9C4.97056 9 9 4.97056 9 0Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9 18C13.9706 18 18 13.9706 18 9C13.0294 9 9 13.0294 9 18Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9 0C13.9706 0 18 4.02943 18 9C13.0294 9 9 4.97056 9 0Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9 18C4.02943 18 -4.3454e-07 13.9706 0 9C4.97056 9 9 13.0294 9 18Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-body">
                  <span className="text-underline">
                    <strong>Book An Appointment</strong>
                  </span>&nbsp;
                </div>
              </Link>
              <div className="text-slate-800 space-y-6 wow fadeInUp text-left">
  <h4 className="text-sm font-semibold !tracking-tight !jost-font uppercase text-blue-500 text-left">
    Welcome to Langley dental Office
  </h4>
  <h1 className="!text-4xl md:!text-5xl font-bold !jost-font !tracking-tight text-slate-900 text-left">
    Dental care is our game. <br />
    <span className="text-blue-600">Excellence is our goal.</span>
  </h1>
  <p className="!text-base md:text-lg !mt-[20px] text-slate-600 !leading-relaxed text-left">
    We are conveniently located in 20654 Fraser Hwy Unit #1, Langley, BC V3A 4G5, Canada. We have a huge parking lot and it's free at all the times. At Langley Dental our goal is to care for your teeth and help you maintain them.
  </p>
  {open && (
    <p className="!text-base md:text-lg text-slate-600 !leading-relaxed text-left">
      Our brand new, state of the art dental office uses the latest technology for your dental treatment. We provide dental care for your whole family. Whether you are looking for regular checkup and cleanings, cosmetic dentistry or a specific concern, you are always welcome.
    </p>
  )}
  <div className="text-left">
    {pathname === '/' ? (
      <Link href="/about" className="!mt-6 px-6 py-3 rounded-xl !bg-blue-700 !text-white text-sm !font-semibold shadow-md hover:bg-blue-800 transition inline-block">
        {open ? 'Read less':'Read more'} 
      </Link>
    ) : (
      <button onClick={() => setOpen(!open)} className="!mt-6 px-6 py-3 rounded-xl !bg-blue-700 !text-white text-sm !font-semibold shadow-md hover:bg-blue-800 transition">
        {open ? 'Read less':'Read more'} 
      </button>
    )}
  </div>
</div>         
            </div>      
            <div
              data-w-id="d41ad41b-7a20-8ec4-ff1a-a7a278df708a"
              className="reviews-wrap"
            >
              <div className="reviews-tile">
                <div className="reviews-avatars">
                  {/* Avatar images commented out */}
                </div>
                {/* Reviews text commented out */}
              </div>
            </div>
          </div>
          
          <div
            id="w-node-_4cf8bb86-9227-e7ce-5150-2b2fa1902cb4-e7a94e1c"
            className="about-b-image-wrap"
          >
            <img
              src="/assets/images/satpreet-singh.png"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 87vw, 576px"
              alt={"image"}
             className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      <img
        src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673b7b2a900da25c704cf634_Gradient Left.svg"
        loading="lazy"
        alt={"image"}
        className="hero-gradient-left"
      />
    </section>
  );
};

export default HeroSection;