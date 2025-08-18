import React from 'react'

const page = () => {
  return (
     <div className="bg-white text-gray-800 min-h-screen py-20">
      {/* Page Container */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Terms & Conditions
        </h1>
        
        {/* Intro */}
        <p className="text-lg text-gray-600 mb-6 text-center">
          Welcome to Langley Dental. By using our website, services, or booking
          appointments with us, you agree to the following terms and conditions.
          Please read them carefully.
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. General Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Langley Dental provides dental treatments and related services. 
              All information on our website is for general purposes only and 
              should not replace professional dental advice. 
              We reserve the right to update, change, or remove any information 
              at any time without prior notice.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Appointments & Cancellations
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To book an appointment, you must provide accurate personal details. 
              We require at least 24 hours’ notice for cancellations. 
              Failure to do so may result in cancellation fees. 
              Repeated missed appointments may lead to restricted access to services.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Payments & Billing
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All treatments must be paid for in full at the time of service 
              unless otherwise agreed. We accept major debit/credit cards 
              and other payment methods as communicated by our staff.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Privacy & Data Protection
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your personal information is collected and stored securely in 
              accordance with privacy regulations. We do not sell or share 
              your information with third parties without your consent, 
              except as required by law.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              While we strive to provide high-quality dental care, 
              Langley Dental will not be held liable for any indirect, 
              incidental, or consequential damages arising from 
              the use of our services or website.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Governing Law
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms & Conditions are governed by the laws of your local 
              jurisdiction. Any disputes will be handled exclusively in the 
              courts of that jurisdiction.
            </p>
          </section>
        </div>

        {/* Last Updated */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Last Updated: August 2025
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
