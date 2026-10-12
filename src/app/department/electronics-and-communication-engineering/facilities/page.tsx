import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  Landmark,
  Monitor,
  Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";

export const metadata = {
  title:
    "Top Engineering Colleges in Thrissur | Electronics and Communication Engineering - NCERC",
  description:
    "Nehru College of Engineering and Research Centre is renowned as one of the leading colleges in Kerala for Electrical and Communication Engineering, offering quality education that prepares students for successful careers in the electrical and communication technology sectors across South India.",
  keywords: [
    "engineering colleges thrissur",
    "engineering colleges in thrissur",
    "private engineering colleges in thrissur",
    "top engineering colleges in thrissur",
    "Nehru College of Engineering and Research Centre thrissur",
    "NCERC thrissur",
    "Nehru College thrissur",
    "Nehru College of Engineering thrissur",
  ],
  robots: { index: true, follow: true },
};

const DEPARTMENT_PATH = "/department/electronics-and-communication-engineering";
const BASE_PATH = `${DEPARTMENT_PATH}/facilities`;

interface FacilityCard {
  title: string;
  href: string;
  icon: ReactNode;
}

const facilityCards: FacilityCard[] = [
  {
    title: "Laboratories",
    href: `${BASE_PATH}/labs`,
    icon: <FlaskConical size={24} strokeWidth={1.5} />,
  },
  {
    title: "Class Rooms",
    href: `${BASE_PATH}/classroom`,
    icon: <Users size={24} strokeWidth={1.5} />,
  },
  {
    title: "Seminar Halls",
    href: `${BASE_PATH}/seminar-halls`,
    icon: <Landmark size={24} strokeWidth={1.5} />,
  },
  {
    title: "Library",
    href: `${BASE_PATH}/library`,
    icon: <BookOpen size={24} strokeWidth={1.5} />,
  },
  {
    title: "Smart Rooms",
    href: `${BASE_PATH}/smartroom`,
    icon: <Monitor size={24} strokeWidth={1.5} />,
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF7F2] text-[#1E1917]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#20235A] text-white">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-32 -top-36 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />
          <div className="pointer-events-none absolute -right-12 -top-20 h-[340px] w-[340px] rounded-full border border-[#D2B87C]/15" />
          <div className="pointer-events-none absolute bottom-[-180px] left-[-140px] h-[400px] w-[400px] rounded-full border border-white/5" />

          <div className="relative mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
            <div className="relative z-10 max-w-4xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-xs">
                  Electronics &amp; Communication Engineering &middot; NBA
                  Accredited
                </p>
              </div>

              <h1 className="font-serif text-[42px] font-normal leading-[1.06] tracking-[-0.035em] sm:text-[56px] lg:text-[64px] xl:text-[72px]">
                Department
                <br />
                <span className="italic text-[#D2B87C]">Facilities</span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                Explore the laboratories, classrooms, seminar halls, library
                and smart rooms that support learning in the Department of
                Electronics and Communication Engineering.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-3 text-xs text-white/50">
                <Link
                  href={DEPARTMENT_PATH}
                  className="transition-colors hover:text-white"
                >
                  Departments
                </Link>

                <span className="text-[#D2B87C]">/</span>

                <Link
                  href={DEPARTMENT_PATH}
                  className="transition-colors hover:text-white"
                >
                  Electronics &amp; Communication Engineering
                </Link>

                <span className="text-[#D2B87C]">/</span>

                <span className="text-white/80">Facilities</span>
              </div>
            </div>
          </div>

          <div className="h-1 w-full bg-[#D2B87C]" />
        </section>

        {/* DEPARTMENT NAVIGATION */}
        <InnerHeader activeTab="Facilities" />

        {/* FACILITIES */}
        <section className="bg-[#FAF7F2] px-5 py-16 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-12">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#8F7746]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
                  Facilities
                </p>
              </div>

              <h2 className="font-serif text-4xl font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[52px]">
                Spaces built for
                <br />
                <span className="italic">learning and discovery.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#1E1917]/65 sm:text-base sm:leading-8">
                Select a facility to know more about the infrastructure and
                resources available to our students.
              </p>
            </div>

            {/* Facilities Cards Grid */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {facilityCards.map((card, index) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group flex h-full flex-col border border-[#20235A]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center bg-[#F2EFE8] text-[#8F7746] transition-colors duration-300 group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                      {card.icon}
                    </div>

                    <span className="font-serif text-sm text-[#8F7746]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-8 font-serif text-2xl leading-tight text-[#20235A]">
                    {card.title}
                  </h3>

                  <div className="mt-6 flex flex-1 items-end justify-between gap-4">
                    <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746] transition-colors duration-300 group-hover:text-[#20235A]">
                      Explore
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>

                  <div className="mt-6 h-px w-12 bg-[#D2B87C] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="bg-[#20235A] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-14 xl:px-20">
          <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C] sm:text-xs">
                Explore Electronics &amp; Communication
              </p>

              <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Discover the people, facilities and opportunities behind our
                department.
              </h2>
            </div>

            <Link
              href={DEPARTMENT_PATH}
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 border border-[#D2B87C]/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
            >
              About the Department
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}