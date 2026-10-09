"use client";

import React from "react";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Check,
    ChevronRight,
    Cloud,
    Cpu,
    Lightbulb,
    Monitor,
    MonitorPlay,
    Network,
    Presentation,
    Radio,
    Sparkles,
    Users,
    Video,
    Wifi,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNav from "../../DepartmentNav/page";


const BASE_PATH = "/departments/ug/cse_ai_and_ml";

const smartRooms = [
    {
        id: "01",
        name: "Smart Classroom 01",
        type: "Technology-Enabled Learning",
        capacity: "60+ Students",
        description:
            "A technology-enabled classroom designed to support interactive teaching, multimedia presentations, digital demonstrations and collaborative learning.",
        image:
            "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1800&q=85",
        features: [
            "Interactive digital display",
            "Multimedia presentation support",
            "Connected learning environment",
        ],
    },
    {
        id: "02",
        name: "Smart Classroom 02",
        type: "Digital Academic Environment",
        capacity: "60+ Students",
        description:
            "An enhanced learning space that integrates digital tools with classroom instruction to create a more engaging academic experience.",
        image:
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=85",
        features: [
            "Digital teaching facilities",
            "Audio-visual support",
            "Internet connectivity",
        ],
    },
    {
        id: "03",
        name: "Technology Learning Room",
        type: "Interactive Learning",
        capacity: "50+ Students",
        description:
            "A modern academic space suitable for demonstrations, technical presentations, group discussions, project reviews and technology-assisted learning.",
        image:
            "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1800&q=85",
        features: [
            "Presentation-ready environment",
            "Digital content support",
            "Collaborative learning setup",
        ],
    },
    {
        id: "04",
        name: "Digital Learning Room",
        type: "Multimedia & Collaboration",
        capacity: "50+ Students",
        description:
            "A flexible smart learning environment designed for digital content delivery, student presentations, workshops and collaborative academic activities.",
        image:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
        features: [
            "Multimedia facilities",
            "Connected devices",
            "Flexible academic setup",
        ],
    },
];

const smartFeatures = [
    {
        icon: MonitorPlay,
        title: "Interactive Displays",
        description:
            "Digital display technology supports visual explanations, presentations, demonstrations and interactive classroom instruction.",
    },
    {
        icon: Presentation,
        title: "Digital Presentations",
        description:
            "Faculty and students can use multimedia content to make lessons, seminars and project presentations more engaging.",
    },
    {
        icon: Wifi,
        title: "High-Speed Connectivity",
        description:
            "Connected learning spaces provide access to online resources and digital academic content during classroom sessions.",
    },
    {
        icon: Video,
        title: "Audio-Visual Support",
        description:
            "Integrated audio-visual facilities enhance lectures, demonstrations, videos and technology-assisted learning.",
    },
    {
        icon: Cpu,
        title: "Technology Integration",
        description:
            "Modern classroom technology connects conventional teaching methods with digital learning experiences.",
    },
    {
        icon: Users,
        title: "Collaborative Learning",
        description:
            "The flexible environment supports group discussions, presentations, project reviews and student interaction.",
    },
];

const learningFeatures = [
    "Interactive digital classroom instruction",
    "Multimedia presentations and demonstrations",
    "Online academic resource access",
    "Student technical presentations",
    "Project discussions and reviews",
    "Digital workshops and training",
    "Group discussions and collaborative learning",
    "Technology-assisted assessments",
];

const smartWorkflow = [
    {
        number: "01",
        title: "Connect",
        description:
            "Students and faculty connect with digital academic resources and technology-enabled learning tools.",
    },
    {
        number: "02",
        title: "Explore",
        description:
            "Multimedia content, demonstrations and online resources help students explore concepts beyond textbooks.",
    },
    {
        number: "03",
        title: "Interact",
        description:
            "Interactive sessions encourage students to ask questions, participate in discussions and share ideas.",
    },
    {
        number: "04",
        title: "Create",
        description:
            "Students use the smart learning environment for presentations, project discussions and collaborative work.",
    },
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
                    <div className="absolute -right-32 -top-32 h-[430px] w-[430px] rounded-full border border-[#D2B87C]/10" />
                    <div className="absolute -bottom-40 -left-32 h-[430px] w-[430px] rounded-full border border-white/5" />

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
                                Smart
                                <span className="block text-[#D2B87C]">
                                    Rooms
                                </span>
                            </h1>

                            <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                                Technology-enabled learning spaces designed to
                                bring interactive teaching, digital resources
                                and collaborative learning into the classroom.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-3">
                                <Link
                                    href="#smart-rooms"
                                    className="group inline-flex items-center gap-3 bg-[#D2B87C] px-6 py-3.5 text-sm font-semibold text-[#20235A] transition-all duration-300 hover:bg-white"
                                >
                                    Explore Smart Rooms
                                    <ArrowRight
                                        size={16}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </Link>

                                {/* <Link
                                    href={`${BASE_PATH}/facilities`}
                                    className="inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                >
                                    All Facilities
                                </Link> */}
                            </div>

                            <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-white/10">
                                <div className="py-5 pr-4">
                                    <div className="font-serif text-3xl text-white">
                                        04
                                    </div>

                                    <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                        Smart Spaces
                                    </div>
                                </div>

                                <div className="border-l border-white/10 px-4 py-5">
                                    <div className="font-serif text-3xl text-white">
                                        60+
                                    </div>

                                    <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                        Capacity
                                    </div>
                                </div>

                                <div className="border-l border-white/10 pl-4 py-5">
                                    <div className="font-serif text-3xl text-white">
                                        AI
                                    </div>

                                    <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                        Ready
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative">
                            <div className="absolute -left-4 -top-4 h-20 w-20 border-l border-t border-[#D2B87C]/40" />

                            <div className="relative h-[390px] overflow-hidden sm:h-[470px] lg:h-[520px]">
                                <img
                                    src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=2200&q=90"
                                    alt="Smart classroom"
                                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#11142f]/85 via-[#20235A]/10 to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Technology • Learning • Innovation
                                    </p>

                                    <p className="mt-2 max-w-sm font-serif text-2xl text-white">
                                        Where technology becomes part of
                                        learning.
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
                                        Smart Learning Infrastructure
                                    </span>
                                </div>

                                <h2 className="mt-6 max-w-md font-serif text-4xl leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    The classroom,
                                    <span className="block text-[#8f7746]">
                                        reimagined.
                                    </span>
                                </h2>
                            </div>

                            <div>
                                <p className="max-w-3xl text-lg leading-9 text-[#1e1917]/70">
                                    Smart rooms provide technology-enabled
                                    environments where conventional classroom
                                    teaching is enhanced through digital
                                    displays, multimedia resources,
                                    connectivity and interactive learning
                                    tools.
                                </p>

                                <p className="mt-6 max-w-3xl text-base leading-8 text-[#1e1917]/55">
                                    For students of Computer Science and
                                    Engineering & AI and Machine Learning,
                                    these spaces create opportunities to
                                    experience concepts through visual
                                    demonstrations, digital content, technical
                                    presentations and collaborative activities.
                                </p>

                                <div className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#20235A]">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D2B87C]/20">
                                        <Sparkles size={14} />
                                    </span>

                                    Connect • Interact • Create
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    SMART ROOM SHOWCASE
                ========================================================== */}
                <section
                    id="smart-rooms"
                    className="bg-[#f2efe8] py-20 sm:py-24 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f7746]">
                                        Our Smart Rooms
                                    </span>
                                </div>

                                <h2 className="mt-5 font-serif text-4xl tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    Technology-enabled
                                    <span className="text-[#8f7746]">
                                        {" "}
                                        learning spaces
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-[#1e1917]/55">
                                Modern academic spaces designed to support
                                digital teaching, interactive presentations and
                                collaborative learning.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {smartRooms.map((room) => (
                                <article
                                    key={room.id}
                                    className="group overflow-hidden border border-[#20235A]/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(32,35,90,0.10)]"
                                >
                                    {/* Image */}
                                    <div className="relative h-[270px] overflow-hidden bg-[#20235A] sm:h-[330px]">
                                        <img
                                            src={room.image}
                                            alt={room.name}
                                            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#11142f]/90 via-[#20235A]/10 to-transparent" />

                                        <div className="absolute inset-0 bg-[#20235A]/0 transition-all duration-500 group-hover:bg-[#20235A]/10" />

                                        <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center bg-white/95 text-xs font-bold text-[#20235A]">
                                            {room.id}
                                        </div>

                                        <div className="absolute bottom-5 left-5 right-5">
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                                                {room.type}
                                            </span>

                                            <h3 className="mt-2 font-serif text-2xl text-white">
                                                {room.name}
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
                                                    {room.capacity}
                                                </p>
                                            </div>

                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#20235A]/5 text-[#20235A]">
                                                <Users size={17} />
                                            </div>
                                        </div>

                                        <p className="text-sm leading-7 text-[#1e1917]/60">
                                            {room.description}
                                        </p>

                                        <div className="mt-6 space-y-3">
                                            {room.features.map((feature) => (
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
                                                Smart Infrastructure
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
                    SMART ROOM FEATURES
                ========================================================== */}
                <section className="bg-white py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                            <div>
                                <div className="sticky top-28">
                                    <div className="flex items-center gap-3">
                                        <span className="h-px w-8 bg-[#D2B87C]" />

                                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f7746]">
                                            Smart Features
                                        </span>
                                    </div>

                                    <h2 className="mt-5 max-w-lg font-serif text-4xl leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                        Technology that becomes part of the
                                        <span className="text-[#8f7746]">
                                            {" "}
                                            learning experience.
                                        </span>
                                    </h2>

                                    <p className="mt-7 max-w-md text-base leading-8 text-[#1e1917]/60">
                                        Smart rooms combine classroom
                                        infrastructure with digital
                                        technologies to create more engaging
                                        and connected academic experiences.
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
                                {smartFeatures.map((feature, index) => {
                                    const Icon = feature.icon;

                                    return (
                                        <div
                                            key={feature.title}
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
                                                {feature.title}
                                            </h3>

                                            <p className="mt-3 text-sm leading-7 text-[#1e1917]/55">
                                                {feature.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    DIGITAL LEARNING IMAGE
                ========================================================== */}
                <section className="bg-[#f2efe8] py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_0.75fr]">
                            <div className="relative h-[380px] overflow-hidden sm:h-[500px]">
                                <img
                                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2200&q=90"
                                    alt="Technology enabled classroom learning"
                                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-r from-[#20235A]/50 to-transparent" />

                                <div className="absolute bottom-7 left-7 max-w-sm">
                                    <div className="flex h-12 w-12 items-center justify-center bg-[#D2B87C] text-[#20235A]">
                                        <MonitorPlay size={21} />
                                    </div>

                                    <p className="mt-5 font-serif text-3xl leading-tight text-white">
                                        Digital tools designed around the
                                        learner.
                                    </p>
                                </div>
                            </div>

                            <div className="px-2 lg:px-8">
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f7746]">
                                        Smart Learning
                                    </span>
                                </div>

                                <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.025em] text-[#20235A]">
                                    Making learning more interactive.
                                </h2>

                                <p className="mt-6 text-sm leading-8 text-[#1e1917]/60">
                                    Smart rooms provide a technology-rich
                                    environment where concepts can be
                                    presented visually, explored digitally and
                                    discussed interactively.
                                </p>

                                <div className="mt-8 space-y-4">
                                    {[
                                        "Interactive teaching",
                                        "Digital demonstrations",
                                        "Multimedia presentations",
                                        "Connected academic resources",
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
                    LEARNING ACTIVITIES
                ========================================================== */}
                <section className="border-y border-[#20235A]/10 bg-[#20235A]">
                    <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.75fr_1.25fr]">
                        <div className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D2B87C]">
                                    Learning Activities
                                </span>
                            </div>

                            <h2 className="mt-5 max-w-md font-serif text-4xl leading-tight tracking-[-0.025em] text-white sm:text-5xl">
                                Turning classrooms into
                                <span className="text-[#D2B87C]">
                                    {" "}
                                    connected experiences.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-md text-sm leading-7 text-white/55">
                                Smart rooms support a broad range of
                                technology-assisted academic activities for
                                students and faculty.
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
                    SMART LEARNING WORKFLOW
                ========================================================== */}
                <section className="bg-white py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <div className="mb-14 max-w-2xl">
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f7746]">
                                    Smart Learning Approach
                                </span>
                            </div>

                            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                From connection to
                                <span className="text-[#8f7746]">
                                    {" "}
                                    creation.
                                </span>
                            </h2>
                        </div>

                        <div className="grid gap-0 border-y border-[#20235A]/10 md:grid-cols-4">
                            {smartWorkflow.map((item, index) => (
                                <div
                                    key={item.number}
                                    className={`group relative p-7 sm:p-8 ${index !== smartWorkflow.length - 1
                                        ? "border-b border-[#20235A]/10 md:border-b-0 md:border-r"
                                        : ""
                                        }`}
                                >
                                    <span className="font-serif text-4xl text-[#D2B87C]">
                                        {item.number}
                                    </span>

                                    <h3 className="mt-7 font-serif text-2xl text-[#20235A]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-[#1e1917]/55">
                                        {item.description}
                                    </p>

                                    <div className="mt-7 flex h-9 w-9 items-center justify-center rounded-full bg-[#f2efe8] text-[#20235A] transition-all duration-300 group-hover:bg-[#D2B87C]">
                                        <ArrowUpRight size={16} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    QUICK INFORMATION
                ========================================================== */}
                <section className="bg-[#f2efe8] py-20 sm:py-24">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f7746]">
                                        Smart Infrastructure
                                    </span>
                                </div>

                                <h2 className="mt-5 max-w-lg font-serif text-4xl leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    Technology designed around the academic
                                    <span className="text-[#8f7746]">
                                        {" "}
                                        experience.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-md text-sm leading-7 text-[#1e1917]/55">
                                    Smart rooms bring digital tools and
                                    classroom infrastructure together to
                                    support modern teaching and learning.
                                </p>
                            </div>

                            <div className="grid border border-[#20235A]/10 bg-white sm:grid-cols-2">
                                <div className="border-b border-[#20235A]/10 p-7 sm:border-r">
                                    <div className="flex h-11 w-11 items-center justify-center bg-[#f2efe8] text-[#20235A]">
                                        <Monitor size={19} />
                                    </div>

                                    <p className="mt-5 font-serif text-2xl text-[#20235A]">
                                        Digital Displays
                                    </p>

                                    <p className="mt-2 text-sm leading-7 text-[#1e1917]/55">
                                        Visual and interactive content delivery
                                        for enhanced classroom instruction.
                                    </p>
                                </div>

                                <div className="border-b border-[#20235A]/10 p-7">
                                    <div className="flex h-11 w-11 items-center justify-center bg-[#f2efe8] text-[#20235A]">
                                        <Wifi size={19} />
                                    </div>

                                    <p className="mt-5 font-serif text-2xl text-[#20235A]">
                                        Connected Learning
                                    </p>

                                    <p className="mt-2 text-sm leading-7 text-[#1e1917]/55">
                                        Access to online academic resources and
                                        digital learning content.
                                    </p>
                                </div>

                                <div className="border-b border-[#20235A]/10 p-7 sm:border-b-0 sm:border-r">
                                    <div className="flex h-11 w-11 items-center justify-center bg-[#f2efe8] text-[#20235A]">
                                        <Radio size={19} />
                                    </div>

                                    <p className="mt-5 font-serif text-2xl text-[#20235A]">
                                        AV Support
                                    </p>

                                    <p className="mt-2 text-sm leading-7 text-[#1e1917]/55">
                                        Audio and visual technologies support
                                        presentations and demonstrations.
                                    </p>
                                </div>

                                <div className="p-7">
                                    <div className="flex h-11 w-11 items-center justify-center bg-[#f2efe8] text-[#20235A]">
                                        <Network size={19} />
                                    </div>

                                    <p className="mt-5 font-serif text-2xl text-[#20235A]">
                                        Collaborative
                                    </p>

                                    <p className="mt-2 text-sm leading-7 text-[#1e1917]/55">
                                        Flexible spaces encourage interaction,
                                        discussion and student participation.
                                    </p>
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
                            <Cpu size={20} />
                        </div>

                        <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f7746]">
                            CSE & AI / ML Department
                        </p>

                        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#20235A] sm:text-5xl lg:text-6xl">
                            Technology that supports
                            <span className="text-[#8f7746]">
                                {" "}
                                the future of learning.
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