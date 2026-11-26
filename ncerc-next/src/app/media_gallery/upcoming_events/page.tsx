"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    CalendarDays,
    ChevronRight,
    MapPin,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import {
    FALLBACK_IMAGE,
    dayOf,
    formatLongDate,
    isFromTomorrow,
    monthYearOf,
} from "@/lib/publicApi";
import { usePublicList } from "@/lib/usePublicList";

export default function Page() {
    const { items: fetched, loading, error } = usePublicList(
        "/events?type=event&when=upcoming&limit=50"
    );

    // tomorrow onward only (India time), soonest first
    const items = useMemo(
        () =>
            fetched
                .filter((e) => isFromTomorrow(e.eventDate))
                .sort(
                    (a, b) =>
                        new Date(a.eventDate!).getTime() -
                        new Date(b.eventDate!).getTime()
                ),
        [fetched]
    );

    return (
        <>
            <SiteHeader />

            <main className="bg-[#faf7f2] text-[#20235A]">
                {/* HERO */}
                <section className="border-b border-[#20235A]/10">
                    <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
                        <div className="mb-10 flex items-center gap-2 text-xs text-[#20235A]/45">
                            <Link href="/" className="transition-colors hover:text-[#D2B87C]">
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
                            <span className="text-[#20235A]/70">Upcoming Events</span>
                        </div>

                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#D2B87C]" />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#20235A]/50">
                                Coming up
                            </span>
                        </div>

                        <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                            Upcoming
                            <span className="block text-[#D2B87C]">events at NCERC.</span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-sm leading-7 text-[#20235A]/55 sm:text-base">
                            Programmes, workshops and campus events happening from tomorrow onward.
                        </p>
                    </div>
                </section>

                {/* LIST */}
                <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
                    {loading && (
                        <p className="py-16 text-center text-sm text-[#20235A]/50">
                            Loading upcoming events…
                        </p>
                    )}

                    {!loading && error && (
                        <p className="py-16 text-center text-sm text-red-600">{error}</p>
                    )}

                    {!loading && !error && items.length === 0 && (
                        <div className="rounded-3xl border border-dashed border-[#20235A]/15 bg-white px-6 py-20 text-center">
                            <CalendarDays size={30} className="mx-auto text-[#D2B87C]" />
                            <h2 className="mt-5 font-serif text-2xl">No upcoming events right now</h2>
                            <p className="mt-2 text-sm text-[#20235A]/45">
                                Please check back soon.
                            </p>
                        </div>
                    )}

                    {!loading && !error && items.length > 0 && (
                        <div className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                            {items.map((event) => {
                                const href = `/media_gallery/news_and_events/view?slug=${encodeURIComponent(event.slug)}`;
                                return (
                                    <article
                                        key={event.id}
                                        className="group overflow-hidden rounded-2xl border border-[#20235A]/10 bg-white transition-all duration-300 hover:border-[#D2B87C]/60 hover:shadow-xl hover:shadow-[#20235A]/5"
                                    >
                                        <Link href={href} className="block">
                                            <div className="relative aspect-[4/3] overflow-hidden bg-[#faf7f2]">
                                                <Image
                                                    src={event.coverImage?.url ?? FALLBACK_IMAGE}
                                                    alt={event.title}
                                                    fill
                                                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                />

                                                <div className="absolute left-4 top-4 flex h-14 w-14 flex-col items-center justify-center rounded-xl bg-white shadow-sm">
                                                    <span className="font-serif text-xl leading-none">
                                                        {dayOf(event.eventDate)}
                                                    </span>
                                                    <span className="mt-1 text-[8px] font-bold tracking-[0.1em] text-[#D2B87C]">
                                                        {monthYearOf(event.eventDate).split(" ")[0]}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>

                                        <div className="p-6">
                                            <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#20235A]/45">
                                                <span className="flex items-center gap-1.5">
                                                    <CalendarDays size={12} />
                                                    {formatLongDate(event.eventDate)}
                                                    {event.endDate &&
                                                        ` – ${formatLongDate(event.endDate)}`}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <MapPin size={12} />
                                                    {event.venue ?? "NCERC Campus"}
                                                </span>
                                            </div>

                                            <h2 className="font-serif text-2xl leading-snug">
                                                <Link
                                                    href={href}
                                                    className="transition-colors hover:text-[#D2B87C]"
                                                >
                                                    {event.title}
                                                </Link>
                                            </h2>

                                            {event.summary && (
                                                <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#20235A]/55">
                                                    {event.summary}
                                                </p>
                                            )}

                                            <Link
                                                href={href}
                                                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#20235A] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#D2B87C] hover:text-[#20235A]"
                                            >
                                                View event
                                                <ArrowUpRight size={14} />
                                            </Link>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    )}
                </section>

                {/* CTA */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-14 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">
                        <h2 className="font-serif text-3xl text-white sm:text-4xl">
                            Missed something? Browse past events.
                        </h2>
                        <Link
                            href="/media_gallery/news_and_events/events"
                            className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
                        >
                            All events
                            <ArrowUpRight size={17} />
                        </Link>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}