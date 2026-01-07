'use client'
import Link from "next/link";
import React, { useState } from "react";

const Dentist = ({ teamMembers, designation }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const maxLength = 80;

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <section className="section">
      <div className="container">
        <div className="padding">
          <div className="vertical-flex-gap-8em">
            <div className="vertical-flex-gap-2em">
              <h2 className="heading is-small-title">Dentists</h2>
              <div className="the-team-2 w-dyn-list">
                <div role="list" className="team-2-list w-dyn-items">

                  {/* Dr. Surleen Sikri */}
                  {teamMembers.map((member, index) => {
                    const isExpanded = expandedIndex === index;
                    const showReadMore = member.bio?.length > maxLength;
                    const displayedText = isExpanded
                      ? member.bio
                      : member.bio?.slice(0, maxLength) + (showReadMore ? "..." : "");

                    return (
                      <div
                        key={index}
                        role="listitem"
                        className="team-2-item w-dyn-item flex flex-col"
                      >
                        <div href="#!" className="team-2-content w-inline-block">
                          <p className="team-2-name">{member.name}</p>
                          {member?.bio?.trim()?.length > 0 && <p className="team-2-role">{displayedText}</p>}
                          {showReadMore && (
                            <button
                              onClick={() => toggleDescription(index)}
                              className="!text-blue-600 mt-2 text-sm font-medium d-block"
                            >
                              {isExpanded ? "Read Less" : "Read More"}
                            </button>
                          )}
                        </div>

                        <div
                          className="team-2-image flex items-center justify-center bg-[#f8f6f2]"
                          style={{ height: "360px" }}
                        >
                          <img
                            src={member.image?.url}
                            alt={member.image?.alt}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dentist;