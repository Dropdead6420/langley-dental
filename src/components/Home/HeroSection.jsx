"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { getHeroSliders } from "@/services/herosectionServices";
import { useContactModal } from "../ContactModal";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const rootRef = useRef(null);
   const { setOpen } = useContactModal();

  useEffect(() => {
    const fetchSlider = async () => {
      try {
        const res = await getHeroSliders(); 
        if (res?.status) {
            setVideoUrl(res?.data[0].media?.url);
        }
      } catch (err) {
        console.error("Failed to fetch hero slider:", err);
      }
    };
    fetchSlider();
  }, []);

  useEffect(() => {
    // Scope animations to this component only
    const ctx = gsap.context(() => {
      const triggerEl = ".master-home-a-video";

      gsap.to(".master-home-a-video", {
        height: "100vh",
        scrollTrigger: {
          id: "hero-height",
          trigger: triggerEl,
          start: "top center",
          end: "bottom 20%",
          scrub: true,
        },
      });

      gsap.to(".video-wrap-home-a", {
        width: "100%",
        scrollTrigger: {
          id: "hero-width",
          trigger: triggerEl,
          start: "top center",
          end: "bottom 20%",
          scrub: true,
        },
      });

      gsap.to(".video-wrap-home-a", {
        borderRadius: "16px",
        scrollTrigger: {
          id: "hero-radius",
          trigger: triggerEl,
          start: "top center",
          end: "bottom 20%",
          scrub: true,
        },
      });
    }, rootRef);

    // recalc positions after layout
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);
console.log("video url",videoUrl)

  return (
    <>
      <section ref={rootRef} className="section hero-home-a relative bg-white">
        <div className="w-layout-blockcontainer main-container w-container !z-10">
          <div className="headline-home-a wow fadeInDown">
            <h1
              animate="title-load"
              data-w-id="990f4d2a-aa43-8599-8f58-cd49eb32e899"
              style={{ opacity: 1, filter: "blur(0px)" }}
            >
              Where Innovative Teams Shape Healthier Smiles
            </h1>
            <div
              data-w-id="2cdbe5e4-a7ca-0107-f8a5-c243ac3b1515"
              style={{ opacity: 1 }}
              className="home-a-tag-1"
            >
              <div className="label-master yellow">
                <div className="label-small">patient-first</div>
              </div>
            </div>
            <div
              data-w-id="32404e60-066b-42cb-b640-5172384fdead"
              style={{ opacity: 1 }}
              className="home-a-tag-2"
            >
              <div className="label-master accent-1">
                <div className="label-small">outcomes focused</div>
              </div>
            </div>
            <div
              data-w-id="cf01d814-8b05-616d-952d-fe9b44a5e7d8"
              style={{ opacity: 1 }}
              className="home-a-tag-3"
            >
              <div className="label-master light">
                <div className="label-small"> smile</div>
              </div>
            </div>
             <button   onClick={() => setOpen(true)} class="relative !mx-auto inline-flex items-center justify-center !mt-4 px-8 !py-3 overflow-hidden text-lg font-semibold !text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
  <span class="relative z-10">Book an Appointment</span>
  <span class="absolute inset-0 bg-gradient-to-r from-blue-400 to-sky-500 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></span>
</button>
          </div>
         

        </div>

        <div
          className="master-home-a-video"
          style={{ willChange: "width, height", width: "100%", height: "50vh" }}
        >
          <div
            tr-scrollflip-element="origin"
            className="video-wrap-home-a"
            style={{
              willChange: "width, height",
              width: "80%",
              height: "100%",
            }}
          >
            <div className="video-home-a w-background-video-2 w-background-video-atom">
  <video
    id="hero-video"
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="w-full h-full object-cover"
    crossOrigin="anonymous"
  >
    {videoUrl && <source src={videoUrl} type="video/mp4" />}
    Your browser does not support the video tag.
  </video>
</div>

          </div>
        </div>

        <div className="w-layout-blockcontainer main-container w-container z-10">
          <div className="home-a-bottom-tile">
            <div className="text-dark-88">
              A system for brands to feel as good as they look.
            </div>
            <div className="button-wrap-home-a">
              <a
                href="https://byq.studio"
                data-wf--cta-main--variant="base"
                className="cta-main w-inline-block"
              >
                <div button-text className="button-text-mask">
                  <div className="button-text _1">Get template</div>
                  <div className="button-text _2" style={{ opacity: 0 }}>
                    Get template
                  </div>
                </div>
                <div button-bg className="button-bg" />
              </a>
              <a
                href="/about/about-a"
                data-wf--cta-main--variant="bg-2"
                className="cta-main w-variant-a1840c4f-2b79-2581-2891-0be2f69320c9 w-inline-block"
              >
                <div button-text className="button-text-mask">
                  <div className="button-text _1">explore</div>
                  <div className="button-text _2" style={{ opacity: 0 }}>
                    explore
                  </div>
                </div>
                <div button-bg className="button-bg w-variant-a1840c4f-2b79-2581-2891-0be2f69320c9" />
              </a>
            </div>
          </div>
        </div>

        <div data-w-id="14785626-1f9c-e5e3-32e4-fff0fcb7ff94" className="parallax-master z-10">
          <div className="parallax-text">
            <div className="home-a-video-feature">
              <div className="label-master dark-32">
                <div className="label-small">Your First Step</div>
              </div>
              <h2 animate="text" className="no-margins">
                We listen to your goals for a healthier smile.
              </h2>
            </div>
            <div className="home-a-video-feature">
              <div className="label-master dark-32">
                <div className="label-small">Our Proven Results</div>
              </div>
              <h2 animate="text" className="no-margins">
                Confidence isn't just cosmetic —<br /> it's foundational.
              </h2>
            </div>
            <div className="home-a-video-feature">
              <div className="label-master dark-32">
                <div className="label-small">Our Commitment</div>
              </div>
              <h2 animate="text" className="no-margins">
                Because your comfort and<br /> care matter most to us.
              </h2>
            </div>
          </div>
        </div>

        <img
          src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673b7b2a900da25c704cf634_Gradient Left.svg"
          loading="lazy"
          alt=""
          className="hero-gradient-left !-z-1"
        />
      </section>
    </>
  );
};

export default HeroSection;
