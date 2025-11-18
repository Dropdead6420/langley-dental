"use client";

import React from 'react';

// --- MOCK DATA (Embedded to resolve "@/data/treatments" import error) ---
const treatments = [
  {
    slug: "bondings-and-veneers",
    title: "Bondings and Veneers",
    description: "At Langley Care Dental Clinic, we offer effective solutions to correct irregularities in your teeth, such as chipped teeth, spacing issues, peg laterals, and proclined or retroclined teeth.",
    image: "/assets/images/treatments/boundings-veneers.jpg",
    content: "" // Content omitted for brevity
  },
  {
    slug: "childrens-dentistry",
    title: "Children’s Dentistry",
    description: "At Langley Care Dental Clinic, we believe that children are the heart of our community, and their dental health is our top priority.",
    image: "/assets/images/treatments/1-8.png",
    content: ""
  },
  {
    slug: "complete-and-partial-dentures",
    title: "Complete and Partial Dentures",
    description: "Restore your smile and confidence with custom-made dentures at Langley Care Dental Clinic.",
    image: "/assets/images/treatments/Screenshot_1.png",
    content: ""
  },
  {
    slug: "dental-emergencies",
    title: "Dental Emergencies",
    description: "Dental emergencies can happen unexpectedly and often require immediate attention to alleviate pain, prevent further damage, and preserve your oral health. ",
    image: "/assets/images/treatments/1-14.png",
    content: ""
  },
  {
    slug: "digital-radiography",
    title: "Digital Radiography",
    description: "At Langley Care Dental Clinic, we utilize advanced digital radiography to provide precise and efficient diagnostic imaging.",
    image: "/assets/images/treatments/1-15.png",
    content: ""
  },
  {
    slug: "invisalign",
    title: "Invisalign Treatment",
    description: "Achieve a straighter, more confident smile with Invisalign a Langley Care Dental Clinic. ",
    image: "/assets/images/treatments/1-19.png",
    content: ""
  },
  {
    slug: "full-mouth-reconstruction",
    title: "Full Mouth Reconstruction",
    description: "Full Mouth Reconstruction: Transform Your Smile and Oral Health Full Mouth Reconstruction is a comprehensive dental solution designed to address multiple oral health issues while restoring the functionality and aesthetics of your entire mouth.",
    image: "/assets/images/treatments/tumblr_o6q4ycAodI1sfyngeo2_1280.jpg",
    content: ""
  },
  {
    slug: "amalgam-removal-and-white-fillings",
    title: "Amalgam Removal and White Fillings",
    description: "A Healthier, More Aesthetic Choice Say goodbye to dark, unsightly fillings and hello to a brighter, healthier smile! White fillings are a modern, mercury-free alternative to traditional silver (amalgam) fillings.",
    image: "/assets/images/treatments/1-22.png",
    content: ""
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    description: "Cosmetic Dentistry: Transform Your Smile with Langley Care Dental Clinic Cosmetic dentistry is all about enhancing the beauty of your smile.",
    image: "/assets/images/treatments/tumblr_og2gy8QaPk1sfyngeo3_1280.jpg",
    content: ""
  },
  {
    title: 'General Dentistry',
    slug: 'general-dentistry',
    image:'/assets/images/treatments/divesfikatsiya.jpg',
    description: "Maintaining optimal dental health is crucial for your overall well-being.",
    content: ""
  },
  {
    slug: "botox-treatment",
    title: "Botox Treatment",
    description: "Maintaining optimal dental health is crucial for your overall well-being.",
    image: "/assets/images/treatments/1-23.png",
    content: ""
  },
  {
    slug: "cleaning-and-prevention",
    title: "Cleaning and Prevention",
    description: "Cleaning and Prevention: The Foundation of a Healthy Smile Dental hygiene is a vital part of everyone’s daily routine—but are you doing it correctly at home? At Langley Care Dental Clinic, we ensure that nothing is overlooked during your cleaning and check-up.",
    image: "/assets/images/treatments/1-9.png",
    content: ""
  },
  {
    slug: "crowns-and-bridges",
    title: "Crowns and Bridges",
    description: "Crowns and Bridges: Restoring Function and Aesthetics Dental crowns and bridges are essential restorative treatments designed to address damaged or missing teeth.",
    image: "/assets/images/treatments/1-9.png",
    content: ""
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    description: "Dental Implants: A Permanent Solution for a Natural Smile Dental implants are a revolutionary advancement in modern dentistry, offering a reliable and long-lasting way to restore both the function and aesthetics of your smile.",
    image: "/assets/images/treatments/treatment-1.jpg",
    content: ""
  },
  {
    slug: "extractions-and-bone-grafting",
    title: "Extractions and Bone Grafting",
    description: "Extractions and Bone Grafting: Preserving Oral Health and Preparing for Implants Tooth extractions and bone grafting are essential dental procedures that address a variety of oral health concerns.",
    image: "/assets/images/treatments/1-17.png",
    content: ""
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    description: "Root Canal Treatment: Save Your Natural Teeth Your teeth are precious, and at Langley Care Dental Clinic, we believe in preserving them whenever possible.",
    image: "/assets/images/treatments/2-3.png",
    content: ""
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    description: "Teeth Whitening: Brighten Your Smile with Lengley Care Dental Clinic Over time, teeth can become yellow or stained due to genetics, lifestyle habits, or aging.",
    image: "/assets/images/treatments/treatment-1.jpg",
    content: ""
  },
  {
    slug: "smile-makeovers",
    title: "Smile Makeovers",
    description: "Smile Makeovers: Transform Your Smile, Transform Your Life A Smile Makeover is a personalized and comprehensive approach to enhancing the beauty of your smile.",
    image: "/assets/images/treatments/woman-sits-dental-chair-doctors-bowed-her-1280x748.jpg",
    content: ""
  },
  {
    slug: "sedation-dentistry",
    title: "Sedation Dentistry",
    description: "Sedation Dentistry: Relax and Enjoy a Stress-Free Dental Experience For many individuals, dental anxiety or fear can make visiting the dentist a daunting experience.",
    image: "/assets/images/treatments/dentist-examine-female-patient-with-braces-denal-office.jpg",
    content: ""
  }
];

// --- MOCK Link (Embedded to resolve "next/link" import error) ---
const MockLink = ({ href, children, ...props }) => (
    // We use an anchor tag for the link behavior
    <a href={href} {...props}>{children}</a>
);
const NextLink = MockLink; // Use the MockLink as the functional Link component

const TreatmentsPage = () => {
  return (
    <div className="!min-h-screen !bg-gray-50 !py-16 !px-4 sm:!px-6 lg:!px-8">
      
      {/* Header Section */}
      <header className="!max-w-4l !mx-auto !my-12 !text-center !mb-16">
        <h1 className="!text-5xl !font-extrabold !tracking-tight !text-indigo-900 !mb-4 sm:!text-6xl">
          Comprehensive Dental Services
        </h1>
        <p className="!text-xl !text-gray-600">
          Explore our range of treatments designed to keep your smile healthy and radiant.
        </p>
      </header>

      {/* Treatments Grid */}
      <div className="!max-w-6xl !mx-auto !grid !gap-8 sm:!grid-cols-2 lg:!grid-cols-3">
        {treatments.map((treatment) => (
          <NextLink 
            key={treatment.slug} 
            // Correct path for detail page
            href={`/treatments/${treatment.slug}`}
            passHref
          >
            {/* Treatment Card - Clickable and styled with priority */}
            <div 
              className="!block !h-full !bg-white !rounded-xl !shadow-xl !overflow-hidden 
                         hover:!shadow-2xl hover:!scale-[1.02] !transition-all !duration-300 !cursor-pointer
                         focus:!ring-4 focus:!ring-indigo-500/50"
            >
              {/* Image */}
              <div className="!h-48 !overflow-hidden">
                <img 
                  src={treatment.image} 
                  alt={treatment.title} 
                  // Ensured all image classes have !
                  className="!w-full !h-full !object-cover !transition-transform !duration-500 hover:!scale-105" 
                  // Placeholder fallback image for safety
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/93C5FD/ffffff?text=Dental+Image"; }}
                />
              </div>

              {/* Content */}
              <div className="!p-6 !flex !flex-col !h-full">
                <h2 className="!text-2xl !font-bold !tracking-tight !text-indigo-800 !mb-2">
                  {treatment.title}
                </h2>
                <p className="!text-gray-600 !text-sm !mb-4 !flex-grow">
                  {treatment.description}
                </p>
                
                {/* Read More Section */}
                <div className="!mt-auto">
                    <span 
                        className="!text-indigo-600 !font-semibold !inline-flex !items-center !group-hover:!text-indigo-800 !transition-colors"
                    >
                        Learn More 
                        {/* Ensured SVG icons classes have ! */}
                        <svg className="!ml-2 !w-4 !h-4 !transition-transform !duration-300 group-hover:!translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </span>
                </div>
              </div>
            </div>
          </NextLink>
        ))}
      </div>

    </div>
  );
};

export default TreatmentsPage;
