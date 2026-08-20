"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const parentServices = [
  "Admissions",
  "School Fees",
  "Parent Portal",
  "Academic Results",
  "E-Library",
  "Online Examination",
];

const academics = [
  {
    number: "01",
    title: "Early Years",
    text: "A nurturing beginning where curiosity, confidence and foundational skills take shape.",
  },
  {
    number: "02",
    title: "Primary",
    text: "Building strong academic foundations while encouraging creativity and independent thinking.",
  },
  {
    number: "03",
    title: "Secondary",
    text: "Preparing students for higher education, leadership and a rapidly changing world.",
  },
];

const strengths = [
  {
    number: "01",
    title: "Academic Excellence",
  },
  {
    number: "02",
    title: "Character & Leadership",
  },
  {
    number: "03",
    title: "Technology-Enabled Learning",
  },
  {
    number: "04",
    title: "Safe Learning Environment",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f8f6] text-[#10251d]">
      {/* =========================
          NAVIGATION
      ========================== */}

      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto mt-3 max-w-7xl px-3 sm:mt-4 sm:px-5">
          <nav className="flex items-center justify-between rounded-full border border-white/40 bg-[#10251d]/95 px-4 py-2.5 text-white shadow-xl backdrop-blur-xl sm:px-5 sm:py-3">
            {/* Logo */}

            <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
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

            {/* Desktop Navigation */}

            <div className="hidden items-center gap-7 text-sm lg:flex">
              <a
                href="#about"
                className="text-white/75 transition hover:text-white"
              >
                About
              </a>

              <a
                href="#academics"
                className="text-white/75 transition hover:text-white"
              >
                Academics
              </a>

              <a
                href="#facilities"
                className="text-white/75 transition hover:text-white"
              >
                Facilities
              </a>

              <a
                href="#parents"
                className="text-white/75 transition hover:text-white"
              >
                Parents
              </a>

              <a
                href="#contact"
                className="text-white/75 transition hover:text-white"
              >
                Contact
              </a>
            </div>

            {/* Desktop CTA */}

            <Link
              href="/admissions"
              className="hidden rounded-full bg-[#d8e8a8] px-5 py-2.5 text-sm font-bold text-[#10251d] transition hover:scale-105 md:block"
            >
              Apply Now
            </Link>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-lg transition hover:bg-white/10 active:scale-95 lg:hidden"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </nav>

          {/* Mobile Menu */}

          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mt-3 overflow-hidden rounded-[2rem] border border-white/10 bg-[#10251d]/98 p-5 text-white shadow-2xl backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col">
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-4 font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
                >
                  About
                </a>

                <a
                  href="#academics"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-4 font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
                >
                  Academics
                </a>

                <a
                  href="#facilities"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-4 font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
                >
                  Facilities
                </a>

                <a
                  href="#parents"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-4 font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
                >
                  Parents
                </a>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-4 font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
                >
                  Contact
                </a>

                <div className="my-3 h-px bg-white/10" />

                <Link
                  href="/admissions"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full bg-[#d8e8a8] px-5 py-4 text-center font-bold text-[#10251d] transition active:scale-[0.98]"
                >
                  Apply Now →
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </header>

      {/* =========================
          HERO
      ========================== */}

      <section className="relative min-h-[720px] overflow-hidden bg-[#10251d] text-white sm:min-h-[760px]">
        {/* Background glow */}

        <div className="absolute inset-0">
          <div className="absolute right-[-20%] top-[15%] h-[400px] w-[400px] rounded-full bg-[#d8e8a8]/10 blur-3xl sm:right-[-10%] sm:h-[500px] sm:w-[500px]" />

          <div className="absolute bottom-[-15%] left-[-20%] h-[400px] w-[400px] rounded-full bg-[#7da58e]/10 blur-3xl sm:bottom-[-20%] sm:left-[-10%] sm:h-[500px] sm:w-[500px]" />
        </div>

        {/* Decorative grid */}

        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Hero content */}

        <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 pb-14 pt-28 sm:min-h-[760px] sm:pb-16 sm:pt-32 lg:grid-cols-[1.05fr_.95fr]">
          {/* Hero Text */}

          <div>
            {/* Admissions badge */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d8e8a8]/30 bg-[#d8e8a8]/10 px-3.5 py-2 text-[10px] font-semibold text-[#d8e8a8] sm:mb-7 sm:px-4 sm:text-xs"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#d8e8a8]" />

              2026/2027 ADMISSIONS OPEN
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl text-[3.2rem] font-semibold leading-[0.94] tracking-[-0.045em] sm:text-6xl lg:text-8xl"
            >
              Inspiring

              <span className="block text-[#d8e8a8]">brilliance.</span>

              Shaping

              <span className="block">global citizens.</span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:mt-8 sm:text-lg sm:leading-8"
            >
              A nurturing learning environment where academic excellence,
              character development and creativity prepare students for a
              changing world.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <Link
                href="/admissions"
                className="w-full rounded-full bg-[#d8e8a8] px-7 py-4 text-center font-bold text-[#10251d] transition hover:-translate-y-1 active:scale-[0.98] sm:w-auto"
              >
                Start Application →
              </Link>

              <a
                href="#about"
                className="w-full rounded-full border border-white/20 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10 active:scale-[0.98] sm:w-auto"
              >
                Explore Bluecrest
              </a>
            </motion.div>

            {/* Stats */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-7 text-sm sm:mt-12 sm:flex sm:flex-wrap sm:gap-8"
            >
              <div>
                <p className="text-xl font-bold sm:text-2xl">3+</p>

                <p className="text-xs text-white/50 sm:text-sm">
                  Learning stages
                </p>
              </div>

              <div>
                <p className="text-xl font-bold sm:text-2xl">50+</p>

                <p className="text-xs text-white/50 sm:text-sm">
                  ICT computers
                </p>
              </div>

              <div>
                <p className="text-xl font-bold sm:text-2xl">20+</p>

                <p className="text-xs text-white/50 sm:text-sm">
                  Facilities
                </p>
              </div>
            </motion.div>
          </div>

          {/* HERO IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#315344] to-[#152d23] shadow-2xl">
              {/* Image */}

              <div className="absolute inset-0">
                <Image
                  src="/bluecrest-lab.jpg"
                  alt="Students learning in a modern educational environment"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#10251d] via-[#10251d]/20 to-transparent" />

                <div className="absolute inset-0 bg-[#10251d]/20" />
              </div>

              {/* Admissions badge */}

              <div className="absolute right-4 top-4 max-w-[175px] rounded-2xl border border-white/20 bg-white/10 p-3.5 text-white shadow-xl backdrop-blur-xl sm:right-5 sm:top-5 sm:max-w-[190px] sm:p-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#d8e8a8]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] sm:text-[10px]">
                    Admissions
                  </span>
                </div>

                <p className="mt-2 text-xl font-semibold sm:mt-3 sm:text-2xl">
                  2026/27
                </p>

                <p className="mt-1 text-[11px] text-white/60 sm:text-xs">
                  Applications are now open.
                </p>
              </div>

              {/* Bottom image card */}

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                <div className="rounded-3xl border border-white/10 bg-black/20 p-5 backdrop-blur-xl sm:p-6">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#d8e8a8] sm:text-xs sm:tracking-[0.3em]">
                    Learning beyond limits
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold sm:mt-3 sm:text-3xl">
                    Where curiosity becomes possibility.
                  </h2>
                </div>
              </div>
            </div>

            {/* Floating card */}

            <div className="absolute -bottom-4 left-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur-xl sm:-bottom-5 sm:-left-5 sm:p-5">
              <p className="text-[10px] text-white/50 sm:text-xs">
                EDUCATION
              </p>

              <p className="mt-1 text-sm font-semibold sm:text-base">
                Excellence + Character
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================
          ABOUT
      ========================== */}

      <section
        id="about"
        className="mx-auto max-w-7xl px-5 py-20 sm:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6c8b76]">
              Why Bluecrest
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              More than a school.

              <span className="block text-[#6c8b76]">
                A foundation for life.
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-base leading-7 text-[#53635b] sm:text-lg sm:leading-8">
              Bluecrest International School combines academic learning,
              character development, creativity and technology to give
              students a strong foundation for the future.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2"
            >
              {strengths.map((strength) => (
                <motion.div
                  key={strength.number}
                  variants={fadeUp}
                  className="group rounded-3xl border border-[#10251d]/10 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#91a58f]/40 hover:shadow-2xl"
                >
                  <span className="text-sm font-bold text-[#91a58f]">
                    {strength.number}
                  </span>

                  <h3 className="mt-8 text-xl font-bold transition-colors group-hover:text-[#6c8b76]">
                    {strength.title}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================
          VALUES
      ========================== */}

      <section className="border-y border-[#10251d]/10 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-[#10251d]/10 sm:grid-cols-4 sm:divide-y-0"
        >
          {["Community", "Excellence", "Innovation", "Character"].map(
            (item, index) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="px-4 py-8 text-center sm:px-6 sm:py-10"
              >
                <p className="text-3xl font-semibold sm:text-4xl">
                  0{index + 1}
                </p>

                <p className="mt-2 text-xs text-[#68756e] sm:text-sm">
                  {item}
                </p>
              </motion.div>
            ),
          )}
        </motion.div>
      </section>

      {/* =========================
          ACADEMICS
      ========================== */}

      <section
        id="academics"
        className="bg-[#e9eee8] py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6c8b76]">
              Education for every stage
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Growing curious minds.
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-3"
          >
            {academics.map((item) => (
              <motion.article
                key={item.number}
                variants={fadeUp}
                className="group min-h-[320px] rounded-[2rem] bg-[#10251d] p-7 text-white transition duration-500 hover:-translate-y-2 hover:shadow-2xl sm:min-h-[340px] sm:p-8"
              >
                <span className="text-sm text-[#d8e8a8]">
                  {item.number}
                </span>

                <div className="mt-24 sm:mt-28">
                  <h3 className="text-3xl font-semibold">{item.title}</h3>

                  <p className="mt-4 leading-7 text-white/55">
                    {item.text}
                  </p>

                  <span className="mt-6 inline-block text-sm font-semibold text-[#d8e8a8]">
                    Explore program →
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================
          FACILITIES
      ========================== */}

      <section
        id="facilities"
        className="mx-auto max-w-7xl px-5 py-20 sm:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-14">
          {/* Section heading */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6c8b76]">
              Our environment
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Where learning

              <span className="block text-[#6c8b76]">
                meets possibility.
              </span>
            </h2>

            <p className="mt-6 max-w-md leading-7 text-[#66736c]">
              Purpose-built spaces designed to encourage curiosity,
              creativity, collaboration and discovery.
            </p>
          </motion.div>

          {/* Facility showcase */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {/* ICT */}

            <motion.article
              variants={fadeUp}
              className="group overflow-hidden rounded-[2rem] border border-[#10251d]/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden sm:h-64">
                <img
                  src="/ict.jpg"
                  alt="Students learning in a modern ICT suite"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#10251d]/80 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#10251d]/70 px-3 py-1 text-xs font-bold text-[#d8e8a8] backdrop-blur-md">
                  01
                </span>

                <span className="absolute bottom-5 left-5 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  Technology
                </span>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold">Modern ICT Suite</h3>

                <p className="mt-3 leading-7 text-[#66736c]">
                  Technology-enabled learning spaces designed to prepare
                  students for a digital future.
                </p>

                <span className="mt-6 inline-block text-sm font-semibold text-[#6c8b76]">
                  Explore facility →
                </span>
              </div>
            </motion.article>

            {/* Science */}

            <motion.article
              variants={fadeUp}
              className="group overflow-hidden rounded-[2rem] border border-[#10251d]/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden sm:h-64">
                <img
                  src="/bluecrest-lab.jpg"
                  alt="Students conducting practical science activities"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#10251d]/80 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#10251d]/70 px-3 py-1 text-xs font-bold text-[#d8e8a8] backdrop-blur-md">
                  02
                </span>

                <span className="absolute bottom-5 left-5 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  Science
                </span>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold">
                  Science Laboratories
                </h3>

                <p className="mt-3 leading-7 text-[#66736c]">
                  Practical learning environments where students can explore
                  science beyond the classroom.
                </p>

                <span className="mt-6 inline-block text-sm font-semibold text-[#6c8b76]">
                  Explore facility →
                </span>
              </div>
            </motion.article>

            {/* Library */}

            <motion.article
              variants={fadeUp}
              className="group overflow-hidden rounded-[2rem] border border-[#10251d]/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden sm:h-64">
                <img
                  src="/bluecrest-library.jpg"
                  alt="Students reading in a school library"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#10251d]/80 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#10251d]/70 px-3 py-1 text-xs font-bold text-[#d8e8a8] backdrop-blur-md">
                  03
                </span>

                <span className="absolute bottom-5 left-5 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  Learning
                </span>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold">Library & Learning</h3>

                <p className="mt-3 leading-7 text-[#66736c]">
                  A resource-rich environment encouraging curiosity,
                  independent learning and discovery.
                </p>

                <span className="mt-6 inline-block text-sm font-semibold text-[#6c8b76]">
                  Explore facility →
                </span>
              </div>
            </motion.article>

            {/* Sports */}

            <motion.article
              variants={fadeUp}
              className="group overflow-hidden rounded-[2rem] border border-[#10251d]/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden sm:h-64">
                <img
                  src="/sports-arena.jpg"
                  alt="Students participating in school sports"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#10251d]/80 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#10251d]/70 px-3 py-1 text-xs font-bold text-[#d8e8a8] backdrop-blur-md">
                  04
                </span>

                <span className="absolute bottom-5 left-5 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  Recreation
                </span>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold">
                  Sports & Recreation
                </h3>

                <p className="mt-3 leading-7 text-[#66736c]">
                  Opportunities for students to develop teamwork, confidence
                  and physical skills.
                </p>

                <span className="mt-6 inline-block text-sm font-semibold text-[#6c8b76]">
                  Explore facility →
                </span>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* =========================
          PARENT EXPERIENCE
      ========================== */}

      <section
        id="parents"
        className="bg-[#10251d] py-20 text-white sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d8e8a8]">
              Parent experience
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Everything parents need.

              <span className="block text-white/40">In one place.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3"
          >
            {parentServices.map((service, index) => (
              <motion.a
                href="#contact"
                key={service}
                variants={fadeUp}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.08] active:scale-[0.99]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/30">
                    0{index + 1}
                  </span>

                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <h3 className="mt-12 text-xl font-semibold sm:mt-14">
                  {service}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  Easy access to important school information and services.
                </p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================
          ADMISSIONS
      ========================== */}

      <section id="admissions" className="px-5 py-20 sm:py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#d8e8a8] p-7 text-[#10251d] sm:rounded-[2.5rem] sm:p-14 lg:p-20"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] opacity-60">
              2026/2027 Admissions
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Give your child a stronger start.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 opacity-70 sm:mt-7 sm:text-lg sm:leading-8">
              Discover an environment built around learning, character,
              creativity and opportunity.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/admissions"
                className="w-full rounded-full bg-[#10251d] px-7 py-4 text-center font-bold text-white transition hover:-translate-y-1 active:scale-[0.98] sm:w-auto"
              >
                Begin Application →
              </Link>

              <a
                href="#contact"
                className="w-full rounded-full border border-[#10251d]/20 px-7 py-4 text-center font-bold transition hover:bg-[#10251d]/10 active:scale-[0.98] sm:w-auto"
              >
                Contact Admissions
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================
          CONTACT
      ========================== */}

      <section
        id="contact"
        className="mx-auto max-w-7xl px-5 pb-16 sm:pb-20"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid overflow-hidden rounded-[2rem] bg-white shadow-sm md:grid-cols-3"
        >
          {/* Address */}

          <motion.div
            variants={fadeUp}
            className="border-b border-[#10251d]/10 p-7 sm:p-8 md:border-b-0 md:border-r"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#91a58f]">
              Visit us
            </p>

            <p className="mt-4 leading-7">
              23, Olora/Federal Housing Road,
              <br />
              Adebayo Quarters,
              <br />
              Ado-Ekiti, Ekiti State.
            </p>
          </motion.div>

          {/* Phone */}

          <motion.div
            variants={fadeUp}
            className="border-b border-[#10251d]/10 p-7 sm:p-8 md:border-b-0 md:border-r"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#91a58f]">
              Call
            </p>

            <div className="mt-4 flex flex-col gap-1 leading-7">
              <a
                href="tel:+2348030434042"
                className="transition hover:text-[#6c8b76]"
              >
                +234 803 043 4042
              </a>

              <a
                href="tel:08148297218"
                className="transition hover:text-[#6c8b76]"
              >
                0814 829 7218
              </a>

              <a
                href="tel:08068493999"
                className="transition hover:text-[#6c8b76]"
              >
                0806 849 3999
              </a>
            </div>
          </motion.div>

          {/* Email */}

          <motion.div variants={fadeUp} className="p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#91a58f]">
              Email
            </p>

            <div className="mt-4 flex flex-col gap-1 leading-7">
              <a
                href="mailto:info@bluecrestschools.org"
                className="break-all transition hover:text-[#6c8b76]"
              >
                info@bluecrestschools.org
              </a>

              <a
                href="mailto:admissions@bluecrestschools.org"
                className="break-all transition hover:text-[#6c8b76]"
              >
                admissions@bluecrestschools.org
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}

      <footer className="border-t border-[#10251d]/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 text-center text-sm text-[#68756e] sm:flex-row sm:text-left">
          <p>© 2026 Bluecrest International School</p>

          <p>Concept redesign by DESSICORE TECHNOLOGIES</p>
        </div>
      </footer>
    </main>
  );
}