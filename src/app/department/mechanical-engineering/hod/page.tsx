"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Microscope,
  Quote,
  Wrench,
  Cpu,
  Award,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/page";

const BASE_PATH = "/department/mechanical-engineering";

const HOD_IMAGE =
  "/images/dpt/mechanical-engineering/faculty/DrBennyPaul-hod.jpeg";

const departmentMessageParagraphs = [
  "Welcome you to ME, NCERC, dedicated to ensuring great careers for our students. We are forging deeper industry linkages, creating an academic and research culture from the starting day and assuring seamless education using the state-of-the-art technology available.",

  "We have invested a great deal of time and energy in creating strong foundations for our department and will continue to do all that it takes to ensure bright career opportunities through placement-focused studies for our students.",

  "The excellent infrastructure, well experienced teaching faculty of the best kind of the Department ensuring quality education such as interaction among students, parents and staff, along with a Training and Placement Cell ensures a bright future to its students.",

  "I wish to appreciate the team of faculty members and the students for their brilliant and tireless efforts. Depending upon the interest of the student, he/she may choose to go for higher studies or employment and can choose to do research & development, design, production, application, testing, or management in the Electrical and its allied technologies. We give special focus to the link between mechanical technologies and the AI & ML related technologies by conducting appropriate workshops, seminars etc so that the student can enter the modern industrial world with more confidence.",

  "We strongly encourage innovation in research, in teaching and in service to the profession, the local community and industry. I wish all the students and faculty a good academic career.",
];

const highlights = [
  {
    number: "01",
    title: "Industry Linkages",
    description:
      "Forging strong industry partnerships and placement-focused studies to ensure our graduates are workplace-ready from day one.",
    icon: Wrench,
  },
  {
    number: "02",
    title: "AI & ML Integration",
    description:
      "Linking traditional mechanical technologies with emerging AI/ML fields through specialized workshops, seminars, and practical exposure.",
    icon: Cpu,
  },
  {
    number: "03",
    title: "Research & Innovation",
    description:
      "Encouraging students and faculty toward innovation in research, product testing, design, and service to industry and community.",
    icon: Award,
  },
];
export default function HodPage() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[#FAF7F2] text-[#1E1917]">
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative overflow-hidden bg-[#20235A] text-white">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-[#D2B87C]/15" />
          <div className="pointer-events-none absolute -right-8 -top-16 h-72 w-72 rounded-full border border-[#D2B87C]/20" />

          <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              {/* Hero content */}
              <div className="relative z-10">
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-xs">
                    Mechanical Engineering
                  </p>
                </div>

                <h1 className="max-w-3xl font-serif text-[43px] font-normal leading-[1.08] tracking-[-0.035em] sm:text-[58px] lg:text-[64px] xl:text-[74px]">
                  A Message
                  <br />
                  from the{" "}
                  <span className="italic text-[#D2B87C]">HOD</span>
                </h1>

                <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                  Building strong foundations for bright careers through
                  quality education, innovation, research, and deep industry
                  engagement.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-5">
                  <a
                    href="#hod-message"
                    className="group inline-flex min-h-12 items-center gap-3 bg-[#D2B87C] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#20235A] transition-colors duration-300 hover:bg-white"
                  >
                    Read the Message

                    <ArrowDown
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-y-1"
                    />
                  </a>
                </div>

                {/* Breadcrumb */}
                <div className="mt-12 flex items-center gap-3 text-xs text-white/55">
                  <Link
                    href={BASE_PATH}
                    className="transition-colors hover:text-white"
                  >
                    Department
                  </Link>

                  <span className="text-[#D2B87C]">/</span>

                  <span className="text-white/85">HOD&apos;s Desk</span>
                </div>
              </div>

              {/* =====================================================
                  HOD PORTRAIT
              ====================================================== */}
              <div className="relative mx-auto w-full max-w-[480px] lg:ml-auto">
                {/* Offset gold border */}
                <div className="absolute -bottom-4 -left-4 right-4 top-4 border border-[#D2B87C]/60 sm:-bottom-5 sm:-left-5 sm:right-5 sm:top-5" />

                <div className="relative aspect-[4/4.5] overflow-hidden bg-[#30336B]">
                  <Image
                    src={encodeURI(HOD_IMAGE)}
                    alt="Dr. Benny Paul, Professor and Head of the Department of Mechanical Engineering"
                    fill
                    priority
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="h-full w-full object-cover object-top"
                  />

                  {/* Portrait gradient */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#151638]/95 via-[#151638]/45 to-transparent px-6 pb-7 pt-24 sm:px-8 sm:pb-9">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-xs">
                      Head of the Department
                    </p>

                    <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
                      Dr. Benny Paul
                    </h2>

                    <p className="mt-2 text-sm text-white/80">
                      Professor &amp; HoD
                    </p>
                  </div>
                </div>

                {/* Floating academic leadership badge */}
                <div className="absolute -right-2 top-8 hidden border border-[#D2B87C]/60 bg-[#20235A] px-4 py-3 sm:-right-4 sm:block sm:px-5 sm:py-4">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#D2B87C]">
                    Academic Leadership
                  </p>

                  <p className="mt-1 font-serif text-lg text-white">
                    Innovation &amp; Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Gold divider */}
          <div className="h-1 w-full bg-[#D2B87C]" />
        </section>

        {/* =========================================================
            DEPARTMENT NAVIGATION
        ========================================================== */}
        <InnerHeader />

        {/* =========================================================
            CREDENTIALS STRIP
        ========================================================== */}
        <section className="border-b border-[#20235A]/10 bg-white">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 px-5 sm:px-8 md:grid-cols-3 lg:px-14 xl:px-20">
            {/* Role */}
            <div className="flex items-start gap-4 border-b border-[#20235A]/10 py-6 md:border-b-0 md:border-r md:py-8 md:pr-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#8F7746]">
                <GraduationCap size={21} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                  Role
                </p>

                <p className="mt-2 text-sm leading-6 text-[#1E1917]">
                  Professor &amp; Head of Department
                </p>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="flex items-start gap-4 border-b border-[#20235A]/10 py-6 md:border-b-0 md:border-r md:px-8 md:py-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#8F7746]">
                <BookOpen size={21} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                  Focus Areas
                </p>

                <p className="mt-2 text-sm leading-6 text-[#1E1917]">
                  Design, R&amp;D, Production &amp; AI Integration
                </p>
              </div>
            </div>

            {/* Department */}
            <div className="flex items-start gap-4 py-6 md:py-8 md:pl-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#8F7746]">
                <Microscope size={21} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                  Department
                </p>

                <p className="mt-2 text-sm leading-6 text-[#1E1917]">
                  Mechanical Engineering, NCERC
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            HOD MESSAGE
        ========================================================== */}
        <section
          id="hod-message"
          className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20"
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              {/* Left editorial heading */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-9 bg-[#8F7746]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
                    From the HOD&apos;s Desk
                  </p>
                </div>

                <h2 className="max-w-md font-serif text-4xl font-normal leading-[1.13] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[54px]">
                  A vision for
                  <br />
                  <span className="italic">excellence</span>
                  <br />
                  &amp; innovation.
                </h2>

                <div className="mt-8 h-px w-20 bg-[#D2B87C]" />

                <p className="mt-6 max-w-sm text-sm leading-7 text-[#1E1917]/65">
                  Developing technically capable, confident, and industry-ready
                  graduates through quality education, research, and practical
                  learning.
                </p>
              </div>

              {/* Right message */}
              <div className="relative">
                {/* Quote icon */}
                <Quote
                  size={43}
                  strokeWidth={1}
                  className="mb-5 text-[#D2B87C]"
                />

                {/* Highlight quotation */}
                <blockquote className="font-serif text-2xl leading-[1.55] text-[#20235A] sm:text-3xl sm:leading-[1.5]">
                  &ldquo;We strongly encourage innovation in research, in
                  teaching, and in service to the profession, the local
                  community, and industry.&rdquo;
                </blockquote>

                <div className="mt-7 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#8F7746]" />

                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#8F7746]">
                    Dr. Benny Paul
                  </p>
                </div>

                {/* Divider */}
                <div className="my-10 h-px w-full bg-[#20235A]/10" />

                {/* Message paragraphs */}
                <div className="space-y-5 text-[14px] leading-8 text-[#1E1917]/75 sm:text-[15px] sm:leading-[2.05]">
                  {departmentMessageParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Signature */}
                <div className="mt-9 flex flex-wrap items-center gap-3 border-l-2 border-[#D2B87C] bg-white px-5 py-5 sm:px-6">
                  <div>
                    <p className="font-serif text-xl text-[#20235A]">
                      Dr. Benny Paul
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#1E1917]/60">
                      Professor &amp; Head of the Department
                      <br />
                      Mechanical Engineering, NCERC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            DEPARTMENT HIGHLIGHTS
        ========================================================== */}
        <section className="bg-[#F2EFE8] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-9 bg-[#8F7746]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746] sm:text-xs">
                    Our Academic Approach
                  </p>
                </div>

                <h2 className="max-w-2xl font-serif text-4xl font-normal leading-tight tracking-[-0.03em] text-[#20235A] sm:text-5xl lg:text-[54px]">
                  Foundations that
                  <br className="hidden sm:block" /> shape futures.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-[#1E1917]/65">
                Empowering students through academic culture, industry
                linkages, and technological innovation to thrive in the modern
                engineering world.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid gap-5 md:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="group flex h-full flex-col border border-[#20235A]/10 bg-[#FAF7F2] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] sm:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-sm text-[#8F7746]">
                        {item.number}
                      </span>

                      <Icon
                        size={24}
                        strokeWidth={1.4}
                        className="text-[#8F7746] transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <h3 className="mt-9 font-serif text-2xl leading-tight text-[#20235A]">
                      {item.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-7 text-[#1E1917]/65">
                      {item.description}
                    </p>

                    <div className="mt-7 h-px w-12 bg-[#D2B87C] transition-all duration-300 group-hover:w-full" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            CLOSING CTA
        ========================================================== */}
        <section className="bg-[#20235A] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-14 xl:px-20">
          <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C] sm:text-xs">
                Explore Mechanical Engineering
              </p>

              <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Discover the people and facilities behind our learning.
              </h2>
            </div>

            <Link
              href={`${BASE_PATH}/faculty-details`}
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 border border-[#D2B87C]/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
            >
              Explore Faculty

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