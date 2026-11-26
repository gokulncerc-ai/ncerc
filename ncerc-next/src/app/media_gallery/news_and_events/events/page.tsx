"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { dayOf, imageOf, monthYearOf } from "@/lib/publicApi";
import RemoteImage from "@/components/common/RemoteImage";
import {
    ArrowUpRight,
    CalendarDays,
    ChevronRight,
    MapPin,
    Search,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import { usePublicList } from "@/lib/usePublicList";

type EventCard = {
    id: string;
    date: string;
    month: string;
    category: string;
    title: string;
    description: string;
    image: string | null;
    location: string;
    registrationUrl: string | null;
    href: string;
};

export default function Page() {
    const { items, loading, error } = usePublicList("/events?type=event&limit=50");

    const [searchTerm, setSearchTerm] = useState("");

    // newest event date first
    const events: EventCard[] = useMemo(() => {
        const sorted = [...items].sort((a, b) => {
            const ta = new Date(a.eventDate ?? a.publishedAt ?? 0).getTime();
            const tb = new Date(b.eventDate ?? b.publishedAt ?? 0).getTime();
            return tb - ta;
        });

        return sorted.map((e) => {
            const when = e.eventDate ?? e.publishedAt;
            return {
                id: e.id,
                date: dayOf(when),
                month: monthYearOf(when),
                category: "Event",
                title: e.title,
                description: e.summary,
                image: imageOf(e),
                location: e.venue ?? "NCERC Campus",
                registrationUrl: e.registrationUrl,
                href: `/media_gallery/news_and_events/view?slug=${encodeURIComponent(e.slug)}`,
            };
        });
    }, [items]);

    const filteredEvents = useMemo(() => {
        const search = searchTerm.toLowerCase().trim();
        return events.filter(
            (event) =>
                event.title.toLowerCase().includes(search) ||
                event.location.toLowerCase().includes(search)
        );
    }, [events, searchTerm]);

    const featured = filteredEvents[0];

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
                                href="/media_gallery/news_and_events"
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
                                            {events.length.toString().padStart(2, "0")}
                                        </span>

                                        <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-white/35">
                                            Events
                                        </span>
                                    </div>

                                    <div className="h-9 w-px bg-white/10" />

                                    <div>
                                        <span className="block font-serif text-3xl text-white">
                                            {new Date().getFullYear()}
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
                    SEARCH
                ===================================================== */}

                <section className="mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-12">

                    <div className="rounded-2xl border border-[#20235A]/10 bg-white p-4 shadow-sm">

                        <div className="relative w-full lg:max-w-md">

                            <Search
                                size={17}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#20235A]/30"
                            />

                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search events..."
                                className="h-11 w-full rounded-xl border border-[#20235A]/10 bg-[#faf7f2] pl-11 pr-4 text-sm outline-none transition focus:border-[#D2B87C]"
                            />

                        </div>

                    </div>

                </section>

                {/* =====================================================
                    FEATURED EVENT
                ===================================================== */}

                {!loading && !error && featured && (
                    <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-12">

                        <div className="mb-7 flex items-end justify-between">

                            <div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    Featured Event
                                </span>

                                <h2 className="mt-2 font-serif text-2xl text-[#20235A] sm:text-3xl">
                                    {featured.title}
                                </h2>

                            </div>

                            <span className="hidden text-xs text-[#20235A]/30 sm:block">
                                01 / {filteredEvents.length.toString().padStart(2, "0")}
                            </span>

                        </div>

                        <div className="grid overflow-hidden rounded-3xl bg-[#20235A] lg:grid-cols-[1.25fr_0.75fr]">

                            {/* Image */}

                            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[440px]">

                                <RemoteImage
                                    src={featured.image}
                                    alt={featured.title}
                                    width={1200}
                                    eager
                                    className="transition duration-700 hover:scale-[1.03]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/60 via-transparent to-transparent" />

                                <div className="absolute left-6 top-6">

                                    <span className="rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#20235A]">
                                        {featured.category}
                                    </span>

                                </div>

                            </div>

                            {/* Details */}

                            <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">

                                <div>

                                    <div className="mb-8 flex items-center gap-4">

                                        <div className="flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-[#D2B87C] text-[#20235A]">

                                            <span className="font-serif text-xl leading-none">
                                                {featured.date}
                                            </span>

                                            <span className="mt-1 text-[8px] font-bold tracking-[0.12em]">
                                                {featured.month.split(" ")[0]}
                                            </span>

                                        </div>

                                        <div>

                                            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                                                {featured.month}
                                            </span>

                                            <span className="mt-1 flex items-center gap-1.5 text-xs text-white/40">
                                                <MapPin size={12} />
                                                {featured.location}
                                            </span>

                                        </div>

                                    </div>

                                    <h3 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
                                        {featured.title}
                                    </h3>

                                    <p className="mt-5 text-sm leading-7 text-white/50">
                                        {featured.description}
                                    </p>

                                </div>

                                <div className="mt-10 border-t border-white/10 pt-5">
                                    <Link
                                        href={featured.href}
                                        className="flex items-center justify-between text-sm font-semibold text-white"
                                    >
                                        View this event
                                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#D2B87C]">
                                            <ArrowUpRight size={16} />
                                        </span>
                                    </Link>
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

                        {loading ? (

                            <p className="py-16 text-center text-sm text-[#20235A]/50">
                                Loading events…
                            </p>

                        ) : error ? (

                            <p className="py-16 text-center text-sm text-red-600">
                                {error}
                            </p>

                        ) : filteredEvents.length === 0 ? (

                            <div className="rounded-3xl border border-dashed border-[#20235A]/15 px-6 py-20 text-center">

                                <CalendarDays
                                    size={30}
                                    className="mx-auto text-[#D2B87C]"
                                />

                                <h3 className="mt-5 font-serif text-2xl text-[#20235A]">
                                    No events found
                                </h3>

                                <p className="mt-2 text-sm text-[#20235A]/45">
                                    {searchTerm
                                        ? "Try another search term."
                                        : "No events have been published yet."}
                                </p>

                            </div>

                        ) : filteredEvents.length === 1 ? (

                            <p className="py-10 text-center text-sm text-[#20235A]/45">
                                That is the only event for now. Check back soon.
                            </p>

                        ) : (

                            <div className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">

                                {filteredEvents.slice(1).map((event) => (

                                    <article
                                        key={event.id}
                                        className="group"
                                    >

                                        {/* Image */}

                                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#faf7f2]">

                                            <RemoteImage
                                                src={event.image}
                                                alt={event.title}
                                                width={600}
                                                className="transition duration-700 group-hover:scale-[1.04]"
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
                                                <Link href={event.href}>{event.title}</Link>
                                            </h3>

                                            <p className="mt-3 line-clamp-2 text-xs leading-6 text-[#20235A]/45">
                                                {event.description}
                                            </p>

                                            <div className="mt-4 flex items-center gap-4">

                                                <Link
                                                    href={event.href}
                                                    className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#20235A]/60 transition hover:text-[#20235A]"
                                                >
                                                    Explore event
                                                    <ArrowUpRight size={12} />
                                                </Link>

                                                {event.registrationUrl && (
                                                    <a
                                                        href={event.registrationUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D2B87C] transition hover:text-[#20235A]"
                                                    >
                                                        Register
                                                        <ArrowUpRight size={12} />
                                                    </a>
                                                )}

                                            </div>

                                        </div>

                                    </article>

                                ))}

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
                                href="/media_gallery/news_and_events"
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
}