"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    ArrowUpRight,
    CalendarDays,
    ChevronRight,
    Shield,
    Star,
    Users,
} from "lucide-react";

import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const activities = [
    {
        id: 588,
        title: "JUL 26_KARGIL VIJAY DIWAS",
        date: "July 26, 2023",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/1690357339.jpg",
        link: "https://ncerc.ac.in/news/588",
    },
    {
        id: 587,
        title: "JULY 17_WORLD DAY OF INTERNATIONAL JUSTICE",
        date: "July 17, 2023",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/1689766142.jpg",
        link: "https://ncerc.ac.in/news/587",
    },
    {
        id: 560,
        title: "Yoga Day 2023",
        date: "June 21, 2023",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/2023-JUN%2021_YOGA%20DAY.jpg",
        link: "https://ncerc.ac.in/news/560",
    },
    {
        id: 490,
        title: "74th Republic Day Celebration",
        date: "January 26, 2023",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/1675846635.jpeg",
        link: "https://ncerc.ac.in/news/490",
    },
    {
        id: 418,
        title:
            "Awareness Programs _ Anti Drugs Awareness Rally # NSS UNIT 209 _ NCC 23k Bn",
        date: "October 03, 2022",
        image:
            "https://ncerc.ac.in/globalpannel/public/images/1665462519.jpeg",
        link: "https://ncerc.ac.in/news/418",
    },
];

const page = () => {
    return (
        <>
            <main className="min-h-screen bg-[#faf7f2] text-[#1E1917]">
                <SiteHeader />

                {/* =====================================================
                    HERO
                ====================================================== */}
                <section className="relative overflow-hidden bg-[#20235A]">
                    <div className="pointer-events-none absolute right-[-150px] top-[-220px] h-[520px] w-[520px] rounded-full border border-[#D2B87C]/10" />

                    <div className="pointer-events-none absolute bottom-[-240px] left-[-170px] h-[460px] w-[460px] rounded-full border border-white/[0.04]" />

                    <div className="relative mx-auto max-w-8xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
                        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                            <div>
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-10 bg-[#D2B87C]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D2B87C]">
                                        National Cadet Corps
                                    </span>
                                </div>

                                <h1 className="max-w-4xl font-serif text-[43px] leading-[1.06] text-white sm:text-[58px] lg:text-[64px]">
                                    NCC
                                    <span className="block text-[#D2B87C]">
                                        Activities
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                                    A record of NCC activities at NCERC that encourage
                                    discipline, leadership, patriotism, social
                                    responsibility and active participation in the
                                    community.
                                </p>

                                <div className="mt-9 flex flex-wrap gap-3">
                                    <a
                                        href="#activities"
                                        className="inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#D2B87C]/10"
                                    >
                                        Explore Activities
                                        <ArrowUpRight
                                            size={15}
                                            strokeWidth={1.8}
                                        />
                                    </a>

                                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70">
                                        <Shield
                                            size={14}
                                            strokeWidth={1.6}
                                        />
                                        NCC • NCERC
                                    </div>
                                </div>
                            </div>

                            <div className="lg:justify-self-end">
                                <div className="max-w-sm border-l border-white/10 pl-6">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D2B87C]/30 bg-white/[0.04]">
                                            <Shield
                                                size={21}
                                                strokeWidth={1.4}
                                                className="text-[#D2B87C]"
                                            />
                                        </div>

                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                                                Core Values
                                            </p>

                                            <p className="mt-2 font-serif text-xl text-white">
                                                Discipline • Duty • Leadership
                                            </p>
                                        </div>
                                    </div>
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
                                NCC • Activities
                            </span>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    INTRODUCTION
                ====================================================== */}
                <section className="bg-[#faf7f2]">
                    <div className="mx-auto max-w-8xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-9 bg-[#D2B87C]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#20235A]/60">
                                        About NCC Activities
                                    </span>
                                </div>

                                <h2 className="mt-5 max-w-md font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                    Character built through
                                    <span className="block text-[#20235A]/50">
                                        discipline and service.
                                    </span>
                                </h2>
                            </div>

                            <div className="lg:border-l lg:border-[#20235A]/10 lg:pl-12">
                                <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                                    NCC provides students with opportunities to
                                    participate in national observances, awareness
                                    programmes, community initiatives and activities
                                    that develop a strong sense of discipline,
                                    responsibility and leadership.
                                </p>

                                <div className="mt-8 grid gap-5 sm:grid-cols-3">
                                    <div className="border-t border-[#20235A]/10 pt-4">
                                        <Users
                                            size={18}
                                            strokeWidth={1.5}
                                            className="text-[#8F7746]"
                                        />

                                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A]">
                                            Participation
                                        </p>
                                    </div>

                                    <div className="border-t border-[#20235A]/10 pt-4">
                                        <Shield
                                            size={18}
                                            strokeWidth={1.5}
                                            className="text-[#8F7746]"
                                        />

                                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A]">
                                            Discipline
                                        </p>
                                    </div>

                                    <div className="border-t border-[#20235A]/10 pt-4">
                                        <Star
                                            size={18}
                                            strokeWidth={1.5}
                                            className="text-[#8F7746]"
                                        />

                                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#20235A]">
                                            Leadership
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    ACTIVITY SECTION
                ====================================================== */}
                <section
                    id="activities"
                    className="border-y border-[#20235A]/10 bg-white"
                >
                    <div className="mx-auto max-w-8xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-9 bg-[#D2B87C]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#20235A]/60">
                                        Activity Archive
                                    </span>
                                </div>

                                <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                    NCC at NCERC
                                </h2>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="font-serif text-3xl text-[#20235A]">
                                    05
                                </span>

                                <span className="max-w-[130px] text-[10px] font-semibold uppercase leading-5 tracking-[0.18em] text-slate-400">
                                    Activities &amp; initiatives
                                </span>
                            </div>
                        </div>

                        {/* =================================================
                            FEATURED ACTIVITY
                        ================================================== */}
                        <Link
                            href={activities[0].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group mb-5 grid overflow-hidden rounded-2xl border border-[#20235A]/10 bg-[#faf7f2] lg:grid-cols-[1.25fr_0.75fr]"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/8] lg:aspect-auto lg:min-h-[410px]">
                                <Image
                                    src={activities[0].image}
                                    alt={activities[0].title}
                                    fill
                                    unoptimized
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 65vw"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/65 via-transparent to-transparent" />

                                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#20235A]/75 px-3 py-2 backdrop-blur-sm">
                                    <CalendarDays
                                        size={13}
                                        strokeWidth={1.6}
                                        className="text-[#D2B87C]"
                                    />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80">
                                        {activities[0].date}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Featured Event
                                </span>

                                <h3 className="mt-5 font-serif text-2xl leading-tight text-[#20235A] sm:text-3xl">
                                    {activities[0].title}
                                </h3>

                                <p className="mt-5 text-sm leading-7 text-slate-500">
                                    A commemorative NCC activity reflecting the values
                                    of courage, national service and remembrance.
                                </p>

                                <div className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A]">
                                    View Activity

                                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#20235A]/15 transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C]">
                                        <ArrowUpRight
                                            size={14}
                                            strokeWidth={1.7}
                                        />
                                    </span>
                                </div>
                            </div>
                        </Link>

                        {/* =================================================
                            REMAINING ACTIVITIES
                        ================================================== */}
                        <div className="grid gap-5 md:grid-cols-2">
                            {activities.slice(1).map((activity, index) => (
                                <Link
                                    key={activity.id}
                                    href={activity.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group grid overflow-hidden rounded-2xl border border-[#20235A]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D2B87C]/50 hover:shadow-xl hover:shadow-[#20235A]/5 sm:grid-cols-[0.85fr_1.15fr]"
                                >
                                    <div className="relative aspect-[4/3] min-h-[220px] overflow-hidden bg-[#f2efe8] sm:aspect-auto">
                                        <Image
                                            src={activity.image}
                                            alt={activity.title}
                                            fill
                                            unoptimized
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 40vw"
                                        />

                                        <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#20235A]/75 backdrop-blur-sm">
                                            <span className="font-serif text-sm text-[#D2B87C]">
                                                {String(index + 2).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center p-6 sm:p-7">
                                        <div className="flex items-center gap-2">
                                            <CalendarDays
                                                size={13}
                                                strokeWidth={1.6}
                                                className="text-[#8F7746]"
                                            />

                                            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                                                {activity.date}
                                            </span>
                                        </div>

                                        <h3 className="mt-4 font-serif text-xl leading-snug text-[#20235A]">
                                            {activity.title}
                                        </h3>

                                        <div className="mt-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#20235A]">
                                            Read More

                                            <ChevronRight
                                                size={14}
                                                strokeWidth={1.7}
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    VALUES SECTION
                ====================================================== */}
                <section className="bg-[#faf7f2]">
                    <div className="mx-auto max-w-8xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-9 bg-[#D2B87C]" />

                                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#20235A]/60">
                                        The NCC Spirit
                                    </span>
                                </div>

                                <h2 className="font-serif text-3xl leading-tight text-[#20235A] sm:text-4xl">
                                    Developing citizens
                                    <span className="block text-[#20235A]/50">
                                        with purpose.
                                    </span>
                                </h2>
                            </div>

                            <div className="grid gap-px overflow-hidden rounded-2xl border border-[#20235A]/10 bg-[#20235A]/10 sm:grid-cols-3">
                                <div className="bg-white p-7">
                                    <span className="font-serif text-3xl text-[#D2B87C]">
                                        01
                                    </span>

                                    <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                                        Discipline
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-500">
                                        Encouraging responsibility, commitment and
                                        personal discipline.
                                    </p>
                                </div>

                                <div className="bg-white p-7">
                                    <span className="font-serif text-3xl text-[#D2B87C]">
                                        02
                                    </span>

                                    <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                                        Leadership
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-500">
                                        Developing confidence, teamwork and leadership
                                        through participation.
                                    </p>
                                </div>

                                <div className="bg-white p-7">
                                    <span className="font-serif text-3xl text-[#D2B87C]">
                                        03
                                    </span>

                                    <h3 className="mt-6 font-serif text-xl text-[#20235A]">
                                        Service
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-500">
                                        Connecting students with meaningful service and
                                        community initiatives.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CLOSING CTA
                ====================================================== */}
                <section className="bg-white">
                    <div className="mx-auto max-w-8xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                        <div className="relative overflow-hidden rounded-3xl bg-[#20235A] px-7 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
                            <div className="pointer-events-none absolute right-[-100px] top-[-130px] h-[330px] w-[330px] rounded-full border border-[#D2B87C]/10" />

                            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                                <div>
                                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                        National Cadet Corps
                                    </span>

                                    <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                                        Discipline, leadership and service beyond
                                        the classroom.
                                    </h2>

                                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55">
                                        NCC activities at NCERC provide students with
                                        opportunities to participate, serve and grow
                                        through meaningful experiences.
                                    </p>
                                </div>

                                <Link
                                    href="/"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D2B87C] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#20235A] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#D2B87C]/10"
                                >
                                    Explore NCERC
                                    <ArrowUpRight
                                        size={15}
                                        strokeWidth={1.8}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <FooterSection />
            </main>
        </>
    );
};

export default page;