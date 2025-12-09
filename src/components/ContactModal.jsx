"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, User, MessageSquare, ClipboardList } from "lucide-react";
import { createAppointment } from "@/services/appointmentService";
import React from "react";
import toast from "react-hot-toast";

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
  const [message, setMessage] = useState("");

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
  const { open, setOpen, message, setMessage } = useContactModal();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const firstFieldRef = useRef(null);

  // Escape key to close
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
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
  }, [open]);

 
  const getTreatmentLabel = (value) => {
    const match = TREATMENT_OPTIONS.find((t) => t.value === value);
    return match ? match.label : "";
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true); // <-- Disable button immediately

  const form = new FormData(e.currentTarget);
  const data = Object.fromEntries(form.entries());

  const fullName = data.name?.trim() || "";
  const email = data.email?.trim() || "";
  const phone = data.phone?.replace(/\D/g, "").slice(0, 10);
  const treatment = data.treatment;
  const messageText = data.message?.trim() || "";

  const [firstName, ...rest] = fullName.split(" ");
  const lastName = rest.join(" ") || "";

  // VALIDATION (same)
  if (!firstName || !lastName) {
    toast.error("Please enter full name.");
    setSubmitting(false);
    return;
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    toast.error("Enter a valid email.");
    setSubmitting(false);
    return;
  }
  if (phone.length !== 10) {
    toast.error("Enter a 10-digit phone number.");
    setSubmitting(false);
    return;
  }
  if (!treatment) {
    toast.error("Select a treatment.");
    setSubmitting(false);
    return;
  }
  if (!messageText || messageText.length < 5) {
    toast.error("Enter a message.");
    setSubmitting(false);
    return;
  }

  const apiPayload = {
    firstName,
    lastName,
    email,
    phone: `+1${phone}`,
    treatment: getTreatmentLabel(treatment),
    message: messageText,
  };

  try {
    const res = await createAppointment(apiPayload);

    if (!res?.status) {
      toast.error(res?.message || "Something went wrong.");
      setSubmitting(false); // <--- Re-enable button
      return;
    }

    toast.success("Your message has been sent successfully!");

    // Re-enable before closing
    setSubmitting(false);

    // Close modal after small delay
    setTimeout(() => {
      setSuccess(true);
      setOpen(false);
      e.currentTarget.reset();
    }, 300);

  } catch (err) {
    console.error(err);
    toast.error("Submission failed.");
    setSubmitting(false); // <--- Re-enable button
  }
};


  const handleClose = () => {
    setOpen(false);
    setMessage("");
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
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            key="dialog"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            // Sets modal position (top aligned with dynamic margin)
          className="!fixed !inset-0 !z-50 !grid !justify-items-center !overflow-y-auto !items-start !p-5 !pb-12 sm:!pb-16 !mt-8 sm:!mt-24"
          >
            <div
              // MODIFIED: Added !max-h-[90vh] and !overflow-y-auto to allow internal scrolling on content overflow.
              className="!relative !w-full !max-w-lg !max-h-[90vh] !overflow-y-auto !rounded-2xl !bg-white !shadow-2xl !ring-1 !ring-black/5"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                // Priority added to close button classes
                className="!absolute !right-3 !top-3 !inline-flex !h-9 !w-9 !items-center !justify-center !rounded-full !border !bg-white/70 !shadow-sm !backdrop-blur !transition hover:!scale-105 !z-10"
                aria-label="Close"
              >
                <X className="!h-4 !w-4" />
              </button>

              <div className="!p-6 sm:!p-8">
                <h2 className="!tracking-tight !text-xl sm:!text-2xl !font-semibold mb-0">
                  {message || "Book An Appointment"}
                </h2>
                <p className="!text-sm !text-neutral-600">Fill out the form and we’ll contact you soon.</p>

                {success ? (
                  // Priority added to success message classes
                  <div className="!rounded-xl !border !border-emerald-200 !bg-emerald-50 !px-4 !py-3 !text-emerald-900">
                    🎉 Your message has been sent!
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="!mt-6 !grid !gap-4">
                    <div className="!grid !grid-cols-1 sm:!grid-cols-2 !gap-4">
                      <LabelInput
                        ref={firstFieldRef}
                        id="name"
                        label="Full name"
                        placeholder="Full name"
                        icon={<User className="!h-4 !w-4" />}
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
                      icon={<ClipboardList className="!h-4 !w-4" />}
                      options={TREATMENT_OPTIONS}
                      required
                    />

                    <LabelInput
                      id="phone"
                      type="tel"
                      label="Phone"
                      placeholder="10-digit phone"
                      icon={<Phone className="!h-4 !w-4" />}
                      autoComplete="tel"
                      required
                      maxLength={10}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
                      }}
                    />


                    <LabelTextarea
                      id="message"
                      label="How can we help?"
                      placeholder="Write your query"
                      icon={<MessageSquare className="!h-4 !w-4" />}
                      rows={4}
                      required
                    />

                    <button
                      type="submit"
                      disabled={submitting}
                      className="!rounded-xl !bg-black !px-5 !py-3 !text-white !shadow-md hover:!opacity-90"
                    >
                      {submitting ? "Sending…" : "Send Message"}
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
    <label className="!text-sm !font-medium">{label}{required && "*"}</label>
    <div className="!relative !flex !items-center !rounded-xl !border !border-neutral-200 !bg-white">
      <div className="!pl-3">{icon}</div>
      <select
        id={id}
        name={id}
        required={required}
        defaultValue=""
        className="!w-full !bg-transparent !px-3 !py-3 !text-sm !ring-0 !outline-none"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={!opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  </div>
);

const LabelInput = React.forwardRef(
  ({
    id,
    label,
    icon,
    type = "text",
    required,
    autoComplete,
    placeholder,
   ...rest },
  ref
) => (
    <div className="!grid !gap-1.5">
      <label className="!text-sm !font-medium">{label}{required && "*"}</label>
      <div className="!relative !flex !items-center !rounded-xl !border !border-neutral-200">
        <div className="!pl-3">{icon}</div>
        <input
          ref={ref}
          id={id}
          name={id}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          {...rest}
          className="!w-full !px-3 !py-3 !text-sm !bg-transparent focus:!outline-none"
        />
      </div>
    </div>
  )
);

const LabelTextarea = ({ id, label, icon, rows, required }) => (
  <div className="!grid !gap-1.5">
    <label className="!text-sm !font-medium">{label}{required && "*"}</label>
    <div className="!relative !flex !items-start !rounded-xl !border !border-neutral-200">
      <div className="!pl-3 !pt-3">{icon}</div>
      <textarea
        id={id}
        name={id}
        rows={rows}
        required={required}
        className="!w-full !px-3 !py-3 !text-sm !bg-transparent "
      />
    </div>
  </div>
);

export default ContactModal;
