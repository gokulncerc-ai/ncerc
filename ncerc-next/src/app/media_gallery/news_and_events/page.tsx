"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
    displayDate,
    formatLongDate,
    imageOf,
    isFromTomorrow,
} from "@/lib/publicApi";
import RemoteImage from "@/components/common/RemoteImage";
import {
    ArrowUpRight,
    CalendarDays,
    ChevronLeft,
    ChevronRight,
    MapPin,
    Search,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import { usePublicAll } from "@/lib/usePublicList";

type Filter = "all" | "news" | "event";

const FILTERS: { value: Filter; label: string }[] = [
    { value: "all", label: "All" },
    { value: "news", label: "News" },
    { value: "event", label: "Events" },
];

const PER_PAGE = 8;

export default function Page() {
    const { items, loading, error } = usePublicAll();

    const [filter, setFilter] = useState<Filter>("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    // newly published first
    const sorted = useMemo(
        () =>
            [...items].sort(
                (a, b) =>
                    new Date(b.publishedAt ?? b.eventDate ?? 0).getTime() -
                    new Date(a.publishedAt ?? a.eventDate ?? 0).getTime()
            ),
        [items]
    );

    const filtered = useMemo(() => {
        const search = searchTerm.toLowerCase().trim();
        return sorted.filter(
            (i) =>
                (filter === "all" || i.type === filter) &&
                (i.title.toLowerCase().includes(search) ||
                    (i.venue ?? "").toLowerCase().includes(search))
        );
    }, [sorted, filter, searchTerm]);

    const counts = useMemo(
        () => ({
            all: items.length,
            news: items.filter((i) => i.type === "news").length,
            event: items.filter((i) => i.type === "event").length,
        }),
        [items]
    );

    const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
    const page = Math.min(currentPage, totalPages);
    const pageItems = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

    return (
        <>
            <SiteHeader />

            <main className="bg-[#faf7f2] text-[#1e1917]">

                {/* HERO */}
                <section className="relative overflow-hidden bg-[#20235A]">
                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#D2B87C]/20" />
                    <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

                    <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
                        <div className="mb-8 flex items-center gap-3 text-sm text-white/50">
                            <Link href="/" className="transition-colors hover:text-[#D2B87C]">
                                Home
                            </Link>
                            <ChevronRight size={15} />
                            <span className="text-[#D2B87C]">News & Events</span>
                        </div>

                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#D2B87C]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                NCERC Chronicle
                            </span>
                        </div>

                        <h1 className="max-w-4xl font-serif text-5xl leading-[1] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
                            News, events &amp;
                            <span className="block text-[#D2B87C]">campus updates.</span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
                            Stay connected with the latest stories, achievements and
                            happenings from the NCERC community.
                        </p>
                    </div>
                </section>

                {/* LIST */}
                <section className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-20">

                    {/* SEARCH + FILTER */}
                    <div className="mb-10 rounded-2xl border border-[#20235A]/10 bg-white p-4 shadow-sm">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

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
                                    placeholder="Search news and events..."
                                    className="h-12 w-full rounded-xl border border-[#20235A]/10 bg-[#faf7f2] pl-11 pr-4 text-sm outline-none transition focus:border-[#D2B87C]"
                                />
                            </div>

                            <div className="flex gap-2" role="tablist" aria-label="Filter by type">
                                {FILTERS.map((f) => (
                                    <button
                                        key={f.value}
                                        type="button"
                                        role="tab"
                                        aria-selected={filter === f.value}
                                        onClick={() => {
                                            setFilter(f.value);
                                            setCurrentPage(1);
                                        }}
                                        className={`whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-semibold transition-all ${filter === f.value
                                            ? "bg-[#20235A] text-white"
                                            : "border border-[#20235A]/10 bg-white text-[#20235A]/60 hover:border-[#D2B87C] hover:text-[#20235A]"
                                            }`}
                                    >
                                        {f.label}
                                        <span className="ml-2 opacity-60">{counts[f.value]}</span>
                                    </button>
                                ))}
                            </div>

                        </div>
                    </div>

                    {loading && (
                        <p className="py-20 text-center text-sm text-[#20235A]/50">Loading…</p>
                    )}

                    {!loading && error && (
                        <p className="py-20 text-center text-sm text-red-600">{error}</p>
                    )}

                    {!loading && !error && filtered.length === 0 && (
                        <div className="rounded-3xl border border-dashed border-[#20235A]/15 bg-white px-6 py-20 text-center">
                            <Search size={28} className="mx-auto text-[#D2B87C]" />
                            <h2 className="mt-5 font-serif text-2xl text-[#20235A]">Nothing found</h2>
                            <p className="mt-2 text-sm text-[#1e1917]/50">
                                {searchTerm || filter !== "all"
                                    ? "Try another search term or filter."
                                    : "Nothing has been published yet."}
                            </p>
                        </div>
                    )}

                    {!loading && !error && pageItems.length > 0 && (
                        <>
                            <p className="mb-6 text-xs text-[#20235A]/45">
                                Showing {(page - 1) * PER_PAGE + 1}–
                                {(page - 1) * PER_PAGE + pageItems.length} of {filtered.length}
                            </p>

                            <ul className="space-y-5">
                                {pageItems.map((item) => {
                                    const upcoming =
                                        item.type === "event" && isFromTomorrow(item.eventDate);
                                    return (
                                        <li key={item.id}>
                                            <Link
                                                href={`/media_gallery/news_and_events/view?slug=${encodeURIComponent(item.slug)}`}
                                                className="group grid overflow-hidden rounded-2xl border border-[#20235A]/10 bg-white transition-all duration-300 hover:border-[#D2B87C]/60 hover:shadow-xl hover:shadow-[#20235A]/5 sm:grid-cols-[260px_1fr]"
                                            >
                                                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-auto sm:min-h-[180px]">
                                                    <RemoteImage
                                                        src={imageOf(item)}
                                                        alt={item.title}
                                                        width={600}
                                                        className="transition duration-700 group-hover:scale-105"
                                                    />
                                                    <div className="absolute left-4 top-4 flex gap-2">
                                                        <span className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#20235A]">
                                                            {item.type === "news" ? "News" : "Event"}
                                                        </span>
                                                        {upcoming && (
                                                            <span className="rounded-full bg-[#D2B87C] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#20235A]">
                                                                Upcoming
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="flex flex-col justify-between p-6">
                                                    <div>
                                                        <div className="mb-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-[#20235A]/50">
                                                            <span className="flex items-center gap-1.5">
                                                                <CalendarDays size={13} />
                                                                {formatLongDate(displayDate(item))}
                                                            </span>
                                                            {item.type === "event" && (
                                                                <span className="flex items-center gap-1.5">
                                                                    <MapPin size={13} />
                                                                    {item.venue ?? "NCERC Campus"}
                                                                </span>
                                                            )}
                                                        </div>

                                                        <h2 className="font-serif text-2xl leading-snug text-[#20235A]">
                                                            {item.title}
                                                        </h2>

                                                        {item.summary && (
                                                            <p className="mt-3 line-clamp-2 text-sm leading-7 text-[#20235A]/55">
                                                                {item.summary}
                                                            </p>
                                                        )}
                                                    </div>

                                                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#20235A]">
                                                        Read more
                                                        <ArrowUpRight
                                                            size={15}
                                                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                        />
                                                    </span>
                                                </div>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </>
                    )}

                    {/* PAGINATION */}
                    {!loading && !error && totalPages > 1 && (
                        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
                            <button
                                type="button"
                                aria-label="Previous page"
                                disabled={page === 1}
                                onClick={() => setCurrentPage(page - 1)}
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#20235A]/10 bg-white text-[#20235A] transition hover:border-[#D2B87C] disabled:cursor-not-allowed disabled:opacity-30"
                            >
                                <ChevronLeft size={18} />
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                                <button
                                    key={n}
                                    type="button"
                                    onClick={() => setCurrentPage(n)}
                                    aria-current={page === n ? "page" : undefined}
                                    className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold transition ${page === n
                                        ? "bg-[#20235A] text-white"
                                        : "border border-[#20235A]/10 bg-white text-[#20235A] hover:border-[#D2B87C]"
                                        }`}
                                >
                                    {n}
                                </button>
                            ))}

                            <button
                                type="button"
                                aria-label="Next page"
                                disabled={page === totalPages}
                                onClick={() => setCurrentPage(page + 1)}
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#20235A]/10 bg-white text-[#20235A] transition hover:border-[#D2B87C] disabled:cursor-not-allowed disabled:opacity-30"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    )}
                </section>

                {/* CTA */}
                <section className="border-t border-[#20235A]/10 bg-white">
                    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
                        <h2 className="font-serif text-3xl text-[#20235A] sm:text-4xl">
                            Looking for what is coming next?
                        </h2>
                        <Link
                            href="/media_gallery/upcoming_events"
                            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#20235A] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#D2B87C] hover:text-[#20235A]"
                        >
                            Upcoming events
                            <ArrowUpRight size={17} />
                        </Link>
                    </div>
                </section>

            </main>

            <FooterSection />
        </>
    );
}