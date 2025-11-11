"use client";

import { useContactModal } from "@/components/ContactModal";
import { Phone, ChevronDown, Search } from "lucide-react";
import { useState } from "react";

export default function Test() {
  const [expandedSection, setExpandedSection] = useState(null);
const { setOpen } = useContactModal();
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="!min-h-screen !my-30 !bg-gray-50">
      {/* ✅ Top Banner - Gradient Blue */}
      <div className="!bg-gradient-to-r !from-[#03192c] !to-[#0b3d91] !text-white !text-center !py-3 !tracking-tight !px-4 !text-sm !font-medium">
        WELCOMING PATIENTS OF ALL AGES WITH CANADIAN DENTAL CARE PLAN (CDCP) COVERAGE! »
      </div>

      <div className="!max-w-7xl !mx-auto !px-4 !py-12">
        <div className="!grid lg:!grid-cols-3 !gap-8">
          {/* Left Section */}
          <div className="lg:!col-span-2">
            <div className="!bg-white !rounded-lg !shadow-sm !p-8 !mb-8">
              <h1 className="!text-4xl !font-bold !tracking-tight !text-[#03192c] !mb-4">
                Emergency Dental Care in Richmond, BC

              </h1>
              <p className="!text-lg !text-[#0b3d91] !leading-relaxed">
                At Richmond Shine Dental, we know dental emergencies can happen when 
                you least expect them. Whether it’s a sudden toothache, a chipped tooth,
                 or a knocked-out tooth — <br/>our experienced Richmond dentists are ready to provide same-day emergency care to relieve pain and restore your smile.


              </p>
            </div>

            <div className="!bg-gray-50 !rounded-lg !p-8 !mb-8">
              <h2 className="!text-2xl !font-bold !tracking-tight !text-[#03192c] !mb-6 !text-center">
                Trusted Emergency Dentist in Richmond

              </h2>

              <div className="!text-center !mb-6">
                <p className="!text-gray-700">
                  Call us now at  {" "}
                  <a href="tel:7783667770" className="!text-[#0b3d91] hover:!text-[#164bbf] !font-medium">
                    
                  </a>{" "}
                  at{" "}
                  <a href="tel:7783667770" className="!text-[#0b3d91] hover:!text-[#164bbf] !font-medium">
                    (778) 366-7770 
                  </a>
                   &nbsp;for immediate assistance or to book a same-day appointment.

                </p>
              </div>

              <p className="!text-gray-700 !text-center !text-sm !mb-6">
                Dental emergencies can be stressful and painful, but prompt treatment can make all the difference. Our caring dental team is committed to providing fast, gentle, and effective solutions so you can feel better right away.

              </p>

              <p className="!text-gray-700 !text-sm !leading-relaxed">
                We welcome walk-ins and same-day emergency appointments, 7 days a week.

              </p>
            </div>

            <div className="!bg-white !rounded-lg !shadow-sm !overflow-hidden">
              <div className="!grid md:!grid-cols-2 !gap-0">
                <div className="!p-0">
                  <img
                    src="https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Modern dental office"
                    className="!w-full !h-full !object-cover !min-h-[300px]"
                  />
                </div>

                <div className="!p-8">
                  <h3 className="!text-2xl !tracking-tight !font-bold !text-[#03192c] !mb-4">
                    Common Dental Emergencies We Treat Severe Toothache

                  </h3><p className="!mb-6">If you experience sharp, throbbing, or persistent tooth pain, it may indicate an infection or decay. Avoid delaying care — early treatment can prevent the issue from worsening.
</p>

                 <div className="!space-y-2">
  {[
    "toothache",
    "knocked-tooth",
    "broken-tooth",
    "lost-filling",
    "loose-tooth",
  ].map((section) => (
    <div key={section}>
      <button
        onClick={() => toggleSection(section)}
        className="!w-full !flex !items-center !justify-between !py-3 !text-left !font-semibold !text-[#03192c] hover:!text-[#164bbf] !transition-colors !border-t !border-gray-200"
      >
        <span>
          {section === "toothache"
            ? "Severe Toothache"
            : section === "knocked-tooth"
            ? "Knocked-Out Tooth"
            : section === "broken-tooth"
            ? "Broken or Chipped Tooth"
            : section === "lost-filling"
            ? "Lost Filling or Crown"
            : "Loose Tooth"}
        </span>
        <ChevronDown
          className={`!w-5 !h-5 !transition-transform ${
            expandedSection === section ? "!rotate-180" : ""
          }`}
        />
      </button>

      {expandedSection === section && (
        <div className="!py-3 !text-sm !text-gray-700 !space-y-3 !border-t !border-gray-100">
          {section === "toothache" && (
            <>
              <p>
                If you experience sharp, throbbing, or persistent tooth pain, it
                may indicate an infection or decay. Avoid delaying care —
                early treatment can prevent the issue from worsening.
              </p>
            </>
          )}

          {section === "knocked-tooth" && (
            <>
              <p>
                Keep the tooth moist&nbsp;(in milk or your mouth) and avoid
                touching the root. Come to our office immediately — timely care
                gives us the best chance to save your natural tooth.
              </p>
            </>
          )}

          {section === "broken-tooth" && (
            <>
              <p>
                Accidents happen — whether from sports, eating hard foods, or a
                fall. Contact us as soon as possible to prevent infection and
                restore your tooth’s appearance.
              </p>
            </>
          )}

          {section === "lost-filling" && (
            <>
              <p>
                If a filling or crown falls out, the exposed tooth can be
                sensitive to hot, cold, or air. Schedule an appointment promptly
                for repair and protection.
              </p>
            </>
          )}

          {section === "loose-tooth" && (
            <>
              <p>
                A loose tooth can result from trauma or gum disease. Refrain
                from wiggling it — call our dental office for an urgent
                evaluation.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  ))}
</div>


                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="!space-y-6">
            {/* ✅ Sidebar Blue Gradient */}
            <div className="!bg-gradient-to-br !from-[#03192c] !to-[#0b3d91] !text-white !rounded-lg !overflow-hidden !shadow-lg">
              <img
                src="http://images.unsplash.com/photo-1758525862263-af89b090fb56?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1932"
                alt="Smiling patients"
                className="!w-full !h-48 !object-cover"
              />
              <div className="!p-6">
                <h2 className="!text-xl !tracking-tight !font-bold !mb-3 ">
                  Nervous about visiting the dentist? We can help.
                </h2>
                <p className="!text-sm !mb-6 !text-blue-100">
                  The Clayburn Dental team offers sedation options to make every visit calm and stress-free.
                </p>
                <button className="!w-full !bg-white hover:!bg-gray-100 !text-[#0b3d91] !font-semibold !py-3 !px-6 !rounded !transition-colors">
                  LEARN MORE
                </button>
              </div>
            </div>

            {/* Financing Section */}
            {/* <div className="!bg-gradient-to-r !from-[#0b3d91] !to-[#164bbf] !text-white !rounded-lg !p-6 !flex !items-center !justify-between hover:!opacity-90 !transition">
              <span className="!text-xl !font-semibold">Financing</span>
              <div className="!w-8 !h-8 !bg-white !rounded-full !flex !items-center !justify-center">
                <span className="!text-[#0b3d91] !text-xl">+</span>
              </div>
            </div> */}

            <div className="!bg-white !rounded-lg !shadow-sm !p-6">
              <h3 className="!text-sm !font-bold !text-[#0b3d91] !mb-4 !tracking-wide">Why Choose Richmond Shine Dental for Emergency Care?
</h3>

              <div className="!bg-white !rounded-lg !shadow-sm !p-6">
  <h3 className="!text-sm !font-bold !text-[#0b3d91] !mb-4 !tracking-wide">
    WHY CHOOSE US
  </h3>

  <div className="!space-y-4 !text-gray-700 !text-sm">
    <p>🕓 <strong>Open 7 Days a Week</strong> for your convenience</p>
    <p>⚡ <strong>Same-Day Emergency Appointments</strong> available</p>
    <p>💙 <strong>Gentle, Compassionate Care</strong> focused on your comfort</p>
    <p>🦷 <strong>Comprehensive Treatments</strong> — from pain relief to full restoration</p>
    <p>🏥 <strong>Modern Clinic</strong> in the heart of Richmond with advanced equipment</p>
  </div>

  <div className="!mt-8 !text-center">
    <h4 className="!text-xl !font-bold !text-[#03192c] !mb-3 !tracking-tight">
      Your Smile Deserves Immediate Care
    </h4>
    <p className="!text-gray-600 !text-sm !mb-6">
      Don’t wait in pain. At <strong>Richmond Shine Dental</strong>, we make emergency dental care
      simple, fast, and stress-free. Our goal is to get you smiling comfortably again — the same day.
    </p>
    <button onClick={()=>setOpen(true)} className="!w-full !bg-gradient-to-r !from-[#03192c] !to-[#0b3d91] hover:!opacity-90 !text-white !font-semibold !py-3 !rounded !transition">
      BOOK SAME-DAY APPOINTMENT
    </button>
  </div>
</div>

            </div>

            {/* Search */}
            {/* <div className="!bg-white !rounded-lg !shadow-sm !p-6">
              <h3 className="!text-sm !font-bold !text-[#03192c] !mb-4 !tracking-wide">SEARCH WEBSITE</h3>
              <div className="!relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="!w-full !pl-4 !pr-12 !py-3 !border !border-gray-300 !rounded focus:!outline-none focus:!ring-2 focus:!ring-[#0b3d91]"
                />
                <button className="!absolute !right-0 !top-0 !h-full !px-4 !bg-gradient-to-r !from-[#03192c] !to-[#0b3d91] hover:!opacity-90 !text-white !transition-colors !rounded-r">
                  <Search className="!w-5 !h-5" />
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="!bg-white !rounded-lg !shadow-sm !p-12 !mt-12 !text-center">
          <h2 className="!text-3xl !tracking-tight !font-bold !text-[#03192c] !mb-4">
            Visit us at:
          </h2>
          <p className="!text-gray-700 !mb-8 !text-lg">📍
Richmond Shine Dental
6180 Blundell Rd #171, Richmond, BC V7C 4W7<br/>
☎️ Call (778) 366-7770<br/>
💬 Book Online: www.richmondshinedental.com

          </p>
          <button onClick={()=>setOpen(true)} className="!bg-gradient-to-r !from-[#03192c] !to-[#0b3d91] hover:!opacity-90 !text-white !font-semibold !py-4 !px-12 !rounded !transition-colors !text-lg">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
