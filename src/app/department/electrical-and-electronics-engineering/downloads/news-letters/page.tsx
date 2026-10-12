import Link from "next/link";
import {
    ArrowLeft,
    ArrowUpRight,
    BookOpen,
    ChevronRight,
    Download,
    FileText,
    Newspaper,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import InnerHeader from "../../DepartmentNav/page";

type Publication = {
    number: string;
    title: string;
    description: string;
    href: string;
    type: "Newsletter" | "Magazine";
    year?: string;
};

/*
 * Add the actual newsletter / magazine documents here.
 *
 * Example:
 * {
 *   number: "01",
 *   title: "EEE Department Newsletter",
 *   description: "Department newsletter covering academic activities and achievements.",
 *   href: "/documents/eee-newsletter.pdf",
 *   type: "Newsletter",
 *   year: "2025",
 * }
 */
const publicationItems: Publication[] = [];

export default function NewsLettersPage() {
    return (
        <>
            <SiteHeader />

            {/* =========================================================
          HERO
      ========================================================= */}
            <section className="relative isolate overflow-hidden bg-[#20235A]">
                {/* Decorative circles */}
                <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#D2B87C]/20" />
                <div className="pointer-events-none absolute -right-8 -top-16 h-52 w-52 rounded-full border border-[#D2B87C]/10" />

                <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                    <div className="max-w-4xl">
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#D2B87C]" />

                            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                Electrical &amp; Electronics Engineering
                            </p>
                        </div>

                        <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                            Newsletters &amp;
                            <span className="block text-[#D2B87C]">
                                magazines.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                            Explore departmental publications that capture academic
                            activities, achievements, events and important developments from
                            the Electrical and Electronics Engineering department.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a
                                href="#publications"
                                className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
                            >
                                Explore Publications
                                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>

                            <Link
                                href="/department/electrical-and-electronics-engineering/downloads"
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#D2B87C]/60 hover:text-[#D2B87C]"
                            >
                                Back to Downloads
                                <ArrowLeft className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Information Strip */}
                <div className="border-t border-white/10 bg-white/[0.03]">
                    <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-3">
                        <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                Department
                            </p>

                            <p className="mt-2 font-serif text-lg text-white">
                                Electrical &amp; Electronics
                            </p>
                        </div>

                        <div className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-10 lg:px-16">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                Resource Type
                            </p>

                            <p className="mt-2 font-serif text-lg text-white">
                                Publications
                            </p>
                        </div>

                        <div className="px-6 py-5 sm:px-10 lg:px-16">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                Collection
                            </p>

                            <p className="mt-2 font-serif text-lg text-white">
                                Newsletters &amp; Magazines
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Department Navigation */}
            <InnerHeader />

            <main className="bg-[#FAF7F2]">
                {/* =========================================================
            INTRODUCTION
        ========================================================= */}
                <section className="border-b border-[#1E1917]/10">
                    <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-16 lg:py-24">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    Department Publications
                                </p>
                            </div>

                            <h2 className="max-w-3xl font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                A record of
                                <span className="text-[#8F7746]">
                                    {" "}
                                    departmental life.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#1E1917]/70 sm:text-base">
                                Department newsletters and magazines provide a window into the
                                academic and professional life of the department. They bring
                                together activities, accomplishments, events and important
                                updates in one accessible collection.
                            </p>
                        </div>

                        {/* Publication Highlights */}
                        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                            <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                            Format
                                        </p>

                                        <p className="mt-3 font-serif text-xl text-[#20235A]">
                                            Digital Publications
                                        </p>
                                    </div>

                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F2EFE8] text-[#20235A]">
                                        <Newspaper className="h-5 w-5" />
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                            Content
                                        </p>

                                        <p className="mt-3 font-serif text-xl text-[#20235A]">
                                            Academic &amp; Departmental
                                        </p>
                                    </div>

                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F2EFE8] text-[#20235A]">
                                        <BookOpen className="h-5 w-5" />
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                            Access
                                        </p>

                                        <p className="mt-3 font-serif text-xl text-[#20235A]">
                                            Download &amp; Read
                                        </p>
                                    </div>

                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F2EFE8] text-[#20235A]">
                                        <Download className="h-5 w-5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            PUBLICATIONS
        ========================================================= */}
                <section id="publications" className="bg-white">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="flex flex-col gap-5 border-b border-[#1E1917]/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        Publication Archive
                                    </p>
                                </div>

                                <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Newsletters &amp;
                                    <span className="text-[#8F7746]">
                                        {" "}
                                        magazines.
                                    </span>
                                </h2>
                            </div>

                            {publicationItems.length > 0 && (
                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1E1917]/40">
                                    {String(publicationItems.length).padStart(2, "0")}{" "}
                                    Publications
                                </p>
                            )}
                        </div>

                        {publicationItems.length > 0 ? (
                            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                                {publicationItems.map((publication) => (
                                    <PublicationCard
                                        key={`${publication.number}-${publication.title}`}
                                        publication={publication}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="mt-12 rounded-[2rem] border border-[#1E1917]/10 bg-[#FAF7F2] p-8 sm:p-12 lg:p-16">
                                <div className="mx-auto max-w-2xl text-center">
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C]">
                                        <FileText
                                            className="h-7 w-7"
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                        Publication Archive
                                    </p>

                                    <h3 className="mt-3 font-serif text-2xl text-[#20235A] sm:text-3xl">
                                        Publications will appear here.
                                    </h3>

                                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#1E1917]/65 sm:text-base">
                                        Add the department newsletter and magazine documents to the
                                        publication archive to make them available for viewing and
                                        download.
                                    </p>

                                    <div className="mt-7 flex flex-wrap justify-center gap-3">
                                        <Link
                                            href="/department/electrical-and-electronics-engineering/downloads"
                                            className="inline-flex items-center gap-2 rounded-full bg-[#20235A] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
                                        >
                                            Back to Downloads
                                            <ArrowLeft className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* =========================================================
            ABOUT PUBLICATIONS
        ========================================================= */}
                <section className="bg-[#F2EFE8]">
                    <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-16 lg:py-24">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8F7746]">
                                    About the Collection
                                </p>
                            </div>

                            <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                Capturing ideas,
                                <span className="block text-[#8F7746]">
                                    activities &amp; achievements.
                                </span>
                            </h2>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6 sm:p-7">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    01
                                </p>

                                <h3 className="mt-4 font-serif text-xl text-[#20235A]">
                                    Academic Activities
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[#1E1917]/65">
                                    Publications can highlight academic programmes, learning
                                    activities and departmental initiatives.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6 sm:p-7">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    02
                                </p>

                                <h3 className="mt-4 font-serif text-xl text-[#20235A]">
                                    Student Achievements
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[#1E1917]/65">
                                    Newsletters and magazines provide a platform to record
                                    student accomplishments and participation.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6 sm:p-7">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    03
                                </p>

                                <h3 className="mt-4 font-serif text-xl text-[#20235A]">
                                    Department Events
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[#1E1917]/65">
                                    Important events, programmes and activities can be preserved
                                    as part of the department&apos;s publication archive.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-[#1E1917]/10 bg-white p-6 sm:p-7">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                                    04
                                </p>

                                <h3 className="mt-4 font-serif text-xl text-[#20235A]">
                                    Department Updates
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-[#1E1917]/65">
                                    A publication archive makes departmental updates easier to
                                    discover and revisit.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
            CLOSING CTA
        ========================================================= */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Department Resources
                                    </p>
                                </div>

                                <h2 className="max-w-3xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                                    Explore more departmental resources.
                                </h2>

                                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                                    Return to the downloads section to explore circulars,
                                    notifications and other departmental resources.
                                </p>
                            </div>

                            <Link
                                href="/department/electrical-and-electronics-engineering/downloads"
                                className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#D2B87C] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A] transition-all duration-300 hover:bg-white"
                            >
                                Back to Downloads
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}

/* =========================================================
   PUBLICATION CARD
========================================================= */

function PublicationCard({
    publication,
}: {
    publication: Publication;
}) {
    return (
        <Link
            href={publication.href}
            className="group relative overflow-hidden rounded-[2rem] border border-[#1E1917]/10 bg-[#FAF7F2] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/70 hover:shadow-xl sm:p-8"
        >
            {/* Decorative circle */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border border-[#D2B87C]/20 transition-transform duration-500 group-hover:scale-110" />

            <div className="relative">
                <div className="flex items-start justify-between gap-5">
                    <div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F7746]">
                            {publication.number}
                        </span>

                        {publication.year && (
                            <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#1E1917]/40">
                                {publication.year}
                            </p>
                        )}
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20235A] text-[#D2B87C] transition-all duration-300 group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                        {publication.type === "Magazine" ? (
                            <BookOpen className="h-6 w-6" strokeWidth={1.6} />
                        ) : (
                            <Newspaper className="h-6 w-6" strokeWidth={1.6} />
                        )}
                    </div>
                </div>

                <div className="mt-8 h-px w-10 bg-[#D2B87C] transition-all duration-300 group-hover:w-16" />

                <h3 className="mt-5 font-serif text-2xl leading-tight text-[#20235A]">
                    {publication.title}
                </h3>

                <p className="mt-4 min-h-[72px] text-sm leading-6 text-[#1E1917]/65">
                    {publication.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-[#1E1917]/10 pt-5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F7746]">
                        Open Publication
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1E1917]/10 text-[#20235A] transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C]">
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                </div>
            </div>
        </Link>
    );
}