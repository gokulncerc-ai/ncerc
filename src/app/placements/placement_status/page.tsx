"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    BriefcaseBusiness,
    ChevronRight,
    Handshake,
    Lightbulb,
    Target,
    TrendingUp,
    Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const placementStats = [
    {
        value: "435+",
        label: "Offers",
        icon: BriefcaseBusiness,
    },
    {
        value: "30+",
        label: "Companies",
        icon: Handshake,
    },
    {
        value: "18 Lakhs",
        label: "Highest Salary",
        icon: TrendingUp,
    },
    {
        value: "3 Lakhs",
        label: "Average Salary / Annum",
        icon: Target,
    },
];

const philosophy = [
    {
        number: "01",
        title: "Create",
        description:
            "Fostering innovation, critical thinking, and problem-solving abilities among students.",
        icon: Lightbulb,
    },
    {
        number: "02",
        title: "Collaborate",
        description:
            "Building meaningful partnerships with industry leaders, organizations, and professionals to co-create learning experiences and opportunities.",
        icon: Handshake,
    },
    {
        number: "03",
        title: "Compensate",
        description:
            "Ensuring students are not only employable but also rewarded with career opportunities that match their skills and potential.",
        icon: TrendingUp,
    },
];

const recruiters = [
    {
        name: "Prime",
        image: "https://ncerc.ac.in/images/placement-logo/2026/PRIME.png",
    },
    {
        name: "Renex",
        image: "https://ncerc.ac.in/images/placement-logo/2026/RENEX.png",
    },
    {
        name: "Rialto",
        image: "https://ncerc.ac.in/images/placement-logo/2026/RIALTO.jpg",
    },
    {
        name: "We Guide",
        image: "https://ncerc.ac.in/images/placement-logo/2026/WE%20GUIDE%20copy.png",
    },
    {
        name: "Wipro",
        image: "https://ncerc.ac.in/images/placement-logo/2026/WIPRO.png",
    },
    {
        name: "Acutro",
        image: "https://ncerc.ac.in/images/placement-logo/2026/Acutro.png",
    },
    {
        name: "Atos",
        image: "https://ncerc.ac.in/images/placement-logo/2026/Atos.png",
    },
    {
        name: "Averixis Solution",
        image: "https://ncerc.ac.in/images/placement-logo/2026/AVERIXIS%20SOLUTION-01.png",
    },
    {
        name: "Bonfiglioli",
        image: "https://ncerc.ac.in/images/placement-logo/2026/Bonfiglioli.png",
    },
    {
        name: "Codeyoung",
        image: "https://ncerc.ac.in/images/placement-logo/2026/CODEYOUNG.png",
    },
    {
        name: "Corizo",
        image: "https://ncerc.ac.in/images/placement-logo/2026/Corizo.jpg",
    },
    {
        name: "Genz Educate Wing",
        image: "https://ncerc.ac.in/images/placement-logo/2026/Genz%20educate%20wing.png",
    },
    {
        name: "Glowlogics",
        image: "https://ncerc.ac.in/images/placement-logo/2026/glowlogics.png",
    },
    {
        name: "Gurit",
        image: "https://ncerc.ac.in/images/placement-logo/2026/Gurit.png",
    },
    {
        name: "Hykon",
        image: "https://ncerc.ac.in/images/placement-logo/2026/Hykon.png",
    },
    {
        name: "John Deere",
        image: "https://ncerc.ac.in/images/placement-logo/2026/John%20deere.jpg",
    },
    {
        name: "Pentagon",
        image: "https://ncerc.ac.in/images/placement-logo/2026/PentagonLogo.CLFPXG1l.png",
    },
    {
        name: "Qspider",
        image: "https://ncerc.ac.in/images/placement-logo/2026/Qspider.jpg",
    },
    {
        name: "SFO",
        image: "https://ncerc.ac.in/images/placement-logo/2026/SFO.png",
    },
    {
        name: "Speridians",
        image: "https://ncerc.ac.in/images/placement-logo/2026/Speridians.png",
    },
    {
        name: "TCS",
        image: "https://ncerc.ac.in/images/placement-logo/2026/TCS.jpg",
    },
    {
        name: "Unlox",
        image: "https://ncerc.ac.in/images/placement-logo/2026/Unlox.png",
    },
    {
        name: "Valeo",
        image: "https://ncerc.ac.in/images/placement-logo/2026/Valeo.png",
    },
    {
        name: "Victory Ads",
        image: "https://ncerc.ac.in/images/placement-logo/2026/Victory%20Ads.jpg",
    },
    {
        name: "VIVNOVATIONS",
        image: "https://ncerc.ac.in/images/placement-logo/2026/VIVNOVATIONS.jpg",
    },
    {
        name: "Wogletech",
        image: "https://ncerc.ac.in/images/placement-logo/2026/wogletech.png",
    },
    {
        name: "Zone",
        image: "https://ncerc.ac.in/images/placement-logo/2026/Zone.jpg",
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
                <section className="relative overflow-hidden bg-[#20235A]">

                    <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-[#D2B87C]/10" />

                    <div className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full border border-white/5" />

                    <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-10 sm:px-10 lg:px-14 lg:pb-24 lg:pt-14">

                        {/* Breadcrumb */}
                        <div className="mb-14 flex items-center gap-2 text-xs">

                            <Link
                                href="/"
                                className="text-white/40 transition-colors hover:text-[#D2B87C]"
                            >
                                Home
                            </Link>

                            <ChevronRight
                                size={13}
                                className="text-white/20"
                            />

                            <span className="text-[#D2B87C]">
                                Placements
                            </span>

                        </div>


                        <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end">

                            <div>

                                <div className="mb-6 flex items-center gap-3">

                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                        NCP & IR
                                    </span>

                                </div>


                                <h1 className="max-w-4xl font-serif text-5xl leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl">

                                    From campus

                                    <span className="block text-[#D2B87C]">
                                        to corporate.
                                    </span>

                                </h1>


                                <p className="mt-7 max-w-2xl text-sm leading-8 text-white/55 sm:text-base">
                                    Building industry-ready professionals
                                    through training, mentorship, industry
                                    engagement and meaningful career
                                    opportunities.
                                </p>

                            </div>


                            {/* Hero side information */}
                            <div className="border-l border-white/10 pl-7">

                                <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/35">
                                    Placement Status
                                </span>

                                <p className="mt-5 text-sm leading-7 text-white/50">
                                    2025–26 Academic Year
                                </p>


                                <div className="mt-7 flex items-center gap-6">

                                    <div>
                                        <span className="block font-serif text-3xl text-white">
                                            435+
                                        </span>

                                        <span className="mt-1 block text-[9px] uppercase tracking-[0.18em] text-white/35">
                                            Offers
                                        </span>
                                    </div>


                                    <div className="h-10 w-px bg-white/10" />


                                    <div>
                                        <span className="block font-serif text-3xl text-[#D2B87C]">
                                            18L
                                        </span>

                                        <span className="mt-1 block text-[9px] uppercase tracking-[0.18em] text-white/35">
                                            Highest
                                        </span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    PLACEMENT STATISTICS
                ===================================================== */}
                <section className="border-b border-[#20235A]/10 bg-white">

                    <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4">

                            {placementStats.map((stat, index) => {

                                const Icon = stat.icon;

                                return (
                                    <div
                                        key={stat.label}
                                        className={`group px - 5 py - 8 sm: px - 7 lg: py - 10 ${
    index !== placementStats.length - 1
        ? "border-b border-[#20235A]/10 lg:border-b-0 lg:border-r"
        : ""
} `}
                                    >

                                        <div className="flex items-start justify-between">

                                            <Icon
                                                size={19}
                                                strokeWidth={1.5}
                                                className="text-[#D2B87C]"
                                            />

                                            <span className="text-[9px] text-[#20235A]/25">
                                                2025–26
                                            </span>

                                        </div>


                                        <div className="mt-7">

                                            <span className="block font-serif text-3xl text-[#20235A] sm:text-4xl">
                                                {stat.value}
                                            </span>

                                            <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#20235A]/40">
                                                {stat.label}
                                            </span>

                                        </div>

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    ABOUT NCP & IR
                ===================================================== */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-24">

                    <div className="grid gap-12 lg:grid-cols-[280px_1fr]">

                        <div>

                            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                01 / NCP & IR
                            </span>

                            <div className="mt-5 h-px w-12 bg-[#20235A]/15" />

                            <p className="mt-6 max-w-xs text-sm leading-7 text-[#20235A]/45">
                                Nehru Centre for Placement & Industry Relations
                                serves as a strategic bridge between academia
                                and industry.
                            </p>

                        </div>


                        <div className="max-w-4xl">

                            <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                                Preparing students for the world beyond the
                                classroom.
                            </h2>


                            <div className="mt-8 space-y-5 text-sm leading-8 text-[#20235A]/60 sm:text-base">

                                <p>
                                    NCP & IR (Nehru Centre for Placement &
                                    Industry Relations) serves as a strategic
                                    bridge between academia and industry,
                                    committed to shaping students into
                                    well-rounded, industry-ready professionals.
                                </p>

                                <p>
                                    The centre places a strong emphasis on the
                                    holistic development of learners by
                                    integrating life skills, technical
                                    expertise, and domain-specific competencies
                                    that align with evolving industry
                                    expectations.
                                </p>

                                <p>
                                    Through a structured ecosystem of training,
                                    mentorship, and industry engagement, NCP &
                                    IR empowers students to confidently
                                    transition from campus to corporate
                                    environments.
                                </p>

                                <p>
                                    It facilitates continuous learning
                                    opportunities, including value-added
                                    programs, certification courses,
                                    internships, live projects, and
                                    interactions with industry experts —
                                    ensuring students gain both theoretical
                                    knowledge and practical exposure.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CREATE COLLABORATE COMPENSATE
                ===================================================== */}
                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-24">

                        <div className="grid gap-12 lg:grid-cols-[0.55fr_1fr]">

                            {/* Intro */}
                            <div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    02 / Guiding Philosophy
                                </span>

                                <h2 className="mt-5 max-w-md font-serif text-3xl leading-tight text-white sm:text-4xl">
                                    Create.
                                    <br />
                                    Collaborate.
                                    <br />
                                    <span className="text-[#D2B87C]">
                                        Compensate.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
                                    At the heart of NCP & IR lies a guiding
                                    philosophy focused on developing,
                                    connecting and rewarding student talent.
                                </p>

                            </div>


                            {/* Philosophy cards */}
                            <div className="border-t border-white/10">

                                {philosophy.map((item) => {

                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.number}
                                            className="group grid gap-5 border-b border-white/10 py-7 sm:grid-cols-[60px_55px_1fr] sm:items-start"
                                        >

                                            <span className="font-serif text-lg text-[#D2B87C]">
                                                {item.number}
                                            </span>


                                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#D2B87C]">
                                                <Icon
                                                    size={17}
                                                    strokeWidth={1.5}
                                                />
                                            </div>


                                            <div>

                                                <h3 className="font-serif text-2xl text-white">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-2 max-w-xl text-sm leading-7 text-white/45">
                                                    {item.description}
                                                </p>

                                            </div>

                                        </div>
                                    );
                                })}

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    RECRUITERS INTRO
                ===================================================== */}
                <section className="mx-auto max-w-[1400px] px-6 pb-10 pt-16 sm:px-10 lg:px-14 lg:pb-14 lg:pt-24">

                    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

                        <div>

                            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                03 / Industry Connect
                            </span>

                            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
                                Our recruiters
                            </h2>

                        </div>


                        <p className="max-w-md text-sm leading-7 text-[#20235A]/45">
                            Industry partnerships create opportunities for
                            students to connect their academic learning with
                            professional environments.
                        </p>

                    </div>

                </section>


                {/* =====================================================
                    RECRUITER LOGOS
                ===================================================== */}
                <section className="bg-white">

                    <div className="mx-auto max-w-[1400px] px-6 pb-20 sm:px-10 lg:px-14 lg:pb-28">

                        <div className="grid grid-cols-2 border-l border-t border-[#20235A]/10 sm:grid-cols-3 lg:grid-cols-5">

                            {recruiters.map((recruiter) => (

                                <div
                                    key={recruiter.name}
                                    className="group flex min-h-[130px] items-center justify-center border-b border-r border-[#20235A]/10 p-6 transition-colors duration-300 hover:bg-[#faf7f2]"
                                >

                                    <div className="relative h-16 w-full">

                                        <Image
                                            src={recruiter.image}
                                            alt={`${ recruiter.name } recruiter`}
                                            fill
                                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                            className="object-contain grayscale opacity-65 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                                        />

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CLOSING SECTION
                ===================================================== */}
                <section className="bg-[#faf7f2]">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-24">

                        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">

                            <div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Placements · 2025–26
                                </span>

                                <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
                                    Connecting talent with opportunity.
                                </h2>

                            </div>


                            <div className="border-l border-[#20235A]/10 pl-6">

                                <Users
                                    size={20}
                                    strokeWidth={1.5}
                                    className="text-[#D2B87C]"
                                />

                                <p className="mt-5 text-sm leading-7 text-[#20235A]/50">
                                    Through continuous training, industry
                                    interaction and career-focused learning,
                                    NCP & IR supports students in making the
                                    transition from academic life to
                                    professional environments.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CTA
                ===================================================== */}
                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">

                        <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">

                            <div>

                                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    NCP & IR
                                </span>

                                <h2 className="mt-3 font-serif text-2xl text-white sm:text-3xl">
                                    Building careers through industry
                                    connection.
                                </h2>

                            </div>


                            <Link
                                href="/"
                                className="group flex w-fit items-center gap-3 border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
                            >
                                Back to NCERC

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
