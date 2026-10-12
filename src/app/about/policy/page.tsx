import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowRight,
  BookOpen,
  FileCheck2,
  FileText,
  ShieldCheck,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

export const metadata: Metadata = {
  title:
    "Institutional Policies | Nehru College of Engineering and Research Centre",
  description:
    "Explore the institutional policies of Nehru College of Engineering and Research Centre, including the HR Policy and Research Promotion Policy amendments.",
  keywords: [
    "NCERC institutional policies",
    "NCERC HR Policy",
    "NCERC Research Promotion Policy",
    "Nehru College of Engineering and Research Centre",
    "engineering colleges in Thrissur",
    "engineering colleges in Palakkad",
    "college policies",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

const policyDocs = [
  {
    label: "Human Resources Policy",
    description:
      "Review the institutional HR policy document for information relating to human resource practices and workplace guidelines.",
    href: "/images/aboutus/HR_POLICY.pdf",
    reference: "POLICY DOCUMENT 01",
  },
  {
    label: "Amendments to Research Promotion Policy",
    description:
      "Refer to the published amendments concerning the institution's Research Promotion Policy.",
    href: "/images/aboutus/Amendments-Research-Promotion0-Policy.pdf",
    reference: "POLICY DOCUMENT 02",
  },
];

const policyPrinciples = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Institutional Governance",
    description:
      "Institutional policies provide documented guidance for responsibilities, procedures, and the consistent administration of college activities.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Research and Development",
    description:
      "Research-related policy documents help communicate the institution's documented framework for research promotion and associated amendments.",
  },
  {
    number: "03",
    icon: FileCheck2,
    title: "Transparency and Access",
    description:
      "Making policy documents available online helps students, faculty, staff, and other stakeholders refer to the published institutional guidelines.",
  },
];

export default function PolicyPage() {
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
                About Us / Institutional Governance
              </p>
            </div>

            <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-7xl">
              Institutional
              <span className="block text-[#D2B87C]">Policies.</span>
            </h1>

            <div className="mt-7 h-px w-20 bg-[#D2B87C]" />

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Access the published policies of Nehru College of Engineering
              and Research Centre. Explore the available documents relating
              to institutional practices, human resources, and research
              promotion.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <FileText size={16} className="text-[#D2B87C]" />
                Official policy documents
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#D2B87C]" />
                Institutional guidelines
              </span>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1 bg-[#D2B87C]" />
        </section>

        {/* Introduction */}
        <section className="bg-[#FAF7F2]">
          <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-14 sm:px-8 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12 lg:py-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#8F7746]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Policy Framework
                </p>
              </div>

              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-[#20235A] sm:text-4xl">
                Clear guidelines.
                <span className="block italic text-[#8F7746]">
                  Shared responsibility.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[#5F5A55]">
              <p>
                Institutional policies document the guidelines and
                procedures that support the effective functioning of an
                educational institution. They provide stakeholders with a
                reference for understanding the policies formally published
                by the college.
              </p>

              <p>
                This page brings together the currently listed policy
                documents for convenient access. The collection includes the
                Human Resources Policy and amendments to the Research
                Promotion Policy.
              </p>

              <p>
                For the exact provisions, applicability, and any revisions,
                please consult the relevant document. The published
                documents themselves should be treated as the authoritative
                reference for their contents.
              </p>
            </div>
          </div>
        </section>

        {/* Policy Principles */}
        <section className="border-y border-[#E0D9CF] bg-white">
          <div className="mx-auto max-w-[1280px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#8F7746]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Guiding Principles
                </p>
              </div>

              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-[#20235A] sm:text-4xl">
                The role of institutional policies
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#6A645D]">
                Accessible policy documents help stakeholders refer to
                institutional guidelines and understand the documented
                frameworks relevant to college operations and research.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-0 border-y border-[#D8D1C7] md:grid-cols-3">
              {policyPrinciples.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.number}
                    className={`group px-6 py-8 transition-colors duration-300 hover:bg-[#FAF7F2] sm:px-8 sm:py-9 ${
                      index !== 0
                        ? "border-t border-[#D8D1C7] md:border-l md:border-t-0"
                        : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-3xl text-[#D2B87C]">
                        {principle.number}
                      </span>

                      <Icon
                        size={23}
                        strokeWidth={1.5}
                        className="text-[#8F7746] transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="mt-7 font-display text-xl font-semibold text-[#20235A]">
                      {principle.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#6A645D]">
                      {principle.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Policy Documents */}
        <section id="policy-documents" className="bg-[#FAF7F2]">
          <div className="mx-auto max-w-[1280px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#8F7746]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Document Library
                  </p>
                </div>

                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-[#20235A] sm:text-4xl">
                  Institutional policy
                  <span className="block italic text-[#8F7746]">
                    documents.
                  </span>
                </h2>
                <p className="mt-5 max-w-md text-base leading-8 text-[#6A645D]">
                  Select a document to open the published PDF in a new tab.
                  You can review the contents and use your browser&apos;s PDF
                  viewer to download or print a copy.
                </p>
                <div className="mt-8 flex items-start gap-3 border-l-2 border-[#D2B87C] bg-white px-5 py-4">
                  <FileCheck2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#8F7746]"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-6 text-[#6A645D]">
                    Please refer to the original PDF for the complete policy
                    wording, applicable provisions, and any amendments.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {policyDocs.map((doc) => (
                  <a
                    key={doc.href}
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${doc.label} PDF in a new tab`}
                    className="group block border border-[#D8D1C7] bg-white transition-colors duration-300 hover:border-[#8F7746] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8F7746] focus-visible:ring-offset-2"
                  >
                    <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                      <div className="flex min-w-0 items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#E0D9CF] bg-[#FAF7F2] text-[#20235A] transition-colors duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#F2EFE8]">
                          <FileText
                            size={22}
                            strokeWidth={1.6}
                            aria-hidden="true"
                          />
                        </div>

                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                            {doc.reference}
                          </p>

                          <h3 className="mt-1.5 text-base font-semibold leading-6 text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746] sm:text-lg">
                            {doc.label}
                          </h3>

                          <p className="mt-2 max-w-lg text-sm leading-6 text-[#77716A]">
                            {doc.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex shrink-0 items-center justify-between gap-3 border-t border-[#E0D9CF] pt-4 text-sm font-semibold text-[#20235A] sm:justify-end sm:border-0 sm:pt-0">
                        <span>View PDF</span>

                        <span className="flex h-10 w-10 items-center justify-center border border-[#D8D1C7] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-white">
                          <ArrowDownToLine
                            size={18}
                            strokeWidth={1.7}
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                  </a>
                ))}

                <p className="pt-2 text-xs leading-6 text-[#77716A]">
                  PDF documents open in a separate browser tab. Availability
                  depends on the files published on this website.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="bg-[#20235A]">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-7 px-6 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-14">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#D2B87C]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                  Further Information
                </p>
              </div>

              <h2 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">
                Explore institutional disclosures
              </h2>

              <p className="mt-3 text-sm leading-7 text-white/65 sm:text-base">
                Visit the approvals and disclosures section to access other
                published institutional documents.
              </p>
            </div>

            <Link
              href="/about/disclosure/approvals"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 border border-[#D2B87C]/60 px-6 py-3 text-sm font-semibold text-[#D2B87C] transition-colors duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#20235A]"
            >
              View Approvals & Disclosures
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}