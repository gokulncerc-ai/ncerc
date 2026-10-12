"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowRight,
    ArrowUpRight,
    BookOpen,
    Check,
    ChevronRight,
    Cpu,
    Monitor,
    Presentation,
    Sparkles,
    Users,
    Wifi,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNav from "../../DepartmentNav/DepartmentNavigation";


const BASE_PATH = "/departments/ug/cse_ai_and_ml";

const classrooms = [
    {
        number: "01",
        name: "Smart Classroom — 01",
        capacity: "60+ Students",
        type: "Technology Enabled",
        description:
            "A technology-enabled classroom designed for interactive teaching, presentations, collaborative learning and digital content delivery.",
        image:
            "https://www.mediabank-collection.com/m/591e2b7e09ba159e/landscapexl-Hogeschool-Rotterdam.jpg",
    },
    {
        number: "02",
        name: "Smart Classroom — 02",
        capacity: "60+ Students",
        type: "Interactive Learning",
        description:
            "An adaptable academic space supporting multimedia-based instruction, demonstrations, discussions and student presentations.",
        image:
            "https://i0.wp.com/www.gniotgroup.edu.in/blog/wp-content/uploads/2026/01/unnamed-2026-01-15T120102.900.jpg?resize=640%2C640&ssl=1",
    },
    {
        number: "03",
        name: "CSE Classroom — 03",
        capacity: "60+ Students",
        type: "Academic Learning",
        description:
            "A spacious learning environment designed to support focused classroom sessions, technical discussions and collaborative activities.",
        image:
            "https://jwc.swufe.edu.cn/__local/8/48/85/AA3345E0454F98836A16B417A55_9F572B90_54C23.jpg?e=.jpg",
    },
    {
        number: "04",
        name: "Smart Computer Classroom — 04",
        capacity: "60+ Students",
        type: "Digital Learning",
        description:
            "A modern technology-oriented classroom environment supporting programming, demonstrations, digital learning and academic activities.",
        image:
            "https://ican-edu.id-cgk-1.linodeobjects.com/uploads/elementor/thumbs/CurtinUniverisityPicture4.600x400_q85-rdbq9qgwafgs4msfwd3l7jwmfoq0caj4u1whzmvdio.png",
    },
];

const facilities = [
    {
        icon: Monitor,
        title: "Digital Display",
        description:
            "Digital display facilities support presentations, demonstrations, visual explanations and technology-assisted teaching.",
    },
    {
        icon: Wifi,
        title: "Connected Learning",
        description:
            "Connectivity enables students and faculty to access digital resources and online academic content when required.",
    },
    {
        icon: Presentation,
        title: "Presentation Ready",
        description:
            "Classrooms provide a suitable environment for seminars, student presentations, demonstrations and academic discussions.",
    },
    {
        icon: Users,
        title: "Collaborative Space",
        description:
            "Flexible learning environments encourage interaction, teamwork, peer learning and classroom participation.",
    },
    {
        icon: Cpu,
        title: "Technology Focused",
        description:
            "The learning environment complements a technology-oriented curriculum across computing and emerging technologies.",
    },
    {
        icon: BookOpen,
        title: "Academic Environment",
        description:
            "Designed to provide students with a focused, comfortable and structured environment for academic learning.",
    },
];

const learningFeatures = [
    "Technology-assisted classroom instruction",
    "Interactive presentations and demonstrations",
    "Student seminars and technical presentations",
    "Group discussions and collaborative learning",
    "Digital academic resources",
    "Project discussions and review sessions",
];

const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#faf7f2] text-[#1e1917]">

                {/* =========================================================
                    HERO
                ========================================================= */}
                <section className="relative overflow-hidden bg-[#20235A] px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-14 lg:pb-24 lg:pt-16">

                    {/* Decorative elements */}
                    <div className="pointer-events-none absolute -right-36 -top-36 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />

                    <div className="pointer-events-none absolute -bottom-52 -left-40 h-[500px] w-[500px] rounded-full border border-white/[0.04]" />

                    <div className="pointer-events-none absolute right-[25%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#D2B87C]/50" />

                    <div className="relative z-10 mx-auto max-w-[1440px]">

                        {/* Breadcrumb */}
                        <div className="mb-12 flex flex-wrap items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-white/45 sm:mb-16">

                            <Link
                                href="/"
                                className="no-underline transition-colors hover:text-[#D2B87C]"
                            >
                                Home
                            </Link>

                            <ChevronRight size={12} />

                            <Link
                                href={BASE_PATH}
                                className="no-underline transition-colors hover:text-[#D2B87C]"
                            >
                                CSE & AI/ML
                            </Link>

                            <ChevronRight size={12} />

                            <Link
                                href={`${BASE_PATH}/facilities/laboratories`}
                                className="no-underline transition-colors hover:text-[#D2B87C]"
                            >
                                Facilities
                            </Link>

                            <ChevronRight size={12} />

                            <span className="text-[#D2B87C]">
                                Class Rooms
                            </span>
                        </div>

                        {/* Hero */}
                        <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.55fr] lg:gap-20">

                            <div className="max-w-[850px]">

                                <div className="mb-7 flex items-center gap-3">
                                    <span className="h-px w-12 bg-[#D2B87C]" />

                                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Learning Environment
                                    </span>
                                </div>

                                <h1 className="font-serif text-[48px] font-normal leading-[1.04] tracking-[-0.035em] text-white sm:text-[62px] lg:text-[78px]">
                                    Class
                                    <span className="block text-[#D2B87C]">
                                        Rooms
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-[680px] font-sans text-[14px] leading-[1.9] text-white/60 sm:text-[16px]">
                                    Thoughtfully designed academic spaces that
                                    support focused learning, interaction,
                                    technology-enabled teaching and collaborative
                                    experiences.
                                </p>
                            </div>

                            {/* Hero side */}
                            <div className="hidden border-l border-white/15 pb-2 pl-8 lg:block">

                                <Monitor
                                    size={38}
                                    strokeWidth={1.1}
                                    className="mb-7 text-[#D2B87C]"
                                />

                                <p className="font-serif text-[27px] leading-[1.18] text-white">
                                    Spaces designed
                                    <span className="block text-[#D2B87C]">
                                        for learning.
                                    </span>
                                </p>

                                <p className="mt-5 max-w-[290px] font-sans text-[11px] leading-[1.8] text-white/40">
                                    Interactive · Connected · Collaborative ·
                                    Technology Enabled
                                </p>
                            </div>
                        </div>

                        {/* Hero metadata */}
                        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-6">

                            <div className="flex items-center gap-3">
                                <Sparkles
                                    size={16}
                                    strokeWidth={1.3}
                                    className="text-[#D2B87C]"
                                />

                                <span className="font-sans text-[9px] font-medium uppercase tracking-[0.18em] text-white/45">
                                    Smart Learning
                                </span>
                            </div>

                            <span className="hidden h-4 w-px bg-white/15 sm:block" />

                            <span className="font-sans text-[9px] font-medium uppercase tracking-[0.18em] text-white/45">
                                Interactive Teaching
                            </span>

                            <span className="hidden h-4 w-px bg-white/15 sm:block" />

                            <span className="font-sans text-[9px] font-medium uppercase tracking-[0.18em] text-white/45">
                                Collaborative Learning
                            </span>
                        </div>
                    </div>
                </section>
                <DepartmentNav />

                {/* =========================================================
                    INTRODUCTION
                ========================================================= */}
                <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-32">

                    <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">

                        <div>

                            <div className="flex items-center gap-3">
                                <span className="h-px w-10 bg-[#8f7746]" />

                                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">
                                    Academic Spaces
                                </span>
                            </div>

                            <h2 className="mt-6 max-w-[470px] font-serif text-[40px] font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-[51px]">
                                Designed for
                                <span className="block text-[#8f7746]">
                                    focused learning.
                                </span>
                            </h2>

                            <div className="mt-9 flex items-center gap-4 border-t border-[#e7e2d8] pt-6">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                    <BookOpen
                                        size={21}
                                        strokeWidth={1.3}
                                    />
                                </div>

                                <div>
                                    <p className="m-0 font-serif text-[17px] text-[#20235A]">
                                        CSE & AI/ML Classrooms
                                    </p>

                                    <p className="m-0 mt-1 font-sans text-[10px] uppercase tracking-[0.12em] text-[#918b7f]">
                                        Learning · Interaction · Technology
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 font-sans text-[14px] leading-[2] text-[#696761] sm:text-[15px]">

                            <p>
                                The classrooms of the Computer Science and
                                Engineering department provide a structured
                                environment where students engage with concepts,
                                discussions, demonstrations and collaborative
                                academic activities.
                            </p>

                            <p>
                                With technology-supported learning environments,
                                classrooms can accommodate different teaching
                                approaches including digital presentations,
                                demonstrations, technical discussions and student
                                presentations.
                            </p>

                            <p>
                                Beyond conventional classroom instruction, these
                                spaces encourage interaction between students and
                                faculty members. Group discussions, project
                                reviews, seminars and peer learning contribute to
                                a more engaging academic experience.
                            </p>

                        </div>
                    </div>
                </section>

                {/* =========================================================
                    CLASSROOM SHOWCASE
                ========================================================= */}
                <section className="bg-[#f2efe8] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">

                    <div className="mx-auto max-w-[1440px]">

                        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-20">

                            <div>

                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#8f7746]" />

                                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">
                                        Classroom Spaces
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-[39px] font-normal leading-[1.1] text-[#20235A] sm:text-[49px]">
                                    Explore the
                                    <span className="block text-[#8f7746]">
                                        classrooms.
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-[600px] font-sans text-[14px] leading-[1.95] text-[#696761] sm:text-[15px]">
                                A glimpse into modern technology-enabled
                                classroom environments designed to support
                                interactive teaching, focused learning and
                                collaboration.
                            </p>
                        </div>

                        <div className="mt-12 h-px bg-[#ded8cc]" />

                        {/* =====================================================
                            REAL CLASSROOM IMAGE CARDS
                        ===================================================== */}
                        <div className="mt-8 grid gap-5 lg:grid-cols-2">

                            {classrooms.map((room) => (
                                <article
                                    key={room.number}
                                    className="group overflow-hidden border border-[#ded8cc] bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_20px_55px_rgba(32,35,90,0.10)]"
                                >

                                    {/* Image */}
                                    <div className="relative h-[270px] overflow-hidden bg-[#20235A] sm:h-[330px]">

                                        <Image
                                            src={room.image}
                                            alt={room.name}
                                            fill
                                            sizes="(min-width: 768px) 40vw, 100vw"
                                            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                                        />

                                        {/* Image overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#11142f]/90 via-[#20235A]/10 to-transparent" />

                                        {/* Subtle dark overlay on hover */}
                                        <div className="absolute inset-0 bg-[#20235A]/0 transition-all duration-500 group-hover:bg-[#20235A]/10" />

                                        {/* Room label */}
                                        <div className="absolute left-6 top-6 flex items-center gap-3">

                                            <span className="h-px w-8 bg-[#D2B87C]" />

                                            <span className="font-sans text-[8px] font-semibold uppercase tracking-[0.2em] text-white">
                                                Room {room.number}
                                            </span>

                                        </div>

                                        {/* Image bottom information */}
                                        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">

                                            <div className="flex items-end justify-between gap-5">

                                                <div>

                                                    <p className="m-0 font-sans text-[8px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                                                        {room.type}
                                                    </p>

                                                    <h3 className="mt-2 font-serif text-[27px] font-normal leading-[1.12] text-white sm:text-[31px]">
                                                        {room.name}
                                                    </h3>

                                                </div>

                                                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/30 text-white transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                                    <ArrowUpRight
                                                        size={17}
                                                        strokeWidth={1.5}
                                                    />
                                                </span>

                                            </div>

                                        </div>
                                    </div>

                                    {/* Card content */}
                                    <div className="p-6 sm:p-7">

                                        <p className="m-0 font-sans text-[12px] leading-[1.9] text-[#77736b] sm:text-[13px]">
                                            {room.description}
                                        </p>

                                        <div className="mt-6 flex items-center justify-between border-t border-[#e7e2d8] pt-5">

                                            <span className="font-sans text-[9px] font-medium uppercase tracking-[0.15em] text-[#918b7f]">
                                                Seating Capacity
                                            </span>

                                            <span className="font-serif text-[15px] text-[#20235A]">
                                                {room.capacity}
                                            </span>

                                        </div>

                                    </div>

                                    {/* Bottom hover line */}
                                    <span className="block h-[3px] w-0 bg-[#D2B87C] transition-all duration-500 group-hover:w-full" />

                                </article>
                            ))}

                        </div>
                    </div>
                </section>

                {/* =========================================================
                    FACILITIES
                ========================================================= */}
                <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">

                    <div className="mx-auto max-w-[1440px]">

                        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-20">

                            <div>

                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#8f7746]" />

                                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">
                                        Classroom Features
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-[39px] font-normal leading-[1.1] text-[#20235A] sm:text-[49px]">
                                    Built around
                                    <span className="block text-[#8f7746]">
                                        better learning.
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-[600px] font-sans text-[14px] leading-[1.95] text-[#696761] sm:text-[15px]">
                                Classroom facilities are designed to support a
                                variety of teaching methods while creating a
                                comfortable and engaging academic environment.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-px bg-[#ded8cc] sm:grid-cols-2 lg:grid-cols-3">

                            {facilities.map((facility) => {
                                const Icon = facility.icon;

                                return (
                                    <article
                                        key={facility.title}
                                        className="group bg-white p-7 transition-colors duration-300 hover:bg-[#faf7f2] sm:p-8"
                                    >
                                        <Icon
                                            size={27}
                                            strokeWidth={1.2}
                                            className="text-[#8f7746] transition-transform duration-300 group-hover:scale-110"
                                        />

                                        <h3 className="mt-7 font-serif text-[22px] font-normal text-[#20235A]">
                                            {facility.title}
                                        </h3>

                                        <p className="mt-3 font-sans text-[12px] leading-[1.9] text-[#77736b]">
                                            {facility.description}
                                        </p>
                                    </article>
                                );
                            })}

                        </div>
                    </div>
                </section>

                {/* =========================================================
                    LEARNING ACTIVITIES
                ========================================================= */}
                <section className="bg-[#f2efe8] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">

                    <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">

                        <div>

                            <div className="flex items-center gap-3">
                                <span className="h-px w-10 bg-[#8f7746]" />

                                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">
                                    Beyond Lectures
                                </span>
                            </div>

                            <h2 className="mt-6 max-w-[440px] font-serif text-[40px] font-normal leading-[1.12] text-[#20235A] sm:text-[50px]">
                                A classroom
                                <span className="block text-[#8f7746]">
                                    that engages.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-[440px] font-sans text-[13px] leading-[1.9] text-[#77736b]">
                                Academic spaces can support different forms of
                                learning, allowing students to participate,
                                collaborate and communicate their ideas.
                            </p>
                        </div>

                        <div className="border-t border-[#ded8cc]">

                            {learningFeatures.map((feature, index) => (
                                <div
                                    key={feature}
                                    className="group flex items-center gap-5 border-b border-[#ded8cc] py-5"
                                >
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-[#d8d1c4] text-[#8f7746] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A]">
                                        <Check
                                            size={13}
                                            strokeWidth={1.7}
                                            className="group-hover:text-[#D2B87C]"
                                        />
                                    </span>

                                    <span className="font-sans text-[13px] leading-[1.6] text-[#55524d] sm:text-[14px]">
                                        {feature}
                                    </span>

                                    <span className="ml-auto font-serif text-[11px] text-[#a49d91]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                {/* =========================================================
                    CTA
                ========================================================= */}
                <section className="bg-[#20235A] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">

                    <div className="mx-auto max-w-[1440px]">

                        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto] lg:gap-20">

                            <div>

                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Explore CSE & AI/ML
                                    </span>
                                </div>

                                <h2 className="mt-6 max-w-[760px] font-serif text-[39px] font-normal leading-[1.12] text-white sm:text-[50px]">
                                    Explore the spaces
                                    <span className="block text-[#D2B87C]">
                                        where learning happens.
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-[650px] font-sans text-[13px] leading-[1.9] text-white/50 sm:text-[14px]">
                                    Discover the laboratories, faculty and
                                    academic opportunities within the Computer
                                    Science & Engineering department.
                                </p>

                            </div>

                            <Link
                                href={BASE_PATH}
                                className="group inline-flex w-fit items-center gap-4 border border-[#D2B87C]/60 px-6 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D2B87C] no-underline transition-all duration-300 hover:bg-[#D2B87C] hover:text-[#20235A] sm:px-8 sm:py-5"
                            >
                                Back to Department

                                <ArrowRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Link>

                        </div>

                        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">

                            <div className="flex items-center gap-3">

                                <Monitor
                                    size={18}
                                    strokeWidth={1.3}
                                    className="text-[#D2B87C]"
                                />

                                <p className="m-0 font-sans text-[10px] uppercase tracking-[0.15em] text-white/40">
                                    CSE & AI/ML Classrooms
                                </p>

                            </div>

                            <span className="font-sans text-[9px] uppercase tracking-[0.16em] text-white/30">
                                NCERC
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