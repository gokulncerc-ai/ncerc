
"use client";

import React from "react";
import Link from "next/link";
import {
    ArrowDown,
    ArrowLeft,
    BookOpen,
    Quote,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../departmentnavigation/DepartmentNavigation";

const BASE_PATH = "/applied-science-and-humanities";

export default function HODDeskPage() {
    return (
        <>
            <SiteHeader />

            <main className="min-h-screen bg-[#FAF7F2] text-[#1E1917] [&_p]:text-justify">

                {/* HERO SECTION */}
                <section className="relative overflow-hidden bg-[#20235A] text-white">
                    {/* Decorative Elements */}
                    <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-[#D2B87C]/15" />
                    <div className="pointer-events-none absolute -right-8 -top-16 h-72 w-72 rounded-full border border-[#D2B87C]/20" />
                    <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full border border-[#D2B87C]/10" />

                    <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28 xl:px-20">
                        <div className="relative z-10 max-w-5xl">

                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C] sm:text-xs">
                                    Applied Science & Humanities
                                </p>
                            </div>

                            <h1 className="max-w-4xl font-serif text-[43px] font-normal leading-[1.08] tracking-[-0.035em] sm:text-[58px] lg:text-[68px] xl:text-[76px]">
                                A Message
                                <br />
                                from the{" "}
                                <span className="italic text-[#D2B87C]">
                                    HOD
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                                Building strong academic foundations through
                                scientific understanding, practical learning,
                                and the development of essential professional
                                skills.
                            </p>

                            <div className="mt-9">
                                <a
                                    href="#hod-message"
                                    className="group inline-flex min-h-12 items-center gap-3 bg-[#D2B87C] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#20235A] transition-colors duration-300 hover:bg-white"
                                >
                                    Read the Message

                                    <ArrowDown
                                        size={15}
                                        className="transition-transform duration-300 group-hover:translate-y-1"
                                    />
                                </a>
                            </div>

                            <div className="mt-14 flex flex-wrap items-center gap-3 text-xs text-white/55">
                                <Link
                                    href={BASE_PATH}
                                    className="transition-colors hover:text-white"
                                >
                                    Department
                                </Link>

                                <span className="text-[#D2B87C]">/</span>

                                <span className="text-white/85">
                                    HOD&apos;s Desk
                                </span>
                            </div>
                        </div>

                        {/* Bottom Decorative Information */}
                        <div className="mt-16 grid max-w-4xl gap-6 border-t border-white/15 pt-7 sm:grid-cols-2">
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#D2B87C]/40 text-[#D2B87C]">
                                    <BookOpen size={19} strokeWidth={1.4} />
                                </div>

                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Academic Foundation
                                    </p>

                                    <p className="mt-1 text-sm leading-6 text-white/75">
                                        Building essential knowledge and
                                        understanding for engineering education.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#D2B87C]/40 text-[#D2B87C]">
                                    <Quote size={19} strokeWidth={1.4} />
                                </div>

                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Our Vision
                                    </p>

                                    <p className="mt-1 text-sm leading-6 text-white/75">
                                        Empowering students with analytical
                                        thinking and communicative competence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-1 w-full bg-[#D2B87C]" />
                </section>

                {/* DEPARTMENT NAVIGATION */}
                <DepartmentNavigation />

                {/* HOD MESSAGE SECTION */}
                <section
                    id="hod-message"
                    className="scroll-mt-20 bg-[#FAF7F2] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20"
                >
                    <div className="mx-auto max-w-[1200px]">

                        {/* Section Heading */}
                        <div className="mb-12">
                            <div className="mb-4 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#927B4D]">
                                    From the Head of the Department
                                </p>
                            </div>

                            <h2 className="max-w-3xl font-serif text-3xl font-normal leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                Welcome to the Department of
                                <span className="italic text-[#927B4D]">
                                    {" "}Applied Science & Humanities
                                </span>
                            </h2>

                            <div className="mt-6 h-[2px] w-16 bg-[#D2B87C]" />
                        </div>

                        {/* Message Content */}
                        <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:gap-16">

                            <div className="max-w-3xl">
                                <p className="mb-7 text-sm font-medium leading-8 text-[#393947] sm:text-base">
                                    Welcome to the Department of Applied Science
                                    & Humanities (AS&H), NCERC.
                                </p>

                                <div className="space-y-6 text-sm leading-8 text-[#55535B] sm:text-base sm:leading-9">
                                    <p>
                                        It is with great pleasure that I welcome you to the Department of Applied Science and Humanities. As the foundational pillar of this institution, our mission is to prepare you for the technical challenges of Engineering and beyond.
                                    </p>

                                    <p>
                                        The faculty is committed to guide you during the transition from higher secondary education to a Professional career. Our goal is to empower students with the analytical thinking and communicative competence needed to solve complex societal problems.
                                    </p>

                                    <p>
                                        I encourage you to approach your studies with passion and curiosity.

                                    </p>
                                </div>
                            </div>

                            {/* Message Highlight Panel */}
                            <aside className="h-fit border border-[#E6DFD3] bg-white p-7 sm:p-8">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center bg-[#FAF7F2] text-[#927B4D]">
                                    <Quote size={23} strokeWidth={1.3} />
                                </div>

                                <p className="font-serif text-xl font-normal italic leading-9 text-[#20235A] sm:text-2xl">
                                    “We cannot always build the future for our youth, but we can build our youth for the future”
                                </p>

                                <div className="mt-7 h-[2px] w-12 bg-[#D2B87C]" />

                                <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                    A Message to Our Students
                                </p>
                            </aside>
                        </div>
                    </div>
                </section>




            </main>

            <FooterSection />
        </>
    );
}
