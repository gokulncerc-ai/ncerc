"use client";

import React, { useState } from "react";
import {
    ArrowUpRight,
    BookOpen,
    FileText,
    Images,
    Library,
    Newspaper,
    X,
    ChevronLeft,
    ChevronRight,
    Sparkles,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const projectImages = [
    {
        src: "https://ncerc.ac.in/images/mpd/upcoming_pic_1.jpg",
        title: "Upcoming Project 01",
        category: "Upcoming Projects",
    },
    {
        src: "https://ncerc.ac.in/images/mpd/upcoming_pic_2.jpg",
        title: "Upcoming Project 02",
        category: "Upcoming Projects",
    },
    {
        src: "https://ncerc.ac.in/images/mpd/completed_pic_1.jpg",
        title: "Completed Project 01",
        category: "Completed Projects",
    },
];

const publicationCategories = [
    {
        title: "Books / e-Books",
        icon: BookOpen,
        count: "06",
        items: [
            "Business Management in Nutshell",
            "Computer Applications for Diversified Domains",
            "Unique Impressions (in pipeline)",
            "Chempaneer - The Red Rose (in pipeline)",
            "Communication Skills",
            "Computer Applications for Nursing and Healthcare",
        ],
    },
    {
        title: "Conference Proceedings",
        icon: FileText,
        count: "03",
        items: [
            "NCITS2021 proceedings",
            "ICETSSI2022 proceedings (in pipeline)",
            "NeCTAR2021 proceedings",
        ],
    },
    {
        title: "Magazines",
        icon: Newspaper,
        count: "02",
        items: [
            "Mushrooms 2021",
            "Mushrooms 2022 (in pipeline)",
        ],
    },
    {
        title: "Newsletters",
        icon: Library,
        count: "02",
        items: [
            "Nehru News",
            "NCERC Newsletter",
        ],
    },
    {
        title: "Journal",
        icon: Sparkles,
        count: "01",
        items: [
            "NIJCAR (in pipeline)",
        ],
    },
];

const Page = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openImage = (index: number) => {
        setSelectedImage(index);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        if (selectedImage === null) return;

        setSelectedImage(
            (selectedImage + 1) % projectImages.length
        );
    };

    const previousImage = () => {
        if (selectedImage === null) return;

        setSelectedImage(
            (selectedImage - 1 + projectImages.length) %
            projectImages.length
        );
    };

    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">

                {/* =====================================================
                    HERO
                ===================================================== */}

                <section className="relative overflow-hidden bg-[#20235A]">

                    {/* Decorative Background */}

                    <div className="pointer-events-none absolute inset-0">

                        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#D2B87C]/10" />

                        <div className="absolute -right-16 -top-16 h-[350px] w-[350px] rounded-full border border-[#D2B87C]/10" />

                        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#D2B87C]/10 blur-3xl" />

                        <div className="absolute right-[30%] top-[30%] h-32 w-32 rounded-full bg-[#D2B87C]/5 blur-3xl" />

                    </div>


                    <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-24 sm:px-8 lg:px-12 lg:pb-20 lg:pt-28">

                        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

                            {/* Hero Content */}

                            <div>

                                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">

                                    <span className="h-px w-12 bg-[#D2B87C]" />

                                    NCERC

                                </div>


                                <h1 className="mt-7 max-w-3xl font-serif text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">

                                    Media & Publications

                                    <span className="block text-[#D2B87C]">
                                        Division.
                                    </span>

                                </h1>


                                <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">

                                    A dedicated in-house division focused on
                                    developing quality publications, creative
                                    content and institutional knowledge resources.

                                </p>


                                <div className="mt-8 flex flex-wrap items-center gap-3">

                                    <a
                                        href="#about-mpd"
                                        className="group inline-flex items-center gap-3 rounded-full bg-[#D2B87C] px-6 py-3.5 text-sm font-semibold text-[#20235A] transition hover:bg-white"
                                    >

                                        Explore MPD

                                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

                                    </a>


                                    <a
                                        href="#publications"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                    >

                                        Publications

                                    </a>

                                </div>

                            </div>


                            {/* Hero Image */}

                            <div className="lg:pl-10">

                                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-7">

                                    <div className="overflow-hidden rounded-[1.5rem] bg-white">

                                        <img
                                            src="https://ncerc.ac.in/images/MPD%20NCERC%20LOG.jpg"
                                            alt="NCERC Media and Publication Division"
                                            className="h-auto w-full object-cover"
                                        />

                                    </div>


                                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

                                        <div>

                                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                                                Institutional Division
                                            </p>

                                            <p className="mt-2 font-serif text-xl text-white">
                                                Media & Publication Division
                                            </p>

                                        </div>


                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D2B87C] text-[#20235A]">

                                            <BookOpen className="h-5 w-5" />

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    INTRODUCTION / STATS
                ===================================================== */}

                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">

                        <div className="grid divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">

                            <StatItem
                                number="07"
                                label="ISBN Publications"
                                description="Publications with ISBN"
                            />

                            <StatItem
                                number="05"
                                label="Publication Categories"
                                description="Books, journals, magazines and more"
                            />

                            <StatItem
                                number="01"
                                label="In-house Division"
                                description="Managed within NCERC"
                            />

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    ABOUT MPD
                ===================================================== */}

                <section
                    id="about-mpd"
                    className="bg-[#FAF7F2]"
                >

                    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">

                        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

                            {/* Left */}

                            <div>

                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8F7746]">

                                    About MPD

                                </p>


                                <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">

                                    Publishing knowledge with purpose.

                                </h2>


                                <div className="mt-8 flex items-center gap-4">

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">

                                        <Library className="h-6 w-6" />

                                    </div>


                                    <p className="max-w-[240px] text-sm leading-6 text-[#6B6257]">

                                        An in-house platform for academic,
                                        creative and institutional publications.

                                    </p>

                                </div>

                            </div>


                            {/* Right */}

                            <div className="max-w-4xl">

                                <p className="text-xl leading-9 text-[#1E1917]">

                                    The Media & Publication Division was devised
                                    with a strong aim to develop quality content
                                    in form of Textbooks, Magazines, Journals,
                                    Conference/Seminar Proceedings, Newsletters etc.

                                </p>


                                <p className="mt-7 text-base leading-8 text-[#6B6257]">

                                    The Division functions as an in-house unit
                                    managed by a team of faculty members and
                                    Administrative staff, with a strong closeness
                                    for creative writing.

                                </p>


                                <p className="mt-7 text-base leading-8 text-[#6B6257]">

                                    The Division is registered with Raja RamMohun
                                    Roy National Agency, and has availed ISBN for
                                    7 publications. The Online Journals are being
                                    designed as per the standards of ISSN National
                                    Centre NSL.

                                </p>


                                <div className="mt-9 rounded-[1.5rem] border border-[#E3DED4] bg-white p-6 sm:p-7">

                                    <div className="flex items-start gap-4">

                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D2B87C]/10 text-[#8F7746]">

                                            <FileText className="h-5 w-5" />

                                        </div>


                                        <div>

                                            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#6B6257]">

                                                Publication Standards

                                            </p>


                                            <p className="mt-2 text-sm leading-7 text-[#6B6257]">

                                                Details of projects and publications
                                                developed through the division are
                                                presented below.

                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    PUBLICATION CATALOGUE
                ===================================================== */}

                <section
                    id="publications"
                    className="bg-white"
                >

                    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">

                        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">

                            {/* Left */}

                            <div>

                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8F7746]">

                                    Publication Catalogue

                                </p>


                                <h2 className="mt-4 font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">

                                    Our publications.

                                </h2>


                                <p className="mt-6 max-w-sm text-base leading-8 text-[#6B6257]">

                                    The Media & Publication Division works across
                                    multiple formats to support academic,
                                    institutional and creative communication.

                                </p>


                                <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">

                                    <BookOpen className="h-6 w-6" />

                                </div>

                            </div>


                            {/* Right */}

                            <div className="space-y-4">

                                {publicationCategories.map((category) => {

                                    const Icon = category.icon;

                                    return (

                                        <div
                                            key={category.title}
                                            className="rounded-[1.5rem] border border-[#E3DED4] bg-[#FAF7F2] p-6 transition hover:border-[#D2B87C]"
                                        >

                                            <div className="flex items-start gap-5">

                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#8F7746]">

                                                    <Icon className="h-5 w-5" />

                                                </div>


                                                <div className="min-w-0 flex-1">

                                                    <div className="flex flex-wrap items-center justify-between gap-3">

                                                        <h3 className="font-serif text-2xl text-[#20235A]">

                                                            {category.title}

                                                        </h3>


                                                        <span className="rounded-full bg-[#20235A] px-3 py-1 text-xs font-semibold text-[#D2B87C]">

                                                            {category.count}

                                                        </span>

                                                    </div>


                                                    <div className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">

                                                        {category.items.map((item) => (

                                                            <div
                                                                key={item}
                                                                className="flex items-start gap-2 py-1"
                                                            >

                                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D2B87C]" />

                                                                <p className="text-sm leading-6 text-[#6B6257]">

                                                                    {item}

                                                                </p>

                                                            </div>

                                                        ))}

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    );

                                })}

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    UPCOMING PROJECTS
                ===================================================== */}

                <section className="bg-[#FAF7F2]">

                    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">

                        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

                            <div>

                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8F7746]">

                                    Publication Pipeline

                                </p>


                                <h2 className="mt-4 font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">

                                    Upcoming projects.

                                </h2>

                            </div>


                            <p className="max-w-md text-sm leading-7 text-[#6B6257]">

                                New publication initiatives and projects currently
                                being developed by the Media & Publication Division.

                            </p>

                        </div>


                        <div className="grid gap-6 md:grid-cols-2">

                            {[0, 1].map((index) => (

                                <button
                                    key={projectImages[index].src}
                                    type="button"
                                    onClick={() => openImage(index)}
                                    className="group relative overflow-hidden rounded-[2rem] border border-[#E3DED4] bg-white text-left"
                                >

                                    <div className="relative aspect-[16/10] overflow-hidden">

                                        <img
                                            src={projectImages[index].src}
                                            alt={projectImages[index].title}
                                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                        />


                                        <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/70 via-transparent to-transparent opacity-80" />


                                        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">

                                            <div>

                                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">

                                                    Upcoming Project

                                                </p>


                                                <h3 className="mt-2 font-serif text-2xl text-white">

                                                    Project {String(index + 1).padStart(2, "0")}

                                                </h3>

                                            </div>


                                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#20235A] transition group-hover:bg-[#D2B87C]">

                                                <ArrowUpRight className="h-5 w-5" />

                                            </div>

                                        </div>

                                    </div>

                                </button>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    COMPLETED PROJECTS
                ===================================================== */}

                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">

                        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">

                            {/* Left */}

                            <div>

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D2B87C] text-[#20235A]">

                                    <Images className="h-6 w-6" />

                                </div>


                                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">

                                    Completed Projects

                                </p>


                                <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">

                                    Published & completed.

                                </h2>


                                <p className="mt-6 max-w-md text-base leading-8 text-white/60">

                                    A selection of completed initiatives developed
                                    through the Media & Publication Division.

                                </p>

                            </div>


                            {/* Right */}

                            <button
                                type="button"
                                onClick={() => openImage(2)}
                                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] text-left"
                            >

                                <div className="relative aspect-[16/9] overflow-hidden">

                                    <img
                                        src={projectImages[2].src}
                                        alt={projectImages[2].title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />


                                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/80 via-transparent to-transparent" />


                                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 sm:p-8">

                                        <div>

                                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">

                                                Completed Project

                                            </p>


                                            <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">

                                                Completed Project 01

                                            </h3>

                                        </div>


                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#20235A] transition group-hover:bg-[#D2B87C]">

                                            <ArrowUpRight className="h-5 w-5" />

                                        </div>

                                    </div>

                                </div>

                            </button>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    INFORMATION / CLOSING
                ===================================================== */}

                <section className="bg-[#FAF7F2]">

                    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">

                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">

                            {/* Left */}

                            <div>

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">

                                    <Sparkles className="h-6 w-6" />

                                </div>


                                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-[#8F7746]">

                                    Creative & Academic Communication

                                </p>


                                <h2 className="mt-4 font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">

                                    Creating a platform for ideas.

                                </h2>

                            </div>


                            {/* Right */}

                            <div className="max-w-4xl">

                                <div className="rounded-[2rem] border border-[#E3DED4] bg-white p-8 sm:p-10 lg:p-12">

                                    <p className="text-xl leading-9 text-[#1E1917]">

                                        The Media & Publication Division brings
                                        together academic knowledge, creative
                                        writing and institutional communication
                                        through a growing range of publications.

                                    </p>


                                    <p className="mt-7 text-base leading-8 text-[#6B6257]">

                                        Through books, e-books, journals,
                                        conference proceedings, magazines and
                                        newsletters, the division provides a
                                        platform for ideas and knowledge created
                                        within the NCERC community.

                                    </p>


                                    <div className="my-8 h-px bg-[#E3DED4]" />


                                    <div className="flex items-start gap-4">

                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D2B87C]/10 text-[#8F7746]">

                                            <BookOpen className="h-5 w-5" />

                                        </div>


                                        <p className="text-base leading-8 text-[#6B6257]">

                                            The division continues to support
                                            quality content development and
                                            structured publication initiatives
                                            across the institution.

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    DARK CLOSING SECTION
                ===================================================== */}

                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

                        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

                            <div>

                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">

                                    NCERC Media & Publication Division

                                </p>


                                <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">

                                    Knowledge, creativity and publication under one division.

                                </h2>

                            </div>


                            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10">

                                <BookOpen className="h-7 w-7 text-[#D2B87C]" />


                                <p className="mt-6 text-base leading-8 text-white/60">

                                    The Media & Publication Division continues
                                    to create opportunities for academic,
                                    creative and institutional content through
                                    diverse publication formats.

                                </p>


                                <a
                                    href="#publications"
                                    className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#D2B87C]"
                                >

                                    Explore Publications

                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

                                </a>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    FOOTER
                ===================================================== */}

                <FooterSection />

            </main>


            {/* =====================================================
                IMAGE LIGHTBOX
            ===================================================== */}

            {selectedImage !== null && (

                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#20235A]/95 p-5 backdrop-blur-sm"
                    onClick={closeImage}
                >

                    <div
                        className="relative flex w-full max-w-6xl items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* Close */}

                        <button
                            type="button"
                            onClick={closeImage}
                            aria-label="Close image"
                            className="absolute right-0 top-0 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#D2B87C] hover:text-[#20235A]"
                        >

                            <X className="h-5 w-5" />

                        </button>


                        {/* Previous */}

                        <button
                            type="button"
                            onClick={previousImage}
                            aria-label="Previous image"
                            className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#D2B87C] hover:text-[#20235A] sm:-left-5"
                        >

                            <ChevronLeft className="h-5 w-5" />

                        </button>


                        {/* Image */}

                        <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-2xl">

                            <img
                                src={projectImages[selectedImage].src}
                                alt={projectImages[selectedImage].title}
                                className="max-h-[80vh] max-w-full rounded-xl object-contain"
                            />

                        </div>


                        {/* Next */}

                        <button
                            type="button"
                            onClick={nextImage}
                            aria-label="Next image"
                            className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#D2B87C] hover:text-[#20235A] sm:-right-5"
                        >

                            <ChevronRight className="h-5 w-5" />

                        </button>

                    </div>

                </div>

            )}

        </>
    );
};


/* =====================================================
   STAT ITEM
===================================================== */

function StatItem({
    number,
    label,
    description,
}: {
    number: string;
    label: string;
    description: string;
}) {
    return (
        <div className="px-6 py-5 first:pl-0 last:pr-0 md:px-8">

            <div className="flex items-center gap-5">

                <span className="font-serif text-3xl text-white">
                    {number}
                </span>


                <div>

                    <p className="text-sm font-semibold text-white">
                        {label}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/60">
                        {description}
                    </p>

                </div>

            </div>

        </div>
    );
}


export default Page;