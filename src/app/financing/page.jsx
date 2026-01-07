"use client";
import { Calendar, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useContactModal } from "@/components/ContactModal";
import SharedContactForm from "@/components/SharedContactForm";


export default function App() {
  const { setOpen, setMessage } = useContactModal();
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
              At Langley Dental, we offer flexible financing options to help you achieve your dental goals.
            </p>

            <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-8 !mb-12">


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
                <button onClick={openform} className="!bg-[#16609f] hover:!bg-[#13558f] !text-white !font-semibold !px-8 !py-3 !rounded !transition-colors">
                  APPLY ONLINE
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:!col-span-1">
            {/* Contact Form Card */}
            <div className="!bg-white !rounded-lg !shadow-lg !p-6 !mb-6">
              <h3 className="!text-xl !font-bold !tracking-tight !text-gray-900 !mb-4">
                Have Financing Questions?
              </h3>
              <p className="!text-sm !text-gray-600 !mb-6">
                Fill out the form below and our team will get back to you with detailed financing options.
              </p>
              <SharedContactForm />
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
