import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  Landmark,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNav";

interface CalicutCard {
  title: string;
  href: string;
  external: boolean;
}

const BASE =
  "/images/dpt/electrical-and-electronics-engineering/syllabus";

const calicutCards: CalicutCard[] = [
  {
    title: "2009 REG CU",
    href: `${BASE}/2009 scheme.pdf`,
    external: true,
  },
  {
    title: "PT EEE",
    href: `${BASE}/PT EEE.pdf`,
    external: true,
  },
  {
    title: "2014 REG CU",
    href: `${BASE}/2014scheme.pdf`,
    external: true,
  },
  {
    title: "SYLLABUS & CURRICULUM",
    href: `${BASE}/Scheme_and_syl_electronics_and_electrical_2014.pdf`,
    external: true,
  },
];

export default function SyllabusCalicutUniversityPage() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
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
              Calicut University syllabus
              <span className="block text-[#D2B87C]">
                resources &amp; references.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Explore the available Calicut University syllabus, regulation
              and curriculum documents maintained for academic reference by
              the Electrical and Electronics Engineering department.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#calicut-documents"
                className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Explore Documents
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                href="/department/electrical-and-electronics-engineering"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#D2B87C]/60 hover:text-[#D2B87C]"
              >
                Back to Hand Books
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Information Strip */}
        <div className="border-t border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-3">
            <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                University
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                Calicut University
              </p>
            </div>

            <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Resource
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                Syllabus &amp; Curriculum
              </p>
            </div>

            <div className="px-6 py-5 sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Documents
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                04 Available
              </p>
            </div>
          </div>
        </div>
      </section>

      <InnerHeader />

      <main className="bg-[#FAF7F2]">
        {/* Introduction */}
        <section className="border-b border-[#1E1917]/10">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-24">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#D2B87C]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Calicut University
                </p>
              </div>

              <h2 className="max-w-3xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                Academic references organised
                <span className="block text-[#8F7746]">
                  for easy access.
                </span>
              </h2>
            </div>

            <div className="lg:pt-8">
              <p className="text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                Access the available Calicut University regulations and
                curriculum documents from one central location. These
                resources support academic planning, curriculum reference
                and understanding of programme requirements.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#20235A] text-white">
                  <BookOpen className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    Academic Resource
                  </p>

                  <p className="mt-1 font-serif text-lg text-[#20235A]">
                    Calicut University Curriculum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Document Collection */}
        <section id="calicut-documents" className="bg-white">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Academic Documents
                </p>

                <h2 className="mt-3 font-serif text-3xl text-[#20235A] sm:text-4xl">
                  Calicut University resources.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-[#1E1917]/60">
                Select any resource to open the corresponding PDF document
                in a new browser tab.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {calicutCards.map((card, index) => (
                <Link
                  key={card.title}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={
                    card.external ? "noopener noreferrer" : undefined
                  }
                  className="group relative overflow-hidden rounded-3xl border border-[#1E1917]/10 bg-[#FAF7F2] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/70 hover:shadow-[0_18px_45px_rgba(32,35,90,0.10)] sm:p-8"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[3rem] bg-[#20235A]/[0.04]" />

                  <div className="relative flex items-start justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-[#8F7746]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C] transition-all duration-300 group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                      <Landmark className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="relative mt-10">
                    <h3 className="min-h-[3.5rem] font-serif text-xl leading-snug text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746]">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#1E1917]/55">
                      Open the academic document for syllabus and
                      curriculum reference.
                    </p>
                  </div>

                  <div className="relative mt-8 flex items-center justify-between border-t border-[#1E1917]/10 pt-5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                      View Document
                    </span>

                    <ArrowUpRight className="h-4 w-4 text-[#20235A] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Reference */}
        <section className="bg-[#F2EFE8]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Curriculum Reference
                </p>

                <h2 className="mt-3 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                  Resources that support
                  <span className="block text-[#8F7746]">
                    academic clarity.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                  Syllabus and curriculum documents provide an important
                  reference point for understanding academic structure,
                  regulations and course requirements.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                    <Landmark className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                    University Regulations
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#1E1917]/55">
                    Review regulation documents relevant to the applicable
                    academic schemes.
                  </p>
                </div>

                <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D2B87C] text-[#20235A]">
                    <BookOpen className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                    Syllabus &amp; Curriculum
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#1E1917]/55">
                    Access the available syllabus and curriculum reference
                    for academic planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-[#20235A]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                    Syllabus Hand Books
                  </p>
                </div>

                <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  Explore the curriculum resources
                  <span className="block text-[#D2B87C]">
                    available to you.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                  Return to the syllabus hand books section to explore
                  additional university and department academic resources.
                </p>
              </div>

              <Link
                href="/department/electrical-and-electronics-engineering"
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#D2B87C] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Back to Hand Books
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}