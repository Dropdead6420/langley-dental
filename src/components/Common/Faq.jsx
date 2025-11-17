"use client";
import { useState } from "react";

export default function FaqToggle({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
 <div className="space-y-5 py-20 max-w-3xl mx-auto">
  {faqs.map((faq, index) => (
    <div key={index} className="group relative">

      {/* Gradient hover background */}
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-r 
        from-blue-500/10 to-teal-500/10 transition-opacity duration-300 
        ${openIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`}
      />

      {/* FAQ CARD */}
      <div className="relative bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">

        {/* Button */}
        <button
          onClick={() => toggleFAQ(index)}
          className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none 
          focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
          rounded-xl transition-colors duration-300"
        >
          <span className="font-semibold text-slate-900 text-lg pr-4">
            {faq.question}
          </span>

          <svg
            className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${
              openIndex === index ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Answer */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openIndex === index ? "max-h-48" : "max-h-0"
          }`}
        >
          <div className="px-6 pb-5 pt-2 border-t border-slate-100">
            <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
          </div>
        </div>

      </div>
    </div>
  ))}
</div>


  );
}
