
"use client";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../DepartmentsNavigation/DepartmentsNavigation";
import React, { useEffect, useState } from "react";
import {
    ArrowUpRight,
    BookOpen,
    FileText,
    GraduationCap,
    X,
} from "lucide-react";

type SyllabusPDF = {
    title: string;
    file: string;
};

type Scheme = {
    id: string;
    title: string;
    description: string;
    pdfs: SyllabusPDF[];
};

const schemes: Scheme[] = [
    {
        id: "2019",
        title: "2019 Scheme",
        description: "Explore the syllabus documents under the 2019 academic scheme.",
        pdfs: [
            {
                title: "KTU_Mechatronics_2019_Scheme_S3_S4",
                file: "/documents/dept/Mechatronics_Engineering/syllabus/KTU_Mechatronics_2019_Scheme_S3_S4_Syllabus.pdf",
            },
            {
                title: "KTU_Mechatronics_2019_Scheme_S5_S6",
                file: "/documents/dept/Mechatronics_Engineering/syllabus/KTU_Mechatronics_2019_Scheme_S5_S6_Syllabus.pdf",
            },
            {
                title: "KTU_Mechatronics_2019_Scheme_S7_S8",
                file: "/documents/dept/Mechatronics_Engineering/syllabus/KTU_Mechatronics_2019_Scheme_S7_S8_Syllabus.pdf",
            },

        ],
    },
    {
        id: "auto25",
        title: "Auto 25 Scheme",
        description: "Explore the syllabus documents under the Auto 25 academic scheme.",
        pdfs: [
            {
                title: "NCERC_MTR_2025_Scheme_S1_S2_S3_S4_Curriculum_and_Syllabus",
                file: "/documents/dept/Mechatronics_Engineering/syllabus/NCERC_MTR_2025_Scheme_S1_S2_S3_S4_Curriculum_and_Syllabus.pdf",
            },

        ],
    },
    {
        id: "autonomous24",
        title: "Autonomous 24 Scheme",
        description: "Explore the syllabus documents under the Autonomous 24 academic scheme.",
        pdfs: [
            {
                title: "NCERC_MTR_2024_Scheme_Curriculum_and_Syllabus",
                file: "/documents/dept/Mechatronics_Engineering/syllabus/NCERC_MTR_2024_Scheme_Curriculum_and_Syllabus.pdf",
            },
          
        ],
    },
];

export default function SyllabusPage() {
    const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);

    // Close modal with Escape key and prevent background scrolling
    useEffect(() => {
        if (!selectedScheme) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedScheme(null);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [selectedScheme]);

    return (
        <>
            <SiteHeader />

            <main className="bg-[#FAF7F2] text-[#1E1917] [&_p]:text-justify">
                {/* =========================================================
                    HERO
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
                                <span className="text-[#D2B87C]">Syllabus</span>
                            </div>

                            {/* Section Label */}
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-12 bg-[#D2B87C]" />
                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Academic Resources
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="font-serif text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
                                Academic
                                <span className="mt-1 block text-[#D2B87C]">
                                    Resources
                                </span>
                            </h1>

                            {/* Hero Description */}
                            <p className="mt-7 max-w-2xl text-sm leading-8 text-white/75 sm:text-base sm:leading-9">
                                Explore the academic resources of the Department of
                                Mechatronics Engineering, including the academic calendar
                                and syllabus handbook.
                            </p>

                            {/* Bottom Label */}
                            <div className="mt-10 flex items-center gap-4">
                                <span className="h-10 w-[2px] bg-[#D2B87C]" />
                                <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                                    Learn · Explore · Excel
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
                    SYLLABUS SCHEMES
                ========================================================= */}
                <section className="bg-[#FAF7F2] px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-[1280px]">

                        {/* Section Heading */}
                        <div className="mb-14 max-w-2xl">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#927B4D]" />
                                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#927B4D]">
                                    Curriculum & Syllabus
                                </span>
                            </div>

                            <h2 className="font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                Academic Schemes
                            </h2>

                            <p className="mt-5 text-sm leading-8 text-[#66645F] sm:text-base">
                                Select an academic scheme to explore and access its
                                corresponding syllabus documents.
                            </p>
                        </div>

                        {/* Scheme Cards */}
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {schemes.map((scheme, index) => (
                                <button
                                    key={scheme.id}
                                    type="button"
                                    onClick={() => setSelectedScheme(scheme)}
                                    className="group relative flex min-h-[270px] flex-col justify-between overflow-hidden border border-[#D2B87C]/40 bg-white p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#927B4D] hover:shadow-[0_18px_45px_rgba(32,35,90,0.08)] sm:p-8"
                                >
                                    {/* Decorative Number */}
                                    <span className="pointer-events-none absolute -right-2 -top-8 font-serif text-[130px] font-medium leading-none text-[#20235A]/[0.035]">
                                        0{index + 1}
                                    </span>

                                    <div className="relative">
                                        <div className="mb-8 flex h-12 w-12 items-center justify-center border border-[#D2B87C]/50 bg-[#FAF7F2] text-[#927B4D] transition-colors duration-300 group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                                            <GraduationCap
                                                size={22}
                                                strokeWidth={1.5}
                                            />
                                        </div>

                                        <h3 className="font-serif text-2xl font-medium text-[#20235A] sm:text-[27px]">
                                            {scheme.title}
                                        </h3>

                                        <p className="mt-3 max-w-xs text-sm leading-7 text-[#77746E]">
                                            {scheme.description}
                                        </p>
                                    </div>

                                    <div className="relative mt-9 flex items-center justify-between border-t border-[#EAE5DB] pt-5">
                                        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                            View Documents
                                        </span>

                                        <span className="flex h-9 w-9 items-center justify-center border border-[#D2B87C]/50 text-[#20235A] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-white">
                                            <ArrowUpRight
                                                size={17}
                                                strokeWidth={1.5}
                                            />
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />

            {/* =========================================================
                SYLLABUS PDF MODAL
            ========================================================= */}
            {selectedScheme && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#11152F]/75 px-4 py-6 backdrop-blur-sm"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setSelectedScheme(null);
                        }
                    }}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="scheme-modal-title"
                        className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden bg-[#FAF7F2] shadow-2xl"
                    >
                        {/* Modal Header */}
                        <div className="relative overflow-hidden bg-[#20235A] px-6 py-8 text-white sm:px-9">
                            <div className="pointer-events-none absolute -right-12 -top-20 h-48 w-48 rounded-full border border-[#D2B87C]/15" />

                            <div className="relative flex items-start justify-between gap-5">
                                <div>
                                    <div className="mb-4 flex items-center gap-3">
                                        <span className="h-px w-8 bg-[#D2B87C]" />
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                            Academic Documents
                                        </span>
                                    </div>

                                    <h2
                                        id="scheme-modal-title"
                                        className="font-serif text-3xl font-medium text-white sm:text-4xl"
                                    >
                                        {selectedScheme.title}
                                    </h2>

                                    <p className="mt-3 text-sm leading-7 text-white/60">
                                        Select a document below to open the syllabus PDF.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setSelectedScheme(null)}
                                    aria-label="Close modal"
                                    className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 text-white/80 transition-colors hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
                                >
                                    <X size={19} strokeWidth={1.5} />
                                </button>
                            </div>

                            <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#D2B87C]" />
                        </div>

                        {/* PDF Documents */}
                        <div className="overflow-y-auto px-6 py-7 sm:px-9 sm:py-9">
                            <div className="mb-6 flex items-center justify-between gap-4">
                                <div>
                                    <h3 className="font-serif text-xl font-medium text-[#20235A]">
                                        Available Documents
                                    </h3>
                                    <p className="mt-1 text-xs text-[#88847C]">
                                        Choose a PDF to view separately.
                                    </p>
                                </div>

                                <span className="shrink-0 text-xs font-medium text-[#927B4D]">
                                    {selectedScheme.pdfs.length} Documents
                                </span>
                            </div>

                            <div className="space-y-3">
                                {selectedScheme.pdfs.map((pdf, index) => (
                                    <a
                                        key={`${selectedScheme.id}-${index}`}
                                        href={pdf.file}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between gap-4 border border-[#E8E2D7] bg-white px-4 py-5 transition-all duration-200 hover:border-[#D2B87C] hover:bg-[#FDFBF7] sm:px-5"
                                    >
                                        <div className="flex min-w-0 items-center gap-4">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#927B4D] transition-colors group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                                                <FileText
                                                    size={20}
                                                    strokeWidth={1.5}
                                                />
                                            </div>

                                            <div className="min-w-0">
                                                <h4 className="truncate text-sm font-medium text-[#20235A]">
                                                    {pdf.title}
                                                </h4>
                                                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#99948A]">
                                                    PDF Document
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#D2B87C]/50 text-[#927B4D] transition-all group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-white">
                                            <ArrowUpRight
                                                size={17}
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="border-t border-[#E8E2D7] bg-white px-6 py-4 sm:px-9">
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-[#99948A]">
                                    <BookOpen size={14} />
                                    <span>Department of Mechatronics</span>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setSelectedScheme(null)}
                                    className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#927B4D] transition-colors hover:text-[#20235A]"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};


