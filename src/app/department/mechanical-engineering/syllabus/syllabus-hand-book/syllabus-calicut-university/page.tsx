import Image from "next/image";
import { ArrowUpRight, FileText, Landmark } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../../DepartmentNav/page";

const PDF_BASE = "/images/dpt/mechanical-engineering/downloads";

interface PdfCard {
  title: string;
  description: string;
  file: string;
}

const pdfCards: PdfCard[] = [
  {
    title: "2009 Scheme",
    description:
      "Access the Mechanical Engineering syllabus and academic curriculum resources under the 2009 University of Calicut scheme.",
    file: "2009 Scheme.pdf",
  },
  {
    title: "2014 Scheme",
    description:
      "Access the Mechanical Engineering syllabus and academic curriculum resources under the 2014 University of Calicut scheme.",
    file: "2014 Scheme.pdf",
  },
];

export const metadata = {
  title: "Calicut University | Syllabus | Mechanical Engineering | NCERC",
  description:
    "Access University of Calicut syllabus and academic scheme documents for the Mechanical Engineering department at Nehru College of Engineering and Research Centre.",
};

export default function SyllabusCalicutUniversityPage() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/dpt/mechanical-engineering/heroone.jpeg"
            alt="Mechanical Engineering Calicut University Syllabus"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-20 filter contrast-125 grayscale"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#20235A]/95 via-[#20235A]/90 to-[#15183f]/95" />

        <div className="pointer-events-none absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full border border-[#D2B87C]/20" />
        <div className="pointer-events-none absolute right-10 top-24 h-[270px] w-[270px] rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute -bottom-48 -left-24 h-[430px] w-[430px] rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-[1400px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-sm">
                Mechanical Engineering · Academics
              </p>

              <h1 className="mt-5 max-w-4xl font-display text-[43px] font-semibold leading-[1.03] tracking-[-0.025em] text-white sm:text-[58px] lg:text-[64px] xl:text-[74px]">
                Calicut University
                <span className="block text-[#D2B87C]">Syllabus.</span>
              </h1>

              <div className="mt-7 h-px w-20 bg-[#D2B87C]" />

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Explore the University of Calicut syllabus schemes and
                curriculum resources available for the Mechanical Engineering
                programme.
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="border-l border-[#D2B87C] pl-6">
                <p className="font-display text-5xl font-semibold text-white">
                  02
                </p>

                <p className="mt-2 max-w-[150px] text-xs font-medium uppercase leading-5 tracking-[0.16em] text-white/55">
                  Syllabus Schemes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-[#FAF7F2]">
        <InnerHeader />

        {/* Introduction */}
        <section className="border-b border-[#E0D9CF] bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
                  University of Calicut
                </p>

                <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Academic schemes and syllabus resources.
                </h2>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              <div className="max-w-2xl lg:pt-8">
                <p className="text-base leading-8 text-[#5F5A55] sm:text-lg">
                  Select the applicable syllabus scheme to access the
                  corresponding Mechanical Engineering academic document.
                  These resources provide students and faculty with a
                  convenient reference for curriculum and programme
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Syllabus Directory */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col gap-6 border-b border-[#DDD7CE] pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
                  Document Directory
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold text-[#20235A] sm:text-4xl lg:text-5xl">
                  Calicut University Schemes
                </h2>

                <div className="mt-5 h-px w-16 bg-[#D2B87C]" />
              </div>

              <p className="max-w-xs text-sm leading-6 text-[#77716A]">
                Choose a syllabus scheme below to open the corresponding PDF
                document.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
              {pdfCards.map((card, index) => (
                <a
                  key={card.file}
                  href={encodeURI(`${PDF_BASE}/${card.file}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border border-[#D8D1C7] bg-[#FAF7F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#20235A] hover:bg-white"
                >
                  <article className="relative flex min-h-[390px] flex-col p-8 sm:p-10 lg:p-12">
                    {/* Number + Icon */}
                    <div className="flex items-start justify-between">
                      <span className="font-display text-5xl font-semibold text-[#D2B87C]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="flex h-14 w-14 items-center justify-center border border-[#D2B87C] text-[#20235A] transition-all duration-300 group-hover:bg-[#20235A] group-hover:text-white">
                        <FileText
                          className="h-6 w-6"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* Label */}
                    <p className="mt-12 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Calicut University
                    </p>

                    {/* Title */}
                    <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746] sm:text-4xl">
                      {card.title}
                    </h3>

                    <div className="mt-6 h-px w-12 bg-[#D2B87C] transition-all duration-300 group-hover:w-20" />

                    {/* Description */}
                    <p className="mt-6 max-w-lg text-sm leading-7 text-[#6A645D] sm:text-base">
                      {card.description}
                    </p>

                    {/* Open PDF */}
                    <div className="mt-auto pt-10">
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

        {/* Resource Summary */}
        <section className="border-t border-[#E0D9CF] bg-[#FAF7F2] py-14 sm:py-16">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="grid border border-[#D8D1C7] sm:grid-cols-2">
              <ResourceStat
                number="02"
                label="Available Schemes"
                border
              />

              <ResourceStat
                number="01"
                label="University Curriculum"
              />
            </div>
          </div>
        </section>

        {/* Statement */}
        <section className="relative isolate overflow-hidden bg-[#20235A] py-20 sm:py-24 lg:py-28">
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
                Accessible syllabus resources for every stage of the
                academic journey.
              </h2>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <section className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="border-t border-[#D8D1C7] pt-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Academic Resources
                  </p>

                  <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-[#20235A] sm:text-3xl">
                    Return to the Mechanical Engineering syllabus directory.
                  </h2>
                </div>

                <a
                  href="/department/mechanical-engineering/syllabus/syllabus-hand-book"
                  className="inline-flex h-12 items-center justify-center border border-[#20235A] px-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-colors duration-300 hover:bg-[#20235A] hover:text-white"
                >
                  Syllabus Hand Book

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

function ResourceStat({
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