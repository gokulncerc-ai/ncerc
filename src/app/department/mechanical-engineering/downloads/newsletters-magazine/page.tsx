import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  FileText,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/page";

const PDF_BASE =
  "/images/dpt/mechanical-engineering/downloads/newsletters-magazines";

interface PdfCard {
  number: string;
  title: string;
  type: string;
  year: string;
  file: string;
}

const pdfCards: PdfCard[] = [
  {
    number: "01",
    title: "NEWS LETTER 2020-21",
    type: "Department Newsletter",
    year: "2020–21",
    file: "NewsLetter2020-21.pdf",
  },
  {
    number: "02",
    title: "MAGAZINE 2020-21",
    type: "Department Magazine",
    year: "2020–21",
    file: "Magazine2020-21.pdf",
  },
];

export const metadata = {
  title: "Newsletters & Magazines | Mechanical Engineering | NCERC",
  description:
    "Newsletters and magazines from the Mechanical Engineering department at Nehru College of Engineering and Research Centre.",
};

export default function NewslettersMagazinePage() {
  return (
    <>
      <SiteHeader />

      {/* ================================================================
          HERO
      ================================================================= */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full border border-[#D2B87C]/20" />

        <div className="pointer-events-none absolute right-8 top-24 h-[270px] w-[270px] rounded-full border border-[#D2B87C]/15" />

        <div className="pointer-events-none absolute -bottom-48 -left-24 h-[430px] w-[430px] rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-[1400px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-sm">
                Mechanical Engineering · Downloads
              </p>

              <h1 className="mt-5 max-w-4xl font-display text-[43px] font-semibold leading-[1.03] tracking-[-0.025em] text-white sm:text-[58px] lg:text-[64px] xl:text-[74px]">
                Newsletters
                <span className="block text-[#D2B87C]">
                  & magazines.
                </span>
              </h1>

              <div className="mt-7 h-px w-20 bg-[#D2B87C]" />

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Explore publications from the Mechanical Engineering
                department and access the available documents.
              </p>
            </div>

            {/* Publication count */}
            <div className="hidden lg:block">
              <div className="border-l border-[#D2B87C] pl-6">
                <p className="font-display text-5xl font-semibold text-white">
                  02
                </p>

                <p className="mt-2 max-w-[140px] text-xs font-medium uppercase leading-5 tracking-[0.16em] text-white/55">
                  Available publications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-[#FAF7F2]">
        <InnerHeader />

        {/* ================================================================
            INTRODUCTION
        ================================================================= */}
        <section className="border-b border-[#E0D9CF] bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
                  Publications Archive
                </p>

                <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Department publications, preserved in print.
                </h2>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              <div className="max-w-2xl lg:pt-8">
                <p className="text-base leading-8 text-[#5F5A55] sm:text-lg">
                  Browse the available newsletters and magazines from the
                  Mechanical Engineering department. Select a publication to
                  open its PDF document.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            PUBLICATION ARCHIVE
        ================================================================= */}
        <section className="bg-white py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            {/* Section heading */}
            <div className="flex flex-col gap-6 border-b border-[#DDD7CE] pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
                  Available Documents
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold text-[#20235A] sm:text-4xl lg:text-5xl">
                  Publication Archive
                </h2>

                <div className="mt-5 h-px w-16 bg-[#D2B87C]" />
              </div>

              <div className="text-sm text-[#77716A]">
                <span className="font-display text-2xl font-semibold text-[#20235A]">
                  {pdfCards.length.toString().padStart(2, "0")}
                </span>
                <span className="ml-2">documents</span>
              </div>
            </div>

            {/* Publication list */}
            <div className="mt-12 space-y-6 sm:mt-16">
              {pdfCards.map((card, index) => (
                <a
                  key={card.file}
                  href={encodeURI(`${PDF_BASE}/${card.file}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <article className="relative overflow-hidden border border-[#D8D1C7] bg-[#FAF7F2] transition-all duration-500 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_22px_55px_rgba(32,35,90,0.10)]">
                    <div className="grid lg:grid-cols-[160px_1fr_auto]">
                      {/* Number panel */}
                      <div className="flex items-center border-b border-[#D8D1C7] bg-[#20235A] px-7 py-8 lg:border-b-0 lg:border-r">
                        <div>
                          <span className="block font-display text-5xl font-semibold text-[#D2B87C]">
                            {card.number}
                          </span>

                          <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                            Publication
                          </span>
                        </div>
                      </div>

                      {/* Publication information */}
                      <div className="flex items-center gap-6 px-7 py-9 sm:px-10 sm:py-10">
                        <div className="hidden h-16 w-16 shrink-0 items-center justify-center border border-[#D2B87C] text-[#20235A] sm:flex">
                          {index === 0 ? (
                            <FileText
                              className="h-7 w-7"
                              strokeWidth={1.5}
                            />
                          ) : (
                            <BookOpen
                              className="h-7 w-7"
                              strokeWidth={1.5}
                            />
                          )}
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                            {card.type}
                          </p>

                          <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746] sm:text-3xl lg:text-4xl">
                            {card.title}
                          </h3>

                          <p className="mt-3 text-sm text-[#77716A]">
                            Academic Year · {card.year}
                          </p>
                        </div>
                      </div>

                      {/* Open PDF */}
                      <div className="flex items-center border-t border-[#D8D1C7] px-7 py-6 lg:border-l lg:border-t-0 lg:px-10">
                        <div className="flex items-center gap-4">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#20235A]">
                            Open PDF
                          </span>

                          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D2B87C] text-[#20235A] transition-all duration-300 group-hover:bg-[#20235A] group-hover:text-white">
                            <ArrowUpRight
                              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                              strokeWidth={1.5}
                            />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Gold bottom accent */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#D2B87C] transition-all duration-500 group-hover:w-full" />
                  </article>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            DARK STATEMENT
        ================================================================= */}
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
                Publications that document the department&apos;s academic
                journey.
              </h2>
            </div>
          </div>
        </section>

        {/* ================================================================
            BACK TO DOWNLOADS
        ================================================================= */}
        <section className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="border-t border-[#D8D1C7] pt-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Downloads
                  </p>

                  <h2 className="mt-3 font-display text-2xl font-semibold text-[#20235A] sm:text-3xl">
                    Return to the Mechanical Engineering download centre.
                  </h2>
                </div>

                <Link
                  href="/department/mechanical-engineering/downloads"
                  className="inline-flex h-12 items-center justify-center border border-[#20235A] px-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-colors duration-300 hover:bg-[#20235A] hover:text-white"
                >
                  All Downloads
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