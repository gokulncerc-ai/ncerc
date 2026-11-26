
"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import {
  Calendar,
  Contact,
  ArrowDown,
  BookOpen,
  X,
  FileText,
  ArrowUpRight,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";

const BASE_PATH = "/department/electronics-and-communication-engineering";

const ACADEMIC_CALENDAR_PDFS = [
  {
    title: "2025-26 KTU EVEN SEMESTER ACADEMIC CALENDAR",
    subtitle: "Semester 8",
    href: "/documents/dept/ECE/syllabus/academic-calender/2025-2026KTU-EVEN_SEM.pdf",
  },
  {
    title: "2025-26 KTU ODD SEMESTER ACADEMIC CALENDAR",
    subtitle: "Semesters 6 and 4",
    href: "/documents/dept/ECE/syllabus/academic-calender/2096-2025-KTU-ODD-SEM.pdf",
  },
];

interface SyllabusCard {
  title: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
}

const syllabusCards: SyllabusCard[] = [
  {
    title: "ACADEMIC CALENDAR",
    href: "#academic-calendar",
    icon: <Calendar className="h-7 w-7" />,
    external: true,
  },
  {
    title: "2024 Regulation",
    href: `${BASE_PATH}`,
    icon: <Contact className="h-7 w-7" />,
  },
  {
    title: "KTU 2015 Scheme",
    href: `${BASE_PATH}`,
    icon: <Contact className="h-7 w-7" />,
  },
  {
    title: "KTU 2019 Scheme",
    href: `${BASE_PATH}`,
    icon: <Contact className="h-7 w-7" />,
  },
];

const cardClassName =
  "group flex min-h-[210px] flex-col items-center justify-center rounded-sm border border-[#E8E2D6] bg-white px-6 py-9 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_16px_40px_rgba(32,35,90,0.08)]";

function CardContent({ card }: { card: SyllabusCard }) {
  return (
    <>
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F2EFE8] text-[#927B4D] transition-colors duration-300 group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
        {card.icon}
      </div>

      <h3 className="mt-5 font-display text-sm font-semibold uppercase tracking-[0.13em] text-[#20235A] transition-colors group-hover:text-[#927B4D]">
        {card.title}
      </h3>

      <div className="mt-5 h-px w-10 bg-[#D2B87C] transition-all duration-300 group-hover:w-16" />
    </>
  );
}

export default function SyllabusPage() {
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);

  return (
    <>
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full border border-white/[0.07]" />
          <div className="absolute -right-10 -top-16 h-[300px] w-[300px] rounded-full border border-white/[0.07]" />
          <div className="absolute bottom-0 right-[15%] h-48 w-48 rounded-full bg-[#D2B87C]/[0.06] blur-3xl" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#D2B87C]/50 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-10 lg:pb-24 lg:pt-40">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D2B87C]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-xs">
                Department of Electronics and Communication Engineering
              </p>
            </div>

            <h1 className="font-display text-4xl font-medium leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Syllabus
              <span className="mt-2 block font-normal italic text-[#D2B87C]">
                & Academic Resources
              </span>
            </h1>

            <div className="mt-8 h-px w-20 bg-[#D2B87C]" />

            <p className="mt-7 max-w-2xl text-sm leading-8 text-white/65 sm:text-base sm:leading-9">
              Explore the academic calendar and syllabus resources of the
              Electronics and Communication Engineering programme, providing
              students with essential academic information and learning
              materials.
            </p>

            <div className="mt-9 inline-flex items-center gap-3 border border-white/15 bg-white/[0.04] px-4 py-3">
              <BookOpen className="h-4 w-4 text-[#D2B87C]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/80 sm:text-xs">
                NBA Accredited Department
              </span>
            </div>
          </div>

          <div className="mt-14 flex items-center justify-between border-t border-white/15 pt-5 sm:mt-16">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
              Academic Information
            </p>

            <a
              href="#syllabus-resources"
              aria-label="Explore syllabus resources"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[#D2B87C] transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
            >
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Page Content */}
      <main className="bg-[#FAF7F2]">
        <InnerHeader />

        <section
          id="syllabus-resources"
          className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#927B4D]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#927B4D] sm:text-xs">
                  Academic Resources
                </p>
              </div>

              <h2 className="font-display text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl">
                Academic Resources
                <span className="block font-normal italic text-[#927B4D]">
                  For Every Step of Your Learning Journey.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-[#66636A] sm:text-base">
                Access important academic documents and curriculum resources
                to stay informed throughout your academic journey.
              </p>
            </div>

            {/* Syllabus Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {syllabusCards.map((card) =>
                card.external ? (
                  <button
                    key={card.title}
                    type="button"
                    onClick={() => setIsCalendarModalOpen(true)}
                    className={`${cardClassName} w-full`}
                  >
                    <CardContent card={card} />
                  </button>
                ) : (
                  <Link
                    key={card.title}
                    href={card.href}
                    className={cardClassName}
                  >
                    <CardContent card={card} />
                  </Link>
                )
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Academic Calendar Modal */}
      {isCalendarModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#14162B]/75 px-4 py-8 backdrop-blur-sm"
          onClick={() => setIsCalendarModalOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="calendar-modal-title"
            className="relative my-auto w-full max-w-xl overflow-hidden bg-[#FAF7F2] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative overflow-hidden bg-[#20235A] px-6 py-8 sm:px-9 sm:py-10">
              <div className="pointer-events-none absolute -right-12 -top-20 h-52 w-52 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -right-5 -top-12 h-36 w-36 rounded-full border border-white/10" />

              <button
                type="button"
                onClick={() => setIsCalendarModalOpen(false)}
                aria-label="Close academic calendar dialog"
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-white/20 text-white/80 transition-colors hover:bg-white hover:text-[#20235A]"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                    Academic Documents
                  </p>
                </div>

                <h2
                  id="calendar-modal-title"
                  className="font-display text-2xl font-medium text-white sm:text-3xl"
                >
                  Academic Calendar
                </h2>

                <p className="mt-3 max-w-sm text-sm leading-7 text-white/60">
                  Select the academic calendar document you wish to view.
                </p>
              </div>
            </div>

            {/* PDF Options */}
            <div className="space-y-3 px-6 py-7 sm:px-9 sm:py-9">
              {ACADEMIC_CALENDAR_PDFS.map((pdf, index) => (
                <a
                  key={pdf.title}
                  href={encodeURI(pdf.href)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 border border-[#E8E2D6] bg-white p-4 transition-all duration-300 hover:border-[#D2B87C] hover:shadow-md sm:p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#927B4D] transition-colors group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                    <FileText className="h-6 w-6" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                      Document 0{index + 1}
                    </p>
                    <h3 className="mt-1 font-display text-sm font-semibold text-[#20235A] sm:text-base">
                      {pdf.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#77747A]">
                      {pdf.subtitle} · PDF Document
                    </p>
                  </div>

                  <ArrowUpRight className="h-5 w-5 shrink-0 text-[#927B4D] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              ))}

              <p className="pt-3 text-center text-xs leading-6 text-[#88848A]">
                The selected document will open in a new browser tab.
              </p>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end border-t border-[#E8E2D6] px-6 py-4 sm:px-9">
              <button
                type="button"
                onClick={() => setIsCalendarModalOpen(false)}
                className="text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-colors hover:text-[#927B4D]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <FooterSection />
    </>
  );
}
