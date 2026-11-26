import React from 'react'
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Award,
    BarChart3,
    BookOpen,
    CalendarDays,
    CheckCircle2,
    Download,
    FileCheck2,
    FileText,
    GraduationCap,
    Landmark,
    Mail,
    Newspaper,
    Search,
    ShieldCheck,
    Sparkles,
    Target,
    Trophy,
    University,
} from "lucide-react";
import SiteHeader from '@/components/header/SiteHeader';
import FooterSection from '@/components/home/FooterSection';

const downloadItems = [
    {
        id: "01",
        title: "Annual Report",
        description:
            "Annual institutional report presenting key activities, achievements and developments of NCERC.",
        category: "Institutional Reports",
        icon: FileText,
        href: "https://ncerc.ac.in/downloads/annual-report/Annual%20report%202024.pdf",
        featured: true,
    },
    {
        id: "02",
        title: "NCERC Strategic Plan",
        description:
            "Strategic planning document outlining the institutional vision, objectives and development direction.",
        category: "Strategic Documents",
        icon: Target,
        href: "https://ncerc.ac.in/downloads/NCERC%20Strategic%20Plan%202030.pdf",
        featured: true,
    },
    {
        id: "03",
        title: "Ministers Award for Excellence",
        description:
            "Official documentation related to the Minister's Award for Excellence.",
        category: "Awards & Recognition",
        icon: Trophy,
        href: "https://ncerc.ac.in/downloads/awards/Ministers-Award-for-Excellence.pdf",
    },
    {
        id: "04",
        title: "Academics Calendar",
        description:
            "Academic calendar providing important dates and schedules for the academic year.",
        category: "Academic Information",
        icon: CalendarDays,
        href: "https://ncerc.ac.in/academic-calendar.php",
    },
    {
        id: "05",
        title: "Autonomous Status",
        description:
            "Official documentation related to the autonomous status of NCERC.",
        category: "Approvals & Status",
        icon: University,
        href: "https://ncerc.ac.in/downloads/approvals/autonomous/NCERC-AUTONOMOUS%20STATUS.pdf",
    },
    {
        id: "06",
        title: "Balance Sheet",
        description:
            "Institutional financial information and balance sheet documentation.",
        category: "Financial Documents",
        icon: BarChart3,
        href: "https://ncerc.ac.in/balance-sheets.php",
    },
    {
        id: "07",
        title: "UGC 2F Status",
        description:
            "Official documentation relating to NCERC's UGC 2(f) status.",
        category: "Approvals & Status",
        icon: ShieldCheck,
        href: "https://ncerc.ac.in/downloads/approvals/ugc/NCERC-2%28F%29%20-Status-2022-12-dec.pdf",
    },
    {
        id: "08",
        title: "NGI Newsletter",
        description:
            "Newsletter featuring institutional updates, activities and developments across NGI.",
        category: "Newsletters",
        icon: Newspaper,
        href: "https://ncerc.ac.in/downloads/approvals/NEHRU%20NEWS%202025.pdf",
    },
    {
        id: "09",
        title: "All India Council for Technical Educational Approval (AICTE) 2024 - 27",
        description:
            "Official AICTE approval documentation for the academic period 2024–27.",
        category: "Approvals",
        icon: CheckCircle2,
        href: "https://ncerc.ac.in/content/download/approvals/All%20India%20Council%20for%20Technical%20Educational%20Approval%20%28AICTE%29%202024-27.pdf",
    },
    {
        id: "10",
        title: "Provisional Affiliation Order (KTU) 2024 - 25",
        description:
            "Provisional affiliation order documentation issued for the academic year 2024–25.",
        category: "Approvals",
        icon: GraduationCap,
        href: "https://www.ncerc.ac.in/content/download/approvals/ktu/Provisionalorder_KTU-NCERC%202024.pdf",
    },
    {
        id: "11",
        title: "FEEDBACK",
        description:
            "Access the official AICTE feedback portal for providing feedback and institutional responses.",
        category: "External Portal",
        icon: Mail,
        href: "https://www.aicte-india.org/feedback/",
    },
    {
        id: "12",
        title: "NBA ACCREDITED UG-PROGRAMMES",
        description:
            "Official documentation related to NBA accreditation status of undergraduate programmes.",
        category: "Accreditation",
        icon: Award,
        href: "https://ncerc.ac.in/downloads/certification/NBA%20ACCREDITATION%20STATUS.pdf",
    },
    {
        id: "13",
        title: "NGI BROCHURE",
        description:
            "The NGI brochure presenting information about the institution, programmes and academic ecosystem.",
        category: "Brochures",
        icon: BookOpen,
        href: "https://ncerc.ac.in/downloads/Brochure/NGI-brochure-2026.pdf",
    },
    {
        id: "14",
        title: "NCERC NEWSLETTER",
        description:
            "Institutional newsletter featuring recent activities, achievements and campus updates.",
        category: "Newsletters",
        icon: Newspaper,
        href: "https://ncerc.ac.in/downloads/Brochure/NCERC-newsletter-2026.pdf",
    },
    {
        id: "15",
        title: "NSM NEWSLETTER",
        description:
            "Newsletter containing updates and activities associated with NSM.",
        category: "Newsletters",
        icon: Newspaper,
        href: "https://ncerc.ac.in/downloads/newsletter/newsletter.pdf",
    },
    {
        id: "16",
        title: "NAAC CERTIFICATE",
        description:
            "Official NAAC certificate documenting the institution's accreditation.",
        category: "Accreditation",
        icon: FileCheck2,
        href: "https://ncerc.ac.in/downloads/naac_certificate/CERTIFICATE_NAAC%20'A'.pdf",
    },
    {
        id: "17",
        title: "National Education Policy (NEP 2022) Cell",
        description:
            "Documentation related to the National Education Policy Cell and its institutional initiatives.",
        category: "Academic Initiatives",
        icon: Landmark,
        href: "https://ncerc.ac.in/downloads/NEP%202020%20CELL.pdf",
    },
    {
        id: "18",
        title: "Nehru Insight",
        description:
            "Nehru Insight publication featuring institutional stories, updates and perspectives.",
        category: "Publications",
        icon: Sparkles,
        href: "https://ncerc.ac.in/downloads/2026%20Nehru%20Insight%20May%20Issue.pdf",
    },
];

// =====================================================
// CATEGORY DATA
// =====================================================

const categories = [
    {
        title: "Institutional",
        count: "02",
        icon: University,
    },
    {
        title: "Approvals",
        count: "04",
        icon: ShieldCheck,
    },
    {
        title: "Accreditation",
        count: "02",
        icon: Award,
    },
    {
        title: "Publications",
        count: "04",
        icon: Newspaper,
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

                    {/* Decorative elements */}

                    <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-[#D2B87C]/10" />

                    <div className="absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full border border-[#D2B87C]/10" />

                    <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#D2B87C]/5 blur-3xl" />

                    <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D2B87C]/5 blur-3xl" />

                    <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">

                        <div className="grid gap-14 lg:grid-cols-[1fr_0.75fr] lg:items-end">

                            {/* Hero Content */}

                            <div>

                                <div className="flex items-center gap-3">

                                    <span className="h-px w-12 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                        NCERC Resources
                                    </span>

                                </div>

                                <h1 className="mt-7 max-w-4xl font-serif text-5xl leading-[1] tracking-tight sm:text-6xl lg:text-8xl">
                                    Downloads
                                    <span className="block text-[#D2B87C]">
                                        & Documents.
                                    </span>
                                </h1>

                                <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                                    Access important institutional reports,
                                    approvals, accreditations, publications,
                                    academic resources and official documents
                                    from NCERC.
                                </p>

                                <div className="mt-10 flex flex-wrap gap-3">

                                    <Link
                                        href="#documents"
                                        className="inline-flex items-center gap-3 rounded-full bg-[#D2B87C] px-6 py-3.5 text-sm font-semibold text-[#20235A] transition hover:bg-[#C4A96F]"
                                    >
                                        Explore Documents
                                        <ArrowRight size={17} />
                                    </Link>

                                    <Link
                                        href="#categories"
                                        className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#D2B87C]/40 hover:text-[#D2B87C]"
                                    >
                                        Browse Categories
                                        <ArrowRight size={17} />
                                    </Link>

                                </div>

                            </div>


                            {/* Hero Panel */}

                            <div>

                                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-9">

                                    <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#D2B87C]/5 blur-3xl" />

                                    <div className="relative">

                                        <div className="flex items-center justify-between">

                                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D2B87C] text-[#20235A]">
                                                <Download size={25} />
                                            </div>

                                            <span className="rounded-full border border-[#D2B87C]/20 bg-[#D2B87C]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                                Document Centre
                                            </span>

                                        </div>

                                        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                                            Official Resources
                                        </p>

                                        <h2 className="mt-3 font-serif text-4xl leading-tight text-white">
                                            Everything you need,
                                            <span className="block text-[#D2B87C]">
                                                in one place.
                                            </span>
                                        </h2>

                                        <p className="mt-5 text-sm leading-7 text-white/60">
                                            Browse and access official NCERC
                                            documents through a single,
                                            organised resource centre.
                                        </p>

                                        <div className="mt-8 grid grid-cols-2 gap-3">

                                            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                                                <p className="font-serif text-3xl text-white">
                                                    18
                                                </p>

                                                <p className="mt-1 text-xs text-white/50">
                                                    Documents
                                                </p>
                                            </div>

                                            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                                                <p className="font-serif text-3xl text-white">
                                                    06
                                                </p>

                                                <p className="mt-1 text-xs text-white/50">
                                                    Resource Types
                                                </p>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    INTRO
                ================================================= */}

                <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">

                    <div className="mx-auto max-w-7xl">

                        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                    Document Centre
                                </p>

                                <h2 className="mt-4 font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl lg:text-6xl">
                                    Official information,
                                    <span className="block text-[#6B6257]">
                                        readily accessible.
                                    </span>
                                </h2>

                            </div>

                            <div className="max-w-2xl lg:ml-auto">

                                <p className="text-xl leading-9 text-[#1E1917]">
                                    Find institutional documents, academic
                                    information, regulatory approvals,
                                    publications and other resources through
                                    the NCERC Downloads Centre.
                                </p>

                                <p className="mt-6 text-base leading-8 text-[#6B6257]">
                                    Each resource is linked directly to its
                                    official document or webpage, allowing
                                    students, faculty, parents and other
                                    stakeholders to access the information
                                    they need.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    CATEGORIES
                ================================================= */}

                <section
                    id="categories"
                    className="bg-white"
                >

                    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

                        <div className="mb-12">

                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                Browse Resources
                            </p>

                            <h2 className="mt-3 font-serif text-4xl text-[#20235A] sm:text-5xl">
                                Explore by category.
                            </h2>

                        </div>


                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                            {categories.map((category) => {

                                const Icon = category.icon;

                                return (
                                    <div
                                        key={category.title}
                                        className="group rounded-3xl border border-[#E3DED4] bg-[#FAF7F2] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-lg"
                                    >

                                        <div className="flex items-start justify-between">

                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#20235A] text-[#D2B87C]">
                                                <Icon size={20} />
                                            </div>

                                            <span className="font-serif text-2xl text-[#6B6257]">
                                                {category.count}
                                            </span>

                                        </div>

                                        <h3 className="mt-7 font-serif text-2xl text-[#20235A]">
                                            {category.title}
                                        </h3>

                                        <div className="mt-4 h-px w-10 bg-[#D2B87C] transition-all duration-300 group-hover:w-16" />

                                    </div>
                                );

                            })}

                        </div>

                    </div>

                </section>


                {/* =================================================
                    DOCUMENTS
                ================================================= */}

                <section
                    id="documents"
                    className="bg-[#20235A]"
                >

                    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">

                        {/* Section Header */}

                        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                    Official Documents
                                </p>

                                <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
                                    Downloads Centre
                                </h2>

                            </div>

                            <div className="flex items-center gap-3 text-sm text-white/60">

                                <Download
                                    size={17}
                                    className="text-[#D2B87C]"
                                />

                                {downloadItems.length} resources available

                            </div>

                        </div>


                        {/* Featured Documents */}

                        <div className="mt-14 grid gap-5 lg:grid-cols-2">

                            {downloadItems
                                .filter((item) => item.featured)
                                .map((item) => {

                                    const Icon = item.icon;

                                    return (
                                        <Link
                                            key={item.id}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative overflow-hidden rounded-[2rem] border border-[#D2B87C]/20 bg-[#D2B87C] p-8 text-[#20235A] transition duration-500 hover:-translate-y-1 hover:shadow-2xl sm:p-10"
                                        >

                                            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#20235A]/10" />

                                            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white/20 blur-3xl" />

                                            <div className="relative">

                                                <div className="flex items-start justify-between">

                                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                                                        <Icon size={24} />
                                                    </div>

                                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#20235A] text-[#D2B87C] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                                        <ArrowUpRight size={18} />
                                                    </div>

                                                </div>

                                                <p className="mt-9 text-xs font-bold uppercase tracking-[0.2em] text-[#1E1917]">
                                                    {item.category}
                                                </p>

                                                <h3 className="mt-3 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-4 max-w-xl text-sm leading-7 text-[#1E1917]">
                                                    {item.description}
                                                </p>

                                                <div className="mt-8 flex items-center gap-2 border-t border-[#20235A]/10 pt-6 text-sm font-semibold">
                                                    Open Document
                                                    <ArrowUpRight size={16} />
                                                </div>

                                            </div>

                                        </Link>
                                    );
                                })}

                        </div>


                        {/* Remaining Documents */}

                        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                            {downloadItems
                                .filter((item) => !item.featured)
                                .map((item) => {

                                    const Icon = item.icon;

                                    return (
                                        <Link
                                            key={item.id}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/30 hover:bg-white/[0.07]"
                                        >

                                            <div className="flex items-start justify-between">

                                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] text-[#D2B87C]">
                                                    <Icon size={20} />
                                                </div>

                                                <span className="font-serif text-sm text-white/50">
                                                    {item.id}
                                                </span>

                                            </div>

                                            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                                                {item.category}
                                            </p>

                                            <h3 className="mt-3 min-h-[56px] font-serif text-2xl leading-tight text-white">
                                                {item.title}
                                            </h3>

                                            <p className="mt-4 min-h-[84px] text-sm leading-6 text-white/60">
                                                {item.description}
                                            </p>

                                            <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">

                                                <span className="text-sm font-semibold text-white/70 transition group-hover:text-[#D2B87C]">
                                                    View Resource
                                                </span>

                                                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition group-hover:border-[#D2B87C]/30 group-hover:text-[#D2B87C]">
                                                    <ArrowUpRight size={15} />
                                                </div>

                                            </div>

                                        </Link>
                                    );
                                })}

                        </div>

                    </div>

                </section>


                {/* =================================================
                    HOW TO USE
                ================================================= */}

                <section className="bg-[#FAF7F2]">

                    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">

                        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7746]">
                                    Quick Access
                                </p>

                                <h2 className="mt-4 font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                    Find what you need.
                                </h2>

                                <p className="mt-6 max-w-md text-base leading-7 text-[#6B6257]">
                                    Accessing a document is simple. Select the
                                    required resource and open the linked
                                    official document or webpage.
                                </p>

                            </div>


                            <div className="grid gap-4 sm:grid-cols-3">

                                <div className="rounded-3xl border border-[#E3DED4] bg-white p-6">

                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#20235A] text-[#D2B87C]">
                                        <Search size={19} />
                                    </div>

                                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.15em] text-[#8F7746]">
                                        Step 01
                                    </p>

                                    <h3 className="mt-2 font-serif text-2xl text-[#20235A]">
                                        Browse
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#6B6257]">
                                        Find the resource relevant to your
                                        requirement.
                                    </p>

                                </div>


                                <div className="rounded-3xl border border-[#E3DED4] bg-white p-6">

                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#20235A] text-[#D2B87C]">
                                        <FileText size={19} />
                                    </div>

                                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.15em] text-[#8F7746]">
                                        Step 02
                                    </p>

                                    <h3 className="mt-2 font-serif text-2xl text-[#20235A]">
                                        Select
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#6B6257]">
                                        Click on the required document or
                                        resource.
                                    </p>

                                </div>


                                <div className="rounded-3xl border border-[#E3DED4] bg-white p-6">

                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#20235A] text-[#D2B87C]">
                                        <Download size={19} />
                                    </div>

                                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.15em] text-[#8F7746]">
                                        Step 03
                                    </p>

                                    <h3 className="mt-2 font-serif text-2xl text-[#20235A]">
                                        Access
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-[#6B6257]">
                                        View the official document or webpage
                                        in a new tab.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    FINAL CTA
                ================================================= */}

                <section className="relative overflow-hidden bg-[#20235A] text-white">

                    <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-[#D2B87C]/10" />

                    <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#D2B87C]/5 blur-3xl" />

                    <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

                        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                            <div>

                                <div className="flex items-center gap-3">

                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                        NCERC Document Centre
                                    </span>

                                </div>

                                <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
                                    Access official NCERC resources whenever you need them.
                                </h2>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60">
                                    Reports, approvals, publications, academic
                                    resources and institutional documents are
                                    available through this central downloads page.
                                </p>

                            </div>

                            <Link
                                href="#documents"
                                className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#D2B87C] px-7 py-4 text-sm font-semibold text-[#20235A] transition hover:bg-[#C4A96F]"
                            >
                                Browse All Downloads
                                <ArrowRight size={17} />
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