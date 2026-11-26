"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    ArrowUpRight,
    ChevronRight,
    ExternalLink,
    Lightbulb,
    Rocket,
    Sparkles,
    TrendingUp,
    Zap,
} from "lucide-react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import Iedcnavigation from "../../../student-support/iedc/Iedcnavigation/navigation"


const startups = [
    {
        number: "01",
        title: "A Start-up named Prove was started by our Students with funding from KSUM",
        image: "https://ncerc.ac.in/images/dpt/iedc/startup/1.jpg",
        href: "https://ncerc.ac.in/iedc/startups-news1",
        category: "Student Startup",
    },
    {
        number: "02",
        title: "Some Funded Projects completed during the academic year with a fund of Rs. 2.5 Lakhs/team in total five projects funded by NewGen-IEDC NSTEDB.",
        image: "https://ncerc.ac.in/images/dpt/iedc/startup/2.jpg",
        href: "https://ncerc.ac.in/iedc/startups-news2",
        category: "Funded Projects",
    },
    {
        number: "03",
        title: "Soap Water Filtering System(SOWAFIS)",
        image: "https://ncerc.ac.in/images/dpt/iedc/startup/4.jpg",
        href: "https://ncerc.ac.in/iedc/startups-news4",
        category: "Innovation",
    },
    {
        number: "04",
        title: "Portable Dual Screen attachments for Laptops",
        image: "https://ncerc.ac.in/images/dpt/iedc/startup/10.jpg",
        href: "https://ncerc.ac.in/iedc/startups-news10",
        category: "Product Innovation",
    },
    {
        number: "05",
        title: "Automated and Portable Vertical Solar Stacker (APVSS)",
        image: "https://ncerc.ac.in/images/dpt/iedc/startup/14.jpg",
        href: "https://ncerc.ac.in/iedc/startups-news14",
        category: "Solar Technology",
    },
    {
        number: "06",
        title: "PCB printing without etching",
        image: "https://ncerc.ac.in/images/dpt/iedc/startup/16.jpg",
        href: "https://ncerc.ac.in/iedc/startups-news16",
        category: "Electronics",
    },
    {
        number: "07",
        title: "PLASMA - MASK AND GLOVES INCINERATOR",
        image: "https://ncerc.ac.in/images/dpt/iedc/startup/21.jpg",
        href: "https://ncerc.ac.in/iedc/startups-news21",
        category: "Healthcare Innovation",
    },
    {
        number: "08",
        title: "WASTE INCINERATOR BOX",
        image: "https://ncerc.ac.in/images/dpt/iedc/startup/24.jpg",
        href: "https://ncerc.ac.in/iedc/startups-news24",
        category: "Waste Management",
    },
];

const page = () => {
    const featuredStartup = startups[0];
    const remainingStartups = startups.slice(1);

    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#faf7f2] text-[#1E1917]">
                {/* =====================================================
                    HERO
                ===================================================== */}
                <section className="relative overflow-hidden bg-[#20235A] text-white">
                    {/* Decorative circles */}
                    <div className="absolute -left-32 top-20 h-80 w-80 rounded-full border border-white/[0.06]" />
                    <div className="absolute -left-16 top-36 h-56 w-56 rounded-full border border-[#D2B87C]/15" />

                    <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#D2B87C]/10" />
                    <div className="absolute right-[-60px] top-[-60px] h-72 w-72 rounded-full border border-white/[0.05]" />

                    <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-20 sm:px-8 lg:px-12 lg:pb-14 lg:pt-24">
                        <div className="grid items-center gap-12 lg:grid-cols-[1fr_260px]">
                            <div className="max-w-4xl">
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-9 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        IEDC · Startups
                                    </span>
                                </div>

                                <h1 className="font-serif text-4xl leading-[0.95] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                                    Ideas that
                                    <span className="block text-[#D2B87C]">
                                        become real.
                                    </span>
                                </h1>

                                <p className="mt-6 max-w-2xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                                    Explore student-led startups, funded
                                    projects and innovative prototypes
                                    emerging from the IEDC ecosystem at NCERC.
                                </p>

                                <div className="mt-7 flex flex-wrap gap-3">
                                    <a
                                        href="#startups"
                                        className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold text-[#20235A] transition-all duration-300 hover:bg-white"
                                    >
                                        Explore startups
                                        <ArrowUpRight
                                            size={15}
                                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        />
                                    </a>

                                    <Link
                                        href="/student-support/iedc"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-medium text-white transition-all duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                    >
                                        About IEDC
                                        <ChevronRight size={15} />
                                    </Link>
                                </div>
                            </div>

                            {/* Hero statistic */}
                            <div className="hidden border-l border-white/15 pl-8 lg:block">
                                <p className="font-serif text-6xl leading-none tracking-[-0.05em] text-[#D2B87C]">
                                    08
                                </p>

                                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                                    Featured initiatives
                                </p>

                                <div className="mt-6 h-px w-12 bg-[#D2B87C]" />

                                <p className="mt-4 text-xs leading-5 text-white/45">
                                    Student ideas progressing from concepts
                                    and prototypes towards practical
                                    solutions.
                                </p>
                            </div>
                        </div>

                        {/* Bottom information strip */}
                        <div className="mt-14 grid grid-cols-2 border-t border-white/10 pt-5 sm:grid-cols-4">
                            <div className="border-r border-white/10 pr-4">
                                <p className="font-serif text-xl text-[#D2B87C]">
                                    08
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                    Initiatives
                                </p>
                            </div>

                            <div className="border-r border-white/10 px-4">
                                <p className="font-serif text-xl text-[#D2B87C]">
                                    05+
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                    Innovation Areas
                                </p>
                            </div>

                            <div className="border-r border-white/10 px-4">
                                <p className="font-serif text-xl text-[#D2B87C]">
                                    02
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                    Funding Ecosystems
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

                {/* -----navigation starts------ */}
                <Iedcnavigation />

                {/* =====================================================
                    INTRODUCTION
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
                                        Student innovation
                                    </span>
                                </div>
                            </div>

                            <div>
                                <h2 className="max-w-3xl font-serif text-3xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-4xl lg:text-5xl">
                                    From an idea on paper to something
                                    <span className="text-[#8F7746]">
                                        {" "}
                                        people can use.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-2xl text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                    The IEDC at NCERC supports students in
                                    exploring ideas, developing prototypes and
                                    pursuing entrepreneurial opportunities.
                                    These initiatives represent the creativity,
                                    technical thinking and problem-solving
                                    approach of students across different
                                    disciplines.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    FEATURED STARTUP
                ===================================================== */}
                <section
                    id="startups"
                    className="bg-[#faf7f2] px-6 py-16 sm:px-8 lg:px-12 lg:py-20"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Featured startup
                                </p>

                                <h2 className="font-serif text-3xl tracking-[-0.025em] text-[#20235A] sm:text-4xl">
                                    Turning ideas into ventures
                                </h2>
                            </div>

                            <div className="flex items-center gap-3 text-xs text-[#1E1917]/45">
                                <span className="h-px w-7 bg-[#D2B87C]" />
                                <span>Startup showcase</span>
                            </div>
                        </div>

                        <Link
                            href={featuredStartup.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="grid overflow-hidden rounded-[1.5rem] bg-[#20235A] lg:grid-cols-[1.35fr_0.65fr]">
                                {/* Featured image */}
                                <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto lg:min-h-[410px]">
                                    <Image
                                        src={featuredStartup.image}
                                        alt={featuredStartup.title}
                                        fill
                                        unoptimized
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/80 via-transparent to-[#20235A]/10" />

                                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#20235A]/65 px-3 py-2 backdrop-blur-md">
                                        <span className="font-serif text-sm text-[#D2B87C]">
                                            01
                                        </span>

                                        <span className="h-3 w-px bg-white/20" />

                                        <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/75">
                                            Student Startup
                                        </span>
                                    </div>

                                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                                        <p className="max-w-xl font-serif text-2xl leading-tight text-white sm:text-3xl">
                                            {featuredStartup.title}
                                        </p>

                                        <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D2B87C] text-[#20235A] transition-transform duration-300 group-hover:rotate-45 sm:flex">
                                            <ArrowUpRight size={18} />
                                        </div>
                                    </div>
                                </div>

                                {/* Featured content */}
                                <div className="flex flex-col justify-between p-7 text-white sm:p-8 lg:p-10">
                                    <div>
                                        <Rocket
                                            size={24}
                                            strokeWidth={1.5}
                                            className="text-[#D2B87C]"
                                        />

                                        <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#D2B87C]">
                                            IEDC Startup
                                        </p>

                                        <div className="mt-5 h-px w-10 bg-[#D2B87C]" />

                                        <p className="mt-6 text-sm leading-6 text-white/55">
                                            A student-led startup supported
                                            through funding from KSUM,
                                            demonstrating how ideas developed
                                            within the academic ecosystem can
                                            progress towards entrepreneurship.
                                        </p>
                                    </div>

                                    <div className="mt-9">
                                        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                                            <span className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                                                Initiative
                                            </span>

                                            <span className="font-serif text-lg text-[#D2B87C]">
                                                01
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between text-xs font-medium">
                                            <span>
                                                View startup details
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
                    STARTUP GRID
                ===================================================== */}
                <section className="bg-[#faf7f2] px-6 pb-16 sm:px-8 lg:px-12 lg:pb-20">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-8 flex items-center gap-4">
                            <span className="font-serif text-xl text-[#20235A]">
                                02
                            </span>

                            <span className="h-px flex-1 bg-[#20235A]/10" />

                            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8F7746]">
                                Innovation archive
                            </span>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {remainingStartups.map((startup) => (
                                <Link
                                    key={startup.number}
                                    href={startup.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group"
                                >
                                    <article className="h-full overflow-hidden rounded-[1.35rem] border border-[#20235A]/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#D2B87C]/60 hover:shadow-[0_16px_45px_rgba(32,35,90,0.09)]">
                                        {/* Image */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={startup.image}
                                                alt={startup.title}
                                                fill
                                                unoptimized
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/75 via-transparent to-transparent" />

                                            <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#20235A]/80 backdrop-blur-sm">
                                                <span className="font-serif text-xs text-[#D2B87C]">
                                                    {startup.number}
                                                </span>
                                            </div>

                                            <div className="absolute bottom-4 left-4">
                                                <span className="rounded-full border border-white/20 bg-[#20235A]/60 px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-white/80 backdrop-blur-md">
                                                    {startup.category}
                                                </span>
                                            </div>

                                            <div className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#20235A] transition-all duration-300 group-hover:bg-[#D2B87C]">
                                                <ArrowUpRight size={14} />
                                            </div>
                                        </div>

                                        {/* Card content */}
                                        <div className="flex min-h-[215px] flex-col p-5 sm:p-6">
                                            <div className="mb-4 flex items-center justify-between">
                                                <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#8F7746]">
                                                    Startup {startup.number}
                                                </span>

                                                <ExternalLink
                                                    size={13}
                                                    className="text-[#20235A]/25 transition-colors group-hover:text-[#20235A]"
                                                />
                                            </div>

                                            <h3 className="font-serif text-xl leading-[1.15] tracking-[-0.02em] text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746]">
                                                {startup.title}
                                            </h3>

                                            <div className="mt-auto flex items-center gap-2 pt-6 text-[9px] font-bold uppercase tracking-[0.17em] text-[#20235A]/50 transition-colors group-hover:text-[#20235A]">
                                                Explore initiative

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
                    IMPACT SECTION
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
                                        Innovation in practice
                                    </span>
                                </div>

                                <h2 className="font-serif text-3xl leading-[1.05] tracking-[-0.03em] text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Build something that
                                    <span className="block text-[#8F7746]">
                                        matters.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-xl text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                    From sustainable technologies to
                                    electronics, healthcare and product
                                    innovation, IEDC-supported projects
                                    encourage students to address practical
                                    challenges through creative engineering.
                                </p>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="rounded-[1.5rem] bg-[#20235A] p-6 text-white sm:row-span-2 sm:p-7">
                                    <TrendingUp
                                        size={24}
                                        strokeWidth={1.5}
                                        className="text-[#D2B87C]"
                                    />

                                    <p className="mt-16 font-serif text-2xl leading-tight sm:text-3xl">
                                        From concepts to prototypes and
                                        ventures.
                                    </p>

                                    <div className="mt-6 h-px w-10 bg-[#D2B87C]" />

                                    <p className="mt-4 text-xs leading-5 text-white/50">
                                        Creating an environment where students
                                        can experiment, refine ideas and
                                        explore entrepreneurial possibilities.
                                    </p>
                                </div>

                                <div className="rounded-[1.5rem] border border-[#20235A]/10 bg-[#f2efe8] p-6">
                                    <Rocket
                                        size={22}
                                        strokeWidth={1.5}
                                        className="text-[#8F7746]"
                                    />

                                    <p className="mt-10 font-serif text-xl leading-tight text-[#20235A]">
                                        Student-led innovation.
                                    </p>
                                </div>

                                <div className="rounded-[1.5rem] border border-[#20235A]/10 bg-[#faf7f2] p-6">
                                    <Zap
                                        size={22}
                                        strokeWidth={1.5}
                                        className="text-[#8F7746]"
                                    />

                                    <p className="mt-10 font-serif text-xl leading-tight text-[#20235A]">
                                        Technology with purpose.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    STARTUP AREAS
                ===================================================== */}
                <section className="bg-[#f2efe8]">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
                            <div>
                                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Areas of innovation
                                </p>

                                <h2 className="font-serif text-3xl leading-tight tracking-[-0.025em] text-[#20235A] sm:text-4xl">
                                    Different challenges.
                                    <span className="block text-[#8F7746]">
                                        Different solutions.
                                    </span>
                                </h2>
                            </div>

                            <div className="grid border-t border-[#20235A]/10 sm:grid-cols-2">
                                <div className="border-b border-[#20235A]/10 py-5 sm:border-r sm:pr-7">
                                    <span className="font-serif text-lg text-[#D2B87C]">
                                        01
                                    </span>

                                    <h3 className="mt-2 font-serif text-xl text-[#20235A]">
                                        Entrepreneurship
                                    </h3>

                                    <p className="mt-2 text-xs leading-5 text-[#1E1917]/50">
                                        Supporting students in exploring
                                        startup opportunities.
                                    </p>
                                </div>

                                <div className="border-b border-[#20235A]/10 py-5 sm:pl-7">
                                    <span className="font-serif text-lg text-[#D2B87C]">
                                        02
                                    </span>

                                    <h3 className="mt-2 font-serif text-xl text-[#20235A]">
                                        Product Innovation
                                    </h3>

                                    <p className="mt-2 text-xs leading-5 text-[#1E1917]/50">
                                        Developing practical products around
                                        real-world requirements.
                                    </p>
                                </div>

                                <div className="border-b border-[#20235A]/10 py-5 sm:border-r sm:pr-7">
                                    <span className="font-serif text-lg text-[#D2B87C]">
                                        03
                                    </span>

                                    <h3 className="mt-2 font-serif text-xl text-[#20235A]">
                                        Sustainable Technology
                                    </h3>

                                    <p className="mt-2 text-xs leading-5 text-[#1E1917]/50">
                                        Exploring solutions for energy,
                                        resources and sustainability.
                                    </p>
                                </div>

                                <div className="border-b border-[#20235A]/10 py-5 sm:pl-7">
                                    <span className="font-serif text-lg text-[#D2B87C]">
                                        04
                                    </span>

                                    <h3 className="mt-2 font-serif text-xl text-[#20235A]">
                                        Electronics
                                    </h3>

                                    <p className="mt-2 text-xs leading-5 text-[#1E1917]/50">
                                        Creating innovative approaches to
                                        electronics and hardware development.
                                    </p>
                                </div>

                                <div className="py-5 sm:border-r sm:pr-7">
                                    <span className="font-serif text-lg text-[#D2B87C]">
                                        05
                                    </span>

                                    <h3 className="mt-2 font-serif text-xl text-[#20235A]">
                                        Healthcare
                                    </h3>

                                    <p className="mt-2 text-xs leading-5 text-[#1E1917]/50">
                                        Developing ideas addressing practical
                                        healthcare challenges.
                                    </p>
                                </div>

                                <div className="py-5 sm:pl-7">
                                    <span className="font-serif text-lg text-[#D2B87C]">
                                        06
                                    </span>

                                    <h3 className="mt-2 font-serif text-xl text-[#20235A]">
                                        Waste Management
                                    </h3>

                                    <p className="mt-2 text-xs leading-5 text-[#1E1917]/50">
                                        Encouraging innovative approaches to
                                        waste handling and management.
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
                                        See where the ideas are being
                                        developed.
                                    </h2>

                                    <p className="mt-5 max-w-xl text-sm leading-6 text-white/55">
                                        Explore IEDC achievements, laboratory
                                        facilities and programmes that support
                                        student innovation at NCERC.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2.5">
                                    <Link
                                        href="/student-support/iedc/achievements"
                                        className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold text-[#20235A] transition-all duration-300 hover:bg-white"
                                    >
                                        Achievements

                                        <ArrowUpRight
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

                                    <Link
                                        href="/student-support/iedc/programs-conducted"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-medium text-white transition-all duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                    >
                                        Programs Conducted
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