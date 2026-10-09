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

            <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">

                {/* =====================================================
                    HERO
                ====================================================== */}
                <section className="relative overflow-hidden bg-[#20235A]">

                    {/* Decorative rings */}
                    <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-[#D2B87C]/20" />

                    <div className="pointer-events-none absolute -right-16 -top-16 h-[350px] w-[350px] rounded-full border border-[#D2B87C]/10" />

                    <div className="pointer-events-none absolute bottom-[-180px] left-[-180px] h-[420px] w-[420px] rounded-full border border-white/5" />

                    {/* Decorative vertical line */}
                    <div className="pointer-events-none absolute left-[8%] top-[30%] hidden h-32 w-px rotate-[25deg] bg-[#D2B87C]/20 lg:block" />

                    <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">

                        <div className="max-w-5xl">

                            <div className="mb-7 flex items-center gap-4">

                                <span className="h-px w-10 bg-[#D2B87C] sm:w-12" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-xs sm:tracking-[0.28em]">
                                    Academic Resources
                                </span>

                            </div>


                            <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">

                                Regulations

                                <span className="block text-[#D2B87C]">
                                    &amp; Curriculum
                                </span>

                            </h1>


                            <p className="mt-7 max-w-2xl text-[15px] leading-7 text-white/65 sm:mt-8 sm:text-lg sm:leading-8">
                                Access the academic regulations and curriculum documents for
                                NCERC programmes across different academic schemes and years.
                            </p>

                        </div>


                        <div className="mt-10 flex flex-col gap-3 sm:mt-14 sm:flex-row sm:flex-wrap">

                            <a
                                href="#regulations"
                                className="inline-flex w-fit items-center gap-2 bg-[#D2B87C] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#20235A] transition hover:bg-[#D2B87C]/90"
                            >
                                View Documents

                                <ArrowUpRight className="h-4 w-4" />
                            </a>


                            <div className="inline-flex w-fit items-center gap-2 border border-white/15 px-5 py-3 text-xs font-medium uppercase tracking-[0.12em] text-white/55">

                                <FileText className="h-4 w-4 text-[#D2B87C]" />

                                8 Academic Documents

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    INTRO / RESOURCE SUMMARY
                ====================================================== */}
                <section className="border-b border-[#20235A]/10 bg-[#FAF7F2]">

                    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-24">

                        <div>

                            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                Academic Documents
                            </span>

                            <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight tracking-tight text-[#20235A] sm:text-5xl">
                                Clear academic frameworks for every programme.
                            </h2>

                        </div>


                        <div className="max-w-3xl lg:pt-7">

                            <p className="text-base leading-8 text-[#1E1917]/65">
                                Regulations and curriculum documents provide students and
                                academic stakeholders with important information about
                                programme structures, academic requirements and applicable
                                regulations.
                            </p>


                            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-4">

                                {[
                                    ["08", "Documents"],
                                    ["04", "Academic Years"],
                                    ["04", "Programmes"],
                                    ["PDF", "Format"],
                                ].map(([number, label]) => (

                                    <div
                                        key={label}
                                        className="bg-white p-5"
                                    >

                                        <span className="font-display text-2xl text-[#20235A]">
                                            {number}
                                        </span>

                                        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#1E1917]/50">
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
                <section
                    id="regulations"
                    className="bg-white py-16 sm:py-20 lg:py-28"
                >

                    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                        {/* Section heading */}
                        <div className="flex flex-col justify-between gap-6 border-b border-[#20235A]/10 pb-8 sm:flex-row sm:items-end">

                            <div>

                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    Document Library
                                </span>

                                <h2 className="mt-3 font-display text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                    Regulations &amp; Curriculum
                                </h2>

                            </div>


                            <div className="flex items-center gap-2 text-sm text-[#1E1917]/50">

                                <FileText className="h-4 w-4 text-[#8F7746]" />

                                Official academic documents

                            </div>

                        </div>


                        {/* Year navigation */}
                        <div className="mt-8 flex flex-wrap gap-2">

                            {years.map((year, index) => (

                                <a
                                    key={year}
                                    href={`#year - ${ year } `}
                                    className={`border px - 5 py - 2.5 text - xs font - bold uppercase tracking - [0.12em] transition ${
    index === 0
        ? "border-[#20235A] bg-[#20235A] text-white"
        : "border-[#20235A]/10 bg-white text-[#1E1917]/60 hover:border-[#D2B87C] hover:text-[#20235A]"
} `}
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

                                    <div
                                        key={year}
                                        id={`year - ${ year } `}
                                        className="scroll-mt-28"
                                    >

                                        {/* Year heading */}
                                        <div className="mb-6 flex items-center gap-4 sm:gap-5">

                                            <span className="font-display text-5xl text-[#20235A]/10 sm:text-6xl">
                                                {year}
                                            </span>

                                            <div className="h-px flex-1 bg-[#20235A]/10" />

                                            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1E1917]/40 sm:text-xs sm:tracking-[0.16em]">
                                                {yearDocuments.length}{" "}
                                                {yearDocuments.length === 1
                                                    ? "Document"
                                                    : "Documents"}
                                            </span>

                                        </div>


                                        {/* Documents */}
                                        <div className="border-t border-[#20235A]/10">

                                            {yearDocuments.map((document, index) => (

                                                <a
                                                    key={document.id}
                                                    href={document.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group grid gap-5 border-b border-[#20235A]/10 py-6 transition hover:bg-[#FAF7F2] sm:grid-cols-[60px_1fr_auto] sm:items-center"
                                                >

                                                    {/* Number */}
                                                    <div className="hidden sm:block">

                                                        <span className="text-xs font-bold tracking-[0.14em] text-[#8F7746]">
                                                            {String(index + 1).padStart(2, "0")}
                                                        </span>

                                                    </div>


                                                    {/* Document information */}
                                                    <div className="flex min-w-0 items-start gap-4">

                                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#20235A]/10 bg-white text-[#1E1917]/45 transition group-hover:border-[#D2B87C] group-hover:text-[#8F7746]">

                                                            <FileText className="h-5 w-5" />

                                                        </div>


                                                        <div className="min-w-0">

                                                            <div className="flex flex-wrap items-center gap-3">

                                                                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8F7746]">
                                                                    {document.programme}
                                                                </span>

                                                                <span className="hidden h-1 w-1 rounded-full bg-[#20235A]/20 sm:block" />

                                                                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1E1917]/40">
                                                                    {document.year} Regulation
                                                                </span>

                                                            </div>


                                                            <h3 className="mt-2 font-display text-xl leading-snug text-[#20235A] sm:text-2xl">
                                                                {document.title}
                                                            </h3>


                                                            <p className="mt-1 text-xs text-[#1E1917]/50">
                                                                Official PDF document
                                                            </p>

                                                        </div>

                                                    </div>


                                                    {/* Action */}
                                                    <div className="ml-[60px] flex items-center gap-3 sm:ml-0">

                                                        <span className="hidden text-[10px] font-bold uppercase tracking-[0.14em] text-[#1E1917]/35 transition group-hover:text-[#1E1917]/70 md:block">
                                                            Open PDF
                                                        </span>

                                                        <span className="flex h-10 w-10 items-center justify-center border border-[#20235A]/10 text-[#1E1917]/45 transition group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">

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
                <section className="border-y border-[#20235A]/10 bg-[#F2EFE8]">

                    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

                        <div className="grid gap-10 lg:grid-cols-3">

                            {/* Academic Structure */}
                            <div>

                                <div className="flex h-11 w-11 items-center justify-center border border-[#D2B87C]/70 text-[#8F7746]">

                                    <BookOpen className="h-5 w-5" />

                                </div>

                                <h3 className="mt-6 font-display text-2xl text-[#20235A]">
                                    Academic Structure
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#1E1917]/65">
                                    Review the applicable regulations and curriculum structure
                                    associated with each programme.
                                </p>

                            </div>


                            {/* Programme Specific */}
                            <div>

                                <div className="flex h-11 w-11 items-center justify-center border border-[#D2B87C]/70 text-[#8F7746]">

                                    <GraduationCap className="h-5 w-5" />

                                </div>

                                <h3 className="mt-6 font-display text-2xl text-[#20235A]">
                                    Programme Specific
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#1E1917]/65">
                                    Documents are organised by programme and academic year for
                                    easier access.
                                </p>

                            </div>


                            {/* Official Documents */}
                            <div>

                                <div className="flex h-11 w-11 items-center justify-center border border-[#D2B87C]/70 text-[#8F7746]">

                                    <ShieldCheck className="h-5 w-5" />

                                </div>

                                <h3 className="mt-6 font-display text-2xl text-[#20235A]">
                                    Official Documents
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#1E1917]/65">
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
                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

                        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

                            <div className="max-w-3xl">

                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Academic Resources
                                </span>


                                <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">

                                    Stay informed about your

                                    <span className="text-[#D2B87C]">
                                        {" "}academic framework.
                                    </span>

                                </h2>


                                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55">
                                    Refer to the applicable regulations and curriculum documents
                                    for programme-specific academic information.
                                </p>

                            </div>


                            <a
                                href="#regulations"
                                className="inline-flex w-fit shrink-0 items-center gap-3 border border-[#D2B87C] px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#D2B87C] transition hover:bg-[#D2B87C] hover:text-[#20235A]"
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
