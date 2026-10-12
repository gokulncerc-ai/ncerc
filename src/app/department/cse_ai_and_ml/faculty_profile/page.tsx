"use client";

import React from "react";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    BriefcaseBusiness,
    ChevronRight,
    GraduationCap,
    Microscope,
    Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNav from ".././DepartmentNav/page";


const BASE_PATH = "/departments/ug/cse_ai_and_ml";

// =========================================================
// FACULTY DATA
// =========================================================

const facultyMembers = [
    {
        id: "01",
        name: "Ms Sajitha AS",
        designation: "HOD",
        role: "Head of Department",
    },
    {
        id: "02",
        name: "Dr. Anju Asokan",
        designation: "Assistant Professor",
        role: "Teaching Faculty",
    },
    {
        id: "03",
        name: "Mr Santhosh B",
        designation: "Assistant Professor",
        role: "Teaching Faculty",
    },
    {
        id: "04",
        name: "Ms Sreeji S",
        designation: "Assistant Professor",
        role: "Teaching Faculty",
    },
    {
        id: "05",
        name: "Mr Vipin K M",
        designation: "Assistant Professor",
        role: "Teaching Faculty",
    },
    {
        id: "06",
        name: "Ms Leya MS",
        designation: "Assistant Professor",
        role: "Teaching Faculty",
    },
];

const labFaculty = [
    {
        id: "01",
        name: "Mr Sajesh D",
        designation: "System Admin",
    },
    {
        id: "02",
        name: "Mr Vimoj MV",
        designation: "Lab Assistant",
    },
    {
        id: "03",
        name: "Ms Monica",
        designation: "Lab Assistant",
    },
    {
        id: "04",
        name: "Mr Ajith P",
        designation: "Lab Assistant",
    },
    {
        id: "05",
        name: "Ms Ranjusha TR",
        designation: "Lab Assistant",
    },
    {
        id: "06",
        name: "Mr Sujith KP",
        designation: "Lab Assistant",
    },
    {
        id: "07",
        name: "Ms Rohitha KR",
        designation: "Lab Assistant",
    },
    {
        id: "08",
        name: "Shakeena P S",
        designation: "Lab Assistant",
    },
    {
        id: "09",
        name: "Mr. Devan M P",
        designation: "Lab Assistant",
    },
];

// =========================================================
// PAGE
// =========================================================

const FacultyProfilePage = () => {
    const hod = facultyMembers[0];
    const teachingFaculty = facultyMembers.slice(1);

    return (
        <>
            <SiteHeader />

            <main className="bg-[#faf7f2] text-[#1e1917]">
                {/* =====================================================
                    HERO
                ===================================================== */}
                <section className="relative overflow-hidden bg-[#20235A]">
                    <div className="absolute inset-0">
                        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-[#D2B87C]/20" />
                        <div className="absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full border border-[#D2B87C]/10" />
                        <div className="absolute bottom-[-220px] left-[-160px] h-[500px] w-[500px] rounded-full border border-white/5" />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
                        <div className="max-w-4xl">
                            <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                <span className="h-px w-10 bg-[#D2B87C]" />
                                Department • CSE & AI/ML
                            </div>

                            <h1 className="font-serif text-5xl font-medium leading-[0.95] tracking-[-0.035em] text-white sm:text-6xl lg:text-8xl">
                                Faculty
                                <span className="block text-[#D2B87C]">
                                    Profile
                                </span>
                            </h1>

                            <div className="mt-9 max-w-2xl border-l border-[#D2B87C]/50 pl-5 sm:pl-7">
                                <p className="text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                                    Meet the academic and technical team
                                    supporting teaching, learning,
                                    experimentation and innovation in Computer
                                    Science & Engineering with Artificial
                                    Intelligence and Machine Learning.
                                </p>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-3">
                                <a
                                    href="#faculty"
                                    className="group inline-flex items-center gap-3 bg-[#D2B87C] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
                                >
                                    Meet Our Faculty
                                    <ArrowRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </a>

                                <Link
                                    href={BASE_PATH}
                                    className="group inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5"
                                >
                                    Department Overview
                                    <ArrowUpRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative border-t border-white/10">
                        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
                            <div className="px-5 py-6 sm:px-8">
                                <p className="text-2xl font-semibold text-white">
                                    06
                                </p>
                                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/45">
                                    Faculty Members
                                </p>
                            </div>

                            <div className="px-5 py-6 sm:px-8">
                                <p className="text-2xl font-semibold text-white">
                                    01
                                </p>
                                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/45">
                                    HOD
                                </p>
                            </div>

                            <div className="px-5 py-6 sm:px-8">
                                <p className="text-2xl font-semibold text-white">
                                    09
                                </p>
                                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/45">
                                    Lab Faculty
                                </p>
                            </div>

                            <div className="px-5 py-6 sm:px-8">
                                <p className="text-2xl font-semibold text-white">
                                    15
                                </p>
                                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/45">
                                    Total Team
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <DepartmentNav />

                {/* =====================================================
                    INTRO
                ===================================================== */}
                <section className="border-b border-[#20235A]/10 bg-white">
                    <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f7746]">
                                    Academic Team
                                </p>

                                <h2 className="mt-4 max-w-md font-serif text-4xl font-medium leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    People behind the learning experience.
                                </h2>
                            </div>

                            <div className="max-w-3xl">
                                <p className="text-lg leading-8 text-[#1e1917]/70">
                                    The Department of Computer Science &
                                    Engineering with Artificial Intelligence
                                    and Machine Learning is supported by a
                                    dedicated team of faculty and laboratory
                                    professionals.
                                </p>

                                <p className="mt-6 text-sm leading-7 text-[#1e1917]/55">
                                    Our faculty members contribute to classroom
                                    teaching, practical learning, academic
                                    guidance and the broader learning
                                    environment of the department. The
                                    laboratory team supports students through
                                    hands-on sessions and day-to-day technical
                                    activities.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    FACULTY
                ===================================================== */}
                <section
                    id="faculty"
                    className="scroll-mt-20 bg-[#faf7f2] py-20 sm:py-24"
                >
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        {/* Section heading */}
                        <div className="flex flex-col justify-between gap-8 border-b border-[#20235A]/10 pb-10 md:flex-row md:items-end">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f7746]">
                                        01 / Teaching Faculty
                                    </span>
                                </div>

                                <h2 className="font-serif text-4xl font-medium tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-6xl">
                                    Faculty Profile
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-6 text-[#1e1917]/55 md:text-right">
                                Faculty members responsible for academic
                                instruction and student learning within the
                                department.
                            </p>
                        </div>

                        {/* HOD FEATURE */}
                        <div className="mt-12 overflow-hidden border border-[#20235A]/10 bg-[#20235A]">
                            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                                <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden bg-[#D2B87C] p-8 sm:p-10 lg:p-12">
                                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#20235A]/15" />
                                    <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full border border-[#20235A]/10" />

                                    <div className="relative">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#20235A]/20 bg-[#20235A] text-white">
                                            <GraduationCap size={27} />
                                        </div>
                                    </div>

                                    <div className="relative mt-12">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#20235A]/60">
                                            Head of Department
                                        </p>

                                        <p className="mt-3 font-serif text-3xl font-medium text-[#20235A] sm:text-4xl">
                                            {hod.name}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                                    <div>
                                        <div className="flex items-center gap-2 text-[#D2B87C]">
                                            <span className="h-1.5 w-1.5 rounded-full bg-[#D2B87C]" />
                                            <span className="text-[10px] font-bold uppercase tracking-[0.22em]">
                                                Department Leadership
                                            </span>
                                        </div>

                                        <h3 className="mt-5 max-w-lg font-serif text-3xl font-medium leading-tight text-white sm:text-4xl">
                                            Academic leadership and
                                            departmental guidance.
                                        </h3>

                                        <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
                                            The Head of Department provides
                                            academic leadership and coordinates
                                            the department&apos;s teaching and
                                            learning activities.
                                        </p>
                                    </div>

                                    <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                                            {hod.designation}
                                        </span>

                                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#D2B87C]">
                                            <ArrowUpRight size={15} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FACULTY CARDS */}
                        <div className="mt-10 grid gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2 lg:grid-cols-3">
                            {teachingFaculty.map((faculty) => (
                                <article
                                    key={faculty.id}
                                    className="group relative bg-white p-7 transition-all duration-300 hover:bg-[#20235A] sm:p-8"
                                >
                                    <div className="flex items-start justify-between">
                                        <span className="text-[10px] font-bold tracking-[0.2em] text-[#8f7746] transition-colors duration-300 group-hover:text-[#D2B87C]">
                                            {faculty.id}
                                        </span>

                                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#20235A]/10 text-[#20235A]/40 transition-all duration-300 group-hover:border-white/20 group-hover:text-[#D2B87C]">
                                            <ArrowUpRight size={15} />
                                        </span>
                                    </div>

                                    <div className="mt-16">
                                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#f2efe8] text-[#20235A] transition-all duration-300 group-hover:bg-white/10 group-hover:text-[#D2B87C]">
                                            <GraduationCap size={18} />
                                        </div>

                                        <h3 className="font-serif text-2xl font-medium text-[#20235A] transition-colors duration-300 group-hover:text-white">
                                            {faculty.name}
                                        </h3>

                                        <div className="mt-3 flex items-center gap-2">
                                            <span className="h-1 w-1 rounded-full bg-[#D2B87C]" />
                                            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8f7746] transition-colors duration-300 group-hover:text-white/55">
                                                {faculty.designation}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-8 border-t border-[#20235A]/10 pt-5 transition-colors duration-300 group-hover:border-white/10">
                                        <p className="text-xs text-[#1e1917]/45 transition-colors duration-300 group-hover:text-white/40">
                                            {faculty.role}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    FACULTY STATEMENT
                ===================================================== */}
                <section className="bg-white">
                    <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
                        <div className="grid overflow-hidden border border-[#20235A]/10 lg:grid-cols-[1fr_1.35fr]">
                            <div className="bg-[#f2efe8] p-8 sm:p-10 lg:p-14">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#20235A] text-[#D2B87C]">
                                    <Users size={22} />
                                </div>

                                <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.24em] text-[#8f7746]">
                                    A Collaborative Environment
                                </p>

                                <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl">
                                    Teaching meets practical learning.
                                </h2>
                            </div>

                            <div className="flex items-center p-8 sm:p-10 lg:p-14">
                                <div className="max-w-2xl">
                                    <p className="font-serif text-2xl leading-relaxed text-[#20235A] sm:text-3xl">
                                        &ldquo;A strong academic environment
                                        brings together faculty expertise,
                                        practical exposure and continuous
                                        student engagement.&rdquo;
                                    </p>

                                    <div className="mt-8 flex items-center gap-3">
                                        <span className="h-px w-10 bg-[#D2B87C]" />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8f7746]">
                                            CSE & AI/ML Department
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    LAB FACULTY
                ===================================================== */}
                <section
                    id="lab-faculty"
                    className="scroll-mt-20 bg-[#20235A] py-20 sm:py-24"
                >
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                            {/* Heading */}
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D2B87C]">
                                        02 / Technical Team
                                    </span>
                                </div>

                                <h2 className="font-serif text-4xl font-medium tracking-[-0.025em] text-white sm:text-5xl">
                                    Lab Faculty
                                </h2>

                                <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
                                    Our laboratory team supports practical
                                    sessions, technical infrastructure and
                                    hands-on learning across the department.
                                </p>

                                <div className="mt-10 flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D2B87C]/30 text-[#D2B87C]">
                                        <Microscope size={20} />
                                    </div>

                                    <div>
                                        <p className="text-xl font-semibold text-white">
                                            09
                                        </p>
                                        <p className="text-[9px] uppercase tracking-[0.18em] text-white/35">
                                            Technical Staff
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Lab faculty list */}
                            <div className="border-t border-white/10">
                                {labFaculty.map((member) => (
                                    <div
                                        key={member.id}
                                        className="group grid grid-cols-[40px_1fr_auto] items-center gap-4 border-b border-white/10 py-5 sm:grid-cols-[55px_1fr_auto] sm:gap-6"
                                    >
                                        <span className="text-[10px] font-bold tracking-[0.18em] text-white/25 transition-colors duration-300 group-hover:text-[#D2B87C]">
                                            {member.id}
                                        </span>

                                        <div>
                                            <h3 className="font-serif text-lg font-medium text-white transition-colors duration-300 group-hover:text-[#D2B87C] sm:text-xl">
                                                {member.name}
                                            </h3>

                                            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">
                                                {member.designation}
                                            </p>
                                        </div>

                                        <div className="hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 group-hover:border-[#D2B87C]/30 group-hover:text-[#D2B87C] sm:flex">
                                            <ChevronRight size={14} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    ROLE / SUPPORT SECTION
                ===================================================== */}
                <section className="bg-[#faf7f2] py-20 sm:py-24">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="border border-[#20235A]/10 bg-white p-7 sm:p-8">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f2efe8] text-[#20235A]">
                                    <GraduationCap size={19} />
                                </div>

                                <h3 className="mt-8 font-serif text-2xl font-medium text-[#20235A]">
                                    Academic Guidance
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[#1e1917]/50">
                                    Faculty support students through classroom
                                    learning, academic interaction and
                                    department activities.
                                </p>
                            </div>

                            <div className="border border-[#20235A]/10 bg-white p-7 sm:p-8">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f2efe8] text-[#20235A]">
                                    <Microscope size={19} />
                                </div>

                                <h3 className="mt-8 font-serif text-2xl font-medium text-[#20235A]">
                                    Practical Support
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[#1e1917]/50">
                                    Technical staff help maintain the
                                    laboratory environment and facilitate
                                    practical learning.
                                </p>
                            </div>

                            <div className="border border-[#20235A]/10 bg-white p-7 sm:p-8">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f2efe8] text-[#20235A]">
                                    <BriefcaseBusiness size={19} />
                                </div>

                                <h3 className="mt-8 font-serif text-2xl font-medium text-[#20235A]">
                                    Department Support
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[#1e1917]/50">
                                    A coordinated academic and technical team
                                    contributes to the department&apos;s daily
                                    operations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    QUICK INFO
                ===================================================== */}
                <section className="border-y border-[#20235A]/10 bg-white">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <div className="grid md:grid-cols-[1fr_1.5fr]">
                            <div className="border-b border-[#20235A]/10 py-10 md:border-b-0 md:border-r md:py-14 md:pr-14">
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f7746]">
                                    Faculty Directory
                                </p>

                                <h2 className="mt-4 font-serif text-3xl font-medium text-[#20235A] sm:text-4xl">
                                    Department at a glance
                                </h2>
                            </div>

                            <div className="grid grid-cols-2 divide-x divide-[#20235A]/10 sm:grid-cols-4">
                                <div className="px-5 py-10 sm:px-7 md:py-14">
                                    <p className="text-3xl font-semibold text-[#20235A]">
                                        01
                                    </p>
                                    <p className="mt-2 text-[9px] font-bold uppercase leading-4 tracking-[0.14em] text-[#8f7746]">
                                        HOD
                                    </p>
                                </div>

                                <div className="px-5 py-10 sm:px-7 md:py-14">
                                    <p className="text-3xl font-semibold text-[#20235A]">
                                        05
                                    </p>
                                    <p className="mt-2 text-[9px] font-bold uppercase leading-4 tracking-[0.14em] text-[#8f7746]">
                                        Assistant Professors
                                    </p>
                                </div>

                                <div className="border-t border-[#20235A]/10 px-5 py-10 sm:border-t-0 sm:px-7 md:py-14">
                                    <p className="text-3xl font-semibold text-[#20235A]">
                                        09
                                    </p>
                                    <p className="mt-2 text-[9px] font-bold uppercase leading-4 tracking-[0.14em] text-[#8f7746]">
                                        Lab Faculty
                                    </p>
                                </div>

                                <div className="border-t border-[#20235A]/10 px-5 py-10 sm:border-t-0 sm:px-7 md:py-14">
                                    <p className="text-3xl font-semibold text-[#20235A]">
                                        15
                                    </p>
                                    <p className="mt-2 text-[9px] font-bold uppercase leading-4 tracking-[0.14em] text-[#8f7746]">
                                        Total Team
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CTA
                ===================================================== */}
                <section className="bg-[#f2efe8]">
                    <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
                        <div className="relative overflow-hidden bg-[#20235A] px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
                            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#D2B87C]/15" />
                            <div className="absolute -bottom-36 -left-24 h-80 w-80 rounded-full border border-white/5" />

                            <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                                <div className="max-w-2xl">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D2B87C]">
                                        Explore the Department
                                    </p>

                                    <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-white sm:text-5xl">
                                        Discover the spaces where our faculty
                                        teach, guide and inspire.
                                    </h2>
                                </div>

                                <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                                    <Link
                                        href={BASE_PATH}
                                        className="group inline-flex items-center justify-center gap-3 bg-[#D2B87C] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
                                    >
                                        Department Home
                                        <ArrowRight
                                            size={15}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </Link>

                                    {/* <Link
                                        href={BASE_PATH}
                                        className="inline-flex items-center justify-center gap-2 border border-white/20 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5"
                                    >
                                        Department Home
                                        <ChevronRight size={15} />
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
};

export default FacultyProfilePage;