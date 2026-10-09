"use client";

import React, { useEffect, useState } from "react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import McaNavigation from "../../mca/mcanavigation/page";
import Faq from "../../mca/faq/page";
import {
    ArrowUpRight,
    BookOpen,
    CalendarDays,
    ChevronRight,
    Download,
    FileText,
    X,
} from "lucide-react";

const syllabusDocuments = [
    {
        id: "01",
        title: "MCA Syllabus2020",
        url: "https://ncerc.ac.in/downloads/dpt/mca/downloads/SYLLABUS/MCA%20Syllabus2020.pdf",
    },
    {
        id: "02",
        title: "MCA Ordinance 2020",
        url: "https://ncerc.ac.in/downloads/dpt/mca/downloads/SYLLABUS/MCA%20Ordinance%202020.pdf",
    },
    {
        id: "03",
        title: "MCA Curriculum 2020",
        url: "https://ncerc.ac.in/downloads/dpt/mca/downloads/SYLLABUS/MCA%20Curriculum%202020.pdf",
    },
    {
        id: "04",
        title: "MCA Regulations 2020",
        url: "https://ncerc.ac.in/downloads/dpt/mca/downloads/SYLLABUS/MCA%20Regulations%202020.pdf",
    },
    {
        id: "05",
        title: "APJAKTUMCAOrdinance",
        url: "https://ncerc.ac.in/downloads/dpt/mca/downloads/SYLLABUS/APJAKTUMCAOrdinance.pdf",
    },
    {
        id: "06",
        title: "MCASyllabus 2016",
        url: "https://ncerc.ac.in/downloads/dpt/mca/downloads/SYLLABUS/MCASyllabus%202016.pdf",
    },
    {
        id: "07",
        title: "APJAKTUMCARegulations 2016",
        url: "https://ncerc.ac.in/downloads/dpt/mca/downloads/SYLLABUS/APJAKTUMCARegulations%202016.pdf",
    },
    {
        id: "08",
        title: "APJAKTUMCACurriculum 2016",
        url: "https://ncerc.ac.in/downloads/dpt/mca/downloads/SYLLABUS/APJAKTUMCACurriculum%202016.pdf",
    },
];

const page = () => {
    const [isHandbookOpen, setIsHandbookOpen] = useState(false);

    useEffect(() => {
        if (!isHandbookOpen) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsHandbookOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [isHandbookOpen]);

    return (
        <>
            <SiteHeader />

            <main className="bg-[#FAF7F2] text-[#1E1917]">
                {/* HERO */}
                <section className="relative overflow-hidden bg-[#20235A]">
                    <div className="mx-auto grid min-h-[560px] max-w-[1440px] items-center gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:px-16 lg:py-24">
                        {/* LEFT */}
                        <div className="relative z-10">
                            <div className="flex items-center gap-3">
                                <span className="h-px w-9 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#D2B87C]">
                                    MCA Department
                                </span>
                            </div>

                            <h1 className="mt-6 max-w-3xl font-serif text-[48px] leading-[0.96] tracking-[-0.04em] text-white sm:text-[62px] lg:text-[74px] xl:text-[80px]">
                                Academic
                                <br />
                                <span className="text-[#D2B87C]">
                                    Syllabus.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-xl text-[15px] leading-7 text-white/65 sm:text-[16px]">
                                Access the academic calendar and official
                                syllabus documents for the Master of Computer
                                Applications programme.
                            </p>

                            <div className="mt-9 flex flex-wrap items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => setIsHandbookOpen(true)}
                                    className="group flex items-center gap-3 border border-[#D2B87C] bg-[#D2B87C] px-5 py-3.5 text-[9px] font-medium uppercase tracking-[0.16em] text-[#20235A] transition-all duration-300 hover:bg-white hover:border-white"
                                >
                                    View Syllabus Handbook

                                    <ArrowUpRight
                                        size={15}
                                        strokeWidth={1.6}
                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </button>
                            </div>
                        </div>

                        {/* RIGHT EDITORIAL BLOCK */}
                        <div className="relative hidden lg:block">
                            <div className="relative ml-auto max-w-[440px] border border-white/10 bg-white/[0.04] p-4">
                                <div className="relative aspect-[4/5] overflow-hidden bg-[#2A2D68]">
                                    <img
                                        src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1000&q=85"
                                        alt="Academic syllabus and study materials"
                                        className="h-full w-full object-cover opacity-75"
                                    />

                                    <div className="absolute inset-0 bg-[#20235A]/25" />

                                    <div className="absolute bottom-5 left-5 right-5 border border-white/15 bg-[#20235A]/90 p-5">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-serif text-[30px] leading-none text-[#D2B87C]">
                                                    02
                                                </p>

                                                <p className="mt-2 text-[8px] font-medium uppercase tracking-[0.18em] text-white/55">
                                                    Academic Resources
                                                </p>
                                            </div>

                                            <BookOpen
                                                size={28}
                                                strokeWidth={1}
                                                className="text-white/70"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative line */}
                    <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />
                </section>

                {/* DEPARTMENT NAVIGATION */}
                <McaNavigation />

                {/* INTRO */}
                <section className="bg-white">
                    <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                                        Academic Resources
                                    </span>
                                </div>

                                <h2 className="mt-4 max-w-sm font-serif text-[38px] leading-[1.04] tracking-[-0.03em] text-[#20235A] sm:text-[46px]">
                                    Structure for
                                    <br />
                                    academic growth.
                                </h2>
                            </div>

                            <div className="max-w-3xl">
                                <p className="text-[15px] leading-8 text-[#1E1917]/65 sm:text-[16px]">
                                    The MCA syllabus section provides access to
                                    essential academic information and official
                                    programme documents. Students can refer to
                                    the academic calendar and syllabus handbook
                                    for curriculum-related resources.
                                </p>

                                <div className="mt-8 grid gap-px border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-2">
                                    <div className="bg-[#FAF7F2] p-6">
                                        <CalendarDays
                                            size={23}
                                            strokeWidth={1.3}
                                            className="text-[#8F7746]"
                                        />

                                        <p className="mt-5 font-serif text-[22px] text-[#20235A]">
                                            Academic Calendar
                                        </p>

                                        <p className="mt-2 text-[12px] leading-6 text-[#1E1917]/50">
                                            Access academic scheduling and
                                            programme calendar information.
                                        </p>
                                    </div>

                                    <div className="bg-[#FAF7F2] p-6">
                                        <BookOpen
                                            size={23}
                                            strokeWidth={1.3}
                                            className="text-[#8F7746]"
                                        />

                                        <p className="mt-5 font-serif text-[22px] text-[#20235A]">
                                            Syllabus Handbook
                                        </p>

                                        <p className="mt-2 text-[12px] leading-6 text-[#1E1917]/50">
                                            Explore official MCA syllabus and
                                            curriculum documents.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RESOURCE OPTIONS */}
                <section className="bg-[#F2EFE8]">
                    <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                        <div className="border-b border-[#20235A]/10 pb-7">
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                                    Syllabus
                                </span>
                            </div>

                            <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
                                <h2 className="max-w-2xl font-serif text-[38px] leading-[1.03] tracking-[-0.03em] text-[#20235A] sm:text-[48px]">
                                    Academic resources,
                                    <br />
                                    clearly organised.
                                </h2>

                                <p className="max-w-sm text-[11px] uppercase tracking-[0.16em] text-[#1E1917]/40">
                                    MCA · Official Documents
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 grid gap-5 lg:grid-cols-2">
                            {/* ACADEMIC CALENDAR */}
                            <div className="group border border-[#20235A]/10 bg-white p-7 transition-all duration-300 hover:border-[#D2B87C] sm:p-9">
                                <div className="flex items-start justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                        <CalendarDays
                                            size={22}
                                            strokeWidth={1.4}
                                        />
                                    </div>

                                    <span className="font-serif text-[34px] leading-none text-[#20235A]/10">
                                        01
                                    </span>
                                </div>

                                <div className="mt-12">
                                    <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                        Academic Calendar
                                    </p>

                                    <h3 className="mt-3 font-serif text-[30px] leading-tight tracking-[-0.025em] text-[#20235A] sm:text-[34px]">
                                        Academic Calendar
                                    </h3>

                                    <p className="mt-4 max-w-md text-[13px] leading-7 text-[#1E1917]/55">
                                        Access the academic calendar and
                                        programme scheduling information.
                                    </p>

                                    <a
                                        href="https://ncerc.ac.in/mca/syllabus#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-7 flex w-fit items-center gap-3 border border-[#20235A] px-5 py-3 text-[9px] font-medium uppercase tracking-[0.16em] text-[#20235A] transition-all duration-300 hover:bg-[#20235A] hover:text-white"
                                    >
                                        View Calendar

                                        <ArrowUpRight
                                            size={14}
                                            strokeWidth={1.5}
                                        />
                                    </a>
                                </div>
                            </div>

                            {/* SYLLABUS HANDBOOK */}
                            <div className="group border border-[#20235A]/10 bg-[#20235A] p-7 text-white transition-all duration-300 hover:border-[#D2B87C] sm:p-9">
                                <div className="flex items-start justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center bg-[#D2B87C] text-[#20235A]">
                                        <BookOpen
                                            size={22}
                                            strokeWidth={1.4}
                                        />
                                    </div>

                                    <span className="font-serif text-[34px] leading-none text-white/10">
                                        02
                                    </span>
                                </div>

                                <div className="mt-12">
                                    <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Official Documents
                                    </p>

                                    <h3 className="mt-3 font-serif text-[30px] leading-tight tracking-[-0.025em] text-white sm:text-[34px]">
                                        Syllabus Handbook
                                    </h3>

                                    <p className="mt-4 max-w-md text-[13px] leading-7 text-white/55">
                                        Browse the official syllabus,
                                        ordinance, curriculum and regulations
                                        documents for the MCA programme.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setIsHandbookOpen(true)
                                        }
                                        className="mt-7 flex w-fit items-center gap-3 border border-[#D2B87C] bg-[#D2B87C] px-5 py-3 text-[9px] font-medium uppercase tracking-[0.16em] text-[#20235A] transition-all duration-300 hover:bg-white hover:border-white"
                                    >
                                        Open Handbook

                                        <ArrowUpRight
                                            size={14}
                                            strokeWidth={1.5}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DOCUMENT PREVIEW STRIP */}
                {/* <section className="bg-white">
                    <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
                        <div className="grid items-center gap-8 border-y border-[#20235A]/10 py-8 md:grid-cols-[auto_1fr_auto]">
                            <div className="flex h-14 w-14 items-center justify-center bg-[#F2EFE8]">
                                <FileText
                                    size={25}
                                    strokeWidth={1.2}
                                    className="text-[#8F7746]"
                                />
                            </div>

                            <div>
                                <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                    MCA Syllabus Handbook
                                </p>

                                <h3 className="mt-2 font-serif text-[26px] tracking-[-0.02em] text-[#20235A]">
                                    Eight official academic documents
                                </h3>
                            </div>

                            <button
                                type="button"
                                onClick={() => setIsHandbookOpen(true)}
                                className="flex w-fit items-center gap-3 text-[9px] font-medium uppercase tracking-[0.16em] text-[#20235A] transition-colors hover:text-[#8F7746]"
                            >
                                Browse Documents
                                <ChevronRight
                                    size={15}
                                    strokeWidth={1.5}
                                />
                            </button>
                        </div>
                    </div>
                </section> */}
            </main>

            {/* SYLLABUS HANDBOOK MODAL */}
            {isHandbookOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#20235A]/80 p-4 backdrop-blur-sm sm:p-6"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setIsHandbookOpen(false);
                        }
                    }}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="syllabus-handbook-title"
                        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden bg-[#FAF7F2] shadow-2xl"
                    >
                        {/* MODAL HEADER */}
                        <div className="flex shrink-0 items-start justify-between border-b border-[#20235A]/10 bg-[#20235A] px-6 py-6 sm:px-8">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-7 bg-[#D2B87C]" />

                                    <span className="text-[8px] font-medium uppercase tracking-[0.24em] text-[#D2B87C]">
                                        MCA Department
                                    </span>
                                </div>

                                <h2
                                    id="syllabus-handbook-title"
                                    className="mt-3 font-serif text-[30px] leading-tight tracking-[-0.025em] text-white sm:text-[36px]"
                                >
                                    Syllabus Handbook
                                </h2>

                                <p className="mt-2 max-w-lg text-[11px] leading-5 text-white/55">
                                    Official syllabus and academic documents
                                    for the MCA programme.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setIsHandbookOpen(false)}
                                aria-label="Close syllabus handbook"
                                className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-white/65 transition-colors hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
                            >
                                <X size={18} strokeWidth={1.5} />
                            </button>
                        </div>

                        {/* DOCUMENT LIST */}
                        <div className="overflow-y-auto px-4 py-4 sm:px-6 sm:py-6">
                            <div className="grid gap-2">
                                {syllabusDocuments.map((document) => (
                                    <div
                                        key={document.id}
                                        className="group flex items-center gap-4 border border-[#20235A]/10 bg-white p-4 transition-all duration-300 hover:border-[#D2B87C] sm:p-5"
                                    >
                                        {/* NUMBER */}
                                        <span className="hidden w-8 shrink-0 font-serif text-[20px] text-[#20235A]/20 sm:block">
                                            {document.id}
                                        </span>

                                        {/* ICON */}
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#8F7746] transition-colors duration-300 group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                                            <FileText
                                                size={19}
                                                strokeWidth={1.4}
                                            />
                                        </div>

                                        {/* TITLE */}
                                        <div className="min-w-0 flex-1">
                                            <p className="font-serif text-[17px] leading-snug text-[#20235A] sm:text-[19px]">
                                                {document.title}
                                            </p>

                                            <p className="mt-1 text-[8px] font-medium uppercase tracking-[0.16em] text-[#1E1917]/35">
                                                Official PDF Document
                                            </p>
                                        </div>

                                        {/* ACTIONS */}
                                        <div className="flex shrink-0 items-center gap-2">
                                            <a
                                                href={document.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Open ${document.title}`}
                                                className="flex h-10 w-10 items-center justify-center border border-[#20235A]/15 text-[#20235A] transition-all duration-300 hover:border-[#20235A] hover:bg-[#20235A] hover:text-white"
                                            >
                                                <ArrowUpRight
                                                    size={15}
                                                    strokeWidth={1.5}
                                                />
                                            </a>

                                            <a
                                                href={document.url}
                                                download
                                                aria-label={`Download ${document.title}`}
                                                className="hidden h-10 w-10 items-center justify-center border border-[#20235A]/15 text-[#20235A] transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] sm:flex"
                                            >
                                                <Download
                                                    size={15}
                                                    strokeWidth={1.5}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* MODAL FOOTER */}
                        <div className="shrink-0 border-t border-[#20235A]/10 bg-white px-6 py-4 sm:px-8">
                            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                                <p className="text-[9px] uppercase tracking-[0.14em] text-[#1E1917]/40">
                                    08 Official Documents · MCA
                                </p>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setIsHandbookOpen(false)
                                    }
                                    className="w-fit text-[9px] font-medium uppercase tracking-[0.16em] text-[#20235A] transition-colors hover:text-[#8F7746]"
                                >
                                    Close Handbook
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Faq />
            <FooterSection />
        </>
    );
};

export default page;