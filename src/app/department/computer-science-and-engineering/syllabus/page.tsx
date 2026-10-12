import type { ReactNode } from "react";
import Link from "next/link";
import { Calendar, Contact } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNavigation";

export const metadata = {
  title:
    "Top Engineering Colleges in Thrissur | Computer Science and Engineering - NCERC",
  description:
    "Syllabus resources of the Department of Computer Science and Engineering at Nehru College of Engineering and Research Centre, Thrissur: academic calendar, syllabus handbook and text book list.",
  keywords: [
    "engineering colleges thrissur",
    "engineering colleges in thrissur",
    "private engineering colleges in thrissur",
    "top engineering colleges in thrissur",
    "computer science engineering thrissur",
    "Nehru College of Engineering and Research Centre thrissur",
    "NCERC thrissur",
  ],
  robots: { index: true, follow: true },
};

const BASE_PATH = "/department/computer-science-and-engineering/syllabus";

interface SyllabusCard {
  title: string;
  href: string;
  icon: ReactNode;
}

const syllabusCards: SyllabusCard[] = [
  {
    title: "ACADEMIC CALENDER",
    href: `${BASE_PATH}/academic-calender-21-22`,
    icon: <Calendar className="h-8 w-8 text-gold-500" />,
  },
  {
    title: "SYLLABUS HAND BOOK",
    href: `${BASE_PATH}/syllabus-hand-book`,
    icon: <Contact className="h-8 w-8 text-gold-500" />,
  },
  {
    title: "TEXT BOOK LIST",
    href: `${BASE_PATH}/text-book-list`,
    icon: <Contact className="h-8 w-8 text-gold-500" />,
  },
];

export default function SyllabusPage() {
  return (
    <>
      <SiteHeader />

{/* Page Title Banner */}
<section className="relative isolate overflow-hidden bg-[#20235A] py-16 sm:py-20 lg:py-24">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/95 to-[#15183f]/90" />

        {/* Geometric circular overlays */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border border-[#D2B87C]/20" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Badge / Department Tagline */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#D2B87C]" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-sm">
              Computer Science and Engineering
            </p>
          </div>

          {/* Heading with Serif & Italicized Accent Typography */}
          <h1 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
            <span className="italic text-[#D2B87C]">Syllabus</span>
          </h1>

          {/* Divider Line */}
          <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
        </div>

        {/* Bottom Accent Bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-[#D2B87C]" />
      </section>

      {/* Page Content */}
      <main className="bg-white">
        {/* Inner Sub-Header Navigation */}
        <InnerHeader />

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 border-b border-slate-200 pb-4">
              <h2 className="font-display text-2xl font-bold uppercase text-navy-950 sm:text-3xl">
                Syllabus
              </h2>
              <div className="mt-3 h-1 w-12 bg-gold-500" />
            </div>

            {/* Syllabus Cards Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {syllabusCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-md"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 transition-colors duration-300 group-hover:bg-gold-50">
                    {card.icon}
                  </div>
                  <h3 className="mt-4 font-display text-sm font-bold uppercase tracking-wider text-navy-950 transition-colors group-hover:text-gold-600">
                    {card.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}