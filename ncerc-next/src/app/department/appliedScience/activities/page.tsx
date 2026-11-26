
"use client";

import React from "react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../departmentnavigation/DepartmentNavigation";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    BookOpen,
    CalendarDays,
    GraduationCap,
    Users,
} from "lucide-react";

const activityCards = [
    {
        number: "01",
        title: "AS (1)",
        description:
            "Explore the activities and learning experiences organised by the Applied Science & Humanities department.",
        href: "/department/appliedScience/activities/as_activity_1",
        icon: BookOpen,
    },
    {
        number: "02",
        title: "AS Activities ",
        description:
            "Discover the programmes, events and academic activities documented by the department.",
        href: "/department/appliedScience/activities/as_activity_2",
        icon: CalendarDays,
    },
    {
        number: "03",
        title: "Engineer's day activity",
        description:
            "Explore the activities and celebrations organised as part of Engineers' Day.",
        href: "/department/appliedScience/activities/engineers_day_activity",
        icon: GraduationCap,
    },
    {
        number: "04",
        title: "Teacher's day activity",
        description:
            "Discover the activities and celebrations conducted to mark Teachers' Day.",
        href: "/department/appliedScience/activities/teachers_day_activity",
        icon: Users,
    },
];

export default function ActivitiesPage() {
    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#FAF9F6] text-[#1E1917]">

                {/* =========================================================
                    HERO
                ========================================================== */}
                <section className="relative isolate overflow-hidden bg-[#20235A]">

                    {/* Decorative Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D2B87C]/20" />
                        <div className="absolute -right-10 top-16 h-64 w-64 rounded-full border border-[#D2B87C]/10" />
                        <div className="absolute bottom-[-150px] left-[-80px] h-80 w-80 rounded-full border border-white/5" />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

                        {/* Hero Content */}
                        <div className="relative z-10 max-w-3xl">

                            <div className="mb-6 flex items-center gap-4">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D2B87C]">
                                    Applied Science & Humanities
                                </p>
                            </div>

                            <h1 className="font-serif text-[43px] font-medium leading-[1.04] tracking-[-0.025em] text-white sm:text-[58px] lg:text-[68px] xl:text-[76px]">
                                Learning Beyond
                                <br />
                                <span className="italic text-[#D2B87C]">
                                    the Classroom.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-[17px]">
                                Discover the academic activities, programmes,
                                celebrations and learning experiences that
                                encourage students to explore their interests,
                                develop new skills and grow beyond the
                                classroom at NCERC.
                            </p>

                            <div className="mt-9 flex flex-wrap items-center gap-4">
                                <Link
                                    href="#activities"
                                    className="inline-flex h-12 items-center gap-3 bg-[#D2B87C] px-6 text-sm font-semibold text-[#20235A] transition-all duration-300 hover:bg-white"
                                >
                                    Explore Activities
                                    <ArrowRight size={17} />
                                </Link>

                                <Link
                                    href="#activities"
                                    className="inline-flex h-12 items-center gap-2 border border-white/25 px-6 text-sm font-medium text-white transition-all duration-300 hover:border-[#D2B87C] hover:text-[#D2B87C]"
                                >
                                    Discover More
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
                    ACTIVITIES OVERVIEW
                ========================================================== */}
                <section
                    id="activities"
                    className="relative bg-[#FAF9F6] px-6 py-20 sm:px-8 lg:px-10 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl">

                        {/* Section Heading */}
                        <div className="mb-14 grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">

                            <div>
                                <div className="mb-5 flex items-center gap-4">
                                    <span className="h-px w-10 bg-[#927B4D]" />

                                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#927B4D]">
                                        Department Activities
                                    </p>
                                </div>

                                <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-[#20235A] sm:text-5xl lg:text-[58px]">
                                    Explore Our
                                    <br />
                                    <span className="italic text-[#927B4D]">
                                        Activities.
                                    </span>
                                </h2>
                            </div>

                            <div className="md:pb-2">
                                <p className="max-w-lg text-[15px] leading-8 text-[#625D57]">
                                    A collection of academic programmes,
                                    departmental celebrations and student
                                    experiences that reflect the vibrant
                                    learning environment of NCERC.
                                </p>
                            </div>

                        </div>

                        {/* Activity Cards */}
                        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">

                            {activityCards.map((activity) => {
                                const Icon = activity.icon;

                                return (
                                    <Link
                                        key={activity.number}
                                        href={activity.href}
                                        className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden border border-[#20235A]/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#D2B87C] hover:shadow-[0_18px_45px_rgba(32,35,90,0.08)] sm:p-9"
                                    >

                                        {/* Decorative Number */}
                                        <div className="pointer-events-none absolute -right-3 -top-8 select-none font-serif text-[150px] font-medium leading-none text-[#20235A]/[0.035] transition-colors duration-500 group-hover:text-[#D2B87C]/20">
                                            {activity.number}
                                        </div>

                                        {/* Card Top */}
                                        <div className="relative z-10 flex items-start justify-between">

                                            <span className="font-serif text-sm tracking-[0.15em] text-[#927B4D]">
                                                ACTIVITY / {activity.number}
                                            </span>

                                            <div className="flex h-12 w-12 items-center justify-center border border-[#D2B87C]/50 bg-[#FAF9F6] text-[#20235A] transition-all duration-300 group-hover:bg-[#D2B87C]">
                                                <Icon
                                                    size={21}
                                                    strokeWidth={1.5}
                                                />
                                            </div>

                                        </div>

                                        {/* Card Content */}
                                        <div className="relative z-10 mt-12">

                                            <h3 className="max-w-md font-serif text-[27px] font-medium leading-tight text-[#20235A] transition-colors duration-300 group-hover:text-[#927B4D] sm:text-[31px]">
                                                {activity.title}
                                            </h3>

                                            <p className="mt-4 max-w-md text-sm leading-7 text-[#716B65]">
                                                {activity.description}
                                            </p>

                                        </div>

                                        {/* Card Footer */}
                                        <div className="relative z-10 mt-9 flex items-center justify-between border-t border-[#20235A]/10 pt-5">

                                            <span className="text-xs font-semibold uppercase tracking-[0.17em] text-[#20235A]">
                                                Explore Activity
                                            </span>

                                            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#20235A]/15 text-[#20235A] transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                                <ArrowUpRight
                                                    size={19}
                                                    strokeWidth={1.7}
                                                />
                                            </span>

                                        </div>

                                    </Link>
                                );
                            })}

                        </div>

                        {/* Bottom Note */}
                        <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-[#20235A]/10 pt-7">
                            <p className="text-xs uppercase tracking-[0.18em] text-[#817A72]">
                                Applied Science & Humanities · NCERC
                            </p>

                            <p className="font-serif text-lg italic text-[#927B4D]">
                                Learn · Engage · Experience
                            </p>
                        </div>

                    </div>
                </section>

            </main>

            <FooterSection />
        </>
    );
}
