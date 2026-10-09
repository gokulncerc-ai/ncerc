"use client";

import React from "react";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    BrainCircuit,
    ChevronRight,
    Code2,
    Cpu,
    Database,
    FlaskConical,
    Network,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNav from "../../DepartmentNav/page";


const BASE_PATH = "/departments/ug/cse_ai_and_ml";

const laboratoryAreas = [
    {
        number: "01",
        title: "Programming & Development",
        description:
            "Dedicated computing environments where students strengthen programming fundamentals, software development practices and application-building skills.",
        icon: Code2,
    },
    {
        number: "02",
        title: "Artificial Intelligence & ML",
        description:
            "A learning environment for exploring artificial intelligence, machine learning, intelligent systems and data-driven applications.",
        icon: BrainCircuit,
    },
    {
        number: "03",
        title: "Database Systems",
        description:
            "Practical exposure to database concepts, data management, structured information systems and database-driven applications.",
        icon: Database,
    },
    {
        number: "04",
        title: "Computer Networks",
        description:
            "Hands-on learning in networking concepts, communication systems, network configuration and digital infrastructure.",
        icon: Network,
    },
    {
        number: "05",
        title: "Computer Systems",
        description:
            "Practical understanding of computer architecture, operating systems, hardware interfaces and system-level computing.",
        icon: Cpu,
    },
    {
        number: "06",
        title: "Cyber Security",
        description:
            "An environment for understanding information security, secure computing practices, vulnerabilities and digital protection.",
        icon: ShieldCheck,
    },
];

const highlights = [
    "Hands-on programming and software development",
    "Artificial Intelligence and Machine Learning experimentation",
    "Database design and application development",
    "Computer networking and infrastructure concepts",
    "Project-based technical learning",
    "Practical exposure to emerging technologies",
];

const learningSteps = [
    {
        number: "01",
        title: "Learn",
        description:
            "Understand concepts through structured academic instruction and demonstrations.",
    },
    {
        number: "02",
        title: "Experiment",
        description:
            "Apply theoretical knowledge through practical sessions, exercises and laboratory work.",
    },
    {
        number: "03",
        title: "Build",
        description:
            "Transform ideas into software, systems and technology-driven academic projects.",
    },
    {
        number: "04",
        title: "Innovate",
        description:
            "Explore emerging technologies and develop solutions to real-world problems.",
    },
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
                    <div className="pointer-events-none absolute -right-32 -top-32 h-[430px] w-[430px] rounded-full border border-[#D2B87C]/10" />

                    <div className="pointer-events-none absolute -bottom-48 -left-32 h-[460px] w-[460px] rounded-full border border-white/[0.04]" />

                    <div className="pointer-events-none absolute right-[15%] top-[35%] h-2 w-2 rounded-full bg-[#D2B87C]/40" />

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

                            <span className="text-[#D2B87C]">
                                Laboratories
                            </span>
                        </div>

                        {/* Hero content */}
                        <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.55fr] lg:gap-20">

                            <div className="max-w-[850px]">

                                <div className="mb-7 flex items-center gap-3">
                                    <span className="h-px w-12 bg-[#D2B87C]" />

                                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Practical Learning Environment
                                    </span>
                                </div>

                                <h1 className="font-serif text-[48px] font-normal leading-[1.04] tracking-[-0.035em] text-white sm:text-[62px] lg:text-[78px]">
                                    CSE & AI/ML
                                    <span className="block text-[#D2B87C]">
                                        Laboratories
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-[680px] font-sans text-[14px] leading-[1.9] text-white/60 sm:text-[16px]">
                                    A practical environment where students transform
                                    concepts into skills through experimentation,
                                    programming, innovation and technology-driven
                                    learning.
                                </p>
                            </div>

                            {/* Hero side panel */}
                            <div className="hidden border-l border-white/15 pb-2 pl-8 lg:block">

                                <FlaskConical
                                    size={38}
                                    strokeWidth={1.1}
                                    className="mb-7 text-[#D2B87C]"
                                />

                                <p className="font-serif text-[27px] leading-[1.18] text-white">
                                    Learn through
                                    <span className="block text-[#D2B87C]">
                                        experience.
                                    </span>
                                </p>

                                <p className="mt-5 max-w-[290px] font-sans text-[11px] leading-[1.8] text-white/40">
                                    Programming · AI · Data · Networks · Security
                                    · Systems
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
                                    Hands-on Learning
                                </span>
                            </div>

                            <span className="hidden h-4 w-px bg-white/15 sm:block" />

                            <span className="font-sans text-[9px] font-medium uppercase tracking-[0.18em] text-white/45">
                                Technology & Innovation
                            </span>

                            <span className="hidden h-4 w-px bg-white/15 sm:block" />

                            <span className="font-sans text-[9px] font-medium uppercase tracking-[0.18em] text-white/45">
                                Project Based Learning
                            </span>
                        </div>
                    </div>
                </section>
                <DepartmentNav />

                {/* =========================================================
                    OVERVIEW
                ========================================================= */}
                <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-32">

                    <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">

                        {/* Left */}
                        <div>

                            <div className="flex items-center gap-3">
                                <span className="h-px w-10 bg-[#8f7746]" />

                                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">
                                    Laboratory Overview
                                </span>
                            </div>

                            <h2 className="mt-6 max-w-[480px] font-serif text-[40px] font-normal leading-[1.12] tracking-[-0.025em] text-[#20235A] sm:text-[51px]">
                                Where ideas become
                                <span className="block text-[#8f7746]">
                                    practical skills.
                                </span>
                            </h2>

                            <div className="mt-9 flex items-center gap-4 border-t border-[#e7e2d8] pt-6">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                    <FlaskConical
                                        size={22}
                                        strokeWidth={1.3}
                                    />
                                </div>

                                <div>
                                    <p className="m-0 font-serif text-[17px] text-[#20235A]">
                                        Practical Computing
                                    </p>

                                    <p className="m-0 mt-1 font-sans text-[10px] uppercase tracking-[0.12em] text-[#918b7f]">
                                        CSE — Artificial Intelligence & Machine Learning
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right content */}
                        <div className="space-y-6 font-sans text-[14px] leading-[2] text-[#696761] sm:text-[15px]">

                            <p>
                                The laboratories of the Computer Science and
                                Engineering department provide students with
                                opportunities to connect classroom learning with
                                practical experience. Through regular laboratory
                                sessions, students can explore computing concepts,
                                develop technical skills and gain confidence in
                                applying their knowledge.
                            </p>

                            <p>
                                The learning environment supports a broad range of
                                areas including programming, computer systems,
                                databases, networking, artificial intelligence,
                                machine learning and information security.
                                Practical exposure helps students understand how
                                technologies work beyond theoretical concepts.
                            </p>

                            <p>
                                Laboratory activities are also an important part of
                                project-based learning. Students can use their
                                technical knowledge to develop applications,
                                experiment with solutions, analyse problems and
                                explore new ideas.
                            </p>

                        </div>
                    </div>
                </section>

                {/* =========================================================
                    LABORATORY AREAS
                ========================================================= */}
                <section className="bg-[#f2efe8] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">

                    <div className="mx-auto max-w-[1440px]">

                        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-20">

                            <div>

                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#8f7746]" />

                                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">
                                        Laboratory Ecosystem
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-[39px] font-normal leading-[1.1] text-[#20235A] sm:text-[49px]">
                                    Explore the
                                    <span className="block text-[#8f7746]">
                                        learning spaces.
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-[600px] font-sans text-[14px] leading-[1.95] text-[#696761] sm:text-[15px]">
                                Different laboratory areas support students across
                                the major domains of computer science and emerging
                                technologies, creating opportunities for both
                                foundational learning and advanced exploration.
                            </p>
                        </div>

                        <div className="mt-12 h-px bg-[#ded8cc]" />

                        {/* Cards */}
                        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                            {laboratoryAreas.map((lab) => {
                                const Icon = lab.icon;

                                return (
                                    <article
                                        key={lab.number}
                                        className="group relative flex min-h-[285px] flex-col justify-between overflow-hidden border border-[#ded8cc] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_20px_55px_rgba(32,35,90,0.08)] sm:p-7 lg:p-8"
                                    >
                                        <div className="flex items-start justify-between">

                                            <span className="font-serif text-[15px] text-[#8f7746]">
                                                {lab.number}
                                            </span>

                                            <span className="flex h-9 w-9 items-center justify-center border border-[#e5e0d6] text-[#20235A] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                                                <ArrowUpRight size={16} />
                                            </span>
                                        </div>

                                        <div className="mt-8">

                                            <Icon
                                                size={27}
                                                strokeWidth={1.2}
                                                className="text-[#8f7746] transition-transform duration-300 group-hover:scale-110"
                                            />

                                            <h3 className="mt-6 font-serif text-[24px] font-normal leading-[1.15] text-[#20235A]">
                                                {lab.title}
                                            </h3>

                                            <p className="mt-4 font-sans text-[12px] leading-[1.9] text-[#77736b] sm:text-[13px]">
                                                {lab.description}
                                            </p>
                                        </div>

                                        <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#D2B87C] transition-all duration-500 group-hover:w-full" />
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    HIGHLIGHTS
                ========================================================= */}
                <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">

                    <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

                        <div>

                            <div className="flex items-center gap-3">
                                <span className="h-px w-10 bg-[#8f7746]" />

                                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">
                                    Learning Experience
                                </span>
                            </div>

                            <h2 className="mt-6 max-w-[440px] font-serif text-[40px] font-normal leading-[1.12] text-[#20235A] sm:text-[50px]">
                                More than a
                                <span className="block text-[#8f7746]">
                                    laboratory.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-[430px] font-sans text-[13px] leading-[1.9] text-[#77736b]">
                                Laboratory learning is designed to encourage
                                experimentation, problem-solving and the practical
                                application of computing concepts.
                            </p>
                        </div>

                        <div className="grid border-t border-[#e5e0d6]">

                            {highlights.map((highlight, index) => (
                                <div
                                    key={highlight}
                                    className="group flex items-center gap-5 border-b border-[#e5e0d6] py-5"
                                >
                                    <span className="font-serif text-[13px] text-[#8f7746]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="h-px w-7 bg-[#D2B87C] transition-all duration-300 group-hover:w-12" />

                                    <p className="m-0 font-sans text-[13px] leading-[1.6] text-[#55524d] sm:text-[14px]">
                                        {highlight}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                {/* =========================================================
                    LEARNING PROCESS
                ========================================================= */}
                <section className="bg-[#20235A] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">

                    <div className="mx-auto max-w-[1440px]">

                        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

                            <div>

                                <div className="flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Practical Learning
                                    </span>
                                </div>

                                <h2 className="mt-6 font-serif text-[39px] font-normal leading-[1.1] text-white sm:text-[49px]">
                                    Learn.
                                    <span className="block text-[#D2B87C]">
                                        Experiment.
                                    </span>
                                    <span className="block">
                                        Create.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-[430px] font-sans text-[13px] leading-[1.9] text-white/50">
                                    The laboratory environment encourages students
                                    to move from understanding concepts to creating
                                    practical technology solutions.
                                </p>
                            </div>

                            <div className="grid gap-px bg-white/10 sm:grid-cols-2">

                                {learningSteps.map((step) => (
                                    <article
                                        key={step.number}
                                        className="bg-[#20235A] p-7 sm:p-8"
                                    >
                                        <span className="font-serif text-[14px] text-[#D2B87C]">
                                            {step.number}
                                        </span>

                                        <h3 className="mt-8 font-serif text-[26px] font-normal text-white">
                                            {step.title}
                                        </h3>

                                        <p className="mt-3 font-sans text-[12px] leading-[1.9] text-white/45">
                                            {step.description}
                                        </p>
                                    </article>
                                ))}

                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    CTA
                ========================================================= */}
                <section className="bg-[#faf7f2] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">

                    <div className="mx-auto max-w-[1440px]">

                        <div className="border border-[#ded8cc] bg-white p-8 sm:p-10 lg:p-14">

                            <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto] lg:gap-20">

                                <div>

                                    <div className="flex items-center gap-3">
                                        <span className="h-px w-10 bg-[#8f7746]" />

                                        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8f7746]">
                                            Explore More
                                        </span>
                                    </div>

                                    <h2 className="mt-6 max-w-[700px] font-serif text-[38px] font-normal leading-[1.12] text-[#20235A] sm:text-[48px]">
                                        Discover the
                                        <span className="text-[#8f7746]">
                                            {" "}CSE & AI/ML
                                        </span>
                                        <span className="block">
                                            department.
                                        </span>
                                    </h2>

                                    <p className="mt-5 max-w-[650px] font-sans text-[13px] leading-[1.9] text-[#77736b]">
                                        Explore the department's academic profile,
                                        career opportunities, faculty and other
                                        learning resources.
                                    </p>
                                </div>

                                <Link
                                    href={BASE_PATH}
                                    className="group inline-flex w-fit items-center gap-4 border border-[#20235A] px-6 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#20235A] no-underline transition-all duration-300 hover:bg-[#20235A] hover:text-[#D2B87C] sm:px-8 sm:py-5"
                                >
                                    Back to Department

                                    <ArrowRight
                                        size={16}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </Link>

                            </div>

                            <div className="mt-10 flex flex-col gap-3 border-t border-[#e5e0d6] pt-6 sm:flex-row sm:items-center sm:justify-between">

                                <div className="flex items-center gap-3">
                                    <FlaskConical
                                        size={17}
                                        strokeWidth={1.3}
                                        className="text-[#8f7746]"
                                    />

                                    <span className="font-sans text-[9px] uppercase tracking-[0.15em] text-[#918b7f]">
                                        CSE & AI/ML Laboratories
                                    </span>
                                </div>

                                <span className="font-sans text-[9px] uppercase tracking-[0.16em] text-[#918b7f]">
                                    NCERC
                                </span>

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
