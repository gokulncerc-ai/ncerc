import type { Metadata } from "next";
import {
  ArrowDownToLine,
  ArrowRight,
  Building2,
  FileCheck2,
  Landmark,
  ShieldCheck,
  Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

export const metadata: Metadata = {
  title: "Institutional Governance | Nehru College of Engineering and Research Centre",
  description:
    "Explore institutional governance at Nehru College of Engineering and Research Centre and access the governing council composition document.",
  keywords: [
    "NCERC institutional governance",
    "NCERC governing council",
    "governing council composition",
    "college administration",
    "Nehru College of Engineering and Research Centre",
    "engineering colleges in Kerala",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

const governanceAreas = [
  {
    number: "01",
    icon: Landmark,
    title: "Institutional Leadership",
    description:
      "Institutional governance provides a framework for leadership, oversight, and the administration of academic and organisational activities.",
  },
  {
    number: "02",
    icon: Users,
    title: "Roles and Responsibilities",
    description:
      "Clearly documented governance structures help stakeholders understand institutional responsibilities and the arrangements through which decisions are managed.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Accountability and Transparency",
    description:
      "Accessible governance information supports transparency by making relevant institutional documents available for reference.",
  },
];

export default function GovernancePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden bg-[#20235A]">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#20235A] via-[#20235A] to-[#15183F]" />

          <div className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full border border-[#D2B87C]/15" />
          <div className="pointer-events-none absolute -right-4 -top-8 h-64 w-64 rounded-full border border-[#D2B87C]/20" />
          <div className="pointer-events-none absolute -bottom-40 left-[38%] h-80 w-80 rounded-full border border-white/5" />

          <div className="relative mx-auto max-w-[1280px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D2B87C]" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-sm">
                About Us / Institutional Framework
              </p>
            </div>

            <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-7xl">
              Institutional
              <span className="block text-[#D2B87C]">Governance.</span>
            </h1>

            <div className="mt-7 h-px w-20 bg-[#D2B87C]" />

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Explore the governance framework of Nehru College of Engineering
              and Research Centre and access the published document relating
              to the composition of its governing council.
            </p>

            <a
              href="#governance-document"
              className="mt-8 inline-flex items-center gap-3 border border-[#D2B87C]/50 px-5 py-3 text-sm font-semibold text-[#D2B87C] transition-colors duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#20235A]"
            >
              Explore Governance
              <ArrowDownToLine size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1 bg-[#D2B87C]" />
        </section>

        {/* Governance Areas */}
        <section className="border-y border-[#E0D9CF] bg-white">
          <div className="mx-auto max-w-[1280px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#8F7746]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Core Principles
                </p>
              </div>

              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-[#20235A] sm:text-4xl">
                Foundations of institutional governance
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#6A645D]">
                Effective governance depends on clear organisational
                structures, defined responsibilities, and access to relevant
                institutional information.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 border-y border-[#D8D1C7] md:grid-cols-3">
              {governanceAreas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <article
                    key={area.number}
                    className={`group px-6 py-8 transition-colors duration-300 hover:bg-[#FAF7F2] sm:px-8 sm:py-9 ${
                      index !== 0
                        ? "border-t border-[#D8D1C7] md:border-l md:border-t-0"
                        : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-3xl text-[#D2B87C]">
                        {area.number}
                      </span>

                      <Icon
                        size={24}
                        strokeWidth={1.5}
                        className="text-[#8F7746] transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="mt-7 font-display text-xl font-semibold text-[#20235A]">
                      {area.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#6A645D]">
                      {area.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Governance Document */}
        <section id="governance-document" className="bg-[#FAF7F2]">
          <div className="mx-auto max-w-[1280px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#8F7746]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Official Document
                  </p>
                </div>

                <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-[#20235A] sm:text-4xl">
                  Governance and
                  <span className="block italic text-[#8F7746]">
                    Council Composition.
                  </span>
                </h2>

                <p className="mt-5 text-base leading-8 text-[#6A645D]">
                  Refer to the governing council composition document for
                  the published institutional information. Open the file to
                  review its contents and save a copy for future reference.
                </p>

                <div className="mt-7 flex items-start gap-3 border-l-2 border-[#D2B87C] bg-white px-5 py-4">
                  <FileCheck2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#8F7746]"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-6 text-[#6A645D]">
                    Refer to the document itself for the official names,
                    composition, and other details stated in the file.
                  </p>
                </div>
              </div>

              <div>
                <a
                  href="/images/aboutus/governingcouncilcomposition.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Governing Council Composition document in a new tab"
                  className="group block border border-[#D8D1C7] bg-white transition-colors duration-300 hover:border-[#8F7746] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8F7746] focus-visible:ring-offset-2"
                >
                  <div className="h-1 w-full bg-[#D2B87C]" />

                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-[#E0D9CF] bg-[#FAF7F2] text-[#20235A] transition-colors duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#F2EFE8]">
                        <Building2
                          size={26}
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>

                      <span className="border border-[#E0D9CF] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                        DOCX
                      </span>
                    </div>

                    <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      Governance Document
                    </p>

                    <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746] sm:text-3xl">
                      Governing Council Composition
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#77716A]">
                      Open the published document containing the governing
                      council composition details.
                    </p>

                    <div className="mt-7 flex items-center justify-between border-t border-[#E0D9CF] pt-5">
                      <span className="text-sm font-semibold text-[#20235A]">
                        Open Document
                      </span>

                      <span className="flex h-11 w-11 items-center justify-center border border-[#D8D1C7] text-[#20235A] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-white">
                        <ArrowRight
                          size={19}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </div>
                </a>

                <p className="mt-3 text-xs leading-6 text-[#77716A]">
                  The document opens in a new browser tab. Depending on your
                  browser, the DOCX file may download automatically instead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="bg-[#20235A]">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-6 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-14">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#D2B87C]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                  Institutional Information
                </p>
              </div>

              <h2 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">
                Explore NCERC&apos;s institutional disclosures
              </h2>

              <p className="mt-3 text-sm leading-7 text-white/65 sm:text-base">
                Access the available institutional documents and disclosures
                for further information.
              </p>
            </div>

            <a
              href="/about/disclosure/approvals"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 border border-[#D2B87C]/60 px-6 py-3 text-sm font-semibold text-[#D2B87C] transition-colors duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#20235A]"
            >
              View Approvals &amp; Disclosures
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}