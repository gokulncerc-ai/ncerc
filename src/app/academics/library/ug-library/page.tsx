import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    BookOpen,
    BookMarked,
    Building2,
    GraduationCap,
    LibraryBig,
    Monitor,
    Network,
    ScrollText,
    Search,
    Sparkles,
    Users,
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
        active: true,
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
    },
];

const facilityStats = [
    {
        value: "650.321",
        unit: "sq.m",
        label: "Carpet Area",
        icon: Building2,
    },
    {
        value: "250.35",
        unit: "sq.m",
        label: "Reading Space",
        icon: BookOpen,
    },
    {
        value: "300",
        unit: "Seats",
        label: "Reading Space Capacity",
        icon: Users,
    },
    {
        value: "100",
        unit: "Daily",
        label: "Average Users",
        icon: Users,
    },
    {
        value: "80",
        unit: "Daily",
        label: "Average Book Issues",
        icon: BookMarked,
    },
    {
        value: "33,633",
        unit: "Volumes",
        label: "Total Collection",
        icon: LibraryBig,
    },
    {
        value: "14,124",
        unit: "Titles",
        label: "Total Titles",
        icon: ScrollText,
    },
    {
        value: "3,556",
        unit: "Books",
        label: "Reference Books",
        icon: Search,
    },
];

const additionalStats = [
    {
        value: "30",
        label: "Technical Magazines",
    },
    {
        value: "20",
        label: "Non-Technical Magazines",
    },
    {
        value: "125",
        label: "National Journals",
    },
    {
        value: "50",
        label: "International Journals",
    },
];

const bookDetails = [
    ["1", "Computer Science Engineering", "737", "6726", "7463"],
    ["2", "Electrical Engineering", "298", "2912", "3210"],
    ["3", "Electronics and Communication Engineering", "464", "5609", "6073"],
    ["4", "Automobile Engineering", "88", "710", "798"],
    ["5", "Mechanical Engineering", "545", "4287", "4832"],
    ["6", "Mechatronics", "257", "2227", "2484"],
    ["7", "Civil Engineering", "100", "560", "660"],
    ["8", "Mathematics", "273", "1661", "1934"],
    ["9", "Chemistry", "76", "497", "573"],
    ["10", "Humanities", "-", "12", "12"],
    ["11", "Management", "114", "1091", "1205"],
    ["12", "Information Technology", "83", "351", "434"],
    ["13", "General Knowledge", "92", "61", "153"],
    ["14", "Philosophy", "99", "612", "711"],
    ["15", "Economics", "24", "136", "160"],
    ["16", "English", "27", "245", "272"],
    ["17", "Education", "-", "21", "21"],
    ["18", "Environmental Science", "44", "311", "355"],
    ["19", "Literature", "1", "740", "741"],
    ["20", "Biography and Genealogy", "4", "30", "34"],
    ["21", "Commerce and Communication", "1", "6", "7"],
    ["22", "Chemical Engineering", "21", "84", "105"],
    ["23", "Earth Science", "13", "22", "35"],
    ["24", "Library and Information Science", "5", "1", "6"],
    ["25", "General History and Geography", "4", "27", "31"],
    ["26", "General Science", "20", "76", "96"],
    ["27", "Hydrology", "12", "64", "76"],
    ["28", "Life Science – Biology", "23", "90", "113"],
    ["29", "Physics", "127", "902", "1029"],
    ["30", "Political Science", "2", "3", "5"],
    ["31", "Social Science", "2", "3", "5"],
];

const journalDetails = [
    ["1", "Computer Science Journals", "50"],
    ["2", "Automobile, Civil and Mechanical", "35"],
    ["3", "Electrical Engineering", "25"],
    ["4", "Electronics and Communication Engineering Journals", "27"],
    ["5", "Mechatronics Engineering Journals", "22"],
    ["6", "General Science", "16"],
    ["7", "Technical Magazines", "30"],
    ["8", "Non-Technical Magazines", "20"],
];

const page = () => {
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
                        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#D2B87C]/10 blur-3xl" />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-24 sm:px-8 lg:px-12 lg:pb-20 lg:pt-28">
                        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">

                            <div>
                                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                    <span className="h-px w-12 bg-[#D2B87C]" />
                                    Library
                                </div>

                                <h1 className="mt-7 max-w-4xl font-serif text-5xl leading-[1] tracking-tight text-white sm:text-6xl lg:text-8xl">
                                    UG
                                    <span className="block text-[#D2B87C]">
                                        Library.
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                                    Engineering, technology and multidisciplinary
                                    academic resources designed to support undergraduate
                                    learning and research.
                                </p>
                            </div>

                            <div className="lg:pl-10">
                                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-9">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D2B87C] text-[#20235A]">
                                        <GraduationCap className="h-7 w-7" />
                                    </div>

                                    <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                                        Engineering & Technology
                                    </p>

                                    <p className="mt-3 font-serif text-3xl leading-tight text-white">
                                        Built for academic discovery.
                                    </p>

                                    <div className="mt-7 border-t border-white/10 pt-6">
                                        <p className="text-sm leading-7 text-white/60">
                                            A 9,000 sq.ft library with specialized
                                            collections, automated services and
                                            resources across multiple disciplines.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                {/* =====================================================
                    LIBRARY NAVIGATION
                ===================================================== */}
                <section className="sticky top-0 z-30 border-b border-[#E3DED4] bg-white/95 backdrop-blur-md">
                    <div className="mx-auto max-w-7xl overflow-x-auto px-6 sm:px-8 lg:px-12">
                        <div className="flex min-w-max items-center gap-1 py-3">

                            {libraryLinks.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className={`group flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition ${item.active
                                            ? "bg-[#20235A] text-white"
                                            : "text-[#1E1917] hover:bg-[#F2EFE8] hover:text-[#20235A]"
                                            }`}
                                    >
                                        <Icon
                                            className={`h-4 w-4 ${item.active
                                                ? "text-[#D2B87C]"
                                                : "text-[#8F7746] group-hover:text-[#D2B87C]"
                                                }`}
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
                <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Engineering & Technology
                            </p>

                            <h2 className="mt-5 max-w-lg font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl lg:text-6xl">
                                A foundation for undergraduate learning.
                            </h2>

                            <div className="mt-8 flex items-center gap-4">
                                <span className="font-serif text-6xl text-[#D2B87C]">
                                    9K
                                </span>

                                <div className="h-12 w-px bg-[#E3DED4]" />

                                <p className="max-w-[160px] text-sm leading-6 text-[#6B6257]">
                                    square feet of dedicated library space
                                </p>
                            </div>
                        </div>

                        <div className="max-w-3xl">
                            <p className="text-xl leading-9 text-[#1E1917]">
                                NCERC Central Library has been built to international
                                standards and provides a dedicated academic environment
                                for undergraduate students.
                            </p>

                            <p className="mt-7 text-base leading-8 text-[#6B6257]">
                                The library extends across approximately 9,000 sq.ft
                                and consists of specialized collections covering
                                Engineering and Technology, Humanities, Science,
                                Philosophy, Management and Literature.
                            </p>

                            <p className="mt-6 text-base leading-8 text-[#6B6257]">
                                The library is fully automated with KOHA Library
                                Software and also maintains a good collection of
                                rare books alongside its regular academic resources.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-3">
                                {[
                                    "Engineering",
                                    "Technology",
                                    "Humanities",
                                    "Science",
                                    "Management",
                                    "Literature",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-[#E3DED4] bg-white px-4 py-2 text-sm font-medium text-[#6B6257]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>


                {/* =====================================================
                    FACILITY STATS
                ===================================================== */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">

                        <div className="max-w-2xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                General Facility
                            </p>

                            <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
                                The numbers behind the learning space.
                            </h2>

                            <p className="mt-5 text-base leading-8 text-white/60">
                                An overview of the library's physical facilities,
                                collection and daily academic usage.
                            </p>
                        </div>


                        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                            {facilityStats.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.label}
                                        className="group bg-[#20235A] p-7 transition hover:bg-[#20235A] sm:p-8"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-[#D2B87C]">
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <ArrowUpRight className="h-4 w-4 text-white/30 transition group-hover:text-[#D2B87C]" />
                                        </div>

                                        <div className="mt-9">
                                            <div className="flex items-baseline gap-2">
                                                <span className="font-serif text-4xl text-white">
                                                    {item.value}
                                                </span>

                                                <span className="text-xs font-semibold uppercase tracking-wider text-[#D2B87C]">
                                                    {item.unit}
                                                </span>
                                            </div>

                                            <p className="mt-3 text-sm leading-6 text-white/60">
                                                {item.label}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>


                        {/* Magazine / Journal mini stats */}
                        <div className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                            {additionalStats.map((item) => (
                                <div
                                    key={item.label}
                                    className="bg-white/[0.03] p-6"
                                >
                                    <p className="font-serif text-3xl text-[#D2B87C]">
                                        {item.value}
                                    </p>

                                    <p className="mt-2 text-sm text-white/60">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>


                {/* =====================================================
                    COLLECTION OVERVIEW
                ===================================================== */}
                <section className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">

                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Library Collection
                                </p>

                                <h2 className="mt-4 font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                    A diverse academic collection.
                                </h2>
                            </div>

                            <div>
                                <p className="text-base leading-8 text-[#6B6257]">
                                    The undergraduate library collection brings together
                                    resources across core engineering disciplines as
                                    well as supporting subjects such as mathematics,
                                    science, management, humanities and literature.
                                </p>
                            </div>

                        </div>


                        <div className="mt-14 grid gap-5 md:grid-cols-3">

                            <div className="relative overflow-hidden rounded-3xl bg-[#20235A] p-8 md:col-span-2">
                                <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#D2B87C]/10 blur-3xl" />

                                <div className="relative">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Total Collection
                                    </p>

                                    <p className="mt-5 font-serif text-7xl text-white sm:text-8xl">
                                        33,633
                                    </p>

                                    <p className="mt-3 text-sm text-white/60">
                                        volumes available across the library
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-[#E3DED4] bg-[#FAF7F2] p-8">
                                <BookMarked className="h-8 w-8 text-[#8F7746]" />

                                <p className="mt-8 font-serif text-5xl text-[#20235A]">
                                    14,124
                                </p>

                                <p className="mt-3 text-sm leading-6 text-[#6B6257]">
                                    Total titles available for students and faculty.
                                </p>
                            </div>

                        </div>

                    </div>
                </section>


                {/* =====================================================
                    BOOK DETAILS
                ===================================================== */}
                <section className="bg-[#FAF7F2]">
                    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">

                        <div className="max-w-3xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                Department-wise Collection
                            </p>

                            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                Books by subject area.
                            </h2>

                            <p className="mt-5 text-base leading-8 text-[#6B6257]">
                                Explore the distribution of reference books and
                                volumes across different departments and academic
                                subject areas.
                            </p>
                        </div>


                        <div className="mt-12 overflow-hidden rounded-3xl border border-[#E3DED4] bg-white shadow-sm">

                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[760px] border-collapse text-left">
                                    <thead>
                                        <tr className="border-b border-white/10 bg-[#20235A] text-white">
                                            <th className="px-5 py-5 text-xs font-semibold uppercase tracking-wider">
                                                Sl. No.
                                            </th>

                                            <th className="px-5 py-5 text-xs font-semibold uppercase tracking-wider">
                                                Subject
                                            </th>

                                            <th className="px-5 py-5 text-right text-xs font-semibold uppercase tracking-wider">
                                                Reference
                                            </th>

                                            <th className="px-5 py-5 text-right text-xs font-semibold uppercase tracking-wider">
                                                Volumes
                                            </th>

                                            <th className="px-5 py-5 text-right text-xs font-semibold uppercase tracking-wider">
                                                Total
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {bookDetails.map((row, index) => (
                                            <tr
                                                key={row[0]}
                                                className={`border-b border-[#EEE9E1] transition hover:bg-[#F2EFE8] ${index % 2 === 0
                                                    ? "bg-white"
                                                    : "bg-[#F8F5EF]"
                                                    }`}
                                            >
                                                <td className="px-5 py-4 text-sm font-medium text-[#8F7746]">
                                                    {row[0]}
                                                </td>

                                                <td className="px-5 py-4 text-sm font-medium text-[#1E1917]">
                                                    {row[1]}
                                                </td>

                                                <td className="px-5 py-4 text-right text-sm text-[#6B6257]">
                                                    {row[2]}
                                                </td>

                                                <td className="px-5 py-4 text-right text-sm text-[#6B6257]">
                                                    {row[3]}
                                                </td>

                                                <td className="px-5 py-4 text-right text-sm font-semibold text-[#20235A]">
                                                    {row[4]}
                                                </td>
                                            </tr>
                                        ))}

                                        <tr className="bg-[#F2EFE8]">
                                            <td
                                                colSpan={2}
                                                className="px-5 py-5 text-sm font-bold uppercase tracking-wider text-[#20235A]"
                                            >
                                                Total
                                            </td>

                                            <td className="px-5 py-5 text-right font-bold text-[#20235A]">
                                                3,556
                                            </td>

                                            <td className="px-5 py-5 text-right font-bold text-[#20235A]">
                                                30,077
                                            </td>

                                            <td className="px-5 py-5 text-right font-bold text-[#20235A]">
                                                33,633
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>
                </section>


                {/* =====================================================
                    JOURNAL DETAILS
                ===================================================== */}
                <section className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">

                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Periodicals & Journals
                                </p>

                                <h2 className="mt-4 font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                    Research starts with access to information.
                                </h2>
                            </div>

                            <p className="max-w-xl text-base leading-8 text-[#6B6257]">
                                The library maintains journals and magazines across
                                engineering disciplines, general science and
                                supporting academic areas.
                            </p>

                        </div>


                        <div className="mt-14 overflow-hidden rounded-3xl border border-[#E3DED4]">

                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[650px] border-collapse text-left">
                                    <thead>
                                        <tr className="border-b border-white/10 bg-[#20235A] text-white">
                                            <th className="px-6 py-5 text-xs font-semibold uppercase tracking-wider">
                                                Sl. No.
                                            </th>

                                            <th className="px-6 py-5 text-xs font-semibold uppercase tracking-wider">
                                                Department / Category
                                            </th>

                                            <th className="px-6 py-5 text-right text-xs font-semibold uppercase tracking-wider">
                                                Quantity
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {journalDetails.map((row, index) => (
                                            <tr
                                                key={row[0]}
                                                className={`border-b border-[#EEE9E1] transition hover:bg-[#F2EFE8] ${index % 2 === 0
                                                    ? "bg-white"
                                                    : "bg-[#F8F5EF]"
                                                    }`}
                                            >
                                                <td className="px-6 py-5 text-sm text-[#8F7746]">
                                                    {row[0]}
                                                </td>

                                                <td className="px-6 py-5 text-sm font-medium text-[#1E1917]">
                                                    {row[1]}
                                                </td>

                                                <td className="px-6 py-5 text-right font-semibold text-[#20235A]">
                                                    {row[2]}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>
                </section>


                {/* =====================================================
                    QUICK ACCESS
                ===================================================== */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

                        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Explore More
                                </p>

                                <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
                                    Discover more library services.
                                </h2>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="/pages/library/digital-library"
                                    className="inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-6 py-3 text-sm font-semibold text-[#20235A] transition hover:bg-[#C4A96F]"
                                >
                                    Digital Library
                                    <ArrowRight className="h-4 w-4" />
                                </Link>

                                <Link
                                    href="/pages/library/opac"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                >
                                    Search OPAC
                                    <Search className="h-4 w-4" />
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