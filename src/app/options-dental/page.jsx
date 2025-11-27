'use client';
import React, { useState } from 'react';
import { createAppointment } from "@/services/appointmentService";
import toast from 'react-hot-toast';


const cases = [
  { id: 'Invisalign : Crossbite', title: 'CROSSBITE', image: 'https://www.clayburndental.com/files/smile-assessment-quiz-bite-crossbite.svg' },
  { id: 'Invisalign : Gap Teeth', title: 'GAP TEETH', image: 'https://www.clayburndental.com/files/smile-assessment-quiz-bite-gap-teeth.svg' },
  { id: 'Invisalign : Open bite', title: 'OPEN BITE',  image: 'https://www.clayburndental.com/files/smile-assessment-quiz-bite-open-bite.svg' },
  { id: 'Invisalign : Overbite', title: 'OVERBITE', image: 'https://www.clayburndental.com/files/smile-assessment-quiz-bite-overbite.svg' },
  { id: 'Invisalign : Underbite', title: 'UNDERBITE',  image: 'https://www.clayburndental.com/files/smile-assessment-quiz-bite-underbite.svg' },
  { id: 'Invisalign : Crooked Teeth', title: 'CROOKED TEETH', image: 'https://www.clayburndental.com/files/smile-assessment-quiz-bite-crooked-teeth.svg' },
];

export default function TreatableCasesInteractivePage() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    iAm: "",
    reason: "",
    goal: "Invisalign : Crossbite",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    contactMethod: "Phone",
  });

  // NEW: enable start only if a case is selected
  const canStart = !!form.goal;

  const setGoalFromCases = (id) => {
    setForm((f) => ({ ...f, goal: id }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let v = value;
    if (name === "phone") v = value.replace(/\D/g, "").slice(0, 10);
    setForm((f) => ({ ...f, [name]: v }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation
    if (!form.firstName.trim() ||
        !form.lastName.trim() ||
        !form.email.trim() ||
        form.phone.length !== 10 ||
        !form.goal ||
        !form.reason) {
      toast.error("Please fill all required fields.");
      return;
    }

    const payload = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: "+1" + form.phone, 
      treatment: form.goal,     
      message: form.reason,     
    };

    try {
      const res = await createAppointment(payload);

      if (!res.status) {
        toast.error(res.message || "Something went wrong.");
        return;
      }

      toast.success("Assessment submitted successfully!");

      setForm({
        iAm: "",
        reason: "",
        goal: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        contactMethod: "Phone",
      });

      setShowForm(false);

    } catch (error) {
      toast.error("Submission failed.");
      console.error("Something went wrong",error);
    }
  };

  return (
    <div className="!min-h-screen !bg-white !text-slate-800">
      
      <main className="!mx-auto !max-w-6xl !px-4 sm:!px-6 !py-28 sm:!py-12">

        {/* Title */}
        <header className="!mb-6 sm:!my-220 md:!my-20 sm:!mb-8">
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
            <h2 className="!text-center !text-sm sm:!text-base !font-extrabold !uppercase !tracking-wide !text-blue-900">
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

            <div className="!mt-6 sm:!mt-8 !grid !grid-cols-2  md:!grid-cols-4 !gap-x-6 !gap-y-8">
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
                className="!inline-flex !items-center !justify-center !rounded !border !border-blue-700 !px-5 !py-2.5 !text-[13px] !font-semibold !tracking-wide !text-blue-800 hover:!bg-blue-900 hover:!text-white !transition disabled:!border-slate-300 disabled:! text-slate-400 disabled:opacity-60 disabled:cursor-not-allowed"
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
                  <option value="An adult seeking treatment for myself">An adult seeking treatment for myself</option>
                  <option value="A parent / caregiver seeking treatment for my teen">A parent / caregiver seeking treatment for my teen</option>
                  <option value="A teen seeking treatment for myself">A teen seeking treatment for myself</option>
                  <option value="Other">Other</option>
                </select>
              </Field>

              <Field label="My reason for teeth straightening" required>
                <select
                  name="reason"
                  value={form.reason}
                  onChange={handleChange}
                  className="!mt-1 !block !w-full !rounded-md !border !border-slate-300 !px-3 !py-2 !text-sm"
                >
                  <option value="">Please select</option>
                  <option value="Reason: Wedding">Wedding</option>
                  <option value="Reason: New job">New job (starting or hunting)</option>
                  <option value="Reason: Graduating from school">Graduating from school (soon or recently)</option>
                  <option value="Reason: I want to feel more confident">I want to feel more confident</option>
                  <option value="Reason: Other">Other</option>
                </select>
              </Field>

              {/* Primary Goal */}
              <div>
                <Label required>My primary goal is to treat</Label>
                <div className="!mt-2 !font-semibold !text-blue-900">
                  {cases.find((c) => c.id === form.goal)?.title}
                </div>
              </div>

              {/* Name fields */}
              <div className="!grid !grid-cols-1 sm:!grid-cols-2 !gap-4">
                <Field label="First Name" required>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="!mt-1 !block !w-full !rounded-md !border !border-slate-300 !px-3 !py-2 !text-sm"
                  />
                </Field>
                <Field label="Last Name" required>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="!mt-1 !block !w-full !rounded-md !border !border-slate-300 !px-3 !py-2 !text-sm"
                  />
                </Field>
              </div>

              {/* Email */}
              <Field label="Email" required>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="!mt-1 !block !w-full !rounded-md !border !border-slate-300 !px-3 !py-2 !text-sm"
                />
              </Field>

              {/* Phone */}
              <Field label="Phone" required>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  maxLength={10}
                  className="!mt-1 !block !w-full !rounded-md !border !border-slate-300 !px-3 !py-2 !text-sm"
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
                  className="!rounded-md !bg-green-700 !px-5 !py-3 !text-sm !font-semibold !text-white hover:!bg-green-800"
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
      className={`!border !transition ${selected ? '!border-blue-900 !ring-2 !ring-blue-900' : '!border-slate-200 hover:!border-blue-900'}`}
    >
      <div className="!aspect-[1/1] !bg-gray-100">
        <img src={image} alt="case" className="!h-full !w-full !object-contain" />
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



function InfoCard({ title, text }) {
  return (
    <div className="!rounded !border !border-slate-200 !bg-slate-50 !p-5">
      <h4 className="!mb-2 !font-semibold !text-slate-800">{title}</h4>
      <p className="!text-sm !text-slate-700">{text}</p>
    </div>
  );
}
