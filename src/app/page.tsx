"use client";

import { useState } from "react";

const facilities = [
  {
    number: "01",
    title: "Modern ICT Suite",
    description:
      "Technology-enabled learning spaces designed to prepare students for a digital future.",
  },
  {
    number: "02",
    title: "Science Laboratories",
    description:
      "Practical learning environments where students can explore science beyond the classroom.",
  },
  {
    number: "03",
    title: "Library & Learning",
    description:
      "A resource-rich environment encouraging curiosity, independent learning and discovery.",
  },
  {
    number: "04",
    title: "Sports & Recreation",
    description:
      "Opportunities for students to develop teamwork, confidence and physical skills.",
  },
];

const parentServices = [
  "Admissions",
  "School Fees",
  "Parent Portal",
  "Academic Results",
  "E-Library",
  "Online Examination",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f7f8f6] text-[#10251d]">

      {/* NAVIGATION */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto mt-4 max-w-7xl px-5">
          <nav className="flex items-center justify-between rounded-full border border-white/40 bg-[#10251d]/95 px-5 py-3 text-white shadow-xl backdrop-blur-xl">

            <a href="#" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d8e8a8] font-black text-[#10251d]">
                B
              </div>

              <div>
                <p className="text-sm font-bold tracking-wide">
                  BLUECREST
                </p>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/60">
                  International School
                </p>
              </div>
            </a>

            <div className="hidden items-center gap-7 text-sm lg:flex">
              <a href="#about" className="text-white/75 transition hover:text-white">
                About
              </a>

              <a href="#academics" className="text-white/75 transition hover:text-white">
                Academics
              </a>

              <a href="#facilities" className="text-white/75 transition hover:text-white">
                Facilities
              </a>

              <a href="#parents" className="text-white/75 transition hover:text-white">
                Parents
              </a>

              <a href="#contact" className="text-white/75 transition hover:text-white">
                Contact
              </a>
            </div>

            <a
              href="#admissions"
              className="hidden rounded-full bg-[#d8e8a8] px-5 py-2.5 text-sm font-bold text-[#10251d] transition hover:scale-105 md:block"
            >
              Apply Now
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-full border border-white/20 px-3 py-2 lg:hidden"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </nav>

          {menuOpen && (
            <div className="mt-2 rounded-3xl bg-[#10251d] p-5 text-white shadow-xl lg:hidden">
              <div className="flex flex-col gap-4">
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  About
                </a>

                <a href="#academics" onClick={() => setMenuOpen(false)}>
                  Academics
                </a>

                <a href="#facilities" onClick={() => setMenuOpen(false)}>
                  Facilities
                </a>

                <a href="#parents" onClick={() => setMenuOpen(false)}>
                  Parents
                </a>

                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[760px] overflow-hidden bg-[#10251d] text-white">

        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute right-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#d8e8a8]/10 blur-3xl" />
          <div className="absolute left-[-10%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-[#7da58e]/10 blur-3xl" />
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

        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-5 pb-16 pt-32 lg:grid-cols-[1.05fr_.95fr]">

          {/* Hero copy */}
          <div>

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d8e8a8]/30 bg-[#d8e8a8]/10 px-4 py-2 text-xs font-semibold text-[#d8e8a8]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#d8e8a8]" />
              2026/2027 ADMISSIONS OPEN
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Inspiring
              <span className="block text-[#d8e8a8]">
                brilliance.
              </span>
              Shaping
              <span className="block">
                global citizens.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">
              A nurturing learning environment where academic excellence,
              character development and creativity prepare students for a
              changing world.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#admissions"
                className="rounded-full bg-[#d8e8a8] px-7 py-4 font-bold text-[#10251d] transition hover:-translate-y-1"
              >
                Start Application →
              </a>

              <a
                href="#about"
                className="rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Bluecrest
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-7 text-sm">
              <div>
                <p className="text-2xl font-bold">3+</p>
                <p className="text-white/50">Learning stages</p>
              </div>

              <div>
                <p className="text-2xl font-bold">50+</p>
                <p className="text-white/50">ICT computers</p>
              </div>

              <div>
                <p className="text-2xl font-bold">20+</p>
                <p className="text-white/50">Facilities</p>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#315344] to-[#152d23] shadow-2xl">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,232,168,.25),transparent_40%)]" />

              <div className="absolute bottom-0 left-0 right-0 p-8">

                <div className="rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#d8e8a8]">
                    Learning beyond limits
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold">
                    Where curiosity becomes possibility.
                  </h2>
                </div>
              </div>

              {/* Temporary visual placeholder */}
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#d8e8a8]/30 bg-[#d8e8a8]/10 text-6xl">
                    🎓
                  </div>

                  <p className="mt-5 text-sm text-white/40">
                    Bluecrest learning environment
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
              <p className="text-xs text-white/50">
                EDUCATION
              </p>

              <p className="mt-1 font-semibold">
                Excellence + Character
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-28">

        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6c8b76]">
              Why Bluecrest
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              More than a school.
              <span className="block text-[#6c8b76]">
                A foundation for life.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-[#53635b]">
              Bluecrest International School combines academic learning,
              character development, creativity and technology to give
              students a strong foundation for the future.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {[
                ["01", "Academic Excellence"],
                ["02", "Character & Leadership"],
                ["03", "Technology-Enabled Learning"],
                ["04", "Safe Learning Environment"],
              ].map(([number, title]) => (
                <div
                  key={number}
                  className="rounded-3xl border border-[#10251d]/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="text-sm font-bold text-[#91a58f]">
                    {number}
                  </span>

                  <h3 className="mt-8 text-xl font-bold">
                    {title}
                  </h3>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* ACADEMICS */}
      <section id="academics" className="bg-[#e9eee8] py-28">

        <div className="mx-auto max-w-7xl px-5">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6c8b76]">
              Education for every stage
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Growing curious minds.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {[
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
            ].map((item) => (
              <article
                key={item.number}
                className="group min-h-[340px] rounded-[2rem] bg-[#10251d] p-8 text-white transition duration-500 hover:-translate-y-2"
              >

                <span className="text-sm text-[#d8e8a8]">
                  {item.number}
                </span>

                <div className="mt-28">
                  <h3 className="text-3xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-white/55">
                    {item.text}
                  </p>
                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section id="facilities" className="mx-auto max-w-7xl px-5 py-28">

        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#6c8b76]">
              Our environment
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Where learning meets possibility.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {facilities.map((facility) => (
              <article
                key={facility.number}
                className="rounded-3xl border border-[#10251d]/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-sm font-bold text-[#91a58f]">
                  {facility.number}
                </span>

                <h3 className="mt-10 text-xl font-bold">
                  {facility.title}
                </h3>

                <p className="mt-3 leading-7 text-[#66736c]">
                  {facility.description}
                </p>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* PARENT SERVICES */}
      <section id="parents" className="bg-[#10251d] py-28 text-white">

        <div className="mx-auto max-w-7xl px-5">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d8e8a8]">
              Parent experience
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Everything parents need.
              <span className="block text-white/40">
                In one place.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {parentServices.map((service, index) => (
              <a
                href="#contact"
                key={service}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:bg-white/[0.08]"
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm text-white/30">
                    0{index + 1}
                  </span>

                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>

                </div>

                <h3 className="mt-14 text-xl font-semibold">
                  {service}
                </h3>

              </a>
            ))}

          </div>

        </div>
      </section>

      {/* ADMISSIONS */}
      <section id="admissions" className="px-5 py-28">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#d8e8a8] p-8 text-[#10251d] sm:p-14 lg:p-20">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.25em] opacity-60">
              2026/2027 Admissions
            </p>

            <h2 className="mt-5 text-5xl font-semibold tracking-tight sm:text-7xl">
              Give your child a stronger start.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 opacity-70">
              Discover an environment built around learning, character,
              creativity and opportunity.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#contact"
                className="rounded-full bg-[#10251d] px-7 py-4 font-bold text-white transition hover:-translate-y-1"
              >
                Begin Application →
              </a>

              <a
                href="#contact"
                className="rounded-full border border-[#10251d]/20 px-7 py-4 font-bold"
              >
                Contact Admissions
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-5 pb-20">

        <div className="grid gap-5 rounded-[2rem] bg-white p-8 shadow-sm md:grid-cols-3">

          <div>
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
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#91a58f]">
              Call
            </p>

            <p className="mt-4 leading-7">
              +234 803 043 4042
              <br />
              0814 829 7218
              <br />
              0806 849 3999
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#91a58f]">
              Email
            </p>

            <p className="mt-4 leading-7">
              info@bluecrestschools.org
              <br />
              admissions@bluecrestschools.org
            </p>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#10251d]/10 py-8">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 text-sm text-[#68756e] sm:flex-row">

          <p>
            © 2026 Bluecrest International School
          </p>

          <p>
            Concept redesign by DESSICORE TECHNOLOGIES
          </p>

        </div>

      </footer>

    </main>
  );
}