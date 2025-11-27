"use client";

import React from "react";
import { useContactModal } from "../ContactModal";
import { createAppointment } from "@/services/appointmentService";
import toast from "react-hot-toast";


const ContactMain = () => {
  const { setOpen } = useContactModal();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get("Email")?.trim() || "";
    const fullName = form.get("Name")?.trim() || "";
    const message = form.get("Message")?.trim() || "";

    // Basic validation (minimal)
    if (!email) return toast.error("Email is required.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return toast.error("Enter a valid email.");
    if (!fullName.includes(" "))
      return toast.error("Enter full name (first & last).");
    if (!message || message.length < 5)
      return toast.error("Message is too short.");

    const [firstName, ...rest] = fullName.split(" ");
    const lastName = rest.join(" ");
    const phone = form.get("Phone")?.replace(/\D/g, "").slice(0, 10) || "";

if (phone.length !== 10)
  return toast.error("Enter a 10-digit phone number.");

    const apiPayload = {
      firstName,
      lastName,
      email,
      phone: `+1${phone}`,
      treatment: "General Inquiry",
      message,
    };

    try {
      const res = await createAppointment(apiPayload);
      if (!res?.status) {
        toast.error(res?.message || "Something went wrong.");
        return;
      }
      toast.success("Your message has been sent!");
      console.log(res.message);
      e.target.reset();

    } catch (err) {
      console.error(err);
      toast.error("Submission failed.");
    }
  };

  return (
    <>
      <div>
        <section className="section contact-b-hero">
          <div className="w-layout-blockcontainer main-container w-container">
            <div className="w-layout-grid contact-b-halves">
              <div
                id="w-node-_07184fff-66e6-9726-6db4-620a51c62e90-e7a94da0"
                className="contact-b-right "
              >
                <div className="contact-b-top-tile">
                  <div className="headline-contact-b">
                    <div className="heading-contact-b wow fadeInUp">
                      <h2 className="no-margins">
                        Get in touch with our support
                      </h2>
                    </div>
                    <div className="limit-457">
                      <div className="text-body wow fadeInUp">
                        Have questions or ready to schedule an appointment? Our
                        friendly team is here to provide the information and
                        care you need—reach out today!
                      </div>
                    </div>
                  </div>
                  <div className="contact-b-socials">
                    <div className="contact-b-social-tile">
                      <div className="icon-contact-b w-embed">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 19 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25 4.42871L9.5 7.42871L13.75 4.42871"
                            stroke="#2E4A71"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 11.2857V2.71429C1 1.76751 1.76112 1 2.7 1H16.3C17.2389 1 18 1.76751 18 2.71429V11.2857C18 12.2325 17.2389 13 16.3 13H2.7C1.76112 13 1 12.2325 1 11.2857Z"
                            stroke="#2E4A71"
                          />
                        </svg>
                      </div>
                      <div>Info@langleycaredental.com</div>
                    </div>
                    <div className="contact-b-social-tile">
                      <div className="icon-contact-b w-embed">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.50043 13.359C11.5868 13.359 13.2782 11.6564 13.2782 9.55618C13.2782 7.45597 11.5868 5.75342 9.50043 5.75342C7.41402 5.75342 5.72266 7.45597 5.72266 9.55618C5.72266 11.6564 7.41402 13.359 9.50043 13.359Z"
                            stroke="#2E4A71"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 13.359V5.75346C1 3.1282 3.11421 1 5.72222 1H13.2778C15.8858 1 18 3.1282 18 5.75346V13.359C18 15.9842 15.8858 18.1124 13.2778 18.1124H5.72222C3.11421 18.1124 1 15.9842 1 13.359Z"
                            stroke="#2E4A71"
                          />
                          <path
                            d="M14.6953 4.33753L14.7053 4.32642"
                            stroke="#2E4A71"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>@dr.singh_shinedental</div>
                    </div>
                    <div className="contact-b-social-tile">
                      <div className="icon-contact-b w-embed">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.6678 11.986L11.1327 12.6762C8.74487 11.4686 7.26986 10.0815 6.41145 7.91922L7.07238 4.34709L5.82303 1H2.60319C1.63529 1 0.8731 1.8059 1.01766 2.77018C1.37854 5.17748 2.44261 9.54221 5.55304 12.6762C8.81946 15.9673 13.524 17.3954 16.1132 17.9631C17.1131 18.1823 18 17.3964 18 16.3654V13.2654L14.6678 11.986Z"
                            stroke="#2E4A71"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>+17783667770</div>
                    </div>
                  </div>
                </div>
                <div className="w-form">
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="w-layout-grid input-halves">
                      <div className="contact-input-wrap">
                        <div className="text-body">Email</div>
                        <input
                          className="text-field contact-b w-input"
                          name="Email"
                          placeholder="example@gmail.com"
                          type="email"
                          required
                        />
                      </div>
                      <div className="contact-input-wrap">
                        <div className="text-body">Name</div>
                        <input
                          className="text-field contact-b w-input"
                          name="Name"
                          placeholder="Thomas Coit"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                     <div className="contact-input-wrap">
                          <div className="text-body">Phone</div>
                          <input
                            className="text-field contact-b w-input"
                            name="Phone"
                            placeholder="10-digit phone number"
                            maxLength={10}
                            required
                            onInput={(e) => {
                              e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
                            }}
                          />
                        </div>

                    <div className="contact-input-wrap">
                      <div className="text-body">Message</div>
                      <textarea
                        placeholder="Your message..."
                        name="Message"
                        className="text-field contact-b text-area w-input"
                        required
                      />
                    </div>

                    <input
                      type="submit"
                      className="cta-main w-button"
                      value="Send message"
                    />
                  </form>
                </div>
              </div>
              <div
                id="w-node-_653963ac-e9d2-1033-8231-db824eb021f9-e7a94da0"
                className="contact-b-left"
              >
                <img
                  src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673db11847fa67e4e56afaa4_Article Thumbnail-4.avif"
                  loading="lazy"
                  alt=""
                  className="image-cover"
                />
              </div>
            </div>
          </div>

          <img
            src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673b7b2d99645bd98cbdc566_Gradient Right.svg"
            loading="lazy"
            alt=""
            className="hero-gradient-right"
          />
        </section>
        <section className="section cta-section">
          <div className="cta-video">
            <div className="w-layout-blockcontainer main-container w-container">
              <div className="cta-master">
                <div className="cta-top-tile">
                  <div className="heading-cta">
                    <h2 className="no-margins">
                      Get started with Dental Health
                    </h2>
                  </div>
                </div>
                <div className="text-body">
                  Experience compassionate care and advanced dental solutions
                  for a healthier, brighter smile.
                </div>
                <div className="cta-button-wrap">
                  {/* Use a button — not a Link — since this opens a modal */}
                  <button
                    type="button"
                    className="cta-main w-inline-block"
                    onClick={() => setOpen(true)}
                  >
                    <div>Get started</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactMain;
