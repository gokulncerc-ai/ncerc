"use client";

import React from "react";
import Link from "next/link";
import {
    ArrowUpRight,
    ChevronRight,
    FileText,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const aqarReports = [
    {
        id: "01",
        year: "2023–2024",
        title: "AQAR 2023–2024",
        href: "/iqac/aqar/aqar_2023-2024",
    },
    {
        id: "02",
        year: "2022–2023",
        title: "AQAR 2022–2023",
        href: "/iqac/aqar/aqar_2022-2023",
    },
    {
        id: "03",
        year: "2021–2022",
        title: "AQAR 2021–2022",
        href: "/iqac/aqar/aqar_2021-2022",
    },
    {
        id: "04",
        year: "2020–2021",
        title: "AQAR 2020–2021",
        href: "/iqac/aqar/aqar_2020-2021",
    },
];

const Page = () => {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#faf7f2] text-[#20235A]">

                {/* =====================================================
                    HERO
                ===================================================== */}
                <section className="border-b border-[#20235A]/10">

                    <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 lg:px-14 lg:py-20">

                        {/* Breadcrumb */}
                        <div className="mb-12 flex items-center gap-2 text-xs text-[#20235A]/45">

                            <Link
                                href="/"
                                className="transition-colors hover:text-[#D2B87C]"
                            >
                                Home
                            </Link>

                            <ChevronRight size={13} />

                            <span className="text-[#20235A]/70">
                                AQAR
                            </span>

                        </div>


                        {/* Heading */}
                        <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">

                            <div>

                                <div className="mb-5 flex items-center gap-3">

                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#20235A]/50">
                                        Institutional Reports
                                    </span>

                                </div>

                                <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                                    Annual Quality
                                    <span className="text-[#D2B87C]">
                                        {" "}Assurance Reports.
                                    </span>
                                </h1>

                            </div>


                            <div className="lg:border-l lg:border-[#20235A]/10 lg:pl-8">

                                <p className="max-w-md text-sm leading-7 text-[#20235A]/55">
                                    Explore the Annual Quality Assurance
                                    Reports of Nehru College of Engineering
                                    and Research Centre across different
                                    academic years.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    AQAR REPORTS
                ===================================================== */}
                <section className="bg-white">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                        {/* Section heading */}
                        <div className="mb-10">

                            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                AQAR Archive
                            </span>

                            <h2 className="mt-3 font-serif text-2xl sm:text-3xl">
                                Academic Year Reports
                            </h2>

                        </div>


                        {/* Reports */}
                        <div className="grid gap-4 md:grid-cols-2">

                            {aqarReports.map((report) => (

                                <a
                                    key={report.id}
                                    href={report.href}

                                    rel="noopener noreferrer"
                                    className="group"
                                >

                                    <article className="border border-[#20235A]/10 bg-[#faf7f2] p-6 transition-all duration-300 hover:border-[#D2B87C]/60 hover:bg-white sm:p-7">

                                        {/* Top */}
                                        <div className="flex items-start justify-between">

                                            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#D2B87C]">
                                                {report.id}
                                            </span>

                                            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#20235A]/10 text-[#20235A]/45 transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">

                                                <ArrowUpRight
                                                    size={15}
                                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                />

                                            </span>

                                        </div>


                                        {/* Icon */}
                                        <div className="mt-7 flex h-11 w-11 items-center justify-center rounded-full border border-[#20235A]/10 bg-white text-[#20235A] transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C]">

                                            <FileText
                                                size={18}
                                                strokeWidth={1.5}
                                            />

                                        </div>


                                        {/* Title */}
                                        <h3 className="mt-5 font-serif text-2xl leading-snug text-[#20235A] transition-colors duration-300 group-hover:text-[#D2B87C]">
                                            {report.title}
                                        </h3>


                                        {/* Year */}
                                        <div className="mt-5 flex items-center justify-between border-t border-[#20235A]/10 pt-4">

                                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#20235A]/40">
                                                Academic Year
                                            </span>

                                            <span className="text-xs text-[#20235A]/55">
                                                {report.year}
                                            </span>

                                        </div>

                                    </article>

                                </a>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    FOOTER CTA
                ===================================================== */}
                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 lg:px-14 lg:py-16">

                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                            <div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    NCERC Documentation
                                </span>

                                <h2 className="mt-3 font-serif text-2xl text-white sm:text-3xl">
                                    Quality, assessment and continuous improvement.
                                </h2>

                            </div>


                            <Link
                                href="/"
                                className="group flex w-fit items-center gap-3 border border-white/15 px-5 py-3 text-xs font-medium text-white transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
                            >
                                Back to Home

                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />

                            </Link>

                        </div>

                    </div>

                </section>

            </main>

            <FooterSection />
        </>
    );
};

export default Page;