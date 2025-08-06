"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    // Height animation
    const heightAnim = gsap.to(".master-home-a-video", {
      height: "100vh",
      scrollTrigger: {
        trigger: ".master-home-a-video",
        start: "top center",      // कब शुरू
        end: "bottom 20%",        // कब खत्म
        scrub: true,              // scroll से sync
      },
    });

    // Width animation
    const widthAnim = gsap.to(".video-wrap-home-a", {
      width: "100%",
      scrollTrigger: {
        trigger: ".master-home-a-video",
        start: "top center",
        end: "bottom 20%",
        scrub: true,
      },
    });

    // Border radius animation
    const borderRadiusAnim = gsap.to(".video-wrap-home-a", {
      borderRadius: "16px",
      scrollTrigger: {
        trigger: ".master-home-a-video",
        start: "top center",
        end: "bottom 20%",
        scrub: true,
      },
    });

    // cleanup on unmount
    return () => {
      heightAnim.kill();
      widthAnim.kill();
      borderRadiusAnim.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <section className="section hero-home-a">
        <div className="w-layout-blockcontainer main-container w-container !z-10">
          <div className="headline-home-a wow fadeInDown">
            <h1
              animate="title-load"
              data-w-id="990f4d2a-aa43-8599-8f58-cd49eb32e899"
              style={{ opacity: 1, filter: "blur(0px)" }}
            >
              From solo practices to emerging collectives
            </h1>
            <div
              data-w-id="2cdbe5e4-a7ca-0107-f8a5-c243ac3b1515"
              style={{ opacity: 1 }}
              className="home-a-tag-1"
            >
              <div className="label-master yellow">
                <div className="label-small">BRAND AS BODY</div>
              </div>
            </div>
            <div
              data-w-id="32404e60-066b-42cb-b640-5172384fdead"
              style={{ opacity: 1 }}
              className="home-a-tag-2"
            >
              <div className="label-master accent-1">
                <div className="label-small">FEMALE-LED</div>
              </div>
            </div>
            <div
              data-w-id="cf01d814-8b05-616d-952d-fe9b44a5e7d8"
              style={{ opacity: 1 }}
              className="home-a-tag-3"
            >
              <div className="label-master light">
                <div className="label-small">Consulting</div>
              </div>
            </div>
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
            <div
              data-poster-url="https://cdn.prod.website-files.com/6862c1e820c1f89803264a02%2F686a8944b8678b5802e0842b_9836597-uhd_4096_2160_25fps-poster-00001.jpg"
              data-video-urls="https://cdn.prod.website-files.com/6862c1e820c1f89803264a02%2F686a8944b8678b5802e0842b_9836597-uhd_4096_2160_25fps-transcode.mp4,https://cdn.prod.website-files.com/6862c1e820c1f89803264a02%2F686a8944b8678b5802e0842b_9836597-uhd_4096_2160_25fps-transcode.webm"
              data-autoplay="true"
              data-loop="true"
              data-wf-ignore="true"
              className="video-home-a w-background-video-2 w-background-video-atom"
            >
              <video
                id="0b3f6c0f-f1da-37e8-3883-f486ab220282-video"
                autoPlay
                loop
                style={{
                  backgroundImage:
                    'url("https://cdn.prod.website-files.com/6862c1e820c1f89803264a02%2F686a8944b8678b5802e0842b_9836597-uhd_4096_2160_25fps-poster-00001.jpg")',
                }}
                muted
                playsInline
                data-wf-ignore="true"
                data-object-fit="cover"
              >
                <source
                  src="https://static.vecteezy.com/system/resources/previews/039/330/771/mp4/woman-dental-surgeon-examining-teeth-of-patient-using-operating-microscope-modern-dental-equipment-in-dentistry-dental-instruments-for-treating-a-patient-with-toothache-in-the-clinic-video.mp4"
                  data-wf-ignore="true"
                />
                <source
                  src="https://cdn.prod.website-files.com/6862c1e820c1f89803264a02%2F686a8944b8678b5802e0842b_9836597-uhd_4096_2160_25fps-transcode.webm"
                  data-wf-ignore="true"
                />
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
                  <div
                    className="button-text _1"
                    style={{
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    }}
                  >
                    Get template
                  </div>
                  <div
                    className="button-text _2"
                    style={{
                      opacity: 0,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 8deg)",
                    }}
                  >
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
                  <div
                    className="button-text _1"
                    style={{
                      transform:
                        "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                      opacity: 1,
                    }}
                  >
                    explore
                  </div>
                  <div
                    className="button-text _2"
                    style={{
                      opacity: 0,
                      transform:
                        "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 8deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    explore
                  </div>
                </div>
                <div
                  button-bg
                  className="button-bg w-variant-a1840c4f-2b79-2581-2891-0be2f69320c9"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
        <div
          data-w-id="14785626-1f9c-e5e3-32e4-fff0fcb7ff94"
          className="parallax-master z-10"
        >
          <div className="parallax-text">
            <div className="home-a-video-feature">
              <div className="label-master dark-32">
                <div className="label-small">Where I Begin</div>
              </div>
              <h2
                animate="text"
                data-w-id="14785626-1f9c-e5e3-32e4-fff0fcb7ff9a"
                style={{ opacity: 1, filter: "blur(0px)" }}
                className="no-margins"
              >
                I guide you back to what’s already yours.
              </h2>
            </div>
            <div className="home-a-video-feature">
              <div className="label-master dark-32">
                <div className="label-small">What I’ve Seen</div>
              </div>
              <h2
                animate="text"
                data-w-id="f2cc1132-6437-041b-3887-29c106f5c236"
                style={{ opacity: 1, filter: "blur(0px)" }}
                className="no-margins"
              >
                Healing isn’t linear <br />— but it’s real.
              </h2>
            </div>
            <div className="home-a-video-feature">
              <div className="label-master dark-32">
                <div className="label-small">Why I Stay</div>
              </div>
              <h2
                animate="text"
                data-w-id="c9d89755-fe56-4f53-c74a-88d3b94b0688"
                style={{ opacity: 1, filter: "blur(0px)" }}
                className="no-margins"
              >
                Because presence <br />
                changes everything.
              </h2>
            </div>
          </div>
        </div>
        <img src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673b7b2a900da25c704cf634_Gradient Left.svg" loading="lazy" alt className="hero-gradient-left !-z-1" />
      </section>
    </>
  );
};

export default HeroSection;
