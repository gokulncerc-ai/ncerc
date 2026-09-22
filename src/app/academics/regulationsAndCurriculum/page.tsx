import SiteHeader from '@/components/header/SiteHeader'
import FooterSection from '@/components/home/FooterSection'
import {
    ArrowUpRight,
    BookOpen,
    FileText,
    GraduationCap,
    ShieldCheck,
} from "lucide-react";

const regulations = [
    {
        id: "btech-2024",
        programme: "B.Tech",
        title: "B.Tech Regulations 2024",
        year: "2024",
        href: "https://ncerc.ac.in/documents/regulations-and-curriculam/B-Tech-Regulations-2024.pdf",
    },
    {
        id: "mtech-2024",
        programme: "M.Tech",
        title: "M.Tech Regulations 2024",
        year: "2024",
        href: "https://ncerc.ac.in/documents/regulations-and-curriculam/M-Tech-Regulations-2024.pdf",
    },
    {
        id: "mba-2024",
        programme: "MBA",
        title: "MBA Regulations 2024",
        year: "2024",
        href: "https://ncerc.ac.in/documents/regulations-and-curriculam/MBA-Regulations-2024.pdf",
    },
    {
        id: "mca-2024",
        programme: "MCA",
        title: "MCA Regulations 2024",
        year: "2024",
        href: "https://ncerc.ac.in/documents/regulations-and-curriculam/MCA-Regulations-2024.pdf",
    },
    {
        id: "mtech-2022",
        programme: "M.Tech",
        title: "M.Tech Regulations 2022",
        year: "2022",
        href: "https://ncerc.ac.in/documents/regulations-and-curriculam/MTechRegulation-2022%20scheme.pdf",
    },
    {
        id: "mca-2020",
        programme: "MCA",
        title: "MCA Regulations 2020",
        year: "2020",
        href: "https://ncerc.ac.in/documents/regulations-and-curriculam/MCARegulations2020.pdf",
    },
    {
        id: "mba-2020",
        programme: "MBA",
        title: "MBA Regulations 2020",
        year: "2020",
        href: "https://ncerc.ac.in/documents/regulations-and-curriculam/MBARegulations2020.pdf",
    },
    {
        id: "btech-2019",
        programme: "B.Tech",
        title: "B.Tech Regulations 2019",
        year: "2019",
        href: "https://ncerc.ac.in/documents/regulations-and-curriculam/B.Techregulation-2019%20scheme.pdf",
    },
];

const years = ["2024", "2022", "2020", "2019"];

const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="bg-white text-slate-700">
                {/* =====================================================
            HERO
        ====================================================== */}
                <section className="relative overflow-hidden bg-slate-950">
                    {/* Decorative rings */}
                    <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-gold-500/20" />
                    <div className="pointer-events-none absolute -right-16 -top-16 h-[350px] w-[350px] rounded-full border border-gold-500/10" />

                    <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 sm:pb-28 lg:px-8 lg:pb-36 lg:pt-40">
                        <div className="max-w-5xl">
                            <div className="mb-7 flex items-center gap-4">
                                <span className="h-px w-12 bg-gold-500" />

                                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-500">
                                    Academic Resources
                                </span>
                            </div>

                            <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
                                Regulations
                                <span className="block text-gold-500">& Curriculum</span>
                            </h1>

                            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                                Access the academic regulations and curriculum documents for
                                NCERC programmes across different academic schemes and years.
                            </p>
                        </div>

                        <div className="mt-14 flex flex-wrap gap-3">
                            <a
                                href="#regulations"
                                className="inline-flex items-center gap-2 bg-gold-500 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-slate-950 transition hover:bg-gold-400"
                            >
                                View Documents
                                <ArrowUpRight className="h-4 w-4" />
                            </a>

                            <div className="flex items-center gap-2 border border-white/15 px-5 py-3 text-xs font-medium uppercase tracking-[0.12em] text-slate-400">
                                <FileText className="h-4 w-4 text-gold-500" />
                                8 Academic Documents
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
            INTRO / RESOURCE SUMMARY
        ====================================================== */}
                <section className="border-b border-slate-200 bg-[#faf7f2]">
                    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-24">
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-500">
                                Academic Documents
                            </span>

                            <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight tracking-tight text-slate-950 sm:text-5xl">
                                Clear academic frameworks for every programme.
                            </h2>
                        </div>

                        <div className="max-w-3xl lg:pt-7">
                            <p className="text-base leading-8 text-slate-600">
                                Regulations and curriculum documents provide students and
                                academic stakeholders with important information about
                                programme structures, academic requirements and applicable
                                regulations.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-4">
                                {[
                                    ["08", "Documents"],
                                    ["04", "Academic Years"],
                                    ["04", "Programmes"],
                                    ["PDF", "Format"],
                                ].map(([number, label]) => (
                                    <div key={label} className="bg-white p-5">
                                        <span className="font-display text-2xl text-slate-950">
                                            {number}
                                        </span>

                                        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
                                            {label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
            DOCUMENT LIBRARY
        ====================================================== */}
                <section id="regulations" className="bg-white py-20 lg:py-28">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        {/* Section heading */}
                        <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-end">
                            <div>
                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-500">
                                    Document Library
                                </span>

                                <h2 className="mt-3 font-display text-4xl leading-tight text-slate-950 sm:text-5xl">
                                    Regulations &amp; Curriculum
                                </h2>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                <FileText className="h-4 w-4 text-gold-500" />
                                Official academic documents
                            </div>
                        </div>

                        {/* Year navigation */}
                        <div className="mt-8 flex flex-wrap gap-2">
                            {years.map((year, index) => (
                                <a
                                    key={year}
                                    href={`#year-${year}`}
                                    className={`border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] transition ${index === 0
                                            ? "border-slate-950 bg-slate-950 text-white"
                                            : "border-slate-200 bg-white text-slate-600 hover:border-gold-500 hover:text-slate-950"
                                        }`}
                                >
                                    {year}
                                </a>
                            ))}
                        </div>

                        {/* Documents grouped by year */}
                        <div className="mt-14 space-y-16">
                            {years.map((year) => {
                                const yearDocuments = regulations.filter(
                                    (document) => document.year === year
                                );

                                return (
                                    <div key={year} id={`year-${year}`} className="scroll-mt-28">
                                        {/* Year heading */}
                                        <div className="mb-6 flex items-center gap-5">
                                            <span className="font-display text-5xl text-slate-200 sm:text-6xl">
                                                {year}
                                            </span>

                                            <div className="h-px flex-1 bg-slate-200" />

                                            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                                                {yearDocuments.length}{" "}
                                                {yearDocuments.length === 1
                                                    ? "Document"
                                                    : "Documents"}
                                            </span>
                                        </div>

                                        {/* Documents */}
                                        <div className="border-t border-slate-200">
                                            {yearDocuments.map((document, index) => (
                                                <a
                                                    key={document.id}
                                                    href={document.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group grid gap-5 border-b border-slate-200 py-6 transition hover:bg-[#faf7f2] sm:grid-cols-[60px_1fr_auto] sm:items-center"
                                                >
                                                    {/* Number */}
                                                    <div className="hidden sm:block">
                                                        <span className="text-xs font-bold tracking-[0.14em] text-gold-500">
                                                            {String(index + 1).padStart(2, "0")}
                                                        </span>
                                                    </div>

                                                    {/* Document information */}
                                                    <div className="flex items-start gap-4">
                                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-slate-200 bg-white text-slate-500 transition group-hover:border-gold-500 group-hover:text-gold-500">
                                                            <FileText className="h-5 w-5" />
                                                        </div>

                                                        <div>
                                                            <div className="flex flex-wrap items-center gap-3">
                                                                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-600">
                                                                    {document.programme}
                                                                </span>

                                                                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

                                                                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                                                                    {document.year} Regulation
                                                                </span>
                                                            </div>

                                                            <h3 className="mt-2 font-display text-xl leading-snug text-slate-900 sm:text-2xl">
                                                                {document.title}
                                                            </h3>

                                                            <p className="mt-1 text-xs text-slate-500">
                                                                Official PDF document
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Action */}
                                                    <div className="ml-[60px] flex items-center gap-3 sm:ml-0">
                                                        <span className="hidden text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400 transition group-hover:text-slate-700 md:block">
                                                            Open PDF
                                                        </span>

                                                        <span className="flex h-10 w-10 items-center justify-center border border-slate-200 text-slate-500 transition group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-slate-950">
                                                            <ArrowUpRight className="h-4 w-4" />
                                                        </span>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* =====================================================
            ACADEMIC INFORMATION
        ====================================================== */}
                <section className="border-y border-slate-200 bg-[#faf7f2]">
                    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
                        <div className="grid gap-10 lg:grid-cols-3">
                            <div>
                                <div className="flex h-11 w-11 items-center justify-center border border-gold-500/60 text-gold-500">
                                    <BookOpen className="h-5 w-5" />
                                </div>

                                <h3 className="mt-6 font-display text-2xl text-slate-950">
                                    Academic Structure
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    Review the applicable regulations and curriculum structure
                                    associated with each programme.
                                </p>
                            </div>

                            <div>
                                <div className="flex h-11 w-11 items-center justify-center border border-gold-500/60 text-gold-500">
                                    <GraduationCap className="h-5 w-5" />
                                </div>

                                <h3 className="mt-6 font-display text-2xl text-slate-950">
                                    Programme Specific
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    Documents are organised by programme and academic year for
                                    easier access.
                                </p>
                            </div>

                            <div>
                                <div className="flex h-11 w-11 items-center justify-center border border-gold-500/60 text-gold-500">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>

                                <h3 className="mt-6 font-display text-2xl text-slate-950">
                                    Official Documents
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    Access the official PDF documents provided for academic
                                    reference.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
            CTA
        ====================================================== */}
                <section className="bg-slate-950">
                    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
                        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                            <div className="max-w-3xl">
                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-500">
                                    Academic Resources
                                </span>

                                <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
                                    Stay informed about your
                                    <span className="text-gold-500">
                                        {" "}
                                        academic framework.
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
                                    Refer to the applicable regulations and curriculum documents
                                    for programme-specific academic information.
                                </p>
                            </div>

                            <a
                                href="#regulations"
                                className="inline-flex w-fit shrink-0 items-center gap-3 border border-gold-500 px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-gold-500 transition hover:bg-gold-500 hover:text-slate-950"
                            >
                                Browse Documents
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </section>
            </main>


            <FooterSection />
        </>
    )
}

export default page
