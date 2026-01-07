import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SharedContactForm from "../SharedContactForm";

const LocationSection = () => {
    return (
        <section className="py-20 bg-gray-50/50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Visit Our Clinic
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We are conveniently located in Richmond. Come visit us for a consultation or check-up.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side: Info & Map */}
                    <div className="space-y-6">
                        {/* Contact Cards */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {/* Location */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
                                <div className="p-3 bg-blue-50 rounded-xl mb-4 text-blue-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <h3 className="font-semibold text-gray-900 !text-2xl !tracking-tight mb-2">Our Location</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    20654 Fraser Hwy Unit #1, Langley, BC V3A 4G5, Canada.
                                </p>
                            </div>

                            {/* Contact */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
                                <div className="p-3 bg-blue-50 rounded-xl mb-4 text-blue-600">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2 !text-2xl !tracking-tight">Contact Info</h3>
                                <p className="text-gray-600 text-sm mb-1">
                                    <a
                                        href="tel:+17783667770"
                                        className="hover:text-blue-600 transition-colors"
                                    >
                                        +17783667770
                                    </a>
                                </p>
                                <p className="text-gray-600 text-sm break-all">
                                    <a
                                        href="mailto:Info@langleycaredental.com"
                                        className="hover:text-blue-600 transition-colors"
                                    >
                                        Info@langleycaredental.com
                                    </a>
                                </p>
                            </div>

                            {/* Hours */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow sm:col-span-2">
                                <div className="p-3 bg-blue-50 rounded-xl mb-4 text-blue-600">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2 !text-2xl !tracking-tight">
                                    Opening Hours
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 w-full">
                                    <div className="flex justify-between text-sm items-center border-b border-gray-50 pb-2 sm:border-0 sm:pb-0">
                                        <span className="text-gray-500">Monday - Friday</span>
                                        <span className="text-gray-900 font-medium">
                                            9 A.M. - 5 P.M.
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm items-center">
                                        <span className="text-gray-500">Saturday</span>
                                        <span className="text-gray-900 font-medium">
                                            9 A.M. - 4 P.M.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Map */}
                        <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-80 relative group z-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d167268.54318156594!2d-122.668402!3d49.075789!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485cf1061bcba97%3A0x65fa80f18fba4f7d!2sBrookswood%20Shine%20Dental!5e0!3m2!1sen!2sin!4v1767702732573!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Location Map"
                                className="rounded-xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">

                        <div className="relative z-10">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Book an Appointment
                                </h3>
                                <p className="text-gray-500 mt-2">
                                    Fill out the form below and our team will get back to you shortly to confirm your appointment.
                                </p>
                            </div>
                            <SharedContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
