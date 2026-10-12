"use client";
import Image from "next/image";
import React, { useState } from "react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../departmentnavigation/page";

import {
    ArrowRight,
    ArrowUpRight,
    CalendarDays,
    ChevronLeft,
    ChevronRight,
    X,
} from "lucide-react";

type Activity = {
    number: string;
    title: string;
    image: string;
    description?: string;
    featured?: boolean;
};

const activities: Activity[] = [
    {
        number: "01",
        title: "Six Day Faculty Development Program",
        image:
            "https://ncerc.ac.in/applied-science-and-humanities/img/activities/six-day-faculty-program.jpg",
    },
    {
        number: "02",
        title: "Towards a Healthier Tomorrow",
        image:
            "https://ncerc.ac.in/applied-science-and-humanities/img/activities/Towards%20a%20Healthier%20Tomorrow.jpg",
    },
    {
        number: "03",
        title: "National Science Day Celebration",
        image:
            "https://ncerc.ac.in/applied-science-and-humanities/img/activities/National%20Science%20Day%20Celebration.jpg",
    },
    {
        number: "04",
        title: "Navigating BTech Skills for success and developing human values",
        image:
            "https://ncerc.ac.in/applied-science-and-humanities/img/activities/Navigating%20BTech%20Skills%20for%20sucess%20and%20developing%20human%20values%2022092025%20copy.webp",
    },
    {
        number: "05",
        title: "A Journey through Atmospheric Science",
        image:
            "https://ncerc.ac.in/applied-science-and-humanities/img/activities/A%20Journey%20through%20Atmospheric%20Science%2021112024%20copy.webp",
    },
    {
        number: "06",
        title: "Why Mathematics is the Queen of Sciences",
        image:
            "https://ncerc.ac.in/applied-science-and-humanities/img/activities/Why%20Mathematics%20is%20the%20Queen%20of%20Sciences%20-%2025102024%20copy.webp",
    },
    {
        number: "07",
        title: "5-Day Motivational Programme for S2 Students at NCERC – Igniting the Mind to Success",
        image:
            "https://ncerc.ac.in/applied-science-and-humanities/img/activities/5-Day-Motivational-Programme.jpeg",
        description:
            "The Department of Applied Science and Humanities at NCERC, in association with IQAC, conducted a 5-Day Motivational Programme for S2 students from February 2 to February 6, 2026, at Aryabhatta Seminar Hall. The sessions were delivered by Mr. Sanju P Cherian, a certified trainer and counsellor, aimed at improving student motivation, confidence, and academic performance. Students from multiple departments actively participated in the programme.",
        featured: true,
    },
];

export default function ActivitiesPage() {
    const [selectedActivity, setSelectedActivity] =
        useState<Activity | null>(null);

    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const openActivity = (activity: Activity) => {
        const index = activities.findIndex(
            (item) => item.number === activity.number
        );

        setSelectedIndex(index);
        setSelectedActivity(activity);
    };

    const showPrevious = () => {
        if (selectedIndex <= 0) return;

        const previous = activities[selectedIndex - 1];

        setSelectedIndex(selectedIndex - 1);
        setSelectedActivity(previous);
    };

    const showNext = () => {
        if (selectedIndex >= activities.length - 1) return;

        const next = activities[selectedIndex + 1];

        setSelectedIndex(selectedIndex + 1);
        setSelectedActivity(next);
    };

    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#FAF9F6] text-[#1E1917]">
                {/* =========================================================
                    HERO
                ========================================================== */}
                <section className="relative isolate overflow-hidden bg-[#20235A]">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute -right-32 -top-36 h-[520px] w-[520px] rounded-full border border-white/10" />

                        <div className="absolute right-[-10px] top-[-40px] h-[350px] w-[350px] rounded-full border border-[#D2B87C]/20" />

                        <div className="absolute bottom-[-170px] left-[42%] h-[400px] w-[400px] rounded-full bg-[#D2B87C]/10 blur-3xl" />

                        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_52%,rgba(210,184,124,0.055)_52%,transparent_76%)]" />
                    </div>

                    <div className="mx-auto grid min-h-[470px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.2fr_0.8fr] md:py-24 lg:px-12">
                        <div className="max-w-3xl">
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Applied Science & Humanities
                                </span>
                            </div>

                            <h1 className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
                                Learning Beyond
                                <br />
                                <span className="italic text-[#D2B87C]">
                                    the Classroom.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                                Discover the academic activities, programmes,
                                celebrations, and learning experiences that
                                bring the department&apos;s educational vision to
                                life.
                            </p>

                            <div className="mt-9 flex flex-wrap items-center gap-5">
                                <a
                                    href="#activities"
                                    className="inline-flex items-center gap-3 rounded-sm bg-[#D2B87C] px-6 py-3.5 text-sm font-semibold text-[#20235A] transition-colors duration-300 hover:bg-white"
                                >
                                    Explore Activities
                                    <ArrowRight size={17} />
                                </a>

                                <span className="text-xs tracking-wide text-white/50">
                                    Learn · Engage · Experience
                                </span>
                            </div>
                        </div>

                        {/* Hero visual */}
                        <div className="relative mx-auto w-full max-w-[420px]">
                            <div className="absolute -inset-4 rounded-sm border border-[#D2B87C]/20" />

                            <div className="relative overflow-hidden border border-white/10 bg-white/[0.055] p-4 sm:p-5">
                                <div className="relative h-[320px] overflow-hidden sm:h-[350px]">
                                    <Image
                                        src={activities[6].image}
                                        alt={activities[6].title}
                                        fill
                                        priority
                                        sizes="(min-width: 768px) 420px, 100vw"
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/90 via-[#20235A]/10 to-transparent" />

                                    <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                                        <span className="border border-white/20 bg-[#20235A]/70 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D2B87C] backdrop-blur-sm">
                                            Featured Activity
                                        </span>

                                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#20235A]/60 text-white backdrop-blur-sm">
                                            <ArrowUpRight size={16} />
                                        </span>
                                    </div>

                                    <div className="absolute bottom-5 left-5 right-5">
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                            2026 · Student Development
                                        </p>

                                        <h2 className="mt-2 max-w-sm font-serif text-xl leading-tight text-white sm:text-2xl">
                                            5-Day Motivational Programme
                                        </h2>
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center justify-between px-1">
                                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                                        NCERC · Department Activities
                                    </span>

                                    <span className="h-1.5 w-1.5 rounded-full bg-[#D2B87C]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#D2B87C]/70 to-transparent" />
                </section>

                {/* --------navigations-------- */}
                <DepartmentNavigation />
                {/* =========================================================
                    INTRO
                ========================================================== */}
                <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                    <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.72fr_1.28fr] md:gap-16">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                Department Activities
                            </p>

                            <h2 className="mt-5 max-w-md font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-[46px]">
                                Experiences that extend the learning journey.
                            </h2>
                        </div>

                        <div className="flex flex-col justify-center">
                            <p className="text-base leading-8 text-[#625D57]">
                                From faculty development programmes and
                                scientific celebrations to motivational
                                sessions and expert talks, the department
                                creates opportunities for students and faculty
                                to learn, interact, explore ideas, and develop
                                skills beyond regular classroom teaching.
                            </p>

                            <div className="mt-7 h-px w-full bg-[#DDD7CB]" />

                            <div className="mt-5 flex items-center gap-3 text-sm font-medium text-[#20235A]">
                                <span className="h-2 w-2 rounded-full bg-[#D2B87C]" />

                                Academic · Professional · Student Development
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    FEATURED ACTIVITY
                ========================================================== */}
                <section className="border-y border-[#E7E1D6] bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex items-end justify-between gap-6">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Featured Activity
                                </p>

                                <h2 className="mt-4 font-serif text-3xl font-medium text-[#20235A] sm:text-4xl lg:text-5xl">
                                    A programme for student growth.
                                </h2>
                            </div>

                            <span className="hidden text-xs uppercase tracking-[0.16em] text-[#A08A5D] sm:block">
                                2026
                            </span>
                        </div>

                        <div className="mt-12 grid overflow-hidden border border-[#E2DDD3] bg-[#FAF9F6] md:grid-cols-[1.1fr_0.9fr]">
                            {/* Image */}
                            <button
                                type="button"
                                onClick={() => openActivity(activities[6])}
                                className="group relative min-h-[340px] overflow-hidden text-left sm:min-h-[430px] md:min-h-[520px]"
                            >
                                <Image
                                    src={activities[6].image}
                                    alt={activities[6].title}
                                    fill
                                    sizes="(min-width: 768px) 55vw, 100vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/65 via-transparent to-transparent" />

                                <span className="absolute left-6 top-6 flex h-10 items-center border border-white/25 bg-[#20235A]/75 px-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                                    Activity 07
                                </span>

                                <span className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#20235A]/70 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                    <ArrowUpRight size={18} />
                                </span>
                            </button>

                            {/* Content */}
                            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                                <div className="flex items-center gap-3">
                                    <CalendarDays
                                        size={17}
                                        strokeWidth={1.4}
                                        className="text-[#8F7746]"
                                    />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                        February 2026
                                    </span>
                                </div>

                                <h3 className="mt-5 font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl">
                                    5-Day Motivational Programme for S2
                                    Students at NCERC – Igniting the Mind to
                                    Success
                                </h3>

                                <div className="mt-6 h-px w-14 bg-[#D2B87C]" />

                                <p className="mt-6 text-sm leading-7 text-[#706A63]">
                                    The Department of Applied Science and
                                    Humanities at NCERC, in association with
                                    IQAC, conducted a 5-Day Motivational
                                    Programme for S2 students from February 2
                                    to February 6, 2026, at Aryabhatta Seminar
                                    Hall.
                                </p>

                                <p className="mt-4 text-sm leading-7 text-[#706A63]">
                                    The sessions were delivered by Mr. Sanju P
                                    Cherian, a certified trainer and counsellor,
                                    and focused on improving student
                                    motivation, confidence, and academic
                                    performance.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => openActivity(activities[6])}
                                    className="mt-8 inline-flex w-fit items-center gap-3 border border-[#20235A] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#20235A] transition-all duration-300 hover:bg-[#20235A] hover:text-white"
                                >
                                    View Activity
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    ACTIVITY GRID
                ========================================================== */}
                <section
                    id="activities"
                    className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Academic Activities
                                </p>

                                <h2 className="mt-4 font-serif text-3xl font-medium text-[#20235A] sm:text-4xl lg:text-5xl">
                                    Moments worth remembering.
                                </h2>
                            </div>

                            <p className="max-w-md text-sm leading-7 text-[#706A63]">
                                Explore programmes, celebrations, expert
                                sessions, and development initiatives
                                conducted by the department.
                            </p>
                        </div>

                        {/* Editorial masonry-like grid */}
                        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {activities.slice(0, 6).map((activity, index) => (
                                <article
                                    key={activity.number}
                                    className={`group overflow-hidden border border-[#E2DDD3] bg-white ${index === 0
                                        ? "md:col-span-2 lg:col-span-2"
                                        : ""
                                        }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => openActivity(activity)}
                                        className="block w-full text-left"
                                    >
                                        <div
                                            className={`relative overflow-hidden bg-[#E7E2D9] ${index === 0
                                                ? "h-[360px] sm:h-[430px]"
                                                : "h-[300px]"
                                                }`}
                                        >
                                            <Image
                                                src={activity.image}
                                                alt={activity.title}
                                                fill
                                                sizes={
                                                    index === 0
                                                        ? "(min-width: 1024px) 66vw, 100vw"
                                                        : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                                }
                                                className="object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/80 via-transparent to-transparent opacity-80" />

                                            <span className="absolute left-5 top-5 flex h-9 min-w-9 items-center justify-center border border-white/25 bg-[#20235A]/75 px-2 text-[10px] font-semibold tracking-[0.15em] text-white backdrop-blur-sm">
                                                {activity.number}
                                            </span>

                                            <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-[#20235A]/70 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                                                <ArrowUpRight size={16} />
                                            </span>

                                            <div className="absolute bottom-5 left-5 right-5">
                                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                                    Department Activity
                                                </span>

                                                <h3
                                                    className={`mt-2 max-w-xl font-serif font-medium leading-tight text-white ${index === 0
                                                        ? "text-2xl sm:text-3xl"
                                                        : "text-xl"
                                                        }`}
                                                >
                                                    {activity.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </button>

                                    <div className="flex items-center justify-between gap-4 p-5">
                                        <span className="text-[10px] uppercase tracking-[0.15em] text-[#8A837B]">
                                            Applied Science & Humanities
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                openActivity(activity)
                                            }
                                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D8D1C5] text-[#20235A] transition-all duration-300 hover:border-[#20235A] hover:bg-[#20235A] hover:text-white"
                                            aria-label={`View ${activity.title}`}
                                        >
                                            <ArrowRight size={15} />
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    ALL ACTIVITIES LIST
                ========================================================== */}
                <section className="border-t border-[#E7E1D6] bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F7746]">
                                    Activity Archive
                                </p>

                                <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl">
                                    Explore every experience.
                                </h2>

                                <p className="mt-5 max-w-sm text-sm leading-7 text-[#706A63]">
                                    A collection of department activities
                                    highlighting academic engagement,
                                    scientific curiosity, and student
                                    development.
                                </p>
                            </div>

                            <div className="border-t border-[#DDD7CB]">
                                {activities.map((activity) => (
                                    <button
                                        key={`archive-${activity.number}`}
                                        type="button"
                                        onClick={() => openActivity(activity)}
                                        className="group flex w-full items-center gap-5 border-b border-[#DDD7CB] py-5 text-left transition-colors duration-300 hover:bg-[#FAF9F6] sm:gap-7 sm:px-4"
                                    >
                                        <span className="font-serif text-sm text-[#A08A5D]">
                                            {activity.number}
                                        </span>

                                        <span className="flex-1">
                                            <span className="block font-serif text-lg leading-tight text-[#20235A] transition-colors group-hover:text-[#8F7746] sm:text-xl">
                                                {activity.title}
                                            </span>

                                            <span className="mt-2 block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#999189]">
                                                Applied Science & Humanities
                                            </span>
                                        </span>

                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D8D1C5] text-[#20235A] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-white">
                                            <ArrowUpRight size={15} />
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    CLOSING CTA
                ========================================================== */}
                <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
                    <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#20235A] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
                        <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10" />

                        <div className="pointer-events-none absolute -right-2 -top-10 h-36 w-36 rounded-full border border-[#D2B87C]/30" />

                        <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
                            <div className="max-w-2xl">
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D2B87C]">
                                    Applied Science & Humanities
                                </p>

                                <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-white sm:text-4xl">
                                    Learning continues through every
                                    experience.
                                </h2>

                                <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
                                    Discover the facilities and faculty that
                                    support the department&apos;s academic
                                    environment.
                                </p>
                            </div>

                            <a
                                href="/departments/applied_science_and_humanities/facilities"
                                className="inline-flex shrink-0 items-center justify-center gap-3 self-start border border-[#D2B87C]/60 px-6 py-4 text-sm font-semibold text-[#D2B87C] transition-colors duration-300 hover:bg-[#D2B87C] hover:text-[#20235A] md:self-center"
                            >
                                Explore Facilities
                                <ArrowRight size={17} />
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* =============================================================
                ACTIVITY MODAL
            ========================================================== */}
            {selectedActivity && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111321]/85 px-4 py-6 backdrop-blur-md sm:px-6"
                    onClick={() => setSelectedActivity(null)}
                >
                    <div
                        className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden bg-[#FAF9F6] shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            type="button"
                            onClick={() => setSelectedActivity(null)}
                            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center border border-white/30 bg-[#20235A]/80 text-white backdrop-blur-sm transition-colors hover:bg-[#D2B87C] hover:text-[#20235A]"
                            aria-label="Close activity"
                        >
                            <X size={18} />
                        </button>

                        {/* Previous */}
                        <button
                            type="button"
                            onClick={showPrevious}
                            disabled={selectedIndex === 0}
                            className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#20235A]/80 text-white backdrop-blur-sm transition-all hover:bg-[#D2B87C] hover:text-[#20235A] disabled:pointer-events-none disabled:opacity-30"
                            aria-label="Previous activity"
                        >
                            <ChevronLeft size={19} />
                        </button>

                        {/* Next */}
                        <button
                            type="button"
                            onClick={showNext}
                            disabled={
                                selectedIndex === activities.length - 1
                            }
                            className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#20235A]/80 text-white backdrop-blur-sm transition-all hover:bg-[#D2B87C] hover:text-[#20235A] disabled:pointer-events-none disabled:opacity-30"
                            aria-label="Next activity"
                        >
                            <ChevronRight size={19} />
                        </button>

                        <div className="grid max-h-[92vh] overflow-y-auto md:grid-cols-[1.05fr_0.95fr]">
                            {/* Modal image */}
                            <div className="relative min-h-[330px] bg-[#20235A] sm:min-h-[420px] md:min-h-[570px]">
                                <Image
                                    src={selectedActivity.image}
                                    alt={selectedActivity.title}
                                    fill
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    className="object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/80 via-transparent to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Activity {selectedActivity.number}
                                    </span>

                                    <p className="mt-2 text-xs text-white/55">
                                        {selectedIndex + 1} /{" "}
                                        {activities.length}
                                    </p>
                                </div>
                            </div>

                            {/* Modal content */}
                            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                                <div className="flex items-center gap-3">
                                    <CalendarDays
                                        size={17}
                                        strokeWidth={1.35}
                                        className="text-[#8F7746]"
                                    />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F7746]">
                                        Department Activity
                                    </span>
                                </div>

                                <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl">
                                    {selectedActivity.title}
                                </h2>

                                <div className="mt-6 h-px w-14 bg-[#D2B87C]" />

                                {selectedActivity.description ? (
                                    <p className="mt-6 text-sm leading-7 text-[#706A63]">
                                        {selectedActivity.description}
                                    </p>
                                ) : (
                                    <p className="mt-6 text-sm leading-7 text-[#706A63]">
                                        An academic activity conducted by the
                                        Department of Applied Science &
                                        Humanities at NCERC, creating
                                        opportunities for learning,
                                        interaction, and personal development.
                                    </p>
                                )}

                                <div className="mt-8 border-t border-[#E0DAD0] pt-6">
                                    <div className="flex items-center justify-between gap-5">
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#8F7746]">
                                            Department
                                        </span>

                                        <span className="text-right text-xs font-medium text-[#20235A]">
                                            Applied Science & Humanities
                                        </span>
                                    </div>

                                    <div className="mt-5 flex items-center justify-between gap-5">
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#8F7746]">
                                            Activity
                                        </span>

                                        <span className="text-right text-xs font-medium text-[#20235A]">
                                            {selectedActivity.number}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-8 flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={showPrevious}
                                        disabled={selectedIndex === 0}
                                        className="flex h-10 items-center gap-2 border border-[#D8D1C5] px-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#20235A] transition-all hover:border-[#20235A] disabled:pointer-events-none disabled:opacity-30"
                                    >
                                        <ChevronLeft size={15} />
                                        Previous
                                    </button>

                                    <button
                                        type="button"
                                        onClick={showNext}
                                        disabled={
                                            selectedIndex ===
                                            activities.length - 1
                                        }
                                        className="flex h-10 items-center gap-2 border border-[#D8D1C5] px-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#20235A] transition-all hover:border-[#20235A] disabled:pointer-events-none disabled:opacity-30"
                                    >
                                        Next
                                        <ChevronRight size={15} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <FooterSection />
        </>
    );
}