"use client";
import Link from "next/link";
import React, { useState } from "react";

const ImageSwitcher = () => {
  const [hoveredCity, setHoveredCity] = useState("");

  return (
    <div className="med-1">
      <div className="med-1-content">
        <div className="med-1-wrap w-dyn-list">
          <div role="list" className="med-1-list w-dyn-items">
            <div
              data-w-id="3f2e1cd5-d226-ebf1-01be-f4acc37fe94a"
              role="listitem"
              className="med-1-item w-dyn-item"
            >
              <div className="med-1-block">
                <Link
                  onMouseEnter={() => setHoveredCity("new-york")}
                  onMouseLeave={() => setHoveredCity("")}
                  data-w-id="3f2e1cd5-d226-ebf1-01be-f4acc37fe94c"
                  href="#"
                  className="med-1-link w-inline-block"
                >
                  <p className="med-1-text">Surrey</p>
                </Link>
              </div>
              <div
                data-w-id="3f2e1cd5-d226-ebf1-01be-f4acc37fe94e"
                style={{
                  backgroundImage:
                    "url(https://cdn.prod.website-files.com/633daa121f130819bf83b08d/634835b5e3dce2f52cfba264_pexels-max-vakhtbovych-7587879.avif)",
                  display: hoveredCity === "new-york" ? "block" : "none",
                  opacity: hoveredCity === "new-york" ? 1 : 0,
                }}
                className="med-1-background"
              />
            </div>
            <div
              data-w-id="3f2e1cd5-d226-ebf1-01be-f4acc37fe94a"
              role="listitem"
              className="med-1-item w-dyn-item"
            >
              <div className="med-1-block">
                <Link
                  onMouseEnter={() => setHoveredCity("london")}
                  onMouseLeave={() => setHoveredCity("")}
                  data-w-id="3f2e1cd5-d226-ebf1-01be-f4acc37fe94c"
                  href="#"
                  className="med-1-link w-inline-block"
                >
                  <p className="med-1-text">Richmond</p>
                </Link>
              </div>
              <div
                data-w-id="3f2e1cd5-d226-ebf1-01be-f4acc37fe94e"
                style={{
                  backgroundImage:
                    "url(https://cdn.prod.website-files.com/633daa121f130819bf83b08d/634835a12f57125e73346647_pexels-max-vakhtbovych-8143707.avif)",
                  display: hoveredCity === "london" ? "block" : "none",
                  opacity: hoveredCity === "london" ? 1 : 0,
                }}
                className="med-1-background"
              />
            </div>
            <div
              data-w-id="3f2e1cd5-d226-ebf1-01be-f4acc37fe94a"
              role="listitem"
              className="med-1-item w-dyn-item"
            >
              <div className="med-1-block">
                <Link
                  onMouseEnter={() => setHoveredCity("berlin")}
                  onMouseLeave={() => setHoveredCity("")}
                  data-w-id="3f2e1cd5-d226-ebf1-01be-f4acc37fe94c"
                  href="#"
                  className="med-1-link w-inline-block"
                >
                  <p className="med-1-text">Langley</p>
                </Link>
              </div>
              <div
                data-w-id="3f2e1cd5-d226-ebf1-01be-f4acc37fe94e"
                style={{
                  backgroundImage:
                    'url("https://cdn.prod.website-files.com/633daa121f130819bf83b08d/634836d007befb08e7afea36_pexels-the-hotel-lisbon-10890612%20(1).avif")',
                  display: hoveredCity === "berlin" ? "block" : "none",
                  opacity: hoveredCity === "berlin" ? 1 : 0,
                }}
                className="med-1-background"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="med-1-overlay-color" />
      <div className="med-1-background-color" />
    </div>
  );
};

export default ImageSwitcher;
