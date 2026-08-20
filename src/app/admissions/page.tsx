"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AdmissionsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitted(false);
    setError("");
    setReference("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/admissions", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || "Unable to submit application."
        );
      }

      setReference(result.reference || "");
      setSubmitted(true);
      form.reset();

      setTimeout(() => {
        document
          .getElementById("application-success")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
      }, 100);
    } catch (err) {
      console.error("Application submission error:", err);

      setSubmitted(false);

      setError(
        err instanceof Error
          ? err.message
          : "We couldn't submit your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f8f6] text-[#10251d]">
      {/* =========================
          NAVIGATION
      ========================== */}

      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto mt-3 max-w-7xl px-3 sm:mt-4 sm:px-5">
          <nav className="flex items-center justify-between rounded-full border border-white/40 bg-[#10251d]/95 px-4 py-2.5 text-white shadow-xl backdrop-blur-xl sm:px-5 sm:py-3">
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d8e8a8] font-black text-[#10251d] sm:h-10 sm:w-10">
                B
              </div>

              <div>
                <p className="text-xs font-bold tracking-wide sm:text-sm">
                  BLUECREST
                </p>

                <p className="text-[7px] uppercase tracking-[0.22em] text-white/60 sm:text-[9px] sm:tracking-[0.25em]">
                  International School
                </p>
              </div>
            </Link>

            <Link
              href="/"
              className="rounded-full border border-white/20 px-4 py-2.5 text-xs font-semibold transition hover:bg-white/10 sm:px-5 sm:text-sm"
            >
              ← Back to Website
            </Link>
          </nav>
        </div>
      </header>

      {/* =========================
          HERO
      ========================== */}

      <section className="relative overflow-hidden bg-[#10251d] px-5 pb-20 pt-36 text-white sm:pb-24 sm:pt-40">
        <div className="absolute right-[-20%] top-[-20%] h-[400px] w-[400px] rounded-full bg-[#d8e8a8]/10 blur-3xl sm:right-[-10%] sm:h-[500px] sm:w-[500px]" />

        <div className="absolute bottom-[-25%] left-[-20%] h-[350px] w-[350px] rounded-full bg-[#7da58e]/10 blur-3xl sm:left-[-10%] sm:h-[450px] sm:w-[450px]" />

        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d8e8a8] sm:text-sm">
              2026/2027 Admissions
            </p>

            <h1 className="mt-5 max-w-4xl text-[3rem] font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl">
              Begin your child&apos;s
              <span className="block text-[#d8e8a8]">
                Bluecrest journey.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              Complete the application form below and our admissions team
              will get in touch with you regarding the next steps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================
          APPLICATION FORM
      ========================== */}

      <section className="px-4 py-16 sm:px-5 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl"
        >
          <div className="rounded-[2rem] border border-[#10251d]/10 bg-white p-5 shadow-xl sm:p-10 lg:p-14">
            {/* FORM HEADER */}

            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6c8b76] sm:text-sm">
                Student Application
              </p>

              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Application details
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#66736c] sm:text-base">
                Please provide accurate information. Fields marked with *
                are required.
              </p>
            </div>

            <form
              className="space-y-10"
              onSubmit={handleSubmit}
            >
              {/* =========================
                  STUDENT INFORMATION
              ========================== */}

              <div>
                <h3 className="text-xl font-bold">
                  Student Information
                </h3>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {/* Student Name */}

                  <div>
                    <label
                      htmlFor="studentName"
                      className="text-sm font-semibold"
                    >
                      Student Full Name *
                    </label>

                    <input
                      id="studentName"
                      name="studentName"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Enter student's full name"
                      className="mt-2 min-h-14 w-full rounded-2xl border border-[#10251d]/10 bg-[#f7f8f6] px-5 py-4 text-base outline-none transition focus:border-[#6c8b76] focus:ring-2 focus:ring-[#6c8b76]/20"
                    />
                  </div>

                  {/* Date of Birth */}

                  <div>
                    <label
                      htmlFor="dob"
                      className="text-sm font-semibold"
                    >
                      Date of Birth *
                    </label>

                    <input
                      id="dob"
                      name="dob"
                      type="date"
                      required
                      className="mt-2 min-h-14 w-full rounded-2xl border border-[#10251d]/10 bg-[#f7f8f6] px-5 py-4 text-base outline-none transition focus:border-[#6c8b76] focus:ring-2 focus:ring-[#6c8b76]/20"
                    />
                  </div>

                  {/* Gender */}

                  <div>
                    <label
                      htmlFor="gender"
                      className="text-sm font-semibold"
                    >
                      Gender *
                    </label>

                    <select
                      id="gender"
                      name="gender"
                      required
                      defaultValue=""
                      className="mt-2 min-h-14 w-full rounded-2xl border border-[#10251d]/10 bg-[#f7f8f6] px-5 py-4 text-base outline-none transition focus:border-[#6c8b76] focus:ring-2 focus:ring-[#6c8b76]/20"
                    >
                      <option value="" disabled>
                        Select gender
                      </option>

                      <option value="male">Male</option>

                      <option value="female">Female</option>
                    </select>
                  </div>

                  {/* Class */}

                  <div>
                    <label
                      htmlFor="class"
                      className="text-sm font-semibold"
                    >
                      Class Applying For *
                    </label>

                    <select
                      id="class"
                      name="class"
                      required
                      defaultValue=""
                      className="mt-2 min-h-14 w-full rounded-2xl border border-[#10251d]/10 bg-[#f7f8f6] px-5 py-4 text-base outline-none transition focus:border-[#6c8b76] focus:ring-2 focus:ring-[#6c8b76]/20"
                    >
                      <option value="" disabled>
                        Select class
                      </option>

                      <option value="early-years">
                        Early Years
                      </option>

                      <option value="primary">
                        Primary
                      </option>

                      <option value="secondary">
                        Secondary
                      </option>
                    </select>
                  </div>

                  {/* Previous School */}

                  <div className="md:col-span-2">
                    <label
                      htmlFor="previousSchool"
                      className="text-sm font-semibold"
                    >
                      Previous School
                    </label>

                    <input
                      id="previousSchool"
                      name="previousSchool"
                      type="text"
                      placeholder="Name of previous school"
                      className="mt-2 min-h-14 w-full rounded-2xl border border-[#10251d]/10 bg-[#f7f8f6] px-5 py-4 text-base outline-none transition focus:border-[#6c8b76] focus:ring-2 focus:ring-[#6c8b76]/20"
                    />
                  </div>
                </div>
              </div>

              {/* =========================
                  PARENT INFORMATION
              ========================== */}

              <div className="border-t border-[#10251d]/10 pt-10">
                <h3 className="text-xl font-bold">
                  Parent / Guardian Information
                </h3>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {/* Parent Name */}

                  <div>
                    <label
                      htmlFor="parentName"
                      className="text-sm font-semibold"
                    >
                      Parent / Guardian Name *
                    </label>

                    <input
                      id="parentName"
                      name="parentName"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Enter full name"
                      className="mt-2 min-h-14 w-full rounded-2xl border border-[#10251d]/10 bg-[#f7f8f6] px-5 py-4 text-base outline-none transition focus:border-[#6c8b76] focus:ring-2 focus:ring-[#6c8b76]/20"
                    />
                  </div>

                  {/* Phone */}

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold"
                    >
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+234..."
                      className="mt-2 min-h-14 w-full rounded-2xl border border-[#10251d]/10 bg-[#f7f8f6] px-5 py-4 text-base outline-none transition focus:border-[#6c8b76] focus:ring-2 focus:ring-[#6c8b76]/20"
                    />
                  </div>

                  {/* Email */}

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="mt-2 min-h-14 w-full rounded-2xl border border-[#10251d]/10 bg-[#f7f8f6] px-5 py-4 text-base outline-none transition focus:border-[#6c8b76] focus:ring-2 focus:ring-[#6c8b76]/20"
                    />
                  </div>

                  {/* Relationship */}

                  <div>
                    <label
                      htmlFor="relationship"
                      className="text-sm font-semibold"
                    >
                      Relationship to Student *
                    </label>

                    <select
                      id="relationship"
                      name="relationship"
                      required
                      defaultValue=""
                      className="mt-2 min-h-14 w-full rounded-2xl border border-[#10251d]/10 bg-[#f7f8f6] px-5 py-4 text-base outline-none transition focus:border-[#6c8b76] focus:ring-2 focus:ring-[#6c8b76]/20"
                    >
                      <option value="" disabled>
                        Select relationship
                      </option>

                      <option value="parent">Parent</option>

                      <option value="guardian">Guardian</option>
                    </select>
                  </div>

                  {/* Message */}

                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold"
                    >
                      Additional Information
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us anything else you would like the admissions team to know..."
                      className="mt-2 w-full resize-none rounded-2xl border border-[#10251d]/10 bg-[#f7f8f6] px-5 py-4 text-base outline-none transition focus:border-[#6c8b76] focus:ring-2 focus:ring-[#6c8b76]/20"
                    />
                  </div>
                </div>
              </div>

              {/* =========================
                  SUBMIT
              ========================== */}

              <div className="border-t border-[#10251d]/10 pt-10">
                <div className="rounded-2xl bg-[#e9eee8] p-5 text-sm leading-6 text-[#53635b]">
                  By submitting this application, you confirm that the
                  information provided is accurate and can be used by
                  Bluecrest International School for admissions purposes.
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="mt-6 min-h-14 w-full rounded-full bg-[#10251d] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : submitted
                      ? "Application Submitted ✓"
                      : "Submit Application →"}
                </button>

                {/* ERROR */}

                {error && !submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 rounded-2xl bg-red-50 p-4 text-sm leading-6 text-red-700"
                    role="alert"
                  >
                    {error}
                  </motion.p>
                )}
              </div>
            </form>

            {/* =========================
                SUCCESS MESSAGE
            ========================== */}

            {submitted && (
              <motion.div
                id="application-success"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 rounded-3xl border border-[#6c8b76]/20 bg-[#e9eee8] p-6"
                role="status"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d8e8a8] text-xl font-bold text-[#10251d]">
                  ✓
                </div>

                <p className="mt-4 text-lg font-bold">
                  Application received
                </p>

                <p className="mt-2 leading-7 text-[#53635b]">
                  Thank you for applying to Bluecrest International School.
                  Our admissions team will review your application and
                  contact you regarding the next steps.
                </p>

                <div className="mt-5 rounded-2xl bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#91a58f]">
                    Application Reference
                  </p>

                  <p className="mt-2 break-all text-2xl font-bold tracking-wide text-[#10251d]">
                    {reference || "Pending"}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#66736c]">
                    Please keep this reference for future communication
                    with the admissions team.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>

      {/* =========================
          CONTACT CTA
      ========================== */}

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#d8e8a8] p-7 text-[#10251d] sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-60 sm:text-sm">
            Need help?
          </p>

          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Speak with our admissions team.
          </h2>

          <p className="mt-4 max-w-xl leading-7 opacity-70">
            If you have questions about admissions, requirements or the
            application process, our team is available to assist you.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="tel:+2348030434042"
              className="rounded-full bg-[#10251d] px-6 py-3.5 text-center font-bold text-white transition hover:-translate-y-1 active:scale-[0.98]"
            >
              Call Admissions
            </a>

            <a
              href="mailto:admissions@bluecrestschools.org"
              className="rounded-full border border-[#10251d]/20 px-6 py-3.5 text-center font-bold transition hover:bg-[#10251d]/10 active:scale-[0.98]"
            >
              Email Admissions
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}

      <footer className="border-t border-[#10251d]/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 text-center text-sm text-[#68756e] sm:flex-row sm:text-left">
          <p>© 2026 Bluecrest International School</p>

          <p>Concept redesign by DESSICORE TECHNOLOGIES</p>
        </div>
      </footer>
    </main>
  );
}