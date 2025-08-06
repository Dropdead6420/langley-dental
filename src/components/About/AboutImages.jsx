import React from "react";

const AboutImages = () => {
  return (
    <section className="section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="w-layout-grid about-image-halves">
          <div
            id="w-node-a98e7a42-3996-e977-5fd3-ec9f347307a3-e7a94e1c"
            className="about-image wow fadeInUp"
          >
            <img
              src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673db118917d312c0f6783e1_Article Thumbnail-8.avif"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, 95vw"
              alt
              className="image-cover"
            />
          </div>
          <div className="about-image wow fadeInUp">
            <img
              src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673db11847fa67e4e56afaa4_Article Thumbnail-4.avif"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, 95vw"
              alt
              className="image-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutImages;
