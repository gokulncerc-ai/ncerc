import Link from "next/link";
import { ArrowRight } from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNavigation";
import AssociationActivitiesGallery from "./AssociationActivitiesGallery/AssociationActivitiesGallery";

export const metadata = {
  title: "Association Activities | Computer Science and Engineering - NCERC",
  description:
    "Association activities of the Department of Computer Science and Engineering at Nehru College of Engineering and Research Centre, Thrissur.",
  keywords: [
    "engineering colleges thrissur",
    "computer science engineering thrissur",
    "NCERC association activities",
    "CSE association activities",
    "NCERC computer science",
    "Nehru College of Engineering and Research Centre",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

const DEPARTMENT_PATH = "/department/computer-science-and-engineering";

export default function AssociationActivitiesPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF7F2] text-[#1E1917]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#20235A] text-white">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-32 -top-36 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />
          <div className="pointer-events-none absolute -right-12 -top-20 h-[340px] w-[340px] rounded-full border border-[#D2B87C]/15" />
          <div className="pointer-events-none absolute bottom-[-180px] left-[-140px] h-[400px] w-[400px] rounded-full border border-white/5" />

          <div className="relative mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
            <div className="relative z-10 max-w-4xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D2B87C]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-xs">
                  Computer Science &amp; Engineering
                </p>
              </div>

              <h1 className="font-serif text-[42px] font-normal leading-[1.06] tracking-[-0.035em] sm:text-[56px] lg:text-[64px] xl:text-[72px]">
                Association
                <br />
                <span className="italic text-[#D2B87C]">Activities</span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                Technical talks, coding contests and design competitions
                organised by the CSE Association of Nehru College of
                Engineering and Research Centre.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-3 text-xs text-white/50">
                <Link
                  href={DEPARTMENT_PATH}
                  className="transition-colors hover:text-white"
                >
                  Departments
                </Link>

                <span className="text-[#D2B87C]">/</span>

                <Link
                  href={DEPARTMENT_PATH}
                  className="transition-colors hover:text-white"
                >
                  Computer Science &amp; Engineering
                </Link>

                <span className="text-[#D2B87C]">/</span>

                <span className="text-white/80">Association Activities</span>
              </div>
            </div>
          </div>

          <div className="h-1 w-full bg-[#D2B87C]" />
        </section>

        {/* DEPARTMENT NAVIGATION */}
        <InnerHeader activeTab="Association" />

        {/* ASSOCIATION ACTIVITIES */}
        <section className="bg-[#FAF7F2] px-5 py-16 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-12">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#8F7746]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
                  Association Activities
                </p>
              </div>

              <h2 className="font-serif text-4xl font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[52px]">
                Where students
                <br />
                <span className="italic">learn by doing.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#1E1917]/65 sm:text-base sm:leading-8">
                Select an event to read its details and browse the photo
                gallery.
              </p>
            </div>

            <AssociationActivitiesGallery />
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="bg-[#20235A] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-14 xl:px-20">
          <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C] sm:text-xs">
                Explore Computer Science &amp; Engineering
              </p>

              <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Discover the people, facilities and opportunities behind our
                department.
              </h2>
            </div>

            <Link
              href={DEPARTMENT_PATH}
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 border border-[#D2B87C]/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
            >
              About the Department
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}