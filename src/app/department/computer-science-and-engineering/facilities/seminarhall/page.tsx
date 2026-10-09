import type { ReactNode } from "react";
import Image from "next/image";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNav from "../../DepartmentNav/page";

// The source PHP's <meta name="description"> and <meta name="keywords">
// were both just a blank space (" ") - genuinely empty in the original
// page, not a conversion omission. Fill these in once real SEO copy
// exists for this page.
export const metadata = {
  title: "Top Engineering Colleges in Thrissur | Computer Science and Engineering - NCERC",
  description: "",
  keywords: [] as string[],
  robots: { index: true, follow: true },
};

// Folder/file name has a literal space ("Seminar hall.png") - percent-
// encoded below since a raw space in a URL path is unreliable across
// browsers.
const SEMINAR_HALL_IMAGE =
  "/images/dpt/computer-science-and-engineering/seminar-hall/Seminar%20hall.png";

function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="border-t border-slate-200 pt-12 first:border-t-0 first:pt-0">
      <h2 className="font-display text-2xl font-bold text-navy-950 sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 h-1 w-12 bg-gold-500" />
      <div className="mt-6">{children}</div>
    </div>
  );
}

export default function SeminarHallPage() {
  return (
    <>
      <SiteHeader />

{/* Page Title Banner */}
<section className="relative isolate overflow-hidden bg-[#20235A] py-16 sm:py-20 lg:py-24">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/95 to-[#15183f]/90" />

        {/* Geometric circular overlays */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border border-[#D2B87C]/20" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Badge / Department Tagline */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#D2B87C]" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-sm">
              Computer Science and Engineering
            </p>
          </div>

          {/* Heading with Serif & Italicized Accent Typography */}
          <h1 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
            Seminar <span className="italic text-[#D2B87C]">Halls</span>
          </h1>

          {/* Divider Line */}
          <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
        </div>

        {/* Bottom Accent Bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-[#D2B87C]" />
      </section>

      {/* Page Content */}
      <main className="bg-white">
        {/* Inner Sub-Header Navigation */}
        <DepartmentNav />

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionBlock title="Seminar Halls">
              <p className="text-justify text-base leading-8 text-slate-600">
                The Institute has sufficient seminar-halls (6-Nos) with 150
                MBps internet facility including Wi-Fi, public address
                system, projector &amp; other essential facilities which
                facilitates in conducting International &amp; National
                conferences/seminars &amp; other activities. All the
                infrastructure facilities are provided with a vision to
                help students to develop their academics and career
                progression skills.
              </p>

              <div className="relative mt-8 h-64 w-full max-w-2xl overflow-hidden rounded-xl border border-slate-200 bg-slate-50 sm:h-80">
                <Image
                  src={SEMINAR_HALL_IMAGE}
                  alt="Seminar hall"
                  fill
                  sizes="(min-width: 640px) 672px, 100vw"
                  className="object-cover"
                />
              </div>
            </SectionBlock>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}