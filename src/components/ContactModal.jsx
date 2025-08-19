"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, User, MessageSquare } from "lucide-react";

// ---------------------------------------------------------------
// Context setup for opening/closing modal globally
// ---------------------------------------------------------------
const ContactModalContext = createContext();

export function ContactModalProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <ContactModalContext.Provider value={{ open, setOpen }}>
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

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [setOpen]);

  useEffect(() => {
    if (open) {
      setTimeout(() => firstFieldRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    if (!payload.name || !payload.email || !payload.message) return;

    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 900));
      setSuccess(true);
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
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
            className="fixed inset-0 z-50 grid place-items-center p-4"
          >
            <div
              className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(120px_50px_at_30%_10%,rgba(0,0,0,0.06),transparent),radial-gradient(140px_60px_at_70%_10%,rgba(0,0,0,0.04),transparent)]" />

              <button
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/5 bg-white/70 shadow-sm backdrop-blur transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 z-10"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative grid gap-6 p-6 sm:p-8">
                <div className="space-y-1">
                  <h2 id="contact-heading" className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">
                    Let's talk
                  </h2>
                  <p className="text-sm text-neutral-600">
                    We'd love to hear from you. Fill out the form and our team will get back within 1–2 business days.
                  </p>
                </div>

                {success ? (
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-900">
                    Thanks! Your message has been sent.
                    <div className="mt-3">
                      <button
                        onClick={() => setSuccess(false)}
                        className="rounded-lg border border-emerald-200 bg-white px-3 py-1.5 text-sm font-medium text-emerald-900 shadow-sm transition hover:bg-emerald-100"
                      >
                        Send another message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <LabelInput
                        ref={firstFieldRef}
                        id="name"
                        label="Full name"
                        icon={<User className="h-4 w-4 text-black" />}
                        autoComplete="name"
                        required
                      />
                      <LabelInput
                        id="email"
                        type="email"
                        label="Email"
                        icon={<Mail className="h-4 w-4" />}
                        autoComplete="email"
                        required
                      />
                    </div>

                    <LabelInput
                      id="phone"
                      type="tel"
                      label="Phone (optional)"
                      icon={<Phone className="h-4 w-4" />}
                      autoComplete="tel"
                    />

                    <LabelTextarea
                      id="message"
                      label="How can we help?"
                      icon={<MessageSquare className="h-4 w-4" />}
                      rows={4}
                      required
                    />

                    <div className="flex items-start gap-3 rounded-xl bg-neutral-50 p-3 ring-1 ring-inset ring-neutral-200">
                      <input id="consent" name="consent" type="checkbox" className="mt-1 h-4 w-4 rounded border-neutral-300 text-black focus:ring-black" required />
                      <label htmlFor="consent" className="text-sm text-neutral-700">
                        I agree to the <a href="#" className="underline underline-offset-4">Privacy Policy</a>.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="group inline-flex items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 font-medium text-white shadow-lg shadow-black/10 transition hover:translate-y-[-1px] aria-disabled:opacity-60"
                      aria-disabled={submitting}
                    >
                      {submitting ? (
                        <span className="inline-flex items-center gap-2 text-white">
                          <Spinner /> Sending…
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-white">
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

// --- UI primitives ---
const LabelInput = (
  {
    id,
    label,
    icon,
    type = "text",
    required = false,
    autoComplete,
  },
  ref
) => {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-neutral-800">
        {label}{required && <span className="text-red-500">*</span>}
      </label>
      <div className="group relative flex items-center overflow-hidden rounded-xl border border-neutral-200 bg-white ring-1 ring-transparent transition focus-within:ring-black/30">
        <div className="pointer-events-none pl-3 text-neutral-500">{icon}</div>
        <input
          ref={ref}
          id={id}
          name={id}
          type={type}
          required={required}
          autoComplete={autoComplete}
          className="w-full border-0 bg-transparent px-3 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
          placeholder=""
        />
      </div>
    </div>
  );
};

const LabelTextarea = ({ id, label, icon, rows = 4, required = false }) => (
  <div className="grid gap-1.5">
    <label htmlFor={id} className="text-sm font-medium text-neutral-800">
      {label}{required && <span className="text-red-500">*</span>}
    </label>
    <div className="group relative flex items-start overflow-hidden rounded-xl border border-neutral-200 bg-white ring-1 ring-transparent transition focus-within:ring-black/30">
      <div className="pointer-events-none pl-3 pt-3 text-neutral-500">{icon}</div>
      <textarea
        id={id}
        name={id}
        rows={rows}
        required={required}
        className="min-h-[120px] w-full resize-y border-0 bg-transparent px-3 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
        placeholder=""
      />
    </div>
  </div>
);

const Spinner = () => (
  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
  </svg>
);

// Forward refs
const _LabelInput = Object.assign(
  (props, ref) => LabelInput(props, ref),
  { displayName: "LabelInput" }
);

const ForwardedLabelInput = (props) => {
  return <_LabelInput {...props} ref={props.ref} />;
};

export { ForwardedLabelInput as LabelInput, LabelTextarea, Spinner };
