'use client';
import React, { useState } from 'react';

const cases = [
  { id: 'crossbite', title: 'CROSSBITE', image: 'https://www.clayburndental.com/files/smile-assessment-quiz-bite-crossbite.svg' },
  { id: 'gap', title: 'GAP TEETH', image: 'https://www.clayburndental.com/files/smile-assessment-quiz-bite-gap-teeth.svg' },
  { id: 'openbite', title: 'OPEN BITE',  image: 'https://www.clayburndental.com/files/smile-assessment-quiz-bite-open-bite.svg' },
  { id: 'overbite', title: 'OVERBITE', image: 'https://www.clayburndental.com/files/smile-assessment-quiz-bite-overbite.svg' },
  { id: 'underbite', title: 'UNDERBITE',  image: 'https://www.clayburndental.com/files/smile-assessment-quiz-bite-underbite.svg' },
  { id: 'crooked', title: 'CROOKED TEETH', image: 'https://www.clayburndental.com/files/smile-assessment-quiz-bite-crooked-teeth.svg' },
];

export default function TreatableCasesInteractivePage() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    iAm: '',
    reason: '',
    goal: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    contactMethod: 'Phone',
  });

  // NEW: enable start only if a case is selected
  const canStart = !!form.goal;

  const setGoalFromCases = (id) => {
    setForm((f) => ({ ...f, goal: id }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Assessment submitted:
I am: ${form.iAm}
Reason: ${form.reason}
Primary goal: ${form.goal}
Name: ${form.firstName} ${form.lastName}
Email: ${form.email}
Phone: ${form.phone}
Preferred contact: ${form.contactMethod}`);
  };

  return (
    <div className="!min-h-screen !bg-white !text-slate-800">
      <main className="!mx-auto !max-w-6xl !px-4  sm:!px-6 !py-8 sm:!py-12">
        {/* Title + Intro */}
        <header className="!mb-6 sm:my-20 md:my-12 sm:!mb-8">
          <h1 className="!text-2xl sm:!text-3xl !font-semibold !tracking-tight !text-blue-900">
            Invisalign® Treatable Cases
          </h1>
          <p className="!mt-1 !text-slate-700">
            At Clayburn Dental, we will complete a comprehensive assessment of your teeth, gums, jaw and bite to
            determine if your case is treatable with Invisalign.
          </p>
        </header>

        {/* 👇 Treatable Cases section OR form dynamically */}
        {!showForm ? (
          <section className="!rounded !border !border-slate-200 !bg-slate-50 !p-6 sm:!p-8 !mb-10">
            <h2 className="!text-center !text-sm sm:!text-base  !font-extrabold !uppercase !tracking-wide !text-blue-900">
              What Cases Can Invisalign Treat?
            </h2>
            <p className="!mt-2 !text-center !text-slate-600">
              Invisalign can be used to treat a number of misalignment and malocclusion issues. Click a case below to start your assessment.
            </p>

            {/* Cases grid */}
            <div className="!mt-6 sm:!mt-1 !grid !grid-cols-2 md:!grid-cols-4 !gap-x-6 !gap-y-8">
              {cases.slice(0, 4).map((c) => (
                <CaseTile
                  key={c.id}
                  image={c.image}
                  selected={form.goal === c.id}
                  onClick={() => setGoalFromCases(c.id)}
                />
              ))}
            </div>

            <div className="!mt-6 sm:!mt-8 !grid !grid-cols-2 md:!grid-cols-4 !gap-x-6 !gap-y-8">
              {cases.slice(4).map((c) => (
                <CaseTile
                  key={c.id}
                  image={c.image}
                  selected={form.goal === c.id}
                  onClick={() => setGoalFromCases(c.id)}
                />
              ))}
            </div>

            <p className="!mt-8 !text-center !text-slate-700">
              To see if you may have a case treatable with Invisalign, take our Smile Assessment.
            </p>

            <div className="!mt-4 !flex !justify-center">
              <button
                onClick={() => setShowForm(true)}
                disabled={!canStart}
                className="!inline-flex !items-center !justify-center !rounded !border !border-blue-700 !px-5 !py-2.5 !text-[13px] !font-semibold !tracking-wide !text-blue-800 hover:!bg-blue-900 hover:!text-white !transition disabled:!border-slate-300 disabled:!text-slate-400 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:!bg-transparent disabled:hover:!text-slate-400"
              >
                START YOUR ASSESSMENT
              </button>
            </div>
          </section>
        ) : (
          <section className="!mx-auto !max-w-3xl !border !border-slate-200 !rounded !p-6 sm:!p-8 !bg-white">
            <h4 className="!text-xl !font-semibold !text-slate-800 !text-center">Smile Assessment</h4>
            <p className="!mt-2 !text-center !text-slate-600 !text-sm">
              Answer a few quick questions and we’ll follow up with next steps.
            </p>

            <form onSubmit={handleSubmit} className="!mt-6 !space-y-6">
              <Field label="I am" required>
                <select
                  name="iAm"
                  value={form.iAm}
                  onChange={handleChange}
                  className="!mt-1 !block !w-full !rounded-md !border !border-slate-300 !bg-white !px-3 !py-2 !text-sm !shadow-sm focus:!border-blue-600 focus:!outline-none focus:!ring-2 focus:!ring-blue-600"
                >
                  <option value="">Please select</option>
                  <option value="Parent/Guardian">A parent/guardian</option>
                  <option value="Adult (18+)">An adult (18+)</option>
                  <option value="Teen (13-17)">A teen (13–17)</option>
                  <option value="Child (12 and under)">A child (12 and under)</option>
                  <option value="Other">Other</option>
                </select>
              </Field>

              <Field label="My reason for teeth straightening" required>
                <select
                  name="reason"
                  value={form.reason}
                  onChange={handleChange}
                  className="!mt-1 !block !w-full !rounded-md !border !border-slate-300 !bg-white !px-3 !py-2 !text-sm !shadow-sm focus:!border-blue-600 focus:!outline-none focus:!ring-2 focus:!ring-blue-600"
                >
                  <option value="">Please select</option>
                  <option value="Crowding">Crowding</option>
                  <option value="Spacing">Spacing</option>
                  <option value="Bite issues">Bite issues</option>
                  <option value="Aesthetics">Aesthetics</option>
                  <option value="Other">Other</option>
                </select>
              </Field>

              <div>
                <div className="!flex  !gap-2">
                  <Label required>My primary goal is to treat</Label>
                  {form.goal && form.goal !== "none" && (
                    <span className="!text-sm !font-semibold !text-gray-900">
                      {cases.find((c) => c.id === form.goal)?.title}
                    </span>
                  )}
                  {form.goal === "none" && (
                    <span className="!text-sm !font-semibold !text-blue-700">
                      Straighter Teeth (General)
                    </span>
                  )}
                </div>

                {/* <Label required>My primary goal is to treat</Label>
                <div role="radiogroup" className="!mt-2 !grid !grid-cols-1 !gap-3 sm:!grid-cols-2 lg:!grid-cols-3">
                  {cases.map((g) => (
                    <OptionCard
                      key={g.id}
                      title={g.title}
                      desc={g.desc}
                      selected={form.goal === g.id}
                      onClick={() => setForm((f) => ({ ...f, goal: g.id }))}
                    />
                  ))}
                  <button
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, goal: 'none' }))}
                    className={`!col-span-1 sm:!col-span-2 lg:!col-span-3 !w-full !rounded-md !border !p-5 !text-left !transition
                      ${form.goal === 'none'
                        ? '!border-blue-600 !bg-blue-50 !ring-2 !ring-blue-600'
                        : '!border-slate-200 hover:!border-blue-500 hover:!shadow-sm'}`}
                  >
                    <div className="!flex !items-center !gap-4">
                      <TeethIcon className={form.goal === 'none' ? '!text-blue-600' : '!text-slate-400'} />
                      <p className="!text-sm !font-medium !text-slate-800">
                        None of the above, I just want generally straighter teeth
                      </p>
                    </div>
                  </button>
                </div> */}
              </div>

              <div className="!grid !grid-cols-1 !gap-4 sm:!grid-cols-2">
                <Field label="First Name" required>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="!mt-1 !block !w-full !rounded-md !border !border-slate-300 !bg-white !px-3 !py-2 !text-sm !shadow-sm focus:!border-blue-600 focus:!outline-none focus:!ring-2 focus:!ring-blue-600"
                  />
                </Field>
                <Field label="Last Name" required>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="!mt-1 !block !w-full !rounded-md !border !border-slate-300 !bg-white !px-3 !py-2 !text-sm !shadow-sm focus:!border-blue-600 focus:!outline-none focus:!ring-2 focus:!ring-blue-600"
                  />
                </Field>
              </div>

              <Field label="Email" required>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="!mt-1 !block !w-full !rounded-md !border !border-slate-300 !bg-white !px-3 !py-2 !text-sm !shadow-sm focus:!border-blue-600 focus:!outline-none focus:!ring-2 focus:!ring-blue-600"
                />
              </Field>

              <Field label="Phone" required>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="!mt-1 !block !w-full !rounded-md !border !border-slate-300 !bg-white !px-3 !py-2 !text-sm !shadow-sm focus:!border-blue-600 focus:!outline-none focus:!ring-2 focus:!ring-blue-600"
                />
              </Field>

              <Field label="How should we contact you?" required>
                <select
                  name="contactMethod"
                  value={form.contactMethod}
                  onChange={handleChange}
                  className="!mt-1 !block !w-full !rounded-md !border !border-slate-300 !bg-white !px-3 !py-2 !text-sm !shadow-sm focus:!border-blue-600 focus:!outline-none focus:!ring-2 focus:!ring-blue-600"
                >
                  <option>Phone</option>
                  <option>Email</option>
                  <option>Text</option>
                </select>
              </Field>

              <div className="!pt-2">
                <button
                  type="submit"
                  className="!inline-flex !items-center !justify-center !rounded-md !bg-green-700 !px-5 !py-3 !text-sm !font-semibold !text-white !shadow-sm hover:!bg-green-800 focus:!outline-none focus:!ring-2 focus:!ring-green-600"
                >
                  Get Your Results
                </button>
                <p className="!mt-3 !text-xs !text-slate-500">
                  By submitting this form I agree to receive information about clear aligner treatment from this dental
                  practice. I understand that I may unsubscribe at any time.
                </p>
              </div>
            </form>
          </section>
        )}

        {/* Static info section below (always visible) */}
        <section className="!mb-12 !mt-10">
          <h3 className="!text-center !text-sm sm:!text-base !font-extrabold !uppercase !tracking-wide !text-blue-900">
            The Invisalign Consultation Process
          </h3>
          <p className="!mt-2 !text-center !text-slate-700">
            During the consultation process, our dentists will complete a comprehensive assessment of your teeth,
            gums, jaw and bite to determine if your case is treatable with Invisalign.
          </p>

          <div className="!mt-8 !grid !grid-cols-1 md:!grid-cols-4 !gap-5">
            <InfoCard title="History Review" text="Your dentist will start by reviewing your medical and dental history." />
            <InfoCard title="Examination" text="Next they will perform an oral exam of your teeth and gums." />
            <InfoCard title="Planning" text="If Invisalign fits, they’ll plan your treatment and aligner creation." />
            <InfoCard title="Scheduling" text="You’ll schedule your first fitting appointment." />
          </div>
        </section>
      </main>
    </div>
  );
}

/* ---------- Components ---------- */

function CaseTile({ image, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`!relative !w-auto !overflow-hidden  !border !transition-all 
        ${selected
          ? '!border-blue-900 !ring-2 !ring-blue-900'
          : '!border-slate-200 hover:!border-blue-900 hover:!shadow-md'}`}
    >
      <div className="!w-full !aspect-[1/1] !overflow-hidden !bg-gray-100">
        <img
          src={image}
          alt="case"
          className="!h-full !w-full !object-contain !transition-transform !duration-300 hover:!scale-105"
        />
      </div>
    </button>
  );
}

function Field({ label, required, children }) {
  return (
    <div className="!w-full">
      <Label required={required}>{label}</Label>
      {children}
    </div>
  );
}

function Label({ children, required }) {
  return (
    <label className="!block !text-xs !font-medium !uppercase !tracking-wide !text-slate-700">
      {children}
      {required && <span className="!text-red-600"> *</span>}
    </label>
  );
}

function OptionCard({ title, desc, selected, onClick }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onClick}
      className={`!flex !h-40 !w-full !flex-col !items-center !justify-center !rounded-md !border !p-6 !text-center !transition
      ${selected ? '!border-blue-600 !bg-blue-50 !ring-2 !ring-blue-600' : '!border-slate-200 hover:!border-blue-500 hover:!shadow-sm'}`}
    >
      <TeethIcon className={selected ? '!text-blue-600' : '!text-slate-400'} />
      <p className="!mt-3 !text-[11px] !font-extrabold !uppercase !tracking-wide !text-slate-800">{title}</p>
      <p className="!mt-1 !text-[11px] !text-slate-500">{desc}</p>
    </button>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="!rounded !border !border-slate-200 !bg-slate-50 !p-5">
      <h4 className="!mb-2 !font-semibold !text-slate-800">{title}</h4>
      <p className="!text-sm !leading-relaxed !text-slate-700">{text}</p>
    </div>
  );
}

function TeethIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 96 56"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 28c2-12 16-22 42-22s40 10 42 22-16 22-42 22S8 40 6 28z" />
      {Array.from({ length: 10 }).map((_, i) => {
        const x = 10 + i * 7.4;
        return <rect key={i} x={x} y="20" width="6" height="16" rx="2" />;
      })}
    </svg>
  );
}