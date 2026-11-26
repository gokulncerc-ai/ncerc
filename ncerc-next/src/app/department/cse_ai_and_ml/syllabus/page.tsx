
"use client";

import React, { useEffect, useState } from "react";
import {
    ArrowDownToLine,
    ArrowUpRight,
    BookOpen,
    FileText,
    GraduationCap,
    X,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../DepartmentNav/DepartmentNavigation";

type SyllabusDocument = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    pdf: string;
    label: string;
};

const syllabusDocuments: SyllabusDocument[] = [
    {
        id: "ktu",
        title: "KTU",
        subtitle: "University Curriculum",
        description:
            "Explore the university-prescribed curriculum, academic structure, and syllabus details for the programme.",
        pdf: "/documents/dept/CSE_AI_Ml/syllabus/SE_AI_ML_S1-S8_Syllabus.pdf",
        label: "KTU Syllabus",
    },
    {
        id: "aiml",
        title: "AIML Complete Syllabus",
        subtitle: "Programme Syllabus",
        description:
            "Access the complete syllabus for the Artificial Intelligence and Machine Learning programme.",
        pdf: "/documents/dept/CSE_AI_Ml/syllabus/AIML_Complete_Syllabus.pdf",
        label: "AIML Complete Syllabus",
    },
];

export default function SyllabusPage() {
    const [activeDocument, setActiveDocument] =
        useState<SyllabusDocument | null>(null);

    const closeModal = () => {
        setActiveDocument(null);
    };

    useEffect(() => {
        if (!activeDocument) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [activeDocument]);

    return (
        <>
            <SiteHeader />

            {/* PAGE HERO */}
            <section className="relative overflow-hidden bg-[#20235A] px-5 pb-20 pt-32 sm:px-10 lg:px-20 lg:pb-24 lg:pt-40">
                <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -right-16 -top-16 h-[290px] w-[290px] rounded-full border border-[#D2B87C]/20" />
                <div className="pointer-events-none absolute -bottom-36 left-[35%] h-[350px] w-[350px] rounded-full bg-[#D2B87C]/5 blur-3xl" />

                <div className="relative mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#D2B87C]" />
                            <span className="text-[11px] uppercase tracking-[0.3em] text-[#D2B87C]">
                                Academics
                            </span>
                        </div>

                        <h1 className="font-serif text-4xl font-normal leading-tight text-[#FAF7F2] sm:text-5xl lg:text-6xl">
                            Syllabus
                            <span className="mt-2 block text-[#D2B87C]">
                                CSE (AI & ML)
                            </span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-sm leading-8 text-white/65 sm:text-base">
                            Explore the curriculum and academic syllabus
                            documents of the Department of Computer Science
                            and Engineering with specialization in Artificial
                            Intelligence and Machine Learning.
                        </p>
                    </div>

                    <div className="mt-12 flex items-center gap-3 text-xs tracking-[0.16em] text-white/50">
                        <BookOpen size={16} className="text-[#D2B87C]" />
                        <span>CURRICULUM & ACADEMIC RESOURCES</span>
                    </div>
                </div>
            </section>

            <InnerHeader />

            {/* SYLLABUS DOCUMENTS */}
            <main className="bg-[#FAF7F2]">
                <section className="px-5 py-20 sm:px-10 lg:px-20 lg:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
                            {/* SECTION INTRODUCTION */}
                            <div>
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-9 bg-[#927B4D]" />
                                    <span className="text-[11px] uppercase tracking-[0.25em] text-[#927B4D]">
                                        Academic Resources
                                    </span>
                                </div>

                                <h2 className="font-serif text-3xl font-normal leading-snug text-[#20235A] sm:text-4xl">
                                    Curriculum and
                                    <span className="block text-[#927B4D]">
                                        Syllabus Documents
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-md text-sm leading-8 text-[#626262]">
                                    Access the syllabus documents through the
                                    resources below. Select a document to view
                                    its contents in the PDF viewer.
                                </p>

                                <div className="mt-10 flex items-center gap-4 border-t border-[#20235A]/10 pt-6">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#20235A] text-[#D2B87C]">
                                        <GraduationCap size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#20235A]">
                                            Department of CSE
                                        </p>
                                        <p className="mt-1 text-xs text-[#777]">
                                            Artificial Intelligence & Machine
                                            Learning
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* DOCUMENT CARDS */}
                            <div className="grid gap-5 sm:grid-cols-2">
                                {syllabusDocuments.map((document, index) => (
                                    <button
                                        key={document.id}
                                        type="button"
                                        onClick={() =>
                                            setActiveDocument(document)
                                        }
                                        className="group flex min-h-[310px] flex-col border border-[#20235A]/10 bg-white p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_18px_45px_rgba(32,35,90,0.09)] sm:p-8"
                                    >
                                        <div className="flex items-start justify-between">
                                            <span className="font-serif text-sm text-[#927B4D]">
                                                0{index + 1}
                                            </span>

                                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F2EFE8] text-[#20235A] transition-colors duration-300 group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                                                <FileText size={20} />
                                            </span>
                                        </div>

                                        <div className="mt-9">
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#927B4D]">
                                                {document.subtitle}
                                            </p>

                                            <h3 className="mt-3 font-serif text-2xl font-normal leading-snug text-[#20235A]">
                                                {document.title}
                                            </h3>

                                            <p className="mt-4 text-sm leading-7 text-[#777]">
                                                {document.description}
                                            </p>
                                        </div>

                                        <div className="mt-auto flex items-center justify-between border-t border-[#20235A]/10 pt-6">
                                            <span className="text-xs tracking-[0.08em] text-[#20235A]">
                                                View Syllabus
                                            </span>

                                            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D2B87C] text-[#20235A] transition-all duration-300 group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                                                <ArrowUpRight size={17} />
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* BOTTOM INFORMATION STRIP */}
                <section className="bg-[#F2EFE8] px-5 py-12 sm:px-10 lg:px-20">
                    <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="font-serif text-xl font-normal text-[#20235A]">
                                Academic resources at your fingertips.
                            </p>
                            <p className="mt-2 text-sm text-[#777]">
                                Select a syllabus document above to view its
                                contents.
                            </p>
                        </div>

                        <BookOpen
                            size={30}
                            strokeWidth={1}
                            className="text-[#927B4D]"
                        />
                    </div>
                </section>
            </main>

            <FooterSection />

            {/* PDF MODAL */}
            {activeDocument && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#101126]/80 p-3 backdrop-blur-sm sm:p-6"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            closeModal();
                        }
                    }}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="syllabus-modal-title"
                        className="flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden bg-[#FAF7F2] shadow-2xl"
                    >
                        {/* MODAL HEADER */}
                        <div className="flex items-center justify-between gap-4 border-b border-[#20235A]/10 bg-white px-5 py-4 sm:px-7">
                            <div className="flex min-w-0 items-center gap-4">
                                <div className="hidden h-11 w-11 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C] sm:flex">
                                    <FileText size={20} />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#927B4D]">
                                        Syllabus Document
                                    </p>
                                    <h2
                                        id="syllabus-modal-title"
                                        className="mt-1 truncate font-serif text-lg font-normal text-[#20235A] sm:text-xl"
                                    >
                                        {activeDocument.label}
                                    </h2>
                                </div>
                            </div>

                            <div className="flex shrink-0 items-center gap-2">
                                <a
                                    href={activeDocument.pdf}
                                    download
                                    className="flex h-10 items-center gap-2 border border-[#20235A]/15 px-3 text-xs text-[#20235A] transition-colors hover:bg-[#F2EFE8]"
                                >
                                    <ArrowDownToLine size={16} />
                                    <span className="hidden sm:inline">
                                        Download
                                    </span>
                                </a>

                                <button
                                    type="button"
                                    onClick={closeModal}
                                    aria-label="Close syllabus modal"
                                    className="flex h-10 w-10 items-center justify-center bg-[#20235A] text-white transition-colors hover:bg-[#927B4D]"
                                >
                                    <X size={19} />
                                </button>
                            </div>
                        </div>

                        {/* PDF VIEWER */}
                        <div className="min-h-0 flex-1 bg-[#E8E6E1] p-2 sm:p-4">
                            <iframe
                                key={activeDocument.id}
                                src={`${activeDocument.pdf}#toolbar=1&navpanes=0`}
                                title={activeDocument.label}
                                className="h-full w-full border-0 bg-white"
                            />
                        </div>

                        {/* MODAL FOOTER */}
                        <div className="flex items-center justify-between gap-3 border-t border-[#20235A]/10 bg-white px-5 py-3 sm:px-7">
                            <p className="text-[10px] tracking-[0.08em] text-[#777] sm:text-xs">
                                DEPARTMENT OF CSE (AI & ML)
                            </p>

                            <button
                                type="button"
                                onClick={closeModal}
                                className="text-xs tracking-[0.1em] text-[#20235A] transition-colors hover:text-[#927B4D]"
                            >
                                CLOSE DOCUMENT
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
