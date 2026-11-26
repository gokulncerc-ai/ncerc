"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { displayDate, formatLongDate, imageOf } from "@/lib/publicApi";
import RemoteImage from "@/components/common/RemoteImage";
import { useSearchParams } from "next/navigation";
import {
    ArrowUpRight,
    CalendarDays,
    ChevronRight,
    MapPin,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import { usePublicEvent } from "@/lib/usePublicList";
const LIST_HREF = "/media_gallery/news_and_events";

function NotFoundBox() {
    return (
        <div className="mx-auto max-w-xl px-6 py-32 text-center">
            <h1 className="font-serif text-4xl">We could not show this page</h1>
            <Link
                href={LIST_HREF}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#20235A] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#D2B87C] hover:text-[#20235A]"
            >
                Back to News &amp; Events
            </Link>
        </div>
    );
}

function Detail({ slug }: { slug: string }) {
    const { item, loading, notFound, error } = usePublicEvent(slug);
    const isEvent = item?.type === "event";

    if (loading) {
        return <p className="py-40 text-center text-sm text-[#20235A]/50">Loading…</p>;
    }

    if (notFound || error || !item) {
        return <NotFoundBox />;
    }
    const cover = imageOf(item);
    // when the cover came from the gallery, don't show that same photo twice
    const galleryImages = item.coverImage?.url ? item.gallery ?? [] : (item.gallery ?? []).slice(1);

    return (
        <>
            {/* HEADER */}
            <section className="border-b border-[#20235A]/10">
                <div className="mx-auto max-w-5xl px-6 py-12 sm:px-10 lg:py-16">

                    <div className="mb-10 flex flex-wrap items-center gap-2 text-xs text-[#20235A]/45">
                        <Link href="/" className="transition-colors hover:text-[#D2B87C]">Home</Link>
                        <ChevronRight size={13} />
                        <Link href={LIST_HREF} className="transition-colors hover:text-[#D2B87C]">
                            News &amp; Events
                        </Link>
                        <ChevronRight size={13} />
                        <span className="line-clamp-1 text-[#20235A]/70">{item.title}</span>
                    </div>

                    <span className="rounded-full bg-[#20235A] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                        {isEvent ? "Event" : "News"}
                    </span>

                    <h1 className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl">
                        {item.title}
                    </h1>

                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#20235A]/60">
                        <span className="flex items-center gap-2">
                            <CalendarDays size={15} className="text-[#D2B87C]" />
                            {formatLongDate(displayDate(item))}
                            {isEvent && item.endDate && ` – ${formatLongDate(item.endDate)}`}
                        </span>
                        {isEvent && (
                            <span className="flex items-center gap-2">
                                <MapPin size={15} className="text-[#D2B87C]" />
                                {item.venue ?? "NCERC Campus"}
                            </span>
                        )}
                    </div>

                    {item.summary && (
                        <p className="mt-6 max-w-3xl text-base leading-8 text-[#20235A]/60">
                            {item.summary}
                        </p>
                    )}
                </div>
            </section>

            {/* BODY */}
            <section className="mx-auto max-w-5xl px-6 py-12 sm:px-10 lg:py-16">

                <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-white">
                    <RemoteImage src={cover} alt={item.title} width={1400} eager />
                </div>

                {item.description && (
                    <div className="mt-10 whitespace-pre-line text-base leading-8 text-[#20235A]/75">
                        {item.description}
                    </div>
                )}

                {item.gallery && item.gallery.length > 0 && (
                    <div className="mt-14">
                        <h2 className="font-serif text-2xl">Gallery</h2>
                        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                            {item.gallery.map((g, i) => (
                                <div
                                    key={`${g.url}-${i}`}
                                    className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white"
                                >
                                    <RemoteImage src={g.url} alt={`${item.title} photo ${i + 1}`} width={700} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <Link
                    href={LIST_HREF}
                    className="mt-14 inline-flex items-center gap-2 text-sm font-semibold text-[#20235A] transition hover:text-[#D2B87C]"
                >
                    <ArrowUpRight size={15} className="-scale-x-100" />
                    Back to all news &amp; events
                </Link>
            </section>
        </>
    );
}

function DetailFromUrl() {
    const slug = useSearchParams().get("slug");
    if (!slug) return <NotFoundBox />;
    return <Detail slug={slug} />;
}

export default function Page() {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#faf7f2] text-[#20235A]">
                <Suspense
                    fallback={<p className="py-40 text-center text-sm text-[#20235A]/50">Loading…</p>}
                >
                    <DetailFromUrl />
                </Suspense>
            </main>

            <FooterSection />
        </>
    );
}