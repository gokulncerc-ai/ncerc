"use client";
import { useState } from "react";
import Link from "next/link";
import {
    ArrowUpRight,
    BellRing,
    CalendarDays,
    FileText,
    X,
    ExternalLink,
    ShieldCheck,
} from "lucide-react";
import SiteHeader from '@/components/header/SiteHeader';
import FooterSection from '@/components/home/FooterSection';
import React from 'react';

interface CircularItem {
    id: string;
    title: string;
    description: string;
    href?: string;
    type: "modal" | "pdf";
    icon: typeof CalendarDays;
}

const circulars: CircularItem[] = [
    {
        id: "aicte-calendar",
        title: "AICTE – Revised Academic Calendar 2026–27",
        description:
            "Revised Academic Calendar issued by AICTE for the Academic Year 2026–27.",
        type: "modal",
        icon: CalendarDays,
    },
    {
        id: "nba-accreditation",
        title: "Special Circular NBA Accreditation",
        description:
            "Special circular regarding NBA accreditation and related academic information.",
        href: "https://ncerc.ac.in/documents/circular/Special-circular-nba-accredited.pdf",
        type: "pdf",
        icon: ShieldCheck,
    },
];

const AicteCircularModal = ({
    onClose,
}: {
    onClose: () => void;
}) => {
    const pdfUrl =
        "https://ncerc.ac.in/documents/circular/Revised%20Academic%20Calendar%202026-27.pdf";

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#20235A]/70 px-4 py-6 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl"
                onClick={(event) => event.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#E3DED4] bg-white text-[#6B6257] transition hover:border-[#20235A] hover:bg-[#20235A] hover:text-white"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* Modal Header */}
                <div className="bg-[#20235A] px-7 py-9 sm:px-10 sm:py-11">
                    <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                        <span className="h-px w-8 bg-[#D2B87C]" />
                        Circular
                    </div>

                    <h2 className="mt-5 max-w-2xl pr-10 font-serif text-3xl leading-tight text-white sm:text-4xl">
                        AICTE – Revised Academic Calendar 2026–27
                    </h2>
                </div>

                {/* Modal Content */}
                <div className="px-7 py-8 sm:px-10 sm:py-10">
                    <div className="mb-8 flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D2B87C]/10 text-[#8F7746]">
                            <FileText className="h-5 w-5" />
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B6257]">
                                Notice
                            </p>

                            <p className="mt-1 text-sm font-medium text-[#1E1917]">
                                Academic Year 2026–27
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6 text-base leading-8 text-[#6B6257]">
                        <p>
                            The All India Council for Technical Education
                            (AICTE) has issued Circular No.
                            <span className="font-semibold text-[#1E1917]">
                                {" "}
                                AICTE/RB-AC-2026-27/2
                            </span>{" "}
                            dated
                            <span className="font-semibold text-[#1E1917]">
                                {" "}
                                13.08.2026
                            </span>{" "}
                            regarding the Revised Academic Calendar for the
                            Academic Year 2026–27, applicable to technical
                            institutions.
                        </p>

                        <p>
                            The revised calendar includes important dates
                            relating to admission, commencement of classes,
                            and lateral entry admissions for the academic year
                            2026–27.
                        </p>

                        <p>
                            The AICTE Circular on the Revised Academic Calendar
                            2026–27 is{" "}
                            <a
                                href={pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-semibold text-[#8F7746] underline decoration-[#D2B87C] underline-offset-4 transition hover:text-[#20235A]"
                            >
                                available here
                                <ExternalLink className="h-4 w-4" />
                            </a>{" "}
                            for the information of all concerned.
                        </p>
                    </div>

                    {/* PDF Button */}
                    <div className="mt-9 border-t border-[#E3DED4] pt-7">
                        <a
                            href={pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-[#20235A] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#D2B87C] hover:text-[#20235A]"
                        >
                            View Full Circular
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const page = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleCircularClick = (item: CircularItem): void => {
        if (item.type === "modal") {
            setIsModalOpen(true);
        }
    };

    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">
                {/* =====================================================
                    HERO
                ===================================================== */}
                <section className="relative bg-[#20235A]">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-[#D2B87C]/10" />

                        <div className="absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full border border-[#D2B87C]/10" />

                        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#D2B87C]/5 blur-3xl" />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-24 sm:px-8 lg:px-12 lg:pb-20 lg:pt-28">
                        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
                            {/* Hero Content */}
                            <div>
                                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                    <span className="h-px w-12 bg-[#D2B87C]" />
                                    Notices & Updates
                                </div>

                                <h1 className="mt-7 max-w-4xl font-serif text-5xl leading-[1] tracking-tight text-white sm:text-6xl lg:text-8xl">
                                    Circular
                                    <span className="block text-[#D2B87C]">
                                        & Notices.
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                                    Stay updated with important academic
                                    circulars, institutional notices and
                                    official communications from NCERC.
                                </p>
                            </div>

                            {/* Hero Side Panel */}
                            <div className="lg:pl-10">
                                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-9">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D2B87C] text-[#20235A]">
                                        <BellRing className="h-7 w-7" />
                                    </div>

                                    <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                                        Official Communications
                                    </p>

                                    <p className="mt-3 font-serif text-3xl leading-tight text-white">
                                        Important updates for our academic
                                        community.
                                    </p>

                                    <div className="mt-7 border-t border-white/10 pt-6">
                                        <p className="text-sm leading-7 text-white/60">
                                            Access the latest circulars,
                                            academic updates and institutional
                                            announcements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CIRCULARS
                ===================================================== */}
                <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                            Latest Updates
                        </p>

                        <h2 className="mt-4 font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">
                            Important circulars and announcements.
                        </h2>

                        <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B6257]">
                            Browse the latest official communications and
                            academic notices issued for students, faculty and
                            other members of the institution.
                        </p>
                    </div>

                    {/* Circular Cards */}
                    <div className="mt-14 grid gap-5 md:grid-cols-2">
                        {circulars.map((item) => {
                            const Icon = item.icon;

                            if (item.type === "pdf" && item.href) {
                                return (
                                    <a
                                        key={item.id}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative overflow-hidden rounded-[2rem] border border-[#E3DED4] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-xl sm:p-9"
                                    >
                                        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#D2B87C]/10 blur-3xl transition group-hover:bg-[#D2B87C]/20" />

                                        <div className="relative">
                                            <div className="flex items-start justify-between">
                                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                                                    <Icon className="h-6 w-6" />
                                                </div>

                                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E3DED4] text-[#6B6257] transition group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-white">
                                                    <ArrowUpRight className="h-4 w-4" />
                                                </div>
                                            </div>

                                            <p className="mt-9 text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                                Official Circular
                                            </p>

                                            <h3 className="mt-3 max-w-lg font-serif text-3xl leading-tight text-[#20235A]">
                                                {item.title}
                                            </h3>

                                            <p className="mt-5 max-w-xl text-sm leading-7 text-[#6B6257]">
                                                {item.description}
                                            </p>

                                            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#20235A]">
                                                Open PDF
                                                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            </div>
                                        </div>
                                    </a>
                                );
                            }

                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => handleCircularClick(item)}
                                    className="group relative overflow-hidden rounded-[2rem] border border-[#E3DED4] bg-[#20235A] p-7 text-left transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9"
                                >
                                    <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#D2B87C]/10 blur-3xl transition group-hover:bg-[#D2B87C]/20" />

                                    <div className="relative">
                                        <div className="flex items-start justify-between">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D2B87C] text-[#20235A]">
                                                <Icon className="h-6 w-6" />
                                            </div>

                                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition group-hover:border-[#D2B87C] group-hover:text-[#D2B87C]">
                                                <ArrowUpRight className="h-4 w-4" />
                                            </div>
                                        </div>

                                        <p className="mt-9 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                            Academic Circular
                                        </p>

                                        <h3 className="mt-3 max-w-lg font-serif text-3xl leading-tight text-white">
                                            {item.title}
                                        </h3>

                                        <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">
                                            {item.description}
                                        </p>

                                        <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-[#D2B87C]">
                                            View Circular
                                            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </section>

                {/* =====================================================
                    INFORMATION STRIP
                ===================================================== */}
                <section className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
                        <div className="grid gap-5 md:grid-cols-3">
                            <div className="rounded-3xl border border-[#E3DED4] bg-[#FAF7F2] p-7">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#8F7746]">
                                    <CalendarDays className="h-5 w-5" />
                                </div>

                                <h3 className="mt-6 font-serif text-2xl text-[#20235A]">
                                    Academic Updates
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#6B6257]">
                                    Stay informed about important academic
                                    schedules and institutional updates.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-[#E3DED4] bg-[#FAF7F2] p-7">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#8F7746]">
                                    <FileText className="h-5 w-5" />
                                </div>

                                <h3 className="mt-6 font-serif text-2xl text-[#20235A]">
                                    Official Documents
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#6B6257]">
                                    Access official circulars and documents
                                    issued by relevant authorities.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-[#E3DED4] bg-[#FAF7F2] p-7">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#8F7746]">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>

                                <h3 className="mt-6 font-serif text-2xl text-[#20235A]">
                                    Institutional Notices
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#6B6257]">
                                    Important notifications and communications
                                    for the NCERC community.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    FOOTER
                ===================================================== */}

            </main>
            {isModalOpen && (
                <AicteCircularModal
                    onClose={() => setIsModalOpen(false)}
                />
            )}

            <FooterSection />


        </>
    )
}

export default page