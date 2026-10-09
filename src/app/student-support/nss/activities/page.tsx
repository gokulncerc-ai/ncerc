"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import {
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    CalendarDays,
    HeartHandshake,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const activities = [
    {
        id: 813,
        title: "HAIR DONATION_ CERTIFICATE OF APPRECIATION",
        date: "August 31, 2024",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/1725511045.jpeg",
        link: "https://ncerc.ac.in/nss/news/813",
    },
    {
        id: 811,
        title: "RUDRASENA ORIENTATION",
        date: "August 24, 2024",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/1725510735.jpeg",
        link: "https://ncerc.ac.in/nss/news/811",
    },
    {
        id: 812,
        title: "ORIENTATION",
        date: "August 24, 2024",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/1725510829.jpeg",
        link: "https://ncerc.ac.in/nss/news/812",
    },
    {
        id: 806,
        title: "Special Appreciation Award_ most blood donation camps",
        date: "August 21, 2024",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/1724395019.jpeg",
        link: "https://ncerc.ac.in/nss/news/806",
    },
    {
        id: 810,
        title: "World Mosquito Day",
        date: "August 20, 2024",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/1725510579.jpeg",
        link: "https://ncerc.ac.in/nss/news/810",
    },
    {
        id: 803,
        title: "78th Independence Day celebration",
        date: "August 15, 2024",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/1724394514.jpeg",
        link: "https://ncerc.ac.in/nss/news/803",
    },
    {
        id: 802,
        title: "ANTI-DRUG PLEDGE",
        date: "August 12, 2024",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/1724394397.jpeg",
        link: "https://ncerc.ac.in/nss/news/802",
    },
    {
        id: 801,
        title: "DIGI KERALAM",
        date: "August 10, 2024",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/1724394330.jpeg",
        link: "https://ncerc.ac.in/nss/news/801",
    },
    {
        id: 800,
        title: "AUG 09 _ Hiroshima and Nagasaki Day",
        date: "August 09, 2024",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/1724394293.jpeg",
        link: "https://ncerc.ac.in/nss/news/800",
    },
    {
        id: 799,
        title: "Digi Kerala App",
        date: "August 08, 2024",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/1724394243.jpeg",
        link: "https://ncerc.ac.in/nss/news/799",
    },
    {
        id: 804,
        title: "State Level Award _Most Number of Blood Donation Camps",
        date: "July 11, 2024",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/1724394667.jpg",
        link: "https://ncerc.ac.in/nss/news/804",
    },
    {
        id: 805,
        title: "AJIN RAJU T _ RUDHIRASENA State Award 2023-24",
        date: "July 11, 2024",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/1724394931.jpg",
        link: "https://ncerc.ac.in/nss/news/805",
    },
    {
        id: 777,
        title: "MAY 12 _ Mother's Day",
        date: "May 12, 2024",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/1715760796.jpeg",
        link: "https://ncerc.ac.in/nss/news/777",
    },
    {
        id: 778,
        title: "May 12 _ Mathruthwathinte Thanal - Mother's day",
        date: "May 12, 2024",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/1715760860.jpeg",
        link: "https://ncerc.ac.in/nss/news/778",
    },
    {
        id: 779,
        title: "MAY 12 _ International Nurses Day",
        date: "May 12, 2024",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/1715760897.jpeg",
        link: "https://ncerc.ac.in/nss/news/779",
    },
    {
        id: 776,
        title: "MAY 01_ HAPPY LABOURS DAY",
        date: "May 01, 2024",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/1715760761.jpeg",
        link: "https://ncerc.ac.in/nss/news/776",
    },
    {
        id: 775,
        title:
            '"Drug Laws and Punishment" and "Psychosocial Interventions for the Prevention of Drug Abuse"',
        date: "April 29, 2024",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/1715760549.jpeg",
        link: "https://ncerc.ac.in/nss/news/775",
    },
    {
        id: 774,
        title: "APR 22 _ World Earth Day",
        date: "April 22, 2024",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/1715760510.jpeg",
        link: "https://ncerc.ac.in/nss/news/774",
    },
];

const ITEMS_PER_PAGE = 6;

const page = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(activities.length / ITEMS_PER_PAGE);

    const currentActivities = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

        return activities.slice(
            startIndex,
            startIndex + ITEMS_PER_PAGE
        );
    }, [currentPage]);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const featuredActivity = currentActivities[0];
    const remainingActivities = currentActivities.slice(1);

    return (
        <>
            <main className="min-h-screen bg-[#faf7f2] text-[#1E1917]">
                <SiteHeader />

                {/* =====================================================
                    HERO
                ====================================================== */}
                <section className="relative overflow-hidden bg-[#20235A]">
                    <div className="pointer-events-none absolute right-[-180px] top-[-220px] h-[520px] w-[520px] rounded-full border border-[#D2B87C]/10" />

                    <div className="pointer-events-none absolute bottom-[-260px] left-[-180px] h-[480px] w-[480px] rounded-full border border-white/[0.04]" />

                    <div className="relative mx-auto max-w-8xl px-6 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-24 lg:px-12 lg:pb-28 lg:pt-28">
                        <div className="grid gap-12 lg:grid-cols-[1fr_0.65fr] lg:items-end">
                            <div>
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                        National Service Scheme
                                    </span>
                                </div>

                                <h1 className="max-w-4xl font-serif text-[43px] leading-[1.08] text-white sm:text-[58px] lg:text-[64px]">
                                    NSS
                                    <span className="block text-[#D2B87C]">
                                        Activities
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                                    Explore the initiatives, awareness programmes,
                                    community activities, celebrations and achievements
                                    carried out through the National Service Scheme at
                                    NCERC.
                                </p>
                            </div>

                            <div className="lg:justify-self-end">
                                <div className="border-l border-white/10 pl-6 lg:max-w-xs">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                                        Community Engagement
                                    </p>

                                    <p className="mt-4 font-serif text-2xl leading-tight text-white">
                                        Learning beyond the classroom through service.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/10">
                        <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
                            <span className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                                Nehru College of Engineering and Research Centre
                            </span>

                            <span className="hidden text-[10px] uppercase tracking-[0.22em] text-[#D2B87C]/70 sm:block">
                                NSS • Activities
                            </span>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section className="bg-[#faf7f2]">
                    <div className="mx-auto max-w-8xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                        <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:gap-20">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-9 bg-[#D2B87C]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#20235A]/60">
                                        Activities
                                    </span>
                                </div>

                                <h2 className="mt-5 max-w-md font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                    Service,
                                    <span className="block text-[#20235A]/50">
                                        participation & impact.
                                    </span>
                                </h2>
                            </div>

                            <div className="lg:border-l lg:border-[#20235A]/10 lg:pl-12">
                                <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                                    The NSS activities at NCERC encourage students to
                                    actively participate in social awareness, community
                                    service, national observances and initiatives that
                                    create a positive impact beyond the campus.
                                </p>

                                <div className="mt-7 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D2B87C]/40 bg-white">
                                        <HeartHandshake
                                            size={18}
                                            strokeWidth={1.5}
                                            className="text-[#20235A]"
                                        />
                                    </div>

                                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A]/70">
                                        Community • Service • Responsibility
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    ACTIVITY LISTING
                ====================================================== */}
                <section className="border-y border-[#20235A]/10 bg-white">
                    <div className="mx-auto max-w-8xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                        {/* Section heading */}
                        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-9 bg-[#D2B87C]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#20235A]/60">
                                        Recent Initiatives
                                    </span>
                                </div>

                                <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                    NSS Activity Archive
                                </h2>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="font-serif text-3xl text-[#20235A]">
                                    {String(activities.length).padStart(2, "0")}
                                </span>

                                <span className="max-w-[120px] text-[10px] font-semibold uppercase leading-5 tracking-[0.18em] text-slate-400">
                                    Activities listed
                                </span>
                            </div>
                        </div>

                        {/* =================================================
                            FEATURED ACTIVITY
                        ================================================== */}
                        {featuredActivity && (
                            <Link
                                href={featuredActivity.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group mb-5 grid overflow-hidden rounded-2xl border border-[#20235A]/10 bg-[#faf7f2] lg:grid-cols-[1.15fr_0.85fr]"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/8] lg:aspect-auto lg:min-h-[390px]">
                                    <Image
                                        src={featuredActivity.image}
                                        alt={featuredActivity.title}
                                        fill
                                        unoptimized
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 65vw"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/60 via-transparent to-transparent" />

                                    <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#20235A]/70 px-3 py-2 backdrop-blur-sm">
                                        <CalendarDays
                                            size={13}
                                            strokeWidth={1.6}
                                            className="text-[#D2B87C]"
                                        />

                                        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80">
                                            {featuredActivity.date}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                        Featured Activity
                                    </span>

                                    <h3 className="mt-5 font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                                        {featuredActivity.title}
                                    </h3>

                                    <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
                                        Discover the latest NSS initiative and the
                                        contribution of the NCERC community.
                                    </p>

                                    <div className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A]">
                                        Read Activity
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#20235A]/15 transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C]">
                                            <ArrowUpRight
                                                size={14}
                                                strokeWidth={1.7}
                                            />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        )}

                        {/* =================================================
                            ACTIVITY GRID
                        ================================================== */}
                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {remainingActivities.map((activity, index) => (
                                <Link
                                    key={activity.id}
                                    href={activity.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group overflow-hidden rounded-2xl border border-[#20235A]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/50 hover:shadow-xl hover:shadow-[#20235A]/5"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-[#f2efe8]">
                                        <Image
                                            src={activity.image}
                                            alt={activity.title}
                                            fill
                                            unoptimized
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />

                                        <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-[#20235A]/70 backdrop-blur-sm">
                                            <span className="font-serif text-sm text-[#D2B87C]">
                                                {String(index + 2).padStart(2, "0")}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center gap-2">
                                            <CalendarDays
                                                size={13}
                                                strokeWidth={1.6}
                                                className="text-[#8F7746]"
                                            />

                                            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                                                {activity.date}
                                            </span>
                                        </div>

                                        <h3 className="mt-4 font-serif text-xl leading-snug text-[#20235A]">
                                            {activity.title}
                                        </h3>

                                        <div className="mt-6 flex items-center justify-between border-t border-[#20235A]/10 pt-5">
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                                                By NCERC
                                            </span>

                                            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#20235A]/10 text-[#20235A] transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C]">
                                                <ArrowUpRight
                                                    size={14}
                                                    strokeWidth={1.7}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* =================================================
                            PAGINATION
                        ================================================== */}
                        {totalPages > 1 && (
                            <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-[#20235A]/10 pt-8 sm:flex-row">
                                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                                    Page{" "}
                                    <span className="font-semibold text-[#20235A]">
                                        {currentPage}
                                    </span>{" "}
                                    of{" "}
                                    <span className="font-semibold text-[#20235A]">
                                        {totalPages}
                                    </span>
                                </p>

                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handlePageChange(
                                                Math.max(1, currentPage - 1)
                                            )
                                        }
                                        disabled={currentPage === 1}
                                        aria-label="Previous page"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#20235A]/15 text-[#20235A] transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] disabled:pointer-events-none disabled:opacity-30"
                                    >
                                        <ChevronLeft
                                            size={17}
                                            strokeWidth={1.7}
                                        />
                                    </button>

                                    {Array.from(
                                        { length: totalPages },
                                        (_, index) => index + 1
                                    ).map((pageNumber) => (
                                        <button
                                            key={pageNumber}
                                            type="button"
                                            onClick={() =>
                                                handlePageChange(pageNumber)
                                            }
                                            aria-label={`Go to page ${pageNumber}`}
                                            aria-current={
                                                currentPage === pageNumber
                                                    ? "page"
                                                    : undefined
                                            }
                                            className={`flex h-10 min-w-10 items-center justify-center rounded-full border px-3 text-xs font-semibold transition-all duration-300 ${currentPage === pageNumber
                                                    ? "border-[#20235A] bg-[#20235A] text-white"
                                                    : "border-[#20235A]/10 bg-white text-[#20235A] hover:border-[#D2B87C] hover:bg-[#D2B87C]"
                                                }`}
                                        >
                                            {String(pageNumber).padStart(2, "0")}
                                        </button>
                                    ))}

                                    <button
                                        type="button"
                                        onClick={() =>
                                            handlePageChange(
                                                Math.min(
                                                    totalPages,
                                                    currentPage + 1
                                                )
                                            )
                                        }
                                        disabled={currentPage === totalPages}
                                        aria-label="Next page"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#20235A]/15 text-[#20235A] transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] disabled:pointer-events-none disabled:opacity-30"
                                    >
                                        <ChevronRight
                                            size={17}
                                            strokeWidth={1.7}
                                        />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* =====================================================
                    CLOSING CTA
                ====================================================== */}
                {/* <section className="bg-[#faf7f2]">
                    <div className="mx-auto max-w-8xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                        <div className="relative overflow-hidden rounded-3xl bg-[#20235A] px-7 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
                            <div className="pointer-events-none absolute right-[-100px] top-[-140px] h-[320px] w-[320px] rounded-full border border-[#D2B87C]/10" />

                            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                                <div>
                                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                        National Service Scheme
                                    </span>

                                    <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                                        Every activity is an opportunity to serve,
                                        learn and make a difference.
                                    </h2>

                                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55">
                                        Through NSS, students participate in meaningful
                                        initiatives that connect education with
                                        responsibility towards society.
                                    </p>
                                </div>

                                <Link
                                    href="/nss"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D2B87C] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#D2B87C]/10"
                                >
                                    About NSS
                                    <ArrowUpRight
                                        size={15}
                                        strokeWidth={1.8}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section> */}

                <FooterSection />
            </main>
        </>
    );
};

export default page;