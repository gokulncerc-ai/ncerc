"use client";

import React from "react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import McaNavigation from "../../mca/mcanavigation/page";
import Faq from "../../mca/faq/page";
import {
    ArrowUpRight,
    BookOpen,
    FileText,
    GraduationCap,
} from "lucide-react";

const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#FAF7F2] text-[#1E1917]">
                {/* =====================================================
                    HERO
                ====================================================== */}
                <section className="relative overflow-hidden bg-[#20235A] text-white">
                    <div className="mx-auto grid min-h-[560px] max-w-[1440px] items-center gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:py-24">
                        {/* Hero Content */}
                        <div className="relative z-10">
                            <div className="flex items-center gap-3">
                                <span className="h-px w-9 bg-[#D2B87C]" />

                                <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#D2B87C]">
                                    Department of Computer Applications
                                </span>
                            </div>

                            <h1 className="mt-6 max-w-3xl font-serif text-[48px] leading-[0.97] tracking-[-0.035em] sm:text-[62px] lg:text-[72px] xl:text-[78px]">
                                E-
                                <br />
                                <span className="text-[#D2B87C]">
                                    Resources.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-xl text-[15px] leading-7 text-white/70 sm:text-[16px]">
                                Access academic resources and department
                                documents provided for the MCA learning
                                community.
                            </p>

                            <div className="mt-10 flex flex-wrap items-center gap-6">
                                <div className="border-l border-[#D2B87C]/60 pl-4">
                                    <p className="font-serif text-[34px] leading-none text-[#D2B87C]">
                                        01
                                    </p>

                                    <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-white/45">
                                        Resource
                                    </p>
                                </div>

                                <div className="border-l border-white/15 pl-4">
                                    <p className="font-serif text-[34px] leading-none text-white">
                                        MCA
                                    </p>

                                    <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-white/45">
                                        Department
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hero Editorial Image */}
                        <div className="relative lg:justify-self-end">
                            <div className="relative ml-auto max-w-[500px]">
                                <div className="aspect-[4/3] overflow-hidden border border-white/10 bg-white/5">
                                    <img
                                        src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1200&q=85"
                                        alt="Academic resources and learning"
                                        className="h-full w-full object-cover object-center grayscale-[10%] transition-transform duration-700 hover:scale-[1.02]"
                                    />
                                </div>

                                <div className="absolute -bottom-5 left-5 border border-white/10 bg-[#20235A] px-5 py-4 sm:left-8">
                                    <p className="font-serif text-[24px] text-[#D2B87C]">
                                        Academic Resources
                                    </p>

                                    <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-white/50">
                                        MCA Department
                                    </p>
                                </div>

                                <div className="absolute -right-3 -top-3 hidden h-20 w-20 border-r border-t border-[#D2B87C]/50 sm:block" />
                            </div>
                        </div>
                    </div>
                </section>

                <McaNavigation />

                {/* =====================================================
                    INTRO
                ====================================================== */}
                <section className="bg-white">
                    <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                                        E-Resources
                                    </span>
                                </div>

                                <h2 className="mt-5 max-w-sm font-serif text-[38px] leading-[1.03] tracking-[-0.03em] text-[#20235A] sm:text-[48px]">
                                    Resources for
                                    <span className="text-[#8F7746]">
                                        {" "}
                                        academic access.
                                    </span>
                                </h2>
                            </div>

                            <div className="max-w-3xl">
                                <p className="text-[15px] leading-8 text-[#1E1917]/65 sm:text-[16px]">
                                    The E-Resources section provides access to
                                    academic documents and department
                                    resources made available for MCA students
                                    and the wider academic community.
                                </p>

                                <div className="mt-8 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[8px] uppercase tracking-[0.2em] text-[#1E1917]/40">
                                        Department of Computer Applications
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    RESOURCE
                ====================================================== */}
                <section className="bg-[#F2EFE8]">
                    <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                        {/* Heading */}
                        <div className="flex flex-col justify-between gap-6 border-b border-[#20235A]/10 pb-7 sm:flex-row sm:items-end">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                                        Available Resource
                                    </span>
                                </div>

                                <h2 className="mt-4 font-serif text-[38px] leading-[1.03] tracking-[-0.03em] text-[#20235A] sm:text-[48px]">
                                    Batch list.
                                </h2>
                            </div>

                            <span className="text-[9px] uppercase tracking-[0.18em] text-[#1E1917]/40">
                                E-Resources
                            </span>
                        </div>

                        {/* Resource Card */}
                        <div className="mt-10 grid overflow-hidden border border-[#20235A]/10 bg-white lg:grid-cols-[0.72fr_1.28fr]">
                            {/* Editorial Panel */}
                            <div className="relative min-h-[320px] overflow-hidden bg-[#20235A] sm:min-h-[400px]">
                                <img
                                    src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=85"
                                    alt="Books and academic resources"
                                    className="absolute inset-0 h-full w-full object-cover opacity-35"
                                />

                                <div className="absolute inset-0 bg-[#20235A]/55" />

                                <div className="relative flex h-full flex-col justify-between p-7 sm:p-9 lg:p-10">
                                    <div className="flex items-center justify-between">
                                        <span className="font-serif text-[36px] text-[#D2B87C]">
                                            01
                                        </span>

                                        <BookOpen
                                            size={25}
                                            strokeWidth={1.2}
                                            className="text-[#D2B87C]"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#D2B87C]">
                                            Academic Document
                                        </p>

                                        <h3 className="mt-3 max-w-sm font-serif text-[32px] leading-[1.05] tracking-[-0.025em] text-white sm:text-[38px]">
                                            Batch List
                                        </h3>

                                        <p className="mt-4 max-w-sm text-[12px] leading-6 text-white/60">
                                            MCA batch information for the
                                            academic period 2024–2026.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Resource Information */}
                            <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                                        Batch List
                                    </span>
                                </div>

                                <h3 className="mt-5 max-w-xl font-serif text-[34px] leading-[1.04] tracking-[-0.03em] text-[#20235A] sm:text-[44px]">
                                    Batch List
                                    <span className="text-[#8F7746]">
                                        {" "}
                                        2024–2026
                                    </span>
                                </h3>

                                <p className="mt-5 max-w-xl text-[14px] leading-7 text-[#1E1917]/60 sm:text-[15px]">
                                    Access the official batch list document
                                    provided by the Department of Computer
                                    Applications.
                                </p>

                                <div className="mt-8 grid grid-cols-2 border-y border-[#20235A]/10">
                                    <div className="border-r border-[#20235A]/10 py-4 pr-4">
                                        <div className="flex items-center gap-2">
                                            <GraduationCap
                                                size={15}
                                                strokeWidth={1.4}
                                                className="text-[#8F7746]"
                                            />

                                            <span className="text-[8px] font-medium uppercase tracking-[0.16em] text-[#1E1917]/40">
                                                Department
                                            </span>
                                        </div>

                                        <p className="mt-2 font-serif text-[19px] text-[#20235A]">
                                            MCA
                                        </p>
                                    </div>

                                    <div className="py-4 pl-5">
                                        <div className="flex items-center gap-2">
                                            <FileText
                                                size={15}
                                                strokeWidth={1.4}
                                                className="text-[#8F7746]"
                                            />

                                            <span className="text-[8px] font-medium uppercase tracking-[0.16em] text-[#1E1917]/40">
                                                Document
                                            </span>
                                        </div>

                                        <p className="mt-2 font-serif text-[19px] text-[#20235A]">
                                            PDF
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href="https://ncerc.ac.in/downloads/dpt/mca/resources/BATCH-LISTS-2024-2026.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group mt-8 flex w-fit items-center gap-4 bg-[#20235A] px-6 py-4 text-[9px] font-medium uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
                                >
                                    Open Batch List
                                    <ArrowUpRight
                                        size={15}
                                        strokeWidth={1.5}
                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    RESOURCE NOTE
                ====================================================== */}
                {/* <section className="bg-white">
                    <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-20">
                            <div>
                                <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                                    MCA E-Resources
                                </span>

                                <div className="mt-5 h-px w-16 bg-[#D2B87C]" />
                            </div>

                            <div>
                                <h2 className="max-w-3xl font-serif text-[34px] leading-[1.06] tracking-[-0.03em] text-[#20235A] sm:text-[44px]">
                                    Academic information,
                                    <br />
                                    <span className="text-[#8F7746]">
                                        made accessible.
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#1E1917]/55 sm:text-[15px]">
                                    The department provides digital access to
                                    important academic documents and resources
                                    to support the MCA learning experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>

            <Faq />
            <FooterSection />
        </>
    );
};

export default page;