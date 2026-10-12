// app/other-downloads/page.tsx

import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  FileArchive,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/page";

interface DownloadItem {
  number: string;
  title: string;
  description: string;
  fileType: string;
  href: string;
}

const downloads: DownloadItem[] = [
  {
    number: "01",
    title: "Modal Question Papers - B.Tech",
    description:
      "Access modal question papers prepared for B.Tech academic and examination preparation.",
    fileType: "ZIP Archive",
    href: "/images/dpt/electrical-and-electronics-engineering/B.Tech_series_ques.zip",
  },
  {
    number: "02",
    title: "Modal Question Papers - M.Tech",
    description:
      "Access modal question papers prepared for M.Tech academic and examination preparation.",
    fileType: "ZIP Archive",
    href: "/images/dpt/electrical-and-electronics-engineering/M.Tech_series_ques.zip",
  },
];

export default function OtherDownloadsPage() {
  return (
    <>
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        {/* Decorative circles */}
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
              Department resources,
              <span className="block text-[#D2B87C]">
                available when you need them.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Explore additional academic resources and question paper
              collections provided by the Electrical and Electronics Engineering
              department at NCERC.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#downloads"
                className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Explore Downloads
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                href="/department/electrical-and-electronics-engineering/downloads"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#D2B87C]/60 hover:text-[#D2B87C]"
              >
                Back to Downloads
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
                Academic Downloads
              </p>
            </div>

            <div className="px-6 py-5 sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Available Files
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                02 Collections
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
                    Other Downloads
                  </p>
                </div>

                <h2 className="max-w-xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Additional resources for
                  <span className="block text-[#8F7746]">
                    academic preparation.
                  </span>
                </h2>
              </div>

              <div className="max-w-2xl lg:ml-auto">
                <p className="text-sm leading-7 text-[#1E1917]/70 sm:text-base">
                  This section provides access to additional academic resources
                  made available by the Electrical and Electronics Engineering
                  department. Download the relevant question paper collection
                  for your programme and use it as part of your academic
                  preparation.
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#20235A] text-[#D2B87C]">
                    <BookOpen className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Academic Resource
                    </p>

                    <p className="mt-1 font-serif text-lg text-[#20235A]">
                      Question Paper Collections
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            DOWNLOADS
        ========================================================= */}
        <section id="downloads" className="bg-white">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    Available Resources
                  </p>
                </div>

                <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl lg:text-5xl">
                  Download the resources
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-[#1E1917]/60 sm:text-base">
                Select a collection below to open the corresponding ZIP
                archive containing the academic question papers.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {downloads.map((download) => (
                <Link
                  key={download.title}
                  href={download.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <article className="relative h-full overflow-hidden rounded-[2rem] border border-[#1E1917]/10 bg-[#FAF7F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/70 hover:shadow-xl">
                    {/* Card top */}
                    <div className="flex items-start justify-between border-b border-[#1E1917]/10 px-6 py-6 sm:px-8">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                          <FileArchive className="h-6 w-6" />
                        </div>

                        <div>
                          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                            Resource {download.number}
                          </p>

                          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1E1917]/50">
                            {download.fileType}
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
                        {download.title}
                      </h3>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                        {download.description}
                      </p>

                      <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A]">
                        <ArrowDownToLine className="h-4 w-4 text-[#8F7746]" />

                        <span className="transition-colors duration-300 group-hover:text-[#8F7746]">
                          Download Archive
                        </span>

                        <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
            RESOURCE INFORMATION
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
                  Resources that support
                  <span className="block text-[#8F7746]">
                    focused preparation.
                  </span>
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    B.Tech
                  </p>

                  <h3 className="mt-3 font-serif text-2xl text-[#20235A]">
                    Series Question Papers
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#1E1917]/60">
                    Academic question paper resources for B.Tech students.
                  </p>
                </div>

                <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    M.Tech
                  </p>

                  <h3 className="mt-3 font-serif text-2xl text-[#20235A]">
                    Series Question Papers
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#1E1917]/60">
                    Academic question paper resources for M.Tech students.
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
                  Explore more departmental
                  <span className="block text-[#D2B87C]">
                    resources.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                  Return to the department downloads section to explore
                  newsletters, circulars, notifications and other available
                  academic resources.
                </p>
              </div>

              <Link
                href="/departments/electrical-and-electronics-engineering/downloads"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#D2B87C] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Back to Downloads
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}