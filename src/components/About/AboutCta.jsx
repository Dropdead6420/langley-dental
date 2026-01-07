'use client'
import React from 'react'
import { createAppointment } from "@/services/appointmentService";
import toast from "react-hot-toast";

const AboutCta = () => {

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
      // console.log(res.message);
      e.target.reset();

    } catch (err) {
      console.error(err);
      toast.error("Submission failed.");
    }
  };

  return (
    <section className="section about-b-cta-section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div data-w-id="295653ca-5eb1-bdaf-1825-7d14bbe1386d" className="about-cta">
          <div className="cta-content">
            <div className="headline-cta wow fadeInUp">
              <div className="text-h3 !tracking-tight">
                Contact us or directly schedule an appoitment
              </div>
              <p className="text-body mb-6">
                Experience compassionate care and advanced dental solutions for
                a healthier, brighter smile.
              </p>

              {/* Form replacing the button with enhanced UI */}
              <div className="w-form mt-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl">
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="contact-input-wrap">
                      <input
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        name="Name"
                        placeholder="Full Name"
                        type="text"
                        required
                      />
                    </div>
                    <div className="contact-input-wrap">
                      <input
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        name="Email"
                        placeholder="Email Address"
                        type="email"
                        required
                      />
                    </div>

                  </div>
                  <div className="contact-input-wrap mb-4">
                    <input
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      name="Phone"
                      placeholder="Phone Number (10 digits)"
                      maxLength={10}
                      required
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
                      }}
                    />
                  </div>

                  <div className="contact-input-wrap mb-6">
                    <textarea
                      placeholder="How can we help you?"
                      name="Message"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-h-[120px] resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4  px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 !text-white font-semibold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              </div>

            </div>

            <div className="cta-bottom-tile mt-8">
              <div className="cta-mid-tile">
                <div className="text-h5">Call us</div>
                <div className="cta-number-tile">
                  <div className="text-body">+1 778-366-7770</div>
                </div>
              </div>
              <div className="cta-socials">
                <div className="text-h5">Follow us on social media</div>
                <div className="social-items-wrap">
                  <div className="social-item">
                    <div className="social-icon-wrap">
                      <div className="icon-social-cta w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 20 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 0H19C19.5523 0 20 0.44772 20 1V17C20 17.5523 19.5523 18 19 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM10.0606 8.6829L3.64722 3.2377L2.35278 4.7623L10.0731 11.3171L17.6544 4.75616L16.3456 3.24384L10.0606 8.6829Z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                    <div>info@langleycaredental.com</div>
                  </div>
                  <div className="social-item">
                    <div className="social-icon-wrap">
                      <div className="icon-social-cta w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.0281 0.000488281C12.1535 0.00234828 12.7238 0.00830831 13.2166 0.0229783L13.4107 0.0293183C13.6349 0.0372883 13.8561 0.0472882 14.1228 0.0597882C15.1869 0.108958 15.9128 0.277288 16.5503 0.524788C17.2094 0.778958 17.7661 1.12229 18.3219 1.67813C18.8769 2.23396 19.2203 2.79229 19.4753 3.44979C19.7219 4.08646 19.8903 4.81313 19.9403 5.87729C19.9522 6.14396 19.9618 6.36516 19.9697 6.5894L19.976 6.78349C19.9906 7.27623 19.9973 7.84662 19.9994 8.97206L20.0002 9.71766C20.0003 9.80876 20.0003 9.90276 20.0003 9.99976L20.0002 10.2819L19.9996 11.0276C19.9977 12.153 19.9918 12.7234 19.9771 13.2161L19.9707 13.4102C19.9628 13.6345 19.9528 13.8557 19.9403 14.1223C19.8911 15.1865 19.7219 15.9123 19.4753 16.5498C19.2211 17.209 18.8769 17.7657 18.3219 18.3215C17.7661 18.8765 17.2069 19.2198 16.5503 19.4748C15.9128 19.7215 15.1869 19.8898 14.1228 19.9398C13.8561 19.9517 13.6349 19.9614 13.4107 19.9692L13.2166 19.9755C12.7238 19.9902 12.1535 19.9968 11.0281 19.999L10.2824 19.9998C10.1913 19.9998 10.0973 19.9998 10.0003 19.9998H9.7182L8.9725 19.9991C7.8471 19.9973 7.27672 19.9913 6.78397 19.9766L6.58989 19.9703C6.36564 19.9623 6.14444 19.9523 5.87778 19.9398C4.81361 19.8907 4.08861 19.7215 3.45028 19.4748C2.79194 19.2207 2.23444 18.8765 1.67861 18.3215C1.12278 17.7657 0.780277 17.2065 0.525277 16.5498C0.277777 15.9123 0.110277 15.1865 0.0602767 14.1223C0.0483967 13.8557 0.0387066 13.6345 0.0308566 13.4102L0.0245667 13.2161C0.00993665 12.7234 0.00326674 12.153 0.00110674 11.0276L0.000976562 8.97206C0.00283656 7.84662 0.00878657 7.27623 0.0234566 6.78349L0.0298066 6.5894C0.0377766 6.36516 0.0477767 6.14396 0.0602767 5.87729C0.109437 4.81229 0.277777 4.08729 0.525277 3.44979C0.779437 2.79146 1.12278 2.23396 1.67861 1.67813C2.23444 1.12229 2.79278 0.779788 3.45028 0.524788C4.08778 0.277288 4.81278 0.109788 5.87778 0.0597882C6.14444 0.0479182 6.36564 0.0382283 6.58989 0.0303783L6.78397 0.0240881C7.27672 0.00944814 7.8471 0.00277822 8.9725 0.000618219L11.0281 0.000488281ZM10.0003 4.99979C7.23738 4.99979 5.00028 7.23932 5.00028 9.99976C5.00028 12.7627 7.23981 14.9998 10.0003 14.9998C12.7632 14.9998 15.0003 12.7603 15.0003 9.99976C15.0003 7.23689 12.7607 4.99979 10.0003 4.99979ZM10.0003 6.99979C11.6572 6.99979 13.0003 8.34246 13.0003 9.99976C13.0003 11.6567 11.6576 12.9998 10.0003 12.9998C8.3434 12.9998 7.00028 11.6572 7.00028 9.99976C7.00028 8.34286 8.3429 6.99979 10.0003 6.99979ZM15.2503 3.49979C14.561 3.49979 14.0003 4.0597 14.0003 4.74894C14.0003 5.43819 14.5602 5.99896 15.2503 5.99896C15.9395 5.99896 16.5003 5.43906 16.5003 4.74894C16.5003 4.0597 15.9386 3.49893 15.2503 3.49979Z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                    <div>+1 778-366-7770</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cta-image-wrap">
            <div data-poster-url="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a%2F673f1a9bd7a7a26ed11b4b0c_6006694_Happy_Positive_1920x1080-poster-00001.jpg" data-video-urls="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a%2F673f1a9bd7a7a26ed11b4b0c_6006694_Happy_Positive_1920x1080-transcode.mp4,https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a%2F673f1a9bd7a7a26ed11b4b0c_6006694_Happy_Positive_1920x1080-transcode.webm" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="video-cover w-background-video w-background-video-atom">
              <video id="f625381d-4bf4-a70e-5050-fd553946bc6b-video" autoPlay loop style={{ backgroundImage: 'url(_https_/cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a/673f1a9bd7a7a26ed11b4b0c_6006694_Happy_Positive_1920x1080-poster-00001.html)' }} muted playsInline data-wf-ignore="true" data-object-fit="cover">
                <source src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a%2F673f1a9bd7a7a26ed11b4b0c_6006694_Happy_Positive_1920x1080-transcode.mp4" data-wf-ignore="true" />
                <source src="https://cdn.prod.website-files.com/673a4bd12ac9f488e7a94d2a%2F673f1a9bd7a7a26ed11b4b0c_6006694_Happy_Positive_1920x1080-transcode.webm" data-wf-ignore="true" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCta
