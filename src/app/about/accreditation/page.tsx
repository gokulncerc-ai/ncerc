import {
  ArrowDownToLine,
  ArrowUpRight,
  Award,
  BookOpenCheck,
  CheckCircle2,
  FileCheck2,
  GraduationCap,
  ShieldCheck,
  FileText
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const accreditationDocs = [
  {
    label: "NAAC Certificate",
    category: "Institutional Accreditation",
    description:
      "View the available National Assessment and Accreditation Council certificate for the institution.",
    href: "/images/aboutus/CERTIFICATE_NAAC_A.pdf",
  },
  {
    label: "NBA Certificate of CSE and MTR",
    category: "Programme Accreditation",
    description:
      "Access the available NBA certificate relating to the Computer Science and Engineering and MTR programmes, as identified by the document title.",
    href: "/images/aboutus/NBACertificateofCSEandMTR.pdf",
  },
  {
    label: "NBA Accreditations",
    category: "Accreditation Status",
    description:
      "Review the published NBA accreditation status information available in the institutional document.",
    href: "/images/aboutus/NBA_ACCREDITATIONSTATUS.pdf",
  },
];

const qualityAreas = [
  {
    number: "01",
    title: "Institutional Quality",
    description:
      "Institutional accreditation provides a framework for evaluating educational quality, academic processes, governance and the learning environment.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Programme Quality",
    description:
      "Programme accreditation focuses on the quality of specific academic programmes, including curriculum delivery, learning outcomes and continuous improvement.",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Transparency & Review",
    description:
      "Published certificates and accreditation records help students, parents and other stakeholders review the official information made available by the institution.",
    icon: FileCheck2,
  },
];

export default function AccreditationsPage() {
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
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Editorial Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-sm">
                  About Us / Quality &amp; Recognition
                </p>
              </div>

              <h1 className="mt-5 font-serif text-4xl font-normal leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
                Accreditations{" "}
                <span className="italic text-[#D2B87C]">
                  &amp; Recognitions.
                </span>
              </h1>

              <div className="mt-6 h-px w-20 bg-[#D2B87C]" />

              <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
                Explore the available institutional and programme accreditation
                documents of NCERC. This section brings together published
                certificates and accreditation records to support transparency
                and informed academic decisions.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-6">
                <div className="flex items-center gap-2.5">
                  <Award size={20} strokeWidth={1.6} className="text-[#D2B87C]" />
                  <span className="text-sm font-medium text-white/90">
                    Accreditation records
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <BookOpenCheck size={20} strokeWidth={1.6} className="text-[#D2B87C]" />
                  <span className="text-sm font-medium text-white/90">
                    Institutional &amp; programme info
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Institutional Quality Card (Fills Right Blank Space) */}
            <div className="relative lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/20 backdrop-blur-md">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#D2B87C] via-amber-200 to-[#D2B87C]" />

                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D2B87C]/30 bg-[#D2B87C]/15 text-[#D2B87C]">
                      <ShieldCheck size={22} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-[#D2B87C]">
                        Verified Standards
                      </p>
                      <h3 className="text-base font-bold text-white">
                        Institutional Quality
                      </h3>
                    </div>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-[#D2B87C]/30 bg-[#D2B87C]/20 px-3 py-1 text-xs font-semibold text-[#D2B87C]">
                    Official
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3.5 rounded-xl border border-white/5 bg-white/[0.02] p-3.5 transition-colors hover:bg-white/[0.06]">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#D2B87C]" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                        NAAC &amp; NBA Accredited
                      </h4>
                      <p className="mt-0.5 text-xs text-white/65">
                        Comprehensive compliance across academic &amp; technical domains.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-xl border border-white/5 bg-white/[0.02] p-3.5 transition-colors hover:bg-white/[0.06]">
                    <FileText size={18} className="mt-0.5 shrink-0 text-[#D2B87C]" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                        Public Documentation
                      </h4>
                      <p className="mt-0.5 text-xs text-white/65">
                        Downloadable certificates, approvals, and annual audit reports.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/60">
                  <span>NCERC Academic Quality Wing</span>
                  <span className="font-serif italic text-[#D2B87C]">Authentic &amp; Updated</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#D2B87C]" />
      </section>
      <main className="bg-[#FAF7F2]">
        {/* Introduction */}
        <section className="border-b border-[#E0D9CF]">
          <div className="mx-auto max-w-[1280px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                  Commitment to Quality
                </p>

                <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight tracking-tight text-[#20235A] sm:text-4xl">
                  Recognising quality in education.
                </h2>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />

                <p className="mt-6 max-w-md text-sm leading-7 text-[#6A645D] sm:text-base">
                  Accreditation is an important part of quality assurance in
                  higher education, providing structured evaluation of
                  institutional practices and academic programmes.
                </p>
              </div>

              <div className="space-y-5 text-[15px] leading-8 text-[#5F5A55] sm:text-base">
                <p>
                  At NCERC, the accreditations and recognitions section serves
                  as a central place to access the institutional and programme
                  documents published on the college website. These records
                  help visitors identify the certificates and accreditation
                  information available for review.
                </p>

                <p>
                  Institutional accreditation and programme accreditation
                  address different aspects of educational quality.
                  Institutional assessment considers broader academic and
                  organisational processes, while programme-level assessment
                  focuses on the quality and outcomes of particular academic
                  programmes.
                </p>

                <p>
                  The certificates and records listed below include
                  documentation associated with NAAC and NBA. Visitors can
                  open each document to review its contents, including the
                  applicable scope, programme details, dates and status
                  stated in the original record.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditation and Recognition Areas */}
        <section className="border-b border-[#E0D9CF] bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                Understanding Accreditation
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#20235A] sm:text-4xl">
                Different dimensions of academic quality.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#6A645D] sm:text-base">
                Accreditation documents can address institutional practices,
                individual programmes and the formal status recorded by the
                relevant accrediting body.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {qualityAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <article
                    key={area.number}
                    className="border border-[#E0D9CF] bg-[#FAF7F2] p-6 transition-colors duration-200 hover:border-[#D2B87C] sm:p-7"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-2xl font-semibold text-[#D2B87C]">
                        {area.number}
                      </span>

                      <span className="flex h-11 w-11 items-center justify-center border border-[#D8D1C7] bg-white text-[#20235A]">
                        <Icon size={21} strokeWidth={1.6} />
                      </span>
                    </div>

                    <h3 className="mt-7 font-display text-xl font-semibold text-[#20235A]">
                      {area.title}
                    </h3>

                    <div className="mt-4 h-px w-12 bg-[#D2B87C]" />

                    <p className="mt-4 text-sm leading-7 text-[#6A645D]">
                      {area.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Accreditation Documents */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 border-b border-[#D8D1C7] pb-8 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                  Official Document Library
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#20235A] sm:text-4xl">
                  Certificates &amp; Accreditation Records
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6A645D] sm:text-base">
                  Select a document to view the corresponding certificate or
                  accreditation information published by the college.
                </p>
              </div>

              <div className="flex w-fit shrink-0 items-center gap-3 border border-[#D8D1C7] bg-white px-4 py-3">
                <FileCheck2
                  size={20}
                  strokeWidth={1.7}
                  className="text-[#8F7746]"
                />

                <div>
                  <p className="text-lg font-semibold leading-5 text-[#20235A]">
                    {String(accreditationDocs.length).padStart(2, "0")}
                  </p>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#77716A]">
                    Listed documents
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {accreditationDocs.map((doc, index) => (
                <a
                  key={doc.href}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${doc.label} PDF in a new tab`}
                  className="group flex min-h-[140px] items-center gap-4 border border-[#D8D1C7] bg-white p-5 transition-all duration-200 hover:border-[#20235A] hover:bg-[#20235A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2B87C] focus-visible:ring-offset-2 sm:gap-5 sm:p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D8D1C7] bg-[#FAF7F2] text-[#20235A] transition-colors group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-[#D2B87C]">
                    <ArrowDownToLine size={21} strokeWidth={1.7} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746] transition-colors group-hover:text-[#D2B87C]">
                      Accreditation Record /{" "}
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="mt-2 block text-base font-semibold leading-6 text-[#20235A] transition-colors group-hover:text-white sm:text-lg">
                      {doc.label}
                    </span>

                    <span className="mt-2 block text-xs leading-6 text-[#77716A] transition-colors group-hover:text-white/70 sm:text-sm">
                      {doc.description}
                    </span>

                    <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#20235A] transition-colors group-hover:text-[#D2B87C]">
                      View document
                      <ArrowUpRight size={15} />
                    </span>
                  </span>
                </a>
              ))}
            </div>

            {/* Document Guidance */}
            <div className="mt-8 flex items-start gap-4 border-l-2 border-[#D2B87C] bg-white px-5 py-5 sm:px-7">
              <CheckCircle2
                size={22}
                strokeWidth={1.6}
                className="mt-0.5 shrink-0 text-[#8F7746]"
              />

              <div>
                <h3 className="text-sm font-semibold text-[#20235A]">
                  Reviewing accreditation information
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#6A645D]">
                  Accreditation scope and status can vary by institution,
                  programme and period. Please refer to the original
                  certificate or status document to verify the accrediting
                  body, programmes covered, validity dates and other applicable
                  conditions. The listed documents should not be interpreted
                  as confirming a current status beyond what each document
                  explicitly states.
                </p>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="relative isolate mt-16 overflow-hidden bg-[#20235A] px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
              <div className="pointer-events-none absolute -right-16 -top-24 -z-10 h-64 w-64 rounded-full border border-[#D2B87C]/15" />
              <div className="pointer-events-none absolute -right-4 -top-12 -z-10 h-40 w-40 rounded-full border border-[#D2B87C]/15" />

              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                    Quality &amp; Transparency
                  </p>

                  <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    Access the records. Review the details.
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                    Use the published certificates and accreditation records
                    to understand the scope and status documented by the
                    relevant accrediting bodies.
                  </p>
                </div>

                <div className="flex h-14 w-14 items-center justify-center border border-[#D2B87C]/40 text-[#D2B87C]">
                  <Award size={27} strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}