"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    ArrowUpRight,
    Boxes,
    ChevronRight,
    Cpu,
    Lightbulb,
    Printer,
    Settings2,
    Sparkles,
    Wrench,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import Iedcnavigation from "../../../student-support/iedc/Iedcnavigation/navigation"


const labFacilities = [
    {
        number: "01",
        title: "Lab and Equipment’s installed",
        description:
            "The IEDC laboratory provides students with dedicated equipment and facilities that support practical experimentation, innovation and prototype development.",
        image: "https://ncerc.ac.in/images/dpt/iedc/lab/1.jpg",
        href: "https://ncerc.ac.in/iedc/lab-news1",
        icon: Settings2,
    },
    {
        number: "02",
        title: "Technical Training were given to the students",
        description:
            "Students receive technical training that helps them understand the available tools and equipment while developing practical skills for innovation and project work.",
        image: "https://ncerc.ac.in/images/dpt/iedc/lab/2.jpg",
        href: "https://ncerc.ac.in/iedc/lab-news2",
        icon: Wrench,
    },
    {
        number: "03",
        title: "3D Printer is installed for the students",
        description:
            "A 3D printer is available for students to explore rapid prototyping and turn their ideas and concepts into tangible models.",
        image: "https://ncerc.ac.in/images/dpt/iedc/lab/3.jpg",
        href: "https://ncerc.ac.in/iedc/lab-news3",
        icon: Printer,
    },
];

const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#faf7f2] text-[#1E1917]">
                {/* HERO */}
                <section className="relative overflow-hidden bg-[#20235A]">
                    <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full border border-[#D2B87C]/15" />
                    <div className="absolute right-20 top-20 h-52 w-52 rounded-full border border-[#D2B87C]/10" />
                    <div className="absolute -bottom-36 -left-24 h-80 w-80 rounded-full border border-white/10" />

                    <div className="relative mx-auto max-w-[1440px] px-6 pb-20 pt-24 sm:px-10 lg:px-16 lg:pb-24 lg:pt-32">
                        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                            <div>
                                <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#D2B87C]/30 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                    <Cpu className="h-3.5 w-3.5" />
                                    IEDC · Lab Facilities
                                </div>

                                <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl xl:text-[78px]">
                                    A space where
                                    <span className="block text-[#D2B87C]">
                                        ideas take shape.
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                                    Explore the IEDC laboratory facilities at
                                    NCERC, designed to support experimentation,
                                    technical learning and rapid prototyping.
                                </p>

                                <div className="mt-9 flex flex-wrap gap-3">
                                    <Link
                                        href="#facilities"
                                        className="group inline-flex items-center gap-3 rounded-full bg-[#D2B87C] px-5 py-3 text-sm font-semibold text-[#20235A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                                    >
                                        Explore Facilities
                                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </Link>

                                    <Link
                                        href="/student-support/iedc"
                                        className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-[#D2B87C]/60 hover:bg-white/5"
                                    >
                                        About IEDC
                                        <ChevronRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:pb-2">
                                <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10">
                                    <div className="bg-white/[0.04] p-6 sm:p-7">
                                        <p className="text-3xl font-medium text-white sm:text-4xl">
                                            03
                                        </p>

                                        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
                                            Featured facilities
                                        </p>
                                    </div>

                                    <div className="bg-white/[0.04] p-6 sm:p-7">
                                        <Lightbulb className="h-6 w-6 text-[#D2B87C]" />

                                        <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
                                            Focus
                                        </p>

                                        <p className="mt-1 text-sm font-medium text-white">
                                            Innovation
                                        </p>
                                    </div>

                                    <div className="col-span-2 bg-[#D2B87C] p-6 sm:p-7">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#20235A]/55">
                                            IEDC Laboratory
                                        </p>

                                        <p className="mt-2 font-serif text-2xl text-[#20235A]">
                                            Experiment · Learn · Prototype
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/10">
                        <div className="mx-auto max-w-[1440px] px-6 py-5 sm:px-10 lg:px-16">
                            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                                <span>Equipment</span>
                                <span>Technical Training</span>
                                <span>Rapid Prototyping</span>
                                <span>Student Innovation</span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* -----navigation starts------ */}
                <Iedcnavigation />


                {/* INTRO */}
                <section className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Innovation Laboratory
                            </p>

                            <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                From concepts to physical prototypes.
                            </h2>
                        </div>

                        <div className="max-w-3xl">
                            <p className="text-lg leading-8 text-[#1E1917]/70 sm:text-xl sm:leading-9">
                                The IEDC laboratory gives students an environment
                                where ideas can be explored through practical
                                work, technical training and prototype
                                development.
                            </p>

                            <p className="mt-6 text-base leading-8 text-[#1E1917]/60">
                                With dedicated equipment, hands-on training and
                                access to 3D printing technology, the facility
                                encourages students to experiment, build and
                                refine innovative solutions.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="inline-flex items-center gap-2 rounded-full border border-[#20235A]/10 bg-white px-4 py-2.5 text-xs font-semibold text-[#20235A]">
                                    <Boxes className="h-4 w-4 text-[#8F7746]" />
                                    Equipment
                                </span>

                                <span className="inline-flex items-center gap-2 rounded-full border border-[#20235A]/10 bg-white px-4 py-2.5 text-xs font-semibold text-[#20235A]">
                                    <Wrench className="h-4 w-4 text-[#8F7746]" />
                                    Technical Skills
                                </span>

                                <span className="inline-flex items-center gap-2 rounded-full border border-[#20235A]/10 bg-white px-4 py-2.5 text-xs font-semibold text-[#20235A]">
                                    <Printer className="h-4 w-4 text-[#8F7746]" />
                                    Prototyping
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FACILITIES */}
                <section
                    id="facilities"
                    className="border-y border-[#1E1917]/10 bg-white"
                >
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                            <div className="max-w-3xl">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Lab Facilities
                                </p>

                                <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    Tools for turning imagination into action.
                                </h2>
                            </div>

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#20235A]/15 text-[#20235A]">
                                <Sparkles className="h-5 w-5" />
                            </div>
                        </div>

                        <div className="space-y-6">
                            {labFacilities.map((facility, index) => {
                                const Icon = facility.icon;

                                return (
                                    <article
                                        key={facility.number}
                                        className={`group overflow-hidden rounded-[28px] border border-[#1E1917]/10 bg-[#faf7f2] transition-all duration-500 hover:border-[#D2B87C]/60 hover:shadow-[0_24px_60px_rgba(32,35,90,0.08)] ${index === 0
                                            ? "lg:grid lg:grid-cols-[1.15fr_0.85fr]"
                                            : "lg:grid lg:grid-cols-[0.85fr_1.15fr]"
                                            }`}
                                    >
                                        {/* IMAGE */}
                                        <div
                                            className={`relative min-h-[280px] overflow-hidden bg-[#e5e1d8] lg:min-h-[420px] ${index === 1
                                                ? "lg:order-2"
                                                : ""
                                                }`}
                                        >
                                            <Image
                                                src={facility.image}
                                                alt={facility.title}
                                                fill
                                                unoptimized
                                                sizes="(max-width: 1024px) 100vw, 55vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/45 via-transparent to-transparent opacity-70" />

                                            <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#20235A]/90 text-xs font-semibold text-[#D2B87C] backdrop-blur-sm">
                                                {facility.number}
                                            </div>

                                            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full border border-white/20 bg-[#20235A]/80 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                                                <Icon className="h-3.5 w-3.5 text-[#D2B87C]" />
                                                IEDC Facility
                                            </div>
                                        </div>

                                        {/* CONTENT */}
                                        <div
                                            className={`flex flex-col justify-center p-7 sm:p-10 lg:p-14 ${index === 1
                                                ? "lg:order-1"
                                                : ""
                                                }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                                                    <Icon className="h-5 w-5" />
                                                </div>

                                                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                                    Facility {facility.number}
                                                </span>
                                            </div>

                                            <h3 className="mt-8 max-w-xl font-serif text-3xl leading-[1.05] tracking-[-0.025em] text-[#20235A] sm:text-4xl">
                                                {facility.title}
                                            </h3>

                                            <p className="mt-5 max-w-xl text-sm leading-7 text-[#1E1917]/60 sm:text-base sm:leading-8">
                                                {facility.description}
                                            </p>

                                            <div className="mt-8">
                                                <Link
                                                    href={facility.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group/link inline-flex items-center gap-3 rounded-full border border-[#20235A]/15 bg-white px-5 py-3 text-sm font-semibold text-[#20235A] transition-all duration-300 hover:border-[#20235A] hover:bg-[#20235A] hover:text-white"
                                                >
                                                    View Facility
                                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                                </Link>
                                            </div>

                                            <div className="mt-8 h-px w-12 bg-[#D2B87C] transition-all duration-300 group-hover:w-24" />
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* QUICK FACILITY OVERVIEW */}
                <section className="bg-[#f2efe8]">
                    <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="grid gap-px overflow-hidden rounded-3xl border border-[#1E1917]/10 bg-[#1E1917]/10 sm:grid-cols-3">
                            <div className="bg-white p-7 sm:p-9">
                                <Boxes className="h-6 w-6 text-[#8F7746]" />

                                <p className="mt-10 font-serif text-2xl text-[#20235A]">
                                    Equipment
                                </p>

                                <p className="mt-3 text-sm leading-7 text-[#1E1917]/55">
                                    Dedicated laboratory equipment installed to
                                    support student innovation and project
                                    development.
                                </p>
                            </div>

                            <div className="bg-white p-7 sm:p-9">
                                <Wrench className="h-6 w-6 text-[#8F7746]" />

                                <p className="mt-10 font-serif text-2xl text-[#20235A]">
                                    Technical Training
                                </p>

                                <p className="mt-3 text-sm leading-7 text-[#1E1917]/55">
                                    Hands-on technical training helps students
                                    gain practical knowledge and confidence.
                                </p>
                            </div>

                            <div className="bg-[#20235A] p-7 text-white sm:p-9">
                                <Printer className="h-6 w-6 text-[#D2B87C]" />

                                <p className="mt-10 font-serif text-2xl">
                                    3D Printing
                                </p>

                                <p className="mt-3 text-sm leading-7 text-white/55">
                                    Rapid prototyping capabilities allow
                                    students to transform digital concepts
                                    into physical models.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CLOSING CTA */}
                <section className="border-t border-[#1E1917]/10 bg-white">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
                        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    IEDC · NCERC
                                </p>

                                <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                    Innovation begins with the right space to
                                    experiment.
                                </h2>
                            </div>

                            <Link
                                href="/student-support/iedc/achievements"
                                className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#20235A] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#171a48]"
                            >
                                View Achievements
                                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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