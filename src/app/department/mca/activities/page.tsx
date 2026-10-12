"use client";

import React, { useState } from "react";
import {
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    X,
} from "lucide-react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import McaNavigation from "../mcanavigation/mcanavigation";
import Faq from "../../mca/faq/page"
import Image from "next/image";

const activities = [
    {
        id: "01",
        title: "Nectar Symposium 2026",
        category: "Academic & Technical",
        image:
            "https://ncerc.ac.in/images/dpt/mca/activity/Nectar%20Symposium%202026.webp",
    },
    {
        id: "02",
        title: "Department Activity",
        category: "Department Activity",
        image: "https://ncerc.ac.in/images/dpt/mca/activity/1.jpg",
    },
    {
        id: "03",
        title: "Environment Day",
        category: "Awareness & Community",
        image:
            "https://ncerc.ac.in/images/dpt/mca/activity/MCA-environmentday.jpg",
    },
    {
        id: "04",
        title: "Farewell",
        category: "Student Life",
        image:
            "https://ncerc.ac.in/images/dpt/mca/activity/MCA-farewell20200.jpg",
    },
    {
        id: "05",
        title: "Freshers Day",
        category: "Student Life",
        image:
            "https://ncerc.ac.in/images/dpt/mca/activity/MCA-freshers-day.jpg",
    },
    {
        id: "06",
        title: "Induction",
        category: "Academic & Student Orientation",
        image:
            "https://ncerc.ac.in/images/dpt/mca/activity/MCA-INDUCTION.jpg",
    },
    {
        id: "07",
        title: "Navaratri",
        category: "Culture & Student Life",
        image:
            "https://ncerc.ac.in/images/dpt/mca/activity/MCA-Navaratri.jpg",
    },
    {
        id: "08",
        title: "Prayaana 2021",
        category: "Student Activity",
        image:
            "https://ncerc.ac.in/images/dpt/mca/activity/MCA-Prayaana-2021.jpg",
    },
    {
        id: "09",
        title: "Vishu",
        category: "Culture & Student Life",
        image:
            "https://ncerc.ac.in/images/dpt/mca/activity/mca-Vishu.jpg",
    },
];

const Page = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const selectedActivity =
        selectedIndex !== null ? activities[selectedIndex] : null;

    const openActivity = (index: number) => {
        setSelectedIndex(index);
    };

    const closeActivity = () => {
        setSelectedIndex(null);
    };

    const showPrevious = () => {
        if (selectedIndex === null) return;

        setSelectedIndex(
            selectedIndex === 0
                ? activities.length - 1
                : selectedIndex - 1
        );
    };

    const showNext = () => {
        if (selectedIndex === null) return;

        setSelectedIndex(
            selectedIndex === activities.length - 1
                ? 0
                : selectedIndex + 1
        );
    };

    return (
        <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">
            <SiteHeader />

            {/* =========================================================
                HERO
            ========================================================== */}
            <section className="bg-[#20235A] text-white">
                <div className="mx-auto grid min-h-[600px] max-w-[1440px] lg:grid-cols-[0.8fr_1.2fr]">

                    {/* Hero Content */}
                    <div className="flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">

                        <div className="flex items-center gap-3">
                            <span className="h-px w-9 bg-[#D2B87C]" />

                            <span className="text-[9px] font-medium uppercase tracking-[0.24em] text-[#D2B87C]">
                                MCA Department
                            </span>
                        </div>

                        <h1 className="mt-6 max-w-xl font-serif text-[46px] leading-[0.98] tracking-[-0.035em] sm:text-[60px] lg:text-[70px] xl:text-[76px]">
                            Beyond the
                            <span className="block text-[#D2B87C]">
                                classroom.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-xl text-[14px] leading-7 text-white/70 sm:text-[16px] sm:leading-8">
                            Department activities bring together academic
                            engagement, student life, cultural experiences,
                            awareness initiatives and opportunities for
                            students to connect beyond the classroom.
                        </p>

                        <div className="mt-10 flex items-center gap-8 border-t border-white/15 pt-6">

                            <div>
                                <p className="font-serif text-[38px] leading-none text-white">
                                    09
                                </p>

                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/45">
                                    Activities
                                </p>
                            </div>

                            <div className="h-10 w-px bg-white/15" />

                            <div>
                                <p className="font-serif text-[20px] leading-tight text-[#D2B87C]">
                                    MCA
                                </p>

                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/45">
                                    Department Life
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative min-h-[360px] overflow-hidden lg:min-h-full">
                        <Image
                            src={activities[0].image}
                            alt={activities[0].title}
                            fill
                            sizes="100vw"
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-[#20235A]/25" />

                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#20235A]/80 via-[#20235A]/20 to-transparent p-6 sm:p-10 lg:p-12">
                            <div className="max-w-sm border-l-2 border-[#D2B87C] pl-5">
                                <p className="text-[9px] uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Featured Activity
                                </p>

                                <p className="mt-3 font-serif text-[24px] leading-tight text-white sm:text-[28px]">
                                    Nectar Symposium 2026
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <McaNavigation />

            {/* =========================================================
                INTRO
            ========================================================== */}
            <section className="bg-white">
                <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">

                    <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">

                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                    Department Activities
                                </span>
                            </div>

                            <h2 className="mt-4 max-w-md font-serif text-[38px] leading-[1.02] tracking-[-0.03em] text-[#20235A] sm:text-[46px] lg:text-[52px]">
                                Experiences that shape student life.
                            </h2>
                        </div>

                        <div className="max-w-3xl">
                            <p className="text-[15px] leading-8 text-[#1E1917]/70 sm:text-[17px]">
                                Activities are an important part of the MCA
                                experience, creating opportunities for students
                                to participate, interact, celebrate and learn
                                beyond their regular academic schedule.
                            </p>

                            <p className="mt-6 text-[15px] leading-8 text-[#1E1917]/60 sm:text-[16px]">
                                From academic and technical gatherings to
                                cultural celebrations, student programmes and
                                awareness activities, the department provides
                                varied experiences that contribute to an
                                engaging campus environment.
                            </p>

                            <div className="mt-8 flex items-center gap-3">
                                <span className="h-2 w-2 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#8F7746]">
                                    Participate · Connect · Experience
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                FEATURED ACTIVITY
            ========================================================== */}
            <section className="bg-[#F2EFE8]">
                <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">

                    <div className="grid overflow-hidden bg-[#20235A] lg:grid-cols-[1.15fr_0.85fr]">

                        <div className="relative min-h-[360px] overflow-hidden sm:min-h-[440px] lg:min-h-[540px]">
                            <Image
                                src={activities[0].image}
                                alt={activities[0].title}
                                fill
                                sizes="100vw"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                            />

                            <div className="absolute inset-0 bg-[#20235A]/15" />

                            <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                                <span className="border border-white/30 bg-[#20235A]/60 px-3 py-2 text-[8px] uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                                    Featured
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">

                            <div className="flex items-center gap-3">
                                <span className="font-serif text-[20px] text-[#D2B87C]">
                                    01
                                </span>

                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Academic & Technical
                                </span>
                            </div>

                            <h2 className="mt-6 font-serif text-[36px] leading-[1.03] tracking-[-0.025em] text-white sm:text-[46px]">
                                Nectar Symposium 2026
                            </h2>

                            <p className="mt-6 text-[14px] leading-7 text-white/60 sm:text-[15px]">
                                A featured department activity represented
                                through the MCA activity archive, reflecting
                                the department&apos;s academic and technical
                                engagement.
                            </p>

                            <button
                                type="button"
                                onClick={() => openActivity(0)}
                                className="mt-8 flex w-fit items-center gap-3 border-b border-[#D2B87C] pb-2 text-[9px] font-medium uppercase tracking-[0.18em] text-[#D2B87C] transition-colors hover:text-white"
                            >
                                View Activity

                                <ArrowUpRight
                                    size={15}
                                    strokeWidth={1.4}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                ACTIVITY ARCHIVE
            ========================================================== */}
            <section className="bg-white">
                <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">

                    <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#20235A]/10 pb-7 sm:flex-row sm:items-end">

                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                    Activity Archive
                                </span>
                            </div>

                            <h2 className="mt-4 font-serif text-[38px] leading-[1.02] tracking-[-0.03em] text-[#20235A] sm:text-[46px]">
                                Moments from the department.
                            </h2>
                        </div>

                        <p className="max-w-xs text-[12px] leading-6 text-[#1E1917]/50">
                            Explore selected activities and experiences from
                            the MCA department.
                        </p>
                    </div>

                    {/* Editorial Gallery */}
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-12">

                        {activities.slice(1).map((activity, index) => {
                            const actualIndex = index + 1;

                            const layoutClasses = [
                                "lg:col-span-7",
                                "lg:col-span-5",
                                "lg:col-span-5",
                                "lg:col-span-7",
                                "lg:col-span-4",
                                "lg:col-span-4",
                                "lg:col-span-4",
                                "lg:col-span-12",
                            ];

                            return (
                                <button
                                    type="button"
                                    key={activity.id}
                                    onClick={() =>
                                        openActivity(actualIndex)
                                    }
                                    className={`group relative overflow-hidden bg-[#F2EFE8] text-left ${layoutClasses[index]}`}
                                >
                                    <div
                                        className={`relative overflow-hidden ${index === 7
                                            ? "aspect-[16/7]"
                                            : index === 0 ||
                                                index === 3
                                                ? "aspect-[4/3]"
                                                : "aspect-[4/3]"
                                            }`}
                                    >
                                        <Image
                                            src={activity.image}
                                            alt={activity.title}
                                            fill
                                            sizes="(min-width: 1024px) 330px, 100vw"
                                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#20235A]/85 via-[#20235A]/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

                                        <div className="absolute left-5 top-5 sm:left-6 sm:top-6">
                                            <span className="font-serif text-[18px] text-[#D2B87C]">
                                                {activity.id}
                                            </span>
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-7">
                                            <div className="flex items-end justify-between gap-4">
                                                <div>
                                                    <p className="text-[8px] font-medium uppercase tracking-[0.18em] text-[#D2B87C]">
                                                        {activity.category}
                                                    </p>

                                                    <h3 className="mt-2 font-serif text-[22px] leading-tight text-white sm:text-[25px]">
                                                        {activity.title}
                                                    </h3>
                                                </div>

                                                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/30 bg-[#20235A]/40 text-white opacity-80 transition-all duration-300 group-hover:border-[#D2B87C] group-hover:bg-[#D2B87C] group-hover:text-[#20235A]">
                                                    <ArrowUpRight
                                                        size={16}
                                                        strokeWidth={1.4}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================
                ACTIVITY CATEGORIES
            ========================================================== */}
            <section className="bg-[#20235A] text-white">
                <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">

                    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Department Life
                                </span>
                            </div>

                            <h2 className="mt-4 max-w-md font-serif text-[38px] leading-[1.02] tracking-[-0.03em] sm:text-[46px]">
                                Different experiences.
                                <span className="block text-[#D2B87C]">
                                    One community.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-md text-[14px] leading-7 text-white/60 sm:text-[15px]">
                                Department activities create different
                                opportunities for students to participate,
                                interact and experience campus life.
                            </p>
                        </div>

                        <div className="border-t border-white/15">

                            {[
                                {
                                    number: "01",
                                    title: "Academic & Technical",
                                    text: "Academic gatherings and technology-oriented activities.",
                                },
                                {
                                    number: "02",
                                    title: "Student Life",
                                    text: "Activities that bring students together beyond regular academics.",
                                },
                                {
                                    number: "03",
                                    title: "Culture & Celebration",
                                    text: "Cultural occasions and celebrations that contribute to campus life.",
                                },
                                {
                                    number: "04",
                                    title: "Awareness & Community",
                                    text: "Activities that encourage awareness, participation and social responsibility.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.number}
                                    className="grid gap-4 border-b border-white/15 py-6 sm:grid-cols-[60px_1fr_1fr] sm:items-center sm:gap-6"
                                >
                                    <span className="font-serif text-[21px] text-[#D2B87C]">
                                        {item.number}
                                    </span>

                                    <h3 className="font-serif text-[22px] text-white">
                                        {item.title}
                                    </h3>

                                    <p className="text-[13px] leading-6 text-white/50">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                CLOSING
            ========================================================== */}
            {/* <section className="bg-[#F2EFE8]">
                <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-18 lg:px-16 lg:py-20">

                    <div className="grid items-end gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                    MCA Department
                                </span>
                            </div>

                            <h2 className="mt-4 max-w-md font-serif text-[36px] leading-[1.03] tracking-[-0.03em] text-[#20235A] sm:text-[44px]">
                                Learning happens
                                <span className="block">
                                    beyond the classroom.
                                </span>
                            </h2>
                        </div>

                        <div className="border-l-2 border-[#D2B87C] pl-6 sm:pl-8">
                            <p className="max-w-2xl text-[16px] leading-8 text-[#1E1917]/65 sm:text-[18px]">
                                Through academic, cultural, social and student
                                activities, the MCA department creates
                                opportunities for students to participate,
                                connect and build experiences alongside their
                                academic journey.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* =========================================================
                IMAGE LIGHTBOX
            ========================================================== */}
            {selectedActivity && selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#20235A]/95 p-4 sm:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label={selectedActivity.title}
                >
                    <button
                        type="button"
                        onClick={closeActivity}
                        aria-label="Close activity viewer"
                        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A] sm:right-8 sm:top-8"
                    >
                        <X size={18} strokeWidth={1.4} />
                    </button>

                    <button
                        type="button"
                        onClick={showPrevious}
                        aria-label="Previous activity"
                        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A] sm:left-7"
                    >
                        <ChevronLeft size={20} strokeWidth={1.4} />
                    </button>

                    <div className="flex max-h-[90vh] w-full max-w-6xl flex-col items-center">

                        <div className="relative max-h-[75vh] w-full overflow-hidden bg-black">
                            <Image
                                src={selectedActivity.image}
                                alt={selectedActivity.title}
                                fill
                                sizes="100vw"
                                className="mx-auto max-h-[75vh] w-full object-contain"
                            />
                        </div>

                        <div className="mt-5 flex w-full max-w-6xl flex-col justify-between gap-3 border-t border-white/15 pt-4 sm:flex-row sm:items-center">
                            <div>
                                <p className="text-[8px] uppercase tracking-[0.2em] text-[#D2B87C]">
                                    {selectedActivity.category}
                                </p>

                                <h3 className="mt-1 font-serif text-[22px] text-white">
                                    {selectedActivity.title}
                                </h3>
                            </div>

                            <span className="text-[9px] uppercase tracking-[0.18em] text-white/40">
                                {selectedActivity.id} /{" "}
                                {String(activities.length).padStart(2, "0")}
                            </span>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={showNext}
                        aria-label="Next activity"
                        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A] sm:right-7"
                    >
                        <ChevronRight size={20} strokeWidth={1.4} />
                    </button>
                </div>
            )}
            <Faq />
            <FooterSection />
        </main>
    );
};

export default Page;