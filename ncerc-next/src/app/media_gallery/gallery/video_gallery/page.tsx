"use client";

import React from "react";
import Link from "next/link";
import {
    ArrowUpRight,
    ChevronRight,
    Play,
    Video,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const videos = [
    {
        id: "01",
        title: "NCERC Campus Story",
        category: "Campus Life",
        description:
            "Discover the campus, community and experiences that make NCERC a vibrant place to learn and grow.",
        videoId: "wdVKIPGZ06Q",
    },
    {
        id: "02",
        title: "NCERC Institutional Journey",
        category: "NCERC",
        description:
            "A glimpse into the institution, its academic environment and the journey of the NCERC community.",
        videoId: "9UDA4aGvAJA",
    },
    {
        id: "03",
        title: "Campus Experiences",
        category: "Campus Life",
        description:
            "Explore moments, activities and experiences from across the NCERC campus.",
        videoId: "idNRcRyUxGg",
    },
    {
        id: "04",
        title: "Events & Celebrations",
        category: "Events",
        description:
            "Relive memorable events, celebrations and activities that bring the campus community together.",
        videoId: "BFw-eMDevwE",
    },
    {
        id: "05",
        title: "Student Life at NCERC",
        category: "Student Life",
        description:
            "A closer look at student experiences, campus activities and the vibrant learning environment.",
        videoId: "i5f5sD5buxk",
    },
    {
        id: "06",
        title: "Moments at NCERC",
        category: "Highlights",
        description:
            "A collection of memorable moments and highlights from the NCERC community.",
        videoId: "a5C8DIOZS8I",
    },
    {
        id: "07",
        title: "NCERC Highlights",
        category: "Highlights",
        description:
            "Watch highlights showcasing the people, activities and experiences of NCERC.",
        videoId: "revkxEV5Rm8",
    },
];

const Page = () => {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#faf7f2] text-[#20235A]">

                {/* =====================================================
                    HERO
                ===================================================== */}

                <section className="border-b border-[#20235A]/10">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                        {/* Breadcrumb */}

                        <div className="mb-12 flex items-center gap-2 text-xs text-[#20235A]/45">

                            <Link
                                href="/"
                                className="transition-colors hover:text-[#D2B87C]"
                            >
                                Home
                            </Link>

                            <ChevronRight size={13} />

                            <Link
                                href="/gallery"
                                className="transition-colors hover:text-[#D2B87C]"
                            >
                                Media Gallery
                            </Link>

                            <ChevronRight size={13} />

                            <span className="text-[#20235A]/70">
                                Video Gallery
                            </span>

                        </div>


                        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.55fr] lg:items-end">

                            {/* Heading */}

                            <div>

                                <div className="mb-5 flex items-center gap-3">

                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#20235A]/50">
                                        NCERC Video Gallery
                                    </span>

                                </div>

                                <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">

                                    Stories that come
                                    <span className="text-[#D2B87C]">
                                        {" "}alive.
                                    </span>

                                </h1>

                            </div>


                            {/* Description */}

                            <div className="lg:border-l lg:border-[#20235A]/10 lg:pl-8">

                                <div className="mb-5 flex items-center gap-3">

                                    <Video
                                        size={18}
                                        strokeWidth={1.5}
                                        className="text-[#D2B87C]"
                                    />

                                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#20235A]/50">
                                        Video Archive
                                    </span>

                                </div>

                                <p className="text-sm leading-7 text-[#20235A]/55">
                                    Watch campus stories, events, celebrations,
                                    student experiences and memorable moments
                                    from the NCERC community.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    FEATURED VIDEO
                ===================================================== */}

                <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                    <div className="mb-8 flex items-end justify-between">

                        <div>

                            <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                Featured Video
                            </span>

                            <h2 className="font-serif text-2xl sm:text-3xl">
                                {videos[0].title}
                            </h2>

                        </div>

                        <span className="hidden text-xs text-[#20235A]/35 sm:block">
                            01 / {String(videos.length).padStart(2, "0")}
                        </span>

                    </div>


                    <div className="overflow-hidden rounded-2xl border border-[#20235A]/10 bg-white">

                        <div className="grid lg:grid-cols-[1.55fr_0.45fr]">

                            {/* Video */}

                            <div className="relative aspect-video bg-[#20235A]">

                                <iframe
                                    src={`https://www.youtube.com/embed/${videos[0].videoId}`}
                                    title={videos[0].title}
                                    className="absolute inset-0 h-full w-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />

                            </div>


                            {/* Content */}

                            <div className="flex flex-col justify-between p-6 sm:p-8">

                                <div>

                                    <div className="mb-6 flex items-center justify-between">

                                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                                            {videos[0].category}
                                        </span>

                                        <Play
                                            size={17}
                                            strokeWidth={1.5}
                                            className="text-[#20235A]/30"
                                        />

                                    </div>

                                    <h3 className="font-serif text-2xl leading-tight">
                                        {videos[0].title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-6 text-[#20235A]/50">
                                        {videos[0].description}
                                    </p>

                                </div>


                                <div className="mt-8 flex items-center justify-between border-t border-[#20235A]/10 pt-5">

                                    <span className="text-xs text-[#20235A]/40">
                                        Video 01
                                    </span>

                                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#20235A]/15 text-[#20235A]">
                                        <Play size={14} />
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    VIDEO ARCHIVE
                ===================================================== */}

                <section className="border-y border-[#20235A]/10 bg-white">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                        {/* Section Heading */}

                        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                            <div>

                                <div className="mb-3 flex items-center gap-2">

                                    <Video
                                        size={16}
                                        strokeWidth={1.5}
                                        className="text-[#D2B87C]"
                                    />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#20235A]/45">
                                        Video Archive
                                    </span>

                                </div>

                                <h2 className="font-serif text-2xl sm:text-3xl">
                                    Explore our video stories
                                </h2>

                            </div>


                            <p className="max-w-sm text-xs leading-6 text-[#20235A]/45">
                                Browse videos capturing the people, events,
                                activities and experiences of NCERC.
                            </p>

                        </div>


                        {/* Video Grid */}

                        <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">

                            {videos.slice(1).map((video) => (

                                <article
                                    key={video.id}
                                    className="group"
                                >

                                    {/* Video */}

                                    <div className="relative overflow-hidden rounded-xl bg-[#20235A]">

                                        <div className="relative aspect-video">

                                            <iframe
                                                src={`https://www.youtube.com/embed/${video.videoId}`}
                                                title={video.title}
                                                className="absolute inset-0 h-full w-full"
                                                frameBorder="0"
                                                loading="lazy"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                allowFullScreen
                                            />

                                        </div>

                                    </div>


                                    {/* Content */}

                                    <div className="pt-4">

                                        <div className="mb-2 flex items-center justify-between">

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                                {video.category}
                                            </span>

                                            <span className="text-[10px] text-[#20235A]/30">
                                                {video.id}
                                            </span>

                                        </div>


                                        <h3 className="font-serif text-xl leading-snug text-[#20235A] transition-colors duration-300 group-hover:text-[#D2B87C]">
                                            {video.title}
                                        </h3>


                                        <p className="mt-2 text-xs leading-6 text-[#20235A]/45">
                                            {video.description}
                                        </p>


                                        <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#20235A]/40">

                                            Watch video

                                            <ArrowUpRight
                                                size={12}
                                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                            />

                                        </div>

                                    </div>

                                </article>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    VIDEO JOURNEY / INFO
                ===================================================== */}

                <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                    <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">

                        {/* Number */}

                        <div className="rounded-2xl border border-[#20235A]/10 bg-white p-7 sm:p-9">

                            <span className="block font-serif text-5xl text-[#D2B87C]">
                                07
                            </span>

                            <span className="mt-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#20235A]/45">
                                Featured Videos
                            </span>

                        </div>


                        {/* Text */}

                        <div className="rounded-2xl bg-[#20235A] p-7 sm:p-9">

                            <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                Beyond the frame
                            </span>

                            <h2 className="max-w-2xl font-serif text-2xl leading-tight text-white sm:text-3xl">
                                Every video captures a different part of the
                                NCERC journey.
                            </h2>

                            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55">
                                From campus life and student experiences to
                                institutional events and celebrations, these
                                videos offer another way to experience the
                                moments that shape the NCERC community.
                            </p>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CTA
                ===================================================== */}

                <section className="mx-auto max-w-[1400px] px-6 pb-16 sm:px-10 lg:px-14 lg:pb-20">

                    <div className="flex flex-col gap-6 rounded-2xl border border-[#20235A]/10 bg-white px-7 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between">

                        <div>

                            <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                NCERC Media
                            </span>

                            <h2 className="font-serif text-2xl text-[#20235A] sm:text-3xl">
                                More moments are waiting to be discovered.
                            </h2>

                        </div>


                        <Link
                            href="/media_gallery/gallery"
                            className="group flex w-fit items-center gap-3 rounded-full bg-[#20235A] px-5 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:bg-[#D2B87C] hover:text-[#20235A]"
                        >
                            Back to Media Gallery

                            <ArrowUpRight
                                size={15}
                                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />

                        </Link>

                    </div>

                </section>

            </main>


            <FooterSection />
        </>
    );
};

export default Page;