"use client";

import React from "react";
import Link from "next/link";
import {
    ArrowUpRight,
    Camera,
    ChevronRight,
    Play,
    Quote,
    Video,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const gallerySections = [
    {
        number: "01",
        title: "Photo Gallery",
        description:
            "Explore memorable moments, campus events, celebrations, academic milestones and student activities at NCERC.",
        icon: Camera,
        href: "/media_gallery/gallery/photo_gallery",
    },
    {
        number: "02",
        title: "Video Gallery",
        description:
            "Watch campus stories, event highlights, celebrations, expert sessions and experiences from the NCERC community.",
        icon: Video,
        href: "/media_gallery/gallery/video_gallery",
    },
    {
        number: "03",
        title: "Testimonials",
        description:
            "Discover experiences and perspectives shared by students, alumni and members of the NCERC community.",
        icon: Quote,
        href: "/media_gallery/gallery/testimonials",
    },
];

const photoCollections = [
    {
        id: "01",
        title: "GREENOVA 2026",
        date: "2026",
        image: "/images/media-gallery/Greenova.webp",
        href: "/gallery/photo-gallery/greenova-2026",
    },
    {
        id: "02",
        title: "Smart India Hackathon 2026",
        date: "2026",
        image: "/images/media-gallery/hackathon.webp",
        href: "/gallery/photo-gallery/smart-india-hackathon-2026",
    },
    {
        id: "03",
        title: "Graduation Day Ceremony",
        date: "2026",
        image: "/images/media-gallery/Graduation.webp",
        href: "/gallery/photo-gallery/graduation-day-ceremony",
    },
    {
        id: "04",
        title: "Induction Ceremony 2026",
        date: "2026",
        image: "/images/media-gallery/induction.webp",
        href: "/gallery/photo-gallery/induction-ceremony-2026",
    },
    {
        id: "05",
        title: "United Economic Summit 2026",
        date: "2026",
        image: "/images/media-gallery/summit.webp",
        href: "/gallery/photo-gallery/united-economic-summit-2026",
    },
    {
        id: "06",
        title: "FIFA Fever Took Over the Campus",
        date: "2026",
        image: "/images/media-gallery/football.webp",
        href: "/gallery/photo-gallery/fifa-fever-took-over-the-campus",
    },
    {
        id: "07",
        title: "Greenova 2026",
        date: "2026",
        image: "/images/media-gallery/Greenova.webp",
        href: "/gallery/photo-gallery/greenova-2026",
    },
];

const page = () => {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#faf7f2] text-[#20235A]">

                {/* =====================================================
                    HERO
                ===================================================== */}
                <section className="relative overflow-hidden bg-[#20235A]">
                    {/* Decorative circles */}
                    <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-[#D2B87C]/15" />

                    <div className="pointer-events-none absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full border border-[#D2B87C]/10" />

                    <div className="pointer-events-none absolute bottom-[-180px] left-[-180px] h-[360px] w-[360px] rounded-full border border-white/5" />

                    <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8 lg:pb-32 lg:pt-16">

                        {/* Breadcrumb */}
                        <div className="mb-16 flex items-center gap-2 text-sm">
                            <Link
                                href="/"
                                className="text-white/50 transition-colors hover:text-[#D2B87C]"
                            >
                                Home
                            </Link>

                            <ChevronRight
                                size={14}
                                className="text-white/30"
                            />

                            <span className="text-[#D2B87C]">
                                Media Gallery
                            </span>
                        </div>

                        <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end">

                            {/* Main heading */}
                            <div>
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-12 bg-[#D2B87C]" />

                                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                        NCERC Media
                                    </span>
                                </div>

                                <h1 className="max-w-4xl font-serif text-5xl leading-[1.08] text-white sm:text-6xl lg:text-7xl">
                                    Moments that
                                    <span className="block text-[#D2B87C]">
                                        tell our story.
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                                    A visual archive of the people, events,
                                    achievements and experiences that shape
                                    life at NCERC.
                                </p>
                            </div>

                            {/* Side content */}
                            <div className="border-l border-white/15 pl-6">
                                <span className="text-xs uppercase tracking-[0.22em] text-white/40">
                                    Media & Gallery
                                </span>

                                <p className="mt-5 text-sm leading-7 text-white/55">
                                    Browse photographs, videos and testimonials
                                    from across the NCERC community.
                                </p>

                                <div className="mt-8 flex items-center gap-8">
                                    <div>
                                        <span className="block font-serif text-3xl text-white">
                                            03
                                        </span>

                                        <span className="mt-1 block text-xs uppercase tracking-wider text-white/40">
                                            Collections
                                        </span>
                                    </div>

                                    <div className="h-10 w-px bg-white/15" />

                                    <div>
                                        <span className="block font-serif text-3xl text-white">
                                            2026
                                        </span>

                                        <span className="mt-1 block text-xs uppercase tracking-wider text-white/40">
                                            Latest
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    THREE MEDIA CATEGORIES
                ===================================================== */}
                <section className="border-b border-[#20235A]/10 bg-white">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid md:grid-cols-3">
                            {gallerySections.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={item.number}
                                        href={item.href}
                                        className="group border-b border-[#20235A]/10 p-8 transition-colors duration-300 hover:bg-[#faf7f2] md:border-b-0 md:border-r md:p-10 last:border-r-0"
                                    >
                                        <div className="flex items-start justify-between">
                                            <span className="text-xs font-semibold tracking-[0.2em] text-[#D2B87C]">
                                                {item.number}
                                            </span>

                                            <ArrowUpRight
                                                size={19}
                                                className="text-[#20235A]/35 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#20235A]"
                                            />
                                        </div>

                                        <div className="mt-7 flex h-12 w-12 items-center justify-center rounded-full border border-[#20235A]/10 bg-[#faf7f2] transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C]">
                                            <Icon size={19} />
                                        </div>

                                        <h2 className="mt-7 font-serif text-2xl text-[#20235A]">
                                            {item.title}
                                        </h2>

                                        <p className="mt-3 text-sm leading-7 text-[#20235A]/55">
                                            {item.description}
                                        </p>

                                        <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em]">
                                            Explore

                                            <ChevronRight
                                                size={14}
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    PHOTO GALLERY INTRO
                ===================================================== */}
                <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
                    <div className="grid gap-10 lg:grid-cols-[260px_1fr]">

                        <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                Photo Gallery
                            </span>

                            <div className="mt-5 h-px w-16 bg-[#20235A]/15" />
                        </div>

                        <div>
                            <h2 className="max-w-3xl font-serif text-4xl leading-tight text-[#20235A] sm:text-5xl">
                                Every event has a story.
                            </h2>

                            <p className="mt-5 max-w-2xl text-base leading-8 text-[#20235A]/55">
                                Explore collections from campus celebrations,
                                academic milestones, student activities,
                                conferences and special events. Select a
                                collection to view all photographs from that
                                occasion.
                            </p>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    FEATURED PHOTO COLLECTION
                ===================================================== */}
                {photoCollections.length > 0 && (
                    <section className="pb-20 lg:pb-28">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">

                            <Link
                                href={photoCollections[0].href}
                                className="group block overflow-hidden bg-[#20235A]"
                            >
                                <div className="grid lg:grid-cols-[1.3fr_0.7fr]">

                                    {/* Image */}
                                    <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[500px]">
                                        <img
                                            src={photoCollections[0].image}
                                            alt={photoCollections[0].title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/70 via-transparent to-transparent" />

                                        <div className="absolute bottom-6 left-6">
                                            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A]">
                                                Featured Collection
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                                        <div>
                                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                                {photoCollections[0].date}
                                            </span>

                                            <h3 className="mt-6 font-serif text-3xl leading-tight text-white sm:text-4xl">
                                                {photoCollections[0].title}
                                            </h3>

                                            <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
                                                Explore the complete collection
                                                of photographs from this NCERC
                                                event.
                                            </p>
                                        </div>

                                        <div className="mt-12 flex items-center justify-between border-t border-white/15 pt-6">
                                            <span className="text-sm font-medium text-white">
                                                View collection
                                            </span>

                                            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-[#D2B87C] transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                                <ArrowUpRight size={18} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </section>
                )}

                {/* =====================================================
                    PHOTO COLLECTION GRID
                ===================================================== */}
                <section className="bg-white py-20 lg:py-28">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">

                        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

                            <div>
                                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                    Latest Collections
                                </span>

                                <h2 className="mt-4 font-serif text-4xl text-[#20235A] sm:text-5xl">
                                    Explore the archive
                                </h2>
                            </div>

                            <Link
                                href="/media_gallery/gallery/photo_gallery"
                                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#20235A]"
                            >
                                View all photos

                                <ArrowUpRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>

                        <div className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">

                            {photoCollections.slice(1).map(
                                (collection, index) => (
                                    <Link
                                        key={collection.id}
                                        href={collection.href}
                                        className="group"
                                    >
                                        {/* Image */}
                                        <div className="relative overflow-hidden bg-[#faf7f2]">

                                            <div className="aspect-[4/3] overflow-hidden">
                                                <img
                                                    src={collection.image}
                                                    alt={collection.title}
                                                    loading="lazy"
                                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>

                                            <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-semibold text-[#20235A]">
                                                {String(index + 2).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="pt-5">

                                            <div className="flex items-center justify-between gap-4">
                                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                                                    {collection.date}
                                                </span>

                                                <ArrowUpRight
                                                    size={17}
                                                    className="text-[#20235A]/35 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#20235A]"
                                                />
                                            </div>

                                            <h3 className="mt-3 font-serif text-2xl leading-tight text-[#20235A] transition-colors duration-300 group-hover:text-[#D2B87C]">
                                                {collection.title}
                                            </h3>

                                            <div className="mt-4 h-px w-10 bg-[#20235A]/15 transition-all duration-300 group-hover:w-16 group-hover:bg-[#D2B87C]" />
                                        </div>
                                    </Link>
                                )
                            )}

                        </div>
                    </div>
                </section>

                {/* =====================================================
                    VIDEO + TESTIMONIAL
                ===================================================== */}
                <section className="bg-[#faf7f2] py-20 lg:py-28">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">

                        <div className="grid gap-6 md:grid-cols-2">

                            {/* VIDEO */}
                            <Link
                                href="/media_gallery/gallery/video_gallery"
                                className="group relative min-h-[380px] overflow-hidden bg-[#20235A] p-8 sm:p-10"
                            >
                                <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full border border-[#D2B87C]/15" />

                                <div className="relative z-10 flex h-full flex-col justify-between">

                                    <div>
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D2B87C]/30 text-[#D2B87C]">
                                            <Play
                                                size={17}
                                                fill="currentColor"
                                            />
                                        </div>

                                        <span className="mt-8 block text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                            02 / Video Gallery
                                        </span>

                                        <h3 className="mt-4 max-w-md font-serif text-3xl leading-tight text-white sm:text-4xl">
                                            See NCERC in motion.
                                        </h3>

                                        <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
                                            Watch campus stories, events,
                                            celebrations and experiences.
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between border-t border-white/15 pt-5">

                                        <span className="text-sm text-white/55">
                                            Explore videos
                                        </span>

                                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[#D2B87C] transition-all duration-300 group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                            <ArrowUpRight size={17} />
                                        </span>

                                    </div>
                                </div>
                            </Link>

                            {/* TESTIMONIALS */}
                            <Link
                                href="/media_gallery/gallery/testimonials"
                                className="group relative min-h-[380px] overflow-hidden border border-[#20235A]/10 bg-white p-8 sm:p-10"
                            >
                                <div className="relative z-10 flex h-full flex-col justify-between">

                                    <div>
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#faf7f2] text-[#20235A]">
                                            <Quote size={19} />
                                        </div>

                                        <span className="mt-8 block text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                            03 / Testimonials
                                        </span>

                                        <h3 className="mt-4 max-w-md font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                            Voices from the NCERC community.
                                        </h3>

                                        <p className="mt-5 max-w-md text-sm leading-7 text-[#20235A]/50">
                                            Hear directly from students,
                                            alumni and members of our
                                            community.
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between border-t border-[#20235A]/10 pt-5">

                                        <span className="text-sm text-[#20235A]/55">
                                            Read testimonials
                                        </span>

                                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#20235A]/15 text-[#20235A] transition-all duration-300 group-hover:bg-[#20235A] group-hover:text-white">
                                            <ArrowUpRight size={17} />
                                        </span>

                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </section>

                {/* =====================================================
                    FINAL CTA
                ===================================================== */}
                <section className="bg-[#20235A]">
                    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">

                        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

                            <div>
                                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                    NCERC Media & Stories
                                </span>

                                <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-white sm:text-5xl">
                                    More than memories.
                                    <span className="block text-white/40">
                                        A record of our journey.
                                    </span>
                                </h2>
                            </div>

                            <Link
                                href="/"
                                className="group inline-flex w-fit items-center gap-3 border border-white/20 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
                            >
                                Back to NCERC

                                <ArrowUpRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
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

export default page;