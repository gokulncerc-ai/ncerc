"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    ArrowDownRight,
    ArrowUpRight,
    ChevronRight,
    ExternalLink,
    Lightbulb,
    MoveUpRight,
    Sparkles,
    Users,
    Wrench,
    Zap,
} from "lucide-react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import Iedcnavigation from "../../../student-support/iedc/Iedcnavigation/navigation"


const programs = [
    {
        number: "01",
        title: "WORKSHOP",
        image: "https://ncerc.ac.in/images/dpt/iedc/pc/2023/workshop.jpg",
        href: "https://ncerc.ac.in/iedc/pc-news-nov-3.php",
        category: "Workshop",
        description:
            "Interactive learning experiences designed to introduce students to practical ideas, tools and innovation.",
    },
    {
        number: "02",
        title: "IEDC SUMMIT 2023",
        image: "https://ncerc.ac.in/images/dpt/iedc/pc/2023/iedc_summit_2023.jpg",
        href: "https://ncerc.ac.in/iedc/pc-news-nov-2.php",
        category: "Summit",
        description:
            "A platform bringing together students and the wider innovation ecosystem.",
    },
    {
        number: "03",
        title: "CREATIVITY AND INNOVATION LEADING TO PATENTS",
        image: "https://ncerc.ac.in/images/dpt/iedc/pc/2023/1.jpg",
        href: "https://ncerc.ac.in/iedc/pc-news-nov-1.php",
        category: "Innovation",
        description:
            "Encouraging students to transform creative thinking into ideas with intellectual property potential.",
    },
    {
        number: "04",
        title:
            "Group photo of EAC-3 with Shri Baiju.K, Assistant District Industries Officer, Govt.of Kerala",
        image: "https://ncerc.ac.in/images/dpt/iedc/pc/3.jpg",
        href: "https://ncerc.ac.in/iedc/pc-news3",
        category: "Industry Interaction",
        description:
            "An opportunity for students to connect with professionals from the entrepreneurship ecosystem.",
    },
    {
        number: "05",
        title:
            "Shri.Edwin Andrews,CEO,Spartez Technology addressing the students gathering",
        image: "https://ncerc.ac.in/images/dpt/iedc/pc/5.jpg",
        href: "https://ncerc.ac.in/iedc/pc-news5",
        category: "Expert Session",
        description:
            "Industry perspectives that help students understand technology, entrepreneurship and professional opportunities.",
    },
    {
        number: "06",
        title: "Internet of Things(IoT) workshop",
        image: "https://ncerc.ac.in/images/dpt/iedc/pc/8.jpg",
        href: "https://ncerc.ac.in/iedc/pc-news8",
        category: "Technical Workshop",
        description:
            "Hands-on exposure to emerging technologies and the possibilities created by connected systems.",
    },
    {
        number: "07",
        title: "Participation in IEDC 2019 Summit",
        image: "https://ncerc.ac.in/images/dpt/iedc/pc/9.jpg",
        href: "https://ncerc.ac.in/iedc/pc-news9",
        category: "IEDC Summit",
        description:
            "Student participation in a larger platform dedicated to innovation and entrepreneurship.",
    },
    {
        number: "08",
        title: "“Power Quiz ” is organised in association wih KSEB",
        image: "https://ncerc.ac.in/images/dpt/iedc/pc/10.jpg",
        href: "https://ncerc.ac.in/iedc/pc-news10",
        category: "Quiz",
        description:
            "An engaging knowledge-focused initiative organised in association with KSEB.",
    },
    {
        number: "09",
        title:
            "A National Level Awareness Program is organised in Association with MHRD",
        image: "https://ncerc.ac.in/images/dpt/iedc/pc/12.jpg",
        href: "https://ncerc.ac.in/iedc/pc-news12",
        category: "Awareness Program",
        description:
            "A national-level initiative focused on awareness, participation and student engagement.",
    },
];

const page = () => {
    const featuredProgram = programs[0];
    const remainingPrograms = programs.slice(1);

    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#faf7f2] text-[#1E1917]">
                {/* =====================================================
                    HERO
                ===================================================== */}
                <section className="relative overflow-hidden bg-[#20235A] text-white">
                    <div className="absolute -left-32 top-20 h-80 w-80 rounded-full border border-white/[0.06]" />
                    <div className="absolute -left-20 top-32 h-56 w-56 rounded-full border border-[#D2B87C]/15" />

                    <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#D2B87C]/10" />
                    <div className="absolute right-[-60px] top-[-60px] h-72 w-72 rounded-full border border-white/[0.05]" />

                    <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-20 sm:px-8 lg:px-12 lg:pb-14 lg:pt-24">
                        <div className="grid items-center gap-12 lg:grid-cols-[1fr_260px]">
                            <div className="max-w-4xl">
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-9 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        IEDC · Programs Conducted
                                    </span>
                                </div>

                                <h1 className="font-serif text-4xl leading-[0.95] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                                    Ideas
                                    <span className="block text-[#D2B87C]">
                                        in motion.
                                    </span>
                                </h1>

                                <p className="mt-6 max-w-2xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                                    A collection of workshops, summits,
                                    technology programmes, expert interactions
                                    and innovation initiatives conducted
                                    through the IEDC at NCERC.
                                </p>

                                <div className="mt-7 flex flex-wrap gap-3">
                                    <a
                                        href="#programs"
                                        className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold text-[#20235A] transition-all duration-300 hover:bg-white"
                                    >
                                        Explore programs
                                        <ArrowDownRight
                                            size={15}
                                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                                        />
                                    </a>

                                    <Link
                                        href="/student-support/iedc"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-medium text-white transition-all duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                    >
                                        About IEDC
                                        <ArrowUpRight size={15} />
                                    </Link>
                                </div>
                            </div>

                            {/* Hero stat */}
                            <div className="hidden border-l border-white/15 pl-8 lg:block">
                                <p className="font-serif text-6xl leading-none tracking-[-0.05em] text-[#D2B87C]">
                                    09
                                </p>

                                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                                    Programs
                                </p>

                                <div className="mt-6 h-px w-12 bg-[#D2B87C]" />

                                <p className="mt-4 text-xs leading-5 text-white/45">
                                    Activities connecting students with
                                    innovation, technology, industry and
                                    entrepreneurship.
                                </p>
                            </div>
                        </div>

                        <div className="mt-14 grid grid-cols-2 border-t border-white/10 pt-5 sm:grid-cols-4">
                            <div className="border-r border-white/10 pr-4">
                                <p className="font-serif text-xl text-[#D2B87C]">
                                    09
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                    Programs
                                </p>
                            </div>

                            <div className="border-r border-white/10 px-4">
                                <p className="font-serif text-xl text-[#D2B87C]">
                                    05+
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                    Formats
                                </p>
                            </div>

                            <div className="border-r border-white/10 px-4">
                                <p className="font-serif text-xl text-[#D2B87C]">
                                    01
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                    Ecosystem
                                </p>
                            </div>

                            <div className="pl-4">
                                <p className="font-serif text-xl text-[#D2B87C]">
                                    ∞
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                    Possibilities
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Iedcnavigation />
                {/* INTRODUCTION */}

                {/* =====================================================
                    INTRO
                ===================================================== */}
                <section className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
                            <div>
                                <div className="flex items-center gap-3">
                                    <Sparkles
                                        size={16}
                                        className="text-[#8F7746]"
                                    />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                        Beyond the classroom
                                    </span>
                                </div>
                            </div>

                            <div>
                                <h2 className="max-w-3xl font-serif text-3xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Creating opportunities for students to
                                    <span className="text-[#8F7746]">
                                        {" "}
                                        learn, connect and create.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-2xl text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                    The IEDC programme calendar brings together
                                    diverse experiences that complement
                                    academic learning. Through workshops,
                                    summits, expert interactions, awareness
                                    programmes and technology-focused events,
                                    students are encouraged to engage with
                                    ideas beyond the conventional classroom.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    FEATURED PROGRAM
                ===================================================== */}
                <section
                    id="programs"
                    className="bg-[#faf7f2] px-6 py-16 sm:px-8 lg:px-12 lg:py-20"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Featured initiative
                                </p>

                                <h2 className="font-serif text-3xl tracking-[-0.025em] text-[#20235A] sm:text-4xl">
                                    Programs Conducted
                                </h2>
                            </div>

                            <div className="flex items-center gap-3 text-xs text-[#1E1917]/45">
                                <span className="h-px w-7 bg-[#D2B87C]" />
                                <span>Explore the archive</span>
                            </div>
                        </div>

                        <Link
                            href={featuredProgram.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="grid overflow-hidden rounded-[1.5rem] bg-[#20235A] lg:grid-cols-[1.35fr_0.65fr]">
                                {/* Image */}
                                <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto lg:min-h-[410px]">
                                    <Image
                                        src={featuredProgram.image}
                                        alt={featuredProgram.title}
                                        fill
                                        unoptimized
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/75 via-transparent to-[#20235A]/10" />

                                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#20235A]/65 px-3 py-2 backdrop-blur-md">
                                        <span className="font-serif text-sm text-[#D2B87C]">
                                            01
                                        </span>

                                        <span className="h-3 w-px bg-white/20" />

                                        <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/75">
                                            Workshop
                                        </span>
                                    </div>

                                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                                        <p className="max-w-lg font-serif text-2xl leading-tight text-white sm:text-3xl">
                                            {featuredProgram.title}
                                        </p>

                                        <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D2B87C] text-[#20235A] transition-transform duration-300 group-hover:rotate-45 sm:flex">
                                            <ArrowUpRight size={18} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-between p-7 text-white sm:p-8 lg:p-10">
                                    <div>
                                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#D2B87C]">
                                            IEDC initiative
                                        </p>

                                        <div className="mt-6 h-px w-10 bg-[#D2B87C]" />

                                        <p className="mt-6 text-sm leading-6 text-white/55">
                                            {featuredProgram.description}
                                        </p>
                                    </div>

                                    <div className="mt-9">
                                        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                                            <span className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                                                Program
                                            </span>

                                            <span className="font-serif text-lg text-[#D2B87C]">
                                                01
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between text-xs font-medium">
                                            <span>
                                                View program details
                                            </span>

                                            <ArrowUpRight
                                                size={16}
                                                className="text-[#D2B87C] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* =====================================================
                    PROGRAM GRID
                ===================================================== */}
                <section className="bg-[#faf7f2] px-6 pb-16 sm:px-8 lg:px-12 lg:pb-20">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-8 flex items-center gap-4">
                            <span className="font-serif text-xl text-[#20235A]">
                                02
                            </span>

                            <span className="h-px flex-1 bg-[#20235A]/10" />

                            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8F7746]">
                                More programs
                            </span>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {remainingPrograms.map((program) => (
                                <Link
                                    key={program.number}
                                    href={program.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group"
                                >
                                    <article className="h-full overflow-hidden rounded-[1.35rem] border border-[#20235A]/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#D2B87C]/60 hover:shadow-[0_16px_45px_rgba(32,35,90,0.09)]">
                                        {/* Image */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={program.image}
                                                alt={program.title}
                                                fill
                                                unoptimized
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/70 via-transparent to-transparent" />

                                            <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#20235A]/80 backdrop-blur-sm">
                                                <span className="font-serif text-xs text-[#D2B87C]">
                                                    {program.number}
                                                </span>
                                            </div>

                                            <div className="absolute bottom-4 left-4">
                                                <span className="rounded-full border border-white/20 bg-[#20235A]/60 px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-white/80 backdrop-blur-md">
                                                    {program.category}
                                                </span>
                                            </div>

                                            <div className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#20235A] transition-all duration-300 group-hover:bg-[#D2B87C]">
                                                <ArrowUpRight size={14} />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex min-h-[225px] flex-col p-5 sm:p-6">
                                            <div className="mb-4 flex items-center justify-between">
                                                <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#8F7746]">
                                                    Program {program.number}
                                                </span>

                                                <ExternalLink
                                                    size={13}
                                                    className="text-[#20235A]/25 transition-colors group-hover:text-[#20235A]"
                                                />
                                            </div>

                                            <h3 className="font-serif text-xl leading-[1.15] tracking-[-0.02em] text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746]">
                                                {program.title}
                                            </h3>

                                            <p className="mt-4 text-xs leading-5 text-[#1E1917]/50 sm:text-sm">
                                                {program.description}
                                            </p>

                                            <div className="mt-auto flex items-center gap-2 pt-6 text-[9px] font-bold uppercase tracking-[0.17em] text-[#20235A]/50 transition-colors group-hover:text-[#20235A]">
                                                Explore program

                                                <ChevronRight
                                                    size={13}
                                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                                />
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    VISUAL STATEMENT
                ===================================================== */}
                <section className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <Lightbulb
                                        size={17}
                                        className="text-[#8F7746]"
                                    />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                        The IEDC approach
                                    </span>
                                </div>

                                <h2 className="font-serif text-3xl leading-[1.05] tracking-[-0.03em] text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Learning happens
                                    <span className="block text-[#8F7746]">
                                        when ideas move.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-xl text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                    IEDC activities create spaces where
                                    students can interact with experts,
                                    discover emerging technologies, share
                                    ideas and experience the process of
                                    turning concepts into possibilities.
                                </p>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="rounded-[1.5rem] bg-[#20235A] p-6 text-white sm:row-span-2 sm:p-7">
                                    <Users
                                        size={24}
                                        strokeWidth={1.5}
                                        className="text-[#D2B87C]"
                                    />

                                    <p className="mt-16 font-serif text-2xl leading-tight sm:text-3xl">
                                        Connect with people who are building
                                        what comes next.
                                    </p>

                                    <div className="mt-6 h-px w-10 bg-[#D2B87C]" />

                                    <p className="mt-4 text-xs leading-5 text-white/50">
                                        Industry interactions, expert
                                        sessions, summits and collaborative
                                        programmes.
                                    </p>
                                </div>

                                <div className="rounded-[1.5rem] border border-[#20235A]/10 bg-[#f2efe8] p-6">
                                    <Wrench
                                        size={22}
                                        strokeWidth={1.5}
                                        className="text-[#8F7746]"
                                    />

                                    <p className="mt-10 font-serif text-xl leading-tight text-[#20235A]">
                                        Build practical knowledge.
                                    </p>
                                </div>

                                <div className="rounded-[1.5rem] border border-[#20235A]/10 bg-[#faf7f2] p-6">
                                    <Zap
                                        size={22}
                                        strokeWidth={1.5}
                                        className="text-[#8F7746]"
                                    />

                                    <p className="mt-10 font-serif text-xl leading-tight text-[#20235A]">
                                        Explore emerging ideas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    PROGRAM TYPES
                ===================================================== */}
                <section className="bg-[#f2efe8]">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
                            <div>
                                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                    A diverse ecosystem
                                </p>

                                <h2 className="font-serif text-3xl leading-tight tracking-[-0.025em] text-[#20235A] sm:text-4xl">
                                    Different formats.
                                    <span className="block text-[#8F7746]">
                                        One purpose.
                                    </span>
                                </h2>
                            </div>

                            <div className="grid border-t border-[#20235A]/10 sm:grid-cols-2">
                                <div className="border-b border-[#20235A]/10 py-5 sm:border-r sm:pr-7">
                                    <span className="font-serif text-lg text-[#D2B87C]">
                                        01
                                    </span>

                                    <h3 className="mt-2 font-serif text-xl text-[#20235A]">
                                        Workshops
                                    </h3>

                                    <p className="mt-2 text-xs leading-5 text-[#1E1917]/50">
                                        Practical learning through focused
                                        sessions and technical activities.
                                    </p>
                                </div>

                                <div className="border-b border-[#20235A]/10 py-5 sm:pl-7">
                                    <span className="font-serif text-lg text-[#D2B87C]">
                                        02
                                    </span>

                                    <h3 className="mt-2 font-serif text-xl text-[#20235A]">
                                        Summits
                                    </h3>

                                    <p className="mt-2 text-xs leading-5 text-[#1E1917]/50">
                                        Platforms for networking, exposure and
                                        innovation.
                                    </p>
                                </div>

                                <div className="border-b border-[#20235A]/10 py-5 sm:border-r sm:pr-7">
                                    <span className="font-serif text-lg text-[#D2B87C]">
                                        03
                                    </span>

                                    <h3 className="mt-2 font-serif text-xl text-[#20235A]">
                                        Expert Sessions
                                    </h3>

                                    <p className="mt-2 text-xs leading-5 text-[#1E1917]/50">
                                        Insights from professionals and
                                        industry leaders.
                                    </p>
                                </div>

                                <div className="border-b border-[#20235A]/10 py-5 sm:pl-7">
                                    <span className="font-serif text-lg text-[#D2B87C]">
                                        04
                                    </span>

                                    <h3 className="mt-2 font-serif text-xl text-[#20235A]">
                                        Innovation Events
                                    </h3>

                                    <p className="mt-2 text-xs leading-5 text-[#1E1917]/50">
                                        Experiences that encourage students to
                                        think differently.
                                    </p>
                                </div>

                                <div className="py-5 sm:border-r sm:pr-7">
                                    <span className="font-serif text-lg text-[#D2B87C]">
                                        05
                                    </span>

                                    <h3 className="mt-2 font-serif text-xl text-[#20235A]">
                                        Awareness Programs
                                    </h3>

                                    <p className="mt-2 text-xs leading-5 text-[#1E1917]/50">
                                        Connecting students with larger
                                        national initiatives.
                                    </p>
                                </div>

                                <div className="py-5 sm:pl-7">
                                    <span className="font-serif text-lg text-[#D2B87C]">
                                        06
                                    </span>

                                    <h3 className="mt-2 font-serif text-xl text-[#20235A]">
                                        Competitions
                                    </h3>

                                    <p className="mt-2 text-xs leading-5 text-[#1E1917]/50">
                                        Encouraging participation, curiosity
                                        and creative thinking.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CTA
                ===================================================== */}
                <section className="bg-[#20235A] px-6 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
                    <div className="mx-auto max-w-7xl">
                        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
                            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full border border-[#D2B87C]/15" />

                            <div className="absolute -bottom-32 left-[30%] h-72 w-72 rounded-full border border-white/[0.05]" />

                            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                                <div className="max-w-2xl">
                                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Continue exploring IEDC
                                    </p>

                                    <h2 className="font-serif text-3xl leading-[1.05] tracking-[-0.025em] sm:text-4xl lg:text-5xl">
                                        Discover the ecosystem behind the
                                        ideas.
                                    </h2>

                                    <p className="mt-5 max-w-xl text-sm leading-6 text-white/55">
                                        Explore the achievements, facilities
                                        and initiatives that support innovation
                                        and entrepreneurship at NCERC.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2.5">
                                    <Link
                                        href="/student-support/iedc/achievements"
                                        className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold text-[#20235A] transition-all duration-300 hover:bg-white"
                                    >
                                        Achievements

                                        <MoveUpRight
                                            size={14}
                                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        />
                                    </Link>

                                    <Link
                                        href="/student-support/iedc/lab_facilities"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-medium text-white transition-all duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                    >
                                        Lab Facilities
                                        <ChevronRight size={14} />
                                    </Link>
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

export default page;