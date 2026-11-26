
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../../departmentnavigation/DepartmentNavigation";
import {
    ArrowLeft,
    ArrowUpRight,
    FlaskConical,
    Atom,
} from "lucide-react";

export default function LabsPage() {
    const chemistryImages = [
        {
            src: "/images/dpt/applied_science_and_humanities/Facilities/Labs/Ash_Chemistry_Lab_img1.webp",
            alt: "Chemistry laboratory at NCERC",
        },
        {
            src: "/images/dpt/applied_science_and_humanities/Facilities/Labs/Ash_Chemistry_Lab_img2.webp",
            alt: "Chemistry laboratory facilities and equipment at NCERC",
        },
    ];

    const physicsImages = [
        {
            src: "/images/dpt/applied_science_and_humanities/Facilities/Labs/Ash_Physics_Lab_img1.webp",
            alt: "Physics laboratory at NCERC",
        },
        {
            src: "/images/dpt/applied_science_and_humanities/Facilities/Labs/Ash_Physics_Lab_img2.webp",
            alt: "Physics laboratory equipment and learning facilities at NCERC",
        },
    ];

    return (
        <>
            <SiteHeader />

            {/* HERO SECTION */}
            <section className="relative isolate overflow-hidden bg-[#20235A] [&_p]:!text-justify">
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute -right-24 -top-32 h-[440px] w-[440px] rounded-full border border-white/10" />
                    <div className="absolute -right-8 -top-16 h-[310px] w-[310px] rounded-full border border-white/10" />
                    <div className="absolute bottom-0 left-[45%] h-64 w-64 rounded-full bg-[#D2B87C]/10 blur-3xl" />
                    <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_55%,rgba(210,184,124,0.07)_55%,transparent_75%)]" />
                </div>

                <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
                    <div className="max-w-3xl">
                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#D2B87C]" />
                            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#D2B87C]">
                                Applied Science &amp; Humanities
                            </span>
                        </div>

                        <h1 className="font-serif text-4xl font-normal leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
                            Laboratory
                            <br />
                            <span className="italic text-[#D2B87C]">
                                Learning Spaces.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                            Discover the Chemistry and Physics laboratories
                            that support practical learning, scientific
                            exploration, and hands-on experimentation at NCERC.
                        </p>

                        <div className="mt-9 flex flex-wrap items-center gap-5">
                            <Link
                                href="#laboratories"
                                className="inline-flex items-center gap-3 rounded-sm bg-[#D2B87C] px-6 py-3.5 text-sm font-medium text-[#20235A] transition-colors duration-300 hover:bg-white"
                            >
                                Explore Laboratories
                                <ArrowUpRight size={17} />
                            </Link>

                            <Link
                                href="/department/applied-science-and-humanities/facilities"
                                className="inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-[#D2B87C]"
                            >
                                <ArrowLeft size={16} />
                                All Facilities
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#D2B87C]/70 to-transparent" />
            </section>

            <DepartmentNavigation />

            {/* LABORATORIES */}
            <main id="laboratories">
                {/* CHEMISTRY LAB */}
                <section
                    id="chemistry-lab"
                    className="bg-[#FAF9F6] px-6 py-16 sm:px-8 lg:px-10 lg:py-24 [&_p]:!text-justify"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                            <div className="max-w-2xl">
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-9 bg-[#927B4D]" />
                                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#927B4D]">
                                        Laboratory Facilities · 01
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D2B87C]/60 text-[#927B4D]">
                                        <FlaskConical
                                            size={25}
                                            strokeWidth={1.4}
                                        />
                                    </div>

                                    <h2 className="font-serif text-3xl font-normal leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                        Chemistry Lab
                                    </h2>
                                </div>

                                <p className="mt-5 max-w-xl text-sm leading-7 text-[#73737B] sm:text-base sm:leading-8">
                                    A dedicated space for exploring chemical
                                    principles through practical experiments
                                    and laboratory activities.
                                </p>
                            </div>

                            <span className="text-xs uppercase tracking-[0.18em] text-[#927B4D]">
                                Applied Science &amp; Humanities
                            </span>
                        </div>

                        {/* Chemistry Images */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-7">
                            {chemistryImages.map((image, index) => (
                                <div
                                    key={image.src}
                                    className="group relative aspect-[4/3] overflow-hidden bg-[#F2EFE8]"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#20235A]/75 to-transparent px-5 pb-5 pt-12">
                                        <span className="text-xs font-medium uppercase tracking-[0.16em] text-white">
                                            Chemistry Lab
                                        </span>
                                        <span className="text-xs text-white/75">
                                            0{index + 1}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PHYSICS LAB */}
                <section
                    id="physics-lab"
                    className="bg-[#F2EFE8] px-6 py-16 sm:px-8 lg:px-10 lg:py-24 [&_p]:!text-justify"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                            <div className="max-w-2xl">
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-px w-9 bg-[#927B4D]" />
                                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#927B4D]">
                                        Laboratory Facilities · 02
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D2B87C]/60 text-[#927B4D]">
                                        <Atom
                                            size={27}
                                            strokeWidth={1.4}
                                        />
                                    </div>

                                    <h2 className="font-serif text-3xl font-normal leading-tight text-[#20235A] sm:text-4xl lg:text-5xl">
                                        Physics Lab
                                    </h2>
                                </div>

                                <p className="mt-5 max-w-xl text-sm leading-7 text-[#73737B] sm:text-base sm:leading-8">
                                    An environment for understanding the
                                    fundamental concepts of physics through
                                    demonstrations, measurements, and
                                    hands-on experiments.
                                </p>
                            </div>

                            <span className="text-xs uppercase tracking-[0.18em] text-[#927B4D]">
                                Applied Science &amp; Humanities
                            </span>
                        </div>

                        {/* Physics Images */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-7">
                            {physicsImages.map((image, index) => (
                                <div
                                    key={image.src}
                                    className="group relative aspect-[4/3] overflow-hidden bg-white"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#20235A]/75 to-transparent px-5 pb-5 pt-12">
                                        <span className="text-xs font-medium uppercase tracking-[0.16em] text-white">
                                            Physics Lab
                                        </span>
                                        <span className="text-xs text-white/75">
                                            0{index + 1}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>



            <FooterSection />
        </>
    );
}
