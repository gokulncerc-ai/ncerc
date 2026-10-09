"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    CalendarDays,
    Check,
    ChevronRight,
    Clock3,
    ExternalLink,
    IndianRupee,
    Laptop,
    MapPin,
    Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#faf7f2] text-[#20235A]">

                {/* =====================================================
                    HERO
                ===================================================== */}
                <section className="border-b border-[#20235A]/10 bg-[#faf7f2]">

                    <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">

                        {/* Breadcrumb */}
                        <div className="mb-12 flex items-center gap-2 text-xs text-[#20235A]/45">

                            <Link
                                href="/"
                                className="transition-colors hover:text-[#D2B87C]"
                            >
                                Home
                            </Link>

                            <ChevronRight size={13} />

                            <Link
                                href="/news-events"
                                className="transition-colors hover:text-[#D2B87C]"
                            >
                                News & Events
                            </Link>

                            <ChevronRight size={13} />

                            <span className="text-[#20235A]/70">
                                Upcoming Events
                            </span>

                        </div>


                        <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center">

                            {/* Hero Content */}
                            <div>

                                <div className="mb-5 flex items-center gap-3">

                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#20235A]/50">
                                        Upcoming Event
                                    </span>

                                </div>

                                <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">

                                    Def-Space Autumn
                                    <span className="block text-[#D2B87C]">
                                        Internship 2026
                                    </span>

                                </h1>

                                <p className="mt-6 max-w-2xl text-sm leading-7 text-[#20235A]/55 sm:text-base">
                                    A 6-week intensive online programme designed
                                    to provide practical exposure to Space
                                    Science, Defence Technology and emerging
                                    technologies.
                                </p>


                                {/* Quick Details */}
                                <div className="mt-8 flex flex-wrap gap-3">

                                    <span className="inline-flex items-center gap-2 rounded-full border border-[#20235A]/10 bg-white px-4 py-2 text-xs text-[#20235A]/65">
                                        <CalendarDays
                                            size={14}
                                            className="text-[#D2B87C]"
                                        />
                                        9 Oct – 21 Nov 2026
                                    </span>

                                    <span className="inline-flex items-center gap-2 rounded-full border border-[#20235A]/10 bg-white px-4 py-2 text-xs text-[#20235A]/65">
                                        <Laptop
                                            size={14}
                                            className="text-[#D2B87C]"
                                        />
                                        Fully Online
                                    </span>

                                    <span className="inline-flex items-center gap-2 rounded-full border border-[#20235A]/10 bg-white px-4 py-2 text-xs text-[#20235A]/65">
                                        <Users
                                            size={14}
                                            className="text-[#D2B87C]"
                                        />
                                        750 Seats
                                    </span>

                                </div>

                            </div>


                            {/* Poster */}
                            <div className="relative">

                                <div className="overflow-hidden rounded-2xl border border-[#20235A]/10 bg-white p-2 shadow-[0_20px_60px_rgba(32,35,90,0.08)]">

                                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl">

                                        <Image
                                            src="https://ncerc.ac.in/images/upcoming-events/def-space-autumn-internship-2026-flyer.webp"
                                            alt="Def-Space Autumn Internship 2026"
                                            fill
                                            priority
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 420px"
                                        />

                                    </div>

                                </div>

                                <div className="absolute -bottom-4 -left-4 hidden rounded-xl bg-[#20235A] px-5 py-4 shadow-xl sm:block">

                                    <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Registration
                                    </span>

                                    <span className="mt-1 block font-serif text-lg text-white">
                                        Open Now
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    EVENT OVERVIEW
                ===================================================== */}
                <section className="border-b border-[#20235A]/10 bg-white">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

                            {/* Section Heading */}
                            <div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Programme Overview
                                </span>

                                <h2 className="mt-4 max-w-md font-serif text-3xl leading-tight sm:text-4xl">
                                    Learn, build and explore the future of
                                    emerging technology.
                                </h2>

                            </div>


                            {/* Description */}
                            <div>

                                <p className="text-sm leading-7 text-[#20235A]/55 sm:text-base">
                                    The Bharat Space Education Research Centre
                                    (BSERC) is inviting applications for the
                                    Def-Space Autumn Internship 2026. The
                                    programme is designed to give students and
                                    learners practical exposure to emerging
                                    technologies through technical sessions,
                                    expert mentorship, project-based learning
                                    and final evaluation.
                                </p>

                                <p className="mt-5 text-sm leading-7 text-[#20235A]/55 sm:text-base">
                                    The programme is open to undergraduate and
                                    postgraduate students from recognised
                                    Government and private institutions.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    EVENT DETAILS
                ===================================================== */}
                <section className="bg-[#faf7f2]">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                        <div className="mb-10">

                            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                At a Glance
                            </span>

                            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
                                Programme Details
                            </h2>

                        </div>


                        <div className="grid gap-px overflow-hidden rounded-2xl border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-4">

                            {/* Duration */}
                            <div className="bg-white p-7">

                                <Clock3
                                    size={20}
                                    strokeWidth={1.5}
                                    className="text-[#D2B87C]"
                                />

                                <span className="mt-6 block text-[10px] uppercase tracking-[0.18em] text-[#20235A]/40">
                                    Duration
                                </span>

                                <h3 className="mt-2 font-serif text-xl">
                                    6 Weeks
                                </h3>

                            </div>


                            {/* Mode */}
                            <div className="bg-white p-7">

                                <Laptop
                                    size={20}
                                    strokeWidth={1.5}
                                    className="text-[#D2B87C]"
                                />

                                <span className="mt-6 block text-[10px] uppercase tracking-[0.18em] text-[#20235A]/40">
                                    Mode
                                </span>

                                <h3 className="mt-2 font-serif text-xl">
                                    Fully Online
                                </h3>

                            </div>


                            {/* Eligibility */}
                            <div className="bg-white p-7">

                                <Users
                                    size={20}
                                    strokeWidth={1.5}
                                    className="text-[#D2B87C]"
                                />

                                <span className="mt-6 block text-[10px] uppercase tracking-[0.18em] text-[#20235A]/40">
                                    Eligibility
                                </span>

                                <h3 className="mt-2 font-serif text-xl">
                                    Open to Everyone
                                </h3>

                            </div>


                            {/* Seats */}
                            <div className="bg-white p-7">

                                <Users
                                    size={20}
                                    strokeWidth={1.5}
                                    className="text-[#D2B87C]"
                                />

                                <span className="mt-6 block text-[10px] uppercase tracking-[0.18em] text-[#20235A]/40">
                                    Available Seats
                                </span>

                                <h3 className="mt-2 font-serif text-xl">
                                    750
                                </h3>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CORE DOMAINS
                ===================================================== */}
                <section className="border-y border-[#20235A]/10 bg-white">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">

                            <div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Core Domains
                                </span>

                                <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                                    Technologies shaping tomorrow.
                                </h2>

                            </div>


                            <div className="grid gap-px overflow-hidden rounded-2xl border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2">

                                {[
                                    "Generative AI",
                                    "Advanced Drone Technology",
                                    "Helicopter Technology",
                                    "Aircraft Design Technology",
                                ].map((domain, index) => (

                                    <div
                                        key={domain}
                                        className="flex items-center gap-4 bg-[#faf7f2] p-6"
                                    >

                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#20235A] text-[10px] text-white">
                                            0{index + 1}
                                        </span>

                                        <span className="text-sm font-medium text-[#20235A]/75">
                                            {domain}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    PROGRAMME JOURNEY
                ===================================================== */}
                <section className="bg-[#faf7f2]">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                        <div className="mb-12">

                            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                Programme Journey
                            </span>

                            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
                                Six weeks of learning and application.
                            </h2>

                        </div>


                        <div className="grid gap-6 md:grid-cols-3">

                            {/* Phase 01 */}
                            <div className="rounded-2xl border border-[#20235A]/10 bg-white p-7">

                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Weeks 01 – 03
                                </span>

                                <h3 className="mt-4 font-serif text-2xl">
                                    Core Technology
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20235A]/50">
                                    Technical sessions covering the core
                                    technology domains and emerging concepts.
                                </p>

                            </div>


                            {/* Phase 02 */}
                            <div className="rounded-2xl border border-[#20235A]/10 bg-white p-7">

                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Weeks 04 – 05
                                </span>

                                <h3 className="mt-4 font-serif text-2xl">
                                    Mentorship & Projects
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20235A]/50">
                                    Mentor interaction, project development and
                                    practical application of the concepts
                                    covered.
                                </p>

                            </div>


                            {/* Phase 03 */}
                            <div className="rounded-2xl border border-[#20235A]/10 bg-white p-7">

                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Week 06
                                </span>

                                <h3 className="mt-4 font-serif text-2xl">
                                    Evaluation
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#20235A]/50">
                                    Final project submission and evaluation,
                                    followed by recognition of participant
                                    performance.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    LEARNING + CERTIFICATE
                ===================================================== */}
                <section className="bg-white">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                        <div className="grid gap-8 lg:grid-cols-2">

                            {/* Learning */}
                            <div className="rounded-2xl bg-[#faf7f2] p-8 sm:p-10">

                                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    Learning Experience
                                </span>

                                <h2 className="mt-4 font-serif text-3xl">
                                    What participants receive
                                </h2>

                                <div className="mt-7 space-y-4">

                                    {[
                                        "Technical sessions",
                                        "Expert mentorship",
                                        "Project-based learning",
                                        "Final evaluation",
                                    ].map((item) => (

                                        <div
                                            key={item}
                                            className="flex items-center gap-3"
                                        >

                                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#20235A] text-white">
                                                <Check size={13} />
                                            </span>

                                            <span className="text-sm text-[#20235A]/65">
                                                {item}
                                            </span>

                                        </div>

                                    ))}

                                </div>

                            </div>


                            {/* Certificate */}
                            <div className="rounded-2xl bg-[#20235A] p-8 sm:p-10">

                                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    Certification
                                </span>

                                <h2 className="mt-4 font-serif text-3xl text-white">
                                    Recognition for your journey.
                                </h2>

                                <p className="mt-5 text-sm leading-7 text-white/50">
                                    Participants will receive a Certificate of
                                    Participation, with a Merit Certificate
                                    awarded based on performance.
                                </p>

                                <div className="mt-8 border-t border-white/10 pt-6">

                                    <span className="text-xs text-white/40">
                                        Certificate
                                    </span>

                                    <span className="mt-1 block text-sm text-[#D2B87C]">
                                        Participation + Merit
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CAREER EXPOSURE
                ===================================================== */}
                <section className="border-y border-[#20235A]/10 bg-[#faf7f2]">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

                            <div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Career Exposure
                                </span>

                                <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                                    Explore where emerging technologies can
                                    take you.
                                </h2>

                            </div>


                            <div>

                                <p className="text-sm leading-7 text-[#20235A]/55 sm:text-base">
                                    Participants will gain exposure to career
                                    pathways across organisations and sectors
                                    including:
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">

                                    {[
                                        "ISRO",
                                        "DRDO",
                                        "HAL",
                                        "Private Space Enterprises",
                                        "Defence PSUs",
                                        "UAVs",
                                        "AI-driven Systems",
                                    ].map((item) => (

                                        <span
                                            key={item}
                                            className="rounded-full border border-[#20235A]/10 bg-white px-4 py-2 text-xs text-[#20235A]/65"
                                        >
                                            {item}
                                        </span>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    IMPORTANT DATES
                ===================================================== */}
                <section className="bg-white">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                        <div className="mb-10">

                            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                Important Dates
                            </span>

                            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
                                Mark your calendar.
                            </h2>

                        </div>


                        <div className="grid gap-px overflow-hidden rounded-2xl border border-[#20235A]/10 bg-[#20235A]/10 md:grid-cols-3">

                            <div className="bg-[#faf7f2] p-7">

                                <span className="text-[10px] uppercase tracking-[0.18em] text-[#20235A]/40">
                                    Registration
                                </span>

                                <p className="mt-3 font-serif text-xl">
                                    7 Sep – 30 Sep 2026
                                </p>

                            </div>


                            <div className="bg-[#faf7f2] p-7">

                                <span className="text-[10px] uppercase tracking-[0.18em] text-[#20235A]/40">
                                    Internship Period
                                </span>

                                <p className="mt-3 font-serif text-xl">
                                    9 Oct – 21 Nov 2026
                                </p>

                            </div>


                            <div className="bg-[#faf7f2] p-7">

                                <span className="text-[10px] uppercase tracking-[0.18em] text-[#20235A]/40">
                                    Registration Fee
                                </span>

                                <p className="mt-3 flex items-center gap-1 font-serif text-xl">
                                    <IndianRupee size={18} />
                                    950
                                </p>

                                <span className="mt-1 block text-xs text-[#20235A]/40">
                                    Indian participants
                                </span>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    REGISTRATION CTA
                ===================================================== */}
                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

                            <div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Registrations Open
                                </span>

                                <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                                    Take the next step into space,
                                    defence and emerging technology.
                                </h2>

                                <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">
                                    Applications for the Def-Space Autumn
                                    Internship 2026 are now open.
                                </p>

                            </div>


                            <a
                                href="https://internship.bserc.org/?utm_source=chatgpt.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#D2B87C] px-6 py-3.5 text-xs font-semibold text-[#20235A] transition-all duration-300 hover:bg-white"
                            >
                                Apply for Internship

                                <ExternalLink
                                    size={15}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </a>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    FOOT NOTE
                ===================================================== */}
                <section className="bg-[#faf7f2]">

                    <div className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10 lg:px-14">

                        <div className="flex flex-col gap-3 text-xs text-[#20235A]/35 sm:flex-row sm:items-center sm:justify-between">

                            <span>
                                Def-Space Autumn Internship 2026
                            </span>

                            <span>
                                Bharat Space Education Research Centre
                            </span>

                        </div>

                    </div>

                </section>

            </main>

            <FooterSection />
        </>
    );
};

export default page;