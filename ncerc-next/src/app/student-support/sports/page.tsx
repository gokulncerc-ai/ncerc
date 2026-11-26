"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    ArrowUpRight,
    ChevronRight,
    Dumbbell,
    Trophy,
    Users,
} from "lucide-react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";

const sportsActivities = [
    {
        number: "01",
        title: "Throwball Match by S2 MBA",
        date: "January 12, 2024",
        image: "https://ncerc.ac.in/globalpannel/public/images/1711179074.jpeg",
        href: "https://ncerc.ac.in/news/764",
        category: "Throwball",
    },
    {
        number: "02",
        title: "FOOTBALL MATCH FIRST YEAR VS FINAL YEAR",
        date: "November 03, 2023",
        image: "https://ncerc.ac.in/globalpannel/public/images/1711178489.jpg",
        href: "https://ncerc.ac.in/news/763",
        category: "Football",
    },
    {
        number: "03",
        title: "INTRA FOOTBALL MATCH MBA",
        date: "September 14, 2023",
        image: "https://ncerc.ac.in/globalpannel/public/images/1711177783.jpeg",
        href: "https://ncerc.ac.in/news/762",
        category: "Football",
    },
];

const page = () => {
    const featuredActivity = sportsActivities[0];
    const remainingActivities = sportsActivities.slice(1);

    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#faf7f2] text-[#1E1917]">
                {/* =====================================================
                    HERO
                ====================================================== */}
                <section className="relative overflow-hidden bg-[#20235A] text-white">
                    <div className="absolute -left-32 top-20 h-80 w-80 rounded-full border border-white/[0.06]" />
                    <div className="absolute -left-16 top-36 h-56 w-56 rounded-full border border-[#D2B87C]/15" />
                    <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#D2B87C]/10" />
                    <div className="absolute right-[-60px] top-[-60px] h-72 w-72 rounded-full border border-white/[0.05]" />

                    <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-20 sm:px-8 lg:px-12 lg:pb-14 lg:pt-24">
                        <div className="grid items-center gap-12 lg:grid-cols-[1fr_260px]">
                            <div className="max-w-4xl">
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-9 bg-[#D2B87C]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                        Campus Sports
                                    </span>
                                </div>

                                <h1 className="font-serif text-4xl leading-[0.95] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                                    Move together.
                                    <span className="block text-[#D2B87C]">
                                        Compete with purpose.
                                    </span>
                                </h1>

                                <p className="mt-6 max-w-2xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                                    Explore sporting activities and intra-campus
                                    matches that bring students together
                                    through participation, teamwork and healthy
                                    competition.
                                </p>

                                <div className="mt-7 flex flex-wrap gap-3">
                                    <a
                                        href="#activities"
                                        className="group inline-flex items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold text-[#20235A] transition-all duration-300 hover:bg-white"
                                    >
                                        Explore sports
                                        <ArrowUpRight
                                            size={15}
                                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        />
                                    </a>

                                    <a
                                        href="#sports"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-medium text-white transition-all duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                    >
                                        Sports culture
                                        <ChevronRight size={15} />
                                    </a>
                                </div>
                            </div>

                            <div className="hidden border-l border-white/15 pl-8 lg:block">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D2B87C]/40">
                                    <Trophy
                                        size={17}
                                        strokeWidth={1.5}
                                        className="text-[#D2B87C]"
                                    />
                                </div>

                                <p className="mt-6 font-serif text-3xl leading-[1.05] text-white">
                                    Energy.
                                    <span className="block text-[#D2B87C]">
                                        Teamwork.
                                    </span>
                                </p>

                                <div className="mt-6 h-px w-10 bg-[#D2B87C]" />

                                <p className="mt-4 text-xs leading-5 text-white/45">
                                    Building confidence and connection through
                                    sport and participation.
                                </p>
                            </div>
                        </div>

                        <div className="mt-14 grid grid-cols-2 border-t border-white/10 pt-5 sm:grid-cols-4">
                            <div className="border-r border-white/10 pr-4">
                                <p className="font-serif text-xl text-[#D2B87C]">
                                    03
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                    Activities
                                </p>
                            </div>

                            <div className="border-r border-white/10 px-4">
                                <p className="font-serif text-xl text-[#D2B87C]">
                                    02
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                    Football
                                </p>
                            </div>

                            <div className="border-r border-white/10 px-4">
                                <p className="font-serif text-xl text-[#D2B87C]">
                                    01
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                    Throwball
                                </p>
                            </div>

                            <div className="pl-4">
                                <p className="font-serif text-xl text-[#D2B87C]">
                                    2023–24
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/40">
                                    Activity Archive
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    INTRO
                ====================================================== */}
                <section id="sports" className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
                            <div>
                                <div className="flex items-center gap-3">
                                    <Dumbbell
                                        size={16}
                                        className="text-[#8F7746]"
                                    />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                        Sports at NCERC
                                    </span>
                                </div>
                            </div>

                            <div>
                                <h2 className="max-w-3xl font-serif text-3xl leading-[1.08] tracking-[-0.025em] text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Competition creates energy.
                                    <span className="text-[#8F7746]">
                                        {" "}Participation creates community.
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-2xl text-sm leading-7 text-[#1E1917]/60 sm:text-base">
                                    Sporting activities at NCERC provide
                                    students with opportunities to participate,
                                    compete and build stronger connections with
                                    their peers. From football matches to
                                    throwball, campus sports encourage
                                    teamwork, enthusiasm and a healthy
                                    competitive spirit.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    ACTIVITIES
                ====================================================== */}
                <section
                    id="activities"
                    className="bg-[#faf7f2] px-6 py-16 sm:px-8 lg:px-12 lg:py-20"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-10 flex flex-col gap-4 border-b border-[#20235A]/10 pb-7 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Sports archive
                                </p>

                                <h2 className="font-serif text-3xl tracking-[-0.025em] text-[#20235A] sm:text-4xl">
                                    Recent sporting moments
                                </h2>
                            </div>

                            <p className="max-w-xs text-xs leading-5 text-[#1E1917]/40">
                                Highlights from sporting activities and
                                inter-batch competitions at NCERC.
                            </p>
                        </div>

                        {/* FEATURED ACTIVITY */}
                        <Link
                            href={featuredActivity.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <article className="grid overflow-hidden rounded-[1.5rem] bg-[#20235A] lg:grid-cols-[1.3fr_0.7fr]">
                                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/9] lg:aspect-auto lg:min-h-[420px]">
                                    <Image
                                        src={featuredActivity.image}
                                        alt={featuredActivity.title}
                                        fill
                                        unoptimized
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/85 via-transparent to-[#20235A]/10" />

                                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#20235A]/65 px-3 py-2 backdrop-blur-md">
                                        <span className="font-serif text-sm text-[#D2B87C]">
                                            {featuredActivity.number}
                                        </span>

                                        <span className="h-3 w-px bg-white/20" />

                                        <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/75">
                                            {featuredActivity.category}
                                        </span>
                                    </div>

                                    <div className="absolute bottom-6 left-6 right-6">
                                        <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C]">
                                            Featured activity
                                        </p>

                                        <h3 className="max-w-xl font-serif text-2xl leading-tight text-white sm:text-3xl">
                                            {featuredActivity.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between p-7 text-white sm:p-8 lg:p-10">
                                    <div>
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D2B87C]/30">
                                            <Trophy
                                                size={19}
                                                strokeWidth={1.5}
                                                className="text-[#D2B87C]"
                                            />
                                        </div>

                                        <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#D2B87C]">
                                            Throwball
                                        </p>

                                        <div className="mt-5 h-px w-10 bg-[#D2B87C]" />

                                        <p className="mt-6 text-sm leading-6 text-white/55">
                                            A sporting activity bringing
                                            students together through
                                            participation, teamwork and
                                            friendly competition.
                                        </p>
                                    </div>

                                    <div className="mt-9">
                                        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                                            <span className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                                                Date
                                            </span>

                                            <span className="font-serif text-sm text-[#D2B87C]">
                                                {featuredActivity.date}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between text-xs font-medium">
                                            <span>Read news story</span>

                                            <ArrowUpRight
                                                size={16}
                                                className="text-[#D2B87C] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Link>

                        {/* REMAINING ACTIVITIES */}
                        <div className="mt-5 grid gap-5 md:grid-cols-2">
                            {remainingActivities.map((activity) => (
                                <Link
                                    key={activity.number}
                                    href={activity.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group"
                                >
                                    <article className="h-full overflow-hidden rounded-[1.5rem] border border-[#20235A]/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#D2B87C]/60 hover:shadow-[0_16px_45px_rgba(32,35,90,0.08)]">
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            <Image
                                                src={activity.image}
                                                alt={activity.title}
                                                fill
                                                unoptimized
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/75 via-transparent to-transparent" />

                                            <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#20235A]/85">
                                                <span className="font-serif text-sm text-[#D2B87C]">
                                                    {activity.number}
                                                </span>
                                            </div>

                                            <div className="absolute bottom-5 left-5">
                                                <span className="rounded-full border border-white/20 bg-[#20235A]/65 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-white/80 backdrop-blur-md">
                                                    {activity.category}
                                                </span>
                                            </div>

                                            <div className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#20235A] transition-all duration-300 group-hover:bg-[#D2B87C]">
                                                <ArrowUpRight size={15} />
                                            </div>
                                        </div>

                                        <div className="flex min-h-[205px] flex-col p-6">
                                            <div className="mb-4 flex items-center justify-between">
                                                <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#8F7746]">
                                                    {activity.date}
                                                </span>

                                                <span className="text-[9px] uppercase tracking-[0.14em] text-[#20235A]/30">
                                                    NCERC
                                                </span>
                                            </div>

                                            <h3 className="font-serif text-xl leading-[1.15] tracking-[-0.02em] text-[#20235A] transition-colors duration-300 group-hover:text-[#8F7746]">
                                                {activity.title}
                                            </h3>

                                            <div className="mt-auto flex items-center gap-2 pt-6 text-[9px] font-bold uppercase tracking-[0.17em] text-[#20235A]/45 transition-colors group-hover:text-[#20235A]">
                                                Read news story

                                                <ChevronRight
                                                    size={13}
                                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                                />
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    SPORTS VALUES
                ====================================================== */}
                <section className="bg-white">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
                            <div>
                                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Beyond the game
                                </p>

                                <h2 className="font-serif text-3xl leading-[1.05] tracking-[-0.025em] text-[#20235A] sm:text-4xl">
                                    Sport builds more than
                                    <span className="block text-[#8F7746]">
                                        competition.
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-md text-sm leading-6 text-[#1E1917]/55">
                                    Every match creates opportunities for
                                    students to develop confidence, teamwork
                                    and a stronger sense of community.
                                </p>
                            </div>

                            <div className="grid border-t border-[#20235A]/10 sm:grid-cols-3">
                                <div className="border-b border-[#20235A]/10 py-6 sm:border-b-0 sm:border-r sm:pr-7">
                                    <span className="font-serif text-lg text-[#D2B87C]">
                                        01
                                    </span>

                                    <h3 className="mt-7 font-serif text-xl text-[#20235A]">
                                        Teamwork
                                    </h3>

                                    <p className="mt-3 text-xs leading-5 text-[#1E1917]/50">
                                        Working together towards a shared
                                        objective.
                                    </p>
                                </div>

                                <div className="border-b border-[#20235A]/10 py-6 sm:border-b-0 sm:border-r sm:px-7">
                                    <span className="font-serif text-lg text-[#D2B87C]">
                                        02
                                    </span>

                                    <h3 className="mt-7 font-serif text-xl text-[#20235A]">
                                        Discipline
                                    </h3>

                                    <p className="mt-3 text-xs leading-5 text-[#1E1917]/50">
                                        Developing focus, consistency and
                                        respect for the game.
                                    </p>
                                </div>

                                <div className="py-6 sm:pl-7">
                                    <span className="font-serif text-lg text-[#D2B87C]">
                                        03
                                    </span>

                                    <h3 className="mt-7 font-serif text-xl text-[#20235A]">
                                        Community
                                    </h3>

                                    <p className="mt-3 text-xs leading-5 text-[#1E1917]/50">
                                        Creating connections through shared
                                        experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CLOSING STATEMENT
                ====================================================== */}
                <section className="bg-[#f2efe8]">
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
                        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.55fr]">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8F7746]">
                                    Campus spirit
                                </p>

                                <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-[1.05] tracking-[-0.03em] text-[#20235A] sm:text-4xl">
                                    Play hard.
                                    <span className="text-[#8F7746]">
                                        {" "}Grow together.
                                    </span>
                                </h2>
                            </div>

                            <div className="border-l border-[#20235A]/15 pl-7 lg:pl-10">
                                <Users
                                    size={22}
                                    strokeWidth={1.4}
                                    className="text-[#8F7746]"
                                />

                                <p className="mt-5 text-sm leading-6 text-[#1E1917]/55">
                                    NCERC sports activities create a space for
                                    students to participate, compete and
                                    celebrate the spirit of togetherness.
                                </p>

                                <div className="mt-6 h-px w-10 bg-[#D2B87C]" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
                    CTA
                ====================================================== */}
                <section className="bg-[#20235A] px-6 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
                    <div className="mx-auto max-w-7xl">
                        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
                            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full border border-[#D2B87C]/15" />
                            <div className="absolute -bottom-32 left-[30%] h-72 w-72 rounded-full border border-white/[0.05]" />

                            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                                <div className="max-w-2xl">
                                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        NCERC Sports
                                    </p>

                                    <h2 className="font-serif text-3xl leading-[1.05] tracking-[-0.025em] sm:text-4xl lg:text-5xl">
                                        Keep moving.
                                        <span className="block text-[#D2B87C]">
                                            Keep competing.
                                        </span>
                                    </h2>

                                    <p className="mt-5 max-w-xl text-sm leading-6 text-white/55">
                                        Explore the sporting moments that bring
                                        energy, participation and community to
                                        campus life.
                                    </p>
                                </div>

                                <a
                                    href="#activities"
                                    className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#D2B87C] px-5 py-3 text-xs font-semibold text-[#20235A] transition-all duration-300 hover:bg-white"
                                >
                                    View activities

                                    <ArrowUpRight
                                        size={14}
                                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
};

export default page;