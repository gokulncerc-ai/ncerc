import Image from "next/image";
import { ArrowUpRight, FileText, Landmark } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/DepartmentNav";

/* =========================================================
   PDF CONFIGURATION
========================================================= */

const PDF_BASE = "/images/dpt/mechanical-engineering/downloads";

interface PdfCard {
  title: string;
  description: string;
  file: string;
}

const pdfCards: PdfCard[] = [
  {
    title: "APJKTU 2015 Scheme Student Handbook",
    description:
      "Student handbook containing academic and programme information for the APJKTU 2015 scheme.",
    file: "APJKTU2015SchemeStudentHandbook.pdf",
  },
  {
    title: "2015 Regulation Course Outcomes",
    description:
      "Course outcomes and programme mapping information associated with the APJKTU 2015 regulation.",
    file: "2015SchemeSubjectsCO-POMapping.pdf",
  },
  {
    title: "KTU B.Tech Draft Regulation 2019",
    description:
      "KTU B.Tech draft regulation document circulated for academic and programme reference.",
    file: "KTU_B.Tech_Draft_Regulation_2019_Circulation_Final.pdf",
  },
];

export const metadata = {
  title: "APJKTU | Syllabus Handbook | Mechanical Engineering | NCERC",
  description:
    "APJKTU syllabus handbook and academic regulation documents for the Mechanical Engineering department at Nehru College of Engineering and Research Centre.",
};

export default function SyllabusApjktuPage() {
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
            alt="Mechanical Engineering APJKTU Academic Resources"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-20 filter contrast-125 grayscale"
          />
        </div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#20235A]/95 via-[#20235A]/90 to-[#15183f]/95" />

        {/* Decorative Circles */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full border border-[#D2B87C]/20" />

        <div className="pointer-events-none absolute right-10 top-24 h-[270px] w-[270px] rounded-full border border-[#D2B87C]/15" />

        <div className="pointer-events-none absolute -bottom-48 -left-24 h-[430px] w-[430px] rounded-full border border-white/5" />

        {/* Hero Content */}
        <div className="relative mx-auto max-w-[1400px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-sm">
                Mechanical Engineering · Academics
              </p>

              <h1 className="mt-5 max-w-4xl font-display text-[43px] font-semibold leading-[1.03] tracking-[-0.025em] text-white sm:text-[58px] lg:text-[64px] xl:text-[74px]">
                APJKTU
                <span className="block text-[#D2B87C]">Resources.</span>
              </h1>

              <div className="mt-7 h-px w-20 bg-[#D2B87C]" />

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Access syllabus handbooks, regulations, course outcomes, and
                other academic documents supporting the Mechanical Engineering
                programme.
              </p>
            </div>

            {/* Hero Stat */}
            <div className="hidden lg:block">
              <div className="border-l border-[#D2B87C] pl-6">
                <p className="font-display text-5xl font-semibold text-white">
                  03
                </p>

                <p className="mt-2 max-w-[150px] text-xs font-medium uppercase leading-5 tracking-[0.16em] text-white/55">
                  Academic Documents
                </p>
              </div>
            </div>
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
                  Academic Resources
                </p>

                <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Regulations and resources for academic excellence.
                </h2>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              <div className="max-w-2xl lg:pt-8">
                <p className="text-base leading-8 text-[#5F5A55] sm:text-lg">
                  Explore important APJKTU academic documents for the
                  Mechanical Engineering programme. These resources provide
                  students and faculty with access to programme regulations,
                  student handbooks, course outcomes, and curriculum-related
                  information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            DOCUMENT DIRECTORY
        ========================================================= */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            {/* Section Heading */}
            <div className="flex flex-col gap-6 border-b border-[#DDD7CE] pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
                  Document Directory
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold text-[#20235A] sm:text-4xl lg:text-5xl">
                  APJKTU Documents
                </h2>

                <div className="mt-5 h-px w-16 bg-[#D2B87C]" />
              </div>

              <p className="max-w-xs text-sm leading-6 text-[#77716A]">
                Academic handbooks, regulations, and course outcome documents
                for reference.
              </p>
            </div>

            {/* PDF Cards */}
            <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
              {pdfCards.map((card, index) => (
                <a
                  key={card.file}
                  href={encodeURI(`${PDF_BASE}/${card.file}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border border-[#D8D1C7] bg-[#FAF7F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#20235A] hover:bg-white"
                >
                  <article className="relative flex h-full flex-col p-7 sm:p-8 lg:p-9">
                    {/* Top Row */}
                    <div className="flex items-start justify-between">
                      <span className="font-display text-4xl font-semibold text-[#D2B87C]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C] text-[#20235A] transition-colors duration-300 group-hover:bg-[#20235A] group-hover:text-white">
                        <FileText
                          className="h-6 w-6"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* Category */}
                    <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      APJKTU Document
                    </p>

                    {/* Title */}
                    <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746]">
                      {card.title}
                    </h3>

                    {/* Divider */}
                    <div className="mt-5 h-px w-12 bg-[#D2B87C] transition-all duration-300 group-hover:w-20" />

                    {/* Description */}
                    <p className="mt-6 text-sm leading-7 text-[#6A645D]">
                      {card.description}
                    </p>

                    {/* Bottom Action */}
                    <div className="mt-auto pt-8">
                      <div className="flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A]">
                        <span>Open PDF</span>

                        <ArrowUpRight
                          className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            INFORMATION STRIP
        ========================================================= */}
        <section className="border-t border-[#E0D9CF] bg-[#FAF7F2] py-14 sm:py-16">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="grid border border-[#D8D1C7] sm:grid-cols-3">
              <DocumentStat
                number="03"
                label="Available Documents"
                border
              />

              <DocumentStat
                number="01"
                label="Student Handbook"
                border
              />

              <DocumentStat
                number="02"
                label="Regulation Resources"
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            STATEMENT
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
                Clear regulations. Accessible resources. A stronger academic
                foundation.
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
                    Explore the syllabus and other academic resources.
                  </h2>
                </div>

                <a
                  href="/department/mechanical-engineering/syllabus"
                  className="inline-flex h-12 items-center justify-center border border-[#20235A] px-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-colors duration-300 hover:bg-[#20235A] hover:text-white"
                >
                  Syllabus

                  <ArrowUpRight
                    className="ml-3 h-4 w-4"
                    strokeWidth={1.5}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}

/* =========================================================
   DOCUMENT STAT
========================================================= */

function DocumentStat({
  number,
  label,
  border = false,
}: {
  number: string;
  label: string;
  border?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-5 px-6 py-7 sm:px-8 ${
        border
          ? "border-b border-[#D8D1C7] sm:border-b-0 sm:border-r"
          : ""
      }`}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D2B87C] text-[#20235A]">
        <Landmark className="h-6 w-6" strokeWidth={1.5} />
      </div>

      <div>
        <p className="font-display text-3xl font-semibold text-[#20235A]">
          {number}
        </p>

        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
          {label}
        </p>
      </div>
    </div>
  );
}