
"use client";

import Image from "next/image";
import React, { useState } from "react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../departmentnavigation/DepartmentNavigation";
import { X } from "lucide-react";

export default function AchievementsPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const achievementImages = [
        {
            src: "/images/dpt/applied_science_and_humanities/achievements/Ash_Achievements_img2.webp",
            alt: "Electrical and Computer Engineering Semester 1 results outstanding performance",
            category: "Academic Achievement",
            title: "Outstanding Semester 1 Results",
            description:
                "Electrical and Computer Engineering – celebrating outstanding academic performance and 100% results.",
        },
        {
            src: "/images/dpt/applied_science_and_humanities/achievements/Ash_Achievements_img1.webp",
            alt: "Department of Applied Science and Humanities congratulations poster",
            category: "Student Recognition",
            title: "Congratulations to Our Students",
            description:
                "Department of Applied Science and Humanities celebrates the achievements of its students.",
        },
    ];

    return (
        <>
            <SiteHeader />

            <main className="bg-[#FAF7F2] text-[#1E1917] [&_p]:text-justify">

                {/* =========================================================
                    HERO SECTION
                ========================================================== */}

                <section className="relative overflow-hidden bg-[#20235A] text-[#FAF7F2]">
                    {/* Decorative Elements */}
                    <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
                    <div className="pointer-events-none absolute -right-10 -top-14 h-52 w-52 rounded-full border border-[#D2B87C]/10" />

                    <div className="relative mx-auto flex min-h-[420px] max-w-[1440px] items-center px-5 py-20 sm:px-8 lg:min-h-[480px] lg:px-16">
                        <div className="w-full max-w-5xl">

                            {/* Breadcrumb */}
                            <div className="mb-7 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
                                <span>Applied Science & Humanities</span>
                                <span className="text-[#D2B87C]">/</span>
                                <span className="text-[#D2B87C]">Achievements</span>
                            </div>

                            {/* Section Label */}
                            <div className="mb-7 flex items-center gap-3">
                                <span className="h-px w-12 bg-[#D2B87C]" />
                                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                    Academic Excellence & Recognition
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="font-serif text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
                                Celebrating
                                <span className="mt-1 block text-[#D2B87C]">
                                    Achievements
                                </span>
                            </h1>

                            {/* Hero Description */}
                            <p className="mt-7 max-w-2xl text-sm leading-8 text-white/75 sm:text-base sm:leading-9">
                                Recognising the outstanding academic performances and
                                accomplishments of our students, celebrating their
                                dedication, hard work and commitment to excellence.
                            </p>

                            {/* Bottom Label */}
                            <div className="mt-10 flex items-center gap-4">
                                <span className="h-10 w-[2px] bg-[#D2B87C]" />
                                <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                                    Learn · Achieve · Inspire
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="h-[3px] w-full bg-[#D2B87C]" />
                </section>

                {/* =========================================================
                    DEPARTMENT NAVIGATION
                ========================================================== */}

                <DepartmentNavigation />

                {/* =========================================================
                    ACHIEVEMENT POSTERS SECTION
                ========================================================== */}

                <section
                    id="achievement-posters"
                    className="bg-[#FAF7F2] px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
                >
                    <div className="mx-auto max-w-[1440px]">

                        {/* Section Heading */}
                        <div className="mb-12 max-w-2xl">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#927B4D]" />
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#927B4D]">
                                    Student Recognition
                                </p>
                            </div>

                            <h2 className="font-serif text-3xl font-medium leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                Academic
                                <span className="text-[#927B4D]">
                                    {" "}Achievements.
                                </span>
                            </h2>

                            <p className="mt-5 max-w-xl text-sm leading-8 text-[#20235A]/65 sm:text-base">
                                Celebrating the academic accomplishments and outstanding
                                performances of our students.
                            </p>
                        </div>

                        {/* Achievement Images */}
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

                            {achievementImages.map((achievement, index) => (
                                <div
                                    key={index}
                                    className="group"
                                >
                                    {/* Poster Image */}
                                    <button
                                        type="button"
                                        onClick={() => setSelectedImage(achievement.src)}
                                        className="relative block w-full cursor-pointer overflow-hidden border border-[#D2B87C]/40 bg-white text-left"
                                        aria-label={`View ${achievement.title}`}
                                    >
                                        <Image
                                            src={achievement.src}
                                            alt={achievement.alt}
                                            width={900}
                                            height={1200}
                                            className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                                        />
                                    </button>

                                    {/* Poster Details */}
                                    <div className="mt-5 border-l-2 border-[#D2B87C] pl-4">
                                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#927B4D]">
                                            {achievement.category}
                                        </p>

                                        <h3 className="mt-2 font-serif text-xl text-[#20235A] sm:text-2xl">
                                            {achievement.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-7 text-[#20235A]/60">
                                            {achievement.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

            </main>

            <FooterSection />

            {/* =========================================================
                FULL-SCREEN IMAGE PREVIEW MODAL
            ========================================================== */}

            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#20235A]/95 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={() => setSelectedImage(null)}
                        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white hover:text-[#20235A]"
                        aria-label="Close image preview"
                    >
                        <X size={22} />
                    </button>

                    {/* Preview Image */}
                    <div
                        className="relative h-[85vh] w-full max-w-5xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage}
                            alt="Achievement poster preview"
                            fill
                            sizes="95vw"
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
