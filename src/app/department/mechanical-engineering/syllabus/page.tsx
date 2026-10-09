import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, FileText } from "lucide-react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/page";
interface SyllabusCard {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}
const BASE = "/department/mechanical-engineering/syllabus";

const syllabusCards: SyllabusCard[] = [
  {
    title: "Academic Calendar",
    description:
      "Academic schedules, important dates, and calendar information for Mechanical Engineering students.",
    href: `${BASE}/academic-calender-21-22`,
    icon: <Calendar className="h-6 w-6" strokeWidth={1.5} />,
  },
  {
    title: "Syllabus Hand Book",
    description:
      "Access the syllabus handbook and academic curriculum information for the department.",
    href: `${BASE}/syllabus-hand-book`,
    icon: <FileText className="h-6 w-6" strokeWidth={1.5} />,
  },
];

export const metadata = {
  title: "Syllabus | Mechanical Engineering | NCERC",
  description:
    "Academic syllabus, calendar, and syllabus handbook for the Mechanical Engineering department at Nehru College of Engineering and Research Centre.",
};

export default function SyllabusPage() {
  return (
    <>
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/dpt/mechanical-engineering/heroone.jpeg"
            alt="Mechanical Engineering Syllabus and Department"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-20 filter contrast-125 grayscale"
          />
        </div>

        {/* Dark Gradient Overlay for Crisp Text Contrast */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#20235A]/95 via-[#20235A]/90 to-[#15183f]/95" />

        {/* Decorative Circles */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full border border-[#D2B87C]/20" />

        <div className="pointer-events-none absolute right-10 top-24 h-[270px] w-[270px] rounded-full border border-[#D2B87C]/15" />

        <div className="pointer-events-none absolute -bottom-48 -left-24 h-[430px] w-[430px] rounded-full border border-white/5" />

        {/* Hero Content */}
        <div className="relative mx-auto max-w-[1400px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-sm">
              Mechanical Engineering · Academics
            </p>

            <h1 className="mt-5 max-w-4xl font-display text-[43px] font-semibold leading-[1.03] tracking-[-0.025em] text-white sm:text-[58px] lg:text-[64px] xl:text-[74px]">
              Academic
              <span className="block text-[#D2B87C]">Syllabus.</span>
            </h1>

            <div className="mt-7 h-px w-20 bg-[#D2B87C]" />

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Explore the academic calendar and syllabus handbook supporting
              the Mechanical Engineering programme at NCERC.
            </p>
          </div>
        </div>
      </section>

      <main className="bg-[#FAF7F2]">
        {/* Department Navigation */}
        <InnerHeader />

        {/* =========================================================
            INTRODUCTION
        ========================================================= */}
        <section className="border-b border-[#E0D9CF] bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
                  Department Academics
                </p>

                <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Academic resources for your engineering journey.
                </h2>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              <div className="max-w-2xl lg:pt-8">
                <p className="text-base leading-8 text-[#5F5A55] sm:text-lg">
                  The Mechanical Engineering department provides students
                  with access to essential academic resources including the
                  academic calendar and syllabus handbook. These resources
                  help students understand their academic schedule,
                  curriculum structure, and programme requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            ACADEMIC RESOURCES
        ========================================================= */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            {/* Section Heading */}
            <div className="flex flex-col gap-6 border-b border-[#DDD7CE] pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
                  Academic Resources
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold text-[#20235A] sm:text-4xl lg:text-5xl">
                  Syllabus &amp; Calendar
                </h2>

                <div className="mt-5 h-px w-16 bg-[#D2B87C]" />
              </div>

              <p className="max-w-xs text-sm leading-6 text-[#77716A]">
                Important academic documents and resources for Mechanical
                Engineering students.
              </p>
            </div>

            {/* Resource Cards */}
            <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2">
              {syllabusCards.map((card, index) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group block border border-[#D8D1C7] bg-[#FAF7F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#20235A] hover:bg-white"
                >
                  <article className="relative p-7 sm:p-9 lg:p-10">
                    {/* Number */}
                    <div className="flex items-start justify-between">
                      <span className="font-display text-4xl font-semibold text-[#D2B87C]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C] text-[#20235A] transition-colors duration-300 group-hover:bg-[#20235A] group-hover:text-white">
                        {card.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-10">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                        Academic Resource
                      </p>

                      <h3 className="mt-2 font-display text-2xl font-semibold text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746] sm:text-3xl">
                        {card.title}
                      </h3>

                      <div className="mt-5 h-px w-12 bg-[#D2B87C] transition-all duration-300 group-hover:w-20" />

                      <p className="mt-6 max-w-xl text-sm leading-7 text-[#6A645D] sm:text-base">
                        {card.description}
                      </p>
                    </div>

                    {/* Action */}
                    <div className="mt-8 flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A]">
                      <span className="transition-all duration-300 group-hover:mr-2">
                        Explore Resource
                      </span>

                      <ArrowUpRight
                        className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        strokeWidth={1.5}
                      />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            ACADEMIC STATEMENT
        ========================================================= */}
        <section className="relative isolate overflow-hidden bg-[#20235A] py-20 sm:py-24 lg:py-28">
          {/* Decorative Circles */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full border border-[#D2B87C]/15" />

          <div className="pointer-events-none absolute right-10 top-12 h-[220px] w-[220px] rounded-full border border-[#D2B87C]/10" />

          <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                  Mechanical Engineering
                </p>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              <h2 className="max-w-4xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Structured academics. Practical learning. A curriculum built
                for engineering education.
              </h2>
            </div>
          </div>
        </section>

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}
        <section className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="border-t border-[#D8D1C7] pt-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Mechanical Engineering
                  </p>

                  <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-[#20235A] sm:text-3xl">
                    Explore the department and its academic environment.
                  </h2>
                </div>

                <Link
                  href="/department/mechanical-engineering"
                  className="inline-flex h-12 items-center justify-center border border-[#20235A] px-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-colors duration-300 hover:bg-[#20235A] hover:text-white"
                >
                  Department Overview

                  <ArrowUpRight
                    className="ml-3 h-4 w-4"
                    strokeWidth={1.5}
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}