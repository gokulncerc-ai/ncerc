
import Link from "next/link";

import {
  ArrowLeft,
  ArrowDownToLine,
  ArrowUpRight,
  FileCheck2,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const ktuDocs = [
  {
    label: "Provisional Affiliation Order (KTU) 2026 - 27",
    year: "2026–27",
    description:
      "Provisional affiliation order listed for the 2026–27 academic year.",
    href: "/images/aboutus/Provisionalorder_2026_27_ncerc.pdf",
  },
  {
    label: "Provisional Affiliation Order (KTU) 2025 - 26",
    year: "2025–26",
    description:
      "Provisional affiliation order listed for the 2025–26 academic year.",
    href: "/images/aboutus/Provisionalorder_KTU-NCERC-2025-2026.pdf",
  },
  {
    label: "Provisional Affiliation Order (KTU) 2024 - 25",
    year: "2024–25",
    description:
      "Provisional affiliation order listed for the 2024–25 academic year.",
    href: "/images/aboutus/Provisionalorder_KTU-NCERC 2024.pdf",
  },
  {
    label: "Provisional Affiliation Order (KTU) 2023 - 24",
    year: "2023–24",
    description:
      "Provisional affiliation order listed for the 2023–24 academic year.",
    href: "/images/aboutus/Provisionalorder_81 NCERC.pdf",
  },
  {
    label: "Provisional Affiliation Order (KTU) 2022 - 23",
    year: "2022–23",
    description:
      "Provisional affiliation order listed for the 2022–23 academic year.",
    href: "/images/aboutus/Provisionalorder_81 NCERC 22_23.pdf",
  },
];

export default function KtuDetailsPage() {
  return (
    <>
      <SiteHeader />

      {/* Page Hero */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#20235A] via-[#20235A] to-[#15183F]" />

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute -right-4 -top-8 h-64 w-64 rounded-full border border-[#D2B87C]/20" />
        <div className="pointer-events-none absolute -bottom-40 left-[38%] h-80 w-80 rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-[1280px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#D2B87C]" />

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-sm">
              About Us / Institutional Disclosure
            </p>
          </div>

          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-7xl">
            KTU Affiliation
            <span className="block text-[#D2B87C]">Details.</span>
          </h1>

          <div className="mt-7 h-px w-20 bg-[#D2B87C]" />

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Explore the available provisional affiliation orders associated
            with NCERC and the academic periods indicated in each document.
            Access the listed records through the document library below.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-6">
            <div className="flex items-center gap-3">
              <GraduationCap
                className="text-[#D2B87C]"
                size={21}
                strokeWidth={1.6}
              />
              <span className="text-sm text-white/80">
                Academic affiliation records
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FileCheck2
                className="text-[#D2B87C]"
                size={20}
                strokeWidth={1.6}
              />
              <span className="text-sm text-white/80">
                Provisional orders
              </span>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#D2B87C]" />
      </section>

      <main className="bg-[#FAF7F2]">
        {/* Introductory Content */}
        <section className="border-b border-[#E0D9CF]">
          <div className="mx-auto max-w-[1280px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <Link
              href="/about/disclosure/approvals"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#20235A] transition-colors hover:text-[#8F7746] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C]"
            >
              <ArrowLeft size={16} />
              Back to Approvals &amp; Affiliations
            </Link>

            <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                  Academic Records
                </p>

                <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight tracking-tight text-[#20235A] sm:text-4xl">
                  Affiliation documents in one accessible place.
                </h2>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              <div className="space-y-5 text-[15px] leading-8 text-[#5F5A55] sm:text-base">
                <p>
                  This section brings together the provisional affiliation
                  order PDFs made available by NCERC. The documents are
                  organised by their stated academic periods to help visitors
                  identify and access the relevant record.
                </p>

                <p>
                  Institutional affiliation records are an important part of
                  academic documentation. They provide visitors with access
                  to the formal information recorded in the respective orders
                  and support the institution&apos;s documentation and
                  disclosure process.
                </p>

                <p>
                  Students, parents, faculty members and other visitors can
                  select an entry below to open the corresponding PDF in a
                  separate browser tab. For the exact terms, conditions,
                  programme details and applicable period, please refer to
                  the contents of the individual document.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KTU Document Library */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 border-b border-[#D8D1C7] pb-8 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                  Document Library
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#20235A] sm:text-4xl">
                  KTU Affiliation Orders
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-[#6A645D] sm:text-base">
                  Choose an academic period to view its listed provisional
                  affiliation order.
                </p>
              </div>

              <div className="flex w-fit items-center gap-3 border border-[#D8D1C7] bg-white px-4 py-3">
                <FileCheck2
                  size={20}
                  className="text-[#8F7746]"
                  strokeWidth={1.7}
                />

                <div>
                  <p className="text-lg font-semibold leading-5 text-[#20235A]">
                    {String(ktuDocs.length).padStart(2, "0")}
                  </p>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#77716A]">
                    Listed documents
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {ktuDocs.map((doc, index) => (
                <a
                  key={doc.href}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${doc.label} PDF in a new tab`}
                  className="group flex min-h-[126px] items-center gap-4 border border-[#D8D1C7] bg-white p-5 transition-all duration-200 hover:border-[#20235A] hover:bg-[#20235A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C] focus-visible:ring-offset-2 sm:gap-5 sm:p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D8D1C7] bg-[#FAF7F2] text-[#20235A] transition-colors group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-[#D2B87C]">
                    <ArrowDownToLine size={21} strokeWidth={1.7} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746] transition-colors group-hover:text-[#D2B87C]">
                      Affiliation Order /{" "}
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="mt-2 block text-base font-semibold leading-6 text-[#20235A] transition-colors group-hover:text-white sm:text-lg">
                      {doc.label}
                    </span>

                    <span className="mt-1 block text-xs leading-5 text-[#77716A] transition-colors group-hover:text-white/65 sm:text-sm">
                      {doc.description}
                    </span>
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#E0D9CF] text-[#20235A] transition-all group-hover:border-[#D2B87C]/50 group-hover:text-[#D2B87C]">
                    <ArrowUpRight size={18} strokeWidth={1.7} />
                  </span>
                </a>
              ))}
            </div>

            {/* Document Access Note */}
            <div className="mt-8 flex items-start gap-4 border-l-2 border-[#D2B87C] bg-white px-5 py-5 sm:px-7">
              <ShieldCheck
                size={22}
                strokeWidth={1.6}
                className="mt-0.5 shrink-0 text-[#8F7746]"
              />

              <div>
                <h3 className="text-sm font-semibold text-[#20235A]">
                  Before using a document
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#6A645D]">
                  Open the relevant PDF and check its stated academic period,
                  programme information and conditions. The document itself
                  should be used to confirm the applicable affiliation
                  details.
                </p>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="mt-14 flex flex-col gap-5 border-t border-[#D8D1C7] pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-xl font-semibold text-[#20235A]">
                  Explore institutional approvals
                </p>

                <p className="mt-2 text-sm leading-6 text-[#6A645D]">
                  Visit the approvals and affiliations section to access
                  other available institutional records.
                </p>
              </div>

              <Link
                href="/about/disclosure/approvals"
                className="inline-flex min-h-12 items-center justify-center gap-3 border border-[#20235A] px-5 py-3 text-sm font-semibold text-[#20235A] transition-colors hover:bg-[#20235A] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C] focus-visible:ring-offset-2"
              >
                <ArrowLeft size={16} />
                All Approvals
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}