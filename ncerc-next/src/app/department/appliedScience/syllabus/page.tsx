
"use client";

import React, { useState } from "react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../departmentnavigation/DepartmentNavigation";

import {
    ArrowRight,
    ArrowUpRight,
    BookOpen,
    Download,
    FileText,
    GraduationCap,
    CalendarDays,
    X,
    ExternalLink,
} from "lucide-react";

type DocumentItem = {
    title: string;
    description: string;
    file: string;
};

type ModalType = "calendar" | "syllabus" | null;

const academicCalendarDocuments: DocumentItem[] = [
    {
        title: "Academic Calendar S4",
        description: "Academic schedule and important dates for S4.",
        file: "/documents/dept/Applied_Science_And_Humanities/Syllabus/Academic-Calendar-S4-2024-Admission.xlsx",
    },
    {
        title: "Academic Calendar S2",
        description: "Academic schedule for S2.",
        file: "/documents/dept/Applied_Science_And_Humanities/Syllabus/Academic-Calendar-S2-2025-2029-Batch.pdf",
    },
];

const syllabusDocuments: DocumentItem[] = [
    {
        title: "CSE AI & Ml Syllabus",
        description: "Syllabus for CSE AI & Ml .",
        file: "/documents/dept/Applied_Science_And_Humanities/Syllabus/AIML-23-09-2025.pdf",
    },
    {
        title: "2025 CSE Curriculum and Syllabus",
        description: "2025 CSE curriculum, course structure, and subject details.",
        file: "/documents/dept/Applied_Science_And_Humanities/Syllabus/2025-CSE-Curriculum-and-Syllabus.pdf",
    },
    {
        title: "ECE Curriculum and Syllabus",
        description: "ECE curriculum, course structure, and subject details..",
        file: "/documents/dept/Applied_Science_And_Humanities/Syllabus/ECE-Curriculum-and-Syllabus.pdf",
    },
    {
        title: "EEE Curriculum and Syllabus 2025 Scheme",
        description: "EEE curriculum, course structure, and subject details..",
        file: "/documents/dept/Applied_Science_And_Humanities/Syllabus/EEE-Curriculum-and-Syllabus-2025-Scheme.pdf",
    }, {
        title: "NCERC ME R2025 S2 Industry Integrated Syllabus",
        description: "NCERC ME R2025 S2 curriculum, course structure, and subject details..",
        file: "/documents/dept/Applied_Science_And_Humanities/Syllabus/NCERC-ME-R2025-S2-Industry-Integrated-Syllabus.pdf",
    },
    {
        title: "NCERC-ME-R2025-S1-Industry-Integrated-Syllabus",
        description: "NCERC-ME-R2025-S1, course structure, and subject details..",
        file: "/documents/dept/Applied_Science_And_Humanities/Syllabus/NCERC-ME-R2025-S1-Industry-Integrated-Syllabus.pdf",
    },
    {
        title: "MTR Syllabus ",
        description: "MTR-Curriculum-and-Syllabus-S1-S2-S3-S4-2025-Scheme..",
        file: "/documents/dept/Applied_Science_And_Humanities/Syllabus/MTR-Curriculum-and-Syllabus-S1-S2-S3-S4-2025-Scheme.pdf",
    },
];

export default function SyllabusPage() {
    const [activeModal, setActiveModal] = useState<ModalType>(null);

    const activeDocuments =
        activeModal === "calendar"
            ? academicCalendarDocuments
            : activeModal === "syllabus"
                ? syllabusDocuments
                : [];

    const closeModal = () => setActiveModal(null);

    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#FAF9F6] text-[#1E1917] [&_p]:text-justify">

                {/* =========================================================
                    HERO
                ========================================================== */}

                <section className="relative isolate overflow-hidden bg-[#20235A]">
                    {/* Background Decorations */}
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute -right-32 -top-36 h-[520px] w-[520px] rounded-full border border-white/10" />

                        <div className="absolute right-[-10px] top-[-40px] h-[350px] w-[350px] rounded-full border border-[#D2B87C]/20" />

                        <div className="absolute bottom-[-170px] left-[42%] h-[400px] w-[400px] rounded-full bg-[#D2B87C]/10 blur-3xl" />

                        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_52%,rgba(210,184,124,0.055)_52%,transparent_76%)]" />
                    </div>

                    <div className="mx-auto flex min-h-[470px] max-w-7xl items-center px-5 py-16 sm:px-8 md:py-24 lg:px-12">
                        <div className="max-w-3xl">
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#D2B87C] sm:text-xs">
                                    Applied Science & Humanities
                                </span>
                            </div>

                            <h1 className="font-serif text-[43px] font-normal leading-[1.08] tracking-[-0.035em] text-white sm:text-[58px] lg:text-[68px] xl:text-[76px]">
                                First Year
                                <br />
                                <span className="italic text-[#D2B87C]">
                                    Syllabus.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                                Access the first-year syllabus documents covering
                                engineering fundamentals, applied sciences, mathematics,
                                programming, workshops, and professional development.
                            </p>

                            <div className="mt-9 flex flex-wrap items-center gap-5">
                                <a
                                    href="#syllabus"
                                    className="group inline-flex min-h-12 items-center gap-3 bg-[#D2B87C] px-6 py-3 text-xs font-medium uppercase tracking-[0.12em] text-[#20235A] transition-colors duration-300 hover:bg-white"
                                >
                                    Browse Syllabus
                                    <ArrowRight size={15} />
                                </a>

                                <span className="text-xs tracking-wide text-white/55">
                                    Study · Learn · Progress
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#D2B87C]/70 to-transparent" />
                </section>

                {/* =========================================================
                    DEPARTMENT NAVIGATION
                ========================================================== */}

                <DepartmentNavigation />

                {/* =========================================================
                    DOCUMENT CATEGORIES
                ========================================================== */}

                <section
                    id="syllabus"
                    className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
                >
                    <div className="mx-auto max-w-7xl">

                        {/* Section Heading */}
                        <div className="mb-12 max-w-2xl">
                            <div className="mb-4 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#927B4D]">
                                    Academic Resources
                                </p>
                            </div>

                            <h2 className="font-serif text-3xl font-normal leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                Academic Documents
                            </h2>

                            <div className="mt-5 h-[2px] w-14 bg-[#D2B87C]" />

                            <p className="mt-5 text-sm leading-7 text-[#77747A] sm:text-base">
                                Explore academic calendars and syllabus documents
                                provided by the Department of Applied Science
                                and Humanities.
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="grid gap-6 md:grid-cols-2">

                            {/* Academic Calendar Card */}
                            <button
                                type="button"
                                onClick={() => setActiveModal("calendar")}
                                className="group relative overflow-hidden border border-[#E6DFD3] bg-white p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_15px_40px_rgba(32,35,90,0.08)] sm:p-9"
                            >
                                <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-[#FAF7F2] transition-colors duration-300 group-hover:bg-[#F1EBDD]" />

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center border border-[#E6DFD3] bg-[#FAF7F2] text-[#927B4D] transition-colors duration-300 group-hover:border-[#D2B87C]">
                                            <CalendarDays
                                                size={25}
                                                strokeWidth={1.4}
                                            />
                                        </div>

                                        <ArrowUpRight
                                            size={21}
                                            className="text-[#927B4D] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                        />
                                    </div>

                                    <p className="mt-10 text-[10px] font-medium uppercase tracking-[0.2em] text-[#927B4D]">
                                        Academic Schedule
                                    </p>

                                    <h3 className="mt-3 font-serif text-2xl font-normal text-[#20235A] sm:text-3xl">
                                        Academic Calendar
                                    </h3>

                                    <p className="mt-4 max-w-md text-sm leading-7 text-[#77747A]">
                                        View academic schedules, semester timelines,
                                        examination periods and important institutional
                                        dates.
                                    </p>

                                    <div className="mt-8 flex items-center justify-between border-t border-[#EAE4D9] pt-5">
                                        <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            Explore Documents
                                        </span>

                                        <span className="flex items-center gap-2 text-xs text-[#20235A] transition-all group-hover:gap-3">
                                            View Calendar
                                            <ArrowRight size={15} />
                                        </span>
                                    </div>
                                </div>
                            </button>

                            {/* Syllabus Card */}
                            <button
                                type="button"
                                onClick={() => setActiveModal("syllabus")}
                                className="group relative overflow-hidden border border-[#E6DFD3] bg-white p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_15px_40px_rgba(32,35,90,0.08)] sm:p-9"
                            >
                                <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-[#FAF7F2] transition-colors duration-300 group-hover:bg-[#F1EBDD]" />

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center border border-[#E6DFD3] bg-[#FAF7F2] text-[#927B4D] transition-colors duration-300 group-hover:border-[#D2B87C]">
                                            <BookOpen
                                                size={25}
                                                strokeWidth={1.4}
                                            />
                                        </div>

                                        <ArrowUpRight
                                            size={21}
                                            className="text-[#927B4D] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                        />
                                    </div>

                                    <p className="mt-10 text-[10px] font-medium uppercase tracking-[0.2em] text-[#927B4D]">
                                        Curriculum & Learning
                                    </p>

                                    <h3 className="mt-3 font-serif text-2xl font-normal text-[#20235A] sm:text-3xl">
                                        Syllabus
                                    </h3>

                                    <p className="mt-4 max-w-md text-sm leading-7 text-[#77747A]">
                                        Explore curriculum documents, programme
                                        structures and subject-wise syllabus
                                        information.
                                    </p>

                                    <div className="mt-8 flex items-center justify-between border-t border-[#EAE4D9] pt-5">
                                        <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#927B4D]">
                                            Explore Documents
                                        </span>

                                        <span className="flex items-center gap-2 text-xs text-[#20235A] transition-all group-hover:gap-3">
                                            View Syllabus
                                            <ArrowRight size={15} />
                                        </span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    DOCUMENT MODAL
                ========================================================== */}

                {activeModal && (
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#14162F]/75 px-4 py-8 backdrop-blur-sm"
                        onMouseDown={(event) => {
                            if (event.target === event.currentTarget) {
                                closeModal();
                            }
                        }}
                    >
                        <div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="document-modal-title"
                            className="relative my-auto max-h-[85vh] w-full max-w-3xl overflow-hidden border border-[#E6DFD3] bg-[#FAF9F6] shadow-2xl"
                        >
                            {/* Modal Header */}
                            <div className="relative overflow-hidden bg-[#20235A] px-6 py-7 text-white sm:px-9 sm:py-9">
                                <div className="pointer-events-none absolute -right-10 -top-20 h-48 w-48 rounded-full border border-[#D2B87C]/20" />

                                <div className="relative flex items-start justify-between gap-5">
                                    <div>
                                        <div className="mb-4 flex items-center gap-3">
                                            <span className="h-px w-8 bg-[#D2B87C]" />

                                            <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#D2B87C]">
                                                Applied Science & Humanities
                                            </p>
                                        </div>

                                        <h2
                                            id="document-modal-title"
                                            className="font-serif text-2xl font-normal text-white sm:text-3xl"
                                        >
                                            {activeModal === "calendar"
                                                ? "Academic Calendar"
                                                : "Syllabus Documents"}
                                        </h2>

                                        <p className="mt-3 max-w-lg text-xs leading-6 text-white/65 sm:text-sm">
                                            {activeModal === "calendar"
                                                ? "Browse the available academic calendar documents."
                                                : "Browse the available curriculum and syllabus documents."}
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        aria-label="Close modal"
                                        className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>

                                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#D2B87C]" />
                            </div>

                            {/* Modal Documents */}
                            <div className="max-h-[calc(85vh-150px)] overflow-y-auto px-5 py-6 sm:px-9 sm:py-8">
                                <div className="mb-5 flex items-center justify-between">
                                    <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-[#927B4D]">
                                        Available Documents
                                    </p>

                                    <span className="text-xs text-[#77747A]">
                                        {activeDocuments.length} Documents
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    {activeDocuments.map((document, index) => (
                                        <div
                                            key={`${document.title}-${index}`}
                                            className="group flex flex-col gap-4 border border-[#E6DFD3] bg-white p-5 transition-colors hover:border-[#D2B87C] sm:flex-row sm:items-center sm:justify-between"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#FAF7F2] text-[#927B4D]">
                                                    <FileText
                                                        size={20}
                                                        strokeWidth={1.4}
                                                    />
                                                </div>

                                                <div>
                                                    <h3 className="text-sm font-medium text-[#20235A]">
                                                        {document.title}
                                                    </h3>

                                                    <p className="mt-1 text-xs leading-6 text-[#77747A]">
                                                        {document.description}
                                                    </p>

                                                    <span className="mt-2 inline-block text-[9px] uppercase tracking-[0.15em] text-[#927B4D]">
                                                        PDF Document
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex shrink-0 items-center gap-2 pl-[60px] sm:pl-0">
                                                <a
                                                    href={document.file}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 border border-[#E6DFD3] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.08em] text-[#20235A] transition-colors hover:border-[#D2B87C] hover:bg-[#FAF7F2]"
                                                >
                                                    View
                                                    <ExternalLink size={13} />
                                                </a>

                                                <a
                                                    href={document.file}
                                                    download
                                                    className="inline-flex items-center gap-2 bg-[#20235A] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#927B4D]"
                                                >
                                                    Download
                                                    <Download size={13} />
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-7 flex justify-end border-t border-[#E6DFD3] pt-5">
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="px-5 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-[#77747A] transition-colors hover:text-[#20235A]"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <FooterSection />
        </>
    );
}
