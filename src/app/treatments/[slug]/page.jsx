"use client";
import treatments from '@/data/treatments';
import Link from 'next/link';
import { useState } from 'react';
import ContactModal, { useContactModal } from '@/components/ContactModal';

export default function TreatmentDetail({ params }) {
    const { setOpen } = useContactModal();
    const treatment = treatments.find(t => t.slug === params.slug);

  if (!treatment) {
    return (
      <div className="!min-h-screen !flex !items-center !justify-center !p-8 !text-center !text-red-600 !bg-gradient-to-br !from-gray-50 !to-blue-50">
        Treatment not found.
      </div>
    );
  }

  return (
    <div className="!min-h-screen !bg-gradient-to-br !from-gray-50 !to-blue-50 !py-16 !px-4 sm:!px-6 lg:!px-8">
      <div className="!max-w-3xl !mx-auto !bg-white !p-8 md:!p-10 !rounded-lg !shadow-xl !mt-12"> 
        <h1 className="!text-4xl !font-extrabold !text-gray-900 !mb-6 !leading-tight">{treatment.title}</h1>
        
        <img 
          src={treatment.image} 
          alt={treatment.title} 
          className="!w-full !h-auto !max-h-96 !object-cover !mb-8 !rounded-lg !shadow-md" 
        />
        
        <div 
          className="!prose !prose-lg !max-w-none !text-gray-700 !leading-relaxed !mb-8"
          dangerouslySetInnerHTML={{ __html: treatment.content }} 
        />
        
        <div className="!flex !gap-4"> {/* Added a div for button layout */}
          <Link href={`/`} passHref> 
            <button className="!inline-flex !items-center !px-6 !py-3 !border !border-transparent !text-base !font-medium !rounded-md !shadow-sm !text-white !bg-indigo-600 hover:!bg-indigo-700 focus:!outline-none focus:!ring-2 focus:!ring-offset-2 focus:!ring-indigo-500 !transition !duration-300 !ease-in-out">
              Back to Treatments
            </button>
          </Link>
          <button 
            onClick={() => setOpen(true)}
            className="!inline-flex !items-center !px-6 !py-3 !border !border-transparent !text-base !font-medium !rounded-lg !shadow-md !text-white !bg-teal-600 hover:!bg-teal-700 focus:!outline-none focus:!ring-2 focus:!ring-offset-2 focus:!ring-teal-500 !transition !duration-300 !ease-in-out">
              Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}