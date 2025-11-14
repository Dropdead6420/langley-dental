"use client";
import { Calendar, Search } from "lucide-react";
import { useRouter } from "next/navigation"; 
import { useContactModal } from "@/components/ContactModal";


export default function App() {
    const { setOpen,setMessage } = useContactModal();
    const openform = () => {
    setOpen(true);
    setMessage('Get Financing Today');
}
    


  return (
    <div className="min-h-screen  sm:!my-2 md:!my-25 !font-jost py-20 md:!py-0 bg-gray-50">
      {/* Top Banner */}
      <div className="!bg-[#16609f] !text-white !text-center !py-2 !px-4">
        <p className="!text-sm sm:!text-base !font-medium">
          WELCOMING PATIENTS OF ALL AGES WITH CANADIAN DENTAL CARE PLAN (CDCP)
          COVERAGE ›
        </p>
      </div>

      {/* Main Content */}
      <div className="!max-w-7xl !mx-4 sm:mx-6 md:!mx-auto !py-12">
        <div className="!grid !grid-cols-1 lg:!grid-cols-3 !gap-8">
          {/* Left Section */}
          <div className="lg:!col-span-2">
            <h1 className="!text-3xl sm:!text-4xl !tracking-tight !font-bold !text-gray-900 !mb-6">
              Financing
            </h1>
            <p className="!text-base sm:!text-lg !text-gray-700 !mb-12">
              Start treatment today, pay later*. At Langley Dental, we offer
              flexible financing options to help you achieve your dental goals.
            </p>

            <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-8 !mb-12">
              {/* About Financing */}
              <div>
                <h2 className="!text-xl !tracking-tight sm:!text-2xl !font-bold !text-gray-900 !mb-6">
                  About Our Financing Program
                </h2>
                <ul className="!space-y-4 !text-gray-700">
                  {[
                    "Starting from as low as 0% interest, upon approval",
                    "Finance the dental services you need and pay over time",
                    "Pay off your balance at any time, with no penalty",
                    "Complete an online application and submit for a decision within minutes",
                  ].map((text, i) => (
                    <li key={i} className="!flex !items-start">
                      <span className="!text-[#16609f] !mr-2">•</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
                <p className="!text-sm !text-gray-500 !italic !mt-6">
                  *On approved credit. Terms and conditions apply.
                </p>
              </div>

              {/* Apply Section */}
              <div>
                <h2 className="!text-xl !tracking-tight sm:!text-2xl !font-bold !text-gray-900 !mb-6">
                  To Apply for Financing
                </h2>
                <p className="!text-gray-700 !mb-4">
                  Fill out an application online for quick and easy financing.
                </p>
                {/* <p className="!text-gray-700 !mb-6">
                  You can also text patient finance to <strong>32471</strong> to
                  get started.
                </p> */}
                <button onClick={openform}  className="!bg-[#16609f] hover:!bg-[#13558f] !text-white !font-semibold !px-8 !py-3 !rounded !transition-colors">
                  APPLY ONLINE
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:!col-span-1">
            {/* Image Card */}
            <div className="!bg-white !rounded-lg !shadow-lg !overflow-hidden !mb-6">
              <div className="!relative">
                <img
                  src="https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Happy dental patients"
                  className="!w-full !h-52 sm:!h-64 md:!h-72 !object-cover"
                />
                {/* <button className="!absolute !top-4 !right-4 !bg-[#16609f] hover:!bg-[#13558f] !text-white !px-4 !py-2 !rounded !flex !items-center !gap-2 !text-sm !font-semibold !transition-colors">
                  <Calendar size={18} />
                  REQUEST APPOINTMENT
                </button> */}
              </div>
              <div className="!bg-blue-900 !text-white !p-8">
                <h3 className="!text-xl sm:!text-2xl !tracking-tight !font-bold !mb-4">
                  Nervous about visiting the dentist? We can help.
                </h3>
                <p className="!mb-6 !text-blue-100">
                  The Langley Dental team offer dental sedation services to
                  help our patients feel comfortable and relaxed during
                  treatment.
                </p>
                <button onClick={() => setOpen(true)} className="!bg-[#16609f] hover:!bg-[#13558f] !text-white !font-semibold !px-6 !py-1 !rounded !transition-colors">
                  BOOK APPOINTMENT
                </button>
              </div>
            </div>

            {/* Financing Quick Card
            <div className="!bg-[#16609f] !text-white !rounded-lg !p-6 !mb-6 !flex !items-center !justify-between hover:!bg-[#13558f] !cursor-pointer !transition-colors">
              <h3 className="!text-lg sm:!text-xl !font-bold">Financing</h3>
              <div className="!bg-white !text-[#16609f] !rounded-full !w-8 !h-8 !flex !items-center !justify-center">
                <span className="!text-xl !font-bold">›</span>
              </div>
            </div> */}

            {/* News & Search */}
            {/* <div className="!bg-white !rounded-lg !shadow-lg !p-6">
              <h3 className="!text-sm !font-bold !text-gray-600 !mb-4 !tracking-wider">
                NEWS & TIPS
              </h3>

              <div className="!mb-6">
                <h4 className="!text-lg !font-bold !text-[#16609f] !mb-2 hover:!text-[#13558f] !cursor-pointer">
                  When to Start Brushing Your Baby's Teeth
                </h4>
                <p className="!text-sm !text-gray-600">
                  Today, our Langley dentists explain when you should begin
                  brushing your baby's teeth.
                </p>
              </div>

              <div className="!mb-4">
                <h4 className="!text-lg !font-bold !text-[#16609f] !mb-2 hover:!text-[#13558f] !cursor-pointer">
                  Topical Fluoride: How Fluoride Works
                </h4>
                <p className="!text-sm !text-gray-600 !mb-2">
                  Here, our Langley Dentist explain how topical fluoride
                  treatments work to protect your teeth.
                </p>
                <a
                  href="#"
                  className="!text-[#16609f] !text-sm !font-semibold hover:!text-[#13558f]"
                >
                  Read More ›
                </a>
              </div>

              <div className="!mt-8">
                <h3 className="!text-sm !font-bold !text-gray-600 !mb-4 !tracking-wider">
                  SEARCH WEBSITE
                </h3>
                <div className="!flex !gap-2">
                  <input
                    type="text"
                    placeholder="Search"
                    className="!flex-1 !px-4 !py-2 !border !border-gray-300 !rounded focus:!outline-none focus:!ring-2 focus:!ring-blue-500"
                  />
                  <button className="!bg-blue-900 hover:!bg-blue-800 !text-white !px-4 !py-2 !rounded !transition-colors">
                    <Search size={20} />
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      
    </div>
  );
}
