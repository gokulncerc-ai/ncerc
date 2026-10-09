"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowUpRight,
    ChevronRight,
    FileText,
    FolderOpen,
    X,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const criteria = [
    {
        id: "01",
        title: "CRITERIA 1",
        subtitle: "Curricular Aspects",
        href: "/aqar-2020-21-criteria1",
        documents: [
            {
                title: "Approval Process Handbook_2021-22 (Revised)",
                url: "https://ncerc.ac.in/downloads/Approval%20Process%20Handbook_2021-22%20%28Revised%29.pdf",
            },
            {
                title: "NCERC Annual Report 2020-21",
                url: "https://ncerc.ac.in/downloads/NCERC%20Annual%20Report%202020-21.pdf",
            },
            {
                title: "Reservation Category 2020-21",
                url: "https://ncerc.ac.in/downloads/Reservation%20Category%202020-21.pdf",
            },
            {
                title: "1.1.1 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria2/newupdate/new/1.1.1_AQAR_2020-2021.pdf",
            },
            {
                title: "1.1.2 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria2/newupdate/new/1.1.2_AQAR_2020-21.pdf",
            },
            {
                title: "1.3.2 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria1/1.3.2/1.3.2.xlsx",
            },
            {
                title: "1.3.2 Electrical Electronics Engg",
                url: "https://ncerc.ac.in/downloads/criteria1/1.3.2/ElectricalElectronicsEngg-1.3.2.zip",
            },
            {
                title: "1.3.3 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria1/1.3.3/1.3.3.xlsx",
            },
            {
                title: "1.4.1 & 1.4.2 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria1/1.4.1/1.4.1%20&%201.4.2.pdf",
            },
            {
                title: "2.1.1 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria2/newupdate/2.1.1.pdf",
            },
            {
                title: "2.2.1 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria2/newupdate/new/2.2.1_AQAR_2020-2021.pdf",
            },
            {
                title: "2.2.2 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria2/newupdate/2.2.2.pdf",
            },
            {
                title: "2.3.1 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria2/newupdate/new/2.3.1_AQAR_2020-2021.pdf",
            },
            {
                title: "2.3.2 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria2/newupdate/2.3.2.pdf",
            },
            {
                title: "2.3.3 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria2/newupdate/2.3.3.pdf",
            },
            {
                title: "2.5.1 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria2/newupdate/2.5.1.pdf",
            },
            {
                title: "2.5.2 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria2/newupdate/new/2.5.2_AQAR_2020-2021.pdf",
            },
            {
                title: "2.6.1 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria2/newupdate/new/2.6.1_AQAR_2020-2021.pdf",
            },
            {
                title: "2.6.2 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria2/newupdate/new/2.6.2_AQAR_2020-2021.pdf",
            },
            {
                title: "2.6.3 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria2/newupdate/2.6.3.pdf",
            },
            {
                title: "2.7.1 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria2/newupdate/2.7.1.pdf",
            },
            {
                title: "3.2.2 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria3/updated/3.2.2-AQAR-2020-2021.pdf",
            },
            {
                title: "3.3.1 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria3/updated/3.3.1-AQAR-2020-2021.pdf",
            },
            {
                title: "3.3.2 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria3/updated/3.3.2-AQAR-2020-2021.pdf",
            },
            {
                title: "3.3.3 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria3/updated/3.3.3-AQAR-2020-2021.pdf",
            },
            {
                title: "3.4.1 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria3/updated/3.4.1-AQAR-2020-2021.pdf",
            },
            {
                title: "3.4.3 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria3/updated/3.4.3-AQAR-2020-2021.pdf",
            },
            {
                title: "3.5.1 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria3/updated/3.5.1-AQAR-2020-2021.pdf",
            },
            {
                title: "3.5.2 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria3/updated/3.5.2-AQAR-2020-2021.pdf",
            },
            {
                title: "4.1.1 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria4/4.1.1.pdf",
            },
            {
                title: "4.1.2 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria4/4.1.2.pdf",
            },
            {
                title: "4.2.1 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria4/4.2.1.pdf",
            },
            {
                title: "4.3.1 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria4/4.3.1.pdf",
            },
            {
                title: "4.4.2 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria4/4.4.2.pdf",
            },
            {
                title: "5.1.1 Government Scholarship",
                url: "https://ncerc.ac.in/downloads/criteria5/newupdate/new/5.1.1%20Government%20Scholarship.pdf",
            },
            {
                title: "5.1.2 Institutional Scholarship",
                url: "https://ncerc.ac.in/downloads/criteria5/newupdate/new/5.1.2%20Institutional%20Scholarship.pdf",
            },
            {
                title: "5.1.3 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria5/newupdate/5.1.3.pdf",
            },
            {
                title: "5.2.1 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria5/newupdate/5.2.1.pdf",
            },
            {
                title: "5.2.2 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria5/newupdate/5.2.2.pdf",
            },
            {
                title: "5.2.3 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria5/newupdate/5.2.3.pdf",
            },
            {
                title: "5.3.2 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria5/newupdate/5.3.2%20AQAR%202020-21.pdf",
            },
            {
                title: "5.3.3 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria5/newupdate/5.3.3.pdf",
            },
            {
                title: "5.4.1 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria5/newupdate/5.4.1.pdf",
            },
            {
                title: "6.1.2 NCERC 2020-21",
                url: "https://ncerc.ac.in/downloads/criteria6/new-jan-2022/6.1.2-NCERC.pdf",
            },
            {
                title: "6.3.1 NCERC HR POLICY",
                url: "https://ncerc.ac.in/downloads/criteria6/new-jan-2022/6.3.1-NCERC-HR-POLICY.pdf",
            },
            {
                title: "6.3.5 NCERC 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria6/new-jan-2022/6.3.5-NCERC.pdf",
            },
            {
                title: "6.4.1 NCERC 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria6/new-jan-2022/6.4.1-NCERC.pdf",
            },
            {
                title: "6.4.3 Balance Sheet",
                url: "https://ncerc.ac.in/downloads/criteria6/new-jan-2022/6.4.3-Balance-Sheet.pdf",
            },
            {
                title: "6.3.3 NCERC 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria6/new-jan-2022/6.3.3%20NCERC.pdf",
            },
            {
                title: "6.3.4 AQAR 2020-2021",
                url: "https://ncerc.ac.in/downloads/criteria6/new/6.3.4%20AQAR%2020-21.pdf",
            },
            {
                title: "6.5.2",
                url: "https://ncerc.ac.in/downloads/criteria6/new/6.5.2.pdf",
            },
            {
                title: "6.5.3 IQAC Meeting Minutes",
                url: "https://ncerc.ac.in/downloads/criteria6/new-jan-2022/6.5.3%20IQAC%20meeting%20minutes%202020-21.pdf",
            },
        ],
    },

];

const Page = () => {
    const [selectedCriteria, setSelectedCriteria] = useState<
        (typeof criteria)[number] | null
    >(null);

    const closeModal = () => {
        setSelectedCriteria(null);
    };

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
                        <div className="mb-14 flex items-center gap-2 text-xs">

                            <Link
                                href="/"
                                className="text-white/45 transition-colors hover:text-[#D2B87C]"
                            >
                                Home
                            </Link>

                            <ChevronRight
                                size={13}
                                className="text-white/25"
                            />

                            <Link
                                href="/aqar-details"
                                className="text-white/45 transition-colors hover:text-[#D2B87C]"
                            >
                                AQAR
                            </Link>

                            <ChevronRight
                                size={13}
                                className="text-white/25"
                            />

                            <span className="text-[#D2B87C]">
                                AQAR 2020–2021
                            </span>

                        </div>


                        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-end">

                            {/* Main heading */}
                            <div>

                                <div className="mb-5 flex items-center gap-3">

                                    <span className="h-px w-9 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">
                                        Annual Quality Assurance Report
                                    </span>

                                </div>

                                <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">

                                    AQAR

                                    <span className="text-[#D2B87C]">
                                        {" "}2020–2021
                                    </span>

                                </h1>

                                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                                    Access the Annual Quality Assurance Report
                                    through its seven assessment criteria,
                                    providing a structured view of institutional
                                    quality and academic practices.
                                </p>

                            </div>


                            {/* Side information */}
                            <div className="border-l border-white/10 pl-7">

                                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                                    Academic Year
                                </span>

                                <div className="mt-3 font-serif text-4xl text-white">
                                    2020–21
                                </div>

                                <div className="mt-7 flex items-center gap-3">

                                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D2B87C]/30 text-[#D2B87C]">

                                        <FileText
                                            size={15}
                                            strokeWidth={1.5}
                                        />

                                    </div>

                                    <span className="text-xs text-white/45">
                                        07 Assessment Criteria
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                INTRO / BACK
            ===================================================== */}
                <section className="border-b border-[#20235A]/10 bg-white">

                    <div className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10 lg:px-14">

                        <Link
                            href="/aqar-details"
                            className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A]/55 transition-colors hover:text-[#20235A]"
                        >

                            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#20235A]/15 transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C]">

                                <ArrowLeft size={14} />

                            </span>

                            Back to AQAR Details

                        </Link>

                    </div>

                </section>


                {/* =====================================================
                CRITERIA INTRO
            ===================================================== */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                    <div className="grid gap-10 lg:grid-cols-[0.45fr_1fr]">

                        <div>

                            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                Report Structure
                            </span>

                            <div className="mt-4 h-px w-10 bg-[#20235A]/15" />

                        </div>


                        <div>

                            <h2 className="max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">
                                Explore the AQAR by criteria.
                            </h2>

                            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#20235A]/55">
                                Select a criterion below to access the
                                corresponding AQAR 2020–2021 documents and
                                supporting information.
                            </p>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                CRITERIA LIST
            ===================================================== */}
                <section className="pb-20 lg:pb-28">

                    <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">

                        <div className="overflow-hidden border-y border-[#20235A]/10 bg-white">

                            {criteria.map((item) => (

                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setSelectedCriteria(item)}
                                    className="group block w-full border-b border-[#20235A]/10 text-left last:border-b-0"
                                >

                                    <div className="grid items-center gap-6 px-6 py-7 transition-colors duration-300 group-hover:bg-[#faf7f2] sm:grid-cols-[70px_1fr_auto] sm:px-8 lg:px-10">

                                        {/* Number */}
                                        <div>

                                            <span className="font-serif text-xl text-[#D2B87C]">
                                                {item.id}
                                            </span>

                                        </div>


                                        {/* Content */}
                                        <div>

                                            <div className="flex items-center gap-3">

                                                <FolderOpen
                                                    size={17}
                                                    strokeWidth={1.5}
                                                    className="text-[#20235A]/30 transition-colors duration-300 group-hover:text-[#D2B87C]"
                                                />

                                                <h3 className="font-serif text-xl text-[#20235A] sm:text-2xl">
                                                    {item.title}
                                                </h3>

                                            </div>

                                            <p className="mt-2 pl-7 text-xs leading-6 text-[#20235A]/45">
                                                {item.subtitle}
                                            </p>

                                        </div>


                                        {/* Arrow */}
                                        <div className="flex items-center justify-between gap-5 sm:justify-end">

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#20235A]/35">
                                                View documents
                                            </span>

                                            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#20235A]/15 transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C]">

                                                <ArrowUpRight
                                                    size={15}
                                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                />

                                            </span>

                                        </div>

                                    </div>

                                </button>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                FOOTER CTA
            ===================================================== */}
                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 lg:px-14 lg:py-18">

                        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

                            <div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    AQAR 2020–2021
                                </span>

                                <h2 className="mt-3 max-w-2xl font-serif text-2xl leading-tight text-white sm:text-3xl">
                                    Institutional quality documented
                                    through seven criteria.
                                </h2>

                            </div>


                            <Link
                                href="/aqar-details"
                                className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-xs font-medium text-white transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
                            >

                                All AQAR Reports

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


            {/* =====================================================
            CRITERIA DOCUMENT MODAL
        ===================================================== */}
            {selectedCriteria && (

                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#20235A]/70 px-4 py-6 backdrop-blur-sm sm:px-6"
                    onClick={closeModal}
                >

                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="criteria-modal-title"
                        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >

                        {/* Top Accent */}
                        <div className="h-1.5 w-full shrink-0 bg-[#D2B87C]" />


                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={closeModal}
                            aria-label="Close modal"
                            className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#20235A]/10 bg-white text-[#20235A]/50 transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
                        >

                            <X size={17} />

                        </button>


                        {/* =================================================
                        MODAL HEADER
                    ================================================= */}
                        <div className="shrink-0 px-6 pb-6 pt-8 sm:px-9 sm:pb-7 sm:pt-9">

                            <div className="mb-5 flex items-center gap-4">

                                <span className="font-serif text-3xl text-[#D2B87C]">
                                    {selectedCriteria.id}
                                </span>

                                <span className="h-px w-10 bg-[#20235A]/15" />

                                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#20235A]/40">
                                    AQAR 2020–2021
                                </span>

                            </div>


                            <div className="flex items-start gap-4 pr-10">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D2B87C]/30 bg-[#faf7f2] text-[#D2B87C]">

                                    <FolderOpen
                                        size={21}
                                        strokeWidth={1.4}
                                    />

                                </div>

                                <div>

                                    <h2
                                        id="criteria-modal-title"
                                        className="font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl"
                                    >
                                        {selectedCriteria.title}
                                    </h2>

                                    <p className="mt-2 text-xs leading-6 text-[#20235A]/50 sm:text-sm">
                                        {selectedCriteria.subtitle}
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* =================================================
                        DOCUMENT LIST
                    ================================================= */}
                        <div className="min-h-0 flex-1 overflow-y-auto border-y border-[#20235A]/10 bg-[#faf7f2]">

                            <div className="px-6 py-6 sm:px-9 sm:py-7">

                                <div className="mb-5 flex items-center justify-between">

                                    <div>

                                        <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                            Documents
                                        </span>

                                        <h3 className="mt-1 font-serif text-xl text-[#20235A]">
                                            {selectedCriteria.documents.length}{" "}
                                            {selectedCriteria.documents.length === 1
                                                ? "Document"
                                                : "Documents"}
                                        </h3>

                                    </div>

                                    <FileText
                                        size={20}
                                        strokeWidth={1.4}
                                        className="text-[#20235A]/20"
                                    />

                                </div>


                                {selectedCriteria.documents.length > 0 ? (

                                    <div className="space-y-2">

                                        {selectedCriteria.documents.map(
                                            (document, index) => (

                                                <a
                                                    key={document.title}
                                                    href={document.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group flex items-center gap-4 border border-[#20235A]/10 bg-white px-4 py-4 transition-all duration-300 hover:border-[#D2B87C]/60 hover:bg-white sm:px-5"
                                                >

                                                    {/* Document Number */}
                                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#20235A] font-serif text-xs text-white transition-colors duration-300 group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                                        {String(index + 1).padStart(
                                                            2,
                                                            "0"
                                                        )}
                                                    </span>


                                                    {/* Document Icon */}
                                                    <div className="hidden shrink-0 text-[#20235A]/25 sm:block">

                                                        <FileText
                                                            size={17}
                                                            strokeWidth={1.5}
                                                        />

                                                    </div>


                                                    {/* Document Name */}
                                                    <div className="min-w-0 flex-1">

                                                        <p className="text-xs font-semibold leading-5 text-[#20235A] transition-colors duration-300 group-hover:text-[#20235A] sm:text-sm">
                                                            {document.title}
                                                        </p>

                                                        <p className="mt-0.5 text-[9px] uppercase tracking-[0.12em] text-[#20235A]/35">
                                                            PDF Document
                                                        </p>

                                                    </div>


                                                    {/* Open Icon */}
                                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#20235A]/10 text-[#20235A]/40 transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">

                                                        <ArrowUpRight
                                                            size={14}
                                                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                        />

                                                    </span>

                                                </a>

                                            )
                                        )}

                                    </div>

                                ) : (

                                    /* Empty State */
                                    <div className="border border-dashed border-[#20235A]/15 bg-white px-6 py-10 text-center">

                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#D2B87C]/30 bg-[#faf7f2] text-[#D2B87C]">

                                            <FileText
                                                size={20}
                                                strokeWidth={1.4}
                                            />

                                        </div>

                                        <h4 className="mt-4 font-serif text-lg text-[#20235A]">
                                            Documents coming soon
                                        </h4>

                                        <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-[#20235A]/45">
                                            The documents for this criterion will
                                            be added here.
                                        </p>

                                    </div>

                                )}

                            </div>

                        </div>


                        {/* =================================================
                        MODAL FOOTER
                    ================================================= */}
                        <div className="flex shrink-0 items-center justify-end px-6 py-5 sm:px-9">

                            <button
                                type="button"
                                onClick={closeModal}
                                className="inline-flex items-center justify-center rounded-full border border-[#20235A]/15 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#20235A]/60 transition-all duration-300 hover:border-[#20235A]/30 hover:text-[#20235A]"
                            >
                                Close
                            </button>

                        </div>

                    </div>

                </div>

            )}

        </>
    );

};

export default Page;
