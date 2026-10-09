import type { Metadata } from "next";
import {
  Newspaper,
  ChevronRight,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNav from "../DepartmentNav/page";
type Activity = {
  image: string;
  title?: string;
  paragraphs: string[];
  meta?: string[];
  link?: { href: string; external: boolean };
};
export const metadata: Metadata = {
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
  robots: {
    index: true,
    follow: true,
  },
};

const downloadItems = [
  {
    title: "NEWS LETTER ECE",
    href: "/images/dpt/electronics-and-communication-engineering/documents/NEWS LETTER ECE.pdf",
    external: true,
    icon: Newspaper,
  },
  {
    title: "ECE DEPT BR0UCHER",
    href: "/images/dpt/electronics-and-communication-engineering/documents/ECE DEPT BR0UCHER.pdf",
    external: true,
    icon: Newspaper,
  },
];

function DownloadCard({
  title,
  href,
  target,
  icon: Icon,
}: {
  title: string;
  href: string;
  target?: string;
  icon: typeof Newspaper;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="group block h-full"
      aria-label={`Open ${title}`}
    >
      <div className="flex h-full min-h-[210px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-lg">
        <div className="flex flex-1 items-center justify-center bg-slate-50 px-6 py-10">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-navy-950 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
            <Icon
              size={38}
              strokeWidth={1.7}
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="flex min-h-[78px] items-center justify-between gap-4 border-t border-slate-200 px-5 py-5">
          <h3 className="font-display text-base font-bold tracking-wide text-navy-950 transition-colors duration-300 group-hover:text-gold-600 sm:text-lg">
            {title}
          </h3>

          <ChevronRight
            size={20}
            className="shrink-0 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold-500"
            aria-hidden="true"
          />
        </div>
      </div>
    </a>
  );
}

export default function DownloadsPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-white">
{/* Page Title Banner */}
<section className="relative isolate overflow-hidden bg-[#20235A] py-16 sm:py-20 lg:py-24">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/95 to-[#15183f]/90" />

        {/* Geometric circular overlays */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full border border-[#D2B87C]/20" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Tagline / Department Badge */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#D2B87C]" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-sm">
              NBA Accredited
            </p>
          </div>

          {/* Heading with Serif & Italicized Accent Typography */}
          <h1 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
            Electronics & <span className="italic text-[#D2B87C]">Communication Engineering</span>
          </h1>

          {/* Accent Divider Line */}
          <div className="mt-6 h-px w-20 bg-[#D2B87C]" />
        </div>

        {/* Bottom Accent Bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-[#D2B87C]" />
      </section>

        {/* Department Navigation */}
        <DepartmentNav />

        {/* Downloads Content */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6">
            {/* Section Heading */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold text-navy-950 sm:text-3xl">
                Downloads
              </h2>

              <div className="mt-4 h-1 w-12 bg-gold-500" />
            </div>

            {/* Download Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {downloadItems.map((item) => (
                <DownloadCard
                  key={item.title}
                  title={item.title}
                  href={item.href}
                  target={item.external ? "_blank" : "_self"}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}