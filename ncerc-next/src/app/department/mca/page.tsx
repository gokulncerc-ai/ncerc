"use client";

import React from "react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import {
    ArrowUpRight,
    Award,
    Laptop,
    ArrowRight,
} from "lucide-react";
import McaNavigation from "./mcanavigation/mcanavigation";
import Image from "next/image";

const Page = () => {
    return (
        <main className="min-h-screen overflow-x-hidden bg-[#FAF7F2] text-[#1E1917]">
            <SiteHeader />

            {/* =====================================================
                HERO
            ===================================================== */}
            <section className="relative overflow-hidden bg-[#20235A]">
                <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
                    <div className="grid min-h-[720px] items-stretch lg:grid-cols-[1fr_0.82fr]">

                        {/* Hero Content */}
                        <div className="flex flex-col justify-center py-20 lg:py-28 lg:pr-16">

                            <div className="mb-8 flex flex-wrap items-center gap-4">
                                <span className="h-px w-12 bg-[#D2B87C]" />

                                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                    Department of Computer Applications
                                </span>
                            </div>

                            <h1 className="max-w-4xl font-serif text-[46px] leading-[0.97] tracking-[-0.035em] text-white sm:text-[60px] lg:text-[70px] xl:text-[78px]">
                                Master of
                                <span className="block text-[#D2B87C]">
                                    Computer Applications
                                </span>
                            </h1>

                            <p className="mt-5 max-w-xl text-[14px] font-semibold uppercase tracking-[0.14em] text-white/50">
                                Computing • Software Development • Technology
                            </p>

                            <p className="mt-8 max-w-2xl text-[16px] leading-8 text-white/70 sm:text-[17px]">
                                A two-year postgraduate programme combining intensive
                                theory, practical learning, software development,
                                contemporary computing technologies and
                                industry-oriented applications.
                            </p>

                            <div className="mt-10 flex flex-wrap items-center gap-5">
                                <a
                                    href="#about"
                                    className="group inline-flex items-center gap-3 bg-[#D2B87C] px-6 py-4 text-sm font-semibold text-[#20235A] transition hover:bg-white"
                                >
                                    Explore MCA
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>

                                <a
                                    href="#eligibility"
                                    className="inline-flex items-center gap-3 border border-white/25 px-6 py-4 text-sm font-semibold text-white transition hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                >
                                    Admission Eligibility
                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                                </a>
                            </div>

                            {/* Programme Information */}
                            <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-7">
                                <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/40">
                                    <Award className="h-5 w-5 text-[#D2B87C]" />
                                </div>

                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Accreditation
                                    </p>

                                    <p className="mt-1 text-sm text-white/55">
                                        NBA Accredited Programme
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative min-h-[450px] overflow-hidden lg:min-h-full">
                            <Image
                                src="https://i.pinimg.com/1200x/56/f0/94/56f0948a321f717f084a768fc5a888d2.jpg"
                                alt="Students working with computers"
                                fill
                                priority
                                sizes="(min-width: 1024px) 45vw, 100vw"
                                className="absolute inset-0 h-full w-full object-cover object-center"
                            />

                            <div className="absolute inset-0 bg-gradient-to-r from-[#20235A] via-[#20235A]/20 to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8 border border-white/20 bg-[#20235A]/75 p-6 backdrop-blur-md sm:left-10 sm:right-10 sm:p-7">
                                <div className="flex items-start justify-between gap-5">
                                    <div>
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                            Computing Education
                                        </span>

                                        <p className="mt-3 max-w-sm font-serif text-[23px] leading-tight text-white">
                                            Knowledge, innovation and technology for tomorrow.
                                        </p>
                                    </div>

                                    <Laptop className="mt-1 h-6 w-6 shrink-0 text-[#D2B87C]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-[#D2B87C]/20" />
            </section>


            {/* =====================================================
                QUICK FACTS
            ===================================================== */}
            {/* <section className="border-b border-[#1E1917]/10 bg-white">
                <div className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4">
                    {quickFacts.map((fact, index) => (
                        <div
                            key={fact.label}
                            className={`px-5 py-6 sm:px-8 lg:px-10 ${index !== quickFacts.length - 1
                                ? "border-r border-[#1E1917]/10"
                                : ""
                                }`}
                        >
                            <p className="font-serif text-[32px] leading-none tracking-[-0.025em] text-[#20235A] sm:text-[38px]">
                                {fact.number}
                            </p>

                            <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#1E1917]/55 sm:text-[9px]">
                                {fact.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section> */}

            <McaNavigation />

            <FooterSection />
        </main>
    );
};

export default Page;
