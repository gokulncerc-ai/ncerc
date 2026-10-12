import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Boxes,
  ChevronRight,
  FlaskConical,
  Landmark,
  Monitor,
  Users,
  Zap,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/page";

interface FacilityCard {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const facilityCards: FacilityCard[] = [
  {
    number: "01",
    title: "Laboratories",
    description:
      "Specialized laboratory spaces supporting practical learning, experimentation and engineering applications.",
    href: "/department/electrical-and-electronics-engineering/facilities/laboratories",
    icon: <FlaskConical className="h-6 w-6" />,
  },
  {
    number: "02",
    title: "Class Rooms",
    description:
      "Purpose-built academic spaces designed to support focused classroom learning and interaction.",
    href: "/department/electrical-and-electronics-engineering/facilities/class-rooms",
    icon: <Users className="h-6 w-6" />,
  },
  {
    number: "03",
    title: "Seminar Halls",
    description:
      "Dedicated spaces for seminars, technical sessions, presentations and academic programmes.",
    href: "/department/electrical-and-electronics-engineering/facilities/seminar-halls",
    icon: <Landmark className="h-6 w-6" />,
  },
  {
    number: "04",
    title: "Library",
    description:
      "Academic resources and learning facilities that support students, faculty and departmental activities.",
    href: "/department/electrical-and-electronics-engineering/facilities/library",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    number: "05",
    title: "Smart Rooms",
    description:
      "Technology-enabled learning environments designed for modern teaching and collaborative learning.",
    href: "/department/electrical-and-electronics-engineering/facilities/smart-rooms",
    icon: <Monitor className="h-6 w-6" />,
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#D2B87C]/20" />
        <div className="pointer-events-none absolute -right-8 -top-16 h-52 w-52 rounded-full border border-[#D2B87C]/10" />

        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D2B87C]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                Electrical &amp; Electronics Engineering
              </p>
            </div>

            <h1 className="max-w-3xl font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Facilities built for
              <span className="block text-[#D2B87C]">learning &amp; practice.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Explore the academic and learning facilities that support the
              Electrical and Electronics Engineering department at NCERC.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#facilities"
                className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Explore Facilities
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                href="/department/electrical-and-electronics-engineering"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#D2B87C]/60 hover:text-[#D2B87C]"
              >
                Department Overview
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom information strip */}
        <div className="border-t border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-3">
            <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Department
              </p>
              <p className="mt-2 font-serif text-lg text-white">
                Electrical &amp; Electronics
              </p>
            </div>

            <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Environment
              </p>
              <p className="mt-2 font-serif text-lg text-white">
                Academic &amp; Practical
              </p>
            </div>

            <div className="px-6 py-5 sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Facilities
              </p>
              <p className="mt-2 font-serif text-lg text-white">
                05 Key Areas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DEPARTMENT NAVIGATION
      ========================================================= */}
      <InnerHeader />

      <main className="bg-[#FAF7F2]">
        {/* =======================================================
            INTRODUCTION
        ======================================================= */}
        <section className="border-b border-[#1E1917]/10">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              {/* Label */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    Department Facilities
                  </span>
                </div>

                <div className="mt-8 hidden lg:block">
                  <Zap className="h-8 w-8 text-[#D2B87C]" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="max-w-3xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Spaces that support
                  <span className="text-[#8F7746]"> engineering education.</span>
                </h2>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                  The department provides a range of academic and supporting
                  facilities designed to create an effective environment for
                  teaching, learning, experimentation and student engagement.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="h-px w-12 bg-[#D2B87C]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    Electrical &amp; Electronics Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =======================================================
            FACILITIES
        ======================================================= */}
        <section id="facilities" className="bg-white">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            {/* Section heading */}
            <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#1E1917]/10 pb-8 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Academic Infrastructure
                </p>

                <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Explore our facilities.
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-6 text-[#1E1917]/55">
                Academic spaces and resources arranged around the needs of
                engineering students and faculty.
              </p>
            </div>

            {/* Featured facility */}
            <div className="mb-6 overflow-hidden rounded-[2rem] bg-[#20235A]">
              <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
                <div className="relative min-h-[300px] overflow-hidden bg-[#20235A] p-8 sm:p-10 lg:min-h-[390px] lg:p-12">
                  <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full border border-[#D2B87C]/20" />
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#D2B87C]/10" />

                  <div className="relative flex h-full flex-col justify-between">
                    <div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D2B87C]/30 bg-[#D2B87C]/10 text-[#D2B87C]">
                        {facilityCards[0].icon}
                      </div>

                      <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                        01 / Core Facility
                      </p>

                      <h3 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
                        {facilityCards[0].title}
                      </h3>
                    </div>

                    <p className="mt-8 max-w-md text-sm leading-7 text-white/65">
                      {facilityCards[0].description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between bg-[#F2EFE8] p-8 sm:p-10 lg:p-12">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Practical Learning
                    </p>

                    <h4 className="mt-4 max-w-xl font-serif text-2xl leading-snug text-[#20235A] sm:text-3xl">
                      Supporting practical understanding through dedicated
                      learning spaces.
                    </h4>
                  </div>

                  <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-[#20235A]/10 pt-6">
                    <span className="text-xs text-[#1E1917]/55">
                      Electrical &amp; Electronics Engineering
                    </span>

                    <Link
                      href={facilityCards[0].href}
                      className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#20235A]"
                    >
                      View Facility
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Remaining facilities */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {facilityCards.slice(1).map((card) => (
                <Link
                  key={card.number}
                  href={card.href}
                  className="group relative overflow-hidden rounded-3xl border border-[#1E1917]/10 bg-[#FAF7F2] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/70 hover:shadow-[0_18px_45px_rgba(32,35,90,0.08)]"
                >
                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl text-[#20235A]/15">
                      {card.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D2B87C]/50 bg-white text-[#20235A] transition-all duration-300 group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                      {card.icon}
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="font-serif text-xl text-[#20235A]">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#1E1917]/55">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-7 flex items-center gap-2 border-t border-[#1E1917]/10 pt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                    Explore
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =======================================================
            FACILITY ECOSYSTEM
        ======================================================= */}
        <section className="bg-[#F2EFE8]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Beyond the Classroom
                </p>

                <h2 className="mt-4 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                  An environment designed around learning.
                </h2>
              </div>

              <div>
                <p className="max-w-3xl text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                  From practical laboratory work to technology-enabled
                  classrooms and academic resource spaces, the department&apos;s
                  facilities provide students with different environments for
                  developing technical knowledge and professional capabilities.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-[#20235A]/10 bg-white p-6">
                    <Boxes className="h-5 w-5 text-[#8F7746]" />
                    <h3 className="mt-5 font-serif text-lg text-[#20235A]">
                      Practical
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-[#1E1917]/55">
                      Spaces supporting hands-on engineering learning.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#20235A]/10 bg-white p-6">
                    <Monitor className="h-5 w-5 text-[#8F7746]" />
                    <h3 className="mt-5 font-serif text-lg text-[#20235A]">
                      Technology
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-[#1E1917]/55">
                      Learning environments equipped for modern education.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#20235A]/10 bg-white p-6">
                    <BookOpen className="h-5 w-5 text-[#8F7746]" />
                    <h3 className="mt-5 font-serif text-lg text-[#20235A]">
                      Resources
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-[#1E1917]/55">
                      Academic resources supporting continuous learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =======================================================
            CLOSING CTA
        ======================================================= */}
        <section className="bg-[#20235A]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                  Electrical &amp; Electronics Engineering
                </p>

                <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  Discover the spaces behind the learning experience.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                  Explore the department, its academic activities and the
                  facilities that support engineering education at NCERC.
                </p>
              </div>

              <Link
                href="/department/electrical-and-electronics-engineering"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#D2B87C] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Explore Department
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}