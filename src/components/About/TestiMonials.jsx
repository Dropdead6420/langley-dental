"use client";

import { useEffect, useRef } from "react";

const TestiMonials = () => {
    const trackRef = useRef(null);

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
  return (
    <div className="relative-block">
      <img
        src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673f17c40d432e9d17eb675a_Testimonial Bg.svg"
        loading="lazy"
        alt
        className="about-b-testimonial-bg"
      />
      <section className="section">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="headline-about-b-testimonials">
            <div className="text-h6">What our clients think</div>
            <div className="text-h3">Testimonials and clients opinions</div>
          </div>
        </div>
        <div className="master-moving-testimonials">
          <div
            data-w-id="d61d26f5-5349-b303-69ef-e65252e0105b"
            className="inside-moving-testimonial"
            ref={trackRef}
          >
            <div className="single-moving-testimonial">
              <div className="testimonial-move-tile">
                <div className="bottom-testimonial-tile">
                  <div className="quote w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 59 43"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58.6715 11.8712C57.9915 5.42664 52.4891 0.319591 45.8739 0.0155999C38.084 -0.349189 31.6543 5.73061 31.6543 13.3304C31.6543 18.9238 35.1783 23.6661 40.1242 25.6724L32.5198 40.9936C32.087 41.9055 32.7671 42.9999 33.7563 42.9999H38.9496C39.3823 42.9999 39.8151 42.8175 40.0624 42.4527L56.384 20.8086C58.1151 18.2551 58.9807 15.1543 58.6715 11.8712Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.2196 0.0155999C6.42973 -0.349189 0 5.73061 0 13.3304C0 18.9238 3.52399 23.6661 8.46994 25.6724L0.865556 40.9936C0.432785 41.9055 1.11285 42.9999 2.10204 42.9999H7.29526C7.72803 42.9999 8.1608 42.8175 8.40809 42.4527L24.7297 20.8086C26.4608 18.3159 27.3263 15.2151 26.9554 11.932C26.2753 5.42662 20.773 0.319591 14.2196 0.0155999Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="text-h4">
                    The team here is incredible—so friendly and professional.
                  </div>
                </div>
                <div className="author-wrap-testimonial">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673e319e8531296c96302d65_Author (1).webp"
                    alt
                    className="image-person-testimonial-tile"
                  />
                  <div className="author-name-wrap">
                    <div className="testimonial-name">Alexander Bennett</div>
                    <div className="author-position">Misrosoft</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-move-tile lower-testimonial">
                <div className="bottom-testimonial-tile">
                  <div className="quote w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 59 43"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58.6715 11.8712C57.9915 5.42664 52.4891 0.319591 45.8739 0.0155999C38.084 -0.349189 31.6543 5.73061 31.6543 13.3304C31.6543 18.9238 35.1783 23.6661 40.1242 25.6724L32.5198 40.9936C32.087 41.9055 32.7671 42.9999 33.7563 42.9999H38.9496C39.3823 42.9999 39.8151 42.8175 40.0624 42.4527L56.384 20.8086C58.1151 18.2551 58.9807 15.1543 58.6715 11.8712Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.2196 0.0155999C6.42973 -0.349189 0 5.73061 0 13.3304C0 18.9238 3.52399 23.6661 8.46994 25.6724L0.865556 40.9936C0.432785 41.9055 1.11285 42.9999 2.10204 42.9999H7.29526C7.72803 42.9999 8.1608 42.8175 8.40809 42.4527L24.7297 20.8086C26.4608 18.3159 27.3263 15.2151 26.9554 11.932C26.2753 5.42662 20.773 0.319591 14.2196 0.0155999Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="text-h4">
                    Thanks to their gentle, effective treatment, my smile has
                    never looked better!
                  </div>
                </div>
                <div className="author-wrap-testimonial">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673e319e8531296c96302d65_Author (1).webp"
                    alt
                    className="image-person-testimonial-tile"
                  />
                  <div className="author-name-wrap">
                    <div className="testimonial-name">Alexander Bennett</div>
                    <div className="author-position">Misrosoft</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-move-tile">
                <div className="bottom-testimonial-tile">
                  <div className="quote w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 59 43"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58.6715 11.8712C57.9915 5.42664 52.4891 0.319591 45.8739 0.0155999C38.084 -0.349189 31.6543 5.73061 31.6543 13.3304C31.6543 18.9238 35.1783 23.6661 40.1242 25.6724L32.5198 40.9936C32.087 41.9055 32.7671 42.9999 33.7563 42.9999H38.9496C39.3823 42.9999 39.8151 42.8175 40.0624 42.4527L56.384 20.8086C58.1151 18.2551 58.9807 15.1543 58.6715 11.8712Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.2196 0.0155999C6.42973 -0.349189 0 5.73061 0 13.3304C0 18.9238 3.52399 23.6661 8.46994 25.6724L0.865556 40.9936C0.432785 41.9055 1.11285 42.9999 2.10204 42.9999H7.29526C7.72803 42.9999 8.1608 42.8175 8.40809 42.4527L24.7297 20.8086C26.4608 18.3159 27.3263 15.2151 26.9554 11.932C26.2753 5.42662 20.773 0.319591 14.2196 0.0155999Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="text-h4">
                    The team here is incredible—so friendly and professional.
                  </div>
                </div>
                <div className="author-wrap-testimonial">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673e319e8531296c96302d65_Author (1).webp"
                    alt
                    className="image-person-testimonial-tile"
                  />
                  <div className="author-name-wrap">
                    <div className="testimonial-name">Alexander Bennett</div>
                    <div className="author-position">Misrosoft</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-move-tile lower-testimonial">
                <div className="bottom-testimonial-tile">
                  <div className="quote w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 59 43"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58.6715 11.8712C57.9915 5.42664 52.4891 0.319591 45.8739 0.0155999C38.084 -0.349189 31.6543 5.73061 31.6543 13.3304C31.6543 18.9238 35.1783 23.6661 40.1242 25.6724L32.5198 40.9936C32.087 41.9055 32.7671 42.9999 33.7563 42.9999H38.9496C39.3823 42.9999 39.8151 42.8175 40.0624 42.4527L56.384 20.8086C58.1151 18.2551 58.9807 15.1543 58.6715 11.8712Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.2196 0.0155999C6.42973 -0.349189 0 5.73061 0 13.3304C0 18.9238 3.52399 23.6661 8.46994 25.6724L0.865556 40.9936C0.432785 41.9055 1.11285 42.9999 2.10204 42.9999H7.29526C7.72803 42.9999 8.1608 42.8175 8.40809 42.4527L24.7297 20.8086C26.4608 18.3159 27.3263 15.2151 26.9554 11.932C26.2753 5.42662 20.773 0.319591 14.2196 0.0155999Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="text-h4">
                    I’ve never felt more comfortable at a dentist.
                  </div>
                </div>
                <div className="author-wrap-testimonial">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673e319e8531296c96302d65_Author (1).webp"
                    alt
                    className="image-person-testimonial-tile"
                  />
                  <div className="author-name-wrap">
                    <div className="testimonial-name">Alexander Bennett</div>
                    <div className="author-position">Misrosoft</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-moving-testimonial">
              <div className="testimonial-move-tile">
                <div className="bottom-testimonial-tile">
                  <div className="quote w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 59 43"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58.6715 11.8712C57.9915 5.42664 52.4891 0.319591 45.8739 0.0155999C38.084 -0.349189 31.6543 5.73061 31.6543 13.3304C31.6543 18.9238 35.1783 23.6661 40.1242 25.6724L32.5198 40.9936C32.087 41.9055 32.7671 42.9999 33.7563 42.9999H38.9496C39.3823 42.9999 39.8151 42.8175 40.0624 42.4527L56.384 20.8086C58.1151 18.2551 58.9807 15.1543 58.6715 11.8712Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.2196 0.0155999C6.42973 -0.349189 0 5.73061 0 13.3304C0 18.9238 3.52399 23.6661 8.46994 25.6724L0.865556 40.9936C0.432785 41.9055 1.11285 42.9999 2.10204 42.9999H7.29526C7.72803 42.9999 8.1608 42.8175 8.40809 42.4527L24.7297 20.8086C26.4608 18.3159 27.3263 15.2151 26.9554 11.932C26.2753 5.42662 20.773 0.319591 14.2196 0.0155999Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="text-h4">
                    The team here is incredible—so friendly and professional.
                  </div>
                </div>
                <div className="author-wrap-testimonial">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673e319e8531296c96302d65_Author (1).webp"
                    alt
                    className="image-person-testimonial-tile"
                  />
                  <div className="author-name-wrap">
                    <div className="testimonial-name">Alexander Bennett</div>
                    <div className="author-position">Misrosoft</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-move-tile lower-testimonial">
                <div className="bottom-testimonial-tile">
                  <div className="quote w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 59 43"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58.6715 11.8712C57.9915 5.42664 52.4891 0.319591 45.8739 0.0155999C38.084 -0.349189 31.6543 5.73061 31.6543 13.3304C31.6543 18.9238 35.1783 23.6661 40.1242 25.6724L32.5198 40.9936C32.087 41.9055 32.7671 42.9999 33.7563 42.9999H38.9496C39.3823 42.9999 39.8151 42.8175 40.0624 42.4527L56.384 20.8086C58.1151 18.2551 58.9807 15.1543 58.6715 11.8712Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.2196 0.0155999C6.42973 -0.349189 0 5.73061 0 13.3304C0 18.9238 3.52399 23.6661 8.46994 25.6724L0.865556 40.9936C0.432785 41.9055 1.11285 42.9999 2.10204 42.9999H7.29526C7.72803 42.9999 8.1608 42.8175 8.40809 42.4527L24.7297 20.8086C26.4608 18.3159 27.3263 15.2151 26.9554 11.932C26.2753 5.42662 20.773 0.319591 14.2196 0.0155999Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="text-h4">
                    Thanks to their gentle, effective treatment, my smile has
                    never looked better!
                  </div>
                </div>
                <div className="author-wrap-testimonial">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673e319e8531296c96302d65_Author (1).webp"
                    alt
                    className="image-person-testimonial-tile"
                  />
                  <div className="author-name-wrap">
                    <div className="testimonial-name">Alexander Bennett</div>
                    <div className="author-position">Misrosoft</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-move-tile">
                <div className="bottom-testimonial-tile">
                  <div className="quote w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 59 43"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58.6715 11.8712C57.9915 5.42664 52.4891 0.319591 45.8739 0.0155999C38.084 -0.349189 31.6543 5.73061 31.6543 13.3304C31.6543 18.9238 35.1783 23.6661 40.1242 25.6724L32.5198 40.9936C32.087 41.9055 32.7671 42.9999 33.7563 42.9999H38.9496C39.3823 42.9999 39.8151 42.8175 40.0624 42.4527L56.384 20.8086C58.1151 18.2551 58.9807 15.1543 58.6715 11.8712Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.2196 0.0155999C6.42973 -0.349189 0 5.73061 0 13.3304C0 18.9238 3.52399 23.6661 8.46994 25.6724L0.865556 40.9936C0.432785 41.9055 1.11285 42.9999 2.10204 42.9999H7.29526C7.72803 42.9999 8.1608 42.8175 8.40809 42.4527L24.7297 20.8086C26.4608 18.3159 27.3263 15.2151 26.9554 11.932C26.2753 5.42662 20.773 0.319591 14.2196 0.0155999Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="text-h4">
                    The team here is incredible—so friendly and professional.
                  </div>
                </div>
                <div className="author-wrap-testimonial">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673e319e8531296c96302d65_Author (1).webp"
                    alt
                    className="image-person-testimonial-tile"
                  />
                  <div className="author-name-wrap">
                    <div className="testimonial-name">Alexander Bennett</div>
                    <div className="author-position">Misrosoft</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-move-tile lower-testimonial">
                <div className="bottom-testimonial-tile">
                  <div className="quote w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 59 43"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58.6715 11.8712C57.9915 5.42664 52.4891 0.319591 45.8739 0.0155999C38.084 -0.349189 31.6543 5.73061 31.6543 13.3304C31.6543 18.9238 35.1783 23.6661 40.1242 25.6724L32.5198 40.9936C32.087 41.9055 32.7671 42.9999 33.7563 42.9999H38.9496C39.3823 42.9999 39.8151 42.8175 40.0624 42.4527L56.384 20.8086C58.1151 18.2551 58.9807 15.1543 58.6715 11.8712Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.2196 0.0155999C6.42973 -0.349189 0 5.73061 0 13.3304C0 18.9238 3.52399 23.6661 8.46994 25.6724L0.865556 40.9936C0.432785 41.9055 1.11285 42.9999 2.10204 42.9999H7.29526C7.72803 42.9999 8.1608 42.8175 8.40809 42.4527L24.7297 20.8086C26.4608 18.3159 27.3263 15.2151 26.9554 11.932C26.2753 5.42662 20.773 0.319591 14.2196 0.0155999Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="text-h4">
                    I’ve never felt more comfortable at a dentist.
                  </div>
                </div>
                <div className="author-wrap-testimonial">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673e319e8531296c96302d65_Author (1).webp"
                    alt
                    className="image-person-testimonial-tile"
                  />
                  <div className="author-name-wrap">
                    <div className="testimonial-name">Alexander Bennett</div>
                    <div className="author-position">Misrosoft</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-moving-testimonial">
              <div className="testimonial-move-tile">
                <div className="bottom-testimonial-tile">
                  <div className="quote w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 59 43"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58.6715 11.8712C57.9915 5.42664 52.4891 0.319591 45.8739 0.0155999C38.084 -0.349189 31.6543 5.73061 31.6543 13.3304C31.6543 18.9238 35.1783 23.6661 40.1242 25.6724L32.5198 40.9936C32.087 41.9055 32.7671 42.9999 33.7563 42.9999H38.9496C39.3823 42.9999 39.8151 42.8175 40.0624 42.4527L56.384 20.8086C58.1151 18.2551 58.9807 15.1543 58.6715 11.8712Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.2196 0.0155999C6.42973 -0.349189 0 5.73061 0 13.3304C0 18.9238 3.52399 23.6661 8.46994 25.6724L0.865556 40.9936C0.432785 41.9055 1.11285 42.9999 2.10204 42.9999H7.29526C7.72803 42.9999 8.1608 42.8175 8.40809 42.4527L24.7297 20.8086C26.4608 18.3159 27.3263 15.2151 26.9554 11.932C26.2753 5.42662 20.773 0.319591 14.2196 0.0155999Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="text-h4">
                    The team here is incredible—so friendly and professional.
                  </div>
                </div>
                <div className="author-wrap-testimonial">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673e319e8531296c96302d65_Author (1).webp"
                    alt
                    className="image-person-testimonial-tile"
                  />
                  <div className="author-name-wrap">
                    <div className="testimonial-name">Alexander Bennett</div>
                    <div className="author-position">Misrosoft</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-move-tile lower-testimonial">
                <div className="bottom-testimonial-tile">
                  <div className="quote w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 59 43"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58.6715 11.8712C57.9915 5.42664 52.4891 0.319591 45.8739 0.0155999C38.084 -0.349189 31.6543 5.73061 31.6543 13.3304C31.6543 18.9238 35.1783 23.6661 40.1242 25.6724L32.5198 40.9936C32.087 41.9055 32.7671 42.9999 33.7563 42.9999H38.9496C39.3823 42.9999 39.8151 42.8175 40.0624 42.4527L56.384 20.8086C58.1151 18.2551 58.9807 15.1543 58.6715 11.8712Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.2196 0.0155999C6.42973 -0.349189 0 5.73061 0 13.3304C0 18.9238 3.52399 23.6661 8.46994 25.6724L0.865556 40.9936C0.432785 41.9055 1.11285 42.9999 2.10204 42.9999H7.29526C7.72803 42.9999 8.1608 42.8175 8.40809 42.4527L24.7297 20.8086C26.4608 18.3159 27.3263 15.2151 26.9554 11.932C26.2753 5.42662 20.773 0.319591 14.2196 0.0155999Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="text-h4">
                    Thanks to their gentle, effective treatment, my smile has
                    never looked better!
                  </div>
                </div>
                <div className="author-wrap-testimonial">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673e319e8531296c96302d65_Author (1).webp"
                    alt
                    className="image-person-testimonial-tile"
                  />
                  <div className="author-name-wrap">
                    <div className="testimonial-name">Alexander Bennett</div>
                    <div className="author-position">Misrosoft</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-move-tile">
                <div className="bottom-testimonial-tile">
                  <div className="quote w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 59 43"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58.6715 11.8712C57.9915 5.42664 52.4891 0.319591 45.8739 0.0155999C38.084 -0.349189 31.6543 5.73061 31.6543 13.3304C31.6543 18.9238 35.1783 23.6661 40.1242 25.6724L32.5198 40.9936C32.087 41.9055 32.7671 42.9999 33.7563 42.9999H38.9496C39.3823 42.9999 39.8151 42.8175 40.0624 42.4527L56.384 20.8086C58.1151 18.2551 58.9807 15.1543 58.6715 11.8712Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.2196 0.0155999C6.42973 -0.349189 0 5.73061 0 13.3304C0 18.9238 3.52399 23.6661 8.46994 25.6724L0.865556 40.9936C0.432785 41.9055 1.11285 42.9999 2.10204 42.9999H7.29526C7.72803 42.9999 8.1608 42.8175 8.40809 42.4527L24.7297 20.8086C26.4608 18.3159 27.3263 15.2151 26.9554 11.932C26.2753 5.42662 20.773 0.319591 14.2196 0.0155999Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="text-h4">
                    The team here is incredible—so friendly and professional.
                  </div>
                </div>
                <div className="author-wrap-testimonial">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673e319e8531296c96302d65_Author (1).webp"
                    alt
                    className="image-person-testimonial-tile"
                  />
                  <div className="author-name-wrap">
                    <div className="testimonial-name">Alexander Bennett</div>
                    <div className="author-position">Misrosoft</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-move-tile lower-testimonial">
                <div className="bottom-testimonial-tile">
                  <div className="quote w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 59 43"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58.6715 11.8712C57.9915 5.42664 52.4891 0.319591 45.8739 0.0155999C38.084 -0.349189 31.6543 5.73061 31.6543 13.3304C31.6543 18.9238 35.1783 23.6661 40.1242 25.6724L32.5198 40.9936C32.087 41.9055 32.7671 42.9999 33.7563 42.9999H38.9496C39.3823 42.9999 39.8151 42.8175 40.0624 42.4527L56.384 20.8086C58.1151 18.2551 58.9807 15.1543 58.6715 11.8712Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14.2196 0.0155999C6.42973 -0.349189 0 5.73061 0 13.3304C0 18.9238 3.52399 23.6661 8.46994 25.6724L0.865556 40.9936C0.432785 41.9055 1.11285 42.9999 2.10204 42.9999H7.29526C7.72803 42.9999 8.1608 42.8175 8.40809 42.4527L24.7297 20.8086C26.4608 18.3159 27.3263 15.2151 26.9554 11.932C26.2753 5.42662 20.773 0.319591 14.2196 0.0155999Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="text-h4">
                    I’ve never felt more comfortable at a dentist.
                  </div>
                </div>
                <div className="author-wrap-testimonial">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673e319e8531296c96302d65_Author (1).webp"
                    alt
                    className="image-person-testimonial-tile"
                  />
                  <div className="author-name-wrap">
                    <div className="testimonial-name">Alexander Bennett</div>
                    <div className="author-position">Misrosoft</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestiMonials;
