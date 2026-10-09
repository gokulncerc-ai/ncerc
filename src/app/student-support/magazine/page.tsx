"use client";

import React from "react";
import Link from "next/link";
import {
    ArrowDownToLine,
    ArrowUpRight,
    BookOpen,
    FileText,
    Library,
} from "lucide-react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const magazine = {
    title: "NCERC MUSHROOMS 2023",
    year: "2023",
    type: "Institutional Magazine",
    pdf: "https://ncerc.ac.in/downloads/magazine/Mushrooms%202023.pdf",
};

const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#faf7f2] text-[#1E1917]">
                {/* =====================================================
                    HERO
                ====================================================== */}
                <section className="relative overflow-hidden bg-[#20235A] text-white">
                    <div className="absolute -left-40 top-20 h-96 w-96 rounded-full border border-white/[0.05]" />
                    <div className="absolute -left-16 top-40 h-64 w-64 rounded-full border border-[#D2B87C]/10" />
                    <div className="absolute -right-36 -top-32 h-[430px] w-[430px] rounded-full border border-[#D2B87C]/10" />

                    <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-20 sm:px-8 lg:px-12 lg:pb-16 lg:pt-24">
                        <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:items-end">
                            <div className="max-w-4xl">
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-9 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        NCERC Publications
                                    </span>
                                </div>

                                <h1 className="font-serif text-4xl leading-[0.95] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                                    NCERC
                                    <span className="block text-[#D2B87C]">
                                        Magazines
                                    </span>
                                </h1>

                                <p className="mt-6 max-w-2xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                                    A collection of institutional publications
                                    capturing the ideas, achievements,
                                    activities and experiences of the NCERC
                                    community.
                                </p>

                                <div className="mt-7 flex flex-wrap gap-3">
                                    <a
                                        href="#magazine"
                                        className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold text-[#20235A] transition-all duration-300 hover:bg-white"
                                    >
                                        View magazine
                                        <ArrowUpRight
                                            size={15}
                                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        />
                                    </a>

                                    <a
                                        href="#about"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-medium text-white transition-all duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                    >
                                        About publication
                                        <BookOpen size={15} />
                                    </a>
                                </div>
                            </div>

                            <div className="border-l border-white/15 pl-7">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D2B87C]/40">
                                    <Library
                                        size={18}
                                        strokeWidth={1.5}
                                        className="text-[#D2B87C]"
                                    />
                                </div>

                                <p className="mt-6 font-serif text-3xl leading-tight text-white">
                                    One publication.
                                    <span className="block text-[#D2B87C]">
                                        Many stories.
                                    </span>
                                </p>

                                <div className="mt-6 h-px w-9 bg-[#D2B87C]" />

                                <p className="mt-4 text-xs leading-5 text-white/45">
                                    Explore the NCERC institutional magazine
                                    and its collection of campus stories.
                                </p>
                            </div>
                        </div>

                        <div className="mt-14 grid grid-cols-2 border-t border-white/10 pt-5 sm:grid-cols-4">
                            <div className="border-r border-white/10 pr-4">
                                <p className="font-serif text-xl text-[#D2B87C]">
                                    01
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                    Publication
                                </p>
                            </div>

                            <div className="border-r border-white/10 px-4">
                                <p className="font-serif text-xl text-[#D2B87C]">
                                    2023
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                    Edition
                                </p>
                            </div>

                            <div className="border-r border-white/10 px-4">
                                <p className="font-serif text-xl text-[#D2B87C]">
                                    PDF
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                    Format
                                </p>
                            </div>

                            <div className="pl-4">
                                <p className="font-serif text-xl text-[#D2B87C]">
                                    NCERC
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                    Publication
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section id="about" className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                        <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                        Institutional publication
                                    </span>
                                </div>
                            </div>

                            <div>
                                <h2 className="max-w-3xl font-serif text-3xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-4xl lg:text-5xl">
                                    A publication that brings the
                                    <span className="text-[#8F7746]">
                                        {" "}NCERC community together.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-2xl text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                    The NCERC magazine provides a space to
                                    document and share the academic,
                                    extracurricular and community experiences
                                    that shape life at the institution.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    MAGAZINE SHOWCASE
                ====================================================== */}
                <section
                    id="magazine"
                    className="bg-[#faf7f2] px-6 py-16 sm:px-8 lg:px-12 lg:py-20"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-10 flex flex-col gap-4 border-b border-[#20235A]/10 pb-7 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Featured publication
                                </p>

                                <h2 className="mt-2 font-serif text-3xl tracking-[-0.025em] text-[#20235A] sm:text-4xl">
                                    {magazine.title}
                                </h2>
                            </div>

                            <p className="max-w-sm text-xs leading-5 text-[#1E1917]/45">
                                Read the complete publication through the
                                official NCERC PDF.
                            </p>
                        </div>

                        <div className="grid overflow-hidden rounded-[1.5rem] border border-[#20235A]/10 bg-white lg:grid-cols-[0.8fr_1.2fr]">
                            {/* MAGAZINE COVER / PDF VISUAL */}
                            <div className="relative flex min-h-[460px] items-center justify-center overflow-hidden bg-[#20235A] p-8 sm:p-12 lg:min-h-[560px]">
                                <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full border border-white/[0.06]" />
                                <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full border border-[#D2B87C]/10" />

                                <div className="relative w-full max-w-[290px]">
                                    <div className="absolute -bottom-4 -right-4 h-full w-full rounded-sm border border-[#D2B87C]/20 bg-[#20235A]" />

                                    <div className="relative aspect-[0.72] overflow-hidden rounded-sm border border-white/10 bg-[#f2efe8] shadow-[0_25px_60px_rgba(0,0,0,0.28)]">
                                        <div className="absolute inset-0 flex flex-col justify-between p-7">
                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                                        NCERC
                                                    </span>

                                                    <span className="font-serif text-sm text-[#8F7746]">
                                                        2023
                                                    </span>
                                                </div>

                                                <div className="mt-8 h-px w-10 bg-[#D2B87C]" />
                                            </div>

                                            <div>
                                                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#8F7746]">
                                                    Institutional Magazine
                                                </p>

                                                <h3 className="mt-3 font-serif text-3xl leading-[0.95] tracking-[-0.03em] text-[#20235A]">
                                                    NCERC
                                                    <span className="block text-[#8F7746]">
                                                        Mushrooms
                                                    </span>
                                                </h3>

                                                <p className="mt-4 max-w-[190px] text-[9px] leading-4 text-[#1E1917]/50">
                                                    Stories, activities,
                                                    achievements and experiences
                                                    from the NCERC community.
                                                </p>
                                            </div>

                                            <div className="border-t border-[#20235A]/10 pt-4">
                                                <p className="text-[8px] uppercase tracking-[0.15em] text-[#1E1917]/40">
                                                    Nehru College of Engineering
                                                    and Research Centre
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* DETAILS */}
                            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <FileText
                                            size={18}
                                            strokeWidth={1.5}
                                            className="text-[#8F7746]"
                                        />

                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                            Magazine edition
                                        </span>
                                    </div>

                                    <h3 className="mt-6 max-w-xl font-serif text-3xl leading-[1.05] tracking-[-0.025em] text-[#20235A] sm:text-4xl">
                                        {magazine.title}
                                    </h3>

                                    <p className="mt-5 max-w-xl text-sm leading-6 text-[#1E1917]/55">
                                        Explore the 2023 NCERC institutional
                                        magazine featuring stories and
                                        experiences from across the campus
                                        community.
                                    </p>

                                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                        <div className="rounded-xl bg-[#faf7f2] p-5">
                                            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#8F7746]">
                                                Publication year
                                            </p>

                                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                                {magazine.year}
                                            </p>
                                        </div>

                                        <div className="rounded-xl bg-[#faf7f2] p-5">
                                            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#8F7746]">
                                                Format
                                            </p>

                                            <p className="mt-2 font-serif text-xl text-[#20235A]">
                                                PDF
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 border-t border-[#20235A]/10 pt-7">
                                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1E1917]/35">
                                        Official publication
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        <Link
                                            href={magazine.pdf}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex items-center gap-2 rounded-full bg-[#20235A] px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#8F7746]"
                                        >
                                            Read magazine
                                            <ArrowUpRight
                                                size={14}
                                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                            />
                                        </Link>

                                        <a
                                            href={magazine.pdf}
                                            download
                                            className="inline-flex items-center gap-2 rounded-full border border-[#20235A]/15 px-5 py-3 text-xs font-semibold text-[#20235A] transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#faf7f2]"
                                        >
                                            <ArrowDownToLine size={14} />
                                            Download PDF
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    PUBLICATION VALUE
                ====================================================== */}
                <section className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Inside the publication
                                </p>

                                <h2 className="mt-2 font-serif text-3xl leading-[1.05] tracking-[-0.025em] text-[#20235A] sm:text-4xl">
                                    Stories worth
                                    <span className="block text-[#8F7746]">
                                        remembering.
                                    </span>
                                </h2>
                            </div>

                            <div className="grid border-t border-[#20235A]/10 sm:grid-cols-3">
                                <div className="border-b border-[#20235A]/10 py-6 sm:border-b-0 sm:border-r sm:pr-7">
                                    <span className="font-serif text-lg text-[#D2B87C]">
                                        01
                                    </span>

                                    <h3 className="mt-7 font-serif text-xl text-[#20235A]">
                                        Campus Life
                                    </h3>

                                    <p className="mt-3 text-xs leading-5 text-[#1E1917]/50">
                                        Moments and experiences from the
                                        institution's vibrant community.
                                    </p>
                                </div>

                                <div className="border-b border-[#20235A]/10 py-6 sm:border-b-0 sm:border-r sm:px-7">
                                    <span className="font-serif text-lg text-[#D2B87C]">
                                        02
                                    </span>

                                    <h3 className="mt-7 font-serif text-xl text-[#20235A]">
                                        Achievements
                                    </h3>

                                    <p className="mt-3 text-xs leading-5 text-[#1E1917]/50">
                                        Celebrating academic, technical and
                                        extracurricular accomplishments.
                                    </p>
                                </div>

                                <div className="py-6 sm:pl-7">
                                    <span className="font-serif text-lg text-[#D2B87C]">
                                        03
                                    </span>

                                    <h3 className="mt-7 font-serif text-xl text-[#20235A]">
                                        Community
                                    </h3>

                                    <p className="mt-3 text-xs leading-5 text-[#1E1917]/50">
                                        Sharing the people and activities that
                                        make NCERC a community.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CLOSING CTA
                ====================================================== */}
                <section className="bg-[#20235A] px-6 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
                    <div className="mx-auto max-w-7xl">
                        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
                            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full border border-[#D2B87C]/15" />

                            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                                <div className="max-w-2xl">
                                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        NCERC Publications
                                    </p>

                                    <h2 className="font-serif text-3xl leading-[1.05] tracking-[-0.025em] sm:text-4xl lg:text-5xl">
                                        Open the magazine.
                                        <span className="block text-[#D2B87C]">
                                            Discover the stories.
                                        </span>
                                    </h2>

                                    <p className="mt-5 max-w-xl text-sm leading-6 text-white/50">
                                        Access the complete NCERC Mushrooms 2023
                                        publication through the official PDF.
                                    </p>
                                </div>

                                <Link
                                    href={magazine.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold text-[#20235A] transition-all duration-300 hover:bg-white"
                                >
                                    Open PDF
                                    <ArrowUpRight
                                        size={14}
                                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
};

export default page;