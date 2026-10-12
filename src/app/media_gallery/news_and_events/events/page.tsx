"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowUpRight,
    CalendarDays,
    ChevronRight,
    MapPin,
    Search,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

type Event = {
    id: string;
    date: string;
    month: string;
    category: string;
    title: string;
    description: string;
    image: string;
    location: string;
};

const events: Event[] = [
    {
        id: "01",
        date: "10",
        month: "SEP 2026",
        category: "Campus Event",
        title: "GREENOVA 2026 Conclave",
        description:
            "A vibrant campus conclave bringing together ideas, innovation, participation and meaningful conversations.",
        image: "/images/media-gallery/Greenova.webp",
        location: "NCERC Campus",
    },
    {
        id: "02",
        date: "09",
        month: "SEP 2026",
        category: "Innovation",
        title: "Smart India Hackathon 2026",
        description:
            "Students came together to explore innovative solutions, technology and problem-solving through the Smart India Hackathon.",
        image: "/images/media-gallery/hackathon.webp",
        location: "NCERC Campus",
    },
    {
        id: "03",
        date: "31",
        month: "JUL 2026",
        category: "Workshop",
        title: "3-Day AI Accelerate Boot Camp by BSERC",
        description:
            "An intensive learning experience focused on artificial intelligence, emerging technologies and practical knowledge.",
        image:
            "/images/media-gallery/induction.webp",
        location: "NCERC Campus",
    },
    {
        id: "04",
        date: "24",
        month: "JUL 2026",
        category: "Academic",
        title: "Graduation Day Ceremony",
        description:
            "A memorable academic milestone celebrating the achievements and journey of graduating students.",
        image: "/images/media-gallery/Graduation.webp",
        location: "NCERC Campus",
    },
    {
        id: "05",
        date: "22",
        month: "JUL 2026",
        category: "Campus Life",
        title: "Induction Ceremony 2026",
        description:
            "Welcoming a new generation of students to NCERC through an engaging induction experience.",
        image: "/images/media-gallery/hackathon.webp",
        location: "NCERC Campus",
    },
    {
        id: "06",
        date: "17",
        month: "JUL 2026",
        category: "Summit",
        title: "United Economic Summit 2026",
        description:
            "A platform bringing together discussions and perspectives around economic development and industry.",
        image: "/images/media-gallery/summit.webp",
        location: "Coimbatore",
    },
    {
        id: "07",
        date: "14",
        month: "JUL 2026",
        category: "Sports",
        title: "FIFA Fever Took Over the Campus",
        description:
            "A spirited campus celebration where students came together to experience the excitement of football.",
        image: "/images/news/fifa_1.webp",
        location: "NCERC Campus",
    },
    {
        id: "08",
        date: "08",
        month: "JUL 2026",
        category: "Library",
        title: "National Reading Day Celebration",
        description:
            "A celebration encouraging reading, knowledge sharing and a stronger culture of learning among students.",
        image: "/images/news/08072026.png",
        location: "NCERC Campus",
    },
];

const categories = [
    "All",
    "Campus Event",
    "Innovation",
    "Workshop",
    "Academic",
    "Campus Life",
    "Summit",
    "Sports",
    "Library",
];

export default function Page() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredEvents = useMemo(() => {
        return events.filter((event) => {
            const search = searchTerm.toLowerCase().trim();

            const matchesSearch =
                event.title.toLowerCase().includes(search) ||
                event.category.toLowerCase().includes(search) ||
                event.location.toLowerCase().includes(search);

            const matchesCategory =
                activeCategory === "All" ||
                event.category === activeCategory;

            return matchesSearch && matchesCategory;
        });
    }, [activeCategory, searchTerm]);

    return (
        <>
            <SiteHeader />

            <main className="bg-[#faf7f2] text-[#1e1917]">

                {/* =====================================================
                    HERO
                ===================================================== */}

                <section className="relative overflow-hidden bg-[#20235A]">

                    <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#D2B87C]/15" />

                    <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full border border-[#D2B87C]/10" />

                    <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-white/5" />

                    <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">

                        {/* Breadcrumb */}

                        <div className="mb-12 flex items-center gap-2 text-xs text-white/45">

                            <Link
                                href="/"
                                className="transition-colors hover:text-[#D2B87C]"
                            >
                                Home
                            </Link>

                            <ChevronRight size={13} />

                            <Link
                                href="/news-events"
                                className="transition-colors hover:text-[#D2B87C]"
                            >
                                News & Events
                            </Link>

                            <ChevronRight size={13} />

                            <span className="text-[#D2B87C]">
                                Events
                            </span>

                        </div>

                        <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end">

                            <div>

                                <div className="mb-6 flex items-center gap-3">

                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                        NCERC Events
                                    </span>

                                </div>

                                <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">

                                    Experiences that

                                    <span className="block text-[#D2B87C]">
                                        bring us together.
                                    </span>

                                </h1>

                                <p className="mt-7 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                                    Discover academic activities, student
                                    experiences, celebrations, workshops,
                                    competitions and special events taking
                                    place across the NCERC community.
                                </p>

                            </div>

                            <div className="border-l border-white/10 pl-7">

                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">
                                    Event Calendar
                                </span>

                                <div className="mt-6 flex items-center gap-8">

                                    <div>
                                        <span className="block font-serif text-3xl text-white">
                                            {events.length
                                                .toString()
                                                .padStart(2, "0")}
                                        </span>

                                        <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-white/35">
                                            Events
                                        </span>
                                    </div>

                                    <div className="h-9 w-px bg-white/10" />

                                    <div>
                                        <span className="block font-serif text-3xl text-white">
                                            2026
                                        </span>

                                        <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-white/35">
                                            Archive
                                        </span>
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

                                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#20235A]/40">
                                    Explore
                                </span>

                                <h2 className="mt-1 font-serif text-xl text-[#20235A]">
                                    News & Events
                                </h2>

                            </div>

                            <div className="flex w-full rounded-full border border-[#20235A]/10 bg-[#faf7f2] p-1 sm:w-auto">

                                <Link
                                    href="/media_gallery/news_and_events"
                                    className="flex flex-1 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-[#20235A]/50 transition hover:text-[#20235A] sm:flex-none"
                                >
                                    News
                                </Link>

                                <Link
                                    href="/media_gallery/news_and_events/events"
                                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#20235A] px-7 py-3 text-sm font-semibold text-white shadow-sm sm:flex-none"
                                >
                                    <CalendarDays size={16} />
                                    Events
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>

                {/* =====================================================
                    EVENTS INTRO
                ===================================================== */}

                <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

                    <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">

                        <div>

                            <div className="mb-5 flex items-center gap-3">

                                <span className="h-px w-9 bg-[#D2B87C]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#20235A]/45">
                                    What is happening
                                </span>

                            </div>

                            <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.02em] text-[#20235A] sm:text-5xl">

                                Moments that become

                                <span className="text-[#D2B87C]">
                                    {" "}memories.
                                </span>

                            </h2>

                        </div>

                        <p className="text-sm leading-7 text-[#20235A]/50">
                            From academic gatherings and industry interactions
                            to cultural celebrations and student activities,
                            explore the events that shape campus life at NCERC.
                        </p>

                    </div>

                </section>

                {/* =====================================================
                    SEARCH + FILTER
                ===================================================== */}

                <section className="mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-12">

                    <div className="rounded-2xl border border-[#20235A]/10 bg-white p-4 shadow-sm">

                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                            {/* Search */}

                            <div className="relative w-full lg:max-w-md">

                                <Search
                                    size={17}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#20235A]/30"
                                />

                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    placeholder="Search events..."
                                    className="h-11 w-full rounded-xl border border-[#20235A]/10 bg-[#faf7f2] pl-11 pr-4 text-sm outline-none transition focus:border-[#D2B87C]"
                                />

                            </div>

                            {/* Category filter */}

                            <div className="flex gap-2 overflow-x-auto pb-1">

                                {categories.map((category) => (

                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() =>
                                            setActiveCategory(category)
                                        }
                                        className={`whitespace-nowrap rounded-full px-4 py-2.5 text-[11px] font-semibold transition ${activeCategory === category
                                                ? "bg-[#20235A] text-white"
                                                : "border border-[#20235A]/10 bg-white text-[#20235A]/50 hover:border-[#D2B87C] hover:text-[#20235A]"
                                            }`}
                                    >
                                        {category}
                                    </button>

                                ))}

                            </div>

                        </div>

                    </div>

                </section>

                {/* =====================================================
                    FEATURED EVENT
                ===================================================== */}

                {filteredEvents.length > 0 && (
                    <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-12">

                        <div className="mb-7 flex items-end justify-between">

                            <div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    Featured Event
                                </span>

                                <h2 className="mt-2 font-serif text-2xl text-[#20235A] sm:text-3xl">
                                    {filteredEvents[0].title}
                                </h2>

                            </div>

                            <span className="hidden text-xs text-[#20235A]/30 sm:block">
                                01 / {filteredEvents.length.toString().padStart(2, "0")}
                            </span>

                        </div>

                        <div className="grid overflow-hidden rounded-3xl bg-[#20235A] lg:grid-cols-[1.25fr_0.75fr]">

                            {/* Image */}

                            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[440px]">

                                <Image
                                    src={filteredEvents[0].image}
                                    alt={filteredEvents[0].title}
                                    fill
                                    priority
                                    className="object-cover transition duration-700 hover:scale-[1.03]"
                                    sizes="(max-width: 1024px) 100vw, 60vw"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/60 via-transparent to-transparent" />

                                <div className="absolute left-6 top-6">

                                    <span className="rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#20235A]">
                                        {filteredEvents[0].category}
                                    </span>

                                </div>

                            </div>

                            {/* Details */}

                            <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">

                                <div>

                                    <div className="mb-8 flex items-center gap-4">

                                        <div className="flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-[#D2B87C] text-[#20235A]">

                                            <span className="font-serif text-xl leading-none">
                                                {filteredEvents[0].date}
                                            </span>

                                            <span className="mt-1 text-[8px] font-bold tracking-[0.12em]">
                                                {filteredEvents[0].month.split(" ")[0]}
                                            </span>

                                        </div>

                                        <div>

                                            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                                                {filteredEvents[0].month}
                                            </span>

                                            <span className="mt-1 flex items-center gap-1.5 text-xs text-white/40">
                                                <MapPin size={12} />
                                                {filteredEvents[0].location}
                                            </span>

                                        </div>

                                    </div>

                                    <h3 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
                                        {filteredEvents[0].title}
                                    </h3>

                                    <p className="mt-5 text-sm leading-7 text-white/50">
                                        {filteredEvents[0].description}
                                    </p>

                                </div>

                                <div className="mt-10 border-t border-white/10 pt-5">

                                    <span className="flex items-center justify-between text-sm font-semibold text-white">

                                        Event details

                                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#D2B87C]">
                                            <ArrowUpRight size={16} />
                                        </span>

                                    </span>

                                </div>

                            </div>

                        </div>

                    </section>
                )}

                {/* =====================================================
                    EVENT GRID
                ===================================================== */}

                <section className="border-y border-[#20235A]/10 bg-white">

                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

                        <div className="mb-10 flex items-end justify-between">

                            <div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    Event Archive
                                </span>

                                <h2 className="mt-2 font-serif text-3xl text-[#20235A] sm:text-4xl">
                                    Explore events
                                </h2>

                            </div>

                            <span className="hidden text-xs text-[#20235A]/35 sm:block">
                                {filteredEvents.length} events
                            </span>

                        </div>

                        {filteredEvents.length > 0 ? (

                            <div className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">

                                {filteredEvents.slice(1).map((event) => (

                                    <article
                                        key={event.id}
                                        className="group"
                                    >

                                        {/* Image */}

                                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#faf7f2]">

                                            <Image
                                                src={event.image}
                                                alt={event.title}
                                                fill
                                                loading="lazy"
                                                className="object-cover transition duration-700 group-hover:scale-[1.04]"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/35 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

                                            {/* Date badge */}

                                            <div className="absolute left-4 top-4 flex h-12 w-12 flex-col items-center justify-center rounded-xl bg-white shadow-sm">

                                                <span className="font-serif text-lg leading-none text-[#20235A]">
                                                    {event.date}
                                                </span>

                                                <span className="mt-0.5 text-[7px] font-bold tracking-[0.1em] text-[#D2B87C]">
                                                    {event.month.split(" ")[0]}
                                                </span>

                                            </div>

                                            {/* Arrow */}

                                            <span className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-[#20235A] opacity-0 shadow transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                                <ArrowUpRight size={15} />
                                            </span>

                                        </div>

                                        {/* Content */}

                                        <div className="pt-5">

                                            <div className="mb-2 flex items-center justify-between gap-3">

                                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                                    {event.category}
                                                </span>

                                                <span className="flex items-center gap-1 text-[10px] text-[#20235A]/35">
                                                    <MapPin size={11} />
                                                    {event.location}
                                                </span>

                                            </div>

                                            <h3 className="font-serif text-xl leading-snug text-[#20235A] transition-colors group-hover:text-[#D2B87C]">
                                                {event.title}
                                            </h3>

                                            <p className="mt-3 line-clamp-2 text-xs leading-6 text-[#20235A]/45">
                                                {event.description}
                                            </p>

                                            <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#20235A]/45">
                                                Explore event
                                                <ArrowUpRight size={12} />
                                            </div>

                                        </div>

                                    </article>

                                ))}

                            </div>

                        ) : (

                            <div className="rounded-3xl border border-dashed border-[#20235A]/15 px-6 py-20 text-center">

                                <CalendarDays
                                    size={30}
                                    className="mx-auto text-[#D2B87C]"
                                />

                                <h3 className="mt-5 font-serif text-2xl text-[#20235A]">
                                    No events found
                                </h3>

                                <p className="mt-2 text-sm text-[#20235A]/45">
                                    Try another search term or category.
                                </p>

                            </div>

                        )}

                    </div>

                </section>

                {/* =====================================================
                    BOTTOM CTA
                ===================================================== */}

                <section className="bg-[#20235A]">

                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

                        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

                            <div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    NCERC Community
                                </span>

                                <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-white sm:text-5xl">

                                    Stay connected with

                                    <span className="block text-white/40">
                                        campus life.
                                    </span>

                                </h2>

                            </div>

                            <Link
                                href="/news-events"
                                className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
                            >
                                Back to News

                                <ArrowUpRight
                                    size={17}
                                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />

                            </Link>

                        </div>

                    </div>

                </section>

            </main>

            <FooterSection />
        </>
    );
};