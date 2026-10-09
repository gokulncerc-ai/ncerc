import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    BookMarked,
    BookOpen,
    CheckCircle2,
    GraduationCap,
    LibraryBig,
    Monitor,
    Network,
    ScrollText,
    Search,
    Server,
    Sparkles,
    Wifi,
    Laptop,
    Globe2,
    FileText,
    Copy,
    Barcode,
} from "lucide-react";
import React from "react";
import SiteHeader from '@/components/header/SiteHeader'
import FooterSection from '@/components/home/FooterSection'

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
        active: true,
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
    },
];

const eResources = [
    {
        name: "DELNET",
        description:
            "Access to a broad network of libraries and academic resources.",
        icon: Network,
    },
    {
        name: "K HUB",
        description:
            "Digital academic resources supporting learning and research.",
        icon: Globe2,
    },
    {
        name: "J-GATE",
        description:
            "Access to scholarly journals and research literature.",
        icon: BookOpen,
    },
    {
        name: "National Digital Library",
        description:
            "Membership providing access to a wide range of digital learning resources.",
        icon: GraduationCap,
    },
    {
        name: "e-ShodhSindhu",
        description:
            "Access to scholarly electronic resources through the consortium.",
        icon: Server,
    },
    {
        name: "LIPI Manuscript Collection",
        description:
            "Digital access to manuscript-based academic resources.",
        icon: FileText,
    },
];

const digitalFacilities = [
    {
        title: "E-Journals & E-Learning",
        description:
            "Availability of e-journals and digital learning systems for academic use.",
        icon: BookOpen,
    },
    {
        title: "Service Facility",
        description:
            "Dedicated digital library services supporting students and academic users.",
        icon: Sparkles,
    },
    {
        title: "Reprographic Facility",
        description:
            "Reprographic services available for academic and learning requirements.",
        icon: Copy,
    },
    {
        title: "Barcode Issue & Returns",
        description:
            "Computerised barcode-based issue and return service for library resources.",
        icon: Barcode,
    },
    {
        title: "OPAC Web Search",
        description:
            "Online Public Access Catalogue for searching available library resources.",
        icon: Search,
    },
    {
        title: "Internet Service",
        description:
            "Dedicated internet access for academic learning and digital research.",
        icon: Wifi,
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

                    {/* Decorative Elements */}
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
                                Digital
                                <span className="block text-[#D2B87C]">
                                    Library.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                                A connected academic environment providing
                                digital resources, e-journals, e-books,
                                internet access and technology-enabled
                                library services for learning and research.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <Link
                                    href="#resources"
                                    className="group inline-flex items-center gap-3 rounded-full bg-[#D2B87C] px-6 py-3 text-sm font-semibold text-[#20235A] transition hover:bg-[#C4A96F]"
                                >
                                    Explore E-Resources

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


                        {/* Hero Side Card */}
                        <div className="flex items-end lg:justify-end">

                            <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur">

                                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#D2B87C]/10 blur-3xl" />

                                <div className="relative">

                                    <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D2B87C] text-[#20235A]">
                                        <Monitor size={26} />
                                    </div>

                                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                        Digital Access
                                    </p>

                                    <h2 className="mt-3 font-serif text-3xl leading-tight">
                                        Knowledge without boundaries.
                                    </h2>

                                    <p className="mt-5 text-sm leading-7 text-white/60">
                                        Technology-enabled resources designed
                                        to support continuous learning,
                                        research and academic exploration.
                                    </p>

                                    <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">

                                        <div>
                                            <p className="font-serif text-3xl text-white">
                                                15,706
                                            </p>

                                            <p className="mt-1 text-xs text-white/50">
                                                E-Books
                                            </p>
                                        </div>

                                        <div>
                                            <p className="font-serif text-3xl text-white">
                                                20
                                            </p>

                                            <p className="mt-1 text-xs text-white/50">
                                                Systems
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
                                                    : "text-[#8F7746] transition-colors group-hover:text-[#D2B87C]"
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
                <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

                        <div>

                            <div className="flex items-center gap-3">

                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8F7746]">
                                    Digital Library
                                </span>

                            </div>

                            <h2 className="mt-5 max-w-md font-serif text-4xl leading-tight tracking-tight text-[#20235A] sm:text-5xl">
                                Connected
                                <span className="block text-[#6B6257]">
                                    Learning
                                </span>
                            </h2>

                        </div>

                        <div className="max-w-3xl">

                            <p className="text-xl leading-9 text-[#1E1917] sm:text-2xl sm:leading-10">
                                Digital resources that extend the library
                                beyond physical collections.
                            </p>

                            <p className="mt-6 text-base leading-8 text-[#6B6257]">
                                The Digital Library provides students with
                                access to electronic resources, e-journals,
                                e-books, online learning systems and internet
                                facilities. These services enable students and
                                researchers to discover and access academic
                                information through a technology-enabled
                                learning environment.
                            </p>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    INTERNET ACCESS
                ===================================================== */}
                <section className="bg-[#20235A] py-20 text-white sm:py-24">

                    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">

                            {/* Left */}
                            <div>

                                <div className="flex items-center gap-3">

                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D2B87C]">
                                        Internet
                                    </span>

                                </div>

                                <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                                    Always
                                    <span className="block text-white/50">
                                        Connected.
                                    </span>
                                </h2>

                            </div>


                            {/* Right */}
                            <div>

                                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D2B87C] text-[#20235A]">
                                    <Wifi size={30} />
                                </div>

                                <p className="text-xl leading-9 text-white/70 sm:text-2xl sm:leading-10">
                                    Free internet access is available to our
                                    students 24 hours a day, 7 days a week.
                                </p>

                                <p className="mt-6 max-w-2xl text-sm leading-8 text-white/60">
                                    The Digital Library provides dedicated
                                    internet connectivity through a
                                    <span className="font-semibold text-white">
                                        {" "}
                                        250 Mbps BSNL Leased Line
                                    </span>{" "}
                                    and a
                                    <span className="font-semibold text-white">
                                        {" "}
                                        65 Mbps JIO Leased Line
                                    </span>
                                    , supporting uninterrupted academic access
                                    and online research.
                                </p>


                                <div className="mt-10 grid gap-4 sm:grid-cols-2">

                                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">

                                        <p className="font-serif text-4xl text-[#D2B87C]">
                                            250 Mbps
                                        </p>

                                        <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/50">
                                            BSNL Leased Line
                                        </p>

                                    </div>


                                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">

                                        <p className="font-serif text-4xl text-[#D2B87C]">
                                            65 Mbps
                                        </p>

                                        <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/50">
                                            JIO Leased Line
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    E RESOURCES
                ===================================================== */}
                <section
                    id="resources"
                    className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
                >

                    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

                        <div>

                            <div className="flex items-center gap-3">

                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8F7746]">
                                    E Resources
                                </span>

                            </div>

                            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                Digital Knowledge
                            </h2>

                        </div>

                        <p className="max-w-md text-sm leading-7 text-[#6B6257]">
                            A collection of digital platforms and academic
                            resources supporting learning, research and
                            knowledge discovery.
                        </p>

                    </div>


                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {eResources.map((resource, index) => {

                            const Icon = resource.icon;

                            return (
                                <div
                                    key={resource.name}
                                    className="group relative overflow-hidden rounded-[1.75rem] border border-[#E3DED4] bg-white p-7 transition duration-500 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-xl hover:shadow-[#20235A]/5"
                                >

                                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#D2B87C]/10 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

                                    <div className="relative">

                                        <div className="flex items-start justify-between">

                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#20235A] text-[#D2B87C]">
                                                <Icon size={21} />
                                            </div>

                                            <span className="font-serif text-sm text-[#6B6257]">
                                                0{index + 1}
                                            </span>

                                        </div>

                                        <h3 className="mt-7 font-serif text-2xl text-[#20235A]">
                                            {resource.name}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-[#6B6257]">
                                            {resource.description}
                                        </p>

                                        <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#6B6257] transition group-hover:text-[#8F7746]">

                                            Explore Resource

                                            <ArrowUpRight size={14} />

                                        </div>

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </section>


                {/* =====================================================
                    DIGITAL LIBRARY FACILITIES
                ===================================================== */}
                <section className="border-y border-[#E3DED4] bg-white py-20 sm:py-24">

                    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

                            {/* Heading */}
                            <div>

                                <div className="flex items-center gap-3">

                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8F7746]">
                                        Facilities
                                    </span>

                                </div>

                                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                    Facilities in
                                    <span className="block text-[#6B6257]">
                                        Digital Library
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-sm text-sm leading-7 text-[#6B6257]">
                                    Technology-enabled services designed to
                                    make academic resources easier to access,
                                    search and use.
                                </p>

                            </div>


                            {/* Facilities */}
                            <div className="grid gap-px overflow-hidden rounded-3xl border border-[#E3DED4] bg-[#E3DED4] sm:grid-cols-2">

                                {digitalFacilities.map((facility) => {

                                    const Icon = facility.icon;

                                    return (
                                        <div
                                            key={facility.title}
                                            className="group bg-white p-7 transition hover:bg-[#FAF7F2]"
                                        >

                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#20235A] text-[#D2B87C] transition group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                                <Icon size={19} />
                                            </div>

                                            <h3 className="mt-5 text-sm font-bold text-[#20235A]">
                                                {facility.title}
                                            </h3>

                                            <p className="mt-2 text-xs leading-6 text-[#6B6257]">
                                                {facility.description}
                                            </p>

                                        </div>
                                    );
                                })}

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    DIGITAL LIBRARY HIGHLIGHTS
                ===================================================== */}
                <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="overflow-hidden rounded-[2rem] bg-[#20235A] text-white">

                        <div className="relative grid gap-10 px-8 py-12 sm:px-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:px-16">

                            <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#D2B87C]/5 blur-3xl" />

                            <div className="relative">

                                <div className="flex items-center gap-3">

                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D2B87C]">
                                        Digital Collection
                                    </span>

                                </div>

                                <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
                                    A library designed for the digital age.
                                </h2>

                                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60">
                                    Access electronic learning resources,
                                    digital books and online academic services
                                    through the Digital Library.
                                </p>

                            </div>


                            <div className="relative flex gap-10 lg:gap-14">

                                <div>

                                    <p className="font-serif text-5xl text-[#D2B87C]">
                                        15,706
                                    </p>

                                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">
                                        E-Books
                                    </p>

                                </div>

                                <div className="h-20 w-px bg-white/10" />

                                <div>

                                    <p className="font-serif text-5xl text-[#D2B87C]">
                                        20
                                    </p>

                                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/50">
                                        Systems
                                    </p>

                                </div>

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
                                    access additional academic services.
                                </p>

                            </div>


                            <div className="flex flex-wrap gap-3">

                                <Link
                                    href="/pages/library/pg-library"
                                    className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition hover:border-[#D2B87C]/30 hover:bg-white/[0.08]"
                                >
                                    PG Library

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