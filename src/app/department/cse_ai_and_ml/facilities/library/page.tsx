"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowRight,
    ArrowUpRight,
    BookOpen,
    Bookmark,
    Check,
    ChevronRight,
    Clock3,
    Database,
    LibraryBig,
    Monitor,
    Search,
    Sparkles,
    Users,
    Wifi,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNav from "../../DepartmentNav/page";


const BASE_PATH = "/departments/ug/cse_ai_and_ml";

const libraryFeatures = [
    {
        icon: BookOpen,
        title: "Extensive Collection",
        description:
            "A growing collection of textbooks, reference materials, journals and academic resources supporting the department curriculum.",
    },
    {
        icon: Monitor,
        title: "Digital Resources",
        description:
            "Access to digital learning resources and online academic materials that complement conventional library resources.",
    },
    {
        icon: Search,
        title: "Research Support",
        description:
            "Resources and services that help students and faculty discover, access and use academic information effectively.",
    },
    {
        icon: Wifi,
        title: "Connected Learning",
        description:
            "Technology-enabled access to digital resources and online information within the learning environment.",
    },
    {
        icon: Users,
        title: "Collaborative Learning",
        description:
            "Dedicated spaces encourage students to discuss, explore and work together on academic activities.",
    },
    {
        icon: Bookmark,
        title: "Reference Support",
        description:
            "Reference materials and assistance help learners locate relevant information for academic and project work.",
    },
];

const digitalResources = [
    "Online academic databases",
    "E-books and digital publications",
    "E-journals and research resources",
    "Digital learning materials",
    "Academic search resources",
    "Project and reference materials",
];

const libraryServices = [
    {
        number: "01",
        title: "Book Lending",
        description:
            "Access and borrow academic books and learning resources required for regular coursework and self-study.",
    },
    {
        number: "02",
        title: "Reference Services",
        description:
            "Reference resources support students in finding relevant academic information for assignments and projects.",
    },
    {
        number: "03",
        title: "Digital Access",
        description:
            "Digital resources provide additional opportunities for accessing online academic content and information.",
    },
    {
        number: "04",
        title: "Reading Spaces",
        description:
            "Quiet and focused spaces provide an environment suitable for individual study, reading and academic preparation.",
    },
];

const academicActivities = [
    "Individual study and academic preparation",
    "Technical book and reference consultation",
    "Project and assignment research",
    "Access to digital learning resources",
    "Academic information discovery",
    "Collaborative learning and discussion",
    "Research and technical reading",
    "Self-directed learning",
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
                                Central
                                <span className="block text-[#D2B87C]">
                                    Library
                                </span>
                            </h1>

                            <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                                A focused academic environment that brings
                                books, digital resources, research materials
                                and quiet learning spaces together.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-3">
                                <Link
                                    href="#library"
                                    className="group inline-flex items-center gap-3 bg-[#D2B87C] px-6 py-3.5 text-sm font-semibold text-[#20235A] transition-all duration-300 hover:bg-white"
                                >
                                    Explore Library
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
                                        01
                                    </div>

                                    <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                        Central Library
                                    </div>
                                </div>

                                <div className="border-l border-white/10 px-4 py-5">
                                    <div className="font-serif text-3xl text-white">
                                        24/7
                                    </div>

                                    <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                        Digital Access
                                    </div>
                                </div>

                                <div className="border-l border-white/10 pl-4 py-5">
                                    <div className="font-serif text-3xl text-white">
                                        E
                                    </div>

                                    <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                        Resources
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative">
                            <div className="absolute -left-4 -top-4 h-20 w-20 border-l border-t border-[#D2B87C]/40" />

                            <div className="relative h-[390px] overflow-hidden sm:h-[470px] lg:h-[520px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=2200&q=90"
                                    alt="Academic library interior"
                                    fill
                                    sizes="(min-width: 768px) 40vw, 100vw"
                                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#11142f]/85 via-[#20235A]/10 to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Knowledge • Research • Learning
                                    </p>

                                    <p className="mt-2 max-w-sm font-serif text-2xl text-white">
                                        A space to read, discover and learn.
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
                <section
                    id="library"
                    className="border-b border-[#20235A]/10 bg-white"
                >
                    <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f7746]">
                                        Knowledge Infrastructure
                                    </span>
                                </div>

                                <h2 className="mt-6 max-w-md font-serif text-4xl leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    A quiet place for
                                    <span className="block text-[#8f7746]">
                                        deeper learning.
                                    </span>
                                </h2>
                            </div>

                            <div>
                                <p className="max-w-3xl text-lg leading-9 text-[#1e1917]/70">
                                    The Central Library provides students and
                                    faculty with access to academic books,
                                    reference materials, digital resources and
                                    a dedicated environment for reading,
                                    research and self-directed learning.
                                </p>

                                <p className="mt-6 max-w-3xl text-base leading-8 text-[#1e1917]/55">
                                    Designed as an extension of the classroom,
                                    the library supports regular coursework,
                                    technical exploration, project preparation
                                    and continuous learning across computer
                                    science and emerging technology domains.
                                </p>

                                <div className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#20235A]">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D2B87C]/20">
                                        <Sparkles size={14} />
                                    </span>

                                    Read • Research • Discover
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    LIBRARY FEATURES
                ========================================================== */}
                <section className="bg-[#f2efe8] py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f7746]">
                                        Library Facilities
                                    </span>
                                </div>

                                <h2 className="mt-5 font-serif text-4xl tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    Built around
                                    <span className="text-[#8f7746]">
                                        {" "}
                                        learning
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-[#1e1917]/55">
                                Resources and spaces designed to support
                                academic study, research and independent
                                learning.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {libraryFeatures.map((feature, index) => {
                                const Icon = feature.icon;

                                return (
                                    <article
                                        key={feature.title}
                                        className="group border border-[#20235A]/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(32,35,90,0.09)]"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex h-12 w-12 items-center justify-center border border-[#20235A]/10 bg-[#f2efe8] text-[#20235A] transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C]">
                                                <Icon size={20} />
                                            </div>

                                            <span className="font-serif text-sm text-[#8f7746]">
                                                0{index + 1}
                                            </span>
                                        </div>

                                        <h3 className="mt-7 font-serif text-xl text-[#20235A]">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-[#1e1917]/55">
                                            {feature.description}
                                        </p>

                                        <div className="mt-7 flex items-center justify-between border-t border-[#20235A]/10 pt-5">
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#8f7746]">
                                                Library Resource
                                            </span>

                                            <ArrowUpRight
                                                size={17}
                                                className="text-[#20235A] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                            />
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    DIGITAL RESOURCES
                ========================================================== */}
                <section className="bg-white py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
                            <div className="relative h-[430px] overflow-hidden sm:h-[540px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=2000&q=90"
                                    alt="Library bookshelves and study area"
                                    fill
                                    sizes="(min-width: 768px) 40vw, 100vw"
                                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/75 via-transparent to-transparent" />

                                <div className="absolute bottom-7 left-7">
                                    <div className="flex h-12 w-12 items-center justify-center bg-[#D2B87C] text-[#20235A]">
                                        <Database size={20} />
                                    </div>

                                    <p className="mt-5 max-w-sm font-serif text-3xl leading-tight text-white">
                                        Physical resources meet digital
                                        learning.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f7746]">
                                        Digital Library
                                    </span>
                                </div>

                                <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    Academic resources beyond the
                                    <span className="text-[#8f7746]">
                                        {" "}
                                        bookshelf.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-xl text-base leading-8 text-[#1e1917]/60">
                                    Digital resources extend the library
                                    experience by providing access to
                                    additional academic information and
                                    learning materials.
                                </p>

                                <div className="mt-8 space-y-0 border-t border-[#20235A]/10">
                                    {digitalResources.map((resource, index) => (
                                        <div
                                            key={resource}
                                            className="flex items-center gap-4 border-b border-[#20235A]/10 py-4"
                                        >
                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D2B87C]/25 text-[#20235A]">
                                                <Check size={12} />
                                            </span>

                                            <span className="text-sm text-[#1e1917]/65">
                                                {resource}
                                            </span>

                                            <span className="ml-auto font-serif text-xs text-[#8f7746]">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    LIBRARY SERVICES
                ========================================================== */}
                <section className="border-y border-[#20235A]/10 bg-[#20235A]">
                    <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.75fr_1.25fr]">
                        <div className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D2B87C]">
                                    Library Services
                                </span>
                            </div>

                            <h2 className="mt-5 max-w-md font-serif text-4xl leading-tight tracking-[-0.025em] text-white sm:text-5xl">
                                Supporting every stage of
                                <span className="text-[#D2B87C]">
                                    {" "}
                                    learning.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-md text-sm leading-7 text-white/55">
                                From finding a reference book to preparing a
                                project, the library provides an academic
                                foundation for independent learning.
                            </p>
                        </div>

                        <div className="border-t border-white/10 px-5 py-10 sm:px-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-20">
                            <div className="grid gap-x-10 sm:grid-cols-2">
                                {libraryServices.map((service) => (
                                    <div
                                        key={service.number}
                                        className="border-b border-white/10 py-7"
                                    >
                                        <div className="flex items-start justify-between">
                                            <span className="font-serif text-sm text-[#D2B87C]">
                                                {service.number}
                                            </span>

                                            <ArrowUpRight
                                                size={16}
                                                className="text-white/30"
                                            />
                                        </div>

                                        <h3 className="mt-5 font-serif text-xl text-white">
                                            {service.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-white/50">
                                            {service.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    READING SPACE
                ========================================================== */}
                <section className="bg-[#f2efe8] py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_0.75fr]">
                            <div className="relative h-[380px] overflow-hidden sm:h-[500px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=2200&q=90"
                                    alt="Students studying in a library"
                                    fill
                                    sizes="(min-width: 768px) 40vw, 100vw"
                                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-r from-[#20235A]/45 to-transparent" />

                                <div className="absolute bottom-7 left-7 max-w-sm">
                                    <div className="flex h-12 w-12 items-center justify-center bg-[#D2B87C] text-[#20235A]">
                                        <LibraryBig size={21} />
                                    </div>

                                    <p className="mt-5 font-serif text-3xl leading-tight text-white">
                                        A dedicated environment for focused
                                        study.
                                    </p>
                                </div>
                            </div>

                            <div className="px-2 lg:px-8">
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f7746]">
                                        Reading & Learning
                                    </span>
                                </div>

                                <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.025em] text-[#20235A]">
                                    A space where curiosity can grow.
                                </h2>

                                <p className="mt-6 text-sm leading-8 text-[#1e1917]/60">
                                    The library provides students with a calm
                                    and focused environment for reading,
                                    preparation, research and independent
                                    academic exploration.
                                </p>

                                <div className="mt-8 space-y-4">
                                    {[
                                        "Focused individual study",
                                        "Technical reading",
                                        "Project preparation",
                                        "Academic research",
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
                    QUICK INFORMATION
                ========================================================== */}
                <section className="bg-white py-20 sm:py-24">
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f7746]">
                                        Library Information
                                    </span>
                                </div>

                                <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    Everything students need for a productive
                                    <span className="text-[#8f7746]">
                                        {" "}
                                        study session.
                                    </span>
                                </h2>
                            </div>

                            <div className="grid border border-[#20235A]/10 sm:grid-cols-2">
                                <div className="border-b border-[#20235A]/10 p-7 sm:border-r">
                                    <div className="flex items-center gap-3">
                                        <Clock3
                                            size={19}
                                            className="text-[#8f7746]"
                                        />

                                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8f7746]">
                                            Library Hours
                                        </span>
                                    </div>

                                    <p className="mt-5 font-serif text-2xl text-[#20235A]">
                                        Academic Hours
                                    </p>

                                    <p className="mt-2 text-sm leading-7 text-[#1e1917]/55">
                                        Library access is available according
                                        to the institution&apos;s academic
                                        schedule.
                                    </p>
                                </div>

                                <div className="border-b border-[#20235A]/10 p-7">
                                    <div className="flex items-center gap-3">
                                        <BookOpen
                                            size={19}
                                            className="text-[#8f7746]"
                                        />

                                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8f7746]">
                                            Collections
                                        </span>
                                    </div>

                                    <p className="mt-5 font-serif text-2xl text-[#20235A]">
                                        Academic Resources
                                    </p>

                                    <p className="mt-2 text-sm leading-7 text-[#1e1917]/55">
                                        Books, references and digital learning
                                        resources support department-level
                                        academic requirements.
                                    </p>
                                </div>

                                <div className="p-7 sm:border-r">
                                    <div className="flex items-center gap-3">
                                        <Monitor
                                            size={19}
                                            className="text-[#8f7746]"
                                        />

                                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8f7746]">
                                            Digital
                                        </span>
                                    </div>

                                    <p className="mt-5 font-serif text-2xl text-[#20235A]">
                                        Online Resources
                                    </p>

                                    <p className="mt-2 text-sm leading-7 text-[#1e1917]/55">
                                        Digital resources complement physical
                                        collections and extend learning beyond
                                        printed materials.
                                    </p>
                                </div>

                                <div className="p-7">
                                    <div className="flex items-center gap-3">
                                        <Users
                                            size={19}
                                            className="text-[#8f7746]"
                                        />

                                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8f7746]">
                                            Community
                                        </span>
                                    </div>

                                    <p className="mt-5 font-serif text-2xl text-[#20235A]">
                                        Students & Faculty
                                    </p>

                                    <p className="mt-2 text-sm leading-7 text-[#1e1917]/55">
                                        A shared academic environment for
                                        students, faculty and researchers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    ACADEMIC ACTIVITIES
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
                                Turning information into
                                <span className="text-[#D2B87C]">
                                    {" "}
                                    knowledge.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-md text-sm leading-7 text-white/55">
                                The library supports different forms of
                                academic learning, from individual reading to
                                project research and collaborative study.
                            </p>
                        </div>

                        <div className="border-t border-white/10 px-5 py-10 sm:px-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-20">
                            <div className="grid gap-x-10 sm:grid-cols-2">
                                {academicActivities.map((activity, index) => (
                                    <div
                                        key={activity}
                                        className="flex gap-4 border-b border-white/10 py-5"
                                    >
                                        <span className="font-serif text-sm text-[#D2B87C]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="text-sm leading-6 text-white/70">
                                            {activity}
                                        </span>
                                    </div>
                                ))}
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
                            <BookOpen size={20} />
                        </div>

                        <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8f7746]">
                            CSE & AI / ML Department
                        </p>

                        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[#20235A] sm:text-5xl lg:text-6xl">
                            A library that supports
                            <span className="text-[#8f7746]">
                                {" "}
                                every learning journey.
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