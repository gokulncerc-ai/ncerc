"use client";

import React, { useState } from "react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../../DepartmentsNavigation/DepartmentsNavigation";
import {
    ArrowUpRight,
    BookOpen,
    ChevronRight,
    FileText,
    X,
} from "lucide-react";

type University = "apjktu" | "calicut" | null;

const syllabusData = {
    apjktu: {
        title: "APJKTU",
        subtitle: "APJ Abdul Kalam Technological University",
        description:
            "Access the syllabus handbooks and course outcome documents applicable to the Mechatronics Engineering programme under APJ Abdul Kalam Technological University.",
        documents: [
            {
                number: "01",
                title: "2015 REG APJKTU",
                description:
                    "2015 Regulation syllabus handbook for the Mechatronics Engineering programme.",
                href: "https://ncerc.ac.in/downloads/dpt/mechatronics-engineering/downloads/SYLLABUS/APJKTU%202015%20REGULATION%20SYLLABUS.pdf",
            },
            {
                number: "02",
                title: "2015 REG APJKTU COURSE OUTCOMES",
                description:
                    "Course Outcomes and PO/PSO Mapping document under the 2015 APJKTU Regulation.",
                href: "https://ncerc.ac.in/downloads/dpt/mechatronics-engineering/downloads/SYLLABUS/COURSE%20OUTCOMES%20AND%20PO%20PSO%20MAPPING%202015%20REGULATION%20APJKTU.pdf",
            },
            {
                number: "03",
                title: "2019 REG APJKTU",
                description:
                    "2019 Regulation syllabus handbook for the Mechatronics Engineering programme.",
                href: "https://ncerc.ac.in/downloads/dpt/mechatronics-engineering/downloads/SYLLABUS/2019%20REG%20APJAKTU%20SYLLABUS%20HAND%20BOOK.pdf",
            },
        ],
    },

    calicut: {
        title: "CALICUT UNIVERSITY",
        subtitle: "University of Calicut",
        description:
            "Access the syllabus handbooks applicable to the Mechatronics Engineering programme under the University of Calicut.",
        documents: [
            {
                number: "01",
                title: "2009 REG CU",
                description:
                    "2009 Regulation syllabus document for the Mechatronics Engineering programme.",
                href: "https://ncerc.ac.in/downloads/dpt/mechatronics-engineering/downloads/SYLLABUS/CALICUT%20UNIVERSITY%202009%20REGULATION%20SYLLABUS.pdf",
            },
            {
                number: "02",
                title: "2014 REG CU",
                description:
                    "2014 Regulation syllabus document for the Mechatronics Engineering programme.",
                href: "https://ncerc.ac.in/downloads/dpt/mechatronics-engineering/downloads/SYLLABUS/CALICUT%20UNIVERSITY%202014%20REGULATION%20SYLLABUS.pdf",
            },
        ],
    },
};

export default function Page() {
    const [activeUniversity, setActiveUniversity] =
        useState<University>(null);

    const activeData = activeUniversity
        ? syllabusData[activeUniversity]
        : null;

    return (
        <>
            <SiteHeader />

            <main className="bg-[#FAF7F2] text-[#1E1917]">
                {/* =====================================================
                    HERO
                ====================================================== */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1400px] px-6 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-12 lg:pb-20 lg:pt-28 xl:px-16">
                        <div className="mb-12 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45 sm:mb-16">
                            <span>Mechatronics Engineering</span>

                            <ChevronRight className="h-3 w-3 text-[#D2B87C]" />

                            <span className="text-[#D2B87C]">
                                Syllabus Hand Book
                            </span>
                        </div>

                        <div className="mb-6 flex items-center gap-4">
                            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                Academic Resources
                            </span>

                            <span className="h-px w-10 bg-[#D2B87C]" />
                        </div>

                        <h1 className="max-w-5xl font-serif text-[3rem] font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-[4.4rem] lg:text-[5.3rem] xl:text-[5.8rem]">
                            Syllabus
                            <br />
                            <span className="text-[#D2B87C]">
                                Hand Book
                            </span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                            Explore the academic syllabus handbooks and
                            curriculum documents followed by the Department
                            of Mechatronics Engineering under different
                            university regulations.
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    DEPARTMENT NAVIGATION
                ====================================================== */}
                <DepartmentNavigation />

                {/* =====================================================
                    INFO STRIP
                ====================================================== */}
                <section className="border-b border-[#20235A]/10 bg-white">
                    <div className="mx-auto grid max-w-[1400px] grid-cols-2 lg:grid-cols-3">
                        <div className="border-r border-[#20235A]/10 px-6 py-7 sm:px-8 lg:px-12 xl:px-16">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Resource
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                Syllabus
                            </p>
                        </div>

                        <div className="border-r border-[#20235A]/10 px-6 py-7 sm:px-8 lg:px-12 xl:px-16">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Universities
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                02
                            </p>
                        </div>

                        <div className="col-span-2 px-6 py-7 sm:px-8 lg:col-span-1 lg:px-12 xl:px-16">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Document Access
                            </p>

                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                Online PDF
                            </p>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Academic Reference
                                    </span>

                                    <span className="h-px w-10 bg-[#D2B87C]" />
                                </div>

                                <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl lg:text-[3.7rem]">
                                    Curriculum resources,
                                    <br />
                                    <span className="text-[#8F7746]">
                                        organised clearly.
                                    </span>
                                </h2>
                            </div>

                            <div className="flex items-start">
                                <p className="max-w-2xl text-[15px] leading-8 text-[#1E1917]/70 sm:text-base sm:leading-[1.95]">
                                    The Syllabus Hand Book section provides
                                    direct access to the curriculum documents
                                    associated with the Mechatronics
                                    Engineering programme. Select the
                                    respective university to view the
                                    available regulations, syllabus handbooks,
                                    course outcomes and related academic
                                    documents.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    UNIVERSITY OPTIONS
                ====================================================== */}
                <section className="bg-white py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end lg:mb-16">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Select University
                                </p>

                                <h2 className="mt-4 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    Syllabus
                                    <br />
                                    <span className="text-[#8F7746]">
                                        Collections
                                    </span>
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-[#1E1917]/60">
                                Choose a university to view the syllabus
                                documents available for the department.
                            </p>
                        </div>

                        <div className="border-t border-[#20235A]/10">
                            {/* APJKTU */}
                            <button
                                type="button"
                                onClick={() =>
                                    setActiveUniversity("apjktu")
                                }
                                className="group flex w-full flex-col border-b border-[#20235A]/10 py-9 text-left transition-colors duration-300 hover:bg-[#FAF7F2] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"
                            >
                                <div className="flex items-start gap-6 sm:items-center">
                                    <span className="font-serif text-xl text-[#D2B87C]">
                                        01
                                    </span>

                                    <div>
                                        <h3 className="font-serif text-3xl tracking-[-0.02em] text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746] sm:text-4xl">
                                            APJKTU
                                        </h3>

                                        <p className="mt-2 text-sm leading-7 text-[#1E1917]/55">
                                            APJ Abdul Kalam Technological
                                            University
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center gap-3 sm:mt-0">
                                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                        View Documents
                                    </span>

                                    <span className="flex h-11 w-11 items-center justify-center border border-[#20235A]/15 text-[#20235A] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-white">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </button>

                            {/* CALICUT UNIVERSITY */}
                            <button
                                type="button"
                                onClick={() =>
                                    setActiveUniversity("calicut")
                                }
                                className="group flex w-full flex-col border-b border-[#20235A]/10 py-9 text-left transition-colors duration-300 hover:bg-[#FAF7F2] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"
                            >
                                <div className="flex items-start gap-6 sm:items-center">
                                    <span className="font-serif text-xl text-[#D2B87C]">
                                        02
                                    </span>

                                    <div>
                                        <h3 className="font-serif text-3xl tracking-[-0.02em] text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746] sm:text-4xl">
                                            CALICUT UNIVERSITY
                                        </h3>

                                        <p className="mt-2 text-sm leading-7 text-[#1E1917]/55">
                                            University of Calicut
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center gap-3 sm:mt-0">
                                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                        View Documents
                                    </span>

                                    <span className="flex h-11 w-11 items-center justify-center border border-[#20235A]/15 text-[#20235A] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-white">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    DOCUMENT ACCESS
                ====================================================== */}
                <section className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-28">
                    <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 xl:px-16">
                        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Document Access
                                    </span>

                                    <span className="h-px w-10 bg-[#D2B87C]" />
                                </div>

                                <h2 className="mt-5 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-5xl">
                                    Everything you need,
                                    <br />
                                    <span className="text-[#8F7746]">
                                        in one place.
                                    </span>
                                </h2>
                            </div>

                            <div className="grid gap-px border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2">
                                <div className="bg-white p-7 sm:p-9">
                                    <BookOpen className="h-6 w-6 text-[#8F7746]" />

                                    <h3 className="mt-6 font-serif text-2xl text-[#20235A]">
                                        University Regulations
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#1E1917]/60">
                                        Access syllabus documents according
                                        to the respective university
                                        regulation and academic scheme.
                                    </p>
                                </div>

                                <div className="bg-white p-7 sm:p-9">
                                    <FileText className="h-6 w-6 text-[#8F7746]" />

                                    <h3 className="mt-6 font-serif text-2xl text-[#20235A]">
                                        Digital Documents
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#1E1917]/60">
                                        Open the required academic document
                                        directly in PDF format for convenient
                                        viewing and reference.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CTA
                ====================================================== */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
                        <div className="max-w-4xl">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                Academic Resources
                            </p>

                            <h2 className="mt-5 font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
                                Explore the academic framework of{" "}
                                <span className="text-[#D2B87C]">
                                    Mechatronics Engineering.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60">
                                Select a university above to access the
                                relevant syllabus regulations and academic
                                documents.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            {/* =============================================================
                DOCUMENT MODAL
            ============================================================== */}
            {activeData && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0D0F2A]/80 p-4 backdrop-blur-sm sm:p-6"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="syllabus-modal-title"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setActiveUniversity(null);
                        }
                    }}
                >
                    <div className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden bg-[#FAF7F2] shadow-2xl">
                        {/* Modal Header */}
                        <div className="bg-[#20235A] px-6 py-7 sm:px-9 sm:py-8">
                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                        Syllabus Hand Book
                                    </p>

                                    <h2
                                        id="syllabus-modal-title"
                                        className="mt-3 font-serif text-3xl leading-tight tracking-[-0.02em] text-white sm:text-4xl"
                                    >
                                        {activeData.title}
                                    </h2>

                                    <p className="mt-2 text-sm text-white/55">
                                        {activeData.subtitle}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    aria-label="Close modal"
                                    onClick={() =>
                                        setActiveUniversity(null)
                                    }
                                    className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-white/70 transition-colors duration-200 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="max-h-[calc(90vh-150px)] overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
                            <p className="mb-7 max-w-2xl text-sm leading-7 text-[#1E1917]/65">
                                {activeData.description}
                            </p>

                            <div className="space-y-3">
                                {activeData.documents.map((document) => (
                                    <a
                                        key={document.number}
                                        href={document.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-4 border border-[#20235A]/10 bg-white p-5 transition-all duration-300 hover:border-[#20235A]/25 hover:bg-[#20235A] sm:p-6"
                                    >
                                        <span className="font-serif text-lg text-[#D2B87C]">
                                            {document.number}
                                        </span>

                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#20235A]/10 text-[#20235A] transition-colors duration-300 group-hover:border-white/20 group-hover:text-white">
                                            <FileText className="h-5 w-5" />
                                        </span>

                                        <span className="min-w-0 flex-1">
                                            <span className="block font-serif text-xl leading-tight text-[#20235A] transition-colors duration-300 group-hover:text-white sm:text-2xl">
                                                {document.title}
                                            </span>

                                            <span className="mt-1 block text-xs leading-6 text-[#1E1917]/50 transition-colors duration-300 group-hover:text-white/55">
                                                {document.description}
                                            </span>
                                        </span>

                                        <ArrowUpRight className="h-5 w-5 shrink-0 text-[#8F7746] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#D2B87C]" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <FooterSection />
        </>
    );
};