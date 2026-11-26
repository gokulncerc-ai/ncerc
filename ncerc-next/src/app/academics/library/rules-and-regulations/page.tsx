import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    BookMarked,
    BookOpen,
    CheckCircle2,
    Clock3,
    GraduationCap,
    LibraryBig,
    Monitor,
    Search,
    ScrollText,
    ShieldCheck,
    Sparkles,
    UserCheck,
    Users,
    Wifi,
    AlertTriangle,
    BookCopy,
    RotateCcw,
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
        active: true,
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

const libraryRules = [
    {
        number: "01",
        title: "Silence & Discipline",
        description:
            "Strict discipline and silence is to be observed. Any type of group discussion is not allowed inside the library.",
        icon: ShieldCheck,
    },
    {
        number: "02",
        title: "Entry Register",
        description:
            "Staff, students and visitors must enter their name in the register maintained for the same.",
        icon: UserCheck,
    },
    {
        number: "03",
        title: "Smart Card",
        description:
            "Students and faculty members must have their smart card to enter the library.",
        icon: CheckCircle2,
    },
    {
        number: "04",
        title: "Transaction Hours",
        description:
            "Library transaction time is from 8.45 am to 5.00 pm.",
        icon: Clock3,
    },
    {
        number: "05",
        title: "Borrowing Privilege",
        description:
            "The privilege of borrowing books from the Library is restricted to the members only.",
        icon: BookMarked,
    },
    {
        number: "06",
        title: "Staff Library Card",
        description:
            "Staff should bring their library card for transaction.",
        icon: UserCheck,
    },
    {
        number: "07",
        title: "Personal Belongings",
        description:
            "Members shall not bring personal belongings and any printed materials inside the library.",
        icon: LibraryBig,
    },
];

const borrowingRules = [
    {
        number: "01",
        title: "Students",
        value: "3 Books",
        detail: "15 days",
        description:
            "A student can borrow 3 books at a time for the period of 15 days.",
        icon: GraduationCap,
    },
    {
        number: "02",
        title: "Staff",
        value: "5 Books",
        detail: "30 days",
        description:
            "Staff can borrow 5 books at a time for the period of 30 days.",
        icon: Users,
    },
    {
        number: "03",
        title: "CD / DVD",
        value: "7 Days",
        detail: "Staff & Students",
        description:
            "Both staff and students can take CD / DVD for the period of 7 days.",
        icon: Monitor,
    },
];

const circulationRules = [
    {
        title: "Renewals",
        description:
            "Books given on loan may be renewed for a further period provided no other members reserved the same.",
        icon: RotateCcw,
    },
    {
        title: "Issue & Return",
        description:
            "Library books will be issued to faculty members and students only during the scheduled time and can return at any time.",
        icon: BookCopy,
    },
    {
        title: "Due Date",
        description:
            "Library books should be properly looked after and deposited on or before the due date.",
        icon: Clock3,
    },
    {
        title: "Overdue Fine",
        description:
            "Overdue fine are there for late return.",
        icon: AlertTriangle,
    },
];

const bookCareRules = [
    "The users are expected to examine the books before getting issued from library. If any damage or defect is found, it should be brought to the attention of the librarian and get it properly recorded before getting that book issued.",
    "If any book is found damaged while returning and there is no record of previous damage, the borrower will be responsible for that.",
    "Depending upon the severity of damage or loss, the borrower will have to pay up to an amount equal to double the cost of current price or triple amount of actual cost of the book. The membership of the borrower may also be cancelled.",
    "Stealing, marking, underlining, writing, cutting and folding of pages are strictly prohibited and liable to be punished if librarian detects any such damage to the library book.",
    "Librarian reserves the right to recall the book from the borrower at any time in case of urgency.",
];

const libraryUsageRules = [
    {
        title: "Books on Shelves",
        description:
            "Do not misplace the books on shelf. While browsing books, no book should be replaced by the user on the stack themselves. Keep them on the reading table.",
        icon: BookOpen,
    },
    {
        title: "Reference Materials",
        description:
            "Reference books, journals, periodicals, newspapers, projects, reports and question papers are to be read in the library. These are not to be issued.",
        icon: ScrollText,
    },
    {
        title: "Internet Facility",
        description:
            "Those who are using internet facility are instructed to enter their name in the register maintained for the same. Their search should be limited to academic purpose only.",
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
                                Library Rules
                                <span className="block text-[#D2B87C]">
                                    & Regulations.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                                Guidelines designed to maintain a disciplined,
                                accessible and respectful environment for
                                learning, reading and academic research.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <Link
                                    href="#rules"
                                    className="group inline-flex items-center gap-3 rounded-full bg-[#D2B87C] px-6 py-3 text-sm font-semibold text-[#20235A] transition hover:bg-[#C4A96F]"
                                >
                                    View Library Rules

                                    <ArrowRight
                                        size={17}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </Link>

                                <Link
                                    href="/pages/library"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-[#D2B87C]/50 hover:text-[#D2B87C]"
                                >
                                    Library Home

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
                                        <ShieldCheck size={27} />
                                    </div>

                                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                        Library Conduct
                                    </p>

                                    <h2 className="mt-3 font-serif text-3xl leading-tight">
                                        A shared space for knowledge.
                                    </h2>

                                    <p className="mt-5 text-sm leading-7 text-white/60">
                                        Every member contributes to maintaining
                                        a quiet, responsible and academically
                                        focused library environment.
                                    </p>

                                    <div className="mt-8 border-t border-white/10 pt-6">

                                        <div className="flex items-center gap-4">

                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-[#D2B87C]">
                                                <Clock3 size={19} />
                                            </div>

                                            <div>
                                                <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                                                    Transaction Hours
                                                </p>

                                                <p className="mt-1 font-serif text-xl text-white">
                                                    8.45 AM — 5.00 PM
                                                </p>
                                            </div>

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
                                    Library Guidelines
                                </span>

                            </div>

                            <h2 className="mt-5 max-w-md font-serif text-4xl leading-tight tracking-tight text-[#20235A] sm:text-5xl">
                                A culture of
                                <span className="block text-[#6B6257]">
                                    respect.
                                </span>
                            </h2>

                        </div>

                        <div className="max-w-3xl">

                            <p className="text-xl leading-9 text-[#1E1917] sm:text-2xl sm:leading-10">
                                The library is a shared academic environment
                                where discipline, responsibility and care for
                                resources are essential.
                            </p>

                            <p className="mt-6 text-base leading-8 text-[#6B6257]">
                                All students, staff and visitors are expected
                                to follow the library rules and regulations.
                                These guidelines help ensure that the library
                                remains a quiet, accessible and productive
                                environment for every member of the NCERC
                                community.
                            </p>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    BASIC LIBRARY RULES
                ===================================================== */}
                <section
                    id="rules"
                    className="bg-[#20235A] py-20 text-white sm:py-24"
                >

                    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

                        <div className="max-w-2xl">

                            <div className="flex items-center gap-3">

                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D2B87C]">
                                    General Rules
                                </span>

                            </div>

                            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                                Library Conduct
                            </h2>

                            <p className="mt-5 text-base leading-8 text-white/60">
                                The following guidelines apply to all members
                                using the library and its services.
                            </p>

                        </div>


                        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">

                            {libraryRules.map((rule) => {

                                const Icon = rule.icon;

                                return (
                                    <div
                                        key={rule.number}
                                        className="group bg-[#20235A] p-7 transition hover:bg-white/[0.04]"
                                    >

                                        <div className="flex items-start justify-between">

                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-[#D2B87C] transition group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                                <Icon size={19} />
                                            </div>

                                            <span className="font-serif text-sm text-white/50">
                                                {rule.number}
                                            </span>

                                        </div>

                                        <h3 className="mt-6 text-sm font-semibold text-white">
                                            {rule.title}
                                        </h3>

                                        <p className="mt-3 text-xs leading-7 text-white/60">
                                            {rule.description}
                                        </p>

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    BORROWING PRIVILEGES
                ===================================================== */}
                <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

                        <div>

                            <div className="flex items-center gap-3">

                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8F7746]">
                                    Borrowing
                                </span>

                            </div>

                            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                Borrowing Privileges
                            </h2>

                        </div>

                        <p className="max-w-md text-sm leading-7 text-[#6B6257]">
                            Borrowing limits and loan periods are defined for
                            students, staff and digital media resources.
                        </p>

                    </div>


                    <div className="mt-14 grid gap-5 lg:grid-cols-3">

                        {borrowingRules.map((rule) => {

                            const Icon = rule.icon;

                            return (
                                <div
                                    key={rule.number}
                                    className="group relative overflow-hidden rounded-[2rem] border border-[#E3DED4] bg-white p-8 transition duration-500 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-2xl hover:shadow-[#20235A]/10"
                                >

                                    <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#D2B87C]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                                    <div className="relative">

                                        <div className="flex items-start justify-between">

                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#20235A] text-[#D2B87C]">
                                                <Icon size={21} />
                                            </div>

                                            <span className="font-serif text-sm text-[#6B6257]">
                                                {rule.number}
                                            </span>

                                        </div>

                                        <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#6B6257]">
                                            {rule.title}
                                        </p>

                                        <h3 className="mt-2 font-serif text-4xl text-[#20235A]">
                                            {rule.value}
                                        </h3>

                                        <div className="mt-3 inline-flex rounded-full bg-[#F2EFE8] px-3 py-1 text-xs font-semibold text-[#8F7746]">
                                            {rule.detail}
                                        </div>

                                        <p className="mt-5 text-sm leading-7 text-[#6B6257]">
                                            {rule.description}
                                        </p>

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </section>


                {/* =====================================================
                    CIRCULATION RULES
                ===================================================== */}
                <section className="border-y border-[#E3DED4] bg-white py-20 sm:py-24">

                    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

                            <div>

                                <div className="flex items-center gap-3">

                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8F7746]">
                                        Circulation
                                    </span>

                                </div>

                                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                    Issue &
                                    <span className="block text-[#6B6257]">
                                        Return
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-sm text-sm leading-7 text-[#6B6257]">
                                    Guidelines for renewing, returning and
                                    maintaining borrowed library materials.
                                </p>

                            </div>


                            <div className="divide-y divide-[#E3DED4] border-y border-[#E3DED4]">

                                {circulationRules.map((rule) => {

                                    const Icon = rule.icon;

                                    return (
                                        <div
                                            key={rule.title}
                                            className="group flex gap-5 py-7"
                                        >

                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#20235A] text-[#D2B87C] transition group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                                <Icon size={19} />
                                            </div>

                                            <div>

                                                <h3 className="text-sm font-bold text-[#20235A]">
                                                    {rule.title}
                                                </h3>

                                                <p className="mt-2 text-sm leading-7 text-[#6B6257]">
                                                    {rule.description}
                                                </p>

                                            </div>

                                        </div>
                                    );
                                })}

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CARE OF LIBRARY BOOKS
                ===================================================== */}
                <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

                    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

                        <div>

                            <div className="flex items-center gap-3">

                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8F7746]">
                                    Responsibility
                                </span>

                            </div>

                            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                Care of
                                <span className="block text-[#6B6257]">
                                    Library Books
                                </span>
                            </h2>

                            <p className="mt-6 max-w-sm text-sm leading-7 text-[#6B6257]">
                                Members are responsible for taking proper care
                                of all library resources issued to them.
                            </p>

                        </div>


                        <div className="space-y-4">

                            {bookCareRules.map((rule, index) => (

                                <div
                                    key={index}
                                    className="group flex gap-5 rounded-2xl border border-[#E3DED4] bg-white p-6 transition hover:border-[#D2B87C] hover:shadow-lg hover:shadow-[#20235A]/5"
                                >

                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#20235A] font-serif text-sm text-[#D2B87C]">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <p className="text-sm leading-7 text-[#6B6257]">
                                        {rule}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    USAGE RULES
                ===================================================== */}
                <section className="bg-[#20235A] py-20 text-white sm:py-24">

                    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

                            <div>

                                <div className="flex items-center gap-3">

                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D2B87C]">
                                        Library Usage
                                    </span>

                                </div>

                                <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                                    Use the
                                    <span className="block text-white/50">
                                        Space Well.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
                                    Additional guidelines for using library
                                    collections, reading materials and internet
                                    facilities.
                                </p>

                            </div>


                            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10">

                                {libraryUsageRules.map((rule) => {

                                    const Icon = rule.icon;

                                    return (
                                        <div
                                            key={rule.title}
                                            className="group bg-[#20235A] p-7 transition hover:bg-white/[0.04] sm:p-8"
                                        >

                                            <div className="flex items-start gap-5">

                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#D2B87C] transition group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                                    <Icon size={20} />
                                                </div>

                                                <div>

                                                    <h3 className="text-sm font-semibold text-white">
                                                        {rule.title}
                                                    </h3>

                                                    <p className="mt-2 text-sm leading-7 text-white/60">
                                                        {rule.description}
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
                    FINAL REMINDER
                ===================================================== */}
                <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

                    <div className="relative overflow-hidden rounded-[2rem] border border-[#E3DED4] bg-white p-8 sm:p-12 lg:p-16">

                        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#D2B87C]/10 blur-3xl" />

                        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

                            <div>

                                <div className="flex items-center gap-3">

                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8F7746]">
                                        Remember
                                    </span>

                                </div>

                                <h2 className="mt-5 max-w-3xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                    Help us maintain a quiet and productive
                                    environment for everyone.
                                </h2>

                                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6B6257]">
                                    Responsible use of library resources ensures
                                    that every member of the NCERC community
                                    can benefit from the facilities and
                                    collections available.
                                </p>

                            </div>


                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                                <ShieldCheck size={30} />
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
                                    discover additional academic resources and
                                    services.
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