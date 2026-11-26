
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  CalendarDays,
  Cpu,
  Sparkles,
  MapPin,
  Building2,
  GraduationCap,
  Route,
  Users,
  Mountain,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNav";

const bridgeonObjectives = [
  "To gain practical exposure to industrial operations.",
  "To understand real-time applications of engineering concepts.",
  "To observe modern technology and industrial safety measures.",
  "To explore the natural beauty and tourist attractions of Munnar.",
  "To strengthen teamwork, bonding, and coordination among students.",
];

const bridgeonImages = [
  {
    number: "01",
    img: "/images/dpt/electronics-and-communication-engineering/activities/activities/bridgeon1.webp",
    caption: "Industrial Visit – Bridgeon, Ernakulam",
  },
  {
    number: "02",
    img: "/images/dpt/electronics-and-communication-engineering/activities/activities/bridgeon2.webp",
    caption: "Students during the industrial visit",
  },
  {
    number: "03",
    img: "/images/dpt/electronics-and-communication-engineering/activities/activities/bridgeon3.webp",
    caption: "Exploring Munnar",
  },
  {
    number: "04",
    img: "/images/dpt/electronics-and-communication-engineering/activities/activities/bridgeon4.webp",
    caption: "Memorable moments from the trip",
  },
];

function BridgeonImagePlaceholder({
  number,
  caption,
  img,
  onClick,
}: {
  img: string;
  number: string;
  caption: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Open ${caption} in full screen`}
      className="group relative aspect-[4/3] w-full overflow-hidden border border-[#D2B87C]/35 bg-[#F2EFE8] text-left"
    >
      <Image
        src={img}
        alt={caption}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 z-10 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
          Image {number}
        </p>
        <p className="mt-1 text-sm font-medium text-white">
          {caption}
        </p>
      </div>

      <div className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center border border-white/50 bg-[#20235A]/60 text-white opacity-0 transition-opacity group-hover:opacity-100">
        <Maximize2 className="h-4 w-4" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-[#D2B87C]" />
    </button>
  );
}

const inkerImages = [
  {
    src: "/images/dpt/electronics-and-communication-engineering/activities/activities/ece_iv_inker_robotics1.webp",
    alt: "ECE students during the industrial visit to Inker Robotics",
    caption: "Industrial visit to Inker Robotics",
  },
  {
    src: "/images/dpt/electronics-and-communication-engineering/activities/activities/ece_iv_inker_robotics2.webp",
    alt: "Students observing robotic technologies at Inker Robotics",
    caption: "Exploring robotic technologies",
  },
  {
    src: "/images/dpt/electronics-and-communication-engineering/activities/activities/ece_iv_inker_robotics3.webp",
    alt: "Live demonstration of robotic equipment",
    caption: "Hands-on robotics demonstrations",
  },
  {
    src: "/images/dpt/electronics-and-communication-engineering/activities/activities/ece_iv_inker_robotics4.webp",
    alt: "ECE students during the Inker Robotics visit",
    caption: "Students during the visit",
  },
];

export default function ActivitiesPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Full-screen image keyboard navigation
  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowLeft") {
        setSelectedImage((current) =>
          current === null
            ? null
            : (current - 1 + bridgeonImages.length) %
            bridgeonImages.length
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedImage((current) =>
          current === null
            ? null
            : (current + 1) % bridgeonImages.length
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  const showPreviousImage = () => {
    setSelectedImage((current) =>
      current === null
        ? null
        : (current - 1 + bridgeonImages.length) %
        bridgeonImages.length
    );
  };

  const showNextImage = () => {
    setSelectedImage((current) =>
      current === null
        ? null
        : (current + 1) % bridgeonImages.length
    );
  };

  // Inker Robotics gallery state
  const [selectedInkerImage, setSelectedInkerImage] =
    useState<number | null>(null);

  // Inker Robotics image lightbox keyboard navigation
  useEffect(() => {
    if (selectedInkerImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedInkerImage(null);
      }

      if (event.key === "ArrowLeft") {
        setSelectedInkerImage((current) =>
          current === null
            ? null
            : (current - 1 + inkerImages.length) % inkerImages.length
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedInkerImage((current) =>
          current === null
            ? null
            : (current + 1) % inkerImages.length
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedInkerImage]);

  const showPreviousInkerImage = () => {
    setSelectedInkerImage((current) =>
      current === null
        ? null
        : (current - 1 + inkerImages.length) % inkerImages.length
    );
  };

  const showNextInkerImage = () => {
    setSelectedInkerImage((current) =>
      current === null
        ? null
        : (current + 1) % inkerImages.length
    );
  };

  return (
    <>
      <SiteHeader />

      {/* Page Title Banner */}
      <section className="relative overflow-hidden bg-[#20235A]">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-32 -top-36 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />
        <div className="pointer-events-none absolute -right-12 -top-20 h-[340px] w-[340px] rounded-full border border-[#D2B87C]/15" />
        <div className="pointer-events-none absolute bottom-[-180px] left-[-140px] h-[400px] w-[400px] rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28 [&_p]:text-justify">
          <div className="max-w-4xl">
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <span className="h-px w-12 bg-[#D2B87C]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                Electronics &amp; Communication Engineering
              </span>
            </div>

            <h1 className="font-serif text-[46px] leading-[0.97] tracking-[-0.035em] text-white sm:text-[60px] lg:text-[70px] xl:text-[78px]">
              <span className="block text-[#D2B87C]">Activities</span>
            </h1>

            <p className="mt-5 max-w-xl text-[14px] font-semibold uppercase tracking-[0.14em] text-white/50">
              Learning • Engagement • Experiences
            </p>

            <p className="mt-8 max-w-2xl text-[16px] leading-8 text-white/70 sm:text-[17px] ">
              Discover the academic, technical and extracurricular activities
              organised by the Department of Electronics and Communication
              Engineering, providing students with opportunities to learn,
              collaborate and gain practical experiences beyond the classroom.
            </p>

            <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-7">
              <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/40">
                <Activity className="h-5 w-5 text-[#D2B87C]" />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                  Beyond the Classroom
                </p>
                <p className="mt-1 text-sm text-white/55">
                  Technical events, workshops and student activities
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#D2B87C]/20" />
      </section>

      {/* Page Content */}
      <main className="bg-white [&_p]:text-justify">
        <InnerHeader />

        {/* ===================================================== */}
        {/* FEATURED FDP PROGRAMME */}
        {/* ===================================================== */}

        <section className="bg-[#FAF7F2] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-10 flex flex-wrap items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#8F7746]" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                  Department Activities
                </p>
              </div>

              <span className="border border-[#D2B87C]/60 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                Featured Programme
              </span>
            </div>

            <div className="grid overflow-hidden bg-[#20235A] lg:grid-cols-[0.85fr_1.15fr]">
              {/* Event Details */}
              <div className="flex flex-col justify-center px-7 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center border border-[#D2B87C]/40">
                    <Cpu className="h-5 w-5 text-[#D2B87C]" />
                  </div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                    Faculty Development Programme
                  </p>
                </div>

                <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl lg:text-[54px]">
                  Transforming
                  <span className="mt-2 block text-[#D2B87C]">
                    AI &amp; IoT
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                  A Faculty Development Programme focused on exploring the
                  evolving landscape of Artificial Intelligence and the
                  Internet of Things.
                </p>

                <div className="mt-9 flex items-center gap-4 border-t border-white/15 pt-7">
                  <div className="flex h-11 w-11 items-center justify-center border border-[#D2B87C]/35">
                    <CalendarDays className="h-5 w-5 text-[#D2B87C]" />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                      Programme Date
                    </p>
                    <p className="mt-1 text-sm font-semibold tracking-wide text-white">
                      June 2026
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-3 text-[#D2B87C]">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                    Exploring Emerging Technologies
                  </span>
                </div>
              </div>

              {/* Event Image */}
              <div className="relative min-h-[300px] overflow-hidden sm:min-h-[420px] lg:min-h-[560px]">
                <Image
                  src="/images/dpt/electronics-and-communication-engineering/activities/ece-activities-fdp.webp"
                  alt="Faculty Development Programme on Transforming AI and IoT, June 2026"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-contain"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/50 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 border border-white/20 bg-[#20235A]/75 p-5 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                      ECE Department
                    </p>
                    <p className="mt-1 font-serif text-lg text-white sm:text-xl">
                      AI &amp; IoT Programme
                    </p>
                  </div>

                  <ArrowUpRight className="h-5 w-5 shrink-0 text-[#D2B87C]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* INDUSTRIAL VISITS – SECTION INTRODUCTION */}
        {/* ===================================================== */}

        <section className="bg-[#FAF7F2]">
          <div className="relative overflow-hidden bg-[#20235A]">
            <div className="pointer-events-none absolute -right-32 -top-36 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />
            <div className="pointer-events-none absolute -right-12 -top-20 h-[340px] w-[340px] rounded-full border border-[#D2B87C]/15" />
            <div className="pointer-events-none absolute bottom-[-180px] left-[-140px] h-[400px] w-[400px] rounded-full border border-white/5" />

            <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
              <div className="max-w-4xl">
                <div className="mb-8 flex items-center gap-4">
                  <span className="h-px w-12 bg-[#D2B87C]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                    Electronics &amp; Communication Engineering
                  </span>
                </div>

                <h2 className="font-serif text-[46px] leading-[0.97] tracking-[-0.035em] text-white sm:text-[60px] lg:text-[72px]">
                  Industrial
                  <span className="block text-[#D2B87C]">Visits</span>
                </h2>

                <p className="mt-7 max-w-2xl text-[15px] leading-8 text-white/65 sm:text-[17px]">
                  Learning beyond the classroom through industry exposure,
                  practical experiences, and meaningful interactions with
                  professional environments.
                </p>

                <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-7">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/40">
                    <Building2 className="h-5 w-5 text-[#D2B87C]" />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                      Experiential Learning
                    </p>
                    <p className="mt-1 text-sm text-white/55">
                      Connecting academic knowledge with industry practices
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-[#D2B87C]/20" />
          </div>

          {/* ===================================================== */}
          {/* BRIDGEON INDUSTRIAL VISIT */}
          {/* ===================================================== */}

          <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            {/* Report Heading */}

            <div className="mb-12">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="h-px w-10 bg-[#8F7746]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                  Industrial Visit Report
                </p>
              </div>

              <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                <div className="max-w-3xl">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                    IV to Bridgeon – S4
                  </p>

                  <h3 className="font-serif text-4xl leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[58px]">
                    Bridgeon, Ernakulam
                    <span className="block text-[#8F7746]">
                      &amp; Munnar
                    </span>
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-[#1e1917]/65 sm:text-base sm:leading-8">
                    A two-day industrial and recreational trip organised for
                    the second-year Electronics and Communication Engineering
                    students.
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-3 border-l-2 border-[#D2B87C] py-2 pl-5">
                  <CalendarDays className="h-5 w-5 text-[#8F7746]" />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#8F7746]">
                      Visit Dates
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#20235A]">
                      20 – 21 February 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Report Information */}

            <div className="mb-14 grid grid-cols-1 border border-[#D2B87C]/40 bg-white sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-4 border-b border-[#D2B87C]/30 p-5 sm:border-r lg:border-b-0">
                <Building2 className="h-5 w-5 shrink-0 text-[#8F7746]" />
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                    Department
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#20235A]">
                    ECE
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-b border-[#D2B87C]/30 p-5 lg:border-b-0 lg:border-r">
                <GraduationCap className="h-5 w-5 shrink-0 text-[#8F7746]" />
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                    Participants
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#20235A]">
                    Second-Year ECE Students
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-b border-[#D2B87C]/30 p-5 sm:border-b-0 sm:border-r">
                <MapPin className="h-5 w-5 shrink-0 text-[#8F7746]" />
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                    Destinations
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#20235A]">
                    Ernakulam &amp; Munnar
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5">
                <Users className="h-5 w-5 shrink-0 text-[#8F7746]" />
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                    Faculty Coordinators
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#20235A]">
                    Asst. Prof. Jisha K V &amp; Asst. Prof. Suresh P
                  </p>
                </div>
              </div>
            </div>

            {/* Introduction */}

            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div>
                <div className="sticky top-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                    01 / Overview
                  </p>
                  <h4 className="mt-4 font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                    A Journey of
                    <span className="block text-[#8F7746]">
                      Learning &amp; Exploration
                    </span>
                  </h4>

                  <div className="mt-7 h-px w-16 bg-[#D2B87C]" />

                  <p className="mt-6 text-sm leading-7 text-[#1e1917]/55">
                    Industrial exposure and recreational experiences
                    brought together through a two-day student trip.
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-[14px] leading-8 text-[#1e1917]/75 sm:text-[15px]">
                <p>
                  The Department of Electronics and Communication Engineering
                  (ECE) organized a two- day industrial and recreational trip
                  for the second-year ECE students to Bridgeon, Ernakulam and
                  Munnar on 20th and 21st February 2026. The trip was arranged
                  with the dual purpose of providing students with industrial
                  exposure and offering a refreshing experience in one of
                  Kerala&apos;s most beautiful hill stations.
                </p>

                <p>
                  The journey began from the college campus at 8:00 AM on
                  20th February 2026. The trip was well-planned and executed
                  under the guidance of faculty members, Asst. prof. Jisha K V
                  and Asst. prof. Suresh P ensuring both safety and meaningful
                  learning experiences.
                </p>
              </div>
            </div>

            {/* Objectives */}

            <div className="mt-20 border-t border-[#D2B87C]/40 pt-12">
              <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                    02 / Purpose
                  </p>
                  <h4 className="mt-3 font-serif text-3xl text-[#20235A] sm:text-4xl">
                    Objectives of the Trip
                  </h4>
                </div>

                <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/60">
                  <GraduationCap className="h-5 w-5 text-[#8F7746]" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {bridgeonObjectives.map((objective, index) => (
                  <div
                    key={objective}
                    className="flex gap-4 border border-[#D2B87C]/35 bg-white p-6 transition-colors duration-300 hover:border-[#8F7746]/60"
                  >
                    <span className="font-serif text-xl text-[#B29A6A]">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-7 text-[#1e1917]/75">
                      {objective}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Industrial Visit and Travel Experience */}

            <div className="mt-20 border-t border-[#D2B87C]/40 pt-12">
              <div className="mb-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                  03 / The Experience
                </p>
                <h4 className="mt-3 font-serif text-3xl text-[#20235A] sm:text-4xl">
                  Industrial Visit &amp; Travel Experience
                </h4>
              </div>

              {/* Departure */}

              <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-14">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                      <Route className="h-5 w-5" />
                    </span>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      20 February 2026
                    </p>
                  </div>
                  <h5 className="mt-4 font-serif text-2xl text-[#20235A]">
                    Departure
                  </h5>
                </div>

                <div className="border-l border-[#D2B87C]/60 pl-6 sm:pl-9">
                  <p className="text-sm leading-8 text-[#1e1917]/70 sm:text-[15px]">
                    On 20/02/2026, students assembled at the college campus
                    early in the morning. The journey officially began at
                    8:00 AM. After attendance and briefing by faculty
                    coordinators, we departed in the college bus.
                  </p>
                  <p className="mt-4 text-sm leading-8 text-[#1e1917]/70 sm:text-[15px]">
                    The journey to Ernakulam was enthusiastic and lively.
                    Students interacted, shared snacks, and enjoyed the
                    scenic views along the way.
                  </p>
                </div>
              </div>

              {/* Bridgeon Visit */}

              <div className="mt-12 grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-14">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                      <Building2 className="h-5 w-5" />
                    </span>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      11:30 AM
                    </p>
                  </div>
                  <h5 className="mt-4 font-serif text-2xl text-[#20235A]">
                    Industrial Visit – Bridgeon
                  </h5>
                  <p className="mt-2 text-xs text-[#1e1917]/45">
                    Ernakulam
                  </p>
                </div>

                <div className="border-l border-[#D2B87C]/60 pl-6 sm:pl-9">
                  <p className="text-sm leading-8 text-[#1e1917]/70 sm:text-[15px]">
                    At 11:30 AM, we visited Bridgeon in Ernakulam for our
                    industrial exposure session. During the visit:
                  </p>

                  <ul className="mt-5 space-y-4">
                    {[
                      "We were introduced to the company’s working environment. Officials explained various technical processes and projects.",
                      "Students learned about software development practices and industry expectations.",
                      "A session on career guidance and skill development was conducted.",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#8F7746]" />
                        <span className="text-sm leading-7 text-[#1e1917]/70">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 text-sm leading-8 text-[#1e1917]/70 sm:text-[15px]">
                    The visit provided valuable insights into how theoretical
                    knowledge is applied in real-world industrial settings.
                    It enhanced our understanding of teamwork, innovation,
                    and professionalism.
                  </p>
                </div>
              </div>

              {/* Resort Stay */}

              <div className="mt-12 grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-14">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                      <Mountain className="h-5 w-5" />
                    </span>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                      7:00 PM – 7:30 PM
                    </p>
                  </div>
                  <h5 className="mt-4 font-serif text-2xl text-[#20235A]">
                    Journey to Munnar &amp; Resort Stay
                  </h5>
                </div>

                <div className="border-l border-[#D2B87C]/60 pl-6 sm:pl-9">
                  <p className="text-sm leading-8 text-[#1e1917]/70 sm:text-[15px]">
                    After the industrial visit, we proceeded towards Munnar.
                    We reached our destination around 7:00 PM and enjoyed the
                    breathtaking mountain view.
                  </p>
                  <p className="mt-4 text-sm leading-8 text-[#1e1917]/70 sm:text-[15px]">
                    At 7:30 PM, we checked into the resort. The cool climate
                    and peaceful surroundings made the stay memorable.
                    Students relaxed, interacted, and enjoyed the evening
                    together. The day concluded with dinner and rest at the
                    resort.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Gallery – Four Images */}

            <div className="mt-20 border-t border-[#D2B87C]/40 pt-12">
              <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                    Moments from the Visit
                  </p>
                  <h4 className="mt-3 font-serif text-3xl text-[#20235A] sm:text-4xl">
                    Industrial Visit Gallery
                  </h4>
                </div>

                <p className="max-w-xs text-xs leading-6 text-[#1e1917]/50">
                  Highlights from the Bridgeon industrial visit and
                  Munnar trip.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {bridgeonImages.map((image, index) => (
                  <BridgeonImagePlaceholder
                    key={image.number}
                    img={image.img}
                    number={image.number}
                    caption={image.caption}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </div>

            {/* Exploring Munnar */}

            <div className="mt-20 border-t border-[#D2B87C]/40 pt-12">
              <div className="mb-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                  04 / Exploring Munnar
                </p>
                <h4 className="mt-3 font-serif text-3xl text-[#20235A] sm:text-4xl">
                  Exploring Munnar
                </h4>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#1e1917]/60">
                  The second day was dedicated to exploring the famous
                  tourist attractions and scenic landscapes of Munnar.
                </p>
              </div>

              {/* Morning */}

              <div className="mb-10 bg-[#F2EFE8] p-7 sm:p-9">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  21 February 2026
                </p>
                <h5 className="mt-3 font-serif text-2xl text-[#20235A]">
                  Morning in Munnar
                </h5>
                <p className="mt-4 max-w-3xl text-sm leading-8 text-[#1e1917]/70">
                  On 21/02/2026, we started the day with fresh mountain air
                  and scenic beauty. After breakfast, we began exploring
                  the famous tourist spots in Munnar.
                </p>
              </div>

              {/* Destinations */}

              <div className="grid gap-5 md:grid-cols-3">
                <div className="border border-[#D2B87C]/40 bg-white p-7">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    Destination 01
                  </span>
                  <h5 className="mt-4 font-serif text-2xl text-[#20235A]">
                    Mattupetty Dam
                  </h5>
                  <p className="mt-4 text-sm leading-7 text-[#1e1917]/65">
                    Our first major destination was Mattupetty Dam.
                    The place offered:
                  </p>
                  <ul className="mt-5 space-y-3">
                    {[
                      "Beautiful views of the reservoir surrounded by hills.",
                      "A calm and refreshing environment.",
                      "Opportunities for photography and sightseeing.",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B29A6A]" />
                        <span className="text-xs leading-6 text-[#1e1917]/65">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-[#D2B87C]/40 bg-white p-7">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    Destination 02
                  </span>
                  <h5 className="mt-4 font-serif text-2xl text-[#20235A]">
                    Echo Point
                  </h5>
                  <p className="mt-4 text-sm leading-7 text-[#1e1917]/65">
                    Next, we visited Echo Point. It is well-known for:
                  </p>
                  <ul className="mt-5 space-y-3">
                    {[
                      "The natural echo phenomenon.",
                      "Scenic landscapes.",
                      "Small shops selling souvenirs and local products.",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B29A6A]" />
                        <span className="text-xs leading-6 text-[#1e1917]/65">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-[#D2B87C]/40 bg-white p-7">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                    Destination 03
                  </span>
                  <h5 className="mt-4 font-serif text-2xl text-[#20235A]">
                    Gap Road
                  </h5>
                  <p className="mt-4 text-sm leading-7 text-[#1e1917]/65">
                    We also travelled through Gap Road, which provided:
                  </p>
                  <ul className="mt-5 space-y-3">
                    {[
                      "Spectacular valley views.",
                      "A thrilling travel experience.",
                      "Excellent opportunities for group photographs.",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B29A6A]" />
                        <span className="text-xs leading-6 text-[#1e1917]/65">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-7 border-l-2 border-[#D2B87C] pl-5 text-sm italic leading-7 text-[#1e1917]/60">
                The journey through the hills was one of the most
                exciting parts of the trip.
              </p>
            </div>

            {/* Return Journey */}

            <div className="mt-20 grid gap-8 bg-[#20235A] p-8 sm:p-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:p-14">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                  05 / Journey Back
                </p>
                <h4 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl">
                  Return to
                  <span className="block text-[#D2B87C]">Campus</span>
                </h4>
                <div className="mt-7 flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-[#D2B87C]" />
                  <p className="text-sm text-white/65">
                    21 February 2026
                  </p>
                </div>
              </div>

              <div className="border-l border-[#D2B87C]/40 pl-6 sm:pl-9">
                <p className="text-sm leading-8 text-white/70 sm:text-[15px]">
                  After completing our sightseeing and lunch, we started
                  our return journey. We reached the campus safely at
                  10:30 PM.
                </p>
                <p className="mt-4 text-sm leading-8 text-white/70 sm:text-[15px]">
                  Though tired from travel, everyone was happy and
                  satisfied with the experience.
                </p>
                <div className="mt-7 inline-flex items-center gap-3 border border-[#D2B87C]/35 px-5 py-3">
                  <MapPin className="h-4 w-4 text-[#D2B87C]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                    Campus Arrival – 10:30 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Overall Experience */}

            <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                  06 / Reflections
                </p>
                <h4 className="mt-3 font-serif text-3xl text-[#20235A] sm:text-4xl">
                  Conclusion &amp;
                  <span className="block text-[#8F7746]">
                    Overall Experience
                  </span>
                </h4>

                <h5 className="mt-9 font-serif text-2xl text-[#20235A]">
                  Overall Experience
                </h5>
                <p className="mt-4 text-sm leading-8 text-[#1e1917]/70">
                  The trip was a perfect combination of:
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    "Educational exposure",
                    "Industrial learning",
                    "Natural exploration",
                    "Team bonding",
                    "Relaxation and enjoyment",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 border border-[#D2B87C]/35 bg-white p-3"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8F7746]" />
                      <span className="text-xs leading-5 text-[#20235A]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center border-t border-[#D2B87C]/40 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Final Remarks
                </p>
                <h5 className="mt-4 font-serif text-2xl text-[#20235A]">
                  A Meaningful Experience
                </h5>
                <p className="mt-5 text-sm leading-8 text-[#1e1917]/70">
                  The industrial visit enhanced our technical knowledge
                  and career awareness, while the Munnar trip helped us
                  refresh our minds and appreciate nature.
                </p>

                <div className="mt-8 h-px w-16 bg-[#D2B87C]" />

                <h5 className="mt-8 font-serif text-2xl text-[#20235A]">
                  Conclusion
                </h5>
                <p className="mt-4 text-sm leading-8 text-[#1e1917]/70">
                  The Ernakulam and Munnar trip was a successful and
                  memorable experience for all participants. It not
                  only strengthened our academic understanding through
                  industrial exposure but also created lasting memories
                  among friends and faculty members. We sincerely thank
                  our college management, faculty coordinators, and
                  Ramachandra Holidays for organizing such a well-planned
                  and enriching trip.
                </p>
              </div>
            </div>

            {/* Closing Accent */}

            <div className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t border-[#D2B87C]/40 pt-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#8F7746]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                  Department of Electronics &amp; Communication Engineering
                </p>
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1e1917]/40">
                Industrial Visits
              </span>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* FULL-SCREEN IMAGE VIEWER */}
        {/* ===================================================== */}

        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#090A13]/95 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Industrial visit image gallery"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close full-screen image"
              className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Previous Button */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousImage();
              }}
              aria-label="Previous image"
              className="absolute left-3 z-30 flex h-11 w-11 items-center justify-center border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Full-Screen Image */}
            <div
              className="relative h-[75vh] w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={bridgeonImages[selectedImage].img}
                alt={bridgeonImages[selectedImage].caption}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNextImage();
              }}
              aria-label="Next image"
              className="absolute right-3 z-30 flex h-11 w-11 items-center justify-center border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Caption */}
            <div className="pointer-events-none absolute bottom-5 left-0 right-0 px-16 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                Image {bridgeonImages[selectedImage].number} /{" "}
                {bridgeonImages.length}
              </p>
              <p className="mt-2 text-sm text-white/80">
                {bridgeonImages[selectedImage].caption}
              </p>
            </div>
          </div>
        )}

        <section className="bg-[#FAF7F2] px-6 pb-20 pt-8 sm:px-10 sm:pb-24 sm:pt-10 lg:px-16">
          <div className="mx-auto max-w-[1440px]">

            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

              {/* Trip Write-up */}
              <div className="max-w-2xl">

                <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                  Industrial Visit & Recreational Trip
                </span>

                <h3 className="mb-6 font-serif text-2xl font-medium leading-snug text-[#20235A] sm:text-3xl lg:text-[2.15rem]">
                  Two-Day Trip to Bridgeon, Ernakulam & Munnar
                </h3>

                <div className="space-y-5 text-sm leading-8 text-[#514C45] sm:text-[15px]">
                  <p>
                    The Department of Electronics and Communication Engineering (ECE) organized a two-day industrial and recreational trip for second-year students to Bridgeon, Ernakulam and Munnar on 20th and 21st February 2026. The journey commenced from the campus at 8:00 AM under the guidance of Asst. Prof. Jisha K V and Asst. Prof. Suresh P, ensuring a safe and enriching experience. During the industrial visit at Bridgeon, students gained valuable insights into real-time applications of engineering concepts, software development practices, industry expectations, and career opportunities. Following the industrial exposure, students proceeded to Munnar, where they explored scenic attractions including Mattupetty Dam, Echo Point, and Gap Road, enjoying the natural beauty and refreshing hill-station climate. The trip successfully combined educational learning, industrial exposure, teamwork, and recreation, making it a memorable and meaningful experience for all participants.

                  </p>



                </div>

                {/* Subtle Trip Information */}
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[#D2B87C]/50 pt-6">

                  <div className="flex items-center gap-3">
                    <CalendarDays
                      size={19}
                      strokeWidth={1.5}
                      className="text-[#A88B50]"
                    />
                    <div>
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                        Date
                      </span>
                      <span className="text-sm font-medium text-[#20235A]">
                        20 – 21 February 2026
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin
                      size={19}
                      strokeWidth={1.5}
                      className="text-[#A88B50]"
                    />
                    <div>
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                        Destinations
                      </span>
                      <span className="text-sm font-medium text-[#20235A]">
                        Ernakulam & Munnar
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Featured Trip Image */}
              <div className="relative lg:pl-4">
                <div className="relative aspect-[5/4] w-full overflow-hidden bg-[#F2EFE8]">
                  <Image
                    src="/images/dpt/electronics-and-communication-engineering/activities/activities/bridgeon1.webp"
                    alt="ECE students during the Bridgeon industrial and recreational trip"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-fill"
                  />
                </div>

                {/* Image Accent */}
                <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full border-b border-r border-[#D2B87C] sm:-bottom-4 sm:-right-4" />
              </div>

            </div>
          </div>
        </section>
        {/* -------------Inker Robotics Section----------- */}
        <section className="border-t border-[#D2B87C]/40 bg-[#F2EFE8] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-[1440px]">

            {/* Section Heading */}
            <div className="mb-10 flex flex-col gap-5 border-b border-[#D2B87C]/50 pb-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                  Department Activities / Industrial Visits
                </span>

                <h2 className="font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  IV – Inker Robotics
                </h2>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#20235A]">
                <div className="flex items-center gap-2">
                  <CalendarDays
                    size={17}
                    strokeWidth={1.6}
                    className="text-[#A88B50]"
                  />
                  <span>7 February 2026</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin
                    size={17}
                    strokeWidth={1.6}
                    className="text-[#A88B50]"
                  />
                  <span>Thrissur, Kerala</span>
                </div>
              </div>
            </div>

            {/* Visit Information */}
            <div className="mb-10 grid gap-5 sm:grid-cols-3">
              <div className="flex items-center gap-4 border-l-2 border-[#D2B87C] bg-[#FAF7F2] px-5 py-4">
                <Building2
                  size={22}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#A88B50]"
                />
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                    Organisation
                  </span>
                  <p className="mt-1 text-sm font-semibold text-[#20235A]">
                    Inker Robotics
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-l-2 border-[#D2B87C] bg-[#FAF7F2] px-5 py-4">
                <Users
                  size={22}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#A88B50]"
                />
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                    Participants
                  </span>
                  <p className="mt-1 text-sm font-semibold text-[#20235A]">
                    Second-Year ECE Students
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-l-2 border-[#D2B87C] bg-[#FAF7F2] px-5 py-4">
                <CalendarDays
                  size={22}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#A88B50]"
                />
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                    Visit Date
                  </span>
                  <p className="mt-1 text-sm font-semibold text-[#20235A]">
                    7 February 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="mb-12 grid gap-8 lg:grid-cols-[0.35fr_1fr] lg:gap-14">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A88B50]">
                  01 / Overview
                </span>

                <h3 className="mt-3 font-serif text-2xl leading-snug text-[#20235A] sm:text-3xl">
                  Bridging the Gap Between Theory and Practice
                </h3>
              </div>

              <div className="space-y-5 text-sm leading-8 text-[#514C45] sm:text-[15px]">
                <p>
                  The Department of Electronics and Communication Engineering (ECE) of Nehru College of Engineering and Research Centre, Pampady, organized an industrial visit for the second-year ECE students to Inker Robotics, Thrissur, on 7th February 2026.
                </p>

                <p>
                  The core objective of this visit was to give students practical insights into robotics and emerging futuristic technologies, which would enable them to connect their theoretical knowledge with real-world applications. By participating in such visits, students are better prepared to face the demands of a competitive industry, while also developing a deeper understanding of the scope and potential of their field of study.
                </p>
              </div>
            </div>

            {/* Company Introduction */}
            <div className="mb-12 border-t border-[#D2B87C]/40 pt-10">
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A88B50]">
                  02 / Company Introduction
                </span>

                <h3 className="mt-3 font-serif text-2xl text-[#20235A] sm:text-3xl">
                  Discovering Innovation at Inker Robotics
                </h3>
              </div>

              <div className=" space-y-5 text-sm leading-8 text-[#514C45] sm:text-[15px]">
                <p>
                  The program commenced with a warm and cordial welcome extended by the Inker Robotics team, who gave students a comprehensive overview of the organization. They introduced the company’s vision, mission, and core areas of focus, emphasizing their efforts to promote innovation in robotics.
                </p>

                <p>
                  The team also presented several of their completed projects that have contributed to industrial and domestic solutions in automation and robotics. The students were also introduced to their upcoming venture, “RoboPark,” an ambitious initiative aimed at creating a platform for showcasing innovative robotic solutions to the public.
                </p>

                <p>
                  This session gave students a broader perspective on how startups and technology-driven companies like Inker Robotics are shaping the future of robotics.

                </p>
              </div>
            </div>

            {/* Hands-on Session */}
            <div className="mb-12 border-t border-[#D2B87C]/40 pt-10">
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A88B50]">
                  03 / Technical Exposure
                </span>

                <h3 className="mt-3 font-serif text-2xl text-[#20235A] sm:text-3xl">
                  Exploring Advanced Robotic Technologies
                </h3>
              </div>

              <div className=" space-y-5 text-sm leading-8 text-[#514C45] sm:text-[15px]">
                <p>
                  The most engaging part of the visit was the hands-on session, where students had the rare opportunity to directly interact with advanced robotic technologies. The Inker Robotics team conducted live demonstrations of cutting-edge systems such as robotic arms, drones, virtual reality (VR) systems, 3D printing machines.
                </p>

                <p>
                  Each segment was carefully explained, with experts describing the working principles, design aspects, and real-world applications of the machines. For example, the robotic arms showcased applications in industrial automation, while drones demonstrated their potential in surveillance, logistics, and research applications.

                </p>

                <p>
                  Similarly, the VR systems and 3D printing machines highlighted the role of immersive technologies and rapid prototyping in engineering and product design. The inclusion of various robots added a unique dimension, illustrating how robotics is also entering the domestic and hospitality sectors.
                </p>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="mb-12 border-t border-[#D2B87C]/40 pt-10">
              <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A88B50]">
                    Visit Highlights / Gallery
                  </span>

                  <h3 className="mt-3 font-serif text-2xl text-[#20235A] sm:text-3xl">
                    Moments from the Visit
                  </h3>
                </div>

                <p className="text-xs text-[#77736A]">
                  Select an image to view it in full size
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {inkerImages.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setSelectedInkerImage(index)}
                    aria-label={`View ${image.caption}`}
                    className="group relative aspect-[4/3] w-full overflow-hidden border border-[#D2B87C]/35 bg-[#FAF7F2] text-left"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/80 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="absolute inset-x-0 bottom-0 z-10 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                        Image 0{index + 1}
                      </p>

                      <p className="mt-1 text-sm font-medium text-white">
                        {image.caption}
                      </p>
                    </div>

                    <div className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center border border-white/50 bg-[#20235A]/60 text-white opacity-0 transition-opacity group-hover:opacity-100">
                      <Maximize2 className="h-4 w-4" />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-1 bg-[#D2B87C]" />
                  </button>
                ))}
              </div>
            </div>

            {/* Student Feedback */}
            <div className="mb-12 border-t border-[#D2B87C]/40 pt-10">
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A88B50]">
                  04 / Student Experience
                </span>

                <h3 className="mt-3 font-serif text-2xl text-[#20235A] sm:text-3xl">
                  Learning Beyond the Classroom
                </h3>
              </div>

              <div className=" space-y-5 text-sm leading-8 text-[#514C45] sm:text-[15px]">
                <p>
                  The program concluded with a feedback session conducted by the S4 students, providing constructive insights into their experience. During this session, students expressed their views on the knowledge they had gained, highlighting the practical relevance of the demonstrations and the opportunity to witness firsthand how robotics can transform industries and daily life. Many students noted that the visit helped them understand the interdisciplinary nature of robotics, as it integrates electronics, mechanical systems, computer programming, and artificial intelligence.
                </p>


              </div>
            </div>

            {/* Conclusion and Faculty Guidance */}
            <div className="border-t border-[#D2B87C]/40 pt-10">
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A88B50]">
                  05 / Outcome & Acknowledgement
                </span>

                <h3 className="mt-3 font-serif text-2xl text-[#20235A] sm:text-3xl">
                  An Inspiring Step Towards Future Technologies
                </h3>
              </div>

              <div className=" space-y-5 text-sm leading-8 text-[#514C45] sm:text-[15px]">
                <p>
                  The industrial visit to Inker Robotics, Thrissur, proved to be a valuable learning experience for all participants. The visit was successfully organized under the guidance of Prof. & HOD of Dept. Dr. Mredhula L, Asst. Prof. Jisha K V, Asst. Prof. Nithin Joe, and Asst. Prof. Anooja B, whose efforts ensured smooth coordination and maximum benefit for the students.
                </p>

                <p>
                  By bridging the gap between classroom learning and industrial practices, the visit not only enhanced student’s technical knowledge but also ignited their interest in exploring innovative solutions within the domain of robotics.
                </p>

                <p>
                  Overall, this experience has left a lasting impression on the students, motivating them to keep pace with emerging technologies and preparing them for future challenges in their careers.
                </p>
              </div>

              {/* Faculty Guidance */}
              <div className="mt-8 border-l-2 border-[#D2B87C] bg-[#FAF7F2] px-6 py-5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                  Faculty Coordinators
                </span>

                <p className="mt-3 text-sm leading-7 text-[#20235A]">
                  Prof. & HOD Dr. Mredhula L
                  <span className="mx-2 text-[#D2B87C]">/</span>
                  Asst. Prof. Jisha K V
                  <span className="mx-2 text-[#D2B87C]">/</span>
                  Asst. Prof. Nithin Joe
                  <span className="mx-2 text-[#D2B87C]">/</span>
                  Asst. Prof. Anooja B
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Inker Robotics Image Lightbox */}
        {selectedInkerImage !== null && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#11152B]/95 p-4 sm:p-8"
            onClick={() => setSelectedInkerImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Inker Robotics image gallery"
          >
            <button
              type="button"
              onClick={() => setSelectedInkerImage(null)}
              aria-label="Close image viewer"
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white/10"
            >
              <X size={22} />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousInkerImage();
              }}
              aria-label="Previous image"
              className="absolute left-3 z-20 flex h-11 w-11 items-center justify-center border border-white/30 bg-[#20235A]/60 text-white transition-colors hover:bg-[#20235A] sm:left-8"
            >
              <ChevronLeft size={25} />
            </button>

            <div
              className="relative flex h-full max-h-[80vh] w-full max-w-5xl flex-col items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-[65vh] w-full">
                <Image
                  src={inkerImages[selectedInkerImage].src}
                  alt={inkerImages[selectedInkerImage].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-5 text-center">
                <p className="text-sm font-medium text-white">
                  {inkerImages[selectedInkerImage].caption}
                </p>

                <p className="mt-2 text-xs tracking-[0.15em] text-[#D2B87C]">
                  {String(selectedInkerImage + 1).padStart(2, "0")} /{" "}
                  {String(inkerImages.length).padStart(2, "0")}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNextInkerImage();
              }}
              aria-label="Next image"
              className="absolute right-3 z-20 flex h-11 w-11 items-center justify-center border border-white/30 bg-[#20235A]/60 text-white transition-colors hover:bg-[#20235A] sm:right-8"
            >
              <ChevronRight size={25} />
            </button>
          </div>
        )}

        {/* INKER ROBOTICS – INDUSTRIAL VISIT */}
        <section className="border-t border-[#D2B87C]/40 bg-[#F2EFE8] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-[1440px]">

            {/* Section Heading */}
            <div className="mb-10 flex flex-col gap-5 border-b border-[#D2B87C]/50 pb-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                  Department Activities / Industrial Visits
                </span>

                <h2 className="font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                  Industrial Visit – Inker Robotics
                </h2>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#20235A]">
                <div className="flex items-center gap-2">
                  <CalendarDays
                    size={17}
                    strokeWidth={1.6}
                    className="text-[#A88B50]"
                  />
                  <span>7 February 2026</span>
                </div>

                <div className="flex items-center gap-2">
                  <Users
                    size={17}
                    strokeWidth={1.6}
                    className="text-[#A88B50]"
                  />
                  <span>S4 ECE Students</span>
                </div>
              </div>
            </div>

            {/* Visit Information */}
            <div className="mb-12 grid gap-5 sm:grid-cols-2">
              <div className="flex items-center gap-4 border-l-2 border-[#D2B87C] bg-[#FAF7F2] px-5 py-5">
                <Building2
                  size={24}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#A88B50]"
                />
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                    Organisation
                  </span>
                  <p className="mt-1 text-sm font-semibold text-[#20235A]">
                    Inker Robotics
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-l-2 border-[#D2B87C] bg-[#FAF7F2] px-5 py-5">
                <CalendarDays
                  size={24}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#A88B50]"
                />
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                    Visit Date
                  </span>
                  <p className="mt-1 text-sm font-semibold text-[#20235A]">
                    7 February 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="grid gap-8 lg:grid-cols-[0.4fr_1fr] lg:gap-14">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A88B50]">
                  01 / Overview
                </span>

                <h3 className="mt-3 font-serif text-2xl leading-snug text-[#20235A] sm:text-3xl lg:text-4xl">
                  Exploring the Future of Robotics and Emerging Technologies
                </h3>

                <div className="mt-6 h-[2px] w-16 bg-[#D2B87C]" />
              </div>

              <div className="space-y-5 text-sm leading-8 text-[#514C45] sm:text-[15px]">
                <p>
                  The Department of Electronics and Communication Engineering (ECE)
                  at Nehru College of Engineering and Research Centre organized an
                  industrial visit to Inker Robotics on 7th February 2026 for S4
                  students, offering them valuable exposure to real-world applications
                  of robotics and emerging technologies.
                </p>

                <p>
                  During the visit, students gained insights into innovative projects,
                  advanced robotic systems, drones, virtual reality platforms, and
                  3D printing technologies through expert-led demonstrations and
                  interactive sessions.
                </p>

                <p>
                  The experience effectively bridged the gap between theoretical
                  learning and industrial practice, enhancing students’ technical
                  knowledge, practical understanding, and enthusiasm for innovation
                  in automation and robotics.
                </p>
              </div>
            </div>

            {/* Technology Highlights */}
            {/* <div className="mt-14 border-t border-[#D2B87C]/40 pt-10">
              <div className="mb-7">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A88B50]">
                  02 / Technology Exposure
                </span>

                <h3 className="mt-3 font-serif text-2xl text-[#20235A] sm:text-3xl">
                  A Glimpse into Emerging Technologies
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    number: "01",
                    title: "Robotic Systems",
                    description:
                      "Understanding advanced robotic systems and their practical applications.",
                    icon: Cpu,
                  },
                  {
                    number: "02",
                    title: "Drone Technology",
                    description:
                      "Exploring drone technologies through expert-led demonstrations.",
                    icon: Sparkles,
                  },
                  {
                    number: "03",
                    title: "Virtual Reality",
                    description:
                      "Experiencing virtual reality platforms and their emerging possibilities.",
                    icon: Building2,
                  },
                  {
                    number: "04",
                    title: "3D Printing",
                    description:
                      "Learning about 3D printing technologies and their applications.",
                    icon: Cpu,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.number}
                      className="group border border-[#D2B87C]/40 bg-[#FAF7F2] p-6 transition-colors duration-300 hover:border-[#A88B50]"
                    >
                      <div className="mb-7 flex items-center justify-between">
                        <span className="text-xs font-semibold tracking-[0.18em] text-[#A88B50]">
                          {item.number}
                        </span>

                        <Icon
                          size={23}
                          strokeWidth={1.5}
                          className="text-[#A88B50] transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      <h4 className="font-serif text-xl text-[#20235A]">
                        {item.title}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-[#66636A]">
                        {item.description}
                      </p>

                      <div className="mt-6 h-[2px] w-8 bg-[#D2B87C] transition-all duration-300 group-hover:w-14" />
                    </div>
                  );
                })}
              </div>
            </div> */}

          </div>
        </section>

        {/* INKER ROBOTICS – IMAGE GALLERY */}
        <section className="bg-[#FAF7F2] px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
          <div className="mx-auto max-w-[1440px]">

            <div className="mb-8 flex items-end justify-between">
              <div>
                {/* <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A88B50]">
                  Industrial Visit / Gallery
                </span> */}
                <h3 className="mt-3 font-serif text-2xl text-[#20235A] sm:text-3xl">
                Tech Talks
                </h3>
              </div>

              <span className="hidden text-xs tracking-widest text-[#8F7746] sm:block">
                04 PHOTOGRAPHS
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "/images/dpt/electronics-and-communication-engineering/activities/activities/Tech_Talk1.webp",
                "/images/dpt/electronics-and-communication-engineering/activities/activities/Tech_Talk2.webp",
                "/images/dpt/electronics-and-communication-engineering/activities/activities/Tech_Talk3.webp",
                "/images/dpt/electronics-and-communication-engineering/activities/activities/Tech_Talk4.webp",
              ].map((src, index) => (
                <div
                  key={src}
                  className="group relative aspect-[4/5] overflow-hidden bg-[#F0ECE3]"
                >
                  <Image
                    src={src}
                    alt={`ECE students industrial visit to Inker Robotics - ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain "
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#20235A]/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <span className="absolute bottom-4 left-4 text-xs font-medium tracking-widest text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    0{index + 1} / 04
                  </span>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <FooterSection />
    </>
  );
}
