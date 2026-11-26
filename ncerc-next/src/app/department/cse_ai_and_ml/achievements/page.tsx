
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import SiteHeader from "@/components/header/SiteHeader";
import DepartmentNav from "../DepartmentNav/DepartmentNavigation";
import FooterSection from "@/components/home/FooterSection";
import { X, Maximize2, Trophy } from "lucide-react";

export default function AchievementsPage() {
    const [isImageOpen, setIsImageOpen] = useState(false);

    // Close the image modal when Escape is pressed
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsImageOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    // Replace this with the actual achievements image path
    const achievementsImage =
        "/images/dpt/cse_ai_ml/achievements/Cse_Ai_Ml_Achievements_img1.webp";

    return (
        <>
            <SiteHeader />


            <main>
                {/* ================= HERO SECTION ================= */}
                <section className="relative isolate overflow-hidden bg-[#20235A] text-[#FAF7F2] [&_p]:text-justify">

                    {/* Decorative Background Elements */}
                    <div className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full border border-[#D2B87C]/15" />

                    <div className="pointer-events-none absolute -right-10 -top-10 h-[250px] w-[250px] rounded-full border border-[#D2B87C]/10" />

                    <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#D2B87C]/60 to-transparent" />

                    <div className="relative mx-auto flex min-h-[390px] max-w-[1440px] items-center px-5 py-20 sm:px-8 sm:py-24 lg:min-h-[450px] lg:px-16">

                        <div className="max-w-4xl">

                            {/* Eyebrow */}
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#D2B87C]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D2B87C] sm:text-xs">
                                    Computer Science & Engineering
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="font-serif text-[42px] leading-[1.08] tracking-[-0.03em] text-white sm:text-[54px] lg:text-[68px]">
                                Our
                                <span className="block italic text-[#D2B87C]">
                                    Achievements
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="mt-7 max-w-2xl text-sm leading-8 text-white/75 sm:text-base sm:leading-9">
                                Celebrating the accomplishments, milestones and
                                achievements that reflect our commitment to
                                academic excellence and continuous growth.
                            </p>

                            {/* Bottom Label */}
                            <div className="mt-9 flex items-center gap-3">
                                <Trophy className="h-4 w-4 text-[#D2B87C]" />

                                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/65 sm:text-xs">
                                    Recognising Excellence
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Gold Accent */}
                    <div className="h-[3px] w-full bg-[#D2B87C]" />
                </section>
                <DepartmentNav />

                {/* ================= ACHIEVEMENTS SECTION ================= */}
                <section
                    id="achievements"
                    className="relative overflow-hidden bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 [&_p]:text-justify"
                >
                    {/* Decorative Background Elements */}
                    <div className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full border border-[#D2B87C]/15" />

                    <div className="pointer-events-none absolute -right-12 top-40 h-[300px] w-[300px] rounded-full border border-[#D2B87C]/10" />

                    <div className="relative mx-auto max-w-[1440px]">

                        {/* Section Heading */}
                        <div className="mb-10 max-w-3xl lg:mb-12">

                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#927B4D]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#927B4D] sm:text-xs">
                                    Celebrating Success
                                </span>
                            </div>

                            <h2 className="font-serif text-[34px] leading-[1.12] tracking-[-0.03em] text-[#20235A] sm:text-[44px] lg:text-[52px]">
                                Milestones of
                                <span className="block italic text-[#927B4D]">
                                    Achievement
                                </span>
                            </h2>

                            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#66636A] sm:text-base sm:leading-9">
                                A glimpse of the achievements and proud moments
                                of the Department of Computer Science and
                                Engineering.
                            </p>
                        </div>

                        {/* Single Achievements Image */}
                        <div className="relative">

                            {/* Decorative Frame */}
                            <div className="absolute -bottom-4 -left-4 -right-4 -top-4 border border-[#D2B87C]/60" />

                            <button
                                type="button"
                                onClick={() => setIsImageOpen(true)}
                                aria-label="View achievements image in full screen"
                                className="group relative block w-full cursor-zoom-in overflow-hidden bg-[#20235A] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#927B4D] focus-visible:ring-offset-4"
                            >
                                <div className="relative min-h-[280px] w-full sm:min-h-[420px] lg:min-h-[580px]">

                                    <Image
                                        src={achievementsImage}
                                        alt="Achievements of the Computer Science and Engineering Department"
                                        fill
                                        priority
                                        sizes="(min-width: 1024px) 90vw, 100vw"
                                        className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                                    />

                                    {/* Subtle Image Overlay */}
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#20235A]/45 via-transparent to-transparent opacity-80" />

                                    {/* Image Label */}
                                    <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-3 sm:left-8 sm:top-8">
                                        <span className="h-px w-8 bg-[#D2B87C]" />

                                        <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white drop-shadow sm:text-[10px]">
                                            CSE · Achievements
                                        </span>
                                    </div>

                                    {/* Full Screen Indicator */}
                                    <div className="pointer-events-none absolute bottom-5 right-5 flex items-center gap-2 border border-white/30 bg-[#20235A]/75 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-colors group-hover:bg-[#20235A] sm:bottom-8 sm:right-8">
                                        <Maximize2 className="h-4 w-4 text-[#D2B87C]" />

                                        <span>View Full Image</span>
                                    </div>
                                </div>
                            </button>
                        </div>

                        {/* Bottom Caption */}
                        <div className="mt-10 flex items-center gap-4 border-t border-[#DDD5C7] pt-7">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                <Trophy className="h-5 w-5" />
                            </div>

                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                    Department Achievements
                                </p>

                                <p className="mt-1 text-sm leading-7 text-[#66636A]">
                                    Recognising our journey of excellence and success.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* ================= FULL SCREEN IMAGE MODAL ================= */}
            {isImageOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#101225]/95 p-4 backdrop-blur-sm sm:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Achievements full-screen image"
                    onClick={() => setIsImageOpen(false)}
                >
                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={() => setIsImageOpen(false)}
                        aria-label="Close full-screen image"
                        className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center border border-white/30 bg-white/10 text-white transition-colors hover:border-[#D2B87C] hover:bg-[#D2B87C] hover:text-[#20235A] sm:right-8 sm:top-8"
                    >
                        <X className="h-6 w-6" />
                    </button>

                    {/* Full Screen Image */}
                    <div
                        className="relative h-full w-full max-h-[92vh] max-w-[1600px]"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Image
                            src={achievementsImage}
                            alt="Achievements of the Computer Science and Engineering Department"
                            fill
                            priority
                            sizes="100vw"
                            className="object-contain"
                        />
                    </div>
                </div>
            )}

            <FooterSection />
        </>
    );
}
