import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 md:px-12 lg:px-32 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 !mb-6">Privacy Policy</h1>
        <p className="text-lg text-gray-600 mb-10">
          At Langley Dental, your privacy is our top priority. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or use our services.
        </p>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
          <p className="text-base text-gray-600">
            We may collect personal details such as your name, email address, phone number, and medical history when you contact us, book appointments, or fill out forms on our website.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
          <p className="text-base text-gray-600">
            Your information is used solely to provide and improve our dental services, manage appointments, send reminders, and communicate important updates about your treatment or our practice.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Data Protection</h2>
          <p className="text-base text-gray-600">
            We implement strict security measures to ensure your personal and medical data is stored safely and protected against unauthorized access, disclosure, or misuse.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Sharing of Information</h2>
          <p className="text-base text-gray-600">
            We do not sell or share your information with third parties, except when required by law or to provide essential healthcare services with your consent.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Cookies and Website Usage</h2>
          <p className="text-base text-gray-600">
            Our website may use cookies to improve user experience and analyze traffic. You can disable cookies in your browser settings, though some features may not function correctly.
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Your Rights</h2>
          <p className="text-base text-gray-600">
            You have the right to access, update, or request deletion of your personal data. To exercise these rights, please contact us directly.
          </p>
        </div>

        {/* Section 7 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Changes to This Policy</h2>
          <p className="text-base text-gray-600">
            Langley Dental reserves the right to update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.
          </p>
        </div>

        {/* Contact Section */}
        <div className="border-t border-gray-200 pt-8 mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
          <p className="text-base text-gray-600">
            If you have any questions about our Privacy Policy, please contact us at: <br />
            <strong>Email:</strong> info@langleydental.com <br />
            <strong>Phone:</strong> +17783667770
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
