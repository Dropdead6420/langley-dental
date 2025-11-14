"use client";
import { Phone, Mail, MapPin } from "lucide-react";

function Page() {
  return (
    <div className="font-jost  lg:px-8">
      <div className="!min-h-screen pt-14 px-4 !bg-gradient-to-br !from-blue-50 !via-white !to-blue-50">
        <div className="!max-w-7xl !mx-auto !py-8 sm:!py-12 lg:!py-16">

          {/* Hero Section */}
          <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-8 lg:!gap-12 !items-center !mb-12 lg:!mb-20">
            <div className="!space-y-4 sm:!space-y-6 !order-2 md:!order-1">
              <h1 className="!text-3xl sm:!text-4xl lg:!text-5xl xl:!text-6xl !tracking-tight !font-bold !bg-gradient-to-r !from-cyan-600 !to-blue-900 !bg-clip-text !text-transparent !mb-4 sm:!mb-6">
                Canadian Dental Care Plan 
                <span className="!block !text-xl sm:!text-2xl lg:!text-3xl !mt-2 !text-cyan-600">(CDCP)</span>
              </h1>
              <p className="!text-sm sm:!text-base lg:!text-lg !text-gray-600 !leading-relaxed">
                The Canadian Dental Care Plan (CDCP) is a federal program that provides dental care coverage for eligible Canadian residents who do not have their own dental benefits and whose adjusted family net income is under $90,000 annually.
              </p>
            </div>
            <div className="!relative !rounded-2xl lg:!rounded-3xl !overflow-hidden !shadow-xl lg:!shadow-2xl !transform hover:!scale-[1.02] !transition-transform !duration-300 !order-1 md:!order-2">
              <div className="!absolute !inset-0 !bg-gradient-to-tr !from-blue-600/20 !to-transparent !z-10"></div>
              <img
                src="https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dental care"
                className="!w-full !h-[200px] sm:!h-[300px] md:!h-[400px] !object-cover"
              />
            </div>
          </div>

          {/* Eligibility Criteria */}
          <section className="!mb-12 lg:!mb-20">
            <h2 className="!text-2xl sm:!text-3xl lg:!text-4xl !font-bold !bg-gradient-to-r !from-cyan-600 !to-blue-800 !bg-clip-text !tracking-tight !text-transparent !mb-6 lg:!mb-8">Eligibility Criteria</h2>
            <div className="!bg-white !rounded-xl lg:!rounded-2xl !shadow-lg lg:!shadow-xl !p-6 lg:!p-8 !border !border-blue-100">
              <p className="!text-sm sm:!text-base lg:!text-lg !text-gray-700 !mb-4 lg:!mb-6">To qualify for the CDCP, you must meet all of the following criteria:</p>
              <ul className="!space-y-3 lg:!space-y-4 !text-sm sm:!text-base !text-gray-700">
                <li className="!flex !items-start !p-2 lg:!p-3 !rounded-lg hover:!bg-blue-50 !transition-colors">
                  <span className="!text-blue-500 !mr-2 lg:!mr-3 !text-lg lg:!text-xl !flex-shrink-0">✓</span>
                  <span>Be a Canadian resident for tax purposes</span>
                </li>
                <li className="!flex !items-start !p-2 lg:!p-3 !rounded-lg hover:!bg-blue-50 !transition-colors">
                  <span className="!text-blue-500 !mr-2 lg:!mr-3 !text-lg lg:!text-xl !flex-shrink-0">✓</span>
                  <span>Have filed your 2023 tax return (or intend to)</span>
                </li>
                <li className="!flex !items-start !p-2 lg:!p-3 !rounded-lg hover:!bg-blue-50 !transition-colors">
                  <span className="!text-blue-500 !mr-2 lg:!mr-3 !text-lg lg:!text-xl !flex-shrink-0">✓</span>
                  <span>Have an adjusted family net income of less than $90,000</span>
                </li>
                <li className="!flex !items-start !p-2 lg:!p-3 !rounded-lg hover:!bg-blue-50 !transition-colors">
                  <span className="!text-blue-500 !mr-2 lg:!mr-3 !text-lg lg:!text-xl !flex-shrink-0">✓</span>
                  <span>Not have access to dental insurance through:</span>
                </li>
              </ul>
              <ul className="!ml-8 lg:!ml-12 !mt-2 !space-y-2 lg:!space-y-3 !text-sm sm:!text-base !text-gray-700">
                <li className="!flex !items-start !p-1 lg:!p-2 !rounded hover:!bg-blue-50 !transition-colors">
                  <span className="!w-1.5 !h-1.5 lg:!w-2 lg:!h-2 !bg-blue-400 !rounded-full !mr-2 lg:!mr-3 !mt-1.5 !flex-shrink-0"></span>
                  <span>Employer-sponsored plan (including health and wellness accounts)</span>
                </li>
                <li className="!flex !items-start !p-1 lg:!p-2 !rounded hover:!bg-blue-50 !transition-colors">
                  <span className="!w-1.5 !h-1.5 lg:!w-2 lg:!h-2 !bg-blue-400 !rounded-full !mr-2 lg:!mr-3 !mt-1.5 !flex-shrink-0"></span>
                  <span>Pension plans</span>
                </li>
                <li className="!flex !items-start !p-1 lg:!p-2 !rounded hover:!bg-blue-50 !transition-colors">
                  <span className="!w-1.5 !h-1.5 lg:!w-2 lg:!h-2 !bg-blue-400 !rounded-full !mr-2 lg:!mr-3 !mt-1.5 !flex-shrink-0"></span>
                  <span>Professional or student organizations</span>
                </li>
                <li className="!flex !items-start !p-1 lg:!p-2 !rounded hover:!bg-blue-50 !transition-colors">
                  <span className="!w-1.5 !h-1.5 lg:!w-2 lg:!h-2 !bg-blue-400 !rounded-full !mr-2 lg:!mr-3 !mt-1.5 !flex-shrink-0"></span>
                  <span>Purchased insurance</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Exceptions */}
          <section className="!mb-12 lg:!mb-20 !bg-gradient-to-r !from-blue-50 !to-blue-100 !border-l-4 lg:!border-l-8 !border-blue-500 !p-6 lg:!p-8 !rounded-r-xl lg:!rounded-r-2xl !shadow-lg">
            <h3 className="!text-xl sm:!text-2xl lg:!text-3xl !tracking-tight !font-bold !text-blue-900 !mb-4 lg:!mb-6">Important Exceptions and Notes:</h3>
            <ul className="!space-y-3 lg:!space-y-4 !text-sm sm:!text-base !text-gray-700">
              <li className="!flex !items-start">
                <span className="!text-blue-600 !mr-2 lg:!mr-3 !text-lg lg:!text-xl !font-bold !flex-shrink-0">!</span>
                <span>If dental insurance coverage is available through your employer, pension, professional, or student organization, you are <strong className="!text-blue-700">not eligible for CDCP</strong>—even if you decline coverage.</span>
              </li>
              <li className="!flex !items-start">
                <span className="!text-blue-600 !mr-2 lg:!mr-3 !text-lg lg:!text-xl !font-bold !flex-shrink-0">!</span>
                <span>If your current dental insurance was privately purchased, you are <strong className="!text-blue-700">still eligible for CDCP</strong> only after coverage ends.</span>
              </li>
              <li className="!flex !items-start">
                <span className="!text-blue-600 !mr-2 lg:!mr-3 !text-lg lg:!text-xl !font-bold !flex-shrink-0">!</span>
                <span>If your dental insurance expires or is cancelled, you can apply for the CDCP at that time.</span>
              </li>
              <li className="!flex !items-start">
                <span className="!text-blue-600 !mr-2 lg:!mr-3 !text-lg lg:!text-xl !font-bold !flex-shrink-0">!</span>
                <span><strong className="!text-blue-700">Exception:</strong> If you previously had pension-based coverage that you opted out of but cannot rejoin as per pension rules.</span>
              </li>
            </ul>
          </section>

          {/* Family Net Income */}
          <section className="!mb-12 lg:!mb-20">
            <h2 className="!text-2xl sm:!text-3xl lg:!text-4xl !tracking-tight !font-bold !bg-gradient-to-r !from-blue-600 !to-blue-800 !bg-clip-text !text-transparent !mb-6 lg:!mb-8">Understanding Adjusted Family Net Income</h2>
            <div className="!bg-white !rounded-xl lg:!rounded-2xl !shadow-lg lg:!shadow-xl !p-6 lg:!p-8 !border !border-blue-100">
              <p className="!text-sm sm:!text-base lg:!text-lg !text-gray-700 !mb-4 lg:!mb-6">Your Adjusted family net income is calculated as follows:</p>
              <ul className="!space-y-2 lg:!space-y-3 !text-sm sm:!text-base !text-gray-700 !ml-2 lg:!ml-4">
                <li className="!flex !items-start !p-2 lg:!p-3 !rounded-lg hover:!bg-blue-50 !transition-colors">
                  <span className="!text-blue-500 !mr-2 lg:!mr-3 !text-lg lg:!text-xl !flex-shrink-0">→</span>
                  <span>Your net income (line 23600) + your spouse's/common-law partner's net income (line 23600)</span>
                </li>
                <li className="!flex !items-start !p-2 lg:!p-3 !rounded-lg hover:!bg-blue-50 !transition-colors">
                  <span className="!text-blue-500 !mr-2 lg:!mr-3 !text-lg lg:!text-xl !flex-shrink-0">→</span>
                  <span>Adjustments may apply based on CRA situations</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Coverage Table */}
          <section className="!mb-12 lg:!mb-20">
  <h2 className="!text-2xl sm:!text-3xl lg:!text-4xl !tracking-tight !font-bold !bg-gradient-to-r !from-blue-600 !to-blue-800 !bg-clip-text !text-transparent !mb-6 lg:!mb-8">
    CDCP Coverage & Fees
  </h2>
  <p className="!text-sm sm:!text-base lg:!text-lg !text-gray-700 !mb-6 lg:!mb-8">
    The CDCP covers dental services based on an established CDCP fee guide, which may differ from provincial dental fees.
  </p>

  {/* Desktop Table View (hidden on mobile) */}
  <div className="!hidden md:!block !overflow-x-auto">
    <div className="!bg-white !rounded-xl lg:!rounded-2xl !shadow-lg lg:!shadow-2xl !overflow-hidden !border !border-blue-100">
      <table className="!w-full">
        <thead>
          <tr className="!bg-gradient-to-r !from-cyan-700 !to-blue-600 !text-white">
            <th className="!py-3 lg:!py-5 !px-4 lg:!px-6 !text-left !font-semibold !text-sm lg:!text-lg">
              Adjusted Family Net Income
            </th>
            <th className="!py-3 lg:!py-5 !px-4 lg:!px-6 !text-left !font-semibold !text-sm lg:!text-lg">
              CDCP Coverage
            </th>
            <th className="!py-3 lg:!py-5 !px-4 lg:!px-6 !text-left !font-semibold !text-sm lg:!text-lg">
              How Much You Pay
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="!border-b !border-gray-200 hover:!bg-gradient-to-r hover:!from-blue-50 hover:!to-transparent !transition-all">
            <td className="!py-3 lg:!py-5 !px-4 lg:!px-6 !font-medium !text-sm lg:!text-base">
              Below $70,000
            </td>
            <td className="!py-3 lg:!py-5 !px-4 lg:!px-6">
              <span className="!bg-green-100 !text-green-700 !px-2 lg:!px-3 !py-0.5 lg:!py-1 !rounded-full !font-semibold !text-xs lg:!text-sm">
                100% of CDCP fees
              </span>
            </td>
            <td className="!py-3 lg:!py-5 !px-4 lg:!px-6 !text-sm lg:!text-base">
              0% (Additional fees may apply)
            </td>
          </tr>
          <tr className="!border-b !border-gray-200 hover:!bg-gradient-to-r hover:!from-blue-50 hover:!to-transparent !transition-all">
            <td className="!py-3 lg:!py-5 !px-4 lg:!px-6 !font-medium !text-sm lg:!text-base">
              $70,000 - $79,999
            </td>
            <td className="!py-3 lg:!py-5 !px-4 lg:!px-6">
              <span className="!bg-blue-100 !text-blue-700 !px-2 lg:!px-3 !py-0.5 lg:!py-1 !rounded-full !font-semibold !text-xs lg:!text-sm">
                60% of CDCP fees
              </span>
            </td>
            <td className="!py-3 lg:!py-5 !px-4 lg:!px-6 !text-sm lg:!text-base">
              40% (Additional fees may apply)
            </td>
          </tr>
          <tr className="hover:!bg-gradient-to-r hover:!from-blue-50 hover:!to-transparent !transition-all">
            <td className="!py-3 lg:!py-5 !px-4 lg:!px-6 !font-medium !text-sm lg:!text-base">
              $80,000 - $89,999
            </td>
            <td className="!py-3 lg:!py-5 !px-4 lg:!px-6">
              <span className="!bg-orange-100 !text-orange-700 !px-2 lg:!px-3 !py-0.5 lg:!py-1 !rounded-full !font-semibold !text-xs lg:!text-sm">
                40% of CDCP fees
              </span>
            </td>
            <td className="!py-3 lg:!py-5 !px-4 lg:!px-6 !text-sm lg:!text-base">
              60% (Additional fees may apply)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* Mobile Card View (visible only on mobile) */}
  <div className="!block md:!hidden !space-y-4 !mx-auto !w-11/12 !max-w-[420px] sm:!max-w-[520px]">
  {/* Card 1 */}
  <div className="!bg-white !rounded-xl !shadow-lg !overflow-hidden !border !border-blue-100">
    <div className="!bg-gradient-to-r !from-cyan-700 !to-blue-600 !text-white !px-3 !py-[1px]">
      <h3 className="!font-semibold !text-sm">Below $70,000</h3>
    </div>
    <div className="!p-2 !space-y-3">
      <div className="!flex !justify-between !items-center">
        <span className="!text-xs !text-gray-600 !font-medium">CDCP Coverage:</span>
        <span className="!bg-green-100 !text-green-700 !px-2 !py-0.5 !rounded-full !font-semibold !text-xs">
          100% of CDCP fees
        </span>
      </div>
      <div className="!flex !justify-between !items-center">
        <span className="!text-xs !text-gray-600 !font-medium">You Pay:</span>
        <span className="!text-xs !font-medium">0%</span>
      </div>
      <p className="!text-xs !text-gray-500 !italic">Additional fees may apply</p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="!bg-white !rounded-xl !shadow-lg !overflow-hidden !border !border-blue-100">
    <div className="!bg-gradient-to-r !from-cyan-700 !to-blue-600 !text-white !px-3 !py-[1px]">
      <h3 className="!font-semibold !text-sm">$70,000 - $79,999</h3>
    </div>
    <div className="!p-2 !space-y-3">
      <div className="!flex !justify-between !items-center">
        <span className="!text-xs !text-gray-600 !font-medium">CDCP Coverage:</span>
        <span className="!bg-blue-100 !text-blue-700 !px-2 !py-0.5 !rounded-full !font-semibold !text-xs">
          60% of CDCP fees
        </span>
      </div>
      <div className="!flex !justify-between !items-center">
        <span className="!text-xs !text-gray-600 !font-medium">You Pay:</span>
        <span className="!text-xs !font-medium">40%</span>
      </div>
      <p className="!text-xs !text-gray-500 !italic">Additional fees may apply</p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="!bg-white !rounded-xl !shadow-lg !overflow-hidden !border !border-blue-100">
    <div className="!bg-gradient-to-r !from-cyan-700 !to-blue-600 !text-white !px-3 !py-[1px]">
      <h3 className="!font-semibold !text-sm">$80,000 - $89,999</h3>
    </div>
    <div className="!p-2 !space-y-3">
      <div className="!flex !justify-between !items-center">
        <span className="!text-xs !text-gray-600 !font-medium">CDCP Coverage:</span>
        <span className="!bg-orange-100 !text-orange-700 !px-2 !py-0.5 !rounded-full !font-semibold !text-xs">
          40% of CDCP fees
        </span>
      </div>
      <div className="!flex !justify-between !items-center">
        <span className="!text-xs !text-gray-600 !font-medium">You Pay:</span>
        <span className="!text-xs !font-medium">60%</span>
      </div>
      <p className="!text-xs !text-gray-500 !italic">Additional fees may apply</p>
    </div>
  </div>
</div>

  {/* Important Note Section */}
  <div className="!mt-6 lg:!mt-8 !bg-gradient-to-r !from-blue-50 !to-blue-100 !p-4 sm:!p-6 lg:!p-8 !rounded-xl lg:!rounded-2xl !border-l-4 !border-blue-500">
    <p className="!text-sm sm:!text-base !text-gray-800 !font-semibold">
      <span className="!text-blue-600">⚠️ Important:</span> CDCP reimburses up to its own fee guide amount. Patients must pay any balance charged above that rate.
    </p>
    <ul className="!mt-3 lg:!mt-4 !ml-4 !text-xs sm:!text-sm !text-gray-700 !space-y-2">
      <li className="!flex !items-start sm:!items-center">
        <span className="!w-1.5 !h-1.5 lg:!w-2 lg:!h-2 !bg-blue-500 !rounded-full !mr-2 lg:!mr-3 !flex-shrink-0 !mt-1.5 sm:!mt-0"></span>
        <span>The clinic may charge more than CDCP covers.</span>
      </li>
      <li className="!flex !items-start sm:!items-center">
        <span className="!w-1.5 !h-1.5 lg:!w-2 lg:!h-2 !bg-blue-500 !rounded-full !mr-2 lg:!mr-3 !flex-shrink-0 !mt-1.5 sm:!mt-0"></span>
        <span>You may pay for non-covered services separately.</span>
      </li>
    </ul>
  </div>
</section>

          {/* Contact + Clinics */}
          <div className="!grid !grid-cols-1 lg:!grid-cols-2 !gap-8 lg:!gap-10 !mb-12 lg:!mb-20">
            {/* Contact Form */}
            <div className="!bg-gradient-to-br !from-cyan-900 !to-blue-900 !p-6 sm:!p-8 lg:!p-10 !rounded-2xl lg:!rounded-3xl !shadow-xl lg:!shadow-2xl !text-white">
              <h3 className="!text-xl sm:!text-2xl lg:!text-3xl !tracking-tight !font-bold !mb-6 lg:!mb-8 text-center !text-white">
                Questions about the CDCP program? We're here to help!
              </h3>
              <form className="!space-y-4 lg:!space-y-5">
                <select className="!w-full !px-4 lg:!px-5 !py-3 lg:!py-4 !rounded-lg lg:!rounded-xl !border-0 !text-gray-700 !bg-white/95 focus:!ring-4 focus:!ring-white/30 !font-medium !text-sm sm:!text-base">
                  <option>Dental Studio Atilia Craig</option>
                </select>
                <div className="!flex !gap-4 lg:!gap-6 !bg-white/10 !p-3 lg:!p-4 !rounded-lg lg:!rounded-xl">
                  <label className="!flex !items-center !text-white !cursor-pointer !text-sm sm:!text-base">
                    <input type="radio" name="patient" value="yes" className="!mr-2 !w-4 !h-4" />
                    Yes
                  </label>
                  <label className="!flex !items-center !text-white !cursor-pointer !text-sm sm:!text-base">
                    <input type="radio" name="patient" value="no" className="!mr-2 !w-4 !h-4" />
                    No
                  </label>
                </div>
                <input type="text" placeholder="Enter Your Name" className="!w-full !px-4 lg:!px-5 !py-3 lg:!py-4 !border-0 !rounded-lg lg:!rounded-xl !bg-white/95 !placeholder-gray-500 !text-sm sm:!text-base" />
                <input type="email" placeholder="Enter Your Email" className="!w-full !px-4 lg:!px-5 !py-3 lg:!py-4 !border-0 !rounded-lg lg:!rounded-xl !bg-white/95 !placeholder-gray-500 !text-sm sm:!text-base" />
                <input type="tel" placeholder="Enter Your Phone Number" className="!w-full !px-4 lg:!px-5 !py-3 lg:!py-4 !border-0 !rounded-lg lg:!rounded-xl !bg-white/95 !placeholder-gray-500 !text-sm sm:!text-base" />
                <textarea placeholder="Enter Your Message" rows="4" className="!w-full !px-4 lg:!px-5 !py-3 lg:!py-4 !border-0 !rounded-lg lg:!rounded-xl !bg-white/95 !placeholder-gray-500 !text-sm sm:!text-base"></textarea>
                <button type="submit" className="!w-full !bg-white !text-blue-600 hover:!bg-blue-50 !font-bold !py-3 lg:!py-4 !rounded-lg lg:!rounded-xl !transition-all !duration-300 !transform hover:!scale-[1.02] !shadow-lg !text-sm sm:!text-base">
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Clinics */}
            <div className="!order-first lg:!order-last">
              <h3 className="!text-xl sm:!text-2xl lg:!text-3xl !font-bold !bg-gradient-to-r !from-blue-600 !to-blue-800 !bg-clip-text !text-transparent !mb-6 lg:!mb-8 !tracking-tight ">Participating CDCP clinics</h3>
              <div className="!space-y-4 lg:!space-y-6">
                {[
                  { name: "Richmond Shine Dental ", address: "Surrey at the intersection of King George Blvd ", link: "000000000", email: "sample@dentalstudiolondon.com" },
                  { name: "Simply white Dental", address: "1051 Wonderland Rd S, London, ON", link: "226-781-7641", email: "londonsouth@dentalstudiolondon.com" },
                  { name: "Brookwood Shine Dental", address: "151 Atilia Craig Main St, ON", link: "226-270-7086", email: "atilicraig@dentalstudiolondon.com" },
                  { name: "The Shine Dental Whiterock", address: "151 Atilia Craig Main St, ON", link: "226-270-7086", email: "atilicraig@dentalstudiolondon.com" },
                  { name: "Family Dental Clinic", address: "151 Atilia Craig Main St, ON", link: "226-270-7086", email: "atilicraig@dentalstudiolondon.com" }

                ].map((clinic, i) => (
                  <div key={i} className="!bg-white !p-4 sm:!p-5 lg:!p-6 !rounded-xl lg:!rounded-2xl !shadow-md lg:!shadow-lg hover:!shadow-xl lg:hover:!shadow-2xl !transition-all !duration-300 !border !border-blue-100 hover:!border-blue-300 !transform hover:!-translate-y-1">
                    <h4 className="!text-base sm:!text-lg lg:!text-xl !font-bold !text-blue-900 !mb-3 lg:!mb-4">{clinic.name}</h4>
                    <div className="!space-y-2 !text-gray-600">
                      {/* <div className="!flex !items-start hover:!text-blue-600 !transition-colors !text-xs sm:!text-sm">
                        <MapPin className="!w-4 lg:!w-5 !h-4 lg:!h-5 !text-blue-500 !mr-2 lg:!mr-3 !mt-0.5 !flex-shrink-0" />
                        <span className="!break-words">{clinic.address}</span>
                      </div>
                      <div className="!flex !items-center hover:!text-blue-600 !transition-colors !text-xs sm:!text-sm">
                        <Phone className="!w-4 lg:!w-5 !h-4 lg:!h-5 !text-blue-500 !mr-2 lg:!mr-3 !flex-shrink-0" />
                        <span>{clinic.link}</span>
                      </div>
                      <div className="!flex !items-start hover:!text-blue-600 !transition-colors !text-xs sm:!text-sm">
                        <Mail className="!w-4 lg:!w-5 !h-4 lg:!h-5 !text-blue-500 !mr-2 lg:!mr-3 !mt-0.5 !flex-shrink-0" />
                        <span className="!break-all">{clinic.email}</span>
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Application Schedule */}
          <section className="!mb-12 lg:!mb-20">
            <h2 className="!text-2xl sm:!text-3xl lg:!text-4xl !tracking-tight !font-bold !bg-gradient-to-r !from-blue-600 !to-blue-800 !bg-clip-text !text-transparent !mb-6 lg:!mb-8">CDCP Application Schedule</h2>
            <div className="!overflow-x-auto !-mx-4 sm:!mx-0">
              <div className="!bg-white !rounded-xl lg:!rounded-2xl !shadow-lg lg:!shadow-2xl !overflow-hidden !border !border-blue-100 !min-w-[400px] sm:!min-w-0">
                <table className="!w-full">
                  <thead>
                    <tr className="!bg-gradient-to-r !from-gray-50 !to-blue-50">
                      <th className="!py-3 lg:!py-5 !px-4 lg:!px-6 !text-left !font-bold !text-blue-900 !text-sm sm:!text-base lg:!text-lg">Group</th>
                      <th className="!py-3 lg:!py-5 !px-4 lg:!px-6 !text-left !font-bold !text-blue-900 !text-sm sm:!text-base lg:!text-lg">When you can apply</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="!border-b !border-gray-100 hover:!bg-blue-50 !transition-colors">
                      <td className="!py-3 lg:!py-5 !px-4 lg:!px-6 !font-medium !text-xs sm:!text-sm lg:!text-base">Seniors aged 65+</td>
                      <td className="!py-3 lg:!py-5 !px-4 lg:!px-6">
                        <span className="!bg-green-100 !text-green-700 !px-2 lg:!px-3 !py-0.5 lg:!py-1 !rounded-full !font-semibold !text-xs sm:!text-sm">Now</span>
                      </td>
                    </tr>
                    <tr className="!border-b !border-gray-100 hover:!bg-blue-50 !transition-colors">
                      <td className="!py-3 lg:!py-5 !px-4 lg:!px-6 !font-medium !text-xs sm:!text-sm lg:!text-base">Adults with Disability Tax Credit</td>
                      <td className="!py-3 lg:!py-5 !px-4 lg:!px-6">
                        <span className="!bg-green-100 !text-green-700 !px-2 lg:!px-3 !py-0.5 lg:!py-1 !rounded-full !font-semibold !text-xs sm:!text-sm">Now</span>
                      </td>
                    </tr>
                    <tr className="!border-b !border-gray-100 hover:!bg-blue-50 !transition-colors">
                      <td className="!py-3 lg:!py-5 !px-4 lg:!px-6 !font-medium !text-xs sm:!text-sm lg:!text-base">Children under 18</td>
                      <td className="!py-3 lg:!py-5 !px-4 lg:!px-6">
                        <span className="!bg-green-100 !text-green-700 !px-2 lg:!px-3 !py-0.5 lg:!py-1 !rounded-full !font-semibold !text-xs sm:!text-sm">Now</span>
                      </td>
                    </tr>
                    <tr className="hover:!bg-blue-50 !transition-colors">
                      <td className="!py-3 lg:!py-5 !px-4 lg:!px-6 !font-medium !text-xs sm:!text-sm lg:!text-base">All other eligible adults</td>
                      <td className="!py-3 lg:!py-5 !px-4 lg:!px-6">
                        <span className="!bg-blue-100 !text-blue-700 !px-2 lg:!px-3 !py-0.5 lg:!py-1 !rounded-full !font-semibold !text-xs sm:!text-sm">Throughout 2025</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Renewal */}
          <section className="!mb-12 lg:!mb-20 !bg-gradient-to-br !from-cyan-600 !to-blue-900 !p-6 sm:!p-8 lg:!p-10 !rounded-2xl lg:!rounded-3xl !shadow-xl lg:!shadow-2xl !text-white">
            <h2 className="!text-2xl sm:!text-3xl lg:!text-4xl !font-bold !mb-4 lg:!mb-6 !tracking-tight !text-white">Renewal Information for Current CDCP Members</h2>
            <p className="!text-blue-100 !text-sm sm:!text-base lg:!text-lg !mb-4 lg:!mb-6">
              Renew before <strong className="!text-white">June 1, 2025</strong>. Coverage ends June 30 if renewal isn't complete.
            </p>
            <a href="https://srv024.service.canada.ca/en/apply/66a5683c-7098-4711-bc85-dc98bee2483a/terms-and-conditions" className="!inline-block !bg-white !text-blue-600 !px-6 lg:!px-8 !py-3 lg:!py-4 !rounded-lg lg:!rounded-xl hover:!bg-blue-50 !font-bold !transition-all !transform hover:!scale-105 !shadow-lg !text-sm sm:!text-base">
              Renew Online Now →
            </a>
          </section>

          {/* Services Covered */}
          <section className="!mb-12 lg:!mb-20">
            <h2 className="!text-2xl sm:!text-3xl lg:!text-4xl !font-bold !bg-gradient-to-r !from-cyan-600 !to-blue-800 !bg-clip-text !text-transparent !mb-6 lg:!mb-8 !tracking-tight">Dental Services Covered by CDCP</h2>
            <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-4 lg:!gap-6">
              <div className="!bg-white !rounded-xl lg:!rounded-2xl !p-4 sm:!p-5 lg:!p-6 !shadow-md lg:!shadow-lg !border !border-blue-100">
                <ul className="!space-y-2 lg:!space-y-3 !text-xs sm:!text-sm lg:!text-base !text-gray-700">
                  <li className="!flex !items-center !p-1.5 lg:!p-2 hover:!bg-blue-50 !rounded-lg !transition-colors">
                    <span className="!text-blue-500 !mr-2 lg:!mr-3 !flex-shrink-0">✓</span> Preventive dentistry (cleanings, exams)
                  </li>
                  <li className="!flex !items-center !p-1.5 lg:!p-2 hover:!bg-blue-50 !rounded-lg !transition-colors">
                    <span className="!text-blue-500 !mr-2 lg:!mr-3 !flex-shrink-0">✓</span> Restorative dentistry (fillings, crowns)
                  </li>
                  <li className="!flex !items-center !p-1.5 lg:!p-2 hover:!bg-blue-50 !rounded-lg !transition-colors">
                    <span className="!text-blue-500 !mr-2 lg:!mr-3 !flex-shrink-0">✓</span> Endodontic (root canal therapy)
                  </li>
                  <li className="!flex !items-center !p-1.5 lg:!p-2 hover:!bg-blue-50 !rounded-lg !transition-colors">
                    <span className="!text-blue-500 !mr-2 lg:!mr-3 !flex-shrink-0">✓</span> Periodontic (gum treatment)
                  </li>
                  <li className="!flex !items-center !p-1.5 lg:!p-2 hover:!bg-blue-50 !rounded-lg !transition-colors">
                    <span className="!text-blue-500 !mr-2 lg:!mr-3 !flex-shrink-0">✓</span> Prosthodontic (dentures)
                  </li>
                </ul>
              </div>
              <div className="!bg-white !rounded-xl lg:!rounded-2xl !p-4 sm:!p-5 lg:!p-6 !shadow-md lg:!shadow-lg !border !border-blue-100">
                <ul className="!space-y-2 lg:!space-y-3 !text-xs sm:!text-sm lg:!text-base !text-gray-700">
                  <li className="!flex !items-center !p-1.5 lg:!p-2 hover:!bg-blue-50 !rounded-lg !transition-colors">
                    <span className="!text-blue-500 !mr-2 lg:!mr-3 !flex-shrink-0">✓</span> Orthodontic (requires preauthorization)
                  </li>
                  <li className="!flex !items-center !p-1.5 lg:!p-2 hover:!bg-blue-50 !rounded-lg !transition-colors">
                    <span className="!text-blue-500 !mr-2 lg:!mr-3 !flex-shrink-0">✓</span> Oral surgery (extractions)
                  </li>
                  <li className="!flex !items-center !p-1.5 lg:!p-2 hover:!bg-blue-50 !rounded-lg !transition-colors">
                    <span className="!text-blue-500 !mr-2 lg:!mr-3 !flex-shrink-0">✓</span> Dentures
                  </li>
                  <li className="!flex !items-center !p-1.5 lg:!p-2 hover:!bg-blue-50 !rounded-lg !transition-colors">
                    <span className="!text-blue-500 !mr-2 lg:!mr-3 !flex-shrink-0">✓</span> Oral health provisions (some preauthorization)
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Notes */}
          <section className="!bg-gradient-to-r !from-blue-50 !to-blue-100 !border-l-4 lg:!border-l-8 !border-blue-500 !p-6 lg:!p-8 !rounded-r-xl lg:!rounded-r-2xl !shadow-lg">
            <h3 className="!text-xl sm:!text-2xl lg:!text-3xl !font-bold !text-blue-900 !mb-4 lg:!mb-6 !tracking-tight">Important Notes:</h3>
            <ul className="!space-y-2 lg:!space-y-3 !text-sm sm:!text-base !text-gray-700">
              <li className="!flex !items-start">
                <span className="!text-blue-600 !mr-2 lg:!mr-3 !text-lg lg:!text-xl !flex-shrink-0">⚠</span> 
                CDCP coverage and acceptance at clinics may change.
              </li>
              <li className="!flex !items-start">
                <span className="!text-blue-600 !mr-2 lg:!mr-3 !text-lg lg:!text-xl !flex-shrink-0">⚠</span> 
                Clinics reserve the right to discontinue acceptance at any time.
              </li>
            </ul>
            <p className="!text-gray-700 !mt-4 lg:!mt-6 !text-sm sm:!text-base lg:!text-lg">
              For more information, visit{" "}
              <a href="https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html" className="!text-blue-600 hover:!text-blue-800 hover:!underline !font-semibold !transition-colors">
                www.canada.ca →
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Page;