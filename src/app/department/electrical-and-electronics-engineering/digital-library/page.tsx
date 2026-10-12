import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  FileText,
  Laptop,
  Landmark,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/page";

interface ResourceCard {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const BASE =
  "/department/electrical-and-electronics-engineering/digital-library";

const resourceCards: ResourceCard[] = [
  {
    number: "01",
    title: "Lab Manuals / Work Books",
    description:
      "Access laboratory manuals and work books supporting practical learning and engineering applications.",
    href: `${BASE}/lab-manuals`,
    icon: <FileText className="h-6 w-6" />,
  },
  {
    number: "02",
    title: "Course Materials",
    description:
      "Explore academic course materials that support classroom learning, revision and independent study.",
    href: `${BASE}/course-materials`,
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    number: "03",
    title: "University Question Papers",
    description:
      "Access university question papers to support examination preparation and academic practice.",
    href: `${BASE}/university-question-papers`,
    icon: <Landmark className="h-6 w-6" />,
  },
  {
    number: "04",
    title: "Sample Free Access E Books",
    description:
      "Explore selected free-access e-books and digital reading resources for academic learning.",
    href: `${BASE}/free-acces-e-books-select`,
    icon: <Laptop className="h-6 w-6" />,
  },
];

export default function DigitalLibraryPage() {
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
              Digital resources for
              <span className="block text-[#D2B87C]">
                learning beyond the classroom.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Explore the department&apos;s digital learning resources,
              academic materials, question papers and selected e-books
              designed to support students throughout their learning journey.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#resources"
                className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Explore E-Resources
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

        {/* Information strip */}
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
                Resource Type
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                Digital Library
              </p>
            </div>

            <div className="px-6 py-5 sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Collections
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                04 Resource Areas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Department Navigation */}
      <InnerHeader />

      <main className="bg-[#FAF7F2]">
        {/* =========================================================
            INTRODUCTION
        ========================================================= */}
        <section className="border-b border-[#1E1917]/10">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    E-Resources
                  </p>
                </div>

                <h2 className="max-w-xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  A digital library for
                  <span className="block text-[#8F7746]">
                    continuous learning.
                  </span>
                </h2>
              </div>

              <div className="max-w-2xl lg:ml-auto">
                <p className="text-sm leading-7 text-[#1E1917]/70 sm:text-base">
                  The E-Resources section brings together important academic
                  materials in one place. Students can explore laboratory
                  resources, course materials, university question papers and
                  selected digital books according to their learning needs.
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#20235A] text-[#D2B87C]">
                    <BookOpen className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Learning Resources
                    </p>

                    <p className="mt-1 font-serif text-lg text-[#20235A]">
                      Access • Explore • Learn
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            RESOURCE CARDS
        ========================================================= */}
        <section id="resources" className="bg-white">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    Digital Collection
                  </p>
                </div>

                <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl lg:text-5xl">
                  Explore the resources
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-[#1E1917]/60 sm:text-base">
                Choose a resource area to access the academic materials
                available through the department&apos;s digital library.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {resourceCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group"
                >
                  <article className="relative h-full overflow-hidden rounded-[2rem] border border-[#1E1917]/10 bg-[#FAF7F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/70 hover:shadow-xl">
                    {/* Card header */}
                    <div className="flex items-start justify-between border-b border-[#1E1917]/10 px-6 py-6 sm:px-8">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                          {card.icon}
                        </div>

                        <div>
                          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                            Resource {card.number}
                          </p>

                          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1E1917]/45">
                            E-Resources
                          </p>
                        </div>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1E1917]/10 text-[#20235A] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Card content */}
                    <div className="px-6 py-8 sm:px-8 sm:py-10">
                      <h3 className="max-w-xl font-serif text-2xl leading-tight text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746] sm:text-3xl">
                        {card.title}
                      </h3>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                        {card.description}
                      </p>

                      <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A]">
                        <span className="transition-colors duration-300 group-hover:text-[#8F7746]">
                          Explore Resource
                        </span>

                        <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>

                    {/* Gold accent */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#D2B87C] transition-all duration-300 group-hover:w-full" />
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            RESOURCE OVERVIEW
        ========================================================= */}
        <section className="bg-[#F2EFE8]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    Academic Support
                  </p>
                </div>

                <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Resources designed around
                  <span className="block text-[#8F7746]">
                    different learning needs.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                  From practical laboratory work to examination preparation,
                  the digital library provides different types of resources to
                  complement classroom learning and encourage independent
                  study.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#20235A] text-[#D2B87C]">
                    <FileText className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 font-serif text-2xl text-[#20235A]">
                    Practical Learning
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#1E1917]/60">
                    Lab manuals and work books to support practical
                    engineering learning.
                  </p>
                </div>

                <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#20235A] text-[#D2B87C]">
                    <BookOpen className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 font-serif text-2xl text-[#20235A]">
                    Course Learning
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#1E1917]/60">
                    Course materials that complement classroom instruction and
                    independent study.
                  </p>
                </div>

                <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#20235A] text-[#D2B87C]">
                    <Landmark className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 font-serif text-2xl text-[#20235A]">
                    Exam Preparation
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#1E1917]/60">
                    University question papers to help students practise and
                    prepare for examinations.
                  </p>
                </div>

                <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#20235A] text-[#D2B87C]">
                    <Laptop className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 font-serif text-2xl text-[#20235A]">
                    Digital Reading
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#1E1917]/60">
                    Selected free-access e-books for additional reading and
                    exploration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CLOSING CTA
        ========================================================= */}
        <section className="bg-[#20235A]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                    Electrical &amp; Electronics Engineering
                  </p>
                </div>

                <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  Keep learning beyond
                  <span className="block text-[#D2B87C]">
                    the classroom.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                  Explore the available digital resources and make academic
                  learning more accessible, flexible and connected.
                </p>
              </div>

              <Link
                href="/department/electrical-and-electronics-engineering"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#D2B87C] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Department Overview
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}