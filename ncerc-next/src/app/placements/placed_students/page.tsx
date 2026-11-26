"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    ChevronRight,
    GraduationCap,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const placementBatches = [
    {
        id: "01",
        year: "2025",
        title: "2025 PLACED STUDENTS",
        category: "B.Tech",
        image: "https://ncerc.ac.in/images/placed-student/NCERC-%20BTECH-2025.jpg",
    },
    {
        id: "02",
        year: "2025",
        title: "2025 MBA PLACED STUDENTS",
        category: "MBA",
        image: "https://ncerc.ac.in/images/placed-student/ncerc-mba-batch-2025.jpeg",
    },
    {
        id: "03",
        year: "2024",
        title: "2024 PLACED STUDENTS",
        category: "B.Tech",
        image: "https://ncerc.ac.in/images/placed-student/2024%20PASSING%20OUT.jpg",
    },
    {
        id: "04",
        year: "2023",
        title: "2023 MBA PLACED STUDENTS",
        category: "MBA",
        image: "https://ncerc.ac.in/images/placed-student/2023%20MBA%20Placement%20Status.jpg",
    },
    {
        id: "05",
        year: "2023",
        title: "2023 PLACED STUDENTS",
        category: "B.Tech",
        image: "https://ncerc.ac.in/images/placed-student/2023.jpg",
    },
    {
        id: "06",
        year: "2022",
        title: "2022 PLACED STUDENTS",
        category: "B.Tech",
        image: "https://ncerc.ac.in/images/placed-student/2022.jpg",
    },
];

const Page = () => {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#faf7f2] text-[#20235A]">

                {/* =====================================================
                    HERO
                ===================================================== */}
                <section className="border-b border-[#20235A]/10 bg-[#faf7f2]">

                    <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 lg:px-14 lg:py-18">

                        {/* Breadcrumb */}
                        <div className="mb-10 flex items-center gap-2 text-xs text-[#20235A]/45">

                            <Link
                                href="/"
                                className="transition-colors hover:text-[#D2B87C]"
                            >
                                Home
                            </Link>

                            <ChevronRight size={13} />

                            <span className="text-[#20235A]/70">
                                Placed Students
                            </span>

                        </div>

                        <div className="grid gap-10 lg:grid-cols-[1fr_0.5fr] lg:items-end">

                            {/* Heading */}
                            <div>

                                <div className="mb-5 flex items-center gap-3">

                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#20235A]/50">
                                        Student Achievements
                                    </span>

                                </div>

                                <h1 className="max-w-3xl font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                                    Our students,
                                    <span className="text-[#D2B87C]">
                                        {" "}their success.
                                    </span>
                                </h1>

                            </div>

                            {/* Description */}
                            <div className="lg:border-l lg:border-[#20235A]/10 lg:pl-8">

                                <p className="text-sm leading-7 text-[#20235A]/55">
                                    Celebrating the achievements of NCERC
                                    students who have successfully progressed
                                    into professional careers through campus
                                    placements.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    INTRO / STATS
                ===================================================== */}
                <section className="border-b border-[#20235A]/10 bg-white">

                    <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10 lg:px-14">

                        <div className="grid gap-8 sm:grid-cols-3">

                            <div className="border-l-2 border-[#D2B87C] pl-5">
                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#20235A]/40">
                                    Placement Archive
                                </span>

                                <p className="mt-2 font-serif text-3xl">
                                    2022 — 2025
                                </p>
                            </div>

                            <div className="border-l border-[#20235A]/10 pl-5">
                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#20235A]/40">
                                    Student Batches
                                </span>

                                <p className="mt-2 font-serif text-3xl">
                                    06
                                </p>
                            </div>

                            <div className="border-l border-[#20235A]/10 pl-5">
                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#20235A]/40">
                                    Academic Streams
                                </span>

                                <p className="mt-2 font-serif text-3xl">
                                    B.Tech & MBA
                                </p>
                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    PLACED STUDENTS
                ===================================================== */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                    {/* Section Heading */}
                    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                        <div>

                            <div className="mb-3 flex items-center gap-2">

                                <GraduationCap
                                    size={16}
                                    strokeWidth={1.5}
                                    className="text-[#D2B87C]"
                                />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#20235A]/45">
                                    Placement Archive
                                </span>

                            </div>

                            <h2 className="font-serif text-3xl sm:text-4xl">
                                Placed Students
                            </h2>

                        </div>

                        <p className="max-w-sm text-xs leading-6 text-[#20235A]/45">
                            Explore placement achievements across recent
                            graduating batches at NCERC.
                        </p>

                    </div>


                    {/* =================================================
                        CARDS
                    ================================================= */}
                    <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">

                        {placementBatches.map((batch) => (

                            <article
                                key={batch.id}
                                className="group"
                            >

                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#20235A]/5">

                                    <Image
                                        src={batch.image}
                                        alt={batch.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />

                                    {/* Subtle Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    {/* Number */}
                                    <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 font-serif text-xs text-[#20235A] shadow-sm">
                                        {batch.id}
                                    </span>

                                    {/* Year */}
                                    <span className="absolute right-4 top-4 rounded-full bg-[#20235A]/85 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white">
                                        {batch.year}
                                    </span>

                                </div>


                                {/* Content */}
                                <div className="pt-4">

                                    <div className="mb-2 flex items-center justify-between">

                                        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                            {batch.category}
                                        </span>

                                        <span className="text-[11px] text-[#20235A]/35">
                                            {batch.year}
                                        </span>

                                    </div>

                                    <h3 className="font-serif text-xl leading-snug text-[#20235A] transition-colors duration-300 group-hover:text-[#D2B87C]">
                                        {batch.title}
                                    </h3>

                                    <div className="mt-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#20235A]/40 transition-colors duration-300 group-hover:text-[#20235A]">

                                        View batch

                                        <ArrowUpRight
                                            size={12}
                                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        />

                                    </div>

                                    <div className="mt-4 h-px w-10 bg-[#20235A]/15 transition-all duration-300 group-hover:w-16 group-hover:bg-[#D2B87C]" />

                                </div>

                            </article>

                        ))}

                    </div>

                </section>


                {/* =====================================================
                    CTA
                ===================================================== */}
                <section className="border-t border-[#20235A]/10 bg-white">

                    <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 lg:px-14 lg:py-16">

                        <div className="flex flex-col gap-6 rounded-2xl bg-[#20235A] px-7 py-9 sm:px-10 lg:flex-row lg:items-center lg:justify-between">

                            <div>

                                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    NCERC Placements
                                </span>

                                <h2 className="max-w-xl font-serif text-2xl leading-tight text-white sm:text-3xl">
                                    Building careers beyond the classroom.
                                </h2>

                            </div>

                            <Link
                                href="/placements"
                                className="group flex w-fit items-center gap-3 rounded-full border border-white/20 px-5 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
                            >
                                Placement Status

                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />

                            </Link>

                        </div>

                    </div>

                </section>

            </main>

            <FooterSection />
        </>
    );
};

export default Page;