"use client"

import React, { useEffect, useState } from 'react'
import { getAllTeam } from '@/services/teamService'
import toast from 'react-hot-toast'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const TeamSection = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedIds, setExpandedIds] = useState({});

  const fetchAllMembers = async () => {
    setLoading(true);
    try {
      const response = await getAllTeam();

      if (response.status) {
        setMembers(response.data || []);
      } else {
        toast.error(response.message || "Failed to fetch the team members");
      }
    } catch (error) {
      console.error("Error fetching team:", error);
      toast.error("Something went wrong while fetching team members");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllMembers();
  }, [])

  const toggleDescription = (id) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Group by designation (case-insensitive)
  const groupedMembers = members.reduce((acc, member) => {
    const designation = member.designation
      ? member.designation.trim().toLowerCase()
      : 'others';

    if (!acc[designation]) {
      acc[designation] = [];
    }
    acc[designation].push(member);
    return acc;
  }, {});

  const designationGroups = Object.entries(groupedMembers);

  return (
    <section className='py-20 md:py-28 bg-white'>
      <div className="container mx-auto px-4">
        {loading ? (
          <div className="text-center py-20 text-gray-500">Loading team members...</div>
        ) : designationGroups.length === 0 ? (
          <div className="text-center py-20 text-gray-500">No team members found.</div>
        ) : (
          designationGroups.map(([designationKey, group]) => (
            <div key={designationKey} className="mb-20 last:mb-0">
              <h2 className="text-4xl font-bold text-[#222] mb-12 capitalize tracking-tight">
                {designationKey === 'others' ? 'Our Team' : designationKey}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.map((member, index) => {
                  // Unique ID fallback to index
                  const memberId = member._id || index;
                  const isExpanded = expandedIds[memberId];
                  const maxLength = 100;
                  const bio = member.bio || "";
                  const showReadMore = bio.length > maxLength;
                  const displayedBio = isExpanded || !showReadMore
                    ? bio
                    : bio.slice(0, maxLength) + "...";

                  return (
                    <div key={memberId} className="flex flex-col group h-full">
                      {/* Image Section */}
                      <div className="relative w-full aspect-[4/4] overflow-hidden bg-gray-100">
                        {member.image?.url ? (
                          <img
                            src={member.image.url}
                            alt={member.image.alt || member.name}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                        )}
                      </div>

                      {/* Content Section */}
                      <div className="flex flex-col flex-1 bg-[#F4F0EC] p-8 transition-colors duration-300">
                        <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">
                          {member.name}
                        </h3>

                        {/* Optional subtitle/qualification if available in designation or bio? 
                             Usually designation is used for grouping, but maybe we show it nicely. 
                             Or maybe member has a separate 'qualification' field? 
                             Based on generic schema, we stick to name/bio.
                         */}

                        <div className="mt-4 text-[#555] text-[15px] leading-relaxed flex-1">
                          <p>{displayedBio}</p>
                        </div>

                        {showReadMore && (
                          <button
                            onClick={() => toggleDescription(memberId)}
                            className="mt-6 inline-flex items-center text-[#4A66E8] font-medium text-sm hover:text-[#3a52c7] transition-colors gap-2 group/btn"
                          >
                            {isExpanded ? "Read Less" : "Read More"}
                            {!isExpanded && <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />}
                          </button>
                        )}

                        {!showReadMore && (
                          <div className="mt-6 inline-flex items-center text-[#4A66E8] font-medium text-sm cursor-pointer hover:text-[#3a52c7] transition-colors gap-2 group/btn">
                            Read More <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default TeamSection
