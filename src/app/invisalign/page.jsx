"use client";
import { useState, useRef } from "react";
import { Calendar, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContactModal } from "@/components/ContactModal";

export default function InvisalignPage() {
  const router = useRouter();
  const { setOpen } = useContactModal();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    contactMethod: "Phone",
    robotCheck: false,
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // -----------------------
  // FAQ DATA + STATE + REF
  // -----------------------
  const faqs = [
    {
      q: "What is Invisalign?",
      a: `Invisalign is a series of clear, custom orthodontic aligners that straighten your teeth without traditional braces.
      
At the start of treatment, 3D computer imaging technology is used to create a treatment plan based on your individual needs.

Based on this plan, a series of custom Invisalign aligners will be made to fit your teeth precisely during each stage of treatment.`,
    },
    { q: "How does Invisalign work?", a: "Invisalign works by applying gentle pressure to shift teeth gradually." },
    { q: "How do I know if Invisalign will work for me?", a: "Your dentist will evaluate your dental structure and determine eligibility." },
    { q: "How long does Invisalign take?", a: "Most treatments take between 6 to 18 months depending on the case." },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);
  const faqRef = useRef(null);

  return (
    <div className="!min-h-screen pt-20 md:pt-0 md:!my-21 !bg-gray-50 !font-sans">
      {/* Header Banner */}
      <header className="!bg-[#03192ce6] !text-white !text-center !py-3 !px-4 !text-xs sm:!text-sm !font-semibold !tracking-wide">
        WELCOMING PATIENTS OF ALL AGES WITH CANADIAN DENTAL CARE PLAN (CDCP) COVERAGE ›
      </header>

      {/* Page Title */}
      <div className="!max-w-7xl !mx-auto !px-4 !py-6 sm:!py-8">
        <h1 className="!text-2xl sm:!text-3xl !font-bold !text-[#16609f] !tracking-tight !mb-2">
          Invisalign® in Langley
        </h1>
        <p className="!text-gray-700">
          Choose Invisalign clear aligners from Langley Dental in 20654 Fraser Hwy Unit #1, Langley, BC V3A 4G5, Canada, and straighten your smile without traditional metal braces.
        </p>
      </div>

      {/* MAIN GRID */}
      <main className="!max-w-7xl !mx-auto !grid !grid-cols-1 lg:!grid-cols-3 !gap-8 !px-4 !pb-16">
        {/* LEFT COLUMN */}
        <div className="lg:!col-span-2 !space-y-10">

          {/* HERO SECTION */}
          <section className="!bg-white !shadow-lg !rounded-lg !overflow-hidden">
            <div className="!grid md:!grid-cols-2">
              <div className="!p-8 !flex !flex-col !justify-center">
                <h2 className="!text-2xl !font-bold !text-[#16609f] !tracking-tight !mb-4">
                  GET STARTED ON A STRAIGHTER SMILE TODAY!
                </h2>
                <p className="!text-gray-700 !mb-6">
                  Request an appointment to find out if Invisalign clear aligners are right for you.
                </p>
                <button className="!bg-[#03192ce6] hover:!bg-[#6d9640] !text-white !font-semibold !px-8 !py-3 !rounded !transition-all " onClick={() => setOpen(true)}>
                  REQUEST A CONSULTATION
                </button>
              </div>
              <div className="!overflow-hidden !h-64 md:!h-auto">
                <img
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800"
                  alt="Smiling woman with aligners"
                  className="!w-full !h-full !object-cover"
                />
              </div>
            </div>
          </section>

          {/* ABOUT SECTION */}
          <section className="!bg-white !shadow-lg !rounded-lg !p-8 !space-y-10">
            <div className="!grid md:!grid-cols-2 !gap-8">
              <div>
                <div className="!relative !rounded-lg !overflow-hidden !shadow-md !aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800"
                    alt="Invisalign video"
                    className="!w-full !h-full !object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="!text-xl !font-bold !tracking-tight !text-[#16609f] !mb-4">
                  ABOUT INVISALIGN
                </h3>
                <p className="!text-gray-700 !mb-3">
                  Invisalign gradually straightens your smile using clear, custom orthodontic aligners that fit discreetly over your teeth.
                </p>
                <p className="!text-gray-700 !mb-3">
                  The aligners are removable, offering a convenient treatment option for busy adults and teens.
                </p>
                <p className="!text-gray-700">
                  Wear them 20–22 hours daily and remove them to eat, drink, brush, and floss.
                </p>
              </div>
            </div>

            <div>
              <h3 className="!text-xl !font-bold !text-[#16609f] !tracking-tight !mb-4">
                INVISALIGN IN LANGLEY : YOUR CUSTOM TREATMENT PLAN
              </h3>
              <p className="!text-gray-700 !mb-3">
                To develop your treatment plan, we’ll take digital x-rays and impressions to create a digital 3D image of your mouth.
              </p>
              <p className="!text-gray-700">
                Based on this image, your dentist will then create a custom plan for your specific needs.
              </p>
            </div>
          </section>

          {/* LEARN MORE */}
          <section className="!bg-white !shadow-lg !rounded-lg !p-10 !text-center">
            <h2 className="!text-2xl !font-bold !tracking-tight !text-[#16609f] !mb-4">
              LEARN MORE ABOUT INVISALIGN
            </h2>
            <p className="!text-gray-700 !mb-8">
              Click below to learn more about Invisalign clear aligners and see if they’re a fit for your lifestyle.
            </p>

            <div className="!flex !flex-wrap !justify-center !gap-4">
            {/* Example with a hover transform */}
            <button
                onClick={() => faqRef.current?.scrollIntoView({ behavior: "smooth" })}
                className="!bg-[#16609f] hover:!bg-cyan-900 !text-white !px-6 !py-3 !rounded !font-semibold !transition-all !duration-200 hover:!-translate-y-1"
            >
                INVISALIGN FAQS
            </button>

            <button
                onClick={() => router.push("/options-dental")}
                className="!bg-gray-600 hover:!bg-cyan-900 !text-white !px-6 !py-3 !rounded !font-semibold !transition-all !duration-200 hover:!-translate-y-1"
            >
                TREATABLE CASES
            </button>

            <button
                onClick={() => router.push("/options-dental")}
                className="!bg-gray-300 hover:!bg-cyan-900 hover:!text-white !text-gray-800 !px-6 !py-3 !rounded !font-semibold !transition-all !duration-200 hover:!-translate-y-1"
            >
                SMILE ASSESSMENT
            </button>
        </div>
          </section>

          {/* FAQ SECTION */}
          <section id="faq" ref={faqRef} className="!bg-white !shadow-lg !rounded-lg !p-8">
            <h2 className="!text-2xl !font-bold !tracking-tight !text-[#16609f] !mb-6">
              Invisalign FAQs
            </h2>

            <div className="!space-y-4">
              {faqs.map((item, i) => (
                <div key={i} className="!border-b !pb-4">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                    className="!w-full !flex !items-center !justify-between !text-left"
                  >
                    <span className="!font-semibold !text-[#16609f]">{item.q}</span>
                    <span className="!text-[#16609f] !text-xl">{openFAQ === i ? "-" : "+"}</span>
                  </button>

                  {openFAQ === i && (
                    <p className="!mt-3 !text-gray-700 !text-sm !leading-relaxed whitespace-pre-line">
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* FORM SECTION */}
          {/* <section className="!bg-white !shadow-lg !rounded-lg !p-10">
            <h2 className="!text-2xl !font-bold !tracking-tight !text-[#16609f] !text-center !mb-4">
              REQUEST AN INVISALIGN APPOINTMENT
            </h2>
            <p className="!text-gray-700 !text-center !mb-10">
              Fill out the form below to request an appointment at our Surrey location.
            </p>

            <form
              onSubmit={handleSubmit}
              className="!max-w-2xl !mx-auto !bg-gray-50 !p-8 !rounded-lg !shadow-inner !space-y-5"
            >
              <h3 className="!text-lg !font-bold !tracking-tight !text-[#16609f] !mb-6">
                REQUEST A CONSULTATION
              </h3>

              <input
                type="text"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                required
                className="!w-full !p-3 !border !border-gray-300 !rounded focus:!border-[#16609f] !outline-none"
              />
              <input
                type="text"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                required
                className="!w-full !p-3 !border !border-gray-300 !rounded focus:!border-[#16609f] !outline-none"
              />
              <input
                type="email"
                placeholder="Email *"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                className="!w-full !p-3 !border !border-gray-300 !rounded focus:!border-[#16609f] !outline-none"
              />
              <input
                type="tel"
                placeholder="Phone *"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
                className="!w-full !p-3 !border !border-gray-300 !rounded focus:!border-[#16609f] !outline-none"
              />

              <label className="!block !text-sm !font-semibold !text-gray-700">
                How should we contact you? *
              </label>
              <select
                value={formData.contactMethod}
                onChange={(e) => handleChange("contactMethod", e.target.value)}
                className="!w-full !p-3 !border !border-gray-300 !rounded !bg-white focus:!border-[#16609f] !outline-none"
              >
                <option>Phone</option>
                <option>Email</option>
                <option>Text</option>
              </select>

              <label className="!block !text-sm !font-semibold !text-gray-700">
                Spam Blocker
              </label>
              <div className="!bg-white !border !border-gray-300 !p-4 !rounded !flex !items-center !gap-3">
                <input
                  type="checkbox"
                  checked={formData.robotCheck}
                  onChange={(e) => handleChange("robotCheck", e.target.checked)}
                  required
                  className="!w-5 !h-5"
                />
                <span className="!text-sm !text-gray-800">I'm not a robot</span>
                <span className="!ml-auto !text-xs !text-gray-500 !font-semibold">
                  reCAPTCHA
                </span>
              </div>

              <button
                type="submit"
                className="!w-full !bg-[#03192ce6] hover:!bg-[#6d9640] !text-white !font-bold !py-3 !rounded !transition-all"
              >
                SUBMIT
              </button>
            </form>
          </section> */}

          {/* BOTTOM BANNER */}
          {/* <section className="!bg-gray-100 !text-center !py-16 !rounded-lg">
            <h2 className="!text-3xl !font-bold !tracking-tight !text-[#16609f] !mb-4">
              We're Located in 20654 Fraser Hwy Unit #1, Langley, BC V3A 4G5, Canada
            </h2>
            <p className="!text-gray-700 !mb-8">
              We provide accessible parking and are open 7 days a week. Get in touch to book your appointment today!
            </p>
            <button className="!bg-[#03192ce6] hover:!bg-[#6d9640] !text-white !font-semibold !px-8 !py-3 !rounded" onClick={() => setOpen(true)}>
              REQUEST APPOINTMENT
            </button>
          </section> */}
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="!space-y-6">
          <div className="!bg-[#16609f] !text-white !text-center !font-bold !py-3 !rounded-top !text-sm !tracking-wide">
            INVISALIGN®
          </div>

          <div className="!bg-white !rounded !shadow !overflow-hidden">
            <a
              href="#"
              className="!block !px-5 !py-3 !text-gray-700 hover:!bg-gray-100 !border-l-4 !border-transparent hover:!border-[#16609f]"
            >
              Invisalign® Clear Aligners
            </a>

            <div className="!px-5 !py-3">
              <button className="!w-full !bg-[#03192ce6] hover:!bg-[#6d9640] !text-white !font-semibold !py-3 !rounded !flex !items-center !justify-center !gap-2" onClick={() => setOpen(true)}>
                <Calendar className="!w-4 !h-4" />
                REQUEST APPOINTMENT
              </button>
            </div>

            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("faq");
                if (!el) return;

                const offset = 80; // adjust for sticky header
                const top = el.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({ top, behavior: "smooth" });
              }}
              className="!block !px-5 !py-3 !text-gray-700 hover:!bg-gray-100 !border-l-4 !border-transparent hover:!border-[#16609f]"
            >
              Invisalign® FAQs
            </a>


            <a
              onClick={() => router.push("/options-dental")}
              className="!block !px-5 !py-3 !text-gray-700 hover:!bg-gray-100 !border-l-4 !border-transparent hover:!border-[#16609f]"
            >
              Treatable Cases
            </a>

            <a
              onClick={() => router.push("/options-dental")}
              className="!block !px-5 !py-3 !text-gray-700 hover:!bg-gray-100 !border-l-4 !border-transparent hover:!border-[#16609f]"
            >
              Smile Assessment
            </a>
          </div>

          <div className="!bg-white !rounded !shadow !overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800"
              alt="Dentist"
              className="!w-full !h-48 !object-cover"
            />

            <div className="!p-5">
              <h3 className="!text-lg !font-bold !text-[#16609f] !tracking-tight !mb-3">
                We're open every day of the week.
              </h3>

              <p className="!text-sm !text-gray-700 !mb-5">
                Before work, after work, and even on weekends — at Langley Dental, you get the care you need.
              </p>

              <button className="!w-full !bg-[#03192ce6] hover:!bg-[#6d9640] !text-white !font-semibold !py-2 !rounded !text-sm" onClick={() => setOpen(true)}>
                BOOK NOW
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
