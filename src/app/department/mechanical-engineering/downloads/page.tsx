import Link from "next/link";
import {
  AlertCircle,
  ArrowUpRight,
  Download,
  Newspaper,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/page";

interface DownloadCard {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  available: boolean;
}

const BASE = "/department/mechanical-engineering/downloads";

const downloadCards: DownloadCard[] = [
  {
    number: "01",
    title: "News Letters / Magazines",
    description:
      "Access newsletters and magazines published by the Mechanical Engineering department.",
    href: `${BASE}/newsletters-magazine`,
    icon: <Newspaper className="h-7 w-7" strokeWidth={1.5} />,
    available: true,
  },
  {
    number: "02",
    title: "Department Circulars and Notifications",
    description:
      "Department circulars, notifications, and related academic communications.",
    href: "#",
    icon: <AlertCircle className="h-7 w-7" strokeWidth={1.5} />,
    available: false,
  },
  {
    number: "03",
    title: "Other Downloads",
    description:
      "Additional downloadable documents and resources from the department.",
    href: "#",
    icon: <Download className="h-7 w-7" strokeWidth={1.5} />,
    available: false,
  },
];

export const metadata = {
  title: "Downloads | Mechanical Engineering | NCERC",
  description:
    "Mechanical Engineering department downloads, newsletters, magazines, circulars, notifications and other resources at NCERC.",
};

export default function DownloadsPage() {
  return (
    <>
      <SiteHeader />

      {/* ================================================================
          HERO
      ================================================================= */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        {/* Decorative editorial circles */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full border border-[#D2B87C]/20" />

        <div className="pointer-events-none absolute right-8 top-24 h-[270px] w-[270px] rounded-full border border-[#D2B87C]/15" />

        <div className="pointer-events-none absolute -bottom-48 -left-24 h-[430px] w-[430px] rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-[1400px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-sm">
                Mechanical Engineering
              </p>

              <h1 className="mt-5 max-w-3xl font-display text-[43px] font-semibold leading-[1.03] tracking-[-0.025em] text-white sm:text-[58px] lg:text-[64px] xl:text-[74px]">
                Downloads
                <span className="block text-[#D2B87C]">
                  & resources.
                </span>
              </h1>

              <div className="mt-7 h-px w-20 bg-[#D2B87C]" />

              <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                Department publications, notifications, and downloadable
                resources for the Mechanical Engineering community.
              </p>
            </div>

            {/* Hero index */}
            <div className="hidden lg:block">
              <div className="border-l border-[#D2B87C] pl-6">
                <p className="font-display text-5xl font-semibold text-white">
                  03
                </p>

                <p className="mt-2 max-w-[130px] text-xs font-medium uppercase leading-5 tracking-[0.16em] text-white/55">
                  Resource categories
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-[#FAF7F2]">
        <InnerHeader />

        {/* ================================================================
            INTRODUCTION
        ================================================================= */}
        <section className="border-b border-[#E0D9CF] bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
                  Department Resources
                </p>

                <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Information worth keeping within reach.
                </h2>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              <div className="max-w-2xl lg:pt-8">
                <p className="text-base leading-8 text-[#5F5A55] sm:text-lg">
                  Explore the available Mechanical Engineering download
                  categories below. Publications and department resources are
                  organised for easy access.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            DOWNLOAD DIRECTORY
        ================================================================= */}
        <section className="bg-white py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            {/* Section heading */}
            <div className="flex flex-col gap-6 border-b border-[#DDD7CE] pb-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
                  Browse
                </p>

                <h2 className="mt-3 font-display text-3xl font-semibold text-[#20235A] sm:text-4xl lg:text-5xl">
                  Download Centre
                </h2>

                <div className="mt-5 h-px w-16 bg-[#D2B87C]" />
              </div>

              <p className="max-w-md text-sm leading-7 text-[#77716A] lg:text-right">
                Select a category to explore the resources currently
                available from the department.
              </p>
            </div>

            {/* Cards */}
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              {downloadCards.map((card) => {
                const cardContent = (
                  <>
                    {/* Top row */}
                    <div className="flex items-start justify-between">
                      <span
                        className={`font-display text-5xl font-semibold ${
                          card.available
                            ? "text-[#D2B87C]"
                            : "text-[#D1CBC1]"
                        }`}
                      >
                        {card.number}
                      </span>

                      <div
                        className={`flex h-14 w-14 items-center justify-center border ${
                          card.available
                            ? "border-[#D2B87C] text-[#20235A]"
                            : "border-[#D8D1C7] text-[#AAA39A]"
                        }`}
                      >
                        {card.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-auto">
                      <div
                        className={`mb-5 h-px w-12 ${
                          card.available
                            ? "bg-[#D2B87C]"
                            : "bg-[#D0C9BE]"
                        }`}
                      />

                      <h3
                        className={`max-w-sm font-display text-2xl font-semibold leading-tight sm:text-3xl ${
                          card.available
                            ? "text-[#20235A]"
                            : "text-[#77716A]"
                        }`}
                      >
                        {card.title}
                      </h3>

                      <p className="mt-4 max-w-sm text-sm leading-7 text-[#77716A]">
                        {card.description}
                      </p>

                      <div className="mt-8 flex items-center justify-between border-t border-[#DDD7CE] pt-5">
                        <span
                          className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
                            card.available
                              ? "text-[#8F7746]"
                              : "text-[#AAA39A]"
                          }`}
                        >
                          {card.available
                            ? "View resources"
                            : "Coming soon"}
                        </span>

                        {card.available && (
                          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D2B87C] text-[#20235A] transition-all duration-300 group-hover:bg-[#20235A] group-hover:text-white">
                            <ArrowUpRight
                              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                              strokeWidth={1.5}
                            />
                          </span>
                        )}
                      </div>
                    </div>
                  </>
                );

                if (card.available) {
                  return (
                    <Link
                      key={card.title}
                      href={card.href}
                      className="group relative flex min-h-[390px] flex-col overflow-hidden border border-[#D8D1C7] bg-[#FAF7F2] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_22px_55px_rgba(32,35,90,0.10)] sm:p-10"
                    >
                      {cardContent}

                      {/* Hover accent */}
                      <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#D2B87C] transition-all duration-500 group-hover:w-full" />
                    </Link>
                  );
                }

                return (
                  <div
                    key={card.title}
                    className="relative flex min-h-[390px] flex-col overflow-hidden border border-[#E1DDD5] bg-[#F5F2EC] p-8 sm:p-10"
                  >
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================================================================
            FEATURE STATEMENT
        ================================================================= */}
        <section className="relative isolate overflow-hidden bg-[#20235A] py-20 sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full border border-[#D2B87C]/15" />

          <div className="pointer-events-none absolute right-10 top-12 h-[220px] w-[220px] rounded-full border border-[#D2B87C]/10" />

          <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                  Mechanical Engineering
                </p>

                <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
              </div>

              <h2 className="max-w-4xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Publications and department resources, organised for easy
                access.
              </h2>
            </div>
          </div>
        </section>

        {/* ================================================================
            FOOTER INTRO / CLOSING
        ================================================================= */}
        <section className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
            <div className="border-t border-[#D8D1C7] pt-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    Mechanical Engineering
                  </p>

                  <h2 className="mt-3 font-display text-2xl font-semibold text-[#20235A] sm:text-3xl">
                    Explore the department and its academic environment.
                  </h2>
                </div>

                <Link
                  href="/department/mechanical-engineering"
                  className="inline-flex h-12 items-center justify-center border border-[#20235A] px-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-colors duration-300 hover:bg-[#20235A] hover:text-white"
                >
                  Department Overview
                  <ArrowUpRight
                    className="ml-3 h-4 w-4"
                    strokeWidth={1.5}
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}