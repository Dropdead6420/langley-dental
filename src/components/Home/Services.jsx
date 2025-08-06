import React from "react";
import treatments from "@/data/treatments";
const Services = () => {
  return (
    <section className="section journal-home-a-section">
  <div className="w-layout-blockcontainer main-container w-container">
    <div className="headline-home-a-journal">
      <div className="label-master">
        <div className="label-small">Your thoughts &amp; work</div>
      </div>
      <h2 animate="title" data-w-id="292c5d2c-c769-eb72-28e3-95fda83a3ad3" style={{opacity: 0, filter: 'blur(20px)'}} className="no-margins">
        A journal of your process
      </h2>
    </div>
    <div className="master-home-a-journal space-y-12">
      {treatments.map((treatment, index) => (
        <div
          key={treatment.slug}
          className={`flex flex-col-reverse lg:flex-row ${
            index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
          } items-center gap-8`}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={treatment.image}
              alt={treatment.title}
              className="w-full h-[300px] object-cover rounded-xl shadow-md wow fadeInUp"
              loading="lazy"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 wow fadeInUp">
            <h2 className="text-2xl font-bold mb-4">{treatment.title}</h2>
            <p className="text-gray-100 mb-4">{treatment.description}</p>
            <a
              href={`/treatments/${treatment.slug}`}
              className="text-blue-600 font-medium underline hover:no-underline"
            >
              Read more →
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
  <div data-w-id="9e0f342c-7040-3a00-c795-121ebecc454e" className="circle-rotating home-a-1" />
  <div data-w-id="2e80fdc8-a188-fa61-e981-d6575eefbf57" className="circle-rotating home-a-2" />
</section>

  );
};

export default Services;
