"use client";

import React from "react";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Check,
    ChevronRight,
    Headphones,
    Lightbulb,
    Mic2,
    MonitorPlay,
    Presentation,
    Projector,
    Sparkles,
    Users,
    Video,
    Wifi,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNav from "../../DepartmentNav/page";

const BASE_PATH = "/departments/ug/cse_ai_and_ml";

const seminarHalls = [
    {
        id: "01",
        name: "Main Seminar Hall",
        type: "Academic & Technical Events",
        capacity: "200+ Participants",
        description:
            "A spacious seminar environment designed for technical presentations, expert lectures, academic events, workshops and student gatherings.",
        image:
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1800&q=85",
        features: [
            "Large presentation display",
            "Professional audio support",
            "Flexible seating arrangement",
        ],
    },
    {
        id: "02",
        name: "Technical Seminar Hall",
        type: "Technology & Knowledge Sessions",
        capacity: "120+ Participants",
        description:
            "A technology-enabled space suitable for technical talks, project demonstrations, workshops and knowledge-sharing sessions.",
        image:
            "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1800&q=85",
        features: [
            "Projection facilities",
            "Digital presentation support",
            "Dedicated speaker area",
        ],
    },
    {
        id: "03",
        name: "Discussion & Conference Hall",
        type: "Meetings & Collaborative Sessions",
        capacity: "60+ Participants",
        description:
            "A refined environment for faculty meetings, student discussions, industry interactions, panel sessions and collaborative academic activities.",
        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85",
        features: [
            "Conference-style seating",
            "Display and connectivity",
            "Interactive discussion setup",
        ],
    },
    {
        id: "04",
        name: "Smart Seminar Space",
        type: "Presentations & Workshops",
        capacity: "80+ Participants",
        description:
            "A modern space that supports multimedia presentations, student seminars, training sessions and department-level academic programmes.",
        image:
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1800&q=85",
        features: [
            "Multimedia presentation",
            "Audio-visual facilities",
            "Workshop-ready environment",
        ],
    },
];

const facilities = [
    {
        icon: Projector,
        title: "Projection & Display",
        description:
            "Large-format projection and display facilities support presentations, demonstrations and visual learning.",
    },
    {
        icon: Mic2,
        title: "Audio System",
        description:
            "Audio facilities support clear communication during seminars, lectures, presentations and technical sessions.",
    },
    {
        icon: Video,
        title: "Multimedia Support",
        description:
            "Multimedia-ready infrastructure supports videos, demonstrations, digital presentations and technical content.",
    },
    {
        icon: Wifi,
        title: "Connected Environment",
        description:
            "Connectivity support enables digital resources, online presentations and technology-assisted academic activities.",
    },
    {
        icon: Users,
        title: "Flexible Seating",
        description:
            "Adaptable seating arrangements allow the spaces to accommodate seminars, workshops and group discussions.",
    },
    {
        icon: Lightbulb,
        title: "Focused Learning",
        description:
            "The environment encourages interaction, knowledge sharing and meaningful academic engagement.",
    },
];

const learningFeatures = [
    "Technical seminars and expert lectures",
    "Guest lectures by industry professionals",
    "Student project presentations",
    "Workshops and training programmes",
    "Faculty development programmes",
    "Panel discussions and knowledge-sharing sessions",
    "Department meetings and academic events",
    "Industry interaction and career sessions",
];

const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#faf7f2] text-[#1e1917]">
                {/* =========================================================
                    HERO
                ========================================================== */}
                <section className="relative overflow-hidden border-b border-[#20235A]/10 bg-[#20235A]">
                    <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-[#D2B87C]/10" />
                    <div className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full border border-white/5" />

                    <div className="relative mx-auto grid min-h-[600px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-20">
                        {/* Hero Content */}
                        <div className="relative z-10">
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-9 bg-[#D2B87C]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                    Department Facilities
                                </span>
                            </div>

                            <h1 className="max-w-2xl font-serif text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-white sm:text-6xl lg:text-[72px]">
                                Seminar
                                <span className="block text-[#D2B87C]">
                                    Halls
                                </span>
                            </h1>

                            <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                                Dedicated spaces for seminars, technical
                                presentations, expert interactions, workshops
                                and collaborative academic activities.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-3">
                                <Link
                                    href="#seminar-halls"
                                    className="group inline-flex items-center gap-3 bg-[#D2B87C] px-6 py-3.5 text-sm font-semibold text-[#20235A] transition-all duration-300 hover:bg-white"
                                >
                                    Explore Seminar Halls
                                    <ArrowRight
                                        size={16}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </Link>

                                <Link
                                    href={`${BASE_PATH}/facilities`}
                                    className="inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                >
                                    All Facilities
                                </Link>
                            </div>

                            <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-white/10">
                                <div className="py-5 pr-4">
                                    <div className="font-serif text-3xl text-white">
                                        04
                                    </div>

                                    <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                        Seminar Spaces
                                    </div>
                                </div>

                                <div className="border-l border-white/10 px-4 py-5">
                                    <div className="font-serif text-3xl text-white">
                                        200+
                                    </div>

                                    <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                        Capacity
                                    </div>
                                </div>

                                <div className="border-l border-white/10 pl-4 py-5">
                                    <div className="font-serif text-3xl text-white">
                                        AV
                                    </div>

                                    <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                        Enabled
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative">
                            <div className="absolute -left-4 -top-4 h-20 w-20 border-l border-t border-[#D2B87C]/40" />

                            <div className="relative h-[390px] overflow-hidden sm:h-[470px] lg:h-[520px]">
                                <img
                                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=2200&q=90"
                                    alt="Modern seminar hall"
                                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#11142f]/85 via-[#20235A]/10 to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Academic Infrastructure
                                    </p>

                                    <p className="mt-2 max-w-sm font-serif text-2xl text-white">
                                        Spaces designed for ideas to be shared.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <DepartmentNav />

                {/* =========================================================
                    INTRODUCTION
                ========================================================== */}
                <section className="border-b border-[#20235A]/10 bg-white">
                    <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f7746]">
                                        Seminar Infrastructure
                                    </span>
                                </div>

                                <h2 className="mt-6 max-w-md font-serif text-4xl leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    Spaces beyond the
                                    <span className="block text-[#8f7746]">
                                        regular classroom.
                                    </span>
                                </h2>
                            </div>

                            <div>
                                <p className="max-w-3xl text-lg leading-9 text-[#1e1917]/70">
                                    The seminar halls of the Department of
                                    Computer Science and Engineering & AI and
                                    Machine Learning provide dedicated spaces
                                    for academic presentations, technical
                                    discussions, workshops and collaborative
                                    learning.
                                </p>

                                <p className="mt-6 max-w-3xl text-base leading-8 text-[#1e1917]/55">
                                    Equipped with presentation and
                                    audio-visual support, these spaces create
                                    an environment where students, faculty
                                    members, industry professionals and
                                    academic experts can come together to
                                    exchange knowledge and ideas.
                                </p>

                                <div className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#20235A]">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D2B87C]/20">
                                        <Sparkles size={14} />
                                    </span>

                                    Learning • Interaction • Innovation
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    SEMINAR HALL SHOWCASE
                ========================================================== */}
                <section
                    id="seminar-halls"
                    className="bg-[#f2efe8] py-20 sm:py-24 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f7746]">
                                        Our Seminar Halls
                                    </span>
                                </div>

                                <h2 className="mt-5 font-serif text-4xl tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    Spaces for
                                    <span className="text-[#8f7746]">
                                        {" "}
                                        academic exchange
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-[#1e1917]/55">
                                Purpose-built environments that support
                                lectures, seminars, presentations, workshops
                                and collaborative sessions.
                            </p>
                        </div>

                        {/* Same card structure as Class Rooms */}
                        <div className="grid gap-6 md:grid-cols-2">
                            {seminarHalls.map((hall) => (
                                <article
                                    key={hall.id}
                                    className="group overflow-hidden border border-[#20235A]/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(32,35,90,0.10)]"
                                >
                                    {/* Image */}
                                    <div className="relative h-[270px] overflow-hidden bg-[#20235A] sm:h-[330px]">
                                        <img
                                            src={hall.image}
                                            alt={hall.name}
                                            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#11142f]/90 via-[#20235A]/10 to-transparent" />

                                        <div className="absolute inset-0 bg-[#20235A]/0 transition-all duration-500 group-hover:bg-[#20235A]/10" />

                                        <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center bg-white/95 text-xs font-bold text-[#20235A]">
                                            {hall.id}
                                        </div>

                                        <div className="absolute bottom-5 left-5 right-5">
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                                                {hall.type}
                                            </span>

                                            <h3 className="mt-2 font-serif text-2xl text-white">
                                                {hall.name}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 sm:p-7">
                                        <div className="mb-5 flex items-center justify-between border-b border-[#20235A]/10 pb-5">
                                            <div>
                                                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8f7746]">
                                                    Capacity
                                                </p>

                                                <p className="mt-1 text-sm font-semibold text-[#20235A]">
                                                    {hall.capacity}
                                                </p>
                                            </div>

                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#20235A]/5 text-[#20235A]">
                                                <Users size={17} />
                                            </div>
                                        </div>

                                        <p className="text-sm leading-7 text-[#1e1917]/60">
                                            {hall.description}
                                        </p>

                                        <div className="mt-6 space-y-3">
                                            {hall.features.map((feature) => (
                                                <div
                                                    key={feature}
                                                    className="flex items-start gap-3 text-xs text-[#1e1917]/65"
                                                >
                                                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#D2B87C]/25 text-[#20235A]">
                                                        <Check size={10} />
                                                    </span>

                                                    {feature}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-7 flex items-center justify-between border-t border-[#20235A]/10 pt-5">
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8f7746]">
                                                Seminar Infrastructure
                                            </span>

                                            <ArrowUpRight
                                                size={17}
                                                className="text-[#20235A] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                            />
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    FACILITIES
                ========================================================== */}
                <section className="bg-white py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                            <div>
                                <div className="sticky top-28">
                                    <div className="flex items-center gap-3">
                                        <span className="h-px w-8 bg-[#D2B87C]" />

                                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f7746]">
                                            Hall Facilities
                                        </span>
                                    </div>

                                    <h2 className="mt-5 max-w-lg font-serif text-4xl leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                        Infrastructure that supports every
                                        <span className="text-[#8f7746]">
                                            {" "}
                                            session.
                                        </span>
                                    </h2>

                                    <p className="mt-7 max-w-md text-base leading-8 text-[#1e1917]/60">
                                        The seminar halls are designed to
                                        support different formats of academic
                                        interaction, from presentations and
                                        lectures to workshops and discussions.
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
                                {facilities.map((facility, index) => {
                                    const Icon = facility.icon;

                                    return (
                                        <div
                                            key={facility.title}
                                            className="group border-b border-[#20235A]/10 py-8 first:border-t first:border-[#20235A]/10 sm:[&:nth-child(2)]:border-t sm:[&:nth-child(2)]:border-[#20235A]/10"
                                        >
                                            <div className="flex items-start justify-between gap-5">
                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#20235A]/10 bg-[#f2efe8] text-[#20235A] transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C]">
                                                    <Icon size={19} />
                                                </div>

                                                <span className="font-serif text-sm text-[#8f7746]">
                                                    0{index + 1}
                                                </span>
                                            </div>

                                            <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                                                {facility.title}
                                            </h3>

                                            <p className="mt-3 text-sm leading-7 text-[#1e1917]/55">
                                                {facility.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    LEARNING ACTIVITIES
                ========================================================== */}
                <section className="border-y border-[#20235A]/10 bg-[#20235A]">
                    <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.75fr_1.25fr]">
                        <div className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D2B87C]">
                                    Academic Activities
                                </span>
                            </div>

                            <h2 className="mt-5 max-w-md font-serif text-4xl leading-tight tracking-[-0.025em] text-white sm:text-5xl">
                                Where knowledge becomes
                                <span className="text-[#D2B87C]">
                                    {" "}
                                    conversation.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-md text-sm leading-7 text-white/55">
                                Seminar halls provide the setting for students
                                and faculty to interact with experts, present
                                their work and share knowledge.
                            </p>
                        </div>

                        <div className="border-t border-white/10 px-5 py-10 sm:px-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-20">
                            <div className="grid gap-x-10 sm:grid-cols-2">
                                {learningFeatures.map((feature, index) => (
                                    <div
                                        key={feature}
                                        className="flex gap-4 border-b border-white/10 py-5"
                                    >
                                        <span className="font-serif text-sm text-[#D2B87C]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="text-sm leading-6 text-white/70">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    FEATURE IMAGE SECTION
                ========================================================== */}
                <section className="bg-[#f2efe8] py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_0.75fr]">
                            <div className="relative h-[380px] overflow-hidden sm:h-[500px]">
                                <img
                                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2200&q=90"
                                    alt="Academic seminar event"
                                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-r from-[#20235A]/50 to-transparent" />

                                <div className="absolute bottom-7 left-7 max-w-sm">
                                    <div className="flex h-12 w-12 items-center justify-center bg-[#D2B87C] text-[#20235A]">
                                        <Presentation size={21} />
                                    </div>

                                    <p className="mt-5 font-serif text-3xl leading-tight text-white">
                                        A professional setting for academic
                                        exchange.
                                    </p>
                                </div>
                            </div>

                            <div className="px-2 lg:px-8">
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f7746]">
                                        Beyond the Classroom
                                    </span>
                                </div>

                                <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.025em] text-[#20235A]">
                                    Bringing the academic community together.
                                </h2>

                                <p className="mt-6 text-sm leading-8 text-[#1e1917]/60">
                                    A seminar hall extends learning beyond
                                    regular classroom sessions. It creates a
                                    shared environment where students can
                                    listen, present, question, collaborate and
                                    engage with different perspectives.
                                </p>

                                <div className="mt-8 space-y-4">
                                    {[
                                        "Knowledge sharing",
                                        "Industry interaction",
                                        "Technical presentations",
                                        "Collaborative learning",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3 text-sm font-medium text-[#20235A]"
                                        >
                                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D2B87C]/25">
                                                <Check size={13} />
                                            </span>

                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    CTA
                ========================================================== */}
                <section className="bg-white py-20 sm:py-24">
                    <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#20235A] text-[#D2B87C]">
                            <Headphones size={20} />
                        </div>

                        <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f7746]">
                            CSE & AI / ML Department
                        </p>

                        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#20235A] sm:text-5xl lg:text-6xl">
                            Spaces that encourage
                            <span className="text-[#8f7746]">
                                {" "}
                                ideas, interaction and innovation.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#1e1917]/55">
                            Explore the other facilities available within the
                            Department of Computer Science and Engineering &
                            Artificial Intelligence and Machine Learning.
                        </p>

                        <div className="mt-9 flex flex-wrap justify-center gap-3">
                            <Link
                                href={`${BASE_PATH}/facilities`}
                                className="group inline-flex items-center gap-3 bg-[#20235A] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2c3070]"
                            >
                                Explore All Facilities

                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>

                            <Link
                                href={BASE_PATH}
                                className="inline-flex items-center gap-2 border border-[#20235A]/15 px-7 py-4 text-sm font-semibold text-[#20235A] transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#f2efe8]"
                            >
                                Department Home
                                <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
};

export default page;