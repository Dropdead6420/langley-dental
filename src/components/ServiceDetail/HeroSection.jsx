import React from "react";

const HeroSection = ({treatment}) => {
  return (
    <div className="article-hero">
      <section className="section hero-article">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="w-layout-grid article-hero-halves">
            <div
              id="w-node-_274e7d17-6a61-95a9-f248-b2e71923c7ec-4a658232"
              className="article-thumbnail-placeholder"
            >
              <div className="article-thumbnail">
                <img
                  loading="lazy"
                  src={treatment?.image}
                  alt
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  className="image-cover"
                />
              </div>
            </div>
            <div className="article-hero-right">
              <div className="label-master bg-1">
                <div className="label-small">Practise</div>
              </div>
              <div className="headline-article">
                <h1 animate="title" className="no-margins">
                 {treatment?.title}
                </h1>
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
