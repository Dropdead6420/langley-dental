"use client";
import { useEffect, useRef } from "react";
const ClientLogo = () => {
      const marqueeRef = useRef(null);
  let offset = 0;

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      offset -= 0.1; // Adjust speed here
      if (offset <= -100) offset = 0;

      if (marqueeRef.current) {
        marqueeRef.current.style.transform = `translate3d(${offset}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        marqueeRef.current.style.transformStyle = 'preserve-3d';
        marqueeRef.current.style.willChange = 'transform';
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  return (
    <section className="section about-b-logo-section">
  <div className="master-marquees">
     (
    <div
      data-w-id="8f06eae9-5c5e-b467-6e86-ef78b0c6a7ca"
      className="marquee-text-wrap"
      ref={marqueeRef}
    >
      {[...Array(4)].map((_, i) => (
        <div className="single-text-marquee" key={i}>
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673e431f92a4e63d42fb21a8_Logo%20Company-2.svg"
            alt=""
            className="marquee-logo small"
          />
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673e431fa57cfea2214a9621_Logo%20Company-3.svg"
            alt=""
            className="marquee-logo small"
          />
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673e431f6d9a2df040cc427e_Logo%20Company-1.svg"
            alt=""
            className="marquee-logo"
          />
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673e431f6f96ad26b82135b7_Logo%20Company.svg"
            alt=""
            className="marquee-logo big"
          />
        </div>
      ))}
    </div>
    <div className="marquee-shadow-light left" />
    <div className="marquee-shadow-light" />
  </div>
</section>

  )
}

export default ClientLogo
