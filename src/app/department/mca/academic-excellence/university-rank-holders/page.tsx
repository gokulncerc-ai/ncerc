"use client";

import React, { useState } from "react";
import {
    ArrowUpRight,
    GraduationCap,
    X,
} from "lucide-react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import McaNavigation from "../../../mca/mcanavigation/page";
import Faq from "../../../mca/faq/page";

const toppers = [
    {
        id: "01",
        regNo: "NCE16MCA15",
        name: "RESHMA M",
        batch: "2016-2019",
        cgpa: "8.64",
        image:
            "https://ncerc.ac.in/images/dpt/mca/toppers/RESHMA-M.jpg",
    },
    {
        id: "02",
        regNo: "LNCE17MCA007",
        name: "AMITHA S",
        batch: "2017-2020",
        cgpa: "9.31",
        image:
            "https://ncerc.ac.in/images/dpt/mca/toppers/AMITHA-S.jpg",
    },
];

const Page = () => {
    const [activeStudent, setActiveStudent] = useState<number | null>(null);

    return (
        <main className="overflow-hidden bg-[#FAF7F2] text-[#1E1917]">
            <SiteHeader />
            {/* =========================================================
                HERO
            ========================================================= */}
            <section className="relative overflow-hidden bg-[#20235A] text-white">
                <div className="mx-auto grid min-h-[500px] max-w-[1440px] items-center gap-10 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1fr_0.62fr] lg:gap-14 lg:px-16 lg:py-16 xl:min-h-[540px]">

                    {/* Hero Content */}
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-9 bg-[#D2B87C]" />

                            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#D2B87C]">
                                MCA Department
                            </span>
                        </div>

                        <h1 className="mt-5 max-w-3xl font-serif text-[46px] leading-[0.98] tracking-[-0.035em] sm:text-[58px] lg:text-[68px] xl:text-[74px]">
                            Department
                            <span className="block text-[#D2B87C]">
                                toppers.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-[14px] leading-7 text-white/65 sm:text-[15px] sm:leading-8">
                            Recognising students who have demonstrated strong
                            academic performance throughout their MCA journey.
                        </p>

                        <div className="mt-8 grid max-w-xl grid-cols-2 border-t border-white/15">

                            <div className="border-r border-white/15 py-4 pr-5">
                                <div className="font-serif text-[36px] leading-none text-[#D2B87C] sm:text-[42px]">
                                    02
                                </div>

                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/45">
                                    Toppers Listed
                                </p>
                            </div>

                            <div className="py-4 pl-5">
                                <GraduationCap
                                    size={30}
                                    strokeWidth={1.2}
                                    className="text-[#D2B87C]"
                                />

                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/45">
                                    Academic Recognition
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Hero Academic Visual */}
                    <div className="hidden justify-end lg:flex">
                        <div className="relative w-full max-w-[330px]">

                            <div className="absolute -right-4 -top-4 h-24 w-24 border border-[#D2B87C]/30" />

                            <div className="relative border border-white/15 bg-white/[0.04] p-7">

                                <div className="flex items-start justify-between">
                                    <div>
                                        <span className="text-[9px] uppercase tracking-[0.2em] text-[#D2B87C]">
                                            Academic Record
                                        </span>

                                        <p className="mt-2 text-[11px] text-white/40">
                                            Department Toppers
                                        </p>
                                    </div>

                                    <GraduationCap
                                        size={28}
                                        strokeWidth={1}
                                        className="text-[#D2B87C]"
                                    />
                                </div>

                                <div className="mt-14">
                                    <div className="font-serif text-[70px] leading-none text-white">
                                        Toppers
                                    </div>

                                    <div className="mt-4 h-px w-12 bg-[#D2B87C]" />

                                    <p className="mt-4 max-w-[220px] text-[12px] leading-6 text-white/45">
                                        Students recognised for their
                                        academic performance.
                                    </p>
                                </div>

                                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-4">
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
                            Students who set the standard.
                        </h2>
                    </div>

                    <div className="flex items-center">
                        <p className="max-w-2xl text-[14px] leading-7 text-[#1E1917]/65 sm:text-[15px] sm:leading-8">
                            The Department Toppers section recognises students
                            who have achieved notable academic performance
                            during their MCA programme. Explore their academic
                            records and achievements below.
                        </p>
                    </div>

                </div>
            </section>

            {/* =========================================================
                TOPPERS
            ========================================================= */}
            <section className="bg-[#F2EFE8]">
                <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">

                    <div className="mb-8 flex items-end justify-between gap-6">

                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-px w-8 bg-[#D2B87C]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                    Recognition
                                </span>
                            </div>

                            <h2 className="mt-3 font-serif text-[37px] leading-none tracking-[-0.03em] text-[#20235A] sm:text-[45px]">
                                Department Toppers
                            </h2>
                        </div>

                        <span className="hidden text-[9px] uppercase tracking-[0.18em] text-[#1E1917]/40 sm:block">
                            02 Records
                        </span>

                    </div>

                    {/* Topper Cards */}
                    <div className="grid gap-6 lg:grid-cols-2">

                        {toppers.map((student, index) => (
                            <article
                                key={student.id}
                                className="group overflow-hidden border border-[#20235A]/10 bg-white"
                            >

                                {/* =================================================
                                    STUDENT IMAGE
                                ================================================= */}
                                <button
                                    type="button"
                                    onClick={() => setActiveStudent(index)}
                                    className="relative flex h-[280px] w-full items-center justify-center overflow-hidden bg-[#F7F5F0] text-left focus:outline-none sm:h-[300px]"
                                >
                                    <img
                                        src={student.image}
                                        alt={student.name}
                                        className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.015] sm:p-4"
                                    />

                                    {/* Number */}
                                    <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                        <span className="text-[9px] font-medium tracking-[0.12em]">
                                            {student.id}
                                        </span>
                                    </div>

                                    {/* View Icon */}
                                    <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-white/40 bg-[#20235A]/85 text-[#D2B87C] backdrop-blur-sm">
                                        <ArrowUpRight
                                            size={15}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                </button>

                                {/* =================================================
                                    STUDENT INFORMATION
                                ================================================= */}
                                <div className="p-6 sm:p-7">

                                    <div className="flex items-start justify-between gap-5">

                                        <div>
                                            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8F7746]">
                                                Department Topper
                                            </span>

                                            <h3 className="mt-2 font-serif text-[30px] leading-tight tracking-[-0.02em] text-[#20235A] sm:text-[34px]">
                                                {student.name}
                                            </h3>
                                        </div>

                                        <div className="text-right">
                                            <span className="text-[8px] uppercase tracking-[0.16em] text-[#1E1917]/40">
                                                CGPA
                                            </span>

                                            <div className="mt-1 font-serif text-[30px] leading-none text-[#8F7746]">
                                                {student.cgpa}
                                            </div>
                                        </div>

                                    </div>

                                    <div className="mt-5 grid grid-cols-2 border-t border-[#20235A]/10">

                                        <div className="border-r border-[#20235A]/10 pt-4 pr-4">
                                            <span className="block text-[8px] uppercase tracking-[0.17em] text-[#1E1917]/40">
                                                Register No.
                                            </span>

                                            <span className="mt-1.5 block break-words text-[12px] font-medium tracking-[0.04em] text-[#20235A]">
                                                {student.regNo}
                                            </span>
                                        </div>

                                        <div className="pt-4 pl-4">
                                            <span className="block text-[8px] uppercase tracking-[0.17em] text-[#1E1917]/40">
                                                Batch
                                            </span>

                                            <span className="mt-1.5 block text-[12px] font-medium tracking-[0.04em] text-[#20235A]">
                                                {student.batch}
                                            </span>
                                        </div>

                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => setActiveStudent(index)}
                                        className="mt-5 inline-flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.17em] text-[#20235A] transition-colors duration-300 hover:text-[#8F7746]"
                                    >
                                        View Photograph

                                        <ArrowUpRight
                                            size={14}
                                            strokeWidth={1.5}
                                        />
                                    </button>
                                </div>
                            </article>
                        ))}

                    </div>
                </div>
            </section>

            {/* =========================================================
                ACADEMIC STATEMENT
            ========================================================= */}
            <section className="bg-[#20235A] text-white">
                <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">

                    <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-center lg:gap-14">

                        <div className="flex items-center gap-4">
                            <GraduationCap
                                size={40}
                                strokeWidth={1}
                                className="text-[#D2B87C]"
                            />

                            <div>
                                <span className="block text-[9px] font-medium uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Academic Recognition
                                </span>

                                <span className="mt-1 block text-[9px] uppercase tracking-[0.15em] text-white/35">
                                    MCA Department
                                </span>
                            </div>
                        </div>

                        <div>
                            <h2 className="max-w-3xl font-serif text-[37px] leading-[1.03] tracking-[-0.03em] sm:text-[47px] lg:text-[55px]">
                                Achievement begins with
                                <span className="block text-[#D2B87C]">
                                    academic dedication.
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
                                Recognising effort,
                                <span className="block">
                                    performance and achievement.
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

            {/* =========================================================
                IMAGE MODAL
            ========================================================= */}
            {activeStudent !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#11152f]/95 p-4 sm:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Department topper photograph"
                    onClick={() => setActiveStudent(null)}
                >
                    <div
                        className="relative flex max-h-[90vh] max-w-5xl items-center justify-center"
                        onClick={(event) => event.stopPropagation()}
                    >

                        <button
                            type="button"
                            onClick={() => setActiveStudent(null)}
                            aria-label="Close photograph"
                            className="absolute right-0 top-0 z-20 flex h-10 w-10 items-center justify-center border border-white/20 bg-[#20235A] text-white transition-colors hover:border-[#D2B87C] hover:text-[#D2B87C]"
                        >
                            <X size={18} strokeWidth={1.5} />
                        </button>

                        <div className="flex max-h-[88vh] max-w-[90vw] flex-col items-center">

                            <img
                                src={toppers[activeStudent].image}
                                alt={toppers[activeStudent].name}
                                className="max-h-[76vh] max-w-full object-contain"
                            />

                            <div className="mt-4 text-center">
                                <p className="text-[9px] uppercase tracking-[0.2em] text-[#D2B87C]">
                                    Department Topper
                                </p>

                                <h3 className="mt-2 font-serif text-[24px] text-white">
                                    {toppers[activeStudent].name}
                                </h3>

                                <p className="mt-1 text-[11px] text-white/45">
                                    {toppers[activeStudent].batch} · CGPA{" "}
                                    {toppers[activeStudent].cgpa}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            )}
            <Faq />
            <FooterSection />
        </main>
    );
};

export default Page;