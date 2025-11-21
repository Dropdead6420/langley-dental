'use client';

import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { getAllTeam } from '@/services/teamService';

export default function TeamTwo() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showFullBio, setShowFullBio] = useState(false);

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
        setShowFullBio(false);
        setCurrentIndex((prev) => (prev + 1) % members.length);
    };

    const prev = () => {
        setShowFullBio(false);
        setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
    };

    const current = members[currentIndex];

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 sm:px-10 md:px-12">

                        {/* LEFT TEXT SECTION */}
                        <div className="flex flex-col justify-center">
                            <div>
                                <h1 className="!text-3xl font-bold text-slate-900 mb-4 !tracking-tight">
                                    Meet Our Langley Dentists
                                </h1>
                                <p className="text-slate-600 !text-base leading-relaxed mb-8">
                                    At Langley Care Dental, our compassionate team of dedicated dentists and hygienists is committed to delivering gentle, top-tier dental care to patients of all ages. We prioritize comfort and clear communication, combining modern dental techniques with a patient-first approach. Whether you're coming in for routine cleanings, cosmetic treatments, or complex procedures, we create personalized care plans to ensure a positive, stress-free experience every time.
                                </p>

                            </div>
                        </div>

                        {/* CENTER IMAGE SLIDER */}
                        <div className="flex items-center justify-center relative">
                            <button
                                onClick={prev}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white border border-gray-300 rounded-full p-2 hover:border-blue-500 hover:text-blue-500 shadow-sm transition-colors"
                                aria-label="Previous dentist"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            <div className="flex justify-center">
                                <div className="w-full sm:max-w-sm aspect-[3/4] overflow-hidden shadow-md ring-2 ring-blue-100 hover:ring-blue-300 transition-all duration-300">
                                    <img
                                        src={current?.image?.url || '/placeholder.jpg'}
                                        alt={current?.name || 'Dentist'}
                                        className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            <button
                                onClick={next}
                                className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 hover:border-blue-500 hover:text-blue-500 shadow-sm transition-colors"
                                aria-label="Next dentist"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* RIGHT BIO SECTION */}
                        <div className="flex flex-col justify-center p-4">
                            <div className="uppercase !text-sm font-semibold text-blue-600 tracking-wider mb-2 !tracking-tight">
                                {current?.title || 'Dentist'}
                            </div>
                            <h2 className="!text-2xl font-bold text-slate-900 mb-3 !tracking-tight">
                                {current?.name || 'Our Dentist'}
                            </h2>

                            {/* Bio with Read More */}
                            {current?.bio && <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                {current?.bio}
                            </p>}
                        </div>
                    </div>
                </div>

                {/* PAGINATION DOTS */}
                <div className="flex justify-center gap-3 mt-8">
                    {members.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setCurrentIndex(index);
                                setShowFullBio(false);
                            }}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to dentist ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
