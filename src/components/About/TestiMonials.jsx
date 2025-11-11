"use client";

import { getAllTestimonial } from "@/services/testimonialService";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const Testimonials = () => {
  const trackRef = useRef(null);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  // Auto-scrolling animation
  useEffect(() => {
    let offset = 0;
    let rafId;

    const animate = () => {
      offset -= 1;
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
        if (Math.abs(offset) >= trackRef.current.scrollWidth / 2) {
          offset = 0;
        }
      }
      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Fetch testimonials dynamically
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

  if (loading) {
    return <div className="text-center py-20 text-gray-600">Loading testimonials...</div>;
  }

  if (!testimonials.length) {
    return <div className="text-center py-20 text-gray-600">No testimonials found.</div>;
  }

  return (
    <div className="relative-block">
      <img
        src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673f17c40d432e9d17eb675a_Testimonial Bg.svg"
        loading="lazy"
        alt="Testimonials Background"
        className="about-b-testimonial-bg"
      />

      <section className="section">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="headline-about-b-testimonials text-center mb-10">
            <div className="text-h6">What our clients think</div>
            <div className="text-h3">Testimonials and client opinions</div>
          </div>
        </div>

        {/* Moving track */}
        <div className="master-moving-testimonials overflow-hidden">
          <div className="inside-moving-testimonial flex" ref={trackRef}>
            {[...testimonials, ...testimonials].map((item, idx) => (
            <div key={idx} className="single-moving-testimonial px-8">
  <div className="testimonial-move-tile bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
    <div className="bottom-testimonial-tile mb-4">
      <div className="quote w-embed text-blue-500 mb-4">
        <svg
          width="32"
          height="24"
          viewBox="0 0 59 43"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M58.67 11.87C57.99 5.43 52.49 0.32 45.87 0.02C38.08 -0.35 31.65 5.73 31.65 13.33C31.65 18.92 35.18 23.67 40.12 25.67L32.52 40.99C32.09 41.91 32.77 43 33.76 43H38.95C39.38 43 39.82 42.82 40.06 42.45L56.38 20.81C58.12 18.26 58.98 15.15 58.67 11.87Z" />
          <path d="M14.22 0.02C6.43 -0.35 0 5.73 0 13.33C0 18.92 3.52 23.67 8.47 25.67L0.87 40.99C0.43 41.91 1.11 43 2.1 43H7.3C7.73 43 8.16 42.82 8.41 42.45L24.73 20.81C26.46 18.32 27.33 15.22 26.95 11.93C26.27 5.43 20.77 0.32 14.22 0.02Z" />
        </svg>
      </div>

      <div className="text-h4 text-gray-800 font-medium mb-4">
        {expandedId === idx
          ? item.message
          : item.message.slice(0, 100) + (item.message.length > 100 ? "..." : "")}

        {item.message.length > 100 && (
          <button
            onClick={() =>
              setExpandedId(expandedId === idx ? null : idx)
            }
            className="text-blue-600 font-semibold ml-2 hover:underline"
          >
            {expandedId === idx ? "Read less" : "Read more"}
          </button>
        )}
      </div>

      {/* ⭐ RATING SECTION */}
      {item.rating && (
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, starIdx) => (
            <svg
              key={starIdx}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill={starIdx < item.rating ? "#FACC15" : "#E5E7EB"} // yellow-400 or gray-200
              className="w-5 h-5"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.964a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.377 2.455a1 1 0 00-.364 1.118l1.287 3.964c.3.921-.755 1.688-1.54 1.118l-3.376-2.455a1 1 0 00-1.175 0l-3.376 2.455c-.785.57-1.84-.197-1.54-1.118l1.287-3.964a1 1 0 00-.364-1.118L2.055 9.391c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.964z" />
            </svg>
          ))}
        </div>
      )}
    </div>

    <div className="author-wrap-testimonial flex items-center gap-4">
      {item.avatar ? (
        <img
          loading="lazy"
          src={item.avatar}
          alt={item.name}
          className="w-12 h-12 rounded-full object-cover"
        />
      ) : (
        <div
          className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold text-lg uppercase"
          aria-label={item.name}
        >
          {item.name?.charAt(0) || "U"}
        </div>
      )}

      <div className="author-name-wrap">
        <div className="testimonial-name font-semibold text-gray-900">
          {item.name}
        </div>
        {item.company && (
          <div className="author-position text-sm text-gray-500">
            {item.company}
          </div>
        )}
      </div>
    </div>
  </div>
</div>

            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;