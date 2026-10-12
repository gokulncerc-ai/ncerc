"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowUpRight,
    CalendarDays,
    ChevronLeft,
    ChevronRight,
    Newspaper,
    Search,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

type NewsItem = {
    id: string;
    date: string;
    category: string;
    title: string;
    image: string;
    href: string;
};

const newsItems: NewsItem[] = [
    {
        id: "871",
        date: "September 10, 2026",
        category: "Campus News",
        title:
            "GREENOVA 2026 Conclave Held at Nehru College of Engineering & Research Centre",
        image: "/images/media-gallery/Greenova.webp",
        href: "/news/871",
    },
    {
        id: "870",
        date: "September 09, 2026",
        category: "Innovation",
        title: "Smart India Hackathon 2026",
        image: "/images/media-gallery/hackathon.webp",
        href: "/news/870",
    },
    {
        id: "864",
        date: "July 31, 2026",
        category: "Workshop",
        title: "3-Day AI Accelerate Boot Camp by BSERC",
        image:
            "/images/media-gallery/induction.webp",
        href: "/news/864",
    },
    {
        id: "868",
        date: "July 24, 2026",
        category: "Academic",
        title:
            "Graduation Day Ceremony Celebrates Academic Excellence at NCERC",
        image: "/images/media-gallery/Graduation.webp",
        href: "/news/868",
    },
    {
        id: "867",
        date: "July 22, 2026",
        category: "Campus Life",
        title:
            "NCERC (Autonomous) proudly hosted Operation Thoofan and Welcome Freshers with Induction Ceremony 2026",
        image: "/images/media-gallery/football.webp",
        href: "/news/867",
    },
    {
        id: "865",
        date: "July 17, 2026",
        category: "Industry",
        title:
            "IETO is honored to host the United Economic Summit 2026 in Coimbatore",
        image: "/images/media-gallery/summit.webp",
        href: "/news/865",
    },
    {
        id: "866",
        date: "July 14, 2026",
        category: "Campus Life",
        title: "FIFA fever took over the campus, one cheer at a time",
        image: "/images/news/fifa_1.webp",
        href: "/news/866",
    },
    {
        id: "863",
        date: "July 08, 2026",
        category: "Library",
        title: "National Reading Day Celebration",
        image: "/images/news/08072026.png",
        href: "/news/863",
    },
    {
        id: "862",
        date: "July 04, 2026",
        category: "Achievement",
        title:
            "Adv. Dr. P. Krishnadas Receives Twentyfour News Business Excellence Award 2026 for Comprehensive Contribution to Higher Education",
        image:
            "/images/news/Business-Excellence-Awards2026.webp",
        href: "/news/862",
    },
];

const categories = [
    "All",
    "Campus News",
    "Innovation",
    "Workshop",
    "Academic",
    "Campus Life",
    "Industry",
    "Library",
    "Achievement",
];

export default function Page() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const newsPerPage = 6;

    const filteredNews = useMemo(() => {
        return newsItems.filter((item) => {
            const search = searchTerm.toLowerCase().trim();

            const matchesSearch =
                item.title.toLowerCase().includes(search) ||
                item.category.toLowerCase().includes(search);

            const matchesCategory =
                activeCategory === "All" ||
                item.category === activeCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, activeCategory]);

    const totalPages = Math.ceil(
        filteredNews.length / newsPerPage
    );

    const paginatedNews = filteredNews.slice(
        (currentPage - 1) * newsPerPage,
        currentPage * newsPerPage
    );

    return (
        <>
            <SiteHeader />

            <main className="bg-[#faf7f2] text-[#1e1917]">

                {/* =====================================================
                    HERO
                ===================================================== */}

                <section className="relative overflow-hidden bg-[#20235A]">

                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#D2B87C]/20" />

                    <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-[#D2B87C]/15" />

                    <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

                    <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

                        {/* Breadcrumb */}

                        <div className="mb-8 flex items-center gap-3 text-sm text-white/50">

                            <Link
                                href="/"
                                className="transition-colors hover:text-[#D2B87C]"
                            >
                                Home
                            </Link>

                            <ChevronRight size={15} />

                            <span className="text-[#D2B87C]">
                                News
                            </span>

                        </div>

                        <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">

                            <div>

                                <div className="mb-5 flex items-center gap-3">

                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                        NCERC Chronicle
                                    </span>

                                </div>

                                <h1 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">

                                    News, stories &

                                    <span className="block text-[#D2B87C]">
                                        campus updates.
                                    </span>

                                </h1>

                            </div>

                            <div className="max-w-md lg:justify-self-end">

                                <p className="text-base leading-8 text-white/65 sm:text-lg">
                                    Stay connected with the latest stories,
                                    achievements, academic milestones and
                                    happenings from the NCERC community.
                                </p>

                                <div className="mt-8 flex items-center gap-8 border-t border-white/10 pt-6">

                                    <div>

                                        <p className="font-serif text-3xl text-white">
                                            {newsItems.length.toString().padStart(2, "0")}
                                        </p>

                                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">
                                            Latest stories
                                        </p>

                                    </div>

                                    <div className="h-10 w-px bg-white/10" />

                                    <div>

                                        <p className="font-serif text-3xl text-white">
                                            2026
                                        </p>

                                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">
                                            Current archive
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =====================================================
                    NEWS / EVENTS NAVIGATION
                ===================================================== */}

                <section className="border-b border-[#20235A]/10 bg-white">

                    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

                        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#20235A]/45">
                                    Explore
                                </p>

                                <p className="mt-1 font-serif text-xl text-[#20235A]">
                                    News & Events
                                </p>

                            </div>

                            <div className="flex w-full rounded-full border border-[#20235A]/10 bg-[#faf7f2] p-1 sm:w-auto">

                                {/* Active News */}

                                <Link
                                    href="/media_gallery/news_and_events"
                                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#20235A] px-7 py-3 text-sm font-semibold text-white shadow-sm sm:flex-none"
                                >
                                    <Newspaper size={16} />
                                    News
                                </Link>

                                {/* Events Navigation */}

                                <Link
                                    href="/media_gallery/news_and_events/events"
                                    className="flex flex-1 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-[#20235A]/60 transition-all hover:text-[#20235A] sm:flex-none"
                                >
                                    <CalendarDays size={16} />
                                    Events
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =====================================================
                    NEWS CONTENT
                ===================================================== */}

                <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">

                    {/* INTRO */}

                    <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#D2B87C]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#20235A]/50">
                                    Latest updates
                                </span>

                            </div>

                            <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.02em] text-[#20235A] sm:text-5xl">

                                Stories from the{" "}

                                <span className="text-[#D2B87C]">
                                    NCERC community.
                                </span>

                            </h2>

                        </div>

                        <p className="max-w-md text-sm leading-7 text-[#1e1917]/55">
                            Discover institutional announcements, academic
                            milestones, student achievements and campus
                            stories from NCERC.
                        </p>

                    </div>

                    {/* SEARCH + FILTER */}

                    <div className="mb-12 rounded-2xl border border-[#20235A]/10 bg-white p-4 shadow-sm">

                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                            {/* Search */}

                            <div className="relative w-full lg:max-w-md">

                                <Search
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#20235A]/35"
                                />

                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    placeholder="Search news..."
                                    className="h-12 w-full rounded-xl border border-[#20235A]/10 bg-[#faf7f2] pl-11 pr-4 text-sm text-[#1e1917] outline-none transition focus:border-[#D2B87C]"
                                />

                            </div>

                            {/* Categories */}

                            <div className="flex gap-2 overflow-x-auto pb-1">

                                {categories.map((category) => (

                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => {
                                            setActiveCategory(category);
                                            setCurrentPage(1);
                                        }}
                                        className={`whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-semibold transition-all ${activeCategory === category
                                                ? "bg-[#20235A] text-white"
                                                : "border border-[#20235A]/10 bg-white text-[#20235A]/55 hover:border-[#D2B87C] hover:text-[#20235A]"
                                            }`}
                                    >
                                        {category}
                                    </button>

                                ))}

                            </div>

                        </div>

                    </div>

                    {/* =================================================
                        FEATURED NEWS
                    ================================================= */}

                    {currentPage === 1 &&
                        activeCategory === "All" &&
                        searchTerm === "" &&
                        paginatedNews.length > 0 && (

                            <Link
                                href={paginatedNews[0].href}
                                className="group mb-14 grid overflow-hidden rounded-[2rem] bg-[#20235A] lg:grid-cols-[1.1fr_0.9fr]"
                            >

                                <div className="relative min-h-[340px] overflow-hidden lg:min-h-[470px]">

                                    <Image
                                        src={paginatedNews[0].image}
                                        alt={paginatedNews[0].title}
                                        fill
                                        className="object-cover transition duration-700 group-hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 55vw"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/60 via-transparent to-transparent" />

                                    <div className="absolute left-6 top-6">

                                        <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A]">
                                            Featured
                                        </span>

                                    </div>

                                </div>

                                <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">

                                    <div>

                                        <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">

                                            <span>
                                                {paginatedNews[0].category}
                                            </span>

                                            <span className="h-1 w-1 rounded-full bg-[#D2B87C]" />

                                            <span>
                                                {paginatedNews[0].date}
                                            </span>

                                        </div>

                                        <h3 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
                                            {paginatedNews[0].title}
                                        </h3>

                                        <p className="mt-6 max-w-lg text-sm leading-7 text-white/55">
                                            Stay updated with the latest
                                            happenings and stories from the
                                            NCERC community.
                                        </p>

                                    </div>

                                    <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">

                                        <span className="text-sm font-semibold text-white">
                                            Read full story
                                        </span>

                                        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#D2B87C] transition group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                            <ArrowUpRight size={19} />
                                        </span>

                                    </div>

                                </div>

                            </Link>

                        )}

                    {/* =================================================
                        NEWS GRID
                    ================================================= */}

                    <div className="mb-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {(currentPage === 1 &&
                            activeCategory === "All" &&
                            searchTerm === ""
                            ? paginatedNews.slice(1)
                            : paginatedNews
                        ).map((item) => (

                            <Link
                                key={item.id}
                                href={item.href}
                                className="group overflow-hidden rounded-[1.5rem] border border-[#20235A]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/60 hover:shadow-xl hover:shadow-[#20235A]/5"
                            >

                                <div className="relative aspect-[16/10] overflow-hidden">

                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />

                                    <div className="absolute left-4 top-4">

                                        <span className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#20235A]">
                                            {item.category}
                                        </span>

                                    </div>

                                </div>

                                <div className="p-6">

                                    <div className="mb-5 flex items-center justify-between gap-4">

                                        <span className="flex items-center gap-2 text-xs font-medium text-[#20235A]/45">

                                            <CalendarDays size={14} />

                                            {item.date}

                                        </span>

                                        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#D2B87C]">
                                            NCERC
                                        </span>

                                    </div>

                                    <h3 className="font-serif text-2xl leading-tight text-[#20235A] transition-colors group-hover:text-[#20235A]/75">
                                        {item.title}
                                    </h3>

                                    <div className="mt-7 flex items-center justify-between border-t border-[#20235A]/10 pt-5">

                                        <span className="text-sm font-semibold text-[#20235A]">
                                            Read more
                                        </span>

                                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#20235A]/10 text-[#20235A] transition-all group-hover:bg-[#20235A] group-hover:text-white">
                                            <ArrowUpRight size={16} />
                                        </span>

                                    </div>

                                </div>

                            </Link>

                        ))}

                    </div>

                    {/* =================================================
                        EMPTY STATE
                    ================================================= */}

                    {paginatedNews.length === 0 && (

                        <div className="rounded-3xl border border-dashed border-[#20235A]/15 bg-white px-6 py-20 text-center">

                            <Search
                                size={28}
                                className="mx-auto text-[#D2B87C]"
                            />

                            <h3 className="mt-5 font-serif text-2xl text-[#20235A]">
                                No stories found
                            </h3>

                            <p className="mt-2 text-sm text-[#1e1917]/50">
                                Try another search term or category.
                            </p>

                        </div>

                    )}

                    {/* =================================================
                        PAGINATION
                    ================================================= */}

                    {totalPages > 1 && (

                        <div className="flex items-center justify-center gap-2">

                            <button
                                type="button"
                                disabled={currentPage === 1}
                                onClick={() =>
                                    setCurrentPage((page) =>
                                        Math.max(1, page - 1)
                                    )
                                }
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#20235A]/10 bg-white text-[#20235A] transition hover:border-[#D2B87C] disabled:cursor-not-allowed disabled:opacity-30"
                            >
                                <ChevronLeft size={18} />
                            </button>

                            {Array.from(
                                { length: totalPages },
                                (_, index) => index + 1
                            ).map((pageNumber) => (

                                <button
                                    key={pageNumber}
                                    type="button"
                                    onClick={() =>
                                        setCurrentPage(pageNumber)
                                    }
                                    className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold transition ${currentPage === pageNumber
                                            ? "bg-[#20235A] text-white"
                                            : "border border-[#20235A]/10 bg-white text-[#20235A] hover:border-[#D2B87C]"
                                        }`}
                                >
                                    {pageNumber}
                                </button>

                            ))}

                            <button
                                type="button"
                                disabled={currentPage === totalPages}
                                onClick={() =>
                                    setCurrentPage((page) =>
                                        Math.min(
                                            totalPages,
                                            page + 1
                                        )
                                    )
                                }
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#20235A]/10 bg-white text-[#20235A] transition hover:border-[#D2B87C] disabled:cursor-not-allowed disabled:opacity-30"
                            >
                                <ChevronRight size={18} />
                            </button>

                        </div>

                    )}

                </section>

                {/* =====================================================
                    FINAL CTA
                ===================================================== */}

                <section className="border-t border-[#20235A]/10 bg-white">

                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

                        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Stay connected
                                </p>

                                <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight tracking-[-0.02em] text-[#20235A] sm:text-5xl">
                                    Explore what is happening across NCERC.
                                </h2>

                            </div>

                            <div className="flex flex-wrap gap-3">

                                <Link
                                    href="/news-events/events"
                                    className="inline-flex items-center gap-3 rounded-full bg-[#20235A] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#D2B87C] hover:text-[#20235A]"
                                >
                                    View Events
                                    <ArrowUpRight size={17} />
                                </Link>

                                <Link
                                    href="/gallery"
                                    className="inline-flex items-center gap-3 rounded-full border border-[#20235A]/15 px-6 py-4 text-sm font-semibold text-[#20235A] transition hover:border-[#20235A] hover:bg-[#20235A] hover:text-white"
                                >
                                    Media Gallery
                                    <ArrowUpRight size={17} />
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>

            </main>

            <FooterSection />
        </>
    );
};