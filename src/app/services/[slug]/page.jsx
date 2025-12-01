"use client";

import treatments from '@/data/treatments';
import Link from 'next/link';
import { useState } from 'react';
import ContactModal, { useContactModal } from '@/components/ContactModal';
import { Mail } from 'lucide-react';
import { faqs } from '@/data/faq';
import FaqToggle from '@/components/Common/Faq';
import OtherTreatment from './OtherTreatment';
import toast from "react-hot-toast";
import { createAppointment } from "@/services/appointmentService";

export default function TreatmentDetail({ params }) {
  const { setOpen } = useContactModal();
  const treatment = treatments.find(t => t.slug === params.slug);
  const serviceFaqs = faqs[params.slug] || [];

    const TREATMENT_OPTIONS = [
    { value: "", label: "Select a treatment..." },
    { value: "bondings-veneers", label: "Bondings and Veneers" },
    { value: "childrens-dentistry", label: "Children’s Dentistry" },
    { value: "dentures", label: "Complete and Partial Dentures" },
    { value: "dental-emergencies", label: "Dental Emergencies" },
    { value: "digital-radiography", label: "Digital Radiography" },
    { value: "invisalign", label: "Invisalign Treatment" },
    { value: "full-mouth-reconstruction", label: "Full Mouth Reconstruction" },
    { value: "amalgam-removal", label: "Amalgam Removal and White Fillings" },
    { value: "cosmetic", label: "Cosmetic Dentistry" },
    { value: "general-dentistry", label: "General Dentistry" },
    { value: "botox", label: "Botox Treatment" },
    { value: "cleaning-prevention", label: "Cleaning and Prevention" },
    { value: "crowns-bridges", label: "Crowns and Bridges" },
    { value: "implants", label: "Dental Implants" },
    { value: "extractions-grafting", label: "Extractions and Bone Grafting" },
    { value: "root-canal", label: "Root Canal Treatment" },
    { value: "teeth-whitening", label: "Teeth Whitening" },
    { value: "smile-makeover", label: "Smile Makeovers" },
    { value: "sedation", label: "Sedation Dentistry" },
    { value: "orthodontics", label: "Orthodontics (Braces/Aligners)" },
    { value: "emergency", label: "Emergency Dental Care" },
    { value: "other", label: "Other / Not Sure" },
  ];

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    treatment:  '',
    additionalInfo: '',
    termsAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Phone restriction
    if (name === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      return setFormData(prev => ({ ...prev, phone: digits }));
    }

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // BASIC VALIDATION  
    if (!formData.firstName || !formData.lastName)
      return toast.error("Enter full name.");

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return toast.error("Enter a valid email.");

    if (formData.phone.length !== 10)
      return toast.error("Enter a valid 10-digit phone.");

    if (!formData.termsAccepted)
      return toast.error("Accept the terms to continue.");

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: `+1${formData.phone}`,
      treatment: formData.treatment || "General Inquiry",
      message: formData.additionalInfo || "",
    };

    try {
      setLoading(true);

      const res = await createAppointment(payload);

      if (!res?.status) {
        toast.error(res?.message || "Something went wrong.");
        return;
      }

      toast.success("Your appointment request has been sent!");
      // setOpen(true); // open modal after success

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        treatment: treatment?.title || "",
        additionalInfo: '',
        termsAccepted: false,
      });

    } catch (err) {
      console.error(err);
      toast.error("Submission failed.");
    } finally {
      setLoading(false);
    }
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
              <Link href="/services" passHref>
                <button className="!px-6 !py-3 !rounded-md !shadow-sm !font-semibold !tracking-tight !text-white !bg-blue-600 hover:!bg-blue-700 focus:!ring-2 focus:!ring-offset-2 focus:!ring-blue-500 !transition">
                  Back to Services
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
                    className="!border-b !border-gray-300 focus:!border-teal-500 !py-2"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="!border-b !border-gray-300 focus:!border-teal-500 !py-2"
                  />
                </div>

                {/* Contact */}
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
                  required
                  className="!border-b !border-gray-300 focus:!border-teal-500 !py-2 !text-gray-800 !bg-transparent !tracking-tight !w-full"
                />

                {/* Treatment */}
                <select
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleInputChange}
                  required
                  className="!border-b !border-gray-300 focus:!border-teal-500 !py-2 !text-gray-800 !bg-transparent !tracking-tight !w-full"
                >
                  {TREATMENT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} disabled={!opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>


                {/* Message */}
                 <textarea
                  name="additionalInfo"
                  rows={3}
                  placeholder="Additional information"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  className="!w-full !border-b !border-gray-300 focus:!border-teal-500 !py-2 !text-gray-800 !placeholder-gray-400  !tracking-tight !transition"
                />

                {/* Terms */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                    className="!mt-1 !mr-2"
                  />
                  <label className="!text-sm">
                     I acknowledge and accept the{" "}
                    <span className="!text-teal-600 !font-semibold">Terms of Use</span>.
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!formData.termsAccepted || loading}
                  className={`!w-full !py-3 !rounded-md !font-semibold !tracking-tight ${
                    loading || !formData.termsAccepted
                      ? "!bg-gray-300 !cursor-not-allowed"
                      : "!bg-teal-600 hover:!bg-teal-700 !text-white"
                  }`}
                >
                  {loading ? "Submitting…" : "SUBMIT →"}
                </button>
              </form>
            </div>

            {/* Contact Card */}
            <div className="!rounded-xl !shadow-lg !bg-white !p-6">
              <img
                src="https://img.freepik.com/free-photo/close-up-ecological-toothbrushes_23-2148889818.jpg"
                className="!w-full !rounded-md !mb-4"
              />
              <p className="!text-sm !mb-4">
                You can book an appointment immediately or contact us directly.
              </p>

              <div className="space-y-3">
                <a href="mailto:info@langleycaredental.com">
                  <button className="!w-full !py-3 !bg-gray-100 hover:!bg-gray-200 flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" /> EMAIL US
                  </button>
                </a>

                <button
                  onClick={() => setOpen(true)}
                  className="!w-full !py-3 !bg-teal-600 hover:!bg-teal-700 !text-white"
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