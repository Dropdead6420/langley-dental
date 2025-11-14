"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, User, MessageSquare, ClipboardList } from "lucide-react"; 
import React from 'react';

// ---------------------------------------------------------------
// 1. Treatment Options Data
// ---------------------------------------------------------------
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

// ---------------------------------------------------------------
// Context setup for opening/closing modal globally
// ---------------------------------------------------------------
const ContactModalContext = createContext();

export function ContactModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);


  return (
    <ContactModalContext.Provider value={{ open, setOpen, message, setMessage }}>
      {children}
      <ContactModal />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  return useContext(ContactModalContext);
}


// ---------------------------------------------------------------
// Modal component
// ---------------------------------------------------------------
function ContactModal() {
  const { open, setOpen } = useContactModal();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const firstFieldRef = useRef(null);
  const {message,setMessage} = useContactModal();

  // Close on Escape key press
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [setOpen]);

  // Handle focus and body scroll lock
  useEffect(() => {
    if (open) {
      setTimeout(() => firstFieldRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    // Validation check including the new treatment field
    if (!payload.name || !payload.email || !payload.treatment || !payload.message) return;

    setSubmitting(true);
    try {
      // Simulate API call delay
      await new Promise((r) => setTimeout(r, 900)); 
      setSuccess(true);
      setOpen(false); 
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      // Custom UI alert replacement needed if not using browser alerts
      console.log("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
      // Reset success state after a short delay so the user can send another message later
      setTimeout(() => setSuccess(false), 3000); 
    }
  };

  const handleClose = () => {
    setOpen(false);
    setMessage('');
    setSuccess(false); 
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Priority added to overlay classes
            className="!fixed !inset-0 !z-50 !bg-black/30 !backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            key="dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-heading"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            // Sets modal position (top aligned with dynamic margin)
          className="!fixed !inset-0 !z-50 !grid !justify-items-center !items-start !p-5 !pb-12 sm:!pb-16 !mt-8 sm:!mt-24"
          >
            <div
              // MODIFIED: Added !max-h-[90vh] and !overflow-y-auto to allow internal scrolling on content overflow.
              className="!relative !w-full !max-w-lg !max-h-[90vh] !overflow-y-auto !rounded-2xl !bg-white !shadow-2xl !ring-1 !ring-black/5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="!pointer-events-none !absolute !inset-x-0 !top-0 !h-24 bg-[radial-gradient(120px_50px_at_30%_10%,rgba(0,0,0,0.06),transparent),radial-gradient(140px_60px_at_70%_10%,rgba(0,0,0,0.04),transparent)]" />

              <button
                onClick={handleClose}
                // Priority added to close button classes
                className="!absolute !right-3 !top-3 !inline-flex !h-9 !w-9 !items-center !justify-center !rounded-full !border !border-black/5 !bg-white/70 !shadow-sm !backdrop-blur !transition hover:!scale-105 focus:!outline-none focus-visible:!ring-2 focus-visible:!ring-black/40 !z-10"
                aria-label="Close"
              >
                <X className="!h-4 !w-4" />
              </button>

              <div className="!relative !grid !gap-6 !p-6 sm:!p-8">
                <div className="!space-y-1">
                  <h2 id="contact-heading" className="!text-xl sm:!text-2xl !font-semibold !tracking-tight !text-neutral-900">
                    
                    {message ? message : 'Book An Appointment '}
                  </h2>
                  <p className="!text-sm !text-neutral-600">
                    We'd love to hear from you. Fill out the form and our team will get back within 1–2 business days.
                  </p>
                </div>

                {success ? (
                  // Priority added to success message classes
                  <div className="!rounded-xl !border !border-emerald-200 !bg-emerald-50 !px-4 !py-3 !text-emerald-900">
                    🎉 Thanks! Your message has been sent successfully.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="!grid !gap-4">
                    <div className="!grid !grid-cols-1 sm:!grid-cols-2 !gap-4">
                      <LabelInput
                        ref={firstFieldRef}
                        id="name"
                        label="Full name"
                        placeholder="full name"
                        icon={<User className="!h-4 !w-4 !text-black" />}
                        autoComplete="name"
                        required
                      />
                      <LabelInput
                        id="email"
                        type="email"
                        placeholder="email"
                        label="Email"
                        icon={<Mail className="!h-4 !w-4" />}
                        autoComplete="email"
                        required
                      />
                    </div>

                    <LabelSelect
                        id="treatment"
                        label="Select a treatment"
                        placeholder="select a treatment"
                        icon={<ClipboardList className="!h-4 !w-4" />}
                        options={TREATMENT_OPTIONS}
                        required
                    />

                    <LabelInput
                      id="phone"
                      type="tel"
                      label="Phone (optional)"
                      placeholder="phone number"
                      icon={<Phone className="!h-4 !w-4" />}
                      autoComplete="tel"
                    />

                    <LabelTextarea
                      id="message"
                      label="How can we help?"
                      placeholder="write your query"
                      icon={<MessageSquare className="!h-4 !w-4" />}
                      rows={4}
                      required
                    />

                    <div className="!flex !items-start !gap-3 !rounded-xl !bg-neutral-50 !p-3 !ring-1 !ring-inset !ring-neutral-200">
                      <input id="consent" name="consent" type="checkbox" className="!mt-1 !h-4 !w-4 !rounded !border-neutral-300 !text-black focus:!ring-black" required />
                      <label htmlFor="consent" className="!text-sm !text-neutral-700">
                        I agree to the <a href="#" className="!underline !underline-offset-4">Privacy Policy</a>.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      // Priority added to submit button classes
                      className="!group !inline-flex !items-center !justify-center !gap-2 !rounded-xl !bg-black !px-5 !py-3 !font-medium !text-white !shadow-lg !shadow-black/10 !transition hover:!translate-y-[-1px] aria-disabled:!opacity-60"
                      aria-disabled={submitting}
                    >
                      {submitting ? (
                        <span className="!inline-flex !items-center !gap-2 !text-white">
                          <Spinner /> Sending…
                        </span>
                      ) : (
                        <span className="!inline-flex !items-center !gap-2 !text-white">
                          Send message
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ---------------------------------------------------------------
// UI Primitives with ! Priority
// ---------------------------------------------------------------

// LabelSelect Component
const LabelSelect = ({ id, label, icon, options, required = false }) => (
  <div className="!grid !gap-1.5">
    <label htmlFor={id} className="!text-sm !font-medium !text-neutral-800">
      {label}{required && <span className="!text-red-500">*</span>}
    </label>
    <div className="!group !relative !flex !items-center !overflow-hidden !rounded-xl !border !border-neutral-200 !bg-white !ring-1 !ring-transparent !transition focus-within:!ring-black/30">
      {/* Icon */}
      <div className="!pointer-events-none !pl-3 !text-neutral-500">{icon}</div> 
      <select
        id={id}
        name={id}
        required={required}
        defaultValue={options[0].value}
        className="!w-full !appearance-none !border-0 !bg-transparent !pr-8 !pl-3 !py-3 !text-sm !text-neutral-900 focus:!outline-none disabled:!bg-neutral-50"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.value === "" && required}
          >
            {option.label}
          </option>
        ))}
      </select>
      {/* Custom dropdown arrow to ensure consistent appearance */}
      <div className="!pointer-events-none !absolute !inset-y-0 !right-0 !flex !items-center !pr-3 !text-neutral-500">
        <svg className="!h-5 !w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.99l3.71-3.76a.75.75 0 111.08 1.04l-4.25 4.31a.75.75 0 01-1.08 0L5.15 8.27a.75.75 0 01.08-1.06z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  </div>
);


// LabelInput Component (using React.forwardRef for ref support)
const LabelInput = React.forwardRef(
  ({
    id,
    label,
    icon,
    type = "text",
    required = false,
    autoComplete,
    placeholder,
  },
  ref
) => {
  return (
    <div className="!grid !gap-1.5">
      <label htmlFor={id} className="!text-sm !font-medium !text-neutral-800">
        {label}{required && <span className="!text-red-500">*</span>}
      </label>
      <div className="!group !relative !flex !items-center !overflow-hidden !rounded-xl !border !border-neutral-200 !bg-white !ring-1 !ring-transparent !transition focus-within:!ring-black/30">
        <div className="!pointer-events-none !pl-3 !text-neutral-500">{icon}</div>
        <input
          ref={ref}
          id={id}
          name={id}
          type={type}
          required={required}
          autoComplete={autoComplete}
          className="!w-full !border-0 !bg-transparent !px-3 !py-3 !text-sm !text-neutral-900 placeholder:!text-neutral-400 focus:!outline-none"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
});

// LabelTextarea Component
const LabelTextarea = ({ id, label, icon, rows = 4, required = false }) => (
  <div className="!grid !gap-1.5">
    <label htmlFor={id} className="!text-sm !font-medium !text-neutral-800">
      {label}{required && <span className="!text-red-500">*</span>}
    </label>
    <div className="!group !relative !flex !items-start !overflow-hidden !rounded-xl !border !border-neutral-200 !bg-white !ring-1 !ring-transparent !transition focus-within:!ring-black/30">
      <div className="!pointer-events-none !pl-3 !pt-3 !text-neutral-500">{icon}</div>
      <textarea
        id={id}
        name={id}
        rows={rows}
        required={required}
        className="!min-h-[120px] !w-full !resize-y !border-0 !bg-transparent !px-3 !py-3 !text-sm !text-neutral-900 placeholder:!text-neutral-400 focus:!outline-none"
        placeholder=""
      />
    </div>
  </div>
);

const Spinner = () => (
  <svg className="!h-4 !w-4 !animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle className="!opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="!opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
  </svg>
);

// Export components
export { LabelInput, LabelTextarea, LabelSelect, Spinner };
export default ContactModal;
