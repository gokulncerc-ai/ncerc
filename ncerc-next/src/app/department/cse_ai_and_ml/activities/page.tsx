
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import SiteHeader from "@/components/header/SiteHeader";
import DepartmentNav from "../DepartmentNav/DepartmentNavigation";
import FooterSection from "@/components/home/FooterSection";
import { X, Maximize2, MapPin, CalendarDays, GraduationCap } from "lucide-react";

export default function ActivitiesPage() {
    const [activeImage, setActiveImage] = useState<string | null>(null);

    // Replace these paths with the actual image paths
    const activityImages = [
        {
            src: "/images/dpt/cse_ai_ml/activities/Cse_Ai_Ml_Activities_img1.webp",
            alt: "S4 AIML students during the industrial visit to Radio Astronomy Centre, Ooty",
        },
        {
            src: "/images/dpt/cse_ai_ml/activities/Cse_Ai_Ml_Activities_img2.webp",
            alt: "Students exploring the Radio Astronomy Centre, Ooty",
        },
    ];

    // Close lightbox using Escape key
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setActiveImage(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

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
                                Department
                                <span className="block italic text-[#D2B87C]">
                                    Activities
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="mt-7 max-w-2xl text-sm leading-8 text-white/75 sm:text-base sm:leading-9">
                                Exploring learning beyond the classroom through
                                educational experiences, industry exposure and
                                opportunities that connect academic knowledge
                                with real-world applications.
                            </p>

                            {/* Bottom Label */}
                            <div className="mt-9 flex items-center gap-3">
                                <GraduationCap className="h-4 w-4 text-[#D2B87C]" />

                                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/65 sm:text-xs">
                                    Learning Beyond Classrooms
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Gold Accent */}
                    <div className="h-[3px] w-full bg-[#D2B87C]" />
                </section>

                <DepartmentNav />

                {/* ================= ACTIVITIES SECTION ================= */}
                <section
                    id="activities"
                    className="relative overflow-hidden bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 [&_p]:text-justify"
                >
                    {/* Background Accents */}
                    <div className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full border border-[#D2B87C]/15" />

                    <div className="pointer-events-none absolute -right-12 top-40 h-[300px] w-[300px] rounded-full border border-[#D2B87C]/10" />

                    <div className="relative mx-auto max-w-[1440px]">

                        {/* Section Heading */}
                        <div className="mb-10 max-w-3xl lg:mb-12">

                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#927B4D]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#927B4D] sm:text-xs">
                                    Experiential Learning
                                </span>
                            </div>

                            <h2 className="font-serif text-[34px] leading-[1.12] tracking-[-0.03em] text-[#20235A] sm:text-[44px] lg:text-[52px]">
                                Industrial
                                <span className="block italic text-[#927B4D]">
                                    Visit
                                </span>
                            </h2>

                            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#66636A] sm:text-base sm:leading-9">
                                S4 AIML students visited the Radio Astronomy
                                Centre, Ooty, to gain exposure to scientific
                                research and explore the practical applications
                                of technology in radio astronomy.
                            </p>
                        </div>

                        {/* Activity Information */}
                        <div className="mb-10 grid gap-5 border-y border-[#DDD5C7] py-7 sm:grid-cols-2 sm:gap-8">

                            {/* Activity Name */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                    <GraduationCap className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                        Activity
                                    </p>

                                    <p className="mt-2 text-sm font-medium leading-7 text-[#20235A]">
                                        S4 AIML Industrial Visit
                                    </p>
                                </div>
                            </div>

                            {/* Date and Location */}
                            <div className="flex flex-wrap gap-7">
                                <div className="flex items-start gap-3">
                                    <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-[#927B4D]" />

                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                            Date
                                        </p>

                                        <p className="mt-2 text-sm leading-7 text-[#20235A]">
                                            14 February 2026
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#927B4D]" />

                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                            Location
                                        </p>

                                        <p className="mt-2 text-sm leading-7 text-[#20235A]">
                                            Radio Astronomy Centre, Ooty
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Activity Images */}
                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#927B4D]" />

                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                    Activity Gallery
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">

                                {activityImages.map((image, index) => (
                                    <div
                                        key={image.src}
                                        className="group relative"
                                    >
                                        {/* Decorative Frame */}
                                        <div className="absolute -bottom-3 -left-3 -right-3 -top-3 border border-[#D2B87C]/50 transition-colors duration-300 group-hover:border-[#927B4D]" />

                                        <button
                                            type="button"
                                            onClick={() => setActiveImage(image.src)}
                                            aria-label={`View industrial visit image ${index + 1} in full screen`}
                                            className="relative block w-full cursor-zoom-in overflow-hidden bg-[#20235A] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#927B4D] focus-visible:ring-offset-4"
                                        >
                                            <div className="relative aspect-[4/3] w-full">

                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    fill
                                                    sizes="(min-width: 768px) 50vw, 100vw"
                                                    className="object-cover "
                                                />

                                                {/* Image Overlay */}
                                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#20235A]/60 via-transparent to-transparent opacity-80" />

                                                {/* Image Number */}
                                                <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-3">
                                                    <span className="h-px w-7 bg-[#D2B87C]" />

                                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                                                        Image {String(index + 1).padStart(2, "0")}
                                                    </span>
                                                </div>

                                                {/* Full Screen Indicator */}
                                                <div className="pointer-events-none absolute bottom-5 right-5 flex items-center gap-2 border border-white/30 bg-[#20235A]/75 px-3 py-2.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-colors group-hover:bg-[#20235A] sm:text-[10px]">
                                                    <Maximize2 className="h-4 w-4 text-[#D2B87C]" />
                                                    <span>View Full Image</span>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </section>


                {/* ================= EXOUZIA SOFTWARE INDUSTRIAL VISIT ================= */}
                <section
                    id="exouzia-industrial-visit"
                    className="relative overflow-hidden bg-[#F2EFE8] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 [&_p]:text-justify"
                >
                    <div className="relative mx-auto max-w-[1440px]">

                        {/* Section Heading */}
                        <div className="mb-10 max-w-3xl lg:mb-12">

                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#927B4D]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#927B4D] sm:text-xs">
                                    Industry Exposure
                                </span>
                            </div>

                            <h2 className="font-serif text-[34px] leading-[1.12] tracking-[-0.03em] text-[#20235A] sm:text-[44px] lg:text-[52px]">
                                Industrial Visit
                                <span className="block italic text-[#927B4D]">
                                    Exouzia Software
                                </span>
                            </h2>

                            <p className="mt-5 max-w-3xl text-sm leading-8 text-[#66636A] sm:text-base sm:leading-9">
                                The Department of CSE (AI & ML), NCERC, organized an
                                industrial visit for S4 students to Exouzia Software
                                Company, Sankaramangalam, Pattambi, on 31-01-2026.
                                The visit provided valuable industry exposure and
                                insights into real-world software development practices.
                            </p>
                        </div>

                        {/* Visit Details */}
                        <div className="mb-10 grid gap-6 border-y border-[#DDD5C7] py-7 sm:grid-cols-3 sm:gap-8">

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                    <GraduationCap className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                        Participants
                                    </p>

                                    <p className="mt-2 text-sm leading-7 text-[#20235A]">
                                        S4 CSE (AI & ML) Students
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#927B4D]">
                                    <CalendarDays className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                        Date
                                    </p>

                                    <p className="mt-2 text-sm leading-7 text-[#20235A]">
                                        31 January 2026
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                    <MapPin className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                        Location
                                    </p>

                                    <p className="mt-2 text-sm leading-7 text-[#20235A]">
                                        Sankaramangalam, Pattambi
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Activity Gallery */}
                        <div>

                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#927B4D]" />

                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                    Visit Gallery
                                </p>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">

                                {[
                                    {
                                        src: "/images/dpt/cse_ai_ml/activities/Cse_Ai_Ml_Activities_img3.webp",
                                        alt: "S4 CSE AI and ML students during the Exouzia Software industrial visit",
                                    },
                                    {
                                        src: "/images/dpt/cse_ai_ml/activities/Cse_Ai_Ml_Activities_img4.webp",
                                        alt: "Students exploring software development practices at Exouzia Software",
                                    },
                                    {
                                        src: "/images/dpt/cse_ai_ml/activities/Cse_Ai_Ml_Activities_img5.webp",
                                        alt: "Industrial visit activities at Exouzia Software Company",
                                    },
                                    {
                                        src: "/images/dpt/cse_ai_ml/activities/Cse_Ai_Ml_Activities_img6.webp",
                                        alt: "S4 students during the industrial visit to Exouzia Software",
                                    },
                                ].map((image, index) => (
                                    <div key={image.src} className="group relative">

                                        {/* Decorative Frame */}
                                        <div className="absolute -bottom-3 -left-3 -right-3 -top-3 border border-[#D2B87C]/50 transition-colors duration-300 group-hover:border-[#927B4D]" />

                                        <button
                                            type="button"
                                            onClick={() => setActiveImage(image.src)}
                                            aria-label={`View Exouzia industrial visit image ${index + 1} in full screen`}
                                            className="relative block w-full cursor-zoom-in overflow-hidden bg-[#20235A] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#927B4D] focus-visible:ring-offset-4"
                                        >
                                            <div className="relative aspect-[4/3] w-full">

                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    fill
                                                    sizes="(min-width: 640px) 50vw, 100vw"
                                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                                />

                                                {/* Image Overlay */}
                                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#20235A]/60 via-transparent to-transparent opacity-80" />

                                                {/* Image Number */}
                                                <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-3">
                                                    <span className="h-px w-7 bg-[#D2B87C]" />

                                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                                                        Image {String(index + 1).padStart(2, "0")}
                                                    </span>
                                                </div>

                                                {/* Full Screen Indicator */}
                                                <div className="pointer-events-none absolute bottom-5 right-5 flex items-center gap-2 border border-white/30 bg-[#20235A]/75 px-3 py-2.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-colors group-hover:bg-[#20235A] sm:text-[10px]">
                                                    <Maximize2 className="h-4 w-4 text-[#D2B87C]" />
                                                    <span>View Full Image</span>
                                                </div>

                                            </div>
                                        </button>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>
                </section>


                {/* ================= NATIONAL LEVEL RESEARCH CONFERENCE ================= */}
                <section
                    id="national-research-conference"
                    className="relative overflow-hidden bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
                >
                    {/* Background Accents */}
                    <div className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full border border-[#D2B87C]/15" />

                    <div className="pointer-events-none absolute -right-12 top-40 h-[300px] w-[300px] rounded-full border border-[#D2B87C]/10" />

                    <div className="relative mx-auto max-w-[1440px]">

                        {/* Section Heading */}
                        <div className="mb-10 max-w-3xl lg:mb-12">

                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#927B4D]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#927B4D] sm:text-xs">
                                    Research & Recognition
                                </span>
                            </div>

                            <h2 className="font-serif text-[34px] leading-[1.12] tracking-[-0.03em] text-[#20235A] sm:text-[44px] lg:text-[52px]">
                                National Level
                                <span className="block italic text-[#927B4D]">
                                    Research Conference
                                </span>
                            </h2>

                            <p className="mt-5 max-w-3xl text-sm leading-8 text-[#66636A] sm:text-base sm:leading-9">
                                Mr. Roshan Sanu Y, Assistant Professor, Department of
                                AIML, participated in the National Level Research
                                Conference organized by the Higher Education Ministry,
                                Kerala, from 09.02.2026 to 11.02.2026.
                            </p>
                        </div>

                        {/* Participation Details */}
                        <div className="mb-10 grid gap-6 border-y border-[#DDD5C7] py-7 sm:grid-cols-2 sm:gap-8">

                            {/* Faculty */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#20235A] text-[#D2B87C]">
                                    <GraduationCap className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                        Faculty Participant
                                    </p>

                                    <p className="mt-2 text-sm font-medium leading-7 text-[#20235A]">
                                        Mr. Roshan Sanu Y
                                    </p>

                                    <p className="text-sm leading-7 text-[#66636A]">
                                        Assistant Professor, Department of AIML
                                    </p>
                                </div>
                            </div>

                            {/* Conference Dates */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#F2EFE8] text-[#927B4D]">
                                    <CalendarDays className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                        Conference Dates
                                    </p>

                                    <p className="mt-2 text-sm leading-7 text-[#20235A]">
                                        09 February – 11 February 2026
                                    </p>

                                    <p className="text-sm leading-7 text-[#66636A]">
                                        Three-day National Level Conference
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Conference Image */}
                        <div>

                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#927B4D]" />

                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                    Conference Gallery
                                </p>
                            </div>

                            <div className="relative">

                                {/* Decorative Frame */}
                                <div className="absolute -bottom-4 -left-4 -right-4 -top-4 border border-[#D2B87C]/60" />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveImage(
                                            "/images/dpt/cse_ai_ml/activities/Cse_Ai_Ml_Activities_img7.webp"
                                        )
                                    }
                                    aria-label="View national level research conference image in full screen"
                                    className="group relative block w-full cursor-zoom-in overflow-hidden bg-[#20235A] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#927B4D] focus-visible:ring-offset-4"
                                >
                                    <div className="relative aspect-[16/9] min-h-[280px] w-full sm:min-h-[380px] lg:min-h-[520px]">

                                        <Image
                                            src="/images/dpt/cse_ai_ml/activities/Cse_Ai_Ml_Activities_img7.webp"
                                            alt="Mr. Roshan Sanu Y participating in the National Level Research Conference"
                                            fill
                                            sizes="(min-width: 1024px) 90vw, 100vw"
                                            className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                                        />

                                        {/* Image Overlay */}
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#20235A]/50 via-transparent to-transparent" />

                                        {/* Image Label */}
                                        <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-3 sm:left-8 sm:top-8">
                                            <span className="h-px w-8 bg-[#D2B87C]" />

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white drop-shadow sm:text-[10px]">
                                                National Level Research Conference
                                            </span>
                                        </div>

                                        {/* Full Screen Indicator */}
                                        <div className="pointer-events-none absolute bottom-5 right-5 flex items-center gap-2 border border-white/30 bg-[#20235A]/75 px-3 py-2.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-colors group-hover:bg-[#20235A] sm:bottom-8 sm:right-8 sm:text-[10px]">
                                            <Maximize2 className="h-4 w-4 text-[#D2B87C]" />
                                            <span>View Full Image</span>
                                        </div>

                                    </div>
                                </button>
                            </div>
                        </div>

                    </div>
                </section>


                {/* ================= CYPHER ANDROID APP DEVELOPMENT ================= */}
                <section
                    id="cypher-android-development"
                    className="relative overflow-hidden bg-[#F2EFE8] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
                >
                    {/* Background Accents */}
                    <div className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full border border-[#D2B87C]/15" />

                    <div className="pointer-events-none absolute -right-12 top-40 h-[300px] w-[300px] rounded-full border border-[#D2B87C]/10" />

                    <div className="relative mx-auto max-w-[1440px]">

                        {/* Section Heading */}
                        <div className="mb-10 max-w-3xl lg:mb-12">

                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#927B4D]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#927B4D] sm:text-xs">
                                    Technical Learning
                                </span>
                            </div>

                            <h2 className="font-serif text-[34px] leading-[1.12] tracking-[-0.03em] text-[#20235A] sm:text-[44px] lg:text-[52px]">
                                Cypher
                                <span className="block italic text-[#927B4D]">
                                    Android App Development Using Kotlin
                                </span>
                            </h2>

                            <p className="mt-5 max-w-3xl text-sm leading-8 text-[#66636A] sm:text-base sm:leading-9">
                                Exploring Android application development using Kotlin,
                                providing an opportunity to engage with mobile app
                                development and practical programming concepts.
                            </p>
                        </div>

                        {/* Activity Image */}
                        <div>

                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#927B4D]" />

                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                    Activity Gallery
                                </p>
                            </div>

                            <div className="relative">

                                {/* Decorative Frame */}
                                <div className="absolute -bottom-4 -left-4 -right-4 -top-4 border border-[#D2B87C]/60" />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setActiveImage(
                                            "/images/dpt/cse_ai_ml/activities/cypher_android_app_img1.webp"
                                        )
                                    }
                                    aria-label="View Cypher Android app development image in full screen"
                                    className="group relative block w-full cursor-zoom-in overflow-hidden bg-[#20235A] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#927B4D] focus-visible:ring-offset-4"
                                >
                                    <div className="relative aspect-[16/9] min-h-[280px] w-full sm:min-h-[380px] lg:min-h-[520px]">

                                        <Image
                                            src="/images/dpt/cse_ai_ml/activities/Cse_Ai_Ml_Activities_img8.webp"
                                            alt="Cypher Android App Development using Kotlin activity"
                                            fill
                                            sizes="(min-width: 1024px) 90vw, 100vw"
                                            className="object-contain object-center "
                                        />

                                        {/* Image Overlay */}
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#20235A]/50 via-transparent to-transparent" />

                                        {/* Image Label */}
                                        <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-3 sm:left-8 sm:top-8">
                                            <span className="h-px w-8 bg-[#D2B87C]" />

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white drop-shadow sm:text-[10px]">
                                                Cypher · Kotlin Development
                                            </span>
                                        </div>

                                        {/* Full Screen Indicator */}
                                        <div className="pointer-events-none absolute bottom-5 right-5 flex items-center gap-2 border border-white/30 bg-[#20235A]/75 px-3 py-2.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-colors group-hover:bg-[#20235A] sm:bottom-8 sm:right-8 sm:text-[10px]">
                                            <Maximize2 className="h-4 w-4 text-[#D2B87C]" />
                                            <span>View Full Image</span>
                                        </div>

                                    </div>
                                </button>
                            </div>
                        </div>

                    </div>
                </section>


                {/* ================= CYPHER – CSE AI & ML CLUB INAUGURATION ================= */}
                <section
                    id="cypher-club-activities"
                    className="relative overflow-hidden bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
                >
                    {/* Background Accents */}
                    <div className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full border border-[#D2B87C]/15" />

                    <div className="pointer-events-none absolute -right-12 top-40 h-[300px] w-[300px] rounded-full border border-[#D2B87C]/10" />

                    <div className="relative mx-auto max-w-[1440px]">

                        {/* Section Heading */}
                        <div className="mb-10 max-w-4xl lg:mb-12">

                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#927B4D]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#927B4D] sm:text-xs">
                                    Club Inauguration
                                </span>
                            </div>

                            <h2 className="font-serif text-[34px] leading-[1.12] tracking-[-0.03em] text-[#20235A] sm:text-[44px] lg:text-[52px]">
                                Inauguration of
                                <span className="block italic text-[#927B4D]">
                                    CSE AI &amp; ML
                                </span>
                            </h2>

                            <p className="mt-5 text-sm leading-8 text-[#66636A] sm:text-base sm:leading-9">
                                Club Activities 2026–27
                            </p>

                            {/* Cypher Identity */}
                            <div className="mt-8 border-l-2 border-[#D2B87C] pl-5 sm:pl-7">

                                <h3 className="font-serif text-[36px] leading-tight tracking-[0.08em] text-[#20235A] sm:text-[46px] lg:text-[54px]">
                                    CYPHER
                                </h3>

                                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#927B4D] sm:text-xs">
                                    Innovate <span className="mx-2 text-[#D2B87C]">·</span>
                                    Learn <span className="mx-2 text-[#D2B87C]">·</span>
                                    Transform
                                </p>
                            </div>

                        </div>

                        {/* Gallery Introduction */}
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#927B4D]" />

                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#927B4D]">
                                Inauguration Gallery
                            </p>
                        </div>

                        {/* Four Image Gallery */}
                        <div className="grid gap-6 sm:grid-cols-2">

                            {[
                                {
                                    src: "/images/dpt/cse_ai_ml/activities/Cse_Ai_Ml_Activities_img9.webp",
                                    alt: "Inauguration of the CSE AI and ML club Cypher",
                                },
                                {
                                    src: "/images/dpt/cse_ai_ml/activities/Cse_Ai_Ml_Activities_img10.webp",
                                    alt: "CSE AI and ML club inauguration ceremony",
                                },
                                {
                                    src: "/images/dpt/cse_ai_ml/activities/Cse_Ai_Ml_Activities_img11.webp",
                                    alt: "Faculty and students during the Cypher club inauguration",
                                },
                                {
                                    src: "/images/dpt/cse_ai_ml/activities/Cse_Ai_Ml_Activities_img12.webp",
                                    alt: "Moments from the Cypher club activities inauguration",
                                },
                            ].map((image, index) => (

                                <div key={image.src} className="group relative">

                                    {/* Decorative Frame */}
                                    <div className="absolute -bottom-3 -left-3 -right-3 -top-3 border border-[#D2B87C]/50 transition-colors duration-300 group-hover:border-[#927B4D]" />

                                    <button
                                        type="button"
                                        onClick={() => setActiveImage(image.src)}
                                        aria-label={`View Cypher inauguration image ${index + 1} in full screen`}
                                        className="relative block w-full cursor-zoom-in overflow-hidden bg-[#20235A] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#927B4D] focus-visible:ring-offset-4"
                                    >
                                        <div className="relative aspect-[4/3] w-full">

                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                sizes="(min-width: 640px) 50vw, 100vw"
                                                className="object-cover "
                                            />

                                            {/* Image Overlay */}
                                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#20235A]/60 via-transparent to-transparent opacity-80" />

                                            {/* Image Number */}
                                            <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-3">
                                                <span className="h-px w-7 bg-[#D2B87C]" />

                                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                                                    Image {String(index + 1).padStart(2, "0")}
                                                </span>
                                            </div>

                                            {/* Full Screen Indicator */}
                                            <div className="pointer-events-none absolute bottom-5 right-5 flex items-center gap-2 border border-white/30 bg-[#20235A]/75 px-3 py-2.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-colors group-hover:bg-[#20235A] sm:text-[10px]">
                                                <Maximize2 className="h-4 w-4 text-[#D2B87C]" />
                                                <span>View Full Image</span>
                                            </div>

                                        </div>
                                    </button>

                                </div>

                            ))}

                        </div>

                        {/* Closing Accent */}
                        <div className="mt-12 flex items-center justify-center gap-4">
                            <span className="h-px w-12 bg-[#D2B87C]" />

                            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#927B4D] sm:text-[10px]">
                                CYPHER · 2026–27
                            </p>

                            <span className="h-px w-12 bg-[#D2B87C]" />
                        </div>

                    </div>
                </section>



            </main>

            {/* ================= FULL SCREEN IMAGE MODAL ================= */}
            {activeImage && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#101225]/95 p-4 backdrop-blur-sm sm:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Industrial visit image"
                    onClick={() => setActiveImage(null)}
                >
                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={() => setActiveImage(null)}
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
                            src={activeImage}
                            alt="S4 AIML Industrial Visit to Radio Astronomy Centre, Ooty"
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
