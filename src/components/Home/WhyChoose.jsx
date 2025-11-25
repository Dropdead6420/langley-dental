'use client'
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Users, Building2, Heart } from 'lucide-react';
import Link from 'next/link';


const stats = [
  {
    id: 1,
    number: "30+",
    description: "expert members",
    label: "Team",
    icon: <Users className="w-8 h-8" />,
    delay: 0
  },
  {
    id: 2,
    number: "8+",
    description: "high-quality clinics",
    label: "About",
    icon: <Building2 className="w-8 h-8" />,
    delay: 200
  },
  {
    id: 3,
    number: "20K",
    description: "successful treatments",
    label: "Patient",
    icon: <Heart className="w-8 h-8" />,
    delay: 400
  }
];

function WhyChoose() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Stats Section */}
      <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative order-2 lg:order-1">
              <div
                className={`relative h-[600px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 transform ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                }`}
              >
                {/* Main Image */}
                <div className="absolute inset-0">
                  <img
                    src="https://cdn.prod.website-files.com/633daa121f1308def083b05d/635af4e60797383f0b7608d2_candid-WFsNCIn8OF4-unsplash.webp"
                    alt="Dental care products"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                </div>

                {/* Floating Badge */}
                <div className="absolute top-6 right-6">
                  <div
                    className={`bg-white/95 backdrop-blur-sm px-6 !-py-1 !m-2  rounded-full shadow-lg transition-all duration-700 delay-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}
                  >
                    <p className="text-sm font-semibold text-slate-700">
                      Premium Quality Care
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />
            </div>

            {/* Stats Cards - Horizontal Layout */}
            <div className="order-1 lg:order-2">
              <div
                className={`mb-12 transition-all duration-1000 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-blue-600 text-sm font-semibold tracking-wide">WHY CHOOSE US</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 !mb-4">
                  Excellence in Every Smile
                </h2>
                <p className="text-lg text-slate-600">
                  Trusted by thousands for exceptional dental care and outstanding results
                </p>
              </div>

              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.id}
                    className={`group transition-all duration-700 transform ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                    }`}
                    style={{ transitionDelay: `${stat.delay}ms` }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-blue-500/30">
                      {/* Background Gradient Effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 transition-opacity duration-500 ${
                          hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                        }`}
                      />

                      {/* Content */}
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          {/* Icon */}
                          <div
                            className={`flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white transition-all duration-500 ${
                              hoveredIndex === index ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                            }`}
                          >
                            {stat.icon}
                          </div>

                          {/* Stats Text */}
                          <div>
                            <div className="flex items-baseline gap-3 mb-1">
                              <h3
                                className={`text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent transition-all duration-500 ${
                                  hoveredIndex === index ? 'scale-110' : 'scale-100'
                                }`}
                              >
                                {stat.number}
                              </h3>
                              <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                                {stat.label}
                              </span>
                            </div>
                            <p className="text-lg font-medium text-slate-700">
                              {stat.description}
                            </p>
                          </div>
                        </div>

                        {/* Arrow Indicator */}
                        {/* <div
                          className={`flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 transition-all duration-500 ${
                            hoveredIndex === index ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                          }`}
                        >
                          <ArrowRight className="w-5 h-5 text-white" />
                        </div> */}
                      </div>

                      {/* Shine Effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 ${
                          hoveredIndex === index ? 'translate-x-full' : '-translate-x-full'
                        }`}
                        style={{ transform: 'skewX(-20deg)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div
                className={`mt-8 transition-all duration-1000 delay-700 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 !text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-105"
                >
                  <span>Meet Our Team</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyChoose;
