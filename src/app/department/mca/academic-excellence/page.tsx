"use client";

import React from "react";
import {
    ArrowUpRight,
    Award,
    GraduationCap,
    Medal,
    Trophy,
} from "lucide-react";
import FooterSection from "@/components/home/FooterSection";
import McaNavigation from "../../mca/mcanavigation/page";
import Faq from "../../mca/faq/page";
import SiteHeader from "@/components/header/SiteHeader";

const excellenceSections = [
    {
        id: "01",
        title: "University Rank Holders",
        label: "Academic Distinction",
        description:
            "Explore the university rank holders who represent outstanding academic performance within the MCA programme.",
        href: "/department/mca/academic-excellence/university-rank-holders",
        icon: Trophy,
    },
    {
        id: "02",
        title: "Department Toppers",
        label: "Academic Excellence",
        description:
            "Discover the students who have achieved distinction through their academic performance at the department level.",
        href: "/mca/department-toppers",
        icon: Medal,
    },
    {
        id: "03",
        title: "Other Achievements",
        label: "Recognition",
        description:
            "Explore additional academic achievements and recognitions associated with the MCA department.",
        href: "/mca/academic-excellence#",
        icon: Award,
    },
];

const Page = () => {
    return (
        <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">
            <SiteHeader />

            {/* =========================================================
                HERO
            ========================================================= */}
            <section className="relative overflow-hidden bg-[#20235A] text-white">
                <div className="mx-auto grid min-h-[500px] max-w-[1440px] items-center gap-10 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1fr_0.65fr] lg:gap-14 lg:px-16 lg:py-16 xl:min-h-[540px]">

                    {/* Hero Content */}
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-9 bg-[#D2B87C]" />

                            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#D2B87C]">
                                MCA Department
                            </span>
                        </div>

                        <h1 className="mt-5 max-w-3xl font-serif text-[46px] leading-[0.98] tracking-[-0.035em] sm:text-[58px] lg:text-[68px] xl:text-[74px]">
                            Academic
                            <span className="block text-[#D2B87C]">
                                excellence.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-[14px] leading-7 text-white/65 sm:text-[15px] sm:leading-8">
                            Recognising academic distinction, outstanding
                            performance and the achievements of MCA students
                            across the university and department.
                        </p>

                        <div className="mt-8 grid max-w-xl grid-cols-2 border-t border-white/15">
                            <div className="border-r border-white/15 py-4 pr-5">
                                <div className="font-serif text-[34px] leading-none text-[#D2B87C] sm:text-[40px]">
                                    03
                                </div>

                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/45">
                                    Excellence Areas
                                </p>
                            </div>

                            <div className="py-4 pl-5">
                                <GraduationCap
                                    size={30}
                                    strokeWidth={1.2}
                                    className="text-[#D2B87C]"
                                />

                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/45">
                                    Academic Focus
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="relative hidden justify-end lg:flex">
                        <div className="relative w-full max-w-[330px]">

                            <div className="absolute -right-4 -top-4 h-24 w-24 border border-[#D2B87C]/30" />

                            <div className="relative border border-white/15 bg-white/[0.04] p-7">
                                <div className="flex items-start justify-between">
                                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Academic Record
                                    </span>

                                    <GraduationCap
                                        size={28}
                                        strokeWidth={1}
                                        className="text-[#D2B87C]"
                                    />
                                </div>

                                <div className="mt-14">
                                    <div className="font-serif text-[72px] leading-none text-white/95">
                                        03
                                    </div>

                                    <div className="mt-3 h-px w-12 bg-[#D2B87C]" />

                                    <p className="mt-4 max-w-[210px] text-[12px] leading-6 text-white/50">
                                        University ranks, department
                                        toppers and academic achievements.
                                    </p>
                                </div>

                                <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-4">
                                    <span className="text-[8px] uppercase tracking-[0.18em] text-white/35">
                                        MCA
                                    </span>

                                    <span className="text-[8px] uppercase tracking-[0.18em] text-white/35">
                                        NCERC
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />
            </section>

            <McaNavigation />

            {/* =========================================================
                INTRO
            ========================================================= */}
            <section className="bg-white">
                <div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14 lg:px-16 lg:py-16">

                    <div>
                        <div className="flex items-center gap-2">
                            <span className="h-px w-8 bg-[#D2B87C]" />

                            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                Academic Excellence
                            </span>
                        </div>

                        <h2 className="mt-3 max-w-md font-serif text-[37px] leading-[1.03] tracking-[-0.03em] text-[#20235A] sm:text-[45px] lg:text-[50px]">
                            Celebrating academic achievement.
                        </h2>
                    </div>

                    <div className="flex items-center">
                        <p className="max-w-2xl text-[14px] leading-7 text-[#1E1917]/65 sm:text-[15px] sm:leading-8">
                            Academic excellence reflects the commitment,
                            consistency and achievement of students throughout
                            their learning journey. Explore the academic
                            distinctions and recognitions associated with the
                            MCA department.
                        </p>
                    </div>
                </div>
            </section>

            {/* =========================================================
                EXCELLENCE DIRECTORY
            ========================================================= */}
            <section className="bg-[#F2EFE8]">
                <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">

                    <div className="mb-8 flex items-end justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                    Explore
                                </span>
                            </div>

                            <h2 className="mt-3 font-serif text-[37px] leading-none tracking-[-0.03em] text-[#20235A] sm:text-[45px]">
                                Academic records
                            </h2>
                        </div>

                        <span className="hidden text-[9px] uppercase tracking-[0.18em] text-[#1E1917]/40 sm:block">
                            01 — 03
                        </span>
                    </div>

                    <div className="border-t border-[#20235A]/15">
                        {excellenceSections.map((item) => {
                            const Icon = item.icon;

                            return (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    className="group grid gap-5 border-b border-[#20235A]/15 py-7 transition-colors duration-300 sm:grid-cols-[80px_1fr_auto] sm:items-center sm:gap-8 sm:py-8"
                                >
                                    {/* Number */}
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-[28px] leading-none text-[#20235A]/25 transition-colors duration-300 group-hover:text-[#8F7746]">
                                            {item.id}
                                        </span>

                                        <span className="hidden h-px w-7 bg-[#D2B87C] sm:block" />
                                    </div>

                                    {/* Content */}
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-3">
                                            <Icon
                                                size={19}
                                                strokeWidth={1.4}
                                                className="shrink-0 text-[#8F7746] transition-colors duration-300 group-hover:text-[#20235A]"
                                            />

                                            <span className="text-[9px] font-medium uppercase tracking-[0.19em] text-[#8F7746]">
                                                {item.label}
                                            </span>
                                        </div>

                                        <h3 className="mt-2 font-serif text-[27px] leading-tight tracking-[-0.02em] text-[#20235A] sm:text-[34px]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 max-w-2xl text-[13px] leading-6 text-[#1E1917]/55 sm:text-[14px]">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Arrow */}
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#20235A]/15 text-[#20235A] transition-all duration-300 group-hover:border-[#20235A] group-hover:bg-[#20235A] group-hover:text-[#D2B87C]">
                                        <ArrowUpRight
                                            size={16}
                                            strokeWidth={1.5}
                                        />
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================
                FEATURE STATEMENT
            ========================================================= */}
            <section className="bg-[#20235A] text-white">
                <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">

                    <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-center lg:gap-14">

                        <div className="flex items-center gap-4">
                            <Award
                                size={40}
                                strokeWidth={1}
                                className="text-[#D2B87C]"
                            />

                            <div>
                                <span className="block text-[9px] font-medium uppercase tracking-[0.2em] text-[#D2B87C]">
                                    MCA Department
                                </span>

                                <span className="mt-1 block text-[9px] uppercase tracking-[0.15em] text-white/35">
                                    Academic Excellence
                                </span>
                            </div>
                        </div>

                        <div>
                            <h2 className="max-w-3xl font-serif text-[37px] leading-[1.03] tracking-[-0.03em] sm:text-[47px] lg:text-[55px]">
                                Excellence is built
                                <span className="block text-[#D2B87C]">
                                    through achievement.
                                </span>
                            </h2>

                            <div className="mt-5 h-px w-14 bg-[#D2B87C]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                CLOSING
            ========================================================= */}
            {/* <section className="bg-white">
                <div className="mx-auto max-w-[1440px] px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-14">

                    <div className="flex flex-col gap-5 border-t border-[#20235A]/10 pt-6 sm:flex-row sm:items-end sm:justify-between">

                        <div>
                            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                Academic Journey
                            </span>

                            <h2 className="mt-2 max-w-xl font-serif text-[30px] leading-[1.05] tracking-[-0.025em] text-[#20235A] sm:text-[38px]">
                                Recognising dedication,
                                <span className="block">
                                    achievement and distinction.
                                </span>
                            </h2>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="h-2 w-2 bg-[#D2B87C]" />

                            <span className="text-[9px] uppercase tracking-[0.17em] text-[#1E1917]/45">
                                Department of Computer Applications
                            </span>
                        </div>
                    </div>
                </div>
            </section> */}
            <Faq />
            <FooterSection />
        </main>
    );
};

export default Page;