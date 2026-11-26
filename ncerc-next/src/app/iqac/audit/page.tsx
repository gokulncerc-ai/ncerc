"use client";

import React from "react";
import Link from "next/link";
import {
    ArrowUpRight,
    ChevronRight,
    FileCheck2,
    Leaf,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const auditDocuments = [
    {
        id: "01",
        title: "Report of Green, Energy and Environment Audit",
        description:
            "Official audit report covering green practices, energy management and environmental aspects of NCERC.",
        href: "https://ncerc.ac.in/documents/audit/Report-Green-Energy-Environment-Audit.pdf",
        icon: Leaf,
    },
    {
        id: "02",
        title: "Certificate of Audit",
        description:
            "Official certificate associated with the Green, Energy and Environment Audit of NCERC.",
        href: "https://ncerc.ac.in/documents/audit/Certificate%20of%20Audit.pdf",
        icon: FileCheck2,
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
                                Audits
                            </span>

                        </div>


                        {/* Heading */}
                        <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">

                            <div>

                                <div className="mb-5 flex items-center gap-3">

                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#20235A]/50">
                                        Institutional Documents
                                    </span>

                                </div>

                                <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                                    Audits &
                                    <span className="text-[#D2B87C]">
                                        {" "}certifications.
                                    </span>
                                </h1>

                            </div>


                            <div className="lg:border-l lg:border-[#20235A]/10 lg:pl-8">

                                <p className="max-w-md text-sm leading-7 text-[#20235A]/55">
                                    Access official audit reports and
                                    certification documents related to the
                                    environmental and energy practices of
                                    NCERC.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    DOCUMENTS
                ===================================================== */}
                <section className="bg-white">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                        {/* Section heading */}
                        <div className="mb-10">

                            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                Official Documents
                            </span>

                            <h2 className="mt-3 font-serif text-2xl sm:text-3xl">
                                Audit Reports
                            </h2>

                        </div>


                        {/* Document Grid */}
                        <div className="grid gap-5 md:grid-cols-2">

                            {auditDocuments.map((document) => {

                                const Icon = document.icon;

                                return (
                                    <a
                                        key={document.id}
                                        href={document.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group"
                                    >

                                        <article className="relative overflow-hidden border border-[#20235A]/10 bg-[#faf7f2] p-7 transition-all duration-300 hover:border-[#D2B87C]/60 hover:bg-white sm:p-8">

                                            {/* Top row */}
                                            <div className="flex items-start justify-between">

                                                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#D2B87C]">
                                                    {document.id}
                                                </span>

                                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#20235A]/10 text-[#20235A]/50 transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">

                                                    <ArrowUpRight
                                                        size={15}
                                                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                    />

                                                </span>

                                            </div>


                                            {/* Icon */}
                                            <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#20235A]/10 bg-white text-[#20235A] transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C]">

                                                <Icon
                                                    size={19}
                                                    strokeWidth={1.5}
                                                />

                                            </div>


                                            {/* Content */}
                                            <h3 className="mt-6 max-w-lg font-serif text-2xl leading-snug text-[#20235A] transition-colors duration-300 group-hover:text-[#D2B87C]">
                                                {document.title}
                                            </h3>

                                            <p className="mt-4 max-w-lg text-sm leading-7 text-[#20235A]/50">
                                                {document.description}
                                            </p>


                                            {/* Bottom */}
                                            <div className="mt-8 flex items-center justify-between border-t border-[#20235A]/10 pt-5">

                                                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#20235A]/45">
                                                    View PDF
                                                </span>

                                                <span className="text-[10px] uppercase tracking-[0.15em] text-[#20235A]/30">
                                                    Official Document
                                                </span>

                                            </div>

                                        </article>

                                    </a>
                                );
                            })}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    BOTTOM INFORMATION
                ===================================================== */}
                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 lg:px-14 lg:py-16">

                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                            <div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    NCERC
                                </span>

                                <h2 className="mt-3 font-serif text-2xl text-white sm:text-3xl">
                                    Sustainability & responsibility.
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