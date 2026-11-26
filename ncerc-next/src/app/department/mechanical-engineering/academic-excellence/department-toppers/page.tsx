
"use client";

import React from "react";
import Image from "next/image";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import {
    ArrowDown,
    ArrowUpRight,
    Award,
    BookOpen,
    GraduationCap,
    Medal,
    Sparkles,
    Star,
    Trophy,
} from "lucide-react";

/* =========================================================
   DEPARTMENT TOPPERS DATA
   Replace sample names, images and details with official data.
========================================================= */

const academicFacts = [
    {
        number: "01",
        label: "Academic Excellence",
    },
    {
        number: "04",
        label: "Semester-Based Learning",
    },
    {
        number: "MCA",
        label: "Postgraduate Programme",
    },
    {
        number: "01",
        label: "Goal — Excellence",
    },
];

const toppers = [
    {
        rank: "01",
        name: "Topper Name",
        distinction: "Department Topper",
        year: "2024 – 2025",
        semester: "Final Year",
        achievement: "Outstanding Academic Performance",
        image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    },
    {
        rank: "02",
        name: "Topper Name",
        distinction: "Academic Excellence",
        year: "2024 – 2025",
        semester: "Final Year",
        achievement: "Excellent Academic Performance",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
    },
    {
        rank: "03",
        name: "Topper Name",
        distinction: "Academic Excellence",
        year: "2024 – 2025",
        semester: "Final Year",
        achievement: "Meritorious Academic Performance",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85",
    },
    {
        rank: "04",
        name: "Topper Name",
        distinction: "Semester Topper",
        year: "2023 – 2024",
        semester: "Third Semester",
        achievement: "Outstanding Semester Results",
        image:
            "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85",
    },
    {
        rank: "05",
        name: "Topper Name",
        distinction: "Semester Topper",
        year: "2023 – 2024",
        semester: "Second Semester",
        achievement: "Excellent Academic Results",
        image:
            "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=85",
    },
    {
        rank: "06",
        name: "Topper Name",
        distinction: "Academic Excellence",
        year: "2022 – 2023",
        semester: "Final Year",
        achievement: "Consistent Academic Achievement",
        image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
    },
];

export default function DepartmentToppers() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-[#FAF7F2] text-[#1E1917]">
            <SiteHeader />

            {/* =====================================================
                HERO
            ===================================================== */}
            <section className="relative overflow-hidden bg-[#20235A]">
                <div className="pointer-events-none absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full border border-[#D2B87C]/10 sm:h-[540px] sm:w-[540px]" />
                <div className="pointer-events-none absolute -right-12 -top-12 h-[280px] w-[280px] rounded-full border border-[#D2B87C]/10 sm:h-[390px] sm:w-[390px]" />

                <div className="relative mx-auto grid max-w-[1440px] lg:min-h-[570px] lg:grid-cols-[1.05fr_0.95fr]">
                    {/* Hero Content */}
                    <div className="flex items-center px-5 py-16 sm:px-8 md:px-10 lg:px-16 lg:py-20 xl:px-20">
                        <div className="w-full max-w-[700px]">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-8 shrink-0 bg-[#D2B87C]" />

                                <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#D2B87C] sm:text-[10px] sm:tracking-[0.3em]">
                                    Department of Computer Applications
                                </p>
                            </div>

                            <h1 className="font-serif text-[46px] leading-[0.98] tracking-[-0.035em] text-white sm:text-[60px] lg:text-[70px] xl:text-[78px]">
                                Celebrating
                                <span className="block text-[#D2B87C]">
                                    Excellence.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-[560px] text-[14px] leading-7 text-white/65 sm:text-[15px] sm:leading-8">
                                Recognising the dedication, perseverance and academic
                                achievements of our MCA students who continue to set
                                benchmarks through their commitment to learning and
                                professional growth.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
                                <a
                                    href="#department-toppers"
                                    className="group inline-flex items-center justify-center gap-3 bg-[#D2B87C] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-colors hover:bg-white"
                                >
                                    Meet Our Toppers

                                    <ArrowUpRight
                                        size={15}
                                        className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                    />
                                </a>

                                <a
                                    href="#academic-excellence"
                                    className="inline-flex items-center justify-center gap-3 border border-white/25 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                >
                                    Academic Excellence
                                </a>
                            </div>

                            <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
                                <Award
                                    size={27}
                                    strokeWidth={1.4}
                                    className="shrink-0 text-[#D2B87C]"
                                />

                                <div>
                                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Honouring Achievement
                                    </p>

                                    <p className="mt-1 text-sm text-white/70">
                                        Dedication today. Excellence tomorrow.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative min-h-[340px] sm:min-h-[440px] lg:min-h-[570px]">
                        <Image
                            src="https://i.pinimg.com/736x/6f/ab/e0/6fabe0eb1889d81f237ec0a261d99d5f.jpg"
                            alt="Students celebrating academic achievements"
                            fill
                            priority
                            sizes="(min-width: 1024px) 48vw, 100vw"
                            className="object-cover object-center"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#20235A]/80 via-[#20235A]/10 to-transparent lg:bg-gradient-to-r lg:from-[#20235A]/40 lg:via-transparent lg:to-transparent" />

                        <div className="absolute bottom-5 left-5 right-5 border border-white/20 bg-[#20235A]/85 p-5 backdrop-blur-sm sm:bottom-8 sm:left-8 sm:right-8 sm:p-6">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D2B87C]/40">
                                    <Trophy
                                        size={24}
                                        strokeWidth={1.4}
                                        className="text-[#D2B87C]"
                                    />
                                </div>

                                <div>
                                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#D2B87C]">
                                        The Pursuit of Excellence
                                    </p>

                                    <p className="mt-1 font-serif text-[20px] text-white sm:text-[23px]">
                                        Achievement worth celebrating.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* =====================================================
    DEPARTMENT TOPPERS POSTER
===================================================== */}
            <section className="bg-[#FAF7F2]">
                <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 md:px-10 lg:px-16 lg:py-16 xl:px-20">

                    {/* Section Heading */}
                    <div className="mb-8 border-b border-[#20235A]/10 pb-6">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                            Department of Computer Applications
                        </p>

                        <h2 className="mt-3 font-serif text-[36px] leading-tight tracking-[-0.025em] text-[#20235A] sm:text-[44px]">
                            Department Toppers
                        </h2>

                        <p className="mt-3 max-w-[650px] text-[13px] leading-7 text-[#1E1917]/60 sm:text-[14px]">
                            Celebrating the academic achievements and excellence of our MCA students.
                        </p>
                    </div>

                    {/* Single Poster Image */}
                    <div className="relative mx-auto w-full max-w-[1100px] overflow-hidden border border-[#20235A]/10 bg-white p-2 sm:p-3 lg:max-w-[672px] lg:p-4">
                        <Image
                            src="/images/department/ME.webp"
                            alt="MCA Department Toppers"
                            width={1000}
                            height={900}
                            priority
                            className="h-auto w-full object-contain"
                            sizes="(max-width: 1023px) 100vw, 672px"
                        />
                    </div>

                </div>
            </section>


            {/* =====================================================
                ACADEMIC FACTS
            ===================================================== */}
            <section className="border-b border-[#1E1917]/10 bg-white">
                <div className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4">
                    {academicFacts.map((fact, index) => (
                        <div
                            key={fact.label}
                            className={`px-5 py-6 sm:px-8 lg:px-10 ${index !== academicFacts.length - 1
                                ? "border-r border-[#1E1917]/10"
                                : ""
                                }`}
                        >
                            <p className="font-serif text-[29px] leading-none tracking-[-0.025em] text-[#20235A] sm:text-[36px]">
                                {fact.number}
                            </p>

                            <p className="mt-3 text-[8px] font-semibold uppercase tracking-[0.13em] text-[#1E1917]/55 sm:text-[9px] sm:tracking-[0.16em]">
                                {fact.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* =====================================================
                INTRODUCTION
            ===================================================== */}
            <section className="bg-[#FAF7F2]">
                <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 md:px-10 lg:px-16 lg:py-20 xl:px-20">
                    <div className="grid gap-9 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
                        <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                Academic Recognition
                            </p>

                            <h2 className="mt-4 max-w-[470px] font-serif text-[37px] leading-[1.05] tracking-[-0.03em] text-[#20235A] sm:text-[46px] lg:text-[51px]">
                                Excellence is built one achievement at a time.
                            </h2>

                            <div className="mt-6 h-px w-14 bg-[#D2B87C]" />

                            <div className="mt-7 flex items-start gap-4 border-l-2 border-[#D2B87C] pl-5">
                                <Star
                                    size={21}
                                    strokeWidth={1.5}
                                    className="mt-1 shrink-0 text-[#8F7746]"
                                />

                                <div>
                                    <p className="font-serif text-[21px] text-[#20235A]">
                                        Learning with purpose
                                    </p>

                                    <p className="mt-2 text-[12px] leading-6 text-[#1E1917]/55">
                                        Celebrating the effort behind every milestone
                                        and the potential behind every student.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="space-y-5">
                                <p className="text-[14px] leading-7 text-[#1E1917]/70 sm:text-[15px] sm:leading-8">
                                    Academic achievement reflects more than examination
                                    results. It represents consistent effort, curiosity,
                                    discipline and the determination to develop a deeper
                                    understanding of computing and its applications.
                                </p>

                                <p className="text-[14px] leading-7 text-[#1E1917]/70 sm:text-[15px] sm:leading-8">
                                    The Department of Computer Applications recognises
                                    students who demonstrate academic commitment and
                                    excellence throughout their programme. Their
                                    achievements inspire fellow students to pursue
                                    knowledge, strengthen their skills and aim higher.
                                </p>

                                <p className="text-[14px] leading-7 text-[#1E1917]/70 sm:text-[15px] sm:leading-8">
                                    Explore the students featured below and celebrate
                                    their dedication to learning, growth and academic
                                    success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                TOPPERS GRID
            ===================================================== */}
            <section
                id="department-toppers"
                className="scroll-mt-24 bg-[#F2EFE8]"
            >
                <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 md:px-10 lg:px-16 lg:py-20 xl:px-20">
                    <div className="grid gap-6 border-b border-[#20235A]/10 pb-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
                        <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                Student Achievers
                            </p>

                            <h2 className="mt-3 max-w-[700px] font-serif text-[38px] leading-[1.04] tracking-[-0.03em] text-[#20235A] sm:text-[48px] lg:text-[54px]">
                                Department Toppers
                            </h2>
                        </div>

                        <div className="lg:justify-self-end lg:pl-6">
                            <p className="max-w-[430px] text-[13px] leading-7 text-[#1E1917]/55">
                                Celebrating students whose academic dedication and
                                commitment reflect the spirit of excellence at NCERC.
                            </p>
                        </div>
                    </div>

                    <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {toppers.map((topper, index) => (
                            <article
                                key={`${topper.rank}-${topper.year}`}
                                className="group overflow-hidden border border-[#20235A]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#20235A]/[0.07]"
                            >
                                {/* Profile Image */}
                                <div className="relative h-[320px] overflow-hidden bg-[#E8E3D9] sm:h-[350px]">
                                    <Image
                                        src={topper.image}
                                        alt={topper.name}
                                        fill
                                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/85 via-transparent to-transparent" />

                                    <div className="absolute left-5 top-5 flex items-center gap-2 border border-white/25 bg-[#20235A]/85 px-3 py-2 backdrop-blur-sm">
                                        <Medal
                                            size={15}
                                            className="text-[#D2B87C]"
                                        />

                                        <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white">
                                            Rank {topper.rank}
                                        </span>
                                    </div>

                                    <div className="absolute bottom-5 left-5 right-5">
                                        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#D2B87C]">
                                            {topper.distinction}
                                        </p>

                                        <h3 className="mt-2 font-serif text-[27px] leading-tight text-white sm:text-[30px]">
                                            {topper.name}
                                        </h3>

                                        <p className="mt-2 text-[11px] text-white/70">
                                            {topper.year}
                                        </p>
                                    </div>
                                </div>

                                {/* Profile Details */}
                                <div className="p-5 sm:p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#20235A]">
                                            <GraduationCap
                                                size={20}
                                                strokeWidth={1.5}
                                                className="text-[#D2B87C]"
                                            />
                                        </div>

                                        <div>
                                            <p className="text-[9px] uppercase tracking-[0.16em] text-[#8F7746]">
                                                Academic Level
                                            </p>

                                            <p className="mt-1 text-[12px] font-medium text-[#20235A]">
                                                {topper.semester}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-5 border-t border-[#20235A]/10 pt-4">
                                        <p className="text-[9px] uppercase tracking-[0.16em] text-[#8F7746]">
                                            Achievement
                                        </p>

                                        <p className="mt-2 text-[12px] leading-6 text-[#1E1917]/65">
                                            {topper.achievement}
                                        </p>
                                    </div>

                                    <div className="mt-5 flex items-center justify-between border-t border-[#20235A]/10 pt-4">
                                        <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#20235A]/55">
                                            MCA • NCERC
                                        </span>

                                        <span className="flex h-8 w-8 items-center justify-center border border-[#D2B87C]/70 text-[#8F7746] transition-colors group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                            <ArrowUpRight size={15} />
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <p className="mt-6 text-[10px] leading-5 text-[#1E1917]/45">
                        Note: The names, photographs, academic years and achievement
                        descriptions above are sample content. Replace them with
                        verified department records before publishing.
                    </p>
                </div>
            </section>

            {/* =====================================================
                ACADEMIC EXCELLENCE
            ===================================================== */}
            <section
                id="academic-excellence"
                className="scroll-mt-24 bg-white"
            >
                <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 md:px-10 lg:px-16 lg:py-20 xl:px-20">
                    <div className="grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                        <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                Beyond the Classroom
                            </p>

                            <h2 className="mt-4 font-serif text-[38px] leading-[1.04] tracking-[-0.03em] text-[#20235A] sm:text-[48px]">
                                A culture of continuous improvement.
                            </h2>

                            <p className="mt-5 text-[13px] leading-7 text-[#1E1917]/60">
                                Academic excellence grows through curiosity, collaboration,
                                practical learning and the willingness to keep improving.
                            </p>

                            <a
                                href="#department-toppers"
                                className="group mt-7 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-colors hover:text-[#8F7746]"
                            >
                                View Student Achievers

                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </a>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            <article className="bg-[#FAF7F2] p-6 sm:p-7">
                                <BookOpen
                                    size={26}
                                    strokeWidth={1.4}
                                    className="text-[#8F7746]"
                                />

                                <h3 className="mt-6 font-serif text-[23px] text-[#20235A]">
                                    Academic Foundation
                                </h3>

                                <p className="mt-3 text-[12px] leading-6 text-[#1E1917]/60">
                                    Building conceptual understanding and technical
                                    knowledge through structured postgraduate learning.
                                </p>
                            </article>

                            <article className="bg-[#20235A] p-6 sm:p-7">
                                <Sparkles
                                    size={26}
                                    strokeWidth={1.4}
                                    className="text-[#D2B87C]"
                                />

                                <h3 className="mt-6 font-serif text-[23px] text-white">
                                    Student Achievement
                                </h3>

                                <p className="mt-3 text-[12px] leading-6 text-white/60">
                                    Recognising dedication, consistency and the pursuit
                                    of high academic standards.
                                </p>
                            </article>

                            <article className="border border-[#20235A]/10 p-6 sm:p-7 sm:col-span-2">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#D2B87C]/20">
                                        <Trophy
                                            size={24}
                                            strokeWidth={1.4}
                                            className="text-[#8F7746]"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="font-serif text-[23px] text-[#20235A]">
                                            Inspiring the Next Generation
                                        </h3>

                                        <p className="mt-3 text-[12px] leading-6 text-[#1E1917]/60">
                                            Every achievement serves as encouragement for
                                            fellow students to explore their potential,
                                            develop their capabilities and approach their
                                            academic journey with confidence.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                CALL TO ACTION
            ===================================================== */}
            <section className="bg-[#F2EFE8]">
                <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 md:px-10 lg:px-16 lg:py-14 xl:px-20">
                    <div className="relative overflow-hidden bg-[#20235A] px-6 py-9 sm:px-10 lg:px-14 lg:py-12">
                        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#D2B87C]/15" />
                        <div className="pointer-events-none absolute -bottom-32 right-20 h-72 w-72 rounded-full border border-[#D2B87C]/10" />

                        <div className="relative z-10 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-[#D2B87C]">
                                    Department of Computer Applications
                                </p>

                                <h2 className="mt-3 max-w-[750px] font-serif text-[32px] leading-[1.06] tracking-[-0.025em] text-white sm:text-[43px]">
                                    Every milestone begins with the desire to learn.
                                </h2>

                                <p className="mt-4 max-w-[650px] text-[13px] leading-6 text-white/55">
                                    Explore the MCA programme and discover an academic
                                    environment focused on computing knowledge, practical
                                    skills and professional development.
                                </p>
                            </div>

                            <a
                                href="/departments/mca"
                                className="group inline-flex w-fit items-center gap-3 bg-[#D2B87C] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-colors hover:bg-white"
                            >
                                Explore MCA

                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <FooterSection />
        </main>
    );
};


