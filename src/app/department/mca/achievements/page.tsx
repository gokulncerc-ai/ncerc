"use client";

import React, { useState } from "react";
import {
    ArrowUpRight,
    Award,
    ChevronLeft,
    ChevronRight,
    X,
} from "lucide-react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import McaNavigation from "../../mca/mcanavigation/page";
import Faq from "../../mca/faq/page";

const achievements = [
    {
        id: "01",
        title: "NeCTAR",
        category: "Department Achievement",
        image:
            "https://ncerc.ac.in/images/dpt/mca/acheivements/MCA-NeCTAR.jpg",
    },
    {
        id: "02",
        title: "ODK College Achievement",
        category: "Department Recognition",
        image:
            "https://ncerc.ac.in/images/dpt/mca/acheivements/ODK-COLLEGE-WEBSITE.jpg",
    },
];

const Page = () => {
    const [activeImage, setActiveImage] = useState<number | null>(null);

    const openImage = (index: number) => {
        setActiveImage(index);
    };

    const closeImage = () => {
        setActiveImage(null);
    };

    const showPrevious = () => {
        if (activeImage === null) return;

        setActiveImage(
            activeImage === 0 ? achievements.length - 1 : activeImage - 1
        );
    };

    const showNext = () => {
        if (activeImage === null) return;

        setActiveImage(
            activeImage === achievements.length - 1 ? 0 : activeImage + 1
        );
    };

    return (
        <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">
            <SiteHeader />

            {/* =========================================================
                HERO
            ========================================================= */}
            <section className="relative overflow-hidden bg-[#20235A] text-white">
                <div className="mx-auto grid min-h-[500px] max-w-[1440px] items-center gap-8 px-6 py-12 sm:min-h-[520px] sm:px-10 sm:py-14 lg:grid-cols-[1fr_0.55fr] lg:gap-12 lg:px-16 lg:py-14 xl:min-h-[540px]">

                    {/* Hero Content */}
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-9 bg-[#D2B87C]" />

                            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#D2B87C]">
                                MCA Department
                            </span>
                        </div>

                        <h1 className="mt-5 max-w-3xl font-serif text-[44px] leading-[0.98] tracking-[-0.035em] sm:text-[56px] lg:text-[66px] xl:text-[72px]">
                            Excellence that
                            <span className="block text-[#D2B87C]">
                                deserves recognition.
                            </span>
                        </h1>

                        <p className="mt-5 max-w-xl text-[14px] leading-7 text-white/65 sm:text-[15px] sm:leading-7">
                            A collection of department achievements and
                            recognitions that reflect moments of progress,
                            participation and excellence.
                        </p>

                        <div className="mt-7 grid max-w-xl grid-cols-2 border-t border-white/15">
                            <div className="border-r border-white/15 py-4 pr-5">
                                <div className="font-serif text-[32px] leading-none text-[#D2B87C] sm:text-[38px]">
                                    02
                                </div>

                                <p className="mt-1.5 text-[9px] uppercase tracking-[0.18em] text-white/45">
                                    Featured Records
                                </p>
                            </div>

                            <div className="py-4 pl-5">
                                <Award
                                    size={28}
                                    strokeWidth={1.2}
                                    className="text-[#D2B87C]"
                                />

                                <p className="mt-1.5 text-[9px] uppercase tracking-[0.18em] text-white/45">
                                    Recognition
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="flex justify-center lg:justify-end">
                        <button
                            type="button"
                            onClick={() => openImage(0)}
                            className="group block w-full max-w-[320px] text-left focus:outline-none sm:max-w-[340px] lg:max-w-[320px]"
                        >
                            <div className="relative overflow-hidden border border-white/15 bg-white/5">

                                <div className="aspect-[5/4]">
                                    <img
                                        src={achievements[0].image}
                                        alt={achievements[0].title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                    />
                                </div>

                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#20235A] via-[#20235A]/65 to-transparent px-4 pb-4 pt-12">
                                    <div className="flex items-end justify-between gap-3">
                                        <div>
                                            <p className="text-[8px] uppercase tracking-[0.18em] text-[#D2B87C]">
                                                Featured Achievement
                                            </p>

                                            <h2 className="mt-1.5 font-serif text-[22px] leading-tight text-white">
                                                {achievements[0].title}
                                            </h2>
                                        </div>

                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/25 text-[#D2B87C] transition-colors duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                            <ArrowUpRight
                                                size={15}
                                                strokeWidth={1.5}
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />
            </section>
            <McaNavigation />
            {/* =========================================================
                INTRO
            ========================================================= */}
            <section className="bg-white">
                <div className="mx-auto grid max-w-[1440px] gap-7 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12 lg:px-16 lg:py-16">

                    <div>
                        <div className="flex items-center gap-2">
                            <span className="h-px w-8 bg-[#D2B87C]" />

                            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                Recognition
                            </span>
                        </div>

                        <h2 className="mt-3 max-w-md font-serif text-[36px] leading-[1.03] tracking-[-0.03em] text-[#20235A] sm:text-[44px] lg:text-[50px]">
                            Recognising moments of achievement.
                        </h2>
                    </div>

                    <div className="flex items-center">
                        <p className="max-w-2xl text-[14px] leading-7 text-[#1E1917]/65 sm:text-[15px] sm:leading-7">
                            Achievements represent important milestones in
                            the academic and professional journey of a
                            department. This space presents selected
                            achievement records associated with the MCA
                            department.
                        </p>
                    </div>
                </div>
            </section>

            {/* =========================================================
                FEATURED ACHIEVEMENT
            ========================================================= */}
            <section className="bg-[#F2EFE8]">
                <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">

                    <div className="mb-7 flex items-end justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                    Featured
                                </span>
                            </div>

                            <h2 className="mt-3 font-serif text-[36px] leading-none tracking-[-0.03em] text-[#20235A] sm:text-[44px]">
                                Achievement
                            </h2>
                        </div>

                        <span className="hidden text-[10px] uppercase tracking-[0.18em] text-[#1E1917]/40 sm:block">
                            01 / 02
                        </span>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center lg:gap-12">

                        {/* Featured Image */}
                        <button
                            type="button"
                            onClick={() => openImage(0)}
                            className="group relative block w-full overflow-hidden border border-[#20235A]/10 bg-white text-left focus:outline-none"
                        >
                            <div className="aspect-[16/9]">
                                <img
                                    src={achievements[0].image}
                                    alt={achievements[0].title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                                />
                            </div>

                            <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-white/30 bg-[#20235A]/80 text-[#D2B87C] backdrop-blur-sm">
                                <ArrowUpRight
                                    size={16}
                                    strokeWidth={1.5}
                                />
                            </div>
                        </button>

                        <div>
                            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                Department Achievement
                            </span>

                            <h3 className="mt-3 font-serif text-[32px] leading-[1.05] tracking-[-0.025em] text-[#20235A] sm:text-[40px]">
                                NeCTAR
                            </h3>

                            <div className="mt-4 h-px w-14 bg-[#D2B87C]" />

                            <p className="mt-4 text-[14px] leading-7 text-[#1E1917]/60">
                                A featured achievement record from the MCA
                                department.
                            </p>

                            <button
                                type="button"
                                onClick={() => openImage(0)}
                                className="mt-6 inline-flex items-center gap-3 border border-[#20235A]/15 px-5 py-3 text-[9px] font-medium uppercase tracking-[0.17em] text-[#20235A] transition-colors duration-300 hover:border-[#20235A] hover:bg-[#20235A] hover:text-white"
                            >
                                View Achievement

                                <ArrowUpRight
                                    size={14}
                                    strokeWidth={1.5}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                ACHIEVEMENT ARCHIVE
            ========================================================= */}
            <section className="bg-white">
                <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">

                    <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">

                        <div className="lg:sticky lg:top-24 lg:self-start">
                            <div className="flex items-center gap-2">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                    Archive
                                </span>
                            </div>

                            <h2 className="mt-3 max-w-sm font-serif text-[36px] leading-[1.03] tracking-[-0.03em] text-[#20235A] sm:text-[44px]">
                                More moments of recognition.
                            </h2>

                            <p className="mt-4 max-w-sm text-[14px] leading-7 text-[#1E1917]/60">
                                Explore the available achievement record
                                associated with the MCA department.
                            </p>
                        </div>

                        <div>
                            <div className="border-t border-[#20235A]/10">
                                <button
                                    type="button"
                                    onClick={() => openImage(1)}
                                    className="group grid w-full gap-5 border-b border-[#20235A]/10 py-6 text-left sm:grid-cols-[0.85fr_1.15fr] sm:items-center sm:py-7"
                                >
                                    <div className="relative overflow-hidden border border-[#20235A]/10">
                                        <div className="aspect-[4/3]">
                                            <img
                                                src={achievements[1].image}
                                                alt={achievements[1].title}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                            />
                                        </div>

                                        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                            <ArrowUpRight
                                                size={14}
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                            {achievements[1].category}
                                        </span>

                                        <h3 className="mt-2 font-serif text-[27px] leading-tight tracking-[-0.02em] text-[#20235A] sm:text-[32px]">
                                            {achievements[1].title}
                                        </h3>

                                        <div className="mt-4 flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.16em] text-[#1E1917]/45">
                                            <span className="h-px w-8 bg-[#D2B87C]" />
                                            View record
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                RECOGNITION STATEMENT
            ========================================================= */}
            <section className="bg-[#20235A] text-white">
                <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">

                    <div className="grid gap-7 lg:grid-cols-[0.65fr_1.35fr] lg:items-center lg:gap-12">

                        <div className="flex items-center gap-4">
                            <Award
                                size={38}
                                strokeWidth={1}
                                className="text-[#D2B87C]"
                            />

                            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/45">
                                MCA Department
                            </span>
                        </div>

                        <div>
                            <h2 className="max-w-3xl font-serif text-[36px] leading-[1.02] tracking-[-0.03em] sm:text-[46px] lg:text-[54px]">
                                Every achievement
                                <span className="block text-[#D2B87C]">
                                    marks progress.
                                </span>
                            </h2>

                            <p className="mt-4 max-w-2xl text-[14px] leading-7 text-white/60 sm:text-[15px]">
                                Recognition reflects the continued pursuit of
                                academic, professional and departmental
                                excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                CLOSING
            ========================================================= */}
            <section className="bg-[#F2EFE8]">
                <div className="mx-auto max-w-[1440px] px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-14">

                    <div className="flex flex-col gap-5 border-t border-[#20235A]/10 pt-6 sm:flex-row sm:items-end sm:justify-between">

                        <div>
                            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                Looking Ahead
                            </span>

                            <h2 className="mt-2 max-w-xl font-serif text-[30px] leading-[1.05] tracking-[-0.025em] text-[#20235A] sm:text-[38px]">
                                Continuing the pursuit
                                <span className="block">
                                    of excellence.
                                </span>
                            </h2>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="h-2 w-2 bg-[#D2B87C]" />

                            <span className="text-[9px] uppercase tracking-[0.17em] text-[#1E1917]/45">
                                Department of Computer Applications
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                IMAGE LIGHTBOX
            ========================================================= */}
            {activeImage !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#11152f]/95 p-4 sm:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Achievement image viewer"
                    onClick={closeImage}
                >
                    <div
                        className="relative flex h-full w-full max-w-6xl items-center justify-center"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={closeImage}
                            aria-label="Close image viewer"
                            className="absolute right-0 top-0 z-20 flex h-10 w-10 items-center justify-center border border-white/20 bg-[#20235A] text-white transition-colors hover:border-[#D2B87C] hover:text-[#D2B87C]"
                        >
                            <X size={18} strokeWidth={1.5} />
                        </button>

                        <button
                            type="button"
                            onClick={showPrevious}
                            aria-label="Previous achievement"
                            className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-[#20235A] text-white transition-colors hover:border-[#D2B87C] hover:text-[#D2B87C] sm:-left-2"
                        >
                            <ChevronLeft
                                size={20}
                                strokeWidth={1.5}
                            />
                        </button>

                        <div className="flex max-h-[90vh] max-w-[90vw] flex-col items-center">
                            <img
                                src={achievements[activeImage].image}
                                alt={achievements[activeImage].title}
                                className="max-h-[78vh] max-w-full object-contain"
                            />

                            <div className="mt-4 text-center">
                                <p className="text-[9px] uppercase tracking-[0.2em] text-[#D2B87C]">
                                    {achievements[activeImage].category}
                                </p>

                                <h3 className="mt-2 font-serif text-[24px] text-white">
                                    {achievements[activeImage].title}
                                </h3>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={showNext}
                            aria-label="Next achievement"
                            className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-[#20235A] text-white transition-colors hover:border-[#D2B87C] hover:text-[#D2B87C] sm:-right-2"
                        >
                            <ChevronRight
                                size={20}
                                strokeWidth={1.5}
                            />
                        </button>
                    </div>
                </div>
            )}
            <Faq />
            <FooterSection />
        </main>
    );
};

export default Page;
