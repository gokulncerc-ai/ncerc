import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  Laptop,
  Landmark,
} from "lucide-react";

import Image from "next/image";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/page";

interface ResourceCard {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const BASE = "/department/mechanical-engineering/digital-library";

const resourceCards: ResourceCard[] = [
  {
    title: "LAB MANUALS / WORK BOOKS",
    href: `${BASE}/lab-manuals`,
    icon: <FileText className="h-8 w-8 text-gold-500" />,
  },
  {
    title: "COURSE MATERIALS",
    href: `${BASE}/course-materials`,
    icon: <BookOpen className="h-8 w-8 text-gold-500" />,
  },
  {
    title: "UNIVERSITY QUESTION PAPERS",
    href: `${BASE}/university-question-papers`,
    icon: <Landmark className="h-8 w-8 text-gold-500" />,
  },
  {
    title: "SAMPLE FREE ACCESS E BOOKS",
    href: `${BASE}/free-acces-e-books-select`,
    icon: <Laptop className="h-8 w-8 text-gold-500" />,
  },
];

export default function DigitalLibraryPage() {
  return (
    <>
      <SiteHeader />

      {/* Page Title Banner */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/dpt/mechanical-engineering/heroone.jpeg"
            alt="Mechanical Engineering Digital Library"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-20 filter contrast-125 grayscale"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#20235A]/95 via-[#20235A]/90 to-[#15183f]/95" />

        {/* Decorative Circles */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full border border-[#D2B87C]/20" />

        <div className="pointer-events-none absolute right-10 top-24 h-[270px] w-[270px] rounded-full border border-[#D2B87C]/15" />

        <div className="pointer-events-none absolute -bottom-48 -left-24 h-[430px] w-[430px] rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-[1400px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-sm">
                Mechanical Engineering · Digital Library
              </p>

              <h1 className="mt-5 max-w-4xl font-display text-[43px] font-semibold leading-[1.03] tracking-[-0.025em] text-white sm:text-[58px] lg:text-[64px] xl:text-[74px]">
                Digital
                <span className="block text-[#D2B87C]">Library.</span>
              </h1>

              <div className="mt-7 h-px w-20 bg-[#D2B87C]" />

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Access academic resources, course materials, laboratory manuals,
                university question papers, and selected e-books for Mechanical
                Engineering students.
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="border-l border-[#D2B87C] pl-6">
                <p className="font-display text-5xl font-semibold text-white">
                  04
                </p>

                <p className="mt-2 max-w-[150px] text-xs font-medium uppercase leading-5 tracking-[0.16em] text-white/55">
                  Resource Categories
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page Content */}
      <main className="bg-[#FAF7F2]">
  <InnerHeader />

  {/* Introduction */}
  <section className="border-b border-[#E0D9CF] bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
            Department Resources
          </p>

          <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
            Knowledge resources for engineering education.
          </h2>

          <div className="mt-6 h-px w-16 bg-[#D2B87C]" />
        </div>

        <div className="max-w-2xl lg:pt-8">
          <p className="text-base leading-8 text-[#5F5A55] sm:text-lg">
            Explore the Mechanical Engineering digital library through a
            curated collection of academic resources designed to support
            classroom learning, laboratory practice, examination preparation,
            and independent study.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Resource Directory */}
  <section className="bg-white py-16 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">

      {/* Section Heading */}
      <div className="flex flex-col gap-6 border-b border-[#DDD7CE] pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746] sm:text-sm">
            Digital Library
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold text-[#20235A] sm:text-4xl lg:text-5xl">
            Explore Resources
          </h2>

          <div className="mt-5 h-px w-16 bg-[#D2B87C]" />
        </div>

        <p className="max-w-xs text-sm leading-6 text-[#77716A]">
          Academic resources and learning materials for Mechanical Engineering
          students.
        </p>
      </div>

      {/* Resource Cards */}
      <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2">

        {resourceCards.map((card, index) => (
          <Link
            key={card.title}
            href={card.href}
            className="group relative flex min-h-[190px] items-center justify-between overflow-hidden border border-[#D8D1C7] bg-[#FAF7F2] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#20235A] hover:bg-white hover:shadow-[0_15px_40px_rgba(32,35,90,0.08)] sm:p-9"
          >
            {/* Number */}
            <span className="absolute right-5 top-3 font-display text-7xl font-semibold leading-none text-[#20235A]/[0.045] transition-colors duration-300 group-hover:text-[#D2B87C]/20">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="relative z-10 flex items-center gap-6">
              {/* Icon */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-[#D2B87C] text-[#20235A] transition-all duration-300 group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                {card.icon}
              </div>

              {/* Title */}
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Resource {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="max-w-sm font-display text-lg font-semibold leading-snug text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746] sm:text-xl">
                  {card.title}
                </h3>
              </div>
            </div>

            {/* Arrow */}
            <ArrowUpRight
              className="relative z-10 ml-4 h-5 w-5 shrink-0 text-[#8F7746] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              strokeWidth={1.5}
            />
          </Link>
        ))}

      </div>
    </div>
  </section>

  {/* Bottom Statement */}
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
          Learn. Explore. Access knowledge. Build your engineering future.
        </h2>
      </div>
    </div>
  </section>

  {/* Bottom CTA */}
  <section className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
      <div className="border-t border-[#D8D1C7] pt-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
              Mechanical Engineering
            </p>

            <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-[#20235A] sm:text-3xl">
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