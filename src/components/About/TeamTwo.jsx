'use42 client';

import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { getAllTeam } from '@/services/teamService';

export default function TeamTwo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllMembers = async () => {
    setLoading(true);
    try {
      const response = await getAllTeam();
      if (response.status) {
        setMembers(response.data || []);
      } else {
        toast.error(response.message || 'Failed to fetch the team');
      }
    } catch (error) {
      console.error('Error fetching team:', error);
      toast.error('Something went wrong while fetching the team');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllMembers();
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % members.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  const current = members[currentIndex];

  if (loading) {
    return (
      <div className="!min-h-screen !bg-gradient-to-br !from-blue-50 !via-white !to-purple-50 !flex !items-center !justify-center">
        <div className="!text-center">
          <div className="!w-16 !h-16 !border-4 !border-blue-600 !border-t-transparent !rounded-full !animate-spin !mx-auto !mb-4"></div>
          <p className="!text-gray-600 !font-medium">Loading our amazing team...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="!fixed !inset-0 !-z-10 !overflow-hidden">
        <div className="!absolute !-top-40 !-left-40 !w-96 !h-96 !bg-blue-400 !rounded-full !mix-blend-multiply !blur-3xl !opacity-20 !animate-pulse"></div>
        <div className="!absolute !-bottom-40 !-right-40 !w-96 !h-96 !bg-cyan-400 !rounded-full !mix-blend-multiply !blur-3xl !opacity-20 !animate-pulse !delay-1000"></div>
        <div className="!absolute !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2 !w-80 !h-80 !bg-pink-300 !rounded-full !mix-blend-multiply !blur-3xl !opacity-15 !animate-pulse !delay-700"></div>
      </div>

      <section className="!relative !py-20 !px-4 !overflow-hidden !bg-gradient-to-br !from-blue-50/30 !via-white !to-purple-50/20">
        <div className="!max-w-7xl !mx-auto">

          <div className="!text-center !mb-16">
            <p className="!text-blue-600 !font-semibold !tracking-wider !uppercase !text-sm !mb-3">
              Meet Your Care Team
            </p>
            <h2 className="!text-5xl md:!text-6xl !font-bold !text-gray-900 !tracking-tight">
              Our Langley <span className="!text-blue-500">Dentists</span>
            </h2>
            <p className="!mt-6 !text-lg !text-gray-600 !max-w-3xl !mx-auto !leading-relaxed">
              Passionate professionals dedicated to your smile.
            </p>
          </div>

          <div className="!relative !group">
            <div className="!absolute !-inset-1 !bg-gradient-to-r !from-blue-500 !to-cyan-500 !rounded-3xl !blur-xl !opacity-30 group-hover:!opacity-50 !transition !duration-1000"></div>

            <div className="!relative !bg-white/90 !backdrop-blur-xl !rounded-3xl !shadow-2xl !border !border-white/20 !overflow-hidden">
              <div className="!grid !grid-cols-1 lg:!grid-cols-3 !gap-0">

                <div className="!p-10 lg:!p-9 !flex !flex-col !justify-center !bg-gradient-to-br !from-blue-50/50 !to-purple-50/30">
                  <h3 className="!text-3xl !font-semibold !text-gray-900 !mb-6">
                    Meet Our Langley Dentists
                  </h3>
                  <p className="!text-gray-700 !leading-relaxed !text-lg">
                    At Langley Care Dental, our compassionate team of dedicated dentists and hygienists is committed to delivering gentle, top-tier dental care to patients of all ages. We prioritize comfort and clear communication, combining modern dental techniques with a patient-first approach. Whether you're coming in for routine cleanings, cosmetic treatments, or complex procedures, we create personalized care plans to ensure a positive, stress-free experience every time.
                  </p>

                  <div className="!mt-2 !ml-15 !flex !gap-4">
                    <div className="!text-center">
                      <p className="!text-4xl !font-bold !text-blue-500">10+</p>
                      <p className="!text-sm !text-gray-600">Years Experience</p>
                    </div>
                    <div className="!text-center">
                      <p className="!text-4xl !font-bold !text-cyan-500">5000+</p>
                      <p className="!text-sm !text-gray-600">Happy Smiles</p>
                    </div>
                  </div>
                </div>

                <div className="!relative !flex !items-center !justify-center !py-12 !px-8 !bg-gradient-to-b !from-transparent !via-blue-50/20 !to-transparent">
                  <div className="!relative">
                    <div className="!absolute !inset-0 !-m-8 !rounded-full !bg-gradient-to-br !from-blue-400 !to-cyan-500 !opacity-20 !blur-3xl !animate-pulse"></div>

                    <div className="!relative !w-80 !h-96 md:!w-96 md:!h-[500px] !rounded-3xl !overflow-hidden !shadow-2xl !ring-8 !ring-white/50">
                      <img
                        src={current?.image?.url || '/placeholder-doctor.jpg'}
                        alt={current?.name}
                        className="!w-full !h-full !object-cover !transition-transform !duration-700 hover:!scale-110"
                      />
                      {/* <div className="!absolute !inset-0 !bg-gradient-to-t !from-black/40 !via-transparent !to-transparent !opacity-0 hover:!opacity-100 !transition-opacity !duration-500 !flex !items-end !p-8">
                        <p className="!text-white !text-xl !font-semibold">
                          Click arrows to meet the team →
                        </p>
                      </div> */}
                    </div>

                    <button
                      onClick={prev}
                      className="!absolute !left-4 !top-1/2 !-translate-y-1/2 !w-14 !h-14 !rounded-full !bg-white/90 !backdrop-blur-md !shadow-xl !flex !items-center !justify-center hover:!bg-blue-600 hover:!text-white !transition-all !duration-300 group"
                    >
                      <ChevronLeft className="!w-7 !h-7 group-hover:!-translate-x-1 !transition-transform" />
                    </button>

                    <button
                      onClick={next}
                      className="!absolute !right-4 !top-1/2 !-translate-y-1/2 !w-14 !h-14 !rounded-full !bg-white/90 !backdrop-blur-md !shadow-xl !flex !items-center !justify-center hover:!bg-blue-600 hover:!text-white !transition-all !duration-300 group"
                    >
                      <ChevronRight className="!w-7 !h-7 group-hover:!translate-x-1 !transition-transform" />
                    </button>
                  </div>
                </div>

                <div className="!p-8 lg:!p-16 !flex !flex-col !justify-center">
                  <span className="!inline-block !px-4 !py-1 !rounded-full !bg-blue-100 !text-blue-700 !text-sm !font-semibold !mb-1">
                    {current?.title || 'Lead Dentist'}
                  </span>

                  <h3 className="!text-4xl !font-bold !text-gray-900 !mb-1">
                    {current?.name || 'Dr. Sarah Johnson'}
                  </h3>

                  <div className="!prose !prose-lg !text-gray-700 !leading-relaxed !space-y-4">
                    <p className="!text-base">
                      {current?.bio ||
                        'Dedicated to creating beautiful, healthy smiles.'}
                    </p>
                  </div>

                  {current?.credentials && (
                    <div className="!mt-8 !flex !flex-wrap !gap-3">
                      {current.credentials.split(',').map((cred, i) => (
                        <span
                          key={i}
                          className="!px-4 !py-2 !bg-gray-100 !text-gray-700 !rounded-full !text-sm !font-medium"
                        >
                          {cred.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="!flex !justify-center !gap-3 !mt-12">
            {members.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`!transition-all !duration-500 ${
                  index === currentIndex
                    ? '!w-12 !h-3 !bg-blue-600 !rounded-full !shadow-lg'
                    : '!w-3 !h-3 !bg-gray-300 !rounded-full hover:!bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
