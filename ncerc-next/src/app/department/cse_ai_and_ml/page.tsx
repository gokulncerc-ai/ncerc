"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowRight,
    BrainCircuit,
    GraduationCap,
    Sparkles,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNav from "./DepartmentNav/DepartmentNavigation";



const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#faf7f2] text-[#1e1917]">

                {/* =========================================================
                    PREMIUM HERO
                ========================================================= */}

                <section className="relative overflow-hidden bg-[#20235A]">
                    <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
                        <div className="grid min-h-[720px] items-stretch lg:grid-cols-[1fr_0.82fr]">

                            {/* Hero Content */}
                            <div className="flex flex-col justify-center py-20 lg:py-28 lg:pr-16">

                                <div className="mb-8 flex flex-wrap items-center gap-4">
                                    <span className="h-px w-12 bg-[#D2B87C]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                        Department of Engineering
                                    </span>
                                </div>

                                <h1 className="max-w-4xl font-serif text-[46px] leading-[0.97] tracking-[-0.035em] text-white sm:text-[60px] lg:text-[70px] xl:text-[78px]">
                                    Computer Science
                                    <span className="block text-[#D2B87C]">
                                        &amp; Engineering
                                    </span>
                                    <span className="mt-4 block max-w-[620px] font-sans text-[11px] font-medium uppercase leading-relaxed tracking-[0.2em] text-white/65 sm:text-[13px] lg:text-[14px]">
                                        Artificial Intelligence &amp; Machine Learning
                                    </span>
                                </h1>

                                <p className="mt-8 max-w-2xl text-[16px] leading-8 text-white/70 sm:text-[17px]">
                                    Explore the world of intelligent computing, machine
                                    learning, research and emerging technologies through
                                    the Computer Science and Engineering (AI &amp; ML)
                                    department at NCERC.
                                </p>

                                <div className="mt-10 flex flex-wrap items-center gap-5">
                                    <a
                                        href="#department-about"
                                        className="group inline-flex items-center gap-3 bg-[#D2B87C] px-6 py-4 text-sm font-semibold text-[#20235A] transition hover:bg-white"
                                    >
                                        Explore Department

                                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>

                                    <a
                                        href="#hod-message"
                                        className="flex items-center gap-3 text-sm text-white/55 transition-colors duration-300 hover:text-[#D2B87C]"
                                    >
                                        <span className="h-2 w-2 rounded-full bg-[#D2B87C]" />
                                        HOD&apos;s Message
                                    </a>
                                </div>

                                {/* Department Highlight */}
                                <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-7">
                                    <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/40">
                                        <BrainCircuit className="h-5 w-5 text-[#D2B87C]" />
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                            Department Focus
                                        </p>

                                        <p className="mt-1 text-sm text-white/55">
                                            Artificial Intelligence, Machine Learning and Intelligent Computing
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="relative min-h-[450px] overflow-hidden lg:min-h-full">

                                <Image
                                    src="\images\dpt\cse_ai_ml\CSEAi_Ml_Hero_Img.webp"
                                    alt="Artificial Intelligence and Machine Learning Technology"
                                    fill
                                    priority
                                    sizes="(min-width: 1024px) 45vw, 100vw"
                                    className="absolute inset-0 h-full w-full object-cover object-center"
                                />

                                <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/20 to-transparent" />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/80 via-transparent to-transparent" />

                                {/* Floating Information Panel */}
                                <div className="absolute bottom-8 left-8 right-8 border border-white/20 bg-[#20235A]/75 p-6 backdrop-blur-md sm:left-10 sm:right-10 sm:p-7">

                                    <div className="flex items-start justify-between gap-5">
                                        <div>
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                                Artificial Intelligence &amp; Machine Learning
                                            </span>

                                            <p className="mt-3 max-w-sm font-serif text-[23px] leading-tight text-white">
                                                Intelligence that drives innovation and shapes the future of computing.
                                            </p>
                                        </div>

                                        <BrainCircuit className="mt-1 h-6 w-6 shrink-0 text-[#D2B87C]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-[#D2B87C]/20" />
                </section>


                {/* =========================================================
                    DEPARTMENT NAVIGATION
                ========================================================= */}
                <DepartmentNav activeTab="About" />

                {/* =========================================================
                    ABOUT THE DEPARTMENT
                ========================================================= */}

                <section
                    id="department-about"
                    className="relative overflow-hidden bg-[#FAF7F2] px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16"
                >
                    {/* Background accents */}
                    <div className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full border border-[#D2B87C]/15" />
                    <div className="pointer-events-none absolute -right-12 top-40 h-[300px] w-[300px] rounded-full border border-[#D2B87C]/10" />

                    <div className="relative mx-auto max-w-[1440px]">

                        {/* Section heading */}
                        <div className="mb-8 max-w-3xl lg:mb-10">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#927B4D]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#927B4D] sm:text-xs">
                                    Discover Our Department
                                </span>
                            </div>

                            <h2 className="max-w-xl font-serif text-[38px] leading-[1.08] tracking-[-0.03em] text-[#20235A] sm:text-[48px] lg:text-[56px]">
                                About the
                                <span className="block italic text-[#927B4D]">
                                    Department
                                </span>
                            </h2>

                            <p className="mt-4 max-w-2xl text-sm leading-8 text-[#66636A] sm:text-base">
                                Exploring intelligent technologies, advancing innovation
                                and preparing students for the future of computing.
                            </p>
                        </div>

                        {/* Main content */}
                        <div className="grid items-start gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">

                            {/* Left visual panel */}
                            <div className="relative">
                                <div className="relative overflow-hidden bg-[#20235A]">

                                    {/* Decorative background elements */}
                                    <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#D2B87C]/20" />
                                    <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-[#D2B87C]/15" />

                                    <div className="relative flex min-h-[360px] flex-col justify-between p-7 sm:min-h-[420px] sm:p-9 lg:min-h-[480px] lg:p-10">

                                        {/* Icon and label */}
                                        <div>
                                            <div className="flex h-14 w-14 items-center justify-center border border-[#D2B87C]/40 bg-white/[0.04]">
                                                <BrainCircuit className="h-7 w-7 text-[#D2B87C]" />
                                            </div>

                                            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                                CSE · Artificial Intelligence & ML
                                            </p>
                                        </div>

                                        {/* Main visual message */}
                                        <div className="relative mt-12">
                                            <span className="mb-5 block h-px w-12 bg-[#D2B87C]" />

                                            <h3 className="max-w-sm font-serif text-[32px] leading-[1.12] text-white sm:text-[40px] lg:text-[46px]">
                                                Building
                                                <span className="block italic text-[#D2B87C]">
                                                    Intelligent
                                                </span>
                                                Futures.
                                            </h3>

                                            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
                                                Where intelligent computing meets creativity,
                                                research and real-world innovation.
                                            </p>
                                        </div>

                                        {/* Bottom label */}
                                        <div className="mt-10 flex items-center justify-between border-t border-white/15 pt-5">
                                            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                                                Artificial Intelligence
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                                                Machine Learning
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom decorative frame */}
                                <div className="absolute -bottom-3 -left-3 -right-3 -top-3 -z-10 border border-[#D2B87C]/60" />
                            </div>

                            {/* About Content */}
                            <div className="min-w-0">

                                {/* Introduction */}
                                <div className="border-b border-[#DDD5C7] pb-8 sm:pb-9">

                                    <div className="mb-5 flex items-center gap-3">
                                        <span className="h-px w-8 bg-[#D2B87C]" />

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                            Understanding AI & ML
                                        </p>
                                    </div>

                                    <h3 className="font-serif text-2xl leading-snug text-[#20235A] sm:text-3xl">
                                        Transforming the Way We Think, Learn and Innovate.
                                    </h3>

                                    <p className="mt-5 text-justify text-sm leading-8 text-[#66636A] sm:text-[15px] sm:leading-9">
                                        <strong className="font-semibold text-[#20235A]">
                                            Artificial Intelligence (AI)
                                        </strong>{" "}
                                        enables machines to simulate human behaviour, while{" "}
                                        <strong className="font-semibold text-[#20235A]">
                                            Machine Learning (ML)
                                        </strong>
                                        —a specialized subset of AI—empowers systems to learn
                                        from historical data without being explicitly
                                        programmed. Together, AI and ML create intelligent
                                        systems capable of solving complex, real-world problems.
                                    </p>
                                </div>

                                {/* Highlight statement */}
                                <div className="relative my-6 overflow-hidden bg-[#20235A] px-6 py-6 sm:px-8 sm:py-8">

                                    <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full border border-white/[0.08]" />

                                    <div className="relative">
                                        <BrainCircuit className="mb-5 h-7 w-7 text-[#D2B87C]" />

                                        <p className="max-w-2xl font-serif text-xl leading-relaxed text-white sm:text-2xl">
                                            Intelligent systems are reshaping industries
                                            and creating new possibilities for the future.
                                        </p>

                                        <div className="mt-6 h-px w-12 bg-[#D2B87C]" />

                                        <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                            The Future of Intelligent Computing
                                        </p>
                                    </div>
                                </div>

                                {/* Career and academic scope */}
                                <div className="border-l-[3px] border-[#D2B87C] bg-[#F2EFE8] px-6 py-6 sm:px-8 sm:py-7">

                                    <div className="mb-4 flex items-center gap-3">
                                        <GraduationCap className="h-6 w-6 text-[#927B4D]" />

                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                            Academic & Career Opportunities
                                        </p>
                                    </div>

                                    <p className="text-justify text-sm leading-8 text-[#66636A] sm:text-[15px] sm:leading-9">
                                        As AI continues to automate manual tasks globally, the
                                        career landscape in this sector is expanding rapidly.
                                        This shift has led to a surge in students enrolling in{" "}
                                        <strong className="font-semibold text-[#20235A]">
                                            B.Tech Computer Science and Engineering (Artificial
                                            Intelligence & Machine Learning)
                                        </strong>{" "}
                                        program. Known for its remunerative and promising
                                        scope, this degree offers applications across nearly
                                        every industry in India and around the Globe. Through
                                        this program, students gain the theoretical
                                        foundations and practical expertise necessary to
                                        excel in a high-growth career.
                                    </p>
                                </div>

                                {/* Bottom highlight */}
                                <div className="mt-8 flex items-center gap-4 border-t border-[#DDD5C7] pt-6">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                        <Sparkles className="h-5 w-5" />
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                            Our Academic Focus
                                        </p>

                                        <p className="mt-1 text-sm font-medium text-[#20235A]">
                                            Intelligent Computing · Research · Innovation
                                        </p>
                                    </div>
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
