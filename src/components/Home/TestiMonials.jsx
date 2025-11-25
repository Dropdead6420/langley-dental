"use client";

import { getAllTestimonial } from "@/services/testimonialService";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const Testimonials = () => {
  const trackRef = useRef(null);
  // Use a ref for pausing to avoid re-rendering the component (which resets scroll position)
  const isPaused = useRef(false); 
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const fetchAllTestimonials = async () => {
    setLoading(true);
    try {
      const response = await getAllTestimonial();
      if (response.status || response.success) {
        setTestimonials(response.data || []);
      } else {
        toast.error(response.message || "Failed to fetch testimonials");
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      toast.error("Something went wrong while fetching testimonials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllTestimonials();
  }, []);

  // Infinite scroll animation logic
  useEffect(() => {
    // If loading or no items, the ref won't be in the DOM yet, so we exit.
    if (loading || testimonials.length === 0 || !trackRef.current) return;

    let offset = 0;
    let rafId;

    const animate = () => {
      // Only move if not paused
      if (!isPaused.current && trackRef.current) {
        offset -= 1.4; 
        
        const scrollWidth = trackRef.current.scrollWidth;
        const containerWidth = trackRef.current.offsetWidth; // Visible width
        
        // Apply the transform
        trackRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;

        // Reset logic: We duplicate the items, so the "real" content is half the total width.
        // Once we scroll past half the width, we reset to 0 to create the seamless loop.
        if (Math.abs(offset) >= scrollWidth / 2) {
          offset = 0;
        }
      }
      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(rafId);
    
    // CRITICAL FIX: Add [testimonials, loading] to dependencies. 
    // This ensures animation starts ONLY after data is loaded and div is rendered.
  }, [testimonials, loading]);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-500">
        Loading testimonials...
      </div>
    );
  }

  if (!testimonials.length) {
    return (
      <div className="py-20 text-center text-gray-500">
        No testimonials found.
      </div>
    );
  }

  // Duplicate items to create seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm !font-bold uppercase tracking-[0.25em] text-indigo-500">
            What our clients think
          </p>
          <h2 className="mt-3 text-3xl !font-bold !tracking-tight text-slate-900 sm:text-4xl">
            Testimonials & Client Opinions
          </h2>
          <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto">
            Real feedback from teams and individuals who’ve worked with us.
          </p>
        </div>
      </div>

      <div 
        className="relative mt-6 overflow-hidden"
        // Add hover handlers to pause scrolling
        onMouseEnter={() => (isPaused.current = true)}
        onMouseLeave={() => (isPaused.current = false)}
      >
        {/* Left / Right gradient fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-50 via-slate-50/95 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-50 via-slate-50/95 to-transparent" />

        <div
          ref={trackRef}
          className="flex gap-6 px-8 will-change-transform"
          aria-label="Scrolling testimonials"
        >
          {duplicatedTestimonials.map((item, idx) => {
            const message = item.message || "";
            const originalIndex = idx % testimonials.length;
            const baseId = item.id || item._id || originalIndex; 
            // Ensure unique key for duplicated items
            const cardId = `${baseId}-${idx}`;

            const isExpanded = expandedId === cardId;
            const isLong = message.length > 140;
            const displayedText =
              isExpanded || !isLong ? message : message.slice(0, 140) + "…";

            return (
              <article
                key={cardId}
                className="flex-shrink-0 w-[320px] sm:w-[360px] lg:w-[380px]"
              >
                <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white/90 px-6 py-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl">
                  <div className="flex-1">
                    <div className="mb-4 text-indigo-500">
                       {/* SVG Icon ... */}
                       <svg width="32" height="24" viewBox="0 0 59 43" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7">
                        <path d="M9.84257 42.5051C4.10368 42.5051 0 38.3813 0 32.6007C0 18.7213 10.1434 8.08782 24.4447 0L27.8057 4.35066C17.6112 11.6412 13.8081 17.0023 11.6055 25.4951C13.2073 26.0983 14.5087 26.3007 15.9103 26.3007C21.248 26.3007 25.0509 30.4245 25.0509 36.2051C25.0509 40.9318 22.2466 42.5051 9.84257 42.5051ZM42.7169 42.5051C36.978 42.5051 32.8744 38.3813 32.8744 32.6007C32.8744 18.7213 43.0179 8.08782 57.3191 0L60.6801 4.35066C50.4856 11.6412 46.6826 17.0023 44.48 25.4951C46.0818 26.0983 47.3832 26.3007 48.7848 26.3007C54.1226 26.3007 57.9254 30.4245 57.9254 36.2051C57.9254 40.9318 55.1211 42.5051 42.7169 42.5051Z" />
                      </svg>
                    </div>

                    <p className="mb-3 text-base leading-relaxed text-slate-800">
                      {displayedText}
                    </p>

                    {isLong && (
                      <button
                        type="button"
                        onClick={() => setExpandedId(isExpanded ? null : cardId)}
                        className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 hover:underline"
                      >
                        {isExpanded ? "Read less" : "Read more"}
                      </button>
                    )}

                    {item.rating && (
                      <div className="mt-4 flex items-center gap-1.5">
                        {[...Array(5)].map((_, starIdx) => {
                          const active = starIdx < item.rating;
                          return (
                            <svg
                              key={starIdx}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              className="h-5 w-5"
                              aria-hidden="true"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.176 0L7.115 16.283c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.48 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                fill={active ? "#FACC15" : "#E5E7EB"}
                              />
                            </svg>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                    {item.avatar ? (
                      <img
                        loading="lazy"
                        src={item.avatar}
                        alt={item.name}
                        className="h-11 w-11 rounded-full object-cover ring-2 ring-slate-100"
                      />
                    ) : (
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-500 text-sm font-semibold uppercase text-white ring-2 ring-indigo-100">
                        {item.name?.charAt(0) || "U"}
                      </div>
                    )}

                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-slate-900">
                        {item.name || "Unnamed client"}
                      </span>
                      {item.company && (
                        <span className="text-xs text-slate-500">
                          {item.company}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;