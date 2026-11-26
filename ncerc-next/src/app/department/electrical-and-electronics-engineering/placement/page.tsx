"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";

const placedStudents = [
  {
    id: "01",
    name: "Placed Student 01",
    image:
      "/images/dpt/electrical-and-electronics-engineering/placement/eeeplacement1.webp",
    alt: "EEE student placement achievement",
  },
  {
    id: "02",
    name: "Placed Student 02",
    image:
      "/images/dpt/electrical-and-electronics-engineering/placement/eeeplacement2.webp",
    alt: "EEE student placement achievement",
  },
  {
    id: "03",
    name: "Placed Student 03",
    image:
      "/images/dpt/electrical-and-electronics-engineering/placement/eeeplacement3.webp",
    alt: "EEE student placement achievement",
  },
  {
    id: "04",
    name: "Placed Student 04",
    image:
      "/images/dpt/electrical-and-electronics-engineering/placement/eeeplacement4.webp",
    alt: "EEE student placement achievement",
  },
  {
    id: "05",
    name: "Placed Student 05",
    image:
      "/images/dpt/electrical-and-electronics-engineering/placement/eeeplacement5.webp",
    alt: "EEE student placement achievement",
  },
];

export default function PlacementPage() {
  return (
    <>
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#20235A]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#D2B87C]/20"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 -top-16 h-52 w-52 rounded-full border border-[#D2B87C]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-44 -left-32 h-96 w-96 rounded-full border border-white/5"
        />

        <div className="relative mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D2B87C]" />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                Electrical &amp; Electronics Engineering
              </p>
            </div>

            <h1 className="font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Placement
              <span className="block text-[#D2B87C]">EEE</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Celebrating the achievements and career milestones of our
              Electrical and Electronics Engineering students as they begin
              their professional journeys.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#placement-gallery"
                className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-colors duration-300 hover:bg-white"
              >
                Explore Placements
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                <GraduationCap className="h-4 w-4 text-[#D2B87C]" />
                2020–24 Batch
              </div>
            </div>
          </div>
        </div>

        {/* Hero Information Strip */}
        <div className="border-t border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-2">
            <div className="flex items-center gap-4 border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
              <Users className="h-5 w-5 shrink-0 text-[#D2B87C]" />

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                  Student Highlights
                </p>
                <p className="mt-2 font-serif text-lg text-white">
                  Placement Achievements
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-6 py-5 sm:px-10 lg:px-16">
              <BriefcaseBusiness className="h-5 w-5 shrink-0 text-[#D2B87C]" />

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                  Career Milestones
                </p>
                <p className="mt-2 font-serif text-lg text-white">
                  2020–24 Batch
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InnerHeader />

      <main className="min-w-0 overflow-x-clip bg-[#FAF7F2] text-[#1e1917]">
        <section
          id="placement-gallery"
          className="border-b border-[#1E1917]/10"
        >
          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            {/* Section Heading */}
            <div className="mb-10 grid gap-8 lg:mb-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D2B87C]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                    Student Achievements
                  </p>
                </div>

                <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Our placed students
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                  Recognising the students of the 2020–24 batch and their
                  transition from academic learning to professional
                  opportunities.
                </p>
              </div>

              <div className="flex items-center gap-4 border-l-2 border-[#D2B87C] bg-[#F2EFE8] px-5 py-4 lg:min-w-[180px]">
                <span className="font-serif text-4xl text-[#20235A]">
                  05
                </span>

                <span className="text-xs leading-5 text-[#1E1917]/60">
                  Student
                  <br />
                  Highlights
                </span>
              </div>
            </div>

            {/* Student Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
              {placedStudents.map((student, index) => (
                <article
                  key={student.id}
                  className={`group min-w-0 overflow-hidden border border-[#20235A]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/70 hover:shadow-[0_20px_45px_rgba(32,35,90,0.10)] ${
                    index < 3 ? "lg:col-span-2" : "lg:col-span-3"
                  }`}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2EFE8]">
                    <Image
                      src={student.image}
                      alt={student.alt}
                      fill
                      priority={index === 0}
                      sizes={
                        index < 3
                          ? "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                          : "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 50vw"
                      }
                      className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.04]"
                    />

                    {/* Image Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#20235A]/80 via-[#20235A]/5 to-transparent" />

                    <span className="absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center border border-white/40 bg-[#20235A]/70 font-serif text-sm text-white backdrop-blur-sm">
                      {student.id}
                    </span>

                    <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-5 sm:p-6">
                      <div className="min-w-0">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                          EEE · 2020–24
                        </p>

                        <h3 className="mt-2 font-serif text-xl leading-snug text-white sm:text-2xl">
                          {student.name}
                        </h3>
                      </div>

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/40 text-white transition-colors duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Closing Note */}
            <div className="mt-10 border border-[#20235A]/10 bg-white p-6 sm:mt-14 sm:p-9 lg:flex lg:items-center lg:justify-between lg:gap-10">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                  Department of EEE
                </p>

                <h3 className="mt-3 font-serif text-2xl text-[#20235A] sm:text-3xl">
                  A milestone worth celebrating
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#1E1917]/65">
                  We celebrate the accomplishments of our students and wish
                  them continued growth and success in their professional
                  careers.
                </p>
              </div>

              <div className="my-6 h-px w-full bg-[#D2B87C]/60 lg:my-0 lg:h-16 lg:w-px" />

              <div className="shrink-0">
                <p className="text-xs uppercase tracking-[0.18em] text-[#8F7746]">
                  Batch
                </p>

                <p className="mt-2 font-serif text-3xl text-[#20235A]">
                  2020–24
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
