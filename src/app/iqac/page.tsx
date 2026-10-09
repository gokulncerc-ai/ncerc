"use client";

import React from "react";
import Link from "next/link";
import {
    ArrowUpRight,
    ChevronRight,
    FileText,
    ExternalLink,
    ClipboardList,
    ShieldCheck,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

/* =========================================================
   IQAC DOCUMENT DATA
========================================================= */

const iqacDocuments = [
    {
        title: "C-8241",
        url: "https://ncerc.ac.in/downloads/iqac/C-8241-.pdf",
        type: "IQAC Document",
    },
    {
        title: "EOA Report 2018-19 NCERC",
        url: "https://ncerc.ac.in/downloads/iqac/EOA%20Report_2018-19%20NCERC.PDF",
        type: "Report",
    },
    {
        title: "IIQA Undertaking",
        url: "https://ncerc.ac.in/downloads/iqac/IIQA_Undertaking.pdf",
        type: "IQAC Document",
    },
    {
        title: "IQAC Member Formation and Meeting Minutes",
        url: "https://ncerc.ac.in/downloads/iqac/IQAC%20%28Member%20formation%20and%20Meeting%20minutes%29.pdf",
        type: "IQAC Document",
    },
    {
        title: "NCERC RTI",
        url: "https://ncerc.ac.in/downloads/iqac/NCERC%20RTI.pdf",
        type: "Institutional Document",
    },
    {
        title: "Provisional Order 81 NCERC 2018-19",
        url: "https://ncerc.ac.in/downloads/iqac/Provisionalorder_81%20NCERC%202018-19.pdf",
        type: "Order",
    },
    {
        title: "IIQA",
        url: "https://ncerc.ac.in/downloads/iqac/IIQA.pdf",
        type: "IQAC Document",
    },
];

const meetingDocuments = [
    {
        title: "ATR of 30th IQAC Meeting",
        url: "https://ncerc.ac.in/downloads/iqac/ATR%20of%2030%20th%20IQAC%20meeting.pdf",
        type: "ATR",
    },
    {
        title: "ATR of 32nd IQAC Meeting",
        url: "https://ncerc.ac.in/downloads/iqac/ATR%20of%2032nd%20IQAC%20meeting.pdf",
        type: "ATR",
    },
    {
        title: "ATR of 33rd IQAC Meeting",
        url: "https://ncerc.ac.in/downloads/iqac/ATR%20of%2033rd%20IQAC%20meeting.pdf",
        type: "ATR",
    },
    {
        title: "IQAC 30th Meeting Minutes",
        url: "https://ncerc.ac.in/downloads/iqac/IQAC%2030th%20Meeting%20Minutes.pdf",
        type: "Minutes",
    },
    {
        title: "IQAC 31st Meeting Minutes",
        url: "https://ncerc.ac.in/downloads/iqac/IQAC%2031st%20Meeting%20Minutes.pdf",
        type: "Minutes",
    },
    {
        title: "IQAC 31st Meeting ATR",
        url: "https://ncerc.ac.in/downloads/iqac/IQAC%2031st%20meeting%20ATR.pdf",
        type: "ATR",
    },
    {
        title: "IQAC 32nd Meeting Minutes",
        url: "https://ncerc.ac.in/downloads/iqac/IQAC%2032nd%20meeting%20minutes.pdf",
        type: "Minutes",
    },
    {
        title: "IQAC 33rd Meeting Minutes",
        url: "https://ncerc.ac.in/downloads/iqac/33rd%20meeting%20minutes%20of%20IQAC.pdf",
        type: "Minutes",
    },
    {
        title: "IQAC 34th Meeting Minutes",
        url: "https://ncerc.ac.in/downloads/iqac/34th%20meeting%20minutes.pdf",
        type: "Minutes",
    },
    {
        title: "IQAC 34th Meeting ATR",
        url: "https://ncerc.ac.in/downloads/iqac/34th%20IQAC%20meeting%20ATR.pdf",
        type: "ATR",
    },
    {
        title: "IQAC 35th Meeting Minutes",
        url: "https://ncerc.ac.in/downloads/iqac/35th%20IQAC%20meeting%20minutes.pdf",
        type: "Minutes",
    },
    {
        title: "IQAC 35th Meeting ATR",
        url: "https://ncerc.ac.in/downloads/iqac/IQAC%2035th%20MEETING%20ATR.pdf",
        type: "ATR",
    },
    {
        title: "IQAC 36th Meeting Minutes",
        url: "https://ncerc.ac.in/downloads/iqac/IQAC%2036th%20MEETING%20MINUTES.pdf",
        type: "Minutes",
    },
    {
        title: "IQAC 36th Meeting ATR",
        url: "https://ncerc.ac.in/downloads/iqac/IQAC%2036th%20Meeting%20ATR.pdf",
        type: "ATR",
    },
    {
        title: "IQAC 37th Meeting Minutes",
        url: "https://ncerc.ac.in/downloads/iqac/IQAC%2037th%20Meeting%20Minutes.pdf",
        type: "Minutes",
    },
    {
        title: "IQAC 37th Meeting ATR",
        url: "https://ncerc.ac.in/downloads/iqac/IQAC%2037th%20MEETING%20ATR.pdf",
        type: "ATR",
    },
    {
        title: "IQAC 38th Meeting Minutes",
        url: "https://ncerc.ac.in/downloads/iqac/IQAC%2038th%20MEETING%20MINUTES.pdf",
        type: "Minutes",
    },
    {
        title: "IQAC 38th Meeting ATR",
        url: "https://ncerc.ac.in/downloads/iqac/IQAC%2038th%20Meeting%20ATR.pdf",
        type: "ATR",
    },
    {
        title: "IQAC 39th Meeting Minutes",
        url: "https://ncerc.ac.in/downloads/iqac/IQAC%2039th%20MEETING%20MINUTES.pdf",
        type: "Minutes",
    },
    {
        title: "IQAC 39th Meeting ATR",
        url: "https://ncerc.ac.in/downloads/iqac/39th%20ATR.pdf",
        type: "ATR",
    },
    {
        title: "IQAC 40th Meeting Minutes",
        url: "https://ncerc.ac.in/downloads/iqac/40th%20MOM.pdf",
        type: "Minutes",
    },
    {
        title: "IQAC 40th Meeting ATR",
        url: "https://ncerc.ac.in/downloads/iqac/40th%20ATR.pdf",
        type: "ATR",
    },
    {
        title: "IQAC 41st Meeting Minutes",
        url: "https://ncerc.ac.in/downloads/iqac/41st%20mom.pdf",
        type: "Minutes",
    },
    {
        title: "IQAC 41st Meeting ATR",
        url: "https://ncerc.ac.in/downloads/iqac/41%20atr.pdf",
        type: "ATR",
    },
    {
        title: "IQAC 42nd Meeting Minutes",
        url: "https://ncerc.ac.in/downloads/iqac/42%20MOM.pdf",
        type: "Minutes",
    },
    {
        title: "IQAC 42nd Meeting ATR",
        url: "https://ncerc.ac.in/downloads/iqac/42%20atr.pdf",
        type: "ATR",
    },
    {
        title: "IQAC 43rd Meeting Minutes",
        url: "https://ncerc.ac.in/downloads/iqac/43%20mom.pdf",
        type: "Minutes",
    },
    {
        title: "IQAC 43rd Meeting ATR",
        url: "https://ncerc.ac.in/downloads/iqac/43-atr.pdf",
        type: "ATR",
    },
    {
        title: "IQAC 44th Meeting Minutes",
        url: "https://ncerc.ac.in/downloads/iqac/44th%20MEETING%20MINUTES.pdf",
        type: "Minutes",
    },
];

/* =========================================================
   DOCUMENT CARD
========================================================= */

const DocumentCard = ({
    title,
    url,
    type,
    number,
}: {
    title: string;
    url: string;
    type: string;
    number: string;
}) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[150px] flex-col justify-between rounded-xl border border-[#20235A]/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/60 hover:shadow-[0_15px_40px_rgba(32,35,90,0.08)]"
        >
            <div>
                <div className="flex items-start justify-between gap-4">
                    <span className="text-[10px] font-semibold tracking-[0.18em] text-[#D2B87C]">
                        {number}
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#faf7f2] text-[#20235A]/45 transition-all duration-300 group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                        <ExternalLink size={14} />
                    </span>
                </div>

                <h3 className="mt-5 font-serif text-lg leading-snug text-[#20235A]">
                    {title}
                </h3>
            </div>

            <div className="mt-6 flex items-center gap-2">
                <FileText
                    size={13}
                    strokeWidth={1.6}
                    className="text-[#D2B87C]"
                />

                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#20235A]/40">
                    {type}
                </span>
            </div>
        </a>
    );
};

/* =========================================================
   PAGE
========================================================= */

const Page = () => {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#faf7f2] text-[#20235A]">

                {/* =====================================================
                    HERO
                ===================================================== */}

                <section className="border-b border-[#20235A]/10 bg-[#20235A]">
                    <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 lg:px-14 lg:py-20">

                        {/* Breadcrumb */}
                        <div className="mb-12 flex items-center gap-2 text-xs">
                            <Link
                                href="/"
                                className="text-white/40 transition-colors hover:text-[#D2B87C]"
                            >
                                Home
                            </Link>

                            <ChevronRight
                                size={13}
                                className="text-white/25"
                            />

                            <Link
                                href="/naac-iqac"
                                className="text-white/40 transition-colors hover:text-[#D2B87C]"
                            >
                                NAAC & IQAC
                            </Link>

                            <ChevronRight
                                size={13}
                                className="text-white/25"
                            />

                            <span className="text-[#D2B87C]">
                                IQAC
                            </span>
                        </div>

                        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">

                            <div>

                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-9 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45">
                                        Quality Assurance
                                    </span>
                                </div>

                                <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] text-white sm:text-6xl">
                                    Internal Quality
                                    <span className="block text-[#D2B87C]">
                                        Assurance Cell.
                                    </span>
                                </h1>

                                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">
                                    Access institutional documents, reports,
                                    meeting minutes and action-taken reports
                                    maintained by the Internal Quality
                                    Assurance Cell of NCERC.
                                </p>

                            </div>

                            <div className="border-l border-white/10 pl-7">

                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                                    IQAC Archive
                                </span>

                                <div className="mt-5 flex items-center gap-7">

                                    <div>
                                        <span className="block font-serif text-3xl text-white">
                                            {iqacDocuments.length +
                                                meetingDocuments.length}
                                        </span>

                                        <span className="mt-1 block text-[9px] uppercase tracking-[0.16em] text-white/35">
                                            Documents
                                        </span>
                                    </div>

                                    <div className="h-10 w-px bg-white/10" />

                                    <div>
                                        <span className="block font-serif text-3xl text-white">
                                            44
                                        </span>

                                        <span className="mt-1 block text-[9px] uppercase tracking-[0.16em] text-white/35">
                                            Meetings
                                        </span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>


                {/* =====================================================
                    BACK NAVIGATION
                ===================================================== */}

                <section className="border-b border-[#20235A]/10 bg-white">
                    <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 sm:px-10 lg:px-14">
                        <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#20235A]/30 sm:block">
                            Institutional Quality Documentation
                        </span>

                    </div>
                </section>


                {/* =====================================================
                    INTRODUCTION
                ===================================================== */}

                <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                    <div className="grid gap-10 lg:grid-cols-[280px_1fr]">

                        <div>
                            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                About IQAC
                            </span>

                            <div className="mt-5 h-px w-12 bg-[#20235A]/15" />
                        </div>

                        <div className="max-w-4xl">

                            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
                                Supporting continuous institutional
                                improvement.
                            </h2>

                            <p className="mt-6 text-sm leading-8 text-[#20235A]/55">
                                The Internal Quality Assurance Cell supports
                                the continuous improvement of academic and
                                institutional processes through systematic
                                documentation, review and quality-oriented
                                initiatives.
                            </p>

                            <p className="mt-4 text-sm leading-8 text-[#20235A]/55">
                                This section provides access to important IQAC
                                records, reports, undertakings, meeting
                                minutes and action-taken reports associated
                                with quality assurance activities at NCERC.
                            </p>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    KEY DOCUMENTS
                ===================================================== */}

                <section className="border-y border-[#20235A]/10 bg-white">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                        <div className="mb-10 flex items-end justify-between gap-6">

                            <div>

                                <div className="mb-3 flex items-center gap-2">

                                    <ShieldCheck
                                        size={16}
                                        strokeWidth={1.5}
                                        className="text-[#D2B87C]"
                                    />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#20235A]/45">
                                        Institutional Records
                                    </span>

                                </div>

                                <h2 className="font-serif text-3xl">
                                    IQAC Documents
                                </h2>

                            </div>

                            <span className="hidden text-xs text-[#20235A]/30 sm:block">
                                {iqacDocuments.length} Documents
                            </span>

                        </div>


                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                            {iqacDocuments.map((document, index) => (
                                <DocumentCard
                                    key={document.title}
                                    title={document.title}
                                    url={document.url}
                                    type={document.type}
                                    number={String(index + 1).padStart(2, "0")}
                                />
                            ))}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    MEETING RECORDS
                ===================================================== */}

                <section className="bg-[#faf7f2]">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                            <div>

                                <div className="mb-3 flex items-center gap-2">

                                    <ClipboardList
                                        size={16}
                                        strokeWidth={1.5}
                                        className="text-[#D2B87C]"
                                    />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#20235A]/45">
                                        Meetings & Actions
                                    </span>

                                </div>

                                <h2 className="font-serif text-3xl">
                                    Meeting Records
                                </h2>

                            </div>

                            <p className="max-w-sm text-xs leading-6 text-[#20235A]/40">
                                Meeting minutes and action-taken reports from
                                successive IQAC meetings.
                            </p>

                        </div>


                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                            {meetingDocuments.map((document, index) => (
                                <DocumentCard
                                    key={document.title}
                                    title={document.title}
                                    url={document.url}
                                    type={document.type}
                                    number={String(
                                        index + 1
                                    ).padStart(2, "0")}
                                />
                            ))}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CTA
                ===================================================== */}

                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                            <div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.23em] text-[#D2B87C]">
                                    NAAC & IQAC
                                </span>

                                <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                                    Explore more institutional quality
                                    information.
                                </h2>

                            </div>

                            <Link
                                href="/naac-iqac"
                                className="group inline-flex w-fit items-center gap-3 border border-white/15 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
                            >
                                Back to NAAC-IQAC

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