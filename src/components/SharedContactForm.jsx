"use client";

import React, { useState, useRef } from "react";
import { Mail, Phone, User, MessageSquare, ClipboardList } from "lucide-react";
import { createAppointment } from "@/services/appointmentService";
import toast from "react-hot-toast";

// Treatment Options Data
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

// UI Primitives
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
LabelInput.displayName = "LabelInput";

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
                className="!w-full !px-3 !py-3 !text-sm !bg-transparent"
            />
        </div>
    </div>
);

export default function SharedContactForm({ onSuccess, className }) {
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const firstFieldRef = useRef(null);

    const getTreatmentLabel = (value) => {
        const match = TREATMENT_OPTIONS.find((t) => t.value === value);
        return match ? match.label : "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formElement = e.currentTarget; // Capture form element reference immediately
        setSubmitting(true);

        const form = new FormData(formElement);
        const data = Object.fromEntries(form.entries());

        const fullName = data.name?.trim() || "";
        const email = data.email?.trim() || "";
        const phone = data.phone?.replace(/\D/g, "").slice(0, 10);
        const treatment = data.treatment;
        const messageText = data.message?.trim() || "";

        const [firstName, ...rest] = fullName.split(" ");
        const lastName = rest.join(" ") || "";

        // VALIDATION
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
                setSubmitting(false);
                return;
            }

            toast.success("Your message has been sent successfully!");
            setSubmitting(false);
            setSuccess(true);
            formElement.reset(); // Use captured reference

            if (onSuccess) {
                onSuccess();
            }

            // Hide success message after 5 seconds
            setTimeout(() => {
                setSuccess(false);
            }, 5000);

        } catch (err) {
            console.error(err);
            toast.error("Submission failed.");
            setSubmitting(false);
        }
    };


    return (
        <div className={`!mt-6 ${className || ""}`}>
            {success && (
                <div className="!mb-4 !tracking-tight !rounded-xl !border !border-emerald-200 !bg-emerald-50 !px-4 !py-3 !text-emerald-900 !animate-in !fade-in !slide-in-from-top-2">
                    🎉 Your message has been sent! We will contact you shortly.
                </div>
            )}

            <form onSubmit={handleSubmit} className="!grid !gap-2">
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
        </div>
    );
}
