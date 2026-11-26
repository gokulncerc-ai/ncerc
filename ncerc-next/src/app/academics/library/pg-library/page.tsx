import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    BookMarked,
    BookOpen,
    GraduationCap,
    LibraryBig,
    Monitor,
    ScrollText,
    Search,
    Sparkles,
} from "lucide-react";
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
        active: true,
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

const pgLibraryStats = [
    {
        value: "13,253",
        label: "MBA Volumes",
        description: "Total volumes available for MBA students.",
    },
    {
        value: "6,214",
        label: "MBA Titles",
        description: "Titles supporting postgraduate management studies.",
    },
    {
        value: "55",
        label: "MBA Journals",
        description: "Journals supporting academic learning and research.",
    },
    {
        value: "559",
        label: "MBA CDs",
        description: "CD-based academic and supporting resources.",
    },
    {
        value: "5,316",
        label: "MCA Volumes",
        description: "Total volumes available for MCA students.",
    },
    {
        value: "2,451",
        label: "MCA Titles",
        description: "Titles supporting postgraduate computer applications studies.",
    },
    {
        value: "25",
        label: "MCA Journals",
        description: "Journals supporting academic learning and research.",
    },
    {
        value: "905",
        label: "MCA CDs",
        description: "CD-based academic and supporting resources.",
    },
];

const collectionDetails = [
    ["1", "Total No. of Volumes", "13,253", "5,316"],
    ["2", "Total No. of Titles", "6,214", "2,451"],
    ["3", "Total No. of Journals", "55", "25"],
    ["4", "Total No. of CDs", "559", "905"],
    ["5", "Reference Collections", "1,801", "1,050"],
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

                            {/* Hero Content */}
                            <div>
                                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                    <span className="h-px w-12 bg-[#D2B87C]" />
                                    Library
                                </div>

                                <h1 className="mt-7 max-w-4xl font-serif text-5xl leading-[1] tracking-tight text-white sm:text-6xl lg:text-8xl">
                                    PG
                                    <span className="block text-[#D2B87C]">
                                        Library.
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                                    Dedicated academic resources supporting postgraduate
                                    learning, research and knowledge development across
                                    MBA and MCA programmes.
                                </p>
                            </div>

                            {/* Hero Side Panel */}
                            <div className="lg:pl-10">
                                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-9">

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D2B87C] text-[#20235A]">
                                        <BookMarked className="h-7 w-7" />
                                    </div>

                                    <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                                        Postgraduate Library
                                    </p>

                                    <p className="mt-3 font-serif text-3xl leading-tight text-white">
                                        Resources for advanced learning.
                                    </p>

                                    <div className="mt-7 border-t border-white/10 pt-6">
                                        <p className="text-sm leading-7 text-white/60">
                                            Supporting postgraduate students with
                                            collections across management and
                                            computer applications.
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
                                Postgraduate Education
                            </p>

                            <h2 className="mt-5 max-w-lg font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl lg:text-6xl">
                                A resource centre for advanced learning.
                            </h2>

                            <div className="mt-8 flex items-center gap-4">
                                <span className="font-serif text-6xl text-[#D2B87C]">
                                    PG
                                </span>

                                <div className="h-12 w-px bg-[#E3DED4]" />

                                <p className="max-w-[160px] text-sm leading-6 text-[#6B6257]">
                                    Academic resources for MBA and MCA programmes
                                </p>
                            </div>
                        </div>

                        <div className="max-w-3xl">
                            <p className="text-xl leading-9 text-[#1E1917]">
                                The PG Library provides dedicated academic resources
                                for postgraduate students pursuing MBA and MCA
                                programmes.
                            </p>

                            <p className="mt-7 text-base leading-8 text-[#6B6257]">
                                The collection includes books, titles, journals,
                                CDs and reference materials that support postgraduate
                                education, academic assignments, research and
                                independent learning.
                            </p>

                            <p className="mt-6 text-base leading-8 text-[#6B6257]">
                                With resources covering management and computer
                                applications, the library provides students with
                                access to materials relevant to their specialised
                                areas of study.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-3">
                                {[
                                    "MBA",
                                    "MCA",
                                    "Management",
                                    "Computer Applications",
                                    "Research",
                                    "Reference Resources",
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
                    PROGRAMME OVERVIEW
                ===================================================== */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">

                        <div className="max-w-2xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                MBA & MCA Collections
                            </p>

                            <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
                                Resources organised for postgraduate study.
                            </h2>

                            <p className="mt-5 text-base leading-8 text-white/60">
                                The PG Library maintains separate collections and
                                resources supporting the academic requirements of
                                MBA and MCA students.
                            </p>
                        </div>


                        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">

                            {pgLibraryStats.map((item) => (
                                <div
                                    key={`${item.label}-${item.value}`}
                                    className="group bg-[#20235A] p-7 transition hover:bg-[#20235A] sm:p-8"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-[#D2B87C]">
                                            <BookMarked className="h-5 w-5" />
                                        </div>

                                        <ArrowUpRight className="h-4 w-4 text-white/30 transition group-hover:text-[#D2B87C]" />
                                    </div>

                                    <div className="mt-9">
                                        <span className="font-serif text-4xl text-white">
                                            {item.value}
                                        </span>

                                        <p className="mt-3 text-sm font-medium text-[#D2B87C]">
                                            {item.label}
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-white/60">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                </section>


                {/* =====================================================
                    MBA / MCA HIGHLIGHT
                ===================================================== */}
                <section className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">

                        <div className="grid gap-5 md:grid-cols-2">

                            {/* MBA */}
                            <div className="relative overflow-hidden rounded-3xl bg-[#20235A] p-8 sm:p-10">
                                <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#D2B87C]/10 blur-3xl" />

                                <div className="relative">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D2B87C] text-[#20235A]">
                                        <GraduationCap className="h-6 w-6" />
                                    </div>

                                    <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Management
                                    </p>

                                    <h3 className="mt-3 font-serif text-4xl text-white">
                                        MBA Library
                                    </h3>

                                    <p className="mt-5 text-sm leading-7 text-white/60">
                                        A dedicated collection supporting management
                                        education, business studies, academic
                                        research and reference requirements.
                                    </p>

                                    <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                                        <div>
                                            <p className="font-serif text-3xl text-white">
                                                13,253
                                            </p>
                                            <p className="mt-1 text-xs text-white/50">
                                                Volumes
                                            </p>
                                        </div>

                                        <div>
                                            <p className="font-serif text-3xl text-white">
                                                6,214
                                            </p>
                                            <p className="mt-1 text-xs text-white/50">
                                                Titles
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* MCA */}
                            <div className="rounded-3xl border border-[#E3DED4] bg-[#FAF7F2] p-8 sm:p-10">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#20235A] text-[#D2B87C]">
                                    <Monitor className="h-6 w-6" />
                                </div>

                                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Computer Applications
                                </p>

                                <h3 className="mt-3 font-serif text-4xl text-[#20235A]">
                                    MCA Library
                                </h3>

                                <p className="mt-5 text-sm leading-7 text-[#6B6257]">
                                    Academic resources supporting computer
                                    applications, information technology,
                                    programming and postgraduate research.
                                </p>

                                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#E3DED4] pt-6">
                                    <div>
                                        <p className="font-serif text-3xl text-[#20235A]">
                                            5,316
                                        </p>
                                        <p className="mt-1 text-xs text-[#6B6257]">
                                            Volumes
                                        </p>
                                    </div>

                                    <div>
                                        <p className="font-serif text-3xl text-[#20235A]">
                                            2,451
                                        </p>
                                        <p className="mt-1 text-xs text-[#6B6257]">
                                            Titles
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>


                {/* =====================================================
                    COLLECTION DETAILS
                ===================================================== */}
                <section className="bg-[#FAF7F2]">
                    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">

                        <div className="max-w-3xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                PG Library Collection
                            </p>

                            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                Library resources at a glance.
                            </h2>

                            <p className="mt-5 text-base leading-8 text-[#6B6257]">
                                The following figures represent the available
                                postgraduate library resources for MBA and MCA
                                students.
                            </p>
                        </div>


                        <div className="mt-12 overflow-hidden rounded-3xl border border-[#E3DED4] bg-white shadow-sm">

                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[700px] border-collapse text-left">

                                    <thead>
                                        <tr className="border-b border-white/10 bg-[#20235A] text-white">

                                            <th className="px-5 py-5 text-xs font-semibold uppercase tracking-wider">
                                                Sl. No.
                                            </th>

                                            <th className="px-5 py-5 text-xs font-semibold uppercase tracking-wider">
                                                Library Details
                                            </th>

                                            <th className="px-5 py-5 text-right text-xs font-semibold uppercase tracking-wider">
                                                MBA
                                            </th>

                                            <th className="px-5 py-5 text-right text-xs font-semibold uppercase tracking-wider">
                                                MCA
                                            </th>

                                        </tr>
                                    </thead>

                                    <tbody>

                                        {collectionDetails.map((row, index) => (
                                            <tr
                                                key={row[0]}
                                                className={`border-b border-[#EEE9E1] transition hover:bg-[#F2EFE8] ${index % 2 === 0
                                                    ? "bg-white"
                                                    : "bg-[#F8F5EF]"
                                                    }`}
                                            >

                                                <td className="px-5 py-5 text-sm font-medium text-[#8F7746]">
                                                    {row[0]}
                                                </td>

                                                <td className="px-5 py-5 text-sm font-medium text-[#1E1917]">
                                                    {row[1]}
                                                </td>

                                                <td className="px-5 py-5 text-right text-sm font-semibold text-[#20235A]">
                                                    {row[2]}
                                                </td>

                                                <td className="px-5 py-5 text-right text-sm font-semibold text-[#20235A]">
                                                    {row[3]}
                                                </td>

                                            </tr>
                                        ))}

                                        <tr className="bg-[#F2EFE8]">

                                            <td
                                                colSpan={2}
                                                className="px-5 py-5 text-sm font-bold uppercase tracking-wider text-[#20235A]"
                                            >
                                                Total Reference Collections
                                            </td>

                                            <td className="px-5 py-5 text-right font-bold text-[#20235A]">
                                                1,801
                                            </td>

                                            <td className="px-5 py-5 text-right font-bold text-[#20235A]">
                                                1,050
                                            </td>

                                        </tr>

                                    </tbody>

                                </table>
                            </div>

                        </div>

                    </div>
                </section>


                {/* =====================================================
                    RESOURCE SUMMARY
                ===================================================== */}
                <section className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">

                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Academic Resources
                                </p>

                                <h2 className="mt-4 font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                    Supporting postgraduate research.
                                </h2>
                            </div>

                            <p className="max-w-xl text-base leading-8 text-[#6B6257]">
                                Books, journals, CDs and reference collections
                                provide postgraduate students with resources
                                to support classroom learning, assignments,
                                projects and academic research.
                            </p>

                        </div>


                        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                            {[
                                {
                                    value: "18,569",
                                    label: "Combined Volumes",
                                    icon: LibraryBig,
                                },
                                {
                                    value: "8,665",
                                    label: "Combined Titles",
                                    icon: BookMarked,
                                },
                                {
                                    value: "80",
                                    label: "Journals",
                                    icon: ScrollText,
                                },
                                {
                                    value: "1,464",
                                    label: "CD Resources",
                                    icon: Monitor,
                                },
                            ].map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.label}
                                        className="rounded-3xl border border-[#E3DED4] bg-[#FAF7F2] p-7"
                                    >
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#8F7746]">
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        <p className="mt-8 font-serif text-4xl text-[#20235A]">
                                            {item.value}
                                        </p>

                                        <p className="mt-2 text-sm text-[#6B6257]">
                                            {item.label}
                                        </p>
                                    </div>
                                );
                            })}

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


                <FooterSection />

            </main>
        </>

    );

};

export default page