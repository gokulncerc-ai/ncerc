
"use client";

import React from "react";
import {
    ArrowUpRight,
    FileText,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../DepartmentsNavigation/DepartmentsNavigation";

export default function TlpPage() {
    const tlpPDF = {
        title: "Teaching Learning Process",
        description:
            "Explore the teaching and learning practices followed by the Department of Mechatronics Engineering.",
        file: "/documents/dept/Mechatronics_Engineering/Tlp/NCERC_MTR_Teaching_Learning_Process.pdf",
    };

    return (
        <>
            <SiteHeader />

            <main className="bg-[#FAF7F2] text-[#1E1917]">

                {/* =========================================================
                    HERO SECTION
                ========================================================= */}
                <section className="relative overflow-hidden bg-[#20235A] text-[#FAF7F2]">

                    {/* Decorative Elements */}
                    <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
                    <div className="pointer-events-none absolute -right-10 -top-14 h-52 w-52 rounded-full border border-[#D2B87C]/10" />

                    <div className="relative mx-auto flex min-h-[420px] max-w-[1440px] items-center px-5 py-20 sm:px-8 lg:min-h-[480px] lg:px-16">
                        <div className="w-full max-w-5xl">

                            {/* Breadcrumb */}
                            <div className="mb-7 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
                                <span>Mechatronics Engineering</span>
                                <span className="text-[#D2B87C]">/</span>
                                <span className="text-[#D2B87C]">
                                    Teaching & Learning Process
                                </span>
                            </div>

                            {/* Section Label */}
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-12 bg-[#D2B87C]" />
                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Academic Excellence
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="font-serif text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
                                Teaching &
                                <span className="mt-1 block text-[#D2B87C]">
                                    Learning Process
                                </span>
                            </h1>

                            {/* Hero Description */}
                            <p className="mt-7 max-w-2xl text-sm leading-8 text-white/75 sm:text-base sm:leading-9">
                                Discover the teaching methodologies, academic practices
                                and learning approaches adopted by the Department of
                                Mechatronics Engineering.
                            </p>

                            {/* Bottom Label */}
                            <div className="mt-10 flex items-center gap-4">
                                <span className="h-10 w-[2px] bg-[#D2B87C]" />
                                <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                                    Teach · Learn · Innovate
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="h-[3px] w-full bg-[#D2B87C]" />
                </section>

                {/* =========================================================
                    DEPARTMENT NAVIGATION
                ========================================================= */}
                <DepartmentNavigation />

                {/* =========================================================
                    TEACHING & LEARNING PROCESS PDF
                ========================================================= */}
                <section className="bg-[#FAF7F2] px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-[1280px]">

                        {/* Section Heading */}
                        <div className="mb-14 max-w-2xl">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#927B4D]" />
                                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#927B4D]">
                                    Academic Resources
                                </span>
                            </div>

                            <h2 className="font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                Teaching & Learning
                            </h2>

                            <p className="mt-5 text-sm leading-8 text-[#66645F] sm:text-base">
                                Access the document outlining the teaching and learning
                                process followed by the department.
                            </p>
                        </div>

                        {/* PDF Card */}
                        <div className="max-w-md">
                            <a
                                href={tlpPDF.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden border border-[#D2B87C]/40 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#927B4D] hover:shadow-[0_18px_45px_rgba(32,35,90,0.08)] sm:p-8"
                            >
                                {/* Decorative Number */}
                                <span className="pointer-events-none absolute -right-2 -top-8 font-serif text-[130px] font-medium leading-none text-[#20235A]/[0.035]">
                                    01
                                </span>

                                <div className="relative">
                                    {/* PDF Icon */}
                                    <div className="mb-8 flex h-12 w-12 items-center justify-center border border-[#D2B87C]/50 bg-[#FAF7F2] text-[#927B4D] transition-colors duration-300 group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                                        <FileText
                                            size={22}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <h3 className="font-serif text-2xl font-medium text-[#20235A] sm:text-[27px]">
                                        {tlpPDF.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#77746E]">
                                        {tlpPDF.description}
                                    </p>
                                </div>

                                {/* Open PDF */}
                                <div className="relative mt-9 flex items-center justify-between border-t border-[#EAE5DB] pt-5">
                                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                        View PDF Document
                                    </span>

                                    <span className="flex h-9 w-9 items-center justify-center border border-[#D2B87C]/50 text-[#20235A] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-white">
                                        <ArrowUpRight
                                            size={17}
                                            strokeWidth={1.5}
                                        />
                                    </span>
                                </div>
                            </a>
                        </div>

                    </div>
                </section>

            </main>

            <FooterSection />
        </>
    );
}
