"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

type ApplicationStatus =
  | "received"
  | "review"
  | "assessment"
  | "decision"
  | "enrollment";

const statusSteps = [
  {
    id: "received",
    title: "Application Received",
    description: "Your application has been successfully received.",
  },
  {
    id: "review",
    title: "Under Review",
    description: "The admissions team is reviewing your application.",
  },
  {
    id: "assessment",
    title: "Assessment / Interview",
    description: "Your next admissions assessment or interview.",
  },
  {
    id: "decision",
    title: "Admission Decision",
    description: "A decision will be communicated to the parent or guardian.",
  },
  {
    id: "enrollment",
    title: "Enrollment",
    description: "Complete enrollment and officially join Bluecrest.",
  },
];

export default function TrackApplicationPage() {
  const [reference, setReference] = useState("");
  const [searchedReference, setSearchedReference] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState("");
  const [application, setApplication] = useState<{
    studentName: string;
    className: string;
    submittedAt: string;
    status: ApplicationStatus;
  } | null>(null);

  async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!reference.trim()) {
      setError("Please enter your application reference.");
      return;
    }

    setIsSearching(true);
    setError("");
    setApplication(null);

    const cleanReference = reference.trim().toUpperCase();

    try {
      /*
       * Phase 2 demo lookup.
       *
       * The API/database connection will be added next.
       * For now this gives the tracking interface a realistic
       * working demo state.
       */

      await new Promise((resolve) => setTimeout(resolve, 900));

      setSearchedReference(cleanReference);

      setApplication({
        studentName: "Demo Student",
        className: "Primary",
        submittedAt: "20 August 2026",
        status: "received",
      });
    } catch {
      setError(
        "We couldn't retrieve this application. Please check the reference and try again."
      );
    } finally {
      setIsSearching(false);
    }
  }

  const currentStatusIndex = application
    ? statusSteps.findIndex(
        (step) => step.id === application.status
      )
    : -1;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f8f6] text-[#10251d]">
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

                <p className="text-[7px] uppercase tracking-[0.22em] text-white/60 sm:text-[9px]">
                  International School
                </p>
              </div>
            </Link>

            <Link
              href="/admissions"
              className="rounded-full border border-white/20 px-4 py-2.5 text-xs font-semibold transition hover:bg-white/10 sm:px-5 sm:text-sm"
            >
              ← Admissions
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
              Admissions Portal
            </p>

            <h1 className="mt-5 max-w-4xl text-[3rem] font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl">
              Track your
              <span className="block text-[#d8e8a8]">
                application.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              Enter your application reference to view the current status
              of your child&apos;s admission application.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================
          TRACKER
      ========================== */}

      <section className="px-4 py-16 sm:px-5 sm:py-20">
        <div className="mx-auto max-w-5xl">
          {/* SEARCH CARD */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-[#10251d]/10 bg-white p-6 shadow-xl sm:p-10"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6c8b76] sm:text-sm">
                Application Lookup
              </p>

              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Find your application
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#66736c] sm:text-base">
                Enter the reference number you received after submitting
                your application.
              </p>
            </div>

            <form
              onSubmit={handleSearch}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <input
                value={reference}
                onChange={(event) =>
                  setReference(event.target.value)
                }
                type="text"
                placeholder="e.g. BC-2026-00124"
                autoComplete="off"
                className="min-h-14 flex-1 rounded-full border border-[#10251d]/10 bg-[#f7f8f6] px-5 text-base uppercase outline-none transition placeholder:normal-case focus:border-[#6c8b76] focus:ring-2 focus:ring-[#6c8b76]/20"
              />

              <button
                type="submit"
                disabled={isSearching}
                className="min-h-14 rounded-full bg-[#10251d] px-7 font-bold text-white transition hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSearching ? "Searching..." : "Track Application →"}
              </button>
            </form>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 rounded-2xl bg-red-50 p-4 text-sm text-red-700"
                role="alert"
              >
                {error}
              </motion.p>
            )}
          </motion.div>

          {/* =========================
              APPLICATION RESULT
          ========================== */}

          {application && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-8 overflow-hidden rounded-[2rem] border border-[#10251d]/10 bg-white shadow-xl"
            >
              {/* RESULT HEADER */}

              <div className="bg-[#10251d] p-6 text-white sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d8e8a8]">
                      Application Found
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                      Application Status
                    </h2>
                  </div>

                  <div className="rounded-full border border-[#d8e8a8]/20 bg-[#d8e8a8]/10 px-4 py-2 text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d8e8a8]">
                      Reference
                    </p>

                    <p className="mt-1 text-sm font-bold tracking-wide">
                      {searchedReference}
                    </p>
                  </div>
                </div>
              </div>

              {/* STUDENT SUMMARY */}

              <div className="grid gap-px bg-[#10251d]/10 sm:grid-cols-3">
                <div className="bg-white p-6 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#91a58f]">
                    Student
                  </p>

                  <p className="mt-3 text-lg font-bold">
                    {application.studentName}
                  </p>
                </div>

                <div className="bg-white p-6 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#91a58f]">
                    Class
                  </p>

                  <p className="mt-3 text-lg font-bold">
                    {application.className}
                  </p>
                </div>

                <div className="bg-white p-6 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#91a58f]">
                    Submitted
                  </p>

                  <p className="mt-3 text-lg font-bold">
                    {application.submittedAt}
                  </p>
                </div>
              </div>

              {/* STATUS TIMELINE */}

              <div className="p-6 sm:p-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6c8b76]">
                      Application progress
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold">
                      Your admissions journey
                    </h3>
                  </div>

                  <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-[#d8e8a8] font-bold text-[#10251d] sm:flex">
                    ✓
                  </div>
                </div>

                <div className="mt-10">
                  {statusSteps.map((step, index) => {
                    const isCompleted =
                      index <= currentStatusIndex;

                    const isCurrent =
                      index === currentStatusIndex;

                    return (
                      <div
                        key={step.id}
                        className="relative flex gap-4 pb-9 last:pb-0"
                      >
                        {/* Connector */}

                        {index < statusSteps.length - 1 && (
                          <div
                            className={`absolute left-[15px] top-9 h-full w-px ${
                              index < currentStatusIndex
                                ? "bg-[#6c8b76]"
                                : "bg-[#10251d]/10"
                            }`}
                          />
                        )}

                        {/* Circle */}

                        <div
                          className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition ${
                            isCompleted
                              ? "border-[#6c8b76] bg-[#6c8b76] text-white"
                              : "border-[#10251d]/15 bg-white text-[#91a58f]"
                          } ${
                            isCurrent
                              ? "ring-4 ring-[#6c8b76]/10"
                              : ""
                          }`}
                        >
                          {isCompleted ? "✓" : index + 1}
                        </div>

                        {/* Content */}

                        <div className="pt-0.5">
                          <h4
                            className={`font-bold ${
                              isCompleted
                                ? "text-[#10251d]"
                                : "text-[#91a58f]"
                            }`}
                          >
                            {step.title}
                          </h4>

                          <p className="mt-1 text-sm leading-6 text-[#66736c]">
                            {step.description}
                          </p>

                          {isCurrent && (
                            <span className="mt-3 inline-flex rounded-full bg-[#d8e8a8] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#10251d]">
                              Current status
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* =========================
              HELP
          ========================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 rounded-[2rem] bg-[#d8e8a8] p-7 text-[#10251d] sm:p-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">
              Need help?
            </p>

            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Can&apos;t find your application?
            </h2>

            <p className="mt-4 max-w-2xl leading-7 opacity-70">
              If you have submitted an application but cannot locate your
              reference number, contact the Bluecrest admissions team for
              assistance.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
          </motion.div>
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