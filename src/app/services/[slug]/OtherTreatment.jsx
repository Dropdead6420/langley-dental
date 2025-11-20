"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import treatments from "@/data/treatments";

const OtherTreatment = ({ slug, limit }) => {
  const items = (treatments || [])
    .filter((t) => t.slug !== slug)
    .slice(0, limit || treatments.length);

  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Attach DOM buttons to swiper once refs are available
  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper || !prevRef.current || !nextRef.current) return;

    // assign DOM elements
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;

    // (re)init navigation so Swiper picks up the new elements
    if (swiper.navigation) {
      swiper.navigation.destroy();
    }
    swiper.navigation.init();
    swiper.navigation.update();
  }, [swiperRef.current, prevRef.current, nextRef.current]);

  return (
    <section className="relative !py-20 !overflow-hidden select-none">
      <div className="absolute inset-0 !bg-gradient-to-br !from-blue-50 !via-cyan-50 !to-white" />

      <div className="relative !max-w-7xl !mx-auto !px-6">
        <h2 className="!text-center !tracking-tight !text-3xl md:!text-4xl !font-semibold !mb-12 !text-gray-800">
          Other Treatments
        </h2>

        <div className="cursor-pointer w-full">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            onBeforeInit={(swiper) => {
              // keep reference to swiper instance for useEffect
              swiperRef.current = swiper;
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className=""
          >
            {items.map((t) => (
              <SwiperSlide key={t.slug}>
                <Link
                  href={`/services/${t.slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="group/item !block !rounded-2xl !bg-white !shadow-md !overflow-hidden !transition-all hover:!shadow-2xl hover:!-translate-y-2"
                >
                  <div className="relative !h-60 !overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.title}
                      className="!object-cover !w-full !h-full !transition-transform !duration-700 group-hover/item:!scale-105"
                    />
                    <div className="absolute inset-0 !bg-gradient-to-t !from-sky-900/30 !to-transparent" />
                  </div>

                  <div className="!p-6">
                    <h3 className="!text-2xl !tracking-tight !font-semibold !text-gray-900 group-hover/item:!text-sky-700 !transition-colors">
                      {t.title}
                    </h3>
                    <p className="!text-gray-600 !text-base !leading-relaxed !line-clamp-3">
                      {t.description}
                    </p>
                    <div className="!mt-5 !flex !items-center !text-sky-600 !font-semibold group-hover/item:!text-sky-700 !transition-colors">
                      <span className="!mr-2">Learn More</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="!w-5 !h-5 group-hover/item:!translate-x-1 !transition-transform"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrows + Pagination */}
          <div className="!flex !justify-center !items-center !gap-6 !absolute !bottom-6 !left-1/2 -translate-x-1/2 -mb-20">
            {/* PREV BUTTON */}
            <button
              ref={prevRef}
              onClick={(e) => e.stopPropagation()}
              className="swiper-prev-btn !w-10 !h-10 !rounded-full !bg-white !shadow-md !flex !items-center !justify-center hover:!bg-sky-100 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="!w-5 !h-5 !text-sky-700">
                <path d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <div className="swiper-pagination !static !flex !gap-2 !justify-center" />

            {/* NEXT BUTTON */}
            <button
              ref={nextRef}
              onClick={(e) => e.stopPropagation()}
              className="swiper-next-btn !w-10 !h-10 !rounded-full !bg-white !shadow-md !flex !items-center !justify-center hover:!bg-sky-100 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="!w-5 !h-5 !text-sky-700">
                <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherTreatment;
