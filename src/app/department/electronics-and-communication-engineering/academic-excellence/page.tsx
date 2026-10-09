import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Landmark, Trophy, type LucideIcon } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNav from "../DepartmentNav/page";

export const metadata = {
  title:
    "Top Engineering Colleges in Thrissur | Electronics and Communication Engineering - NCERC",
  description:
    "Nehru College of Engineering and Research Centre is renowned as one of the leading colleges in Kerala for Electrical and Communication Engineering, offering quality education that prepares students for successful careers in the electrical and communication technology sectors across South India.",
  keywords: [
    "engineering colleges thrissur",
    "engineering colleges in thrissur",
    "private engineering colleges in thrissur",
    "top engineering colleges in thrissur",
    "Nehru College of Engineering and Research Centre thrissur",
    "NCERC thrissur",
    "Nehru College thrissur",
    "Nehru College of Engineering thrissur",
  ],
  robots: { index: true, follow: true },
};

type ExcellenceItem = {
  title: string;
  icon: LucideIcon;
  href: string;
};

/*
  NOTE: the PHP source also had an "Other Achievements" card here (fa-star
  icon, href="#"), but the whole thing was wrapped in an HTML comment and
  never actually rendered on the live page - left out entirely to match,
  not even as a non-clickable card. Add it back (with a real href once
  this department has its own achievements-listing page) if it should be
  shown.
*/
const excellenceItems: ExcellenceItem[] = [
  {
    title: "University Rank Holders",
    icon: Landmark,
    href: "/department/electronics-and-communication-engineering/academic-excellence/university-rank-holders",
  },
  {
    title: "Department Toppers",
    icon: Trophy,
    href: "/department/electronics-and-communication-engineering/academic-excellence/department-toppers",
  },
];

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
      <div className="mt-8">{children}</div>
    </div>
  );
}

function ExcellenceCard({ item }: { item: ExcellenceItem }) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className="flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:border-gold-500 hover:shadow-lg"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-950">
        <Icon size={28} strokeWidth={1.5} className="text-gold-400" />
      </span>

      <h3 className="mt-5 font-display text-lg font-semibold uppercase tracking-wide text-navy-950">
        {item.title}
      </h3>

      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-500">
        View
        <ArrowRight size={16} />
      </span>
    </Link>
  );
}

export default function AcademicExcellencePage() {
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
              NBA Accredited
            </p>
          </div>

          <h1 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
            Electronics & <span className="italic text-[#D2B87C]">Communication Engineering</span>
          </h1>

          <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
        </div>

        {/* Bottom accent bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-[#D2B87C]" />
      </section>

      {/* Page Content */}
      <main className="bg-white">
        {/* Inner Sub-Header Navigation */}
        <DepartmentNav />

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl space-y-12 px-6">
            <SectionBlock title="Academic Excellence">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {excellenceItems.map((item) => (
                  <ExcellenceCard key={item.title} item={item} />
                ))}
              </div>
            </SectionBlock>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}