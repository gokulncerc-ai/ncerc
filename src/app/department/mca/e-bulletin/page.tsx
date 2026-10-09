"use client";

import React, { useState } from "react";
import {
    ArrowUpRight,
    BookOpen,
    CalendarDays,
    ChevronRight,
    FileText,
    X,
} from "lucide-react";
import FooterSection from "@/components/home/FooterSection";
import McaNavigation from "../../mca/mcanavigation/page";
import Faq from "../../mca/faq/page";
import SiteHeader from "@/components/header/SiteHeader";

const bulletins = [
    {
        id: "01",
        issue: "Issue 01",
        title: "MCA Department E-Bulletin",
        period: "Academic Highlights",
        description:
            "A digital collection of academic activities, student initiatives, technical engagements and important moments from the Department of Computer Applications.",
        image:
            "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=85",
    },
    {
        id: "02",
        issue: "Issue 02",
        title: "Technology & Learning",
        period: "Student Edition",
        description:
            "A curated bulletin highlighting learning experiences, technology-oriented activities, student participation and department initiatives.",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    },
    {
        id: "03",
        issue: "Issue 03",
        title: "Beyond The Classroom",
        period: "Department Activities",
        description:
            "A visual record of events, seminars, technical activities and collaborative experiences that extend learning beyond the classroom.",
        image:
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85",
    },
];

const highlights = [
    {
        number: "01",
        title: "Academic Activities",
        text: "Highlights from classroom learning, seminars, workshops and academic initiatives.",
    },
    {
        number: "02",
        title: "Student Participation",
        text: "A glimpse into student involvement, collaboration and department activities.",
    },
    {
        number: "03",
        title: "Technical Engagement",
        text: "Technology-focused sessions and experiences that connect students with current computing practices.",
    },
    {
        number: "04",
        title: "Department Updates",
        text: "Important moments, announcements and developments from the MCA department.",
    },
];

const Page = () => {
    const [activeBulletin, setActiveBulletin] = useState<number | null>(null);

    return (
        <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">
            <SiteHeader />
            {/* HERO */}
            <section className="relative overflow-hidden bg-[#20235A] text-white">
                <div className="absolute right-[-10%] top-[-30%] h-[480px] w-[480px] rounded-full border border-[#D2B87C]/10" />
                <div className="absolute bottom-[-35%] left-[-10%] h-[400px] w-[400px] rounded-full border border-white/5" />

                <div className="relative mx-auto grid min-h-[500px] max-w-[1440px] items-center gap-10 px-6 py-14 sm:px-10 sm:py-16 lg:grid-cols-[1fr_0.82fr] lg:gap-14 lg:px-16 lg:py-16 xl:min-h-[540px]">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-[#D2B87C]" />

                            <span className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#D2B87C]">
                                MCA Department
                            </span>
                        </div>

                        <h1 className="mt-5 max-w-3xl font-serif text-[46px] leading-[0.98] tracking-[-0.035em] sm:text-[58px] lg:text-[70px] xl:text-[76px]">
                            Ideas,
                            <span className="block text-[#D2B87C]">
                                captured.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-[14px] leading-7 text-white/70 sm:text-[16px]">
                            The MCA E-Bulletin brings together academic
                            activities, student experiences, technical
                            engagements and important moments from the
                            Department of Computer Applications.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <div className="border border-white/15 px-5 py-3">
                                <p className="font-serif text-[25px] text-[#D2B87C]">
                                    03
                                </p>
                                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-white/50">
                                    Featured Issues
                                </p>
                            </div>

                            <div className="border border-white/15 px-5 py-3">
                                <p className="font-serif text-[25px] text-[#D2B87C]">
                                    MCA
                                </p>
                                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-white/50">
                                    Digital Publication
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Publication visual */}
                    <div className="relative mx-auto w-full max-w-[420px]">
                        <div className="relative border border-white/10 bg-white/[0.03] p-4">
                            <div className="aspect-[4/5] overflow-hidden bg-[#181B4A]">
                                <img
                                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85"
                                    alt="Academic publication"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-5 -left-5 border border-[#D2B87C]/40 bg-[#20235A] px-5 py-4">
                                <p className="font-serif text-[24px] text-[#D2B87C]">
                                    E-Bulletin
                                </p>

                                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-white/50">
                                    Read · Reflect · Explore
                                </p>
                            </div>

                            <div className="absolute right-7 top-7 flex h-11 w-11 items-center justify-center border border-white/20 bg-[#20235A]/80 text-[#D2B87C]">
                                <BookOpen size={18} strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <McaNavigation />

            {/* INTRODUCTION */}
            <section className="bg-white">
                <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                                    About The Bulletin
                                </span>
                            </div>

                            <h2 className="mt-4 max-w-md font-serif text-[38px] leading-[1.03] tracking-[-0.03em] text-[#20235A] sm:text-[46px] lg:text-[52px]">
                                A digital record of department life.
                            </h2>
                        </div>

                        <div className="max-w-3xl">
                            <p className="text-[15px] leading-8 text-[#1E1917]/70 sm:text-[16px]">
                                The E-Bulletin is designed as a digital space
                                for bringing together the academic and
                                co-curricular experiences of the MCA
                                department. It provides a concise view of
                                activities, student participation, technical
                                engagements and noteworthy moments.
                            </p>

                            <p className="mt-5 text-[15px] leading-8 text-[#1E1917]/60 sm:text-[16px]">
                                More than an archive, the bulletin creates a
                                continuing record of the department community
                                and the experiences that contribute to student
                                learning and development.
                            </p>

                            <div className="mt-8 flex items-center gap-4 border-t border-[#20235A]/10 pt-5">
                                <CalendarDays
                                    size={18}
                                    strokeWidth={1.5}
                                    className="text-[#8F7746]"
                                />

                                <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#1E1917]/45">
                                    Academic · Technical · Student Life
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED BULLETIN */}
            <section className="bg-[#F2EFE8]">
                <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                    <div className="flex flex-col justify-between gap-5 border-b border-[#20235A]/10 pb-7 sm:flex-row sm:items-end">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                                    Featured Publication
                                </span>
                            </div>

                            <h2 className="mt-4 font-serif text-[38px] leading-[1.03] tracking-[-0.03em] text-[#20235A] sm:text-[46px]">
                                Latest from the department.
                            </h2>
                        </div>

                        <span className="text-[9px] uppercase tracking-[0.18em] text-[#1E1917]/45">
                            E-Bulletin Archive
                        </span>
                    </div>

                    <div className="mt-8 grid overflow-hidden border border-[#20235A]/10 bg-white lg:grid-cols-[1.05fr_0.95fr]">
                        <button
                            type="button"
                            onClick={() => setActiveBulletin(0)}
                            className="group relative block min-h-[320px] overflow-hidden text-left focus:outline-none sm:min-h-[400px]"
                        >
                            <img
                                src={bulletins[0].image}
                                alt={bulletins[0].title}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />

                            <div className="absolute inset-0 bg-[#20235A]/25 transition-colors duration-500 group-hover:bg-[#20235A]/40" />

                            <div className="absolute bottom-6 left-6 border border-white/20 bg-[#20235A]/90 px-5 py-4 sm:bottom-8 sm:left-8">
                                <p className="font-serif text-[25px] text-[#D2B87C]">
                                    Issue 01
                                </p>

                                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-white/55">
                                    Featured Edition
                                </p>
                            </div>
                        </button>

                        <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                Featured Issue
                            </span>

                            <h3 className="mt-4 max-w-xl font-serif text-[34px] leading-[1.04] tracking-[-0.03em] text-[#20235A] sm:text-[42px]">
                                {bulletins[0].title}
                            </h3>

                            <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.16em] text-[#8F7746]">
                                {bulletins[0].period}
                            </p>

                            <p className="mt-5 max-w-xl text-[14px] leading-7 text-[#1E1917]/60 sm:text-[15px]">
                                {bulletins[0].description}
                            </p>

                            <button
                                type="button"
                                onClick={() => setActiveBulletin(0)}
                                className="mt-7 flex w-fit items-center gap-3 border border-[#20235A] bg-[#20235A] px-5 py-3 text-[9px] font-medium uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
                            >
                                Explore Issue
                                <ArrowUpRight size={14} strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ISSUE ARCHIVE */}
            {/* <section className="bg-white">
                <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                    <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                                    Bulletin Archive
                                </span>
                            </div>

                            <h2 className="mt-4 max-w-md font-serif text-[38px] leading-[1.03] tracking-[-0.03em] text-[#20235A] sm:text-[46px]">
                                Explore the collection.
                            </h2>

                            <p className="mt-5 max-w-md text-[14px] leading-7 text-[#1E1917]/60">
                                Browse selected editions and discover the
                                activities, ideas and experiences captured
                                through the department bulletin.
                            </p>
                        </div>

                        <div className="border-t border-[#20235A]/10">
                            {bulletins.map((bulletin, index) => (
                                <article
                                    key={bulletin.id}
                                    className="group grid gap-5 border-b border-[#20235A]/10 py-6 sm:grid-cols-[90px_180px_1fr_auto] sm:items-center sm:gap-6"
                                >
                                    <span className="font-serif text-[22px] text-[#D2B87C]">
                                        {bulletin.id}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setActiveBulletin(index)
                                        }
                                        className="aspect-[4/3] overflow-hidden bg-[#F2EFE8] focus:outline-none"
                                    >
                                        <img
                                            src={bulletin.image}
                                            alt={bulletin.title}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                        />
                                    </button>

                                    <div>
                                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#8F7746]">
                                            {bulletin.issue}
                                        </p>

                                        <h3 className="mt-2 font-serif text-[23px] leading-tight tracking-[-0.02em] text-[#20235A]">
                                            {bulletin.title}
                                        </h3>

                                        <p className="mt-2 text-[13px] leading-6 text-[#1E1917]/55">
                                            {bulletin.description}
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setActiveBulletin(index)
                                        }
                                        className="flex h-10 w-10 items-center justify-center border border-[#20235A]/10 text-[#20235A]/60 transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#20235A] hover:text-[#D2B87C]"
                                        aria-label={`Open ${bulletin.title}`}
                                    >
                                        <ChevronRight
                                            size={17}
                                            strokeWidth={1.5}
                                        />
                                    </button>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section> */}

            {/* HIGHLIGHTS */}
            <section className="bg-[#20235A] text-white">
                <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#D2B87C]">
                                    What It Covers
                                </span>
                            </div>

                            <h2 className="mt-4 max-w-md font-serif text-[38px] leading-[1.03] tracking-[-0.03em] sm:text-[46px] lg:text-[52px]">
                                More than a publication.
                            </h2>

                            <p className="mt-5 max-w-md text-[14px] leading-7 text-white/60">
                                Each bulletin can become a snapshot of the
                                academic and student experiences that shape
                                the MCA community.
                            </p>
                        </div>

                        <div className="grid border-t border-white/10 sm:grid-cols-2">
                            {highlights.map((highlight) => (
                                <article
                                    key={highlight.number}
                                    className="border-b border-white/10 p-6 sm:p-7"
                                >
                                    <span className="font-serif text-[21px] text-[#D2B87C]">
                                        {highlight.number}
                                    </span>

                                    <h3 className="mt-8 font-serif text-[24px] tracking-[-0.02em] text-white">
                                        {highlight.title}
                                    </h3>

                                    <p className="mt-3 text-[13px] leading-7 text-white/55">
                                        {highlight.text}
                                    </p>

                                    <div className="mt-6 h-px w-8 bg-[#D2B87C]" />
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CLOSING */}
            <section className="bg-[#F2EFE8]">
                <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
                    <div className="grid gap-8 border-t border-[#20235A]/10 pt-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
                        <div>
                            <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8F7746]">
                                MCA E-Bulletin
                            </span>
                        </div>

                        <div>
                            <h2 className="max-w-3xl font-serif text-[36px] leading-[1.04] tracking-[-0.03em] text-[#20235A] sm:text-[46px]">
                                Every issue captures another chapter of
                                learning.
                            </h2>

                            <div className="mt-6 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-[9px] uppercase tracking-[0.18em] text-[#1E1917]/45">
                                    Department of Computer Applications
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BULLETIN PREVIEW MODAL */}
            {activeBulletin !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#12142F]/90 p-4 backdrop-blur-sm sm:p-6"
                    onClick={() => setActiveBulletin(null)}
                >
                    <div
                        className="relative w-full max-w-5xl overflow-hidden bg-[#FAF7F2]"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setActiveBulletin(null)}
                            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border border-white/20 bg-[#20235A] text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
                            aria-label="Close bulletin preview"
                        >
                            <X size={18} strokeWidth={1.5} />
                        </button>

                        <div className="grid max-h-[88vh] overflow-y-auto lg:grid-cols-[0.9fr_1.1fr]">
                            <div className="min-h-[280px] bg-[#20235A] lg:min-h-[600px]">
                                <img
                                    src={bulletins[activeBulletin].image}
                                    alt={bulletins[activeBulletin].title}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                                <div className="flex items-center gap-3">
                                    <FileText
                                        size={17}
                                        strokeWidth={1.5}
                                        className="text-[#8F7746]"
                                    />

                                    <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                        {bulletins[activeBulletin].issue}
                                    </span>
                                </div>

                                <h3 className="mt-5 font-serif text-[34px] leading-[1.05] tracking-[-0.03em] text-[#20235A] sm:text-[44px]">
                                    {bulletins[activeBulletin].title}
                                </h3>

                                <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.16em] text-[#8F7746]">
                                    {bulletins[activeBulletin].period}
                                </p>

                                <p className="mt-6 text-[14px] leading-7 text-[#1E1917]/65 sm:text-[15px]">
                                    {bulletins[activeBulletin].description}
                                </p>

                                <div className="mt-8 border-t border-[#20235A]/10 pt-5">
                                    <p className="text-[9px] uppercase tracking-[0.18em] text-[#1E1917]/40">
                                        Department of Computer Applications
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Faq />
            <FooterSection />
        </main>
    );
};

export default Page;