"use client";

import treatments from '@/data/treatments';
import Link from 'next/link';
import { useState } from 'react';
import ContactModal, { useContactModal } from '@/components/ContactModal';
import { faqs } from '@/data/faq';
import FaqToggle from '@/components/Common/Faq';
import OtherTreatment from './OtherTreatment';

export default function TreatmentDetail({ params }) {
  const { setOpen } = useContactModal();
  const treatment = treatments.find(t => t.slug === params.slug);
  const serviceFaqs = faqs[params.slug] || [];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    patientType: '',
    treatment: treatment?.title || '',
    provider: '',
    additionalInfo: '',
    termsAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const checked = e.target.checked;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setOpen(true);
  };

  if (!treatment) {
    return (
      <div className="!min-h-screen !flex !items-center !justify-center !text-red-600 !text-2xl !font-bold !tracking-tight">
        Treatment not found.
      </div>
    );
  }

  function injectHeadingClasses(htmlString) {
  // Parse the HTML into a real DOM
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  // Add classes to all h2 elements
  doc.querySelectorAll("h2").forEach(h2 => {
    h2.classList.add("!text-4xl", "!font-semibold", "!tracking-tight");
  });

  // Add classes to all h3 elements
  doc.querySelectorAll("h3").forEach(h3 => {
    h3.classList.add("!text-xl", "!font-medium", "!tracking-tight");
  });

  // Return final HTML
  return doc.body.innerHTML;
}

  return (
    <div className="!min-h-screen my-18 !bg-white !py-16 !px-4 sm:!px-6 lg:!px-12">
      <div className="!container !mx-auto !max-w-7xl">
        {/* LAYOUT: CONTENT + SIDEBAR */}
        <div className="!grid !grid-cols-1 lg:!grid-cols-3 !gap-10">
          {/* LEFT: TREATMENT CONTENT */}
          <div className="lg:!col-span-2">
            <h3 className="!text-4xl !font-bold !tracking-tight !text-gray-900 !mb-6">
              {treatment.title}
            </h3>

            <img
              src={treatment.image}
              alt={treatment.title}
              className="!w-full !h-auto !max-h-96 !object-cover !rounded-lg !shadow-md !mb-8"
            />

            <div
              className=" !prose !prose-lg !max-w-none !text-gray-700 !leading-relaxed !tracking-tight !prose-h2:!text-2xl !prose-h2:!font-semibold !prose-h2:!tracking-tight !prose-li:!leading-relaxed !prose-li:!my-1 !prose-li:before:!content-['✓'] !prose-li:before:!text-teal-600 !prose-li:before:!mr-2"
              dangerouslySetInnerHTML={{ __html: injectHeadingClasses(treatment.content)}}
            />

            {/* CTA BUTTONS */}
            <div className="!flex !flex-wrap !gap-4 !mt-10">
              <Link href="/treatments" passHref>
                <button className="!px-6 !py-3 !rounded-md !shadow-sm !font-semibold !tracking-tight !text-white !bg-blue-600 hover:!bg-blue-700 focus:!ring-2 focus:!ring-offset-2 focus:!ring-blue-500 !transition">
                  Back to Treatments
                </button>
              </Link>

              <button
                onClick={() => setOpen(true)}
                className="!px-6 !py-3 !rounded-md !shadow-md !font-semibold !tracking-tight !text-white !bg-teal-600 hover:!bg-teal-700 focus:!ring-2 focus:!ring-offset-2 focus:!ring-teal-500 !transition"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* RIGHT: SIDEBAR FORM & CONTACT */}
          <div className="!space-y-8 my-17">
            {/* IMAGE */}
            <div className="!shadow-lg !rounded-xl !overflow-hidden">
              <img
                src={treatment.image}
                alt={treatment.title}
                className="!w-full !h-64 !object-cover"
              />
            </div>

            {/* BOOKING FORM */}
            <div className="!rounded-xl !shadow-lg !bg-white !p-8">
              <div className="!text-xs !uppercase !tracking-widest !text-gray-500 !text-center !font-semibold">
                DENTAL HYGIENE
              </div>
              <h2 className="!text-2xl !font-bold !tracking-tight !text-gray-900 !text-center !mt-2 !mb-6">
                Book Online
              </h2>

              <form onSubmit={handleSubmit} className="!space-y-5">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="!border-b !border-gray-300 focus:!border-teal-500 !py-2 !text-gray-800 !placeholder-gray-400 !tracking-tight !w-full !transition-colors"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="!border-b !border-gray-300 focus:!border-teal-500 !py-2 !text-gray-800 !placeholder-gray-400 !tracking-tight !w-full !transition-colors"
                  />
                </div>

                {/* Contact Info */}
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="!border-b !border-gray-300 focus:!border-teal-500 !py-2 !text-gray-800 !placeholder-gray-400 !tracking-tight !w-full"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="!border-b !border-gray-300 focus:!border-teal-500 !py-2 !text-gray-800 !placeholder-gray-400 !tracking-tight !w-full"
                />

                {/* Dropdowns */}
                <select
                  name="patientType"
                  value={formData.patientType}
                  onChange={handleInputChange}
                  className="!border-b !border-gray-300 focus:!border-teal-500 !py-2 !text-gray-800 !bg-transparent !tracking-tight !w-full"
                >
                  <option value="">Select a patient type</option>
                  <option value="new">New Patient</option>
                  <option value="existing">Existing Patient</option>
                </select>

                <select
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleInputChange}
                  className="!border-b !border-gray-300 focus:!border-teal-500 !py-2 !text-gray-800 !bg-transparent !tracking-tight !w-full"
                >
                  <option value="">Select a treatment</option>
                  <option value={treatment.slug}>{treatment.title}</option>
                </select>

                <select
                  name="provider"
                  value={formData.provider}
                  onChange={handleInputChange}
                  className="!border-b !border-gray-300 focus:!border-teal-500 !py-2 !text-gray-800 !bg-transparent !tracking-tight !w-full"
                >
                  <option value="">Select a provider</option>
                  <option value="dr-smith">Dr. Smith</option>
                  <option value="dr-jones">Dr. Jones</option>
                </select>

                {/* Additional Info */}
                <textarea
                  name="additionalInfo"
                  placeholder="Additional information"
                  rows={3}
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  className="!w-full !border-b !border-gray-300 focus:!border-teal-500 !py-2 !text-gray-800 !placeholder-gray-400 !resize-none !tracking-tight !transition"
                />

                {/* Terms */}
                <div className="!flex !items-start !pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                    className="!mt-1 !mr-2 !h-4 !w-4 !text-teal-600 !border-gray-300 !rounded !focus:!ring-0 cursor-pointer"
                  />
                  <label htmlFor="terms" className="!text-sm !text-gray-700 !tracking-tight">
                    I acknowledge and accept the{' '}
                    <a href="#" className="!text-teal-600 hover:!underline !font-medium">
                      Terms of Use
                    </a>.
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!formData.termsAccepted}
                  className={`!w-full !py-3 !mt-4 !rounded-md !font-semibold !tracking-tight !transition-all ${
                    formData.termsAccepted
                      ? '!bg-teal-600 hover:!bg-teal-700 !text-white'
                      : '!bg-gray-200 !text-gray-500 !cursor-not-allowed'
                  }`}
                >
                  SUBMIT →
                </button>
              </form>
            </div>

            {/* CONTACT CARD */}
            <div className="!rounded-xl !shadow-lg !bg-white !p-6">
              <img
                src="https://img.freepik.com/free-photo/close-up-ecological-toothbrushes_23-2148889818.jpg?ga=GA1.1.36719787.1758170710&semt=ais_hybrid&w=740&q=80"
                alt="Toothbrush gift"
                className="!w-full !rounded-md !mb-4"
              />
              <p className="!text-sm !text-gray-700 !tracking-tight !leading-relaxed !mb-4">
                You can book an appointment immediately via the form above, or reach out to us via
                email or phone.
              </p>

              <div className="!space-y-3">
                <button className="!w-full !py-3 !px-4 !bg-gray-100 !text-gray-800 !font-semibold !tracking-tight !rounded-md hover:!bg-gray-200 !transition">
                  EMAIL US 📧
                </button>
                <button
                  onClick={() => setOpen(true)}
                  className="!w-full !py-3 !px-4 !bg-teal-600 hover:!bg-teal-700 !text-white !font-semibold !tracking-tight !rounded-md !transition"
                >
                  CONTACT →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        {serviceFaqs.length > 0 && (
          <div className="!mt-16">
            <FaqToggle faqs={serviceFaqs} />
          </div>
        )}
      </div>

      <ContactModal />
      <OtherTreatment/>  
      
    </div>
  );
}