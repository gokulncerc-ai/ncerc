import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  FileText,
  BookOpen,
  Newspaper,
} from "lucide-react";
import Image from "next/image";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../DepartmentNav/page";
import FAQ from "../FAQ.tsx/page";

export const metadata: Metadata = {
  title: "Downloads | Nehru School of Management - NCERC",
  description:
    "Download the MBA brochure, NCERC brochure and the latest NSM newsletter from Nehru School of Management (NSM), Thrissur.",
  keywords: [
    "MBA Colleges in Kerala",
    "MBA College in Palakkad",
    "MBA College in Thrissur",
    "Best MBA Colleges in Kerala",
    "Nehru School of Management",
    "Top MBA College in Kerala",
    "Best MBA in Kerala",
    "MBA in Palakkad",
    "MBA in Kerala",
    "Best college for MBA in Kerala",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

type DownloadItem = {
  number: string;
  title: string;
  description: string;
  fileType: string;
  href: string;
  category: string;
  icon: typeof FileText;
};

const downloads: DownloadItem[] = [
  {
    number: "01",
    title: "MBA Brochure",
    description:
      "Explore the MBA programme, learning experience and opportunities for management students.",
    fileType: "PDF Document",
    href: encodeURI("https://ncerc.ac.in/downloads/Brochure/MBA%20Brochure.pdf"),
    category: "Programme Guide",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "NCERC Brochure",
    description:
      "Discover the institution, its academic environment and the wider opportunities available to students.",
    fileType: "PDF Document",
    href: encodeURI("https://ncerc.ac.in/downloads/Brochure/BROCHURE-2026.pdf"),
    category: "Institution Profile",
    icon: FileText,
  },
  {
    number: "03",
    title: "NSM Newsletter",
    description:
      "Read school updates, activities and highlights from Nehru School of Management.",
    fileType: "PDF Document",
    href: encodeURI("https://ncerc.ac.in/mba/downloads/nsm-newsletter/NSM-JULY-2026.pdf"),
    category: "School Updates",
    icon: Newspaper,
  },
];
export default function MBADownloadsPage() {
  return (
    <>
      <SiteHeader />

      <main className="overflow-hidden bg-[#FAF8F3] text-[#1E1917]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#20235A]">
          <div className="pointer-events-none absolute -right-24 -top-32 h-[360px] w-[360px] rounded-full border border-[#D2B87C]/10 sm:h-[440px] sm:w-[440px]" />
          <div className="pointer-events-none absolute -right-10 -top-16 h-[260px] w-[260px] rounded-full border border-[#D2B87C]/10 sm:h-[310px] sm:w-[310px]" />

          <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
            <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
              {/* HERO CONTENT */}
              <div className="relative z-10 flex flex-col justify-center py-12 sm:py-14 lg:py-16 lg:pr-12 xl:pr-16">
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#D2B87C]" />

                  <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#D2B87C] sm:text-[11px]">
                    Nehru School of Management
                  </span>
                </div>

                <p className="mb-4 text-[10px] font-normal uppercase tracking-[0.18em] text-white/55 sm:text-[11px]">
                  Brochures · Newsletters · Resources
                </p>

                <h1 className="max-w-2xl font-serif text-[40px] font-normal leading-[1.04] tracking-[-0.035em] text-white sm:text-[48px] md:text-[54px] lg:text-[56px] xl:text-[62px]">
                  Knowledge
                  <span className="mt-1 block italic text-[#D2B87C]">
                    Within Reach.
                  </span>
                  <span className="mt-3 block font-sans text-[22px] font-medium leading-tight tracking-[-0.02em] text-white/90 sm:text-[25px] lg:text-[28px]">
                    MBA Downloads
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-[14px] font-normal leading-6 text-white/70 sm:text-[15px] sm:leading-7">
                  Access programme information, institutional resources and
                  the latest school updates through our downloadable
                  publications.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-4 sm:mt-8 sm:gap-5">
                  <a
                    href="#downloads"
                    className="group inline-flex min-h-11 items-center gap-3 bg-[#D2B87C] px-5 py-3 text-[11px] font-medium tracking-[0.03em] text-[#20235A] transition-colors duration-300 hover:bg-white sm:px-6 sm:text-xs"
                  >
                    Browse Downloads
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                  <span className="flex items-center gap-2.5 text-[10px] font-normal tracking-[0.04em] text-white/60 sm:text-[11px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D2B87C]" />
                    {downloads.length} resources available
                  </span>
                </div>

                <div className="mt-8 flex items-center gap-4 border-t border-white/15 pt-5 sm:mt-10 sm:pt-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#D2B87C]/40 sm:h-12 sm:w-12">
                    <FileText className="h-5 w-5 text-[#D2B87C]" />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#D2B87C]">
                      Digital Resources
                    </p>

                    <p className="mt-1 text-[11px] leading-5 text-white/55 sm:text-xs">
                      PDF publications for easy access
                    </p>
                  </div>
                </div>
              </div>

              {/* HERO IMAGE */}
              <div className="relative -mx-5 min-h-[300px] overflow-hidden sm:-mx-8 sm:min-h-[380px] lg:mx-0 lg:min-h-[520px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image
                  src="https://i.pinimg.com/736x/c6/ac/2f/c6ac2fa40f6995190721a5792af5e664.jpg"
                  alt="Nehru School of Management board room"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#171946]/85 via-[#20235A]/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#20235A]/35 via-transparent to-transparent lg:from-[#20235A]/30" />

                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7 lg:bottom-9 lg:left-9 lg:right-9">
                  <div className="border-l border-[#D2B87C] pl-4 sm:pl-5">
                    <span className="text-[9px] font-medium uppercase tracking-[0.23em] text-[#D2B87C] sm:text-[10px]">
                      Your Information Hub
                    </span>

                    <p className="mt-2 max-w-md font-serif text-[23px] font-normal leading-[1.2] tracking-[-0.02em] text-white sm:text-[29px]">
                      Explore. Learn. Move Forward.
                    </p>

                    <p className="mt-2 max-w-sm text-[11px] leading-5 text-white/70 sm:text-xs sm:leading-6">
                      Essential publications to support your journey with
                      Nehru School of Management.
                    </p>
                  </div>
                </div>

                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-white/35 bg-[#20235A]/35 backdrop-blur-sm sm:right-6 sm:top-6 sm:h-12 sm:w-12">
                  <Download className="h-5 w-5 text-[#D2B87C]" />
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#D2B87C]/25" />
        </section>

        {/* DEPARTMENT NAVIGATION */}
        <DepartmentNavigation />

        {/* DOWNLOADS */}
        <section id="downloads" className="scroll-mt-20 bg-[#F2EFE8]">
          <div className="mx-auto max-w-[1440px] px-5 py-11 sm:px-8 sm:py-14 lg:px-16 lg:py-16">
            <div className="mb-8 flex flex-col gap-4 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#8F7746]" />

                  <span className="text-[10px] font-medium uppercase tracking-[0.23em] text-[#8F7746]">
                    Resource Centre
                  </span>
                </div>

                <h2 className="font-serif text-[31px] font-normal leading-[1.1] tracking-[-0.035em] text-[#20235A] sm:text-[38px] lg:text-[44px]">
                  Publications &amp; downloads.
                </h2>

                <p className="mt-3 max-w-xl text-[13px] leading-6 text-[#6D675F] sm:text-sm sm:leading-7">
                  Find the brochures and newsletters that introduce our
                  programmes, institution and activities.
                </p>
              </div>

              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#8F7746] sm:text-[11px]">
                {downloads.length.toString().padStart(2, "0")} Publications
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {downloads.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${item.title} (PDF, opens in a new tab)`}
                    className="group relative flex min-h-[265px] flex-col border border-[#20235A]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:bg-[#20235A] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D2B87C] sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center border border-[#D2B87C]/60 transition-colors duration-300 group-hover:border-[#D2B87C]/60">
                        <Icon className="h-5 w-5 text-[#8F7746] transition-colors duration-300 group-hover:text-[#D2B87C]" />
                      </div>

                      <span className="font-serif text-[13px] text-[#20235A]/30 transition-colors duration-300 group-hover:text-white/40">
                        {item.number}
                      </span>
                    </div>

                    <p className="mt-6 text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746] transition-colors duration-300 group-hover:text-[#D2B87C]">
                      {item.category}
                    </p>

                    <h3 className="mt-2 font-serif text-[24px] font-normal leading-tight tracking-[-0.02em] text-[#20235A] transition-colors duration-300 group-hover:text-white sm:text-[26px]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[12px] leading-6 text-[#746E66] transition-colors duration-300 group-hover:text-white/65 sm:text-[13px]">
                      {item.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between border-t border-[#20235A]/10 pt-5 mt-5 transition-colors duration-300 group-hover:border-white/15">
                      <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#8F7746] transition-colors duration-300 group-hover:text-[#D2B87C]">
                        {item.fileType}
                      </span>

                      <span className="flex h-8 w-8 items-center justify-center border border-[#20235A]/10 transition-all duration-300 group-hover:border-[#D2B87C]/50">
                        <ArrowUpRight className="h-4 w-4 text-[#20235A]/50 transition-all duration-300 group-hover:text-[#D2B87C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        {/* <section className="relative overflow-hidden bg-[#20235A]">
          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border border-[#D2B87C]/15" />
          <div className="pointer-events-none absolute -right-8 -top-16 h-48 w-48 rounded-full border border-[#D2B87C]/15" />

          <div className="relative mx-auto max-w-[1440px] px-5 py-11 sm:px-8 sm:py-14 lg:px-16 lg:py-16">
            <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#D2B87C]" />

                  <span className="text-[10px] font-medium uppercase tracking-[0.23em] text-[#D2B87C]">
                    Explore NSM
                  </span>
                </div>

                <h2 className="mt-4 font-serif text-[30px] font-normal leading-[1.13] tracking-[-0.035em] text-white sm:text-[38px] lg:text-[44px]">
                  Discover the spaces that
                  <span className="block italic text-[#D2B87C]">
                    inspire your journey.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-[13px] leading-6 text-white/65 sm:text-sm sm:leading-7">
                  Explore the facilities and learning environment that
                  support the academic and professional journey at Nehru
                  School of Management.
                </p>
              </div>

              <Link
                href="/department/mba/facilities"
                className="group inline-flex min-h-11 w-fit items-center gap-4 bg-[#D2B87C] px-5 py-3 text-[11px] font-medium tracking-[0.04em] text-[#20235A] transition-colors duration-300 hover:bg-white sm:px-6 sm:text-xs"
              >
                Explore Facilities
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section> */}
      </main>

      <FAQ />
      <FooterSection />
    </>
  );
}
