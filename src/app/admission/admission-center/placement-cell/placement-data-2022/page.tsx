import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const placementDocs = [
  {
    label: "Placement Status",
    href: "/images/academics/placement-status-2022.pdf",
  },
  {
    label: "Placement Companies",
    href: "/images/academics/placement-companies-2022.pdf",
  },
  {
    label: "Department wise offer",
    href: "/images/academics/placement-department-wise-offer-2022.pdf",
  },
  {
    label: "Placement Cell",
    href: "/images/academics/Placement-cell-2022.pdf",
  },
];

export default function PlacementData2022Page() {
  return (
    <>
      <SiteHeader />

{/* Page Title Banner */}
<section className="relative isolate overflow-hidden bg-[#20235A] py-16 sm:py-20 lg:py-24">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/95 to-[#15183f]/90" />

        {/* Subtle decorative circles */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border border-[#D2B87C]/20" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#D2B87C]" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-sm">
              Placements
            </p>
          </div>

          <h1 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
            Placement Data <span className="italic text-[#D2B87C]">2022</span>
          </h1>

          <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
        </div>

        {/* Bottom accent bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-[#D2B87C]" />
      </section>

      {/* Page Content */}
      <main className="bg-white">
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <Link
              href="/admission/admission-center/placement-cell"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-950 transition hover:text-gold-600"
            >
              <ArrowLeft size={14} />
              Back to Placement Cell
            </Link>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {placementDocs.map((doc) => (
                <Link
                  key={doc.label}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-navy-950 shadow-sm transition hover:border-gold-500 hover:bg-gold-500/5 hover:text-gold-600 sm:text-base"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-950/5 text-navy-950 transition group-hover:bg-gold-500/15 group-hover:text-gold-600">
                    <Download size={18} strokeWidth={2} />
                  </span>
                  <span className="flex-1">{doc.label}</span>
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