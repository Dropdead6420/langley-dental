"use client";
import { Phone, Mail, MapPin } from "lucide-react";

function Page() {
  return (
    <div className="font-jost">
    <div className="!min-h-screen !bg-gradient-to-b !from-gray-50 !to-white">
      <div className="!max-w-7xl !mx-auto !py-12">

        {/* Hero Section */}
        <div className="!grid md:!grid-cols-2 !gap-8 !items-center ">
          <div>
            <h1 className="!text-4xl !tracking-tight !font-bold !text-blue-900 !mb-4">
              Canadian Dental Care Plan <span className="!text-blue-800">(CDCP)</span>
            </h1>
            <p className="!text-gray-600 !leading-relaxed">
              The Canadian Dental Care Plan (CDCP) is a federal program that provides dental care coverage for eligible Canadian residents who do not have their own dental benefits and whose adjusted family net income is under $90,000 annually.
            </p>
          </div>
          <div className="!rounded-2xl !my-20 !overflow-hidden !shadow-xl">
            <img
              src="https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Dental care"
              className="!w-full !h-full !object-cover"
            />
          </div>
        </div>

        {/* Eligibility Criteria */}
        <section className="!mb-16">
          <h2 className="!text-3xl !font-bold !text-gray-900 !tracking-tight !mb-6">Eligibility Criteria</h2>
          <p className="!text-gray-700 !mb-4">To qualify for the CDCP, you must meet all of the following criteria:</p>
          <ul className="!space-y-3 !text-gray-700">
            <li className="!flex !items-start">
              <span className="!text-cyan-500 !mr-2">•</span>
              <span>Be a Canadian resident for tax purposes</span>
            </li>
            <li className="!flex !items-start">
              <span className="!text-cyan-500 !mr-2">•</span>
              <span>Have filed your 2023 tax return (or intend to)</span>
            </li>
            <li className="!flex !items-start">
              <span className="!text-cyan-500 !mr-2">•</span>
              <span>Have an adjusted family net income of less than $90,000</span>
            </li>
            <li className="!flex !items-start">
              <span className="!text-cyan-500 !mr-2">•</span>
              <span>Not have access to dental insurance through:</span>
            </li>
          </ul>
          <ul className="!ml-8 !mt-2 !space-y-2 !text-gray-700">
            <li><span className="!text-gray-400 !mr-2">◦</span>Employer-sponsored plan (including health and wellness accounts)</li>
            <li><span className="!text-gray-400 !mr-2">◦</span>Pension plans</li>
            <li><span className="!text-gray-400 !mr-2">◦</span>Professional or student organizations</li>
            <li><span className="!text-gray-400 !mr-2">◦</span>Purchased insurance</li>
          </ul>
        </section>

        {/* Exceptions */}
        <section className="!mb-16 !bg-cyan-50 !border-l-4 !border-cyan-400 !p-6 !rounded-r-lg">
          <h3 className="!text-2xl !tracking-tight !font-bold !text-gray-900 !mb-4">Important Exceptions and Notes:</h3>
          <ul className="!space-y-3 !text-gray-700">
            <li><span className="!text-cyan-500 !mr-2">•</span>If dental insurance coverage is available through your employer, pension, professional, or student organization, you are <strong>not eligible for CDCP</strong>—even if you decline coverage.</li>
            <li><span className="!text-cyan-500 !mr-2">•</span>If your current dental insurance was privately purchased, you are <strong>still eligible for CDCP</strong> only after coverage ends.</li>
            <li><span className="!text-cyan-500 !mr-2">•</span>If your dental insurance expires or is cancelled, you can apply for the CDCP at that time.</li>
            <li><span className="!text-cyan-500 !mr-2">•</span><strong>Exception:</strong> If you previously had pension-based coverage that you opted out of but cannot rejoin as per pension rules.</li>
          </ul>
        </section>

        {/* Family Net Income */}
        <section className="!mb-16">
          <h2 className="!text-3xl !tracking-tight !font-bold !text-gray-900 !mb-6">Understanding Adjusted Family Net Income</h2>
          <p className="!text-gray-700 !mb-4">Your Adjusted family net income is calculated as follows:</p>
          <ul className="!space-y-2 !text-gray-700 !ml-4">
            <li><span className="!text-cyan-500 !mr-2">•</span>Your net income (line 23600) + your spouse’s/common-law partner’s net income (line 23600)</li>
            <li><span className="!text-cyan-500 !mr-2">•</span>Adjustments may apply based on CRA situations</li>
          </ul>
        </section>

        {/* Coverage Table */}
        <section className="!mb-16">
          <h2 className="!text-3xl !tracking-tight !font-bold !text-gray-900 !mb-6">CDCP Coverage & Fees</h2>
          <p className="!text-gray-700 !mb-6">The CDCP covers dental services based on an established CDCP fee guide, which may differ from provincial dental fees.</p>

          <div className="!bg-white !rounded-lg !shadow-lg !overflow-hidden">
            <table className="!w-full">
              <thead>
                <tr className="!bg-cyan-500 !text-white">
                  <th className="!py-4 !px-6 !text-left !font-semibold">Adjusted Family Net Income</th>
                  <th className="!py-4 !px-6 !text-left !font-semibold">CDCP Coverage</th>
                  <th className="!py-4 !px-6 !text-left !font-semibold">How Much You Pay</th>
                </tr>
              </thead>
              <tbody>
                <tr className="!border-b !border-gray-200 hover:!bg-gray-50">
                  <td className="!py-4 !px-6">Below $70,000</td>
                  <td className="!py-4 !px-6">100% of CDCP fees</td>
                  <td className="!py-4 !px-6">0% (Additional fees may apply)</td>
                </tr>
                <tr className="!border-b !border-gray-200 hover:!bg-gray-50">
                  <td className="!py-4 !px-6">$70,000 - $79,999</td>
                  <td className="!py-4 !px-6">60% of CDCP fees</td>
                  <td className="!py-4 !px-6">40% (Additional fees may apply)</td>
                </tr>
                <tr className="hover:!bg-gray-50">
                  <td className="!py-4 !px-6">$80,000 - $89,999</td>
                  <td className="!py-4 !px-6">40% of CDCP fees</td>
                  <td className="!py-4 !px-6">60% (Additional fees may apply)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="!mt-6 !bg-blue-50 !p-6 !rounded-lg">
            <p className="!text-gray-700 !text-sm"><strong>Important:</strong> CDCP reimburses up to its own fee guide amount. Patients must pay any balance charged above that rate.</p>
            <ul className="!mt-3 !ml-4 !text-sm !text-gray-700">
              <li>• The clinic may charge more than CDCP covers.</li>
              <li>• You may pay for non-covered services separately.</li>
            </ul>
          </div>
        </section>

        {/* Contact + Clinics */}
        <div className="!grid md:!grid-cols-2 !gap-8 !mb-16">
          {/* Contact Form */}
          <div className="!bg-cyan-50 !p-8 !rounded-2xl !shadow-lg">
            <h3 className="!text-2xl !tracking-tight !font-bold !text-gray-900 !mb-6 text-center">
              Questions about the CDCP program? We're here to help!
            </h3>
            <form className="!space-y-4">
              <select className="!w-full !px-4 !py-3 !rounded-lg !border !border-gray-300 focus:!ring-2 focus:!ring-cyan-500">
                <option>Dental Studio Atilia Craig</option>
              </select>
              <div className="!flex !gap-4">
                <label className="!flex !items-center">
                  <input type="radio" name="patient" value="yes" className="!mr-2" />
                  Yes
                </label>
                <label className="!flex !items-center">
                  <input type="radio" name="patient" value="no" className="!mr-2" />
                  No
                </label>
              </div>
              <input type="text" placeholder="Enter Your Name" className="!w-full !px-4 !py-3 !border !rounded-lg" />
              <input type="email" placeholder="Enter Your Email" className="!w-full !px-4 !py-3 !border !rounded-lg" />
              <input type="tel" placeholder="Enter Your Phone Number" className="!w-full !px-4 !py-3 !border !rounded-lg" />
              <textarea placeholder="Enter Your Message" rows="4" className="!w-full !px-4 !py-3 !border !rounded-lg"></textarea>
              <button type="submit" className="!w-full !bg-cyan-500 hover:!bg-cyan-600 !text-white !font-semibold !py-3 !rounded-lg">
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Clinics */}
          <div>
            <h3 className="!text-2xl !font-bold !text-gray-900 !mb-6 !tracking-tight">Participating CDCP clinics</h3>
            <div className="!space-y-6">
              {[ 
                { name: "Dental Studio London North", address: "1080 Adelaide St, North London, ON", phone: "226-781-7255", email: "londonnorth@dentalstudiolondon.com" },
                { name: "Dental Studio London South", address: "1051 Wonderland Rd S, London, ON", phone: "226-781-7641", email: "londonsouth@dentalstudiolondon.com" },
                { name: "Dental Studio Atilia Craig", address: "151 Atilia Craig Main St, ON", phone: "226-270-7086", email: "atilicraig@dentalstudiolondon.com" }
              ].map((clinic, i) => (
                <div key={i} className="!bg-white !p-6 !rounded-xl !shadow-md hover:!shadow-lg">
                  <h4 className="!text-xl !font-bold !text-gray-900 !mb-3">{clinic.name}</h4>
                  <div className="!flex !items-start"><MapPin className="!w-5 !h-5 !text-cyan-500 !mr-2" />{clinic.address}</div>
                  <div className="!flex !items-center"><Phone className="!w-5 !h-5 !text-cyan-500 !mr-2" />{clinic.phone}</div>
                  <div className="!flex !items-center"><Mail className="!w-5 !h-5 !text-cyan-500 !mr-2" />{clinic.email}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Schedule */}
        <section className="!mb-16">
          <h2 className="!text-3xl !tracking-tight !font-bold !text-gray-900 !mb-6">CDCP Application Schedule</h2>
          <div className="!bg-white !rounded-lg !shadow-lg !overflow-hidden">
            <table className="!w-full">
              <thead>
                <tr className="!bg-gray-100">
                  <th className="!py-4 !px-6 !text-left">Group</th>
                  <th className="!py-4 !px-6 !text-left">When you can apply</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="!py-4 !px-6">Seniors aged 65+</td><td className="!py-4 !px-6">Now</td></tr>
                <tr><td className="!py-4 !px-6">Adults with Disability Tax Credit</td><td className="!py-4 !px-6">Now</td></tr>
                <tr><td className="!py-4 !px-6">Children under 18</td><td className="!py-4 !px-6">Now</td></tr>
                <tr><td className="!py-4 !px-6">All other eligible adults</td><td className="!py-4 !px-6">Throughout 2025</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Renewal */}
        <section className="!mb-16 !bg-blue-50 !p-8 !rounded-2xl">
          <h2 className="!text-3xl !font-bold !text-gray-900 !mb-6 !tracking-tight">Renewal Information for Current CDCP Members</h2>
          <p className="!text-gray-700">Renew before <strong>June 1, 2025</strong>. Coverage ends June 30 if renewal isn’t complete.</p>
          <a href="#" className="!mt-4 !inline-block !bg-cyan-500 !text-white !px-6 !py-3 !rounded-lg hover:!bg-cyan-600">
            Renew Online Now
          </a>
        </section>

        {/* Services Covered */}
        <section className="!mb-16">
          <h2 className="!text-3xl !font-bold !text-gray-900 !mb-6 !tracking-tight">Dental Services Covered by CDCP</h2>
          <div className="!grid md:!grid-cols-2 !gap-4">
            <ul className="!space-y-2 !text-gray-700">
              <li>• Preventive dentistry (cleanings, exams)</li>
              <li>• Restorative dentistry (fillings, crowns)</li>
              <li>• Endodontic (root canal therapy)</li>
              <li>• Periodontic (gum treatment)</li>
              <li>• Prosthodontic (dentures)</li>
            </ul>
            <ul className="!space-y-2 !text-gray-700">
              <li>• Orthodontic (requires preauthorization)</li>
              <li>• Oral surgery (extractions)</li>
              <li>• Dentures</li>
              <li>• Oral health provisions (some preauthorization)</li>
            </ul>
          </div>
        </section>

        {/* Notes */}
        <section className="!bg-cyan-50 !border-l-4 !border-cyan-400 !p-6 !rounded-r-lg">
          <h3 className="!text-2xl !font-bold !text-gray-900 !mb-4 !tracking-tight">Important Notes:</h3>
          <ul className="!space-y-2 !text-gray-700">
            <li>• CDCP coverage and acceptance at clinics may change.</li>
            <li>• Clinics reserve the right to discontinue acceptance at any time.</li>
          </ul>
          <p className="!text-gray-700 !mt-4">
            For more information, visit{" "}
            <a href="#" className="!text-cyan-500 hover:!underline">www.canada.ca/cdcp</a>
          </p>
        </section>

      
      </div>
    </div>
    </div>
  );
}

export default Page;
