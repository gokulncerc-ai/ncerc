import Link from "next/link";
import {
  AlertCircle,
  ArrowUpRight,
  ChevronRight,
  Download,
  Newspaper,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/page";

const downloadItems = [
  {
    number: "01",
    title: "NEWS LETTERS/MAGAZINES",
    description:
      "Access departmental newsletters and magazines featuring academic updates, activities, achievements and important developments.",
    href: "/department/electrical-and-electronics-engineering/downloads/news-letters",
    icon: Newspaper,
  },
  {
    number: "02",
    title: "DEPARTMENT CIRCULARS AND NOTIFICATIONS",
    description:
      "Find departmental circulars, notifications and important announcements intended for students and academic stakeholders.",
    href: "/department/electrical-and-electronics-engineering/downloads/department-circular",
    icon: AlertCircle,
  },
  {
    number: "03",
    title: "OTHER DOWNLOADS",
    description:
      "Explore additional departmental resources, documents and downloadable materials available for academic reference.",
    href: "/department/electrical-and-electronics-engineering/downloads/other-downloads",
    icon: Download,
  },
];

export default function DownloadsPage() {
  return (
    <>
      <SiteHeader />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#D2B87C]/20" />
        <div className="pointer-events-none absolute -right-8 -top-16 h-52 w-52 rounded-full border border-[#D2B87C]/10" />

        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D2B87C]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                Electrical &amp; Electronics Engineering
              </p>
            </div>

            <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Department resources,
              <span className="block text-[#D2B87C]">
                available when you need them.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Explore newsletters, departmental notifications, circulars and
              other downloadable resources from the Electrical and Electronics
              Engineering department at NCERC.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#downloads"
                className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Explore Downloads
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                href="/department/electrical-and-electronics-engineering"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#D2B87C]/60 hover:text-[#D2B87C]"
              >
                Department Overview
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Information Strip */}
        <div className="border-t border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-3">
            <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Department
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                Electrical &amp; Electronics
              </p>
            </div>

            <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Resources
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                03 Download Areas
              </p>
            </div>

            <div className="px-6 py-5 sm:px-10 lg:px-16">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Access
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                Academic Resources
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Department Navigation */}
      <InnerHeader />

      <main className="bg-[#FAF7F2]">
        {/* =========================================================
            INTRODUCTION
        ========================================================= */}
        <section className="border-b border-[#1E1917]/10">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-16 lg:py-24">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Downloads
                </p>
              </div>

              <h2 className="max-w-3xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                Everything important,
                <span className="text-[#8F7746]">
                  {" "}
                  in one place.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#1E1917]/70 sm:text-base">
                The department download section brings together important
                publications, notifications and additional resources so that
                students and members of the academic community can easily
                access the information they need.
              </p>
            </div>

            {/* Resource Summary */}
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  01
                </p>

                <p className="mt-3 font-serif text-xl text-[#20235A]">
                  Publications
                </p>

                <p className="mt-2 text-sm leading-6 text-[#1E1917]/60">
                  Newsletters and magazines from the department.
                </p>
              </div>

              <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  02
                </p>

                <p className="mt-3 font-serif text-xl text-[#20235A]">
                  Notifications
                </p>

                <p className="mt-2 text-sm leading-6 text-[#1E1917]/60">
                  Circulars and important departmental announcements.
                </p>
              </div>

              <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  03
                </p>

                <p className="mt-3 font-serif text-xl text-[#20235A]">
                  Resources
                </p>

                <p className="mt-2 text-sm leading-6 text-[#1E1917]/60">
                  Additional downloadable departmental materials.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            DOWNLOAD CARDS
        ========================================================= */}
        <section id="downloads" className="bg-white">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Resource Centre
                </p>
              </div>

              <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                Browse the department
                <span className="text-[#8F7746]"> downloads.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#1E1917]/70 sm:text-base">
                Choose a resource category below to access the corresponding
                departmental materials.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {downloadItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group relative overflow-hidden rounded-[2rem] border border-[#1E1917]/10 bg-[#FAF7F2] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/70 hover:shadow-xl sm:p-8"
                  >
                    {/* Decorative background */}
                    <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border border-[#D2B87C]/20 transition-transform duration-500 group-hover:scale-110" />

                    <div className="relative">
                      {/* Number + Icon */}
                      <div className="flex items-start justify-between">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                          {item.number}
                        </span>

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C] transition-all duration-300 group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                          <Icon
                            className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                            strokeWidth={1.6}
                          />
                        </div>
                      </div>

                      {/* Gold line */}
                      <div className="mt-8 h-px w-10 bg-[#D2B87C] transition-all duration-300 group-hover:w-16" />

                      {/* Title */}
                      <h3 className="mt-5 max-w-sm font-serif text-2xl leading-tight text-[#20235A]">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-4 min-h-[72px] text-sm leading-6 text-[#1E1917]/65">
                        {item.description}
                      </p>

                      {/* Action */}
                      <div className="mt-7 flex items-center justify-between border-t border-[#1E1917]/10 pt-5">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                          View Downloads
                        </span>

                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1E1917]/10 text-[#20235A] transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C]">
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            RESOURCE INFORMATION
        ========================================================= */}
        <section className="bg-[#F2EFE8]">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-16 lg:py-24">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                  Information Access
                </p>
              </div>

              <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                Stay informed.
                <span className="block text-[#8F7746]">
                  Stay connected.
                </span>
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6 sm:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Publications
                </p>

                <h3 className="mt-4 font-serif text-xl text-[#20235A]">
                  Department Updates
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#1E1917]/65">
                  Keep up with departmental activities, developments and
                  academic highlights through newsletters and magazines.
                </p>
              </div>

              <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6 sm:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Notifications
                </p>

                <h3 className="mt-4 font-serif text-xl text-[#20235A]">
                  Important Announcements
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#1E1917]/65">
                  Access circulars and notifications that communicate important
                  departmental information.
                </p>
              </div>

              <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6 sm:p-7 sm:col-span-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Additional Resources
                </p>

                <h3 className="mt-4 font-serif text-xl text-[#20235A]">
                  Supporting Academic Access
                </h3>

                <p className="mt-3 max-w-3xl text-sm leading-6 text-[#1E1917]/65">
                  The additional downloads section provides a dedicated space
                  for other departmental documents and resources that may be
                  useful to students and members of the academic community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CLOSING CTA
        ========================================================= */}
        <section className="bg-[#20235A]">
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                    Electrical &amp; Electronics Engineering
                  </p>
                </div>

                <h2 className="max-w-3xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  Explore more from the department.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                  Discover the department&apos;s academic activities, facilities,
                  achievements and other resources.
                </p>
              </div>

              <Link
                href="/department/electrical-and-electronics-engineering"
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#D2B87C] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
              >
                Explore Department
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}