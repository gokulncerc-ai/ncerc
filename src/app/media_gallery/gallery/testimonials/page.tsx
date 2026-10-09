"use client";

import React from "react";
import Link from "next/link";
import {
    ArrowUpRight,
    ChevronRight,
    Play,
    Quote,
    Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const testimonials = [
    {
        id: "01",
        category: "Student Experience",
        title: "A journey of learning and growth",
        description:
            "Hear directly from the NCERC community about their experiences, learning journey and life on campus.",
        videoId: "gg_nxwj8ANU",
    },
    {
        id: "02",
        category: "Student Voice",
        title: "Life beyond the classroom",
        description:
            "A personal perspective on academics, campus life, activities and the experiences that shape student life.",
        videoId: "WYPMQuaPhaM",
    },
    {
        id: "03",
        category: "Community Voice",
        title: "Experiences that stay with us",
        description:
            "Discover personal experiences and reflections from members of the NCERC community.",
        videoId: "bIVQVvkYf0U",
    },
    {
        id: "04",
        category: "Student Perspective",
        title: "Learning, people and possibilities",
        description:
            "A closer look at the opportunities, connections and experiences that form the NCERC journey.",
        videoId: "XKk5xPvRYZY",
    },
    {
        id: "05",
        category: "NCERC Experience",
        title: "A place to grow and belong",
        description:
            "Listen to a personal account of the NCERC experience and the memories created along the way.",
        videoId: "tiZmOc-WdjA",
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

                <section className="border-b border-[#20235A]/10 bg-[#faf7f2]">

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
                                Testimonials
                            </span>

                        </div>


                        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.55fr] lg:items-end">

                            {/* Heading */}

                            <div>

                                <div className="mb-5 flex items-center gap-3">

                                    <span className="h-px w-8 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#20235A]/50">
                                        NCERC Testimonials
                                    </span>

                                </div>

                                <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">

                                    Voices that tell
                                    <span className="text-[#D2B87C]">
                                        {" "}our story.
                                    </span>

                                </h1>

                            </div>


                            {/* Description */}

                            <div className="lg:border-l lg:border-[#20235A]/10 lg:pl-8">

                                <div className="mb-5 flex items-center gap-3">

                                    <ChevronRight
                                        size={18}
                                        strokeWidth={1.5}
                                        className="text-[#D2B87C]"
                                    />

                                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#20235A]/50">
                                        Community Voices
                                    </span>

                                </div>

                                <p className="text-sm leading-7 text-[#20235A]/55">
                                    Hear directly from students and members of
                                    the NCERC community as they share their
                                    experiences, perspectives and memories.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    INTRODUCTION
                ===================================================== */}

                <section className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 lg:px-14 lg:py-16">

                    <div className="grid gap-8 lg:grid-cols-[0.35fr_1fr]">

                        <div>

                            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                The NCERC Experience
                            </span>

                        </div>


                        <div className="max-w-4xl">

                            <h2 className="font-serif text-2xl leading-tight sm:text-3xl lg:text-4xl">
                                Every experience is different.
                                <br />
                                Every voice adds another perspective.
                            </h2>

                            <p className="mt-5 max-w-3xl text-sm leading-7 text-[#20235A]/50">
                                From classrooms and campus activities to
                                friendships, opportunities and personal growth,
                                the NCERC journey is shaped by the people who
                                experience it. Explore their stories through
                                these video testimonials.
                            </p>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    FEATURED TESTIMONIAL
                ===================================================== */}

                <section className="mx-auto max-w-[1400px] px-6 pb-16 sm:px-10 lg:px-14 lg:pb-20">

                    <div className="mb-8 flex items-end justify-between">

                        <div>

                            <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                Featured Voice
                            </span>

                            <h2 className="font-serif text-2xl sm:text-3xl">
                                {testimonials[0].title}
                            </h2>

                        </div>

                        <span className="hidden text-xs text-[#20235A]/35 sm:block">
                            01 / {String(testimonials.length).padStart(2, "0")}
                        </span>

                    </div>


                    <div className="overflow-hidden rounded-2xl border border-[#20235A]/10 bg-white">

                        <div className="grid lg:grid-cols-[1.55fr_0.45fr]">

                            {/* Video */}

                            <div className="relative aspect-video bg-[#20235A]">

                                <iframe
                                    src={`https://www.youtube.com/embed/${testimonials[0].videoId}`}
                                    title={testimonials[0].title}
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
                                            {testimonials[0].category}
                                        </span>

                                        <Quote
                                            size={19}
                                            strokeWidth={1.5}
                                            className="text-[#20235A]/20"
                                        />

                                    </div>


                                    <h3 className="font-serif text-2xl leading-tight">
                                        {testimonials[0].title}
                                    </h3>


                                    <p className="mt-4 text-sm leading-6 text-[#20235A]/50">
                                        {testimonials[0].description}
                                    </p>

                                </div>


                                <div className="mt-8 flex items-center justify-between border-t border-[#20235A]/10 pt-5">

                                    <span className="text-xs text-[#20235A]/40">
                                        Testimonial 01
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
                    TESTIMONIAL ARCHIVE
                ===================================================== */}

                <section className="border-y border-[#20235A]/10 bg-white">

                    <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                        {/* Section Header */}

                        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                            <div>

                                <div className="mb-3 flex items-center gap-2">

                                    <Users
                                        size={16}
                                        strokeWidth={1.5}
                                        className="text-[#D2B87C]"
                                    />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#20235A]/45">
                                        Community Voices
                                    </span>

                                </div>

                                <h2 className="font-serif text-2xl sm:text-3xl">
                                    More experiences
                                </h2>

                            </div>


                            <p className="max-w-sm text-xs leading-6 text-[#20235A]/45">
                                Explore perspectives and experiences shared by
                                members of the NCERC community.
                            </p>

                        </div>


                        {/* Testimonials Grid */}

                        <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-2">

                            {testimonials.slice(1).map((testimonial) => (

                                <article
                                    key={testimonial.id}
                                    className="group"
                                >

                                    {/* Video */}

                                    <div className="relative overflow-hidden rounded-xl bg-[#20235A]">

                                        <div className="relative aspect-video">

                                            <iframe
                                                src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                                                title={testimonial.title}
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
                                                {testimonial.category}
                                            </span>

                                            <span className="text-[10px] text-[#20235A]/30">
                                                {testimonial.id}
                                            </span>

                                        </div>


                                        <h3 className="font-serif text-xl leading-snug text-[#20235A] transition-colors duration-300 group-hover:text-[#D2B87C]">
                                            {testimonial.title}
                                        </h3>


                                        <p className="mt-2 max-w-xl text-xs leading-6 text-[#20235A]/45">
                                            {testimonial.description}
                                        </p>


                                        <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#20235A]/40">

                                            Watch testimonial

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
                    QUOTE / STATEMENT SECTION
                ===================================================== */}

                <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

                    <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

                        {/* Small card */}

                        <div className="rounded-2xl border border-[#20235A]/10 bg-white p-7 sm:p-9">

                            <Quote
                                size={32}
                                strokeWidth={1}
                                className="text-[#D2B87C]"
                            />

                            <span className="mt-8 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#20235A]/40">
                                05 Voices
                            </span>

                            <p className="mt-3 text-sm leading-6 text-[#20235A]/50">
                                Different journeys. Different perspectives.
                                One shared connection to NCERC.
                            </p>

                        </div>


                        {/* Main statement */}

                        <div className="rounded-2xl bg-[#20235A] p-8 sm:p-10 lg:p-12">

                            <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                Beyond academics
                            </span>

                            <h2 className="max-w-3xl font-serif text-2xl leading-tight text-white sm:text-3xl lg:text-4xl">
                                The NCERC experience is built through people,
                                possibilities and the moments we carry forward.
                            </h2>

                            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55">
                                These testimonials offer a glimpse into those
                                experiences through the voices of the people
                                who have been part of the journey.
                            </p>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CTA
                ===================================================== */}

                <section className="mx-auto max-w-[1400px] px-6 pb-16 sm:px-10 lg:px-14 lg:pb-20">

                    <div className="flex flex-col gap-6 rounded-2xl bg-[#20235A] px-7 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between">

                        <div>

                            <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                NCERC Media
                            </span>

                            <h2 className="font-serif text-2xl text-white sm:text-3xl">
                                Explore more of the NCERC story.
                            </h2>

                        </div>


                        <Link
                            href="/media_gallery/gallery"
                            className="group flex w-fit items-center gap-3 rounded-full border border-white/20 px-5 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A]"
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