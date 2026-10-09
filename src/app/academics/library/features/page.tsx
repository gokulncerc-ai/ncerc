import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Barcode,
    BookMarked,
    BookOpen,
    GraduationCap,
    HelpCircle,
    LibraryBig,
    Monitor,
    Newspaper,
    Search,
    ScrollText,
    ShieldCheck,
    Sparkles,
    UserCheck,
    Users,
    Video,
    FileText,
    RefreshCw,
} from "lucide-react";
import SiteHeader from '@/components/header/SiteHeader'
import FooterSection from '@/components/home/FooterSection'
import React from 'react'

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
        active: true,
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
    },
];

const helpDeskServices = [
    {
        title: "Library Assistance",
        description:
            "All members of the library team are available for any assistance you may need in using the library resources, facilities and services.",
        icon: HelpCircle,
    },
    {
        title: "Video Surveillance",
        description:
            "For security purpose, the library uses video surveillance systems.",
        icon: Video,
    },
    {
        title: "Suggestions",
        description:
            "You are also welcome to offer your suggestions about the library resources, facilities and services.",
        icon: Users,
    },
];

const bookSearchFeatures = [
    {
        title: "Online Public Access Catalogue",
        description:
            "The Central Library maintains a server with a computerized Online Public Access Catalogue (OPAC) for searching the availability of books, National / International Journals & Periodicals and Non Book Materials (CD-ROMs).",
        icon: Search,
    },
    {
        title: "Renewal Facility",
        description:
            "Renewal facilities are also available for eligible library resources.",
        icon: RefreshCw,
    },
    {
        title: "Barcode System",
        description:
            "Barcode system is followed in all the library transactions.",
        icon: Barcode,
    },
];

const questionPaperServices = [
    {
        title: "Previous Year Question Papers",
        description:
            "Previous Year APJKTU Question-Papers are provided and maintained as soft copy.",
        icon: FileText,
    },
    {
        title: "Advanced Search Panel",
        description:
            "An Advanced Search Panel is provided to help students find the required question papers and academic resources.",
        icon: Search,
    },
    {
        title: "Students Log",
        description:
            "Students Log is maintained as part of the question paper service.",
        icon: UserCheck,
    },
];

const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">

                {/* =====================================================
                    HERO
                ===================================================== */}
                <section className="relative overflow-hidden bg-[#20235A] text-white">

                    <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full border border-[#D2B87C]/10" />

                    <div className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full border border-[#D2B87C]/10" />

                    <div className="pointer-events-none absolute right-1/4 top-20 h-40 w-40 rounded-full bg-[#D2B87C]/5 blur-3xl" />

                    <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-32">

                        {/* Hero Content */}
                        <div className="flex flex-col justify-center">

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D2B87C]">
                                    NCERC Library
                                </span>

                            </div>

                            <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                                Library
                                <span className="block text-[#D2B87C]">
                                    Services.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                                Discover the services and facilities designed
                                to make library resources easier to find,
                                access and use for academic learning and
                                research.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <Link
                                    href="#services"
                                    className="group inline-flex items-center gap-3 rounded-full bg-[#D2B87C] px-6 py-3 text-sm font-semibold text-[#20235A] transition hover:bg-[#C4A96F]"
                                >
                                    Explore Services

                                    <ArrowRight
                                        size={17}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </Link>

                                <Link
                                    href="/pages/library/opac"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-[#D2B87C]/50 hover:text-[#D2B87C]"
                                >
                                    Search OPAC

                                    <ArrowUpRight size={16} />
                                </Link>

                            </div>

                        </div>


                        {/* Hero Card */}
                        <div className="flex items-end lg:justify-end">

                            <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur">

                                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#D2B87C]/10 blur-3xl" />

                                <div className="relative">

                                    <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D2B87C] text-[#20235A]">
                                        <Sparkles size={27} />
                                    </div>

                                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                        Library Services
                                    </p>

                                    <h2 className="mt-3 font-serif text-3xl leading-tight">
                                        Support beyond the shelves.
                                    </h2>

                                    <p className="mt-5 text-sm leading-7 text-white/60">
                                        From help-desk assistance and OPAC
                                        searching to periodicals and question
                                        papers, library services support the
                                        complete academic journey.
                                    </p>

                                    <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">

                                        <div>
                                            <p className="font-serif text-3xl text-white">
                                                221
                                            </p>

                                            <p className="mt-1 text-xs text-white/50">
                                                Periodicals
                                            </p>
                                        </div>

                                        <div>
                                            <p className="font-serif text-3xl text-white">
                                                OPAC
                                            </p>

                                            <p className="mt-1 text-xs text-white/50">
                                                Online Search
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    LIBRARY NAVIGATION
                ===================================================== */}
                <section className="sticky top-0 z-30 border-b border-[#E3DED4]/80 bg-[#FAF7F2]/95 backdrop-blur-xl">

                    <div className="mx-auto max-w-7xl overflow-x-auto px-6 sm:px-8 lg:px-12">

                        <div className="flex min-w-max items-center gap-2 py-4">

                            {libraryLinks.map((item) => {

                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className={`group flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition-all ${item.active
                                            ? "bg-[#20235A] text-white shadow-lg shadow-[#20235A]/10"
                                            : "text-[#6B6257] hover:bg-white hover:text-[#20235A]"
                                            }`}
                                    >

                                        <Icon
                                            size={15}
                                            className={
                                                item.active
                                                    ? "text-[#D2B87C]"
                                                    : "text-[#6B6257] transition-colors group-hover:text-[#D2B87C]"
                                            }
                                        />

                                        {item.title}

                                    </Link>
                                );
                            })}

                        </div>

                    </div>
                </section>


                {/* =====================================================
                    INTRODUCTION
                ===================================================== */}
                <section
                    id="services"
                    className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
                >

                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

                        <div>

                            <div className="flex items-center gap-3">

                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8F7746]">
                                    Library Features
                                </span>

                            </div>

                            <h2 className="mt-5 max-w-md font-serif text-4xl leading-tight tracking-tight text-[#20235A] sm:text-5xl">
                                Services built
                                <span className="block text-[#6B6257]">
                                    around you.
                                </span>
                            </h2>

                        </div>

                        <div className="max-w-3xl">

                            <p className="text-xl leading-9 text-[#1E1917] sm:text-2xl sm:leading-10">
                                Making information easier to discover,
                                access and use.
                            </p>

                            <p className="mt-6 text-base leading-8 text-[#6B6257]">
                                The Central Library provides a range of
                                services that support students, faculty and
                                researchers in making effective use of library
                                collections, digital resources and academic
                                information.
                            </p>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    HELP DESK
                ===================================================== */}
                <section className="bg-[#20235A] py-20 text-white sm:py-24">

                    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

                            {/* Heading */}
                            <div>

                                <div className="flex items-center gap-3">

                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D2B87C]">
                                        Help-Desk
                                    </span>

                                </div>

                                <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                                    Here to
                                    <span className="block text-white/50">
                                        Help.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
                                    Assistance is available to help members
                                    make effective use of library resources,
                                    facilities and services.
                                </p>

                            </div>


                            {/* Services */}
                            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10">

                                {helpDeskServices.map((service, index) => {

                                    const Icon = service.icon;

                                    return (
                                        <div
                                            key={service.title}
                                            className="group bg-[#20235A] p-7 transition hover:bg-white/[0.04] sm:p-8"
                                        >

                                            <div className="flex items-start gap-5">

                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#D2B87C] transition group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                                    <Icon size={21} />
                                                </div>

                                                <div className="flex-1">

                                                    <div className="flex items-center justify-between gap-4">

                                                        <h3 className="text-sm font-semibold text-white">
                                                            {service.title}
                                                        </h3>

                                                        <span className="font-serif text-sm text-white/50">
                                                            0{index + 1}
                                                        </span>

                                                    </div>

                                                    <p className="mt-3 text-sm leading-7 text-white/50">
                                                        {service.description}
                                                    </p>

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
                    BOOK SEARCHING FACILITY
                ===================================================== */}
                <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

                        <div>

                            <div className="flex items-center gap-3">

                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8F7746]">
                                    Book Searching Facility
                                </span>

                            </div>

                            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                Find What
                                <span className="block text-[#6B6257]">
                                    You Need.
                                </span>
                            </h2>

                        </div>

                        <p className="max-w-md text-sm leading-7 text-[#6B6257]">
                            Computerized library services make it easier to
                            search, renew and manage library resources.
                        </p>

                    </div>


                    <div className="mt-14 grid gap-5 lg:grid-cols-3">

                        {bookSearchFeatures.map((feature, index) => {

                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    className="group relative overflow-hidden rounded-[2rem] border border-[#E3DED4] bg-white p-8 transition duration-500 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-2xl hover:shadow-[#20235A]/10"
                                >

                                    <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#D2B87C]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                                    <div className="relative">

                                        <div className="flex items-start justify-between">

                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#20235A] text-[#D2B87C] transition group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                                <Icon size={21} />
                                            </div>

                                            <span className="font-serif text-sm text-[#6B6257]">
                                                0{index + 1}
                                            </span>

                                        </div>

                                        <h3 className="mt-7 font-serif text-2xl text-[#20235A]">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-[#6B6257]">
                                            {feature.description}
                                        </p>

                                        <div className="mt-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#6B6257] transition group-hover:text-[#8F7746]">

                                            Library Service

                                            <ArrowUpRight size={14} />

                                        </div>

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </section>


                {/* =====================================================
                    OPAC FEATURE BANNER
                ===================================================== */}
                <section className="border-y border-[#E3DED4] bg-white py-20 sm:py-24">

                    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

                        <div className="overflow-hidden rounded-[2rem] bg-[#20235A] text-white">

                            <div className="relative grid gap-10 px-8 py-12 sm:px-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:px-16">

                                <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#D2B87C]/5 blur-3xl" />

                                <div className="relative">

                                    <div className="flex items-center gap-3">

                                        <span className="h-px w-8 bg-[#D2B87C]" />

                                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D2B87C]">
                                            OPAC
                                        </span>

                                    </div>

                                    <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
                                        Search the library collection with ease.
                                    </h2>

                                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60">
                                        Use the computerized Online Public
                                        Access Catalogue to search the
                                        availability of books, National /
                                        International Journals & Periodicals
                                        and Non Book Materials such as
                                        CD-ROMs.
                                    </p>

                                </div>


                                <Link
                                    href="/pages/library/opac"
                                    className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-[#D2B87C] px-7 py-4 text-sm font-semibold text-[#20235A] transition hover:bg-[#C4A96F]"
                                >
                                    Open OPAC

                                    <ArrowUpRight
                                        size={17}
                                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    PERIODICALS SECTION
                ===================================================== */}
                <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

                        {/* Heading */}
                        <div>

                            <div className="flex items-center gap-3">

                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8F7746]">
                                    Periodicals Section
                                </span>

                            </div>

                            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                Current
                                <span className="block text-[#6B6257]">
                                    Knowledge.
                                </span>
                            </h2>

                            <div className="mt-8 flex items-center gap-4">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                                    <Newspaper size={25} />
                                </div>

                                <div>

                                    <p className="font-serif text-3xl text-[#20235A]">
                                        221
                                    </p>

                                    <p className="text-xs uppercase tracking-[0.15em] text-[#6B6257]">
                                        International & National Periodicals
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* Content */}
                        <div>

                            <p className="text-xl leading-9 text-[#1E1917] sm:text-2xl sm:leading-10">
                                A dedicated section for journals,
                                newsletters and current academic
                                information.
                            </p>

                            <p className="mt-6 text-base leading-8 text-[#6B6257]">
                                The library has a separate periodicals section
                                and subscribes to 221 International and
                                National periodicals. The library regularly
                                receives journals and newsletters from
                                organizations and societies, providing staff
                                and students with the latest information in
                                technical education, research and development
                                activities.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">

                                <div className="rounded-full border border-[#E3DED4] bg-white px-5 py-3 text-xs font-semibold text-[#1E1917]">
                                    International Periodicals
                                </div>

                                <div className="rounded-full border border-[#E3DED4] bg-white px-5 py-3 text-xs font-semibold text-[#1E1917]">
                                    National Periodicals
                                </div>

                                <div className="rounded-full border border-[#E3DED4] bg-white px-5 py-3 text-xs font-semibold text-[#1E1917]">
                                    Journals
                                </div>

                                <div className="rounded-full border border-[#E3DED4] bg-white px-5 py-3 text-xs font-semibold text-[#1E1917]">
                                    Newsletters
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    QUESTION PAPERS
                ===================================================== */}
                <section className="bg-[#20235A] py-20 text-white sm:py-24">

                    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

                            {/* Heading */}
                            <div>

                                <div className="flex items-center gap-3">

                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D2B87C]">
                                        Question Papers
                                    </span>

                                </div>

                                <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                                    Prepare.
                                    <span className="block text-white/50">
                                        Practice. Perform.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
                                    Academic question paper resources are
                                    maintained to support student preparation
                                    and reference.
                                </p>

                            </div>


                            {/* Services */}
                            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10">

                                {questionPaperServices.map((service, index) => {

                                    const Icon = service.icon;

                                    return (
                                        <div
                                            key={service.title}
                                            className="group bg-[#20235A] p-7 transition hover:bg-white/[0.04] sm:p-8"
                                        >

                                            <div className="flex items-start gap-5">

                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#D2B87C] transition group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                                    <Icon size={21} />
                                                </div>

                                                <div className="flex-1">

                                                    <div className="flex items-center justify-between gap-4">

                                                        <h3 className="text-sm font-semibold text-white">
                                                            {service.title}
                                                        </h3>

                                                        <span className="font-serif text-sm text-white/50">
                                                            0{index + 1}
                                                        </span>

                                                    </div>

                                                    <p className="mt-3 text-sm leading-7 text-white/50">
                                                        {service.description}
                                                    </p>

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
                    SERVICE SUMMARY
                ===================================================== */}
                <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="relative overflow-hidden rounded-[2rem] border border-[#E3DED4] bg-white p-8 sm:p-12 lg:p-16">

                        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#D2B87C]/10 blur-3xl" />

                        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

                            <div>

                                <div className="flex items-center gap-3">

                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8F7746]">
                                        Library Support
                                    </span>

                                </div>

                                <h2 className="mt-5 max-w-3xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                    Everything you need to make the most of
                                    the library.
                                </h2>

                                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6B6257]">
                                    From personal assistance and computerized
                                    searching to periodicals and previous year
                                    question papers, the library provides
                                    services designed around academic needs.
                                </p>

                            </div>


                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                                <LibraryBig size={29} />
                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    QUICK ACCESS
                ===================================================== */}
                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

                        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

                            <div>

                                <div className="flex items-center gap-3">

                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D2B87C]">
                                        Quick Access
                                    </span>

                                </div>

                                <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl">
                                    Explore More
                                </h2>

                                <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">
                                    Continue exploring the NCERC Library and
                                    discover additional resources and services.
                                </p>

                            </div>


                            <div className="flex flex-wrap gap-3">

                                <Link
                                    href="/pages/library/digital-library"
                                    className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition hover:border-[#D2B87C]/30 hover:bg-white/[0.08]"
                                >
                                    Digital Library

                                    <ArrowUpRight
                                        size={16}
                                        className="text-[#D2B87C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </Link>

                                <Link
                                    href="/pages/library/opac"
                                    className="group inline-flex items-center gap-3 rounded-full bg-[#D2B87C] px-5 py-3 text-sm font-semibold text-[#20235A] transition hover:bg-[#C4A96F]"
                                >
                                    OPAC

                                    <Search size={16} />
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>

            </main>

            <FooterSection />
        </>
    )
}

export default page