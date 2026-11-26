
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../DepartmentNav/DepartmentNav";
import { ArrowDown, Quote } from "lucide-react";

const BASE_PATH = "/department/mechanical-engineering";

const HOD_IMAGE =
  "/images/dpt/mechanical-engineering/faculty/DrBennyPaul-hod.jpeg";

const departmentMessageParagraphs = [
  "Welcome to the Department of Mechanical Engineering at NCERC.",

  "It gives me great pleasure to welcome you to our department, where we are committed to shaping the future of our students through quality education, strong industry connections, and a vibrant academic and research culture from the very beginning. Our focus is on delivering a seamless learning experience supported by state-of-the-art infrastructure and modern technological resources.",

  "Over the years, we have invested significant effort in building a strong foundation for the department. We continue to strengthen this foundation by offering placement-oriented education that equips our students with the knowledge, skills, and confidence required to succeed in a competitive global environment.",

  "Our department is proud to have highly qualified and dedicated faculty members who strive to create an engaging learning atmosphere. We emphasize close interaction among students, parents, and faculty, while our active Training and Placement Cell works consistently to ensure excellent career opportunities for our students.",

  "I sincerely appreciate the tireless efforts and achievements of our faculty and students. Based on their interests, our graduates are well prepared to pursue higher studies or take up careers in diverse areas such as research and development, design, production, testing, application, and management in mechanical and allied fields.",

  "We also recognize the importance of interdisciplinary learning. Special emphasis is given to integrating mechanical engineering with emerging technologies such as Artificial Intelligence and Machine Learning through workshops, seminars, and training programs. This enables our students to confidently meet the evolving demands of the modern industrial world.",

  "At our department, we strongly encourage innovation in research, excellence in teaching, and meaningful service to the profession, industry, and society.",

  "I wish all our students and faculty a successful and rewarding academic journey.",
];

export default function HodPage() {
  return (
    <>
      <SiteHeader />



      <main className="min-h-screen bg-[#FAF7F2] text-[#20235A]">

        {/* =====================================================
                    HERO SECTION
                ====================================================== */}
        <section className="relative overflow-hidden bg-[#20235A] text-white">

          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-[#D2B87C]/15" />

          <div className="pointer-events-none absolute -right-8 -top-16 h-72 w-72 rounded-full border border-[#D2B87C]/20" />

          <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
            <div className="relative">

              {/* Hero content */}
              <div className="relative z-10 max-w-4xl">

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
                  <span className="italic text-[#D2B87C]">
                    HOD
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                  Building strong foundations for bright
                  careers through quality education,
                  innovation, research, and deep industry
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

                  <span className="text-[#D2B87C]">
                    /
                  </span>

                  <span className="text-white/85">
                    HOD&apos;s Desk
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Gold divider */}
          <div className="h-1 w-full bg-[#D2B87C]" />
        </section>
        <DepartmentNavigation />

        {/* =====================================================
                    HOD MESSAGE SECTION
                ====================================================== */}
        <section
          id="hod-message"
          className="scroll-mt-24 bg-[#FAF7F2] py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14 xl:px-20">

            {/* Section Heading */}
            <div className="mb-12 max-w-3xl">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#B99A5B]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8C7545] sm:text-xs">
                  From the Head of the Department
                </p>
              </div>

              <h2 className="font-serif text-3xl font-normal leading-tight tracking-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                Welcome to the Department of{" "}
                <span className="italic text-[#9B804B]">
                  Mechanical Engineering
                </span>
              </h2>
            </div>

            {/* HOD Profile and Message */}
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.72fr_1.5fr] lg:gap-16 xl:gap-20">

              {/* =================================================
                                LEFT - HOD IMAGE AND PROFILE
                            ================================================== */}
              <div className="lg:sticky lg:top-28">

                <div className="relative mx-auto w-full max-w-[390px] lg:max-w-none">

                  {/* HOD Image */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#F0ECE3]">

                    <Image
                      src={HOD_IMAGE}
                      alt="Dr. Benny Paul - Head of the Department of Mechanical Engineering"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className="object-cover object-top"
                    />

                    {/* Decorative frame */}
                    <div className="pointer-events-none absolute inset-4 border border-white/50" />
                  </div>

                  {/* HOD Details */}
                  <div className="relative -mt-1 bg-[#20235A] px-6 py-7 text-white sm:px-8">

                    <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                      Professor &amp; Head of the
                      Department
                    </p>

                    <h3 className="font-serif text-2xl font-normal leading-snug sm:text-3xl">
                      Dr. Benny Paul
                    </h3>

                    <div className="mt-4 h-px w-12 bg-[#D2B87C]" />

                    <p className="mt-4 text-xs leading-6 text-white/65">
                      Department of Mechanical
                      Engineering
                    </p>

                    <p className="mt-1 text-xs leading-6 text-white/65">
                      Nehru College of Engineering and
                      Research Centre
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                                RIGHT - HOD MESSAGE
                            ================================================== */}
              <div className="min-w-0">

                {/* Opening Quote */}
                <div className="mb-8 flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#EDE5D5] text-[#9B804B]">
                    <Quote
                      size={21}
                      strokeWidth={1.5}
                    />
                  </div>

                  <p className="font-serif text-xl italic leading-relaxed text-[#20235A] sm:text-2xl">
                    Welcome to the Department of Mechanical
                    Engineering at NCERC.
                  </p>
                </div>

                {/* Message Paragraphs */}
                <div className="space-y-6 text-justify text-[14px] leading-[2] text-[#55565F] sm:text-[15px] sm:leading-[2.05]">

                  {departmentMessageParagraphs
                    .slice(1)
                    .map((paragraph, index) => (
                      <p key={index}>
                        {paragraph}
                      </p>
                    ))}
                </div>

                {/* Closing Message */}
                <div className="mt-10 border-l-2 border-[#B99A5B] bg-[#F0ECE3] px-6 py-6 sm:px-8 sm:py-7">
                  <p className="font-serif text-xl italic leading-relaxed text-[#20235A] sm:text-2xl">
                    I wish all our students and faculty a
                    successful and rewarding academic
                    journey.
                  </p>
                </div>

                {/* Signature */}
                <div className="mt-10">

                  <p className="mb-5 text-sm text-[#77736B]">
                    With best wishes,
                  </p>

                  <h3 className="font-serif text-2xl font-normal text-[#20235A] sm:text-3xl">
                    Dr. Benny Paul
                  </h3>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#9B804B]">
                    Professor &amp; Head of the Department
                  </p>

                  <p className="mt-2 text-sm leading-7 text-[#77736B]">
                    Department of Mechanical Engineering
                    <br />
                    Nehru College of Engineering and
                    Research Centre
                  </p>

                  <div className="mt-7 h-px w-20 bg-[#B99A5B]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
