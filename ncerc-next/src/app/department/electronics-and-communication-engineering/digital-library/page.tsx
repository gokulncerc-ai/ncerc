
import Link from "next/link";
import {
  Contact,
  BookOpen,
  Landmark,
  Laptop,
  ArrowUpRight,
  Library,
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

const DEPARTMENT_PATH =
  "/department/electronics-and-communication-engineering";

const BASE_PATH = `${DEPARTMENT_PATH}/digital-library`;

const resourceCards = [
  {
    number: "01",
    title: "Lab Manuals / Work Books",
    description:
      "Access laboratory manuals and workbooks to support practical learning, experiments and hands-on academic activities.",
    href: `${BASE_PATH}/lab-manuals`,
    icon: Contact,
  },
  {
    number: "02",
    title: "Course Materials",
    description:
      "Explore academic learning materials and subject resources to strengthen your understanding of course topics.",
    href: `${BASE_PATH}/course-materials`,
    icon: BookOpen,
  },
  {
    number: "03",
    title: "University Question Papers",
    description:
      "Refer to previous university question papers to understand examination patterns and prepare effectively.",
    href: `${BASE_PATH}/university-qp`,
    icon: Landmark,
  },
  {
    number: "04",
    title: "Sample Free Access E-Books",
    description:
      "Discover selected e-books and digital reading resources that support independent learning and academic development.",
    href: `${BASE_PATH}/e-books`,
    icon: Laptop,
  },
];

export default function DigitalLibraryPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF7F2] text-[#1E1917] [&_p]:text-justify">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden bg-[#20235A] text-white">
          {/* Decorative Elements */}
          <div className="pointer-events-none absolute -right-32 -top-36 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />
          <div className="pointer-events-none absolute -right-12 -top-20 h-[340px] w-[340px] rounded-full border border-[#D2B87C]/15" />
          <div className="pointer-events-none absolute -bottom-44 -left-32 h-[400px] w-[400px] rounded-full border border-white/5" />

          <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
            <div className="relative z-10 max-w-4xl">
              {/* Department Label */}
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-xs">
                  Electronics &amp; Communication Engineering · NBA Accredited
                </p>
              </div>

              {/* Hero Heading */}
              <h1 className="font-serif text-[42px] font-normal leading-[1.06] tracking-[-0.035em] sm:text-[56px] lg:text-[64px] xl:text-[72px]">
                Digital
                <br />
                <span className="italic text-[#D2B87C]">Library</span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                Explore a collection of academic resources designed to support
                learning, practical knowledge and research in Electronics and
                Communication Engineering.
              </p>

              {/* Breadcrumb */}
              <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-white/50">
                <Link
                  href={DEPARTMENT_PATH}
                  className="transition-colors duration-300 hover:text-white"
                >
                  Departments
                </Link>
                <span className="text-[#D2B87C]">/</span>
                <Link
                  href={DEPARTMENT_PATH}
                  className="transition-colors duration-300 hover:text-white"
                >
                  Electronics &amp; Communication Engineering
                </Link>
                <span className="text-[#D2B87C]">/</span>
                <span className="text-white/80">Digital Library</span>
              </div>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="relative h-1 w-full bg-[#D2B87C]" />
        </section>

        {/* Department Navigation */}
        <InnerHeader />

        {/* Introduction Section */}
        <section className="bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20 xl:px-20">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:gap-16">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                    Explore &amp; Learn
                  </p>
                </div>

                <h2 className="max-w-2xl font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-[42px]">
                  Knowledge resources
                  <span className="italic text-[#8F7746]">
                    {" "}at your fingertips.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#55545A]">
                  The ECE Digital Library brings together essential academic
                  resources in one place. From laboratory manuals and course
                  materials to university question papers and e-books, explore
                  resources that complement classroom learning and encourage
                  independent study.
                </p>
              </div>

              {/* Intro Highlight */}
              <div className="relative overflow-hidden bg-[#20235A] p-8 text-white sm:p-10">
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#D2B87C]/20" />
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#D2B87C]/15" />

                <div className="relative">
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-[#D2B87C]/40 bg-white/5">
                    <Library className="h-7 w-7 text-[#D2B87C]" />
                  </div>

                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                    ECE Department
                  </p>

                  <h3 className="mt-4 font-serif text-2xl font-medium leading-snug sm:text-3xl">
                    Learn. Explore.
                    <br />
                    Grow beyond the classroom.
                  </h3>

                  <div className="mt-7 h-px w-16 bg-[#D2B87C]" />

                  <p className="mt-5 text-sm leading-7 text-white/65">
                    Find the right academic resources to support your learning
                    journey and technical development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
          <div className="mx-auto max-w-[1280px]">
            {/* Section Heading */}
            <div className="mb-12 flex flex-col justify-between gap-5 border-b border-[#E8E2D8] pb-7 sm:flex-row sm:items-end">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                    Resource Centre
                  </p>
                </div>

                <h2 className="font-serif text-3xl font-medium text-[#20235A] sm:text-4xl">
                  Explore E-Resources
                </h2>

                <p className="mt-4 max-w-2xl text-[15px] leading-8 text-[#55545A]">
                  Browse the available resource categories and access the
                  materials relevant to your academic needs.
                </p>
              </div>

              <div className="hidden items-center gap-3 pb-1 sm:flex">
                <span className="h-px w-8 bg-[#D2B87C]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  04 Categories
                </span>
              </div>
            </div>

            {/* Resource Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {resourceCards.map((card) => {
                const Icon = card.icon;

                return (
                  <Link
                    key={card.number}
                    href={card.href}
                    className="group relative flex min-h-[290px] flex-col overflow-hidden border border-[#EAE5DC] bg-[#FAF7F2] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:bg-white hover:shadow-[0_16px_40px_rgba(32,35,90,0.08)] sm:p-8"
                  >
                    {/* Card Number */}
                    <div className="flex items-start justify-between">
                      <span className="font-serif text-3xl font-medium text-[#D2B87C]">
                        {card.number}
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E6DDCB] bg-white transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A]">
                        <Icon className="h-5 w-5 text-[#8F7746] transition-colors duration-300 group-hover:text-[#D2B87C]" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="mt-8">
                      <h3 className="font-serif text-xl font-medium leading-snug text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746]">
                        {card.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#68666A]">
                        {card.description}
                      </p>
                    </div>

                    {/* Card Link */}
                    <div className="mt-auto flex items-center justify-between border-t border-[#E8E2D8] pt-5">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                        Explore Resources
                      </span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#20235A] transition-all duration-300 group-hover:bg-[#D2B87C]">
                        <ArrowUpRight className="h-4 w-4 text-white transition-colors group-hover:text-[#20235A]" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Closing Accent Section */}
        <section className="bg-[#F2EFE8] px-5 py-12 sm:px-8 lg:px-14 xl:px-20">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                Academic Learning
              </p>
              <h2 className="mt-2 font-serif text-2xl font-medium text-[#20235A] sm:text-3xl">
                Supporting knowledge through digital access.
              </h2>
            </div>

            <div className="hidden h-px flex-1 bg-[#D2B87C]/60 sm:mx-8 sm:block" />

            <Library className="h-9 w-9 shrink-0 text-[#8F7746]" />
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
