import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    BookMarked,
    BookOpen,
    GraduationCap,
    LibraryBig,
    Monitor,
    Search,
    ScrollText,
    Sparkles,
    Database,
    ExternalLink,
} from "lucide-react";
import SiteHeader from '@/components/header/SiteHeader';
import FooterSection from '@/components/home/FooterSection';
import React from 'react';

// =====================================================
// LIBRARY NAVIGATION
// =====================================================

const libraryLinks = [
    {
        title: "About",
        href: "/academics/library",
        icon: LibraryBig,
    },
    {
        title: "UG Library",
        href: "/academics/library/ug-library",
        icon: GraduationCap,
    },
    {
        title: "PG Library",
        href: "/academics/library/pg-library",
        icon: BookMarked,
    },
    {
        title: "Digital Library",
        href: "/academics/library/digital-library",
        icon: Monitor,
    },
    {
        title: "Rules & Regulations",
        href: "/academics/library/rules-and-regulations",
        icon: ScrollText,
    },
    {
        title: "Features",
        href: "/academics/library/features",
        icon: Sparkles,
    },
    {
        title: "Photo Gallery",
        href: "/academics/library/gallery",
        icon: BookOpen,
    },
    {
        title: "OPAC",
        href: "/academics/library/opac",
        icon: Search,
        active: true,
    },
];

// =====================================================
// OPAC PORTALS
// =====================================================

const opacPortals = [
    {
        number: "01",
        title: "Central Library",
        subtitle: "Online Public Access Catalogue",
        description:
            "Search and explore the resources available through the NCERC Central Library catalogue.",
        href: "http://centralibrary.ncerc.ac.in:9292/",
        icon: LibraryBig,
        tag: "Central Library",
    },
    {
        number: "02",
        title: "PG Library",
        subtitle: "Postgraduate Library Catalogue",
        description:
            "Access the online catalogue for postgraduate library resources and academic collections.",
        href: "http://pglibrary.ncerc.ac.in:82/",
        icon: GraduationCap,
        tag: "PG Library",
    },
];

const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">

                {/* =================================================
                    HERO
                ================================================= */}

                <section className="relative overflow-hidden bg-[#20235A] text-white">

                    {/* Decorative circles */}

                    <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#D2B87C]/20" />

                    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#D2B87C]/10" />

                    <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#D2B87C]/5 blur-3xl" />

                    <div className="relative mx-auto grid min-h-[610px] max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.1fr_.9fr] lg:px-8">

                        {/* Hero Content */}

                        <div>

                            <div className="mb-7 flex items-center gap-3">

                                <span className="h-px w-12 bg-[#D2B87C]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                    NCERC Library
                                </span>

                            </div>

                            <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                                Online Public
                                <span className="block text-[#D2B87C]">
                                    Access Catalogue.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
                                Discover and search library resources through
                                the online catalogues of the NCERC Central
                                Library and PG Library.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <a
                                    href="#opac-portals"
                                    className="inline-flex items-center gap-3 rounded-full bg-[#D2B87C] px-6 py-3.5 text-sm font-semibold text-[#20235A] transition hover:bg-[#C4A96F]"
                                >
                                    Explore OPAC
                                    <ArrowRight size={17} />
                                </a>

                                <Link
                                    href="/academics/library"
                                    className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#D2B87C]/50 hover:text-[#D2B87C]"
                                >
                                    Library Overview
                                    <ArrowUpRight size={17} />
                                </Link>

                            </div>

                        </div>

                        {/* Hero Visual */}

                        <div className="relative">

                            <div className="absolute -inset-6 rounded-[2.5rem] border border-[#D2B87C]/10" />

                            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">

                                <div className="flex items-center justify-between">

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D2B87C] text-[#20235A]">
                                        <Search size={25} />
                                    </div>

                                    <span className="rounded-full border border-[#D2B87C]/20 bg-[#D2B87C]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        OPAC
                                    </span>

                                </div>

                                <div className="mt-12">

                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                                        Search • Discover • Access
                                    </p>

                                    <h2 className="mt-4 font-serif text-4xl leading-tight">
                                        Find the resources
                                        <span className="block text-[#D2B87C]">
                                            you need.
                                        </span>
                                    </h2>

                                    <p className="mt-5 text-sm leading-7 text-white/60">
                                        Connect directly to the appropriate
                                        online catalogue and explore the
                                        library collection.
                                    </p>

                                </div>

                                <div className="mt-10 grid grid-cols-2 gap-3">

                                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                                        <LibraryBig
                                            size={19}
                                            className="text-[#D2B87C]"
                                        />

                                        <p className="mt-3 text-xs font-semibold text-white">
                                            Central Library
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                                        <GraduationCap
                                            size={19}
                                            className="text-[#D2B87C]"
                                        />

                                        <p className="mt-3 text-xs font-semibold text-white">
                                            PG Library
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =================================================
                    LIBRARY NAVIGATION
                ================================================= */}

                <section className="sticky top-0 z-30 border-b border-[#E3DED4]/80 bg-[#FAF7F2]/95 backdrop-blur-xl">

                    <div className="mx-auto max-w-7xl overflow-x-auto px-6 py-4 lg:px-8">

                        <div className="flex min-w-max items-center gap-2">

                            {libraryLinks.map((item) => {

                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className={`group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition ${item.active
                                            ? "bg-[#20235A] text-white shadow-lg"
                                            : "text-[#6B6257] hover:bg-white hover:text-[#20235A]"
                                            }`}
                                    >
                                        <Icon
                                            size={15}
                                            className={
                                                item.active
                                                    ? "text-[#D2B87C]"
                                                    : "text-[#6B6257] group-hover:text-[#8F7746]"
                                            }
                                        />

                                        {item.title}
                                    </Link>
                                );

                            })}

                        </div>

                    </div>

                </section>

                {/* =================================================
                    INTRO
                ================================================= */}

                <section className="px-6 py-24 lg:px-8 lg:py-32">

                    <div className="mx-auto max-w-7xl">

                        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">

                            <div>

                                <div className="mb-5 flex items-center gap-3">

                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                        Online Catalogue
                                    </span>

                                </div>

                                <h2 className="font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                    One place to
                                    <span className="block text-[#6B6257]">
                                        discover resources.
                                    </span>
                                </h2>

                            </div>

                            <div className="max-w-2xl lg:ml-auto">

                                <p className="text-lg leading-8 text-[#6B6257]">
                                    The Online Public Access Catalogue provides
                                    a convenient way to access the library
                                    collections digitally. Select the library
                                    catalogue relevant to your academic needs
                                    and begin your search.
                                </p>

                                <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-[#1E1917]">
                                    <Database
                                        size={18}
                                        className="text-[#D2B87C]"
                                    />
                                    Direct access to NCERC library catalogues
                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =================================================
                    OPAC PORTALS
                ================================================= */}

                <section
                    id="opac-portals"
                    className="px-6 pb-24 lg:px-8 lg:pb-32"
                >

                    <div className="mx-auto max-w-7xl">

                        <div className="mb-12">

                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                Choose Your Catalogue
                            </p>

                            <h2 className="mt-3 font-serif text-4xl text-[#20235A] sm:text-5xl">
                                Access OPAC
                            </h2>

                            <p className="mt-5 max-w-2xl text-base leading-7 text-[#6B6257]">
                                Select the catalogue you would like to access.
                                Each portal opens the respective library
                                catalogue in a new browser tab.
                            </p>

                        </div>

                        {/* Portal Cards */}

                        <div className="grid gap-6 lg:grid-cols-2">

                            {opacPortals.map((portal) => {

                                const Icon = portal.icon;

                                return (
                                    <a
                                        key={portal.number}
                                        href={portal.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative overflow-hidden rounded-[2rem] bg-[#20235A] p-8 text-white transition duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-10"
                                    >

                                        {/* Decorative Circle */}

                                        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#D2B87C]/10 transition duration-700 group-hover:scale-110" />

                                        <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#D2B87C]/5 blur-3xl" />

                                        <div className="relative">

                                            {/* Top Row */}

                                            <div className="flex items-start justify-between">

                                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D2B87C] text-[#20235A] transition duration-500 group-hover:scale-105">
                                                    <Icon size={27} />
                                                </div>

                                                <div className="flex items-center gap-3">

                                                    <span className="text-xs font-semibold tracking-[0.2em] text-white/50">
                                                        {portal.number}
                                                    </span>

                                                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition group-hover:border-[#D2B87C]/30 group-hover:text-[#D2B87C]">
                                                        <ExternalLink size={17} />
                                                    </div>

                                                </div>

                                            </div>

                                            {/* Card Content */}

                                            <div className="mt-12">

                                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                                    {portal.tag}
                                                </p>

                                                <h3 className="mt-3 font-serif text-4xl sm:text-5xl">
                                                    {portal.title}
                                                </h3>

                                                <p className="mt-4 text-sm font-medium text-white/70">
                                                    {portal.subtitle}
                                                </p>

                                                <p className="mt-5 max-w-lg text-sm leading-7 text-white/60">
                                                    {portal.description}
                                                </p>

                                            </div>

                                            {/* CTA */}

                                            <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-6 text-sm font-semibold text-white">

                                                Open Catalogue

                                                <ArrowUpRight
                                                    size={17}
                                                    className="text-[#D2B87C] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                                />

                                            </div>

                                        </div>

                                    </a>
                                );

                            })}

                        </div>

                    </div>

                </section>

                {/* =================================================
                    HOW IT WORKS
                ================================================= */}

                <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-8 lg:py-28">

                    <div className="mx-auto max-w-7xl">

                        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:items-center">

                            {/* Heading */}

                            <div>

                                <div className="mb-5 flex items-center gap-3">

                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                        Simple Access
                                    </span>

                                </div>

                                <h2 className="font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                    Search your
                                    <span className="block text-[#6B6257]">
                                        library resources.
                                    </span>
                                </h2>

                            </div>

                            {/* Steps */}

                            <div className="grid gap-4 sm:grid-cols-3">

                                <div className="rounded-3xl border border-[#E3DED4] bg-[#FAF7F2] p-6">

                                    <span className="text-sm font-semibold text-[#8F7746]">
                                        01
                                    </span>

                                    <h3 className="mt-8 font-serif text-2xl text-[#20235A]">
                                        Choose
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#6B6257]">
                                        Select Central Library or PG Library
                                        based on the collection you need.
                                    </p>

                                </div>

                                <div className="rounded-3xl border border-[#E3DED4] bg-[#FAF7F2] p-6">

                                    <span className="text-sm font-semibold text-[#8F7746]">
                                        02
                                    </span>

                                    <h3 className="mt-8 font-serif text-2xl text-[#20235A]">
                                        Search
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#6B6257]">
                                        Use the online catalogue to search the
                                        available library resources.
                                    </p>

                                </div>

                                <div className="rounded-3xl border border-[#E3DED4] bg-[#FAF7F2] p-6">

                                    <span className="text-sm font-semibold text-[#8F7746]">
                                        03
                                    </span>

                                    <h3 className="mt-8 font-serif text-2xl text-[#20235A]">
                                        Explore
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#6B6257]">
                                        Explore the catalogue and identify the
                                        resources relevant to your studies.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =================================================
                    DIGITAL LIBRARY CTA
                ================================================= */}

                <section className="relative overflow-hidden bg-[#20235A] px-6 py-24 text-white lg:px-8 lg:py-28">

                    <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-[#D2B87C]/10" />

                    <div className="relative mx-auto max-w-7xl">

                        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">

                            <div className="max-w-3xl">

                                <div className="mb-5 flex items-center gap-3">

                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                        Beyond OPAC
                                    </span>

                                </div>

                                <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                                    Explore the
                                    <span className="text-[#D2B87C]">
                                        {" "}Digital Library.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                                    Discover digital resources, e-books,
                                    e-journals and online academic services
                                    available through the NCERC Library.
                                </p>

                            </div>

                            <Link
                                href="/pages/library/digital-library"
                                className="inline-flex w-fit items-center gap-3 rounded-full bg-[#D2B87C] px-7 py-4 text-sm font-semibold text-[#20235A] transition hover:bg-[#C4A96F]"
                            >
                                Digital Library
                                <ArrowRight size={17} />
                            </Link>

                        </div>

                    </div>

                </section>

                {/* =================================================
                    QUICK ACCESS
                ================================================= */}

                <section className="px-6 py-24 lg:px-8 lg:py-32">

                    <div className="mx-auto max-w-7xl">

                        <div className="mb-12">

                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                Continue Exploring
                            </p>

                            <h2 className="mt-3 font-serif text-4xl text-[#20235A] sm:text-5xl">
                                Library Resources
                            </h2>

                        </div>

                        <div className="grid gap-5 md:grid-cols-2">

                            <Link
                                href="/pages/library/features"
                                className="group rounded-[1.75rem] border border-[#E3DED4] bg-white p-8 transition duration-500 hover:-translate-y-1 hover:shadow-xl"
                            >

                                <div className="flex items-start justify-between">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                                        <Sparkles size={21} />
                                    </div>

                                    <ArrowUpRight
                                        size={21}
                                        className="text-[#6B6257] transition group-hover:text-[#20235A]"
                                    />

                                </div>

                                <h3 className="mt-8 font-serif text-3xl text-[#20235A]">
                                    Library Features
                                </h3>

                                <p className="mt-3 max-w-md text-sm leading-6 text-[#6B6257]">
                                    Explore the services, facilities and
                                    resources available through the library.
                                </p>

                            </Link>

                            <Link
                                href="/pages/library/photo-gallery"
                                className="group rounded-[1.75rem] bg-[#20235A] p-8 text-white transition duration-500 hover:-translate-y-1"
                            >

                                <div className="flex items-start justify-between">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D2B87C] text-[#20235A]">
                                        <BookOpen size={21} />
                                    </div>

                                    <ArrowUpRight
                                        size={21}
                                        className="text-white/50 transition group-hover:text-[#D2B87C]"
                                    />

                                </div>

                                <h3 className="mt-8 font-serif text-3xl">
                                    Photo Gallery
                                </h3>

                                <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
                                    Take a visual tour through the spaces,
                                    collections and facilities of the library.
                                </p>

                            </Link>

                        </div>

                    </div>

                </section>

            </main>

            <FooterSection />
        </>
    )
}

export default page