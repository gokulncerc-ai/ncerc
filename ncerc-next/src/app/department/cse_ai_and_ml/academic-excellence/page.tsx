"use client";
import React, { useState } from "react";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNav from "../DepartmentNav/DepartmentNavigation";

import Image from "next/image";
import { Award, GraduationCap, Sparkles, X } from "lucide-react";

export default function AcademicExcellencePage() {

    const [isImageOpen, setIsImageOpen] = useState(false);

    return (
        <>
            <SiteHeader />
            <section className="relative overflow-hidden bg-[#20235A] text-[#FAF7F2] [&_p]:text-justify">
                {/* Decorative elements */}
                <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
                <div className="pointer-events-none absolute -right-10 -top-14 h-52 w-52 rounded-full border border-[#D2B87C]/10" />

                <div className="relative mx-auto flex min-h-[420px] max-w-[1440px] items-center px-5 py-20 sm:px-8 lg:min-h-[480px] lg:px-16">
                    <div className="max-w-4xl">
                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-px w-12 bg-[#D2B87C]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D2B87C]">
                                Computer Science & Engineering
                            </span>
                        </div>

                        <h1 className="font-serif text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
                            Academic
                            <span className="mt-1 block text-[#D2B87C]">
                                Excellence
                            </span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-sm leading-8 text-white/75 sm:text-base sm:leading-9">
                            Fostering a culture of knowledge, innovation and continuous
                            learning through academic excellence and a commitment to
                            shaping future-ready professionals.
                        </p>

                        <div className="mt-10 flex items-center gap-4">
                            <span className="h-10 w-[2px] bg-[#D2B87C]" />
                            <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                                Learn · Explore · Excel
                            </span>
                        </div>
                    </div>
                </div>

                <div className="h-[3px] w-full bg-[#D2B87C]" />
            </section>

            <DepartmentNav />

            <main>

                {/* Academic Excellence Section */}
                <section
                    id="academic-excellence"
                    className="relative overflow-hidden bg-[#FAF7F2] px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16 [&_p]:text-justify"
                >
                    {/* Background accents */}
                    <div className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full border border-[#D2B87C]/15" />
                    <div className="pointer-events-none absolute -right-12 top-40 h-[300px] w-[300px] rounded-full border border-[#D2B87C]/10" />

                    <div className="relative mx-auto max-w-[1440px]">

                        {/* Section Heading */}
                        <div className="mb-9 max-w-3xl lg:mb-12">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#927B4D]" />
                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#927B4D] sm:text-xs">
                                    Excellence in Education
                                </span>
                            </div>

                            <h1 className="max-w-2xl font-serif text-[38px] leading-[1.08] tracking-[-0.03em] text-[#20235A] sm:text-[48px] lg:text-[56px]">
                                Academic
                                <span className="block italic text-[#927B4D]">
                                    Excellence
                                </span>
                            </h1>

                            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#66636A] sm:text-base">
                                Celebrating academic achievement, intellectual
                                growth and a commitment to excellence in
                                learning and innovation.
                            </p>
                        </div>

                        {/* Main Image */}
                        <div className="relative">

                            {/* Decorative frame */}
                            <div className="absolute -bottom-4 -left-4 -right-4 -top-4 border border-[#D2B87C]/60" />

                            <button
                                type="button"
                                onClick={() => setIsImageOpen(true)}
                                aria-label="View academic excellence image in full screen"
                                className="group relative block w-full cursor-zoom-in overflow-hidden bg-[#20235A] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#927B4D] focus-visible:ring-offset-4"
                            >
                                <div className="relative aspect-[16/9] min-h-[280px] sm:min-h-[380px] lg:min-h-[520px]">

                                    <Image
                                        src="/images/dpt/cse_ai_ml/academic_excellence/academic_excellence_img1.webp"
                                        alt="Academic Excellence - Computer Science and Engineering"
                                        fill
                                        priority
                                        sizes="(min-width: 1024px) 90vw, 100vw"
                                        className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                                    />

                                    {/* Image overlays */}
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#20235A]/75 via-[#20235A]/20 to-transparent" />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#20235A]/70 via-transparent to-transparent" />

                                    {/* Image Label */}
                                    <div className="pointer-events-none absolute left-6 top-6 flex items-center gap-3 sm:left-9 sm:top-9 lg:left-12 lg:top-12">
                                        <span className="h-px w-8 bg-[#D2B87C]" />
                                        <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/85 sm:text-[10px]">
                                            CSE · Academic Excellence
                                        </span>
                                    </div>

                                    {/* Image Content */}
                                    <div className="pointer-events-none absolute bottom-7 left-6 right-6 sm:bottom-10 sm:left-9 sm:right-9 lg:bottom-12 lg:left-12">
                                        <div className="mb-5 flex h-12 w-12 items-center justify-center border border-[#D2B87C]/60 bg-[#20235A]/40 backdrop-blur-sm">
                                            <Award className="h-6 w-6 text-[#D2B87C]" />
                                        </div>

                                        <h2 className="max-w-2xl font-serif text-[30px] leading-[1.12] text-white sm:text-[42px] lg:text-[54px]">
                                            Inspiring Excellence.
                                            <span className="block italic text-[#D2B87C]">
                                                Achieving Greatness.
                                            </span>
                                        </h2>

                                        <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                                            A commitment to knowledge, innovation
                                            and continuous academic growth.
                                        </p>
                                    </div>

                                    {/* View Full Image Indicator */}
                                    <div className="pointer-events-none absolute bottom-5 right-5 flex items-center gap-2 border border-white/30 bg-[#20235A]/60 px-3 py-2 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm transition-colors group-hover:bg-[#20235A]/90 sm:bottom-8 sm:right-8">
                                        <span>View Full Image</span>
                                        <span className="text-[#D2B87C]">↗</span>
                                    </div>
                                </div>
                            </button>
                        </div>

                        {/* Bottom Information */}
                        <div className="mt-12 grid gap-6 border-t border-[#DDD5C7] pt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

                            {/* Academic Learning */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                    <GraduationCap className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                        Academic Learning
                                    </p>
                                    <p className="mt-2 text-sm leading-7 text-[#66636A]">
                                        Encouraging knowledge, learning
                                        and intellectual development.
                                    </p>
                                </div>
                            </div>

                            {/* Achievement */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#927B4D]">
                                    <Award className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                        Student Achievement
                                    </p>
                                    <p className="mt-2 text-sm leading-7 text-[#66636A]">
                                        Recognising dedication, achievement
                                        and academic progress.
                                    </p>
                                </div>
                            </div>

                            {/* Innovation */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                    <Sparkles className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                        Continuous Growth
                                    </p>
                                    <p className="mt-2 text-sm leading-7 text-[#66636A]">
                                        Promoting innovation and a culture
                                        of continuous improvement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Full Screen Image Modal */}
                    {isImageOpen && (
                        <div
                            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#101225]/95 p-4 sm:p-8"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Academic Excellence full-screen image"
                            onClick={() => setIsImageOpen(false)}
                        >
                            {/* Close Button */}
                            <button
                                type="button"
                                onClick={() => setIsImageOpen(false)}
                                aria-label="Close full-screen image"
                                className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center border border-white/30 bg-white/10 text-white transition-colors hover:bg-[#D2B87C] hover:text-[#20235A] sm:right-8 sm:top-8"
                            >
                                <X className="h-6 w-6" />
                            </button>

                            {/* Full Image */}
                            <div
                                className="relative h-full w-full max-h-[90vh] max-w-[1500px]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src="/images/dpt/cse_ai_ml/academic_excellence/academic_excellence_img1.webp"
                                    alt="Academic Excellence - Computer Science and Engineering"
                                    fill
                                    sizes="100vw"
                                    priority
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    )}
                </section>

            </main>

            <FooterSection />
        </>
    );
}
