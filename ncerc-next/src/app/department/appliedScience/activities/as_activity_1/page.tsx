
"use client";

import React from "react";
import Image from "next/image";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../../departmentnavigation/DepartmentNavigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";

export default function AsActivitiesPage() {
    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#FAF9F6] text-[#1E1917] [&_p]:text-justify">

                {/* =========================================================
                    HERO
                ========================================================== */}
                <section className="relative isolate overflow-hidden bg-[#20235A]">

                    {/* Decorative Background */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/20" />
                        <div className="absolute -right-10 top-16 h-64 w-64 rounded-full border border-[#D2B87C]/10" />
                        <div className="absolute bottom-[-150px] left-[-80px] h-80 w-80 rounded-full border border-white/5" />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

                        <div className="relative z-10 max-w-4xl">

                            <div className="mb-6 flex items-center gap-4">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                    Applied Science & Humanities
                                </p>
                            </div>

                            <h1 className="font-serif text-[42px] font-medium leading-[1.08] tracking-[-0.025em] text-white sm:text-[55px] lg:text-[68px]">
                                AS (1)
                                <br />
                                <span className="italic text-[#D2B87C]">
                                    Department Activities.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-[17px]">
                                Explore the academic seminars, expert sessions
                                and learning experiences organised by the
                                Applied Science & Humanities Department at NCERC.
                            </p>

                            <div className="mt-9 flex flex-wrap items-center gap-4">
                                <Link
                                    href="#activity-content"
                                    className="inline-flex h-12 items-center gap-3 bg-[#D2B87C] px-6 text-sm font-semibold text-[#20235A] transition-all duration-300 hover:bg-white"
                                >
                                    Explore Activity
                                    <ArrowRight size={17} />
                                </Link>

                                <Link
                                    href="/department/applied-science-and-humanities/activities"
                                    className="inline-flex h-12 items-center gap-2 border border-white/25 px-6 text-sm font-medium text-white transition-all duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                >
                                    <ArrowLeft size={16} />
                                    All Activities
                                </Link>
                            </div>

                            <div className="mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-white/45">
                                <span>NCERC</span>
                                <span className="h-px w-8 bg-white/20" />
                                <span>Learn · Engage · Experience</span>
                            </div>

                        </div>
                    </div>
                </section>

                {/* =========================================================
                    DEPARTMENT NAVIGATION
                ========================================================== */}
                <DepartmentNavigation />

                {/* =========================================================
                    ACTIVITY CONTENT
                ========================================================== */}
                <section
                    id="activity-content"
                    className="bg-[#FAF9F6] px-6 py-14 sm:px-8 lg:px-10 lg:py-20"
                >
                    <div className="mx-auto max-w-7xl">

                        {/* Section Heading */}
                        <div className="mb-8 max-w-4xl">
                            <div className="mb-4 flex items-center gap-4">
                                <span className="h-px w-10 bg-[#927B4D]" />

                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#927B4D]">
                                    Seminar Series · 25 October 2024
                                </p>
                            </div>

                            <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                Expert Talk on
                                <br />
                                <span className="italic text-[#927B4D]">
                                    "Why Mathematics is the Queen of Sciences"
                                </span>
                            </h2>
                        </div>

                        {/* Activity Details */}
                        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">

                            {/* Main Content */}
                            <div className="flex flex-col">

                                {/* Event Information */}
                                <div className="mb-7 grid gap-4 border-y border-[#20235A]/10 py-5 sm:grid-cols-2">

                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#D2B87C]/20 text-[#927B4D]">
                                            <CalendarDays size={19} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                                Date
                                            </p>
                                            <p className="mt-1 text-sm text-[#20235A]">
                                                25 October 2024
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#D2B87C]/20 text-[#927B4D]">
                                            <Clock size={19} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                                Time
                                            </p>
                                            <p className="mt-1 text-sm text-[#20235A]">
                                                2:00 PM onwards
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 sm:col-span-2">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#D2B87C]/20 text-[#927B4D]">
                                            <MapPin size={19} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                                Venue
                                            </p>
                                            <p className="mt-1 text-sm text-[#20235A]">
                                                Nehru College of Engineering and Research Centre, Pampady
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                {/* Event Description */}
                                <div className="space-y-4 text-[15px] leading-[1.85] text-[#625D57]">

                                    <p>
                                        The formal inauguration of the Seminar Series of Applied Science & Humanities Department at Nehru College of Engineering and Research Centre, Pampady, was held on 25-10-2024 at 2pm. The event was inaugurated by Dr. Viswanathan, Principal, NCERC.
                                    </p>

                                    <p>
                                        The ceremony began with a welcome address by Dr. Jalaja K, Associate Professor and Head of the AS & H Department. The presidential remarks were delivered by Dr. Viswanathan, Principal of the college. This was followed by the traditional lighting of the lamp by the dignitaries, officially marking the launch of the Seminar Series.
                                    </p>

                                    <p>
                                        After the inauguration a seminar on ‘Why Mathematics is the Queen of all Sciences’ was delivered by Dr. Preethi Kuttipulackal, Associate Professor & Head, Department of Mathematics, University of Calicut for the First year AI&ML, Mechanical engineering and Mechatronics Engineering students at Nehru College of Engineering and Research Centre, Pampady on 25-10-2024 at 2.45pm.
                                    </p>

                                    <p>
                                        The session provided valuable insights into the real-world applications of Mathematics in various industries, aerospace and all Science and technologies. The seminar also highlighted advancements in computational mathematics and simulations in modern engineering innovations.
                                    </p>

                                    <p>
                                        Students and faculty actively participated, engaging in discussions that deepened their understanding of the subject. The session concluded with an interactive Question &Answers, where Dr. Preethi kuttipulackal addressed queries and shared his expertise on the future prospects of Mathematics in commercial sectors.

                                    </p>

                                </div>
                            </div>

                            {/* Event Image */}
                            <div className="flex flex-col">

                                <div className="mb-4 flex items-center gap-4">
                                    <span className="h-px w-8 bg-[#927B4D]" />
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                        Event Gallery
                                    </p>
                                </div>

                                <div className="relative min-h-[400px] flex-1 overflow-hidden bg-[#F2EFE8] lg:min-h-0">
                                    <Image
                                        src="/images/dpt/applied_science_and_humanities/activities/Ash_Activites_Img1.webp"
                                        alt="Expert talk on Why Mathematics is the Queen of Sciences"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="mt-4 border-l-2 border-[#D2B87C] pl-5">
                                    <p className="font-serif text-lg text-[#20235A]">
                                        Seminar Series Inauguration
                                    </p>
                                    <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#927B4D]">
                                        Applied Science & Humanities · 2024
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>

                {/* =========================================================
                        ACTIVITY 02 – A JOURNEY THROUGH ATMOSPHERIC SCIENCE
                ========================================================== */}
                <section
                    id="atmospheric-science"
                    className="bg-[#F2EFE8] px-6 py-14 sm:px-8 lg:px-10 lg:py-20"
                >
                    <div className="mx-auto max-w-7xl">

                        {/* Section Heading */}
                        <div className="mb-8 max-w-4xl">
                            <div className="mb-4 flex items-center gap-4">
                                <span className="h-px w-10 bg-[#927B4D]" />

                                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#927B4D]">
                                    Expert Seminar · 21 November 2024
                                </p>
                            </div>

                            <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                A Journey Through
                                <br />
                                <span className="italic text-[#927B4D]">
                                    Atmospheric Science.
                                </span>
                            </h2>
                        </div>

                        {/* Activity Details */}
                        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">

                            {/* Main Content */}
                            <div className="flex flex-col">

                                {/* Event Information */}
                                <div className="mb-7 grid gap-4 border-y border-[#20235A]/10 py-5 sm:grid-cols-2">

                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#D2B87C]/20 text-[#927B4D]">
                                            <CalendarDays size={19} />
                                        </div>

                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                                Date
                                            </p>
                                            <p className="mt-1 text-sm text-[#20235A]">
                                                21 November 2024
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#D2B87C]/20 text-[#927B4D]">
                                            <Clock size={19} />
                                        </div>

                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                                Time
                                            </p>
                                            <p className="mt-1 text-sm text-[#20235A]">
                                                2:00 PM
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 sm:col-span-2">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#D2B87C]/20 text-[#927B4D]">
                                            <MapPin size={19} />
                                        </div>

                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                                Venue
                                            </p>
                                            <p className="mt-1 text-sm text-[#20235A]">
                                                Nehru College of Engineering and Research Centre, Pampady
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                {/* Event Description */}
                                <div className="space-y-4 text-[15px] leading-[1.85] text-[#625D57]">

                                    <p>
                                        A seminar on 'A Journey through Atmospheric Science' was delivered by Dr. Nishanth T, Assistant Professor, Department of Physics, Sree Krishna College, Guruvayur for the First year CSE, and ECE students at Nehru College of Engineering and Research Centre, Pampady on 21-11-2024 at 2pm.
                                    </p>

                                    <p>
                                        The session provided valuable insights into the atmosphere. Students and faculty actively participated, engaging in discussions that deepened their understanding of the subject.
                                    </p>

                                    <p>
                                        The session concluded with an interactive Question &Answers, where Dr. Nishanth T addressed queries and shared his expertise on the future prospects of Atmospheric Science and technology.

                                    </p>

                                </div>

                            </div>

                            {/* Event Image */}
                            <div className="flex flex-col">

                                <div className="mb-4 flex items-center gap-4">
                                    <span className="h-px w-8 bg-[#927B4D]" />

                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                        Event Gallery
                                    </p>
                                </div>

                                <div className="relative min-h-[400px] flex-1 overflow-hidden bg-[#FAF9F6] lg:min-h-0">

                                    <Image
                                        src="/images/dpt/applied_science_and_humanities/activities/Ash_Activites_Img1.webp"
                                        alt="A Journey through Atmospheric Science seminar"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                    />

                                </div>

                                <div className="mt-4 border-l-2 border-[#D2B87C] pl-5">
                                    <p className="font-serif text-lg text-[#20235A]">
                                        A Journey Through Atmospheric Science
                                    </p>

                                    <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#927B4D]">
                                        Applied Science & Humanities · 2024
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>


                {/* NAVIGATING B.TECH SKILLS FOR SUCCESS AND DEVELOPING HUMAN VALUES */}

                <section
                    id="btech-skills-human-values"
                    className="bg-[#FAF9F6] px-6 py-12 sm:px-8 lg:px-10 lg:py-14"
                >
                    <div className="mx-auto max-w-[1440px]">
                        <div className="mb-7">
                            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[#927B4D]">
                                Expert Talk · 22 September 2025
                            </p>

                            <h2 className="max-w-4xl font-serif text-3xl font-normal leading-tight text-[#20235A] sm:text-4xl lg:text-[42px]">
                                Navigating B.Tech Skills for Success and Developing Human Values
                            </h2>
                        </div>

                        <div className="mx-auto max-w-5xl">
                            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F2EFE8]">
                                <Image
                                    src="/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img3.webp"
                                    alt="Expert talk on navigating B.Tech skills for success and developing human values"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 900px"
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D2B87C]/50 py-3">
                                <p className="text-sm text-[#20235A]">
                                    Navigating B.Tech Skills for Success
                                </p>
                                <span className="text-xs text-[#927B4D]">
                                    Applied Science & Humanities · 2025
                                </span>
                            </div>
                        </div>
                    </div>
                </section>


                {/* ENVIRONMENTAL VISIT */}
                <section
                    id="environmental-visit"
                    className="bg-[#F2EFE8] px-6 py-14 sm:px-8 lg:px-10 lg:py-16"
                >
                    <div className="mx-auto max-w-[1440px]">
                        <div className="mb-8">
                            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[#927B4D]">
                                Environmental Activity · 22 March 2025
                            </p>

                            <h2 className="font-serif text-3xl font-normal leading-tight text-[#20235A] sm:text-4xl lg:text-[42px]">
                                Environmental Visit
                            </h2>
                        </div>

                        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
                            {/* Event Details */}
                            <div className="flex flex-col justify-center">
                                <div className="mb-6 flex flex-wrap gap-x-7 gap-y-3 border-y border-[#D2B87C]/40 py-4 text-sm text-[#5F6068]">
                                    <div className="flex items-center gap-2">
                                        <CalendarDays size={17} className="text-[#927B4D]" />
                                        <span>22 March 2025</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <MapPin size={17} className="text-[#927B4D]" />
                                        <span>Seethargundu Waterfalls, Palakkad</span>
                                    </div>
                                </div>

                                <div className="space-y-5 text-[15px] leading-[1.85] text-[#55565D]">
                                    <p>
                                        On March 22nd 2025, ECE Students visited Seethargundu waterfalls, Palakkad. It was an enriching environmental Experience that highlighted the beauty and ecological significance of Kerala&apos;s Western Ghats.
                                    </p>

                                    <p>
                                        It deepened students understanding of sustainable tourism and how communities can balance environmental preservation with livelihood opportunities.
                                    </p>

                                    <div className="border-l-2 border-[#D2B87C] pl-5 pt-1">
                                        <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                            Faculty Accompanied
                                        </p>
                                        <p className="text-[#20235A]">
                                            Ms. Thushara K M
                                            <span className="mx-2 text-[#D2B87C]">·</span>
                                            Mr. Vishnukaimal
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Event Image */}
                            <div className="flex flex-col">
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF9F6]">
                                    <Image
                                        src="/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img4.webp"
                                        alt="ECE students during the environmental visit to Seethargundu Waterfalls, Palakkad"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D2B87C]/50 py-3">
                                    <p className="text-sm text-[#20235A]">
                                        Environmental Visit
                                    </p>
                                    <span className="text-xs text-[#927B4D]">
                                        Applied Science & Humanities · 2025
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* ENVIRONMENTAL VISIT – DHONI WATERFALLS */}

                <section
                    id="dhoni-waterfalls-visit"
                    className="bg-[#FAF9F6] px-6 py-14 sm:px-8 lg:px-10 lg:py-16"
                >
                    <div className="mx-auto max-w-[1440px]">
                        <div className="mb-8">
                            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[#927B4D]">
                                Environmental Activity · 2025
                            </p>

                            <h2 className="font-serif text-3xl font-normal leading-tight text-[#20235A] sm:text-4xl lg:text-[42px]">
                                Environmental Visit to Dhoni Waterfalls
                            </h2>
                        </div>

                        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
                            {/* Event Image - Left */}
                            <div className="flex flex-col">
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2EFE8]">
                                    <Image
                                        src="/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img5.webp"
                                        alt="Students during the environmental visit to Dhoni Waterfalls, Palakkad"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D2B87C]/50 py-3">
                                    <p className="text-sm text-[#20235A]">
                                        Dhoni Waterfalls Visit
                                    </p>
                                    <span className="text-xs text-[#927B4D]">
                                        Applied Science & Humanities · 2025
                                    </span>
                                </div>
                            </div>

                            {/* Event Details - Right */}
                            <div className="flex flex-col justify-center">
                                <div className="mb-6 flex flex-wrap gap-x-7 gap-y-3 border-y border-[#D2B87C]/40 py-4 text-sm text-[#5F6068]">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={17} className="text-[#927B4D]" />
                                        <span>Dhoni Waterfalls, Palakkad</span>
                                    </div>
                                </div>

                                <div className="space-y-5 text-[15px] leading-[1.85] text-[#55565D]">
                                    <p>
                                        CSE, EEE and MTR students visited Dhoni Waterfalls,
                                        Palakkad. The Dhoni region is known for its rich
                                        biodiversity and scenic beauty, making it an ideal
                                        destination for nature-based learning.
                                    </p>

                                    <p>
                                        The waterfall is accessible only through a forest
                                        trail, which further added an adventurous element
                                        to the experience.
                                    </p>

                                    <div className="border-l-2 border-[#D2B87C] pl-5 pt-1">
                                        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                            Faculty Accompanied
                                        </p>

                                        <div className="flex flex-wrap gap-x-2 gap-y-1 text-[#20235A]">
                                            <span>Dr. Jojo</span>
                                            <span className="text-[#D2B87C]">·</span>
                                            <span>Ms. Deepamol</span>
                                            <span className="text-[#D2B87C]">·</span>
                                            <span>Ms. Anitha P</span>
                                            <span className="text-[#D2B87C]">·</span>
                                            <span>Ms. Aiswarya</span>
                                            <span className="text-[#D2B87C]">·</span>
                                            <span>Ms. Ajitha Jimmy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ENVIRONMENTAL VISIT – MEENAVALLAM */}
                <section
                    id="meenavallam-visit"
                    className="bg-[#F2EFE8] px-6 py-14 sm:px-8 lg:px-10 lg:py-16"
                >
                    <div className="mx-auto max-w-[1440px]">
                        <div className="mb-8">
                            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[#927B4D]">
                                Environmental Activity · 2025
                            </p>

                            <h2 className="font-serif text-3xl font-normal leading-tight text-[#20235A] sm:text-4xl lg:text-[42px]">
                                Environmental Visit to Meenavallam
                            </h2>
                        </div>

                        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
                            {/* Event Details - Left */}
                            <div className="flex flex-col justify-center">
                                <div className="mb-6 flex flex-wrap gap-x-7 gap-y-3 border-y border-[#D2B87C]/40 py-4 text-sm text-[#5F6068]">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={17} className="text-[#927B4D]" />
                                        <span>Meenavallam, Palakkad</span>
                                    </div>
                                </div>

                                <div className="space-y-5 text-[15px] leading-[1.85] text-[#55565D]">
                                    <p>
                                        The Students of AI &amp; ML visited Meenavallam, Palakkad. It was a much needed break from the routine reminding us all of the joy and value of being close to nature
                                    </p>

                                    <p>
                                        It strengthed friendships, deepened our respect for nature and reminded the beauty that lies beyond the classroom walls.

                                    </p>

                                    <div className="border-l-2 border-[#D2B87C] pl-5 pt-1">
                                        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                            Faculty Accompanied
                                        </p>

                                        <div className="flex flex-wrap gap-x-2 gap-y-1 text-[#20235A]">
                                            <span>Ms. Sreelekha T G</span>
                                            <span className="text-[#D2B87C]">·</span>
                                            <span>Ms. Haritha P H</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Event Image - Right */}
                            <div className="flex flex-col">
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF9F6]">
                                    <Image
                                        src="/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img6.webp"
                                        alt="AI and ML students during their environmental visit to Meenavallam, Palakkad"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D2B87C]/50 py-3">
                                    <p className="text-sm text-[#20235A]">
                                        Meenavallam Environmental Visit
                                    </p>
                                    <span className="text-xs text-[#927B4D]">
                                        Applied Science &amp; Humanities · 2025
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* INDUSTRIAL VISITS */}
                <section
                    id="industrial-visits"
                    className="bg-[#F2EFE8] px-6 py-14 sm:px-8 lg:px-10 lg:py-16"
                >
                    <div className="mx-auto max-w-[1440px]">
                        <div className="mb-10">
                            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[#927B4D]">
                                Industry Exposure · 2026
                            </p>

                            <h2 className="font-serif text-3xl font-normal leading-tight text-[#20235A] sm:text-4xl lg:text-[42px]">
                                Industrial Visits
                            </h2>
                        </div>

                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
                            {/* EEE & ECE Industrial Visit */}
                            <div className="flex flex-col">
                                <div className="mb-5">
                                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                        29 November 2026 · EEE &amp; ECE
                                    </p>

                                    <h3 className="font-serif text-2xl font-normal leading-snug text-[#20235A] sm:text-3xl">
                                        Industrial Visit
                                    </h3>
                                </div>

                                <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden bg-[#FAF9F6]">
                                    <Image
                                        src="/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img7.webp"
                                        alt="EEE and ECE students during their industrial visit"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#927B4D]">
                                        Industries Visited
                                    </p>

                                    <div className="space-y-3">
                                        <div className="border-l-2 border-[#D2B87C] pl-5">
                                            <h4 className="text-base font-medium text-[#20235A]">
                                                Keltron, Kuttippuram
                                            </h4>
                                            <p className="mt-1 text-sm leading-relaxed text-[#5F6068]">
                                                Keltron Knowledge / IT Education Centre
                                            </p>
                                        </div>

                                        <div className="border-l-2 border-[#D2B87C] pl-5">
                                            <h4 className="text-base font-medium text-[#20235A]">
                                                Steel Industrials Kerala Limited (SILK)
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mechanical Engineering Industrial Visit */}
                            <div className="flex flex-col">
                                <div className="mb-5">
                                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-[#927B4D]">
                                        19 November 2026
                                    </p>

                                    <h3 className="font-serif text-2xl font-normal leading-snug text-[#20235A] sm:text-3xl">
                                        Industry-Integrated Mechanical Engineering
                                    </h3>
                                </div>

                                <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden bg-[#FAF9F6]">
                                    <Image
                                        src="/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img8.webp"
                                        alt="Mechanical Engineering students during their industrial visit"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>

                                <p className="text-[15px] leading-[1.85] text-[#55565D]">
                                    Industry-integrated learning experience for Mechanical
                                    Engineering students through an industrial visit.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* -------INDUSTRIAL VISIT -02/12/2026,  MTR------------ */}

                {/* INDUSTRIAL VISIT - MTR */}
                <section
                    id="industrial-visit-mtr"
                    className="bg-[#FAF9F6] px-6 py-14 sm:px-8 lg:px-10 lg:py-16"
                >
                    <div className="mx-auto max-w-[1440px]">
                        {/* Section Heading */}
                        <div className="mb-9">
                            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[#927B4D]">
                                Industrial Visit · 02 December 2026
                            </p>

                            <h2 className="font-serif text-3xl font-normal leading-tight text-[#20235A] sm:text-4xl lg:text-[42px]">
                                Industrial Visit – MTR
                            </h2>

                            <p className="mt-3 text-sm text-[#777780]">
                                Mechatronics Engineering
                            </p>
                        </div>

                        {/* Image Grid */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    src: "/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img9.webp",
                                    alt: "MTR industrial visit photograph 1",
                                },
                                {
                                    src: "/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img10.webp",
                                    alt: "MTR industrial visit photograph 2",
                                },
                                {
                                    src: "/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img11.webp",
                                    alt: "MTR industrial visit photograph 3",
                                },
                                {
                                    src: "/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img12.webp",
                                    alt: "MTR industrial visit photograph 4",
                                },
                                {
                                    src: "/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img13.webp",
                                    alt: "MTR industrial visit photograph 5",
                                },
                                {
                                    src: "/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img14.webp",
                                    alt: "MTR industrial visit photograph 6",
                                },
                                {
                                    src: "/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img15.webp",
                                    alt: "MTR industrial visit photograph 7",
                                },
                                {
                                    src: "/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img16.webp",
                                    alt: "MTR industrial visit photograph 8",
                                },
                            ].map((image, index) => (
                                <div
                                    key={image.src}
                                    className="group relative aspect-[4/3] overflow-hidden bg-[#F2EFE8]"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-contain "
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Bottom Details */}
                        <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-[#D2B87C]/50 pt-4">
                            <p className="text-xs uppercase tracking-[0.16em] text-[#927B4D]">
                                Applied Science &amp; Humanities
                            </p>

                            <p className="text-xs text-[#777780]">
                                02 December 2026
                            </p>
                        </div>
                    </div>
                </section>









            </main>

            <FooterSection />
        </>
    );
}
