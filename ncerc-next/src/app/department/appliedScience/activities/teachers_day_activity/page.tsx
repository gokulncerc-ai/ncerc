
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../../departmentnavigation/DepartmentNavigation";
import {
    ArrowRight,
    CalendarDays,
    ArrowLeft,
    X,
    Maximize2,
} from "lucide-react";

export default function TeacherDayActivityPage() {
    const [isImageOpen, setIsImageOpen] = useState(false);

    const imageSrc =
        "/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img27.webp";

    useEffect(() => {
        if (!isImageOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsImageOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isImageOpen]);

    return (
        <>
            <SiteHeader />

            <main className="min-h-screen bg-[#FAF9F6]">

                {/* HERO SECTION */}
                <section className="relative overflow-hidden bg-[#20235A] text-[#FAF7F2]">
                    <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
                    <div className="pointer-events-none absolute -right-10 -top-14 h-52 w-52 rounded-full border border-[#D2B87C]/20" />
                    <div className="pointer-events-none absolute -bottom-32 left-[42%] h-64 w-64 rounded-full border border-[#D2B87C]/10" />

                    <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                        <div className="max-w-4xl">
                            <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#D2B87C]">
                                Applied Science & Humanities · 2026
                            </p>

                            <h1 className="font-serif text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
                                Teacher’s Day
                                <span className="mt-2 block text-[#D2B87C]">
                                    Celebration
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-8 text-[#FAF7F2]/75 sm:text-lg">
                                Celebrating the dedication, guidance and
                                invaluable contributions of teachers in
                                shaping future generations.
                            </p>

                            <div className="mt-9 flex flex-wrap items-center gap-3 text-sm text-[#FAF7F2]/75">
                                <CalendarDays
                                    size={17}
                                    className="text-[#D2B87C]"
                                    strokeWidth={1.5}
                                />
                                5 September 2026
                            </div>

                            <div className="mt-9 h-px w-24 bg-[#D2B87C]" />
                        </div>
                    </div>
                </section>

                <DepartmentNavigation />

                {/* ABOUT THE CELEBRATION */}
                <section
                    id="teachers-day-overview"
                    className="bg-[#FAF9F6] px-6 py-14 sm:px-8 lg:px-10 lg:py-20"
                >
                    <div className="mx-auto max-w-[1440px]">
                        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

                            {/* SECTION HEADING */}
                            <div>
                                <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[#927B4D]">
                                    5 September 2026
                                </p>

                                <h2 className="font-serif text-3xl font-normal leading-tight text-[#20235A] sm:text-4xl lg:text-[42px]">
                                    Honouring the
                                    <span className="block text-[#927B4D]">
                                        Guiding Lights
                                    </span>
                                </h2>

                                <div className="mt-8 h-px w-20 bg-[#D2B87C]" />

                                <p className="mt-5 text-sm leading-7 text-[#777780]">
                                    Teacher’s Day Celebration
                                    <span className="mt-1 block text-[#20235A]">
                                        Nehru College of Engineering and
                                        Research Centre
                                    </span>
                                </p>
                            </div>

                            {/* EVENT DESCRIPTION */}
                            <div className="flex flex-col justify-center">
                                <p className="text-[15px] leading-8 text-[#62626B]">
                                    On the occasion of Teacher’s Day, the
                                    NSS Unit of NCERC, in collaboration
                                    with the 23 Kerala Battalion NCC and
                                    the Department of Applied Science,
                                    successfully organised the Teacher’s
                                    Day celebration on
                                    <span className="text-[#20235A]">
                                        {" "}5th September 2026.
                                    </span>
                                </p>

                                <div className="mt-9 grid gap-5 border-t border-[#D2B87C]/50 pt-6 sm:grid-cols-2">
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.14em] text-[#927B4D]">
                                            Organised By
                                        </p>
                                        <p className="mt-2 text-sm leading-7 text-[#20235A]">
                                            NSS Unit, NCERC
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-[0.14em] text-[#927B4D]">
                                            In Collaboration With
                                        </p>
                                        <p className="mt-2 text-sm leading-7 text-[#20235A]">
                                            23 Kerala Battalion NCC
                                            <br />
                                            Department of Applied Science
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EVENT IMAGE */}
                <section
                    id="teachers-day-gallery"
                    className="bg-[#F2EFE8] px-6 py-14 sm:px-8 lg:px-10 lg:py-20"
                >
                    <div className="mx-auto max-w-[1440px]">

                        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                            <div>
                                <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[#927B4D]">
                                    Event Gallery · 2026
                                </p>

                                <h2 className="font-serif text-3xl font-normal leading-tight text-[#20235A] sm:text-4xl lg:text-[42px]">
                                    Moments from Teacher’s Day
                                </h2>
                            </div>

                            <p className="max-w-sm text-sm leading-7 text-[#777780]">
                                A glimpse of the Teacher’s Day celebration
                                organised at NCERC.
                            </p>
                        </div>

                        {/* FEATURED IMAGE */}
                        <button
                            type="button"
                            onClick={() => setIsImageOpen(true)}
                            aria-label="View Teacher's Day celebration image in full screen"
                            className="group relative block aspect-[16/9] w-full cursor-zoom-in overflow-hidden bg-[#E8E3D9] text-left"
                        >
                            <Image
                                src={imageSrc}
                                alt="Teacher's Day celebration organised by NSS Unit, NCERC"
                                fill
                                sizes="(max-width: 1440px) 100vw, 1440px"
                                className="object-contain "
                            />

                            <div className="absolute inset-0 bg-[#20235A]/0 transition-colors duration-300 group-hover:bg-[#20235A]/15" />

                            <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center bg-[#20235A]/75 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <Maximize2 size={18} />
                            </div>

                            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-[#20235A]/75 to-transparent px-5 pb-5 pt-20 sm:px-8 sm:pb-7">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.18em] text-[#D2B87C]">
                                        Teacher’s Day · 2026
                                    </p>
                                    <p className="mt-2 font-serif text-xl font-normal text-white sm:text-2xl">
                                        Celebrating Our Teachers
                                    </p>
                                </div>

                                <Maximize2
                                    size={20}
                                    className="mb-1 text-white/80"
                                />
                            </div>
                        </button>

                        <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-[#D2B87C]/50 pt-4">
                            <p className="text-xs uppercase tracking-[0.16em] text-[#927B4D]">
                                Applied Science & Humanities
                            </p>

                            <p className="text-xs text-[#777780]">
                                5 September 2026
                            </p>
                        </div>
                    </div>
                </section>

              
              
            </main>

            <FooterSection />

            {/* FULL-SCREEN IMAGE VIEWER */}
            {isImageOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#10101A]/95 px-4 py-16 backdrop-blur-sm sm:px-10"
                    onClick={() => setIsImageOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Teacher's Day image viewer"
                >
                    {/* CLOSE BUTTON */}
                    <button
                        type="button"
                        onClick={() => setIsImageOpen(false)}
                        aria-label="Close image viewer"
                        className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8 sm:top-7"
                    >
                        <X size={22} />
                    </button>

                    {/* IMAGE */}
                    <div
                        className="relative h-full max-h-[82vh] w-full max-w-[1400px]"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Image
                            src={imageSrc}
                            alt="Teacher's Day celebration organised by NSS Unit, NCERC"
                            fill
                            priority
                            sizes="100vw"
                            className="object-contain"
                        />
                    </div>

                    {/* CAPTION */}
                    <div className="absolute bottom-5 left-0 right-0 px-8 text-center sm:bottom-7">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/80">
                            Teacher’s Day Celebration · NCERC · 2026
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
