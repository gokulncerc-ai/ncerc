
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/header/SiteHeader";
import FooterSection from "@/components/home/FooterSection";
import DepartmentNavigation from "../../departmentnavigation/DepartmentNavigation";
import {
    ArrowLeft,
    CalendarDays,
    MapPin,
    Scale,
} from "lucide-react";

export default function AsActivititesPageTwo() {
    const activityImages = [
        {
            src: "/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img17.webp",
            alt: "Students attending the legal awareness class on the right to vote",
        },
        {
            src: "/images/dpt/applied_science_and_humanities/activities/Ash_Activities_img18.webp",
            alt: "Legal awareness session on the right to vote at NCERC",
        },
    ];

    return (
        <>
            <SiteHeader />

            <main className="min-h-screen bg-[#FAF9F6] [&_p]:text-justify">


                {/* HERO SECTION */}
                <section className="relative overflow-hidden bg-[#20235A] text-[#FAF7F2]">
                    <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-[#D2B87C]/15" />
                    <div className="pointer-events-none absolute -right-10 -top-14 h-52 w-52 rounded-full border border-[#D2B87C]/20" />

                    <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
                        <Link
                            href="/department/applied-science-and-humanities/activities"
                            className="mb-10 inline-flex items-center gap-2 text-sm text-[#D2B87C] transition-colors hover:text-white"
                        >
                            <ArrowLeft size={16} />
                            Back to Activities
                        </Link>

                        <div className="max-w-4xl">
                            <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#D2B87C]">
                                Applied Science & Humanities
                            </p>

                            <h1 className="font-serif text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
                                Legal Awareness Class
                                <span className="mt-2 block text-[#D2B87C]">
                                    Right to Vote
                                </span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-8 text-[#FAF7F2]/75 sm:text-lg">
                                Promoting civic awareness and encouraging
                                students to understand the importance of
                                their democratic rights and responsibilities.
                            </p>

                            <div className="mt-9 h-px w-24 bg-[#D2B87C]" />
                        </div>
                    </div>
                </section>
                <DepartmentNavigation />

                {/* ACTIVITY CONTENT */}
                <section
                    id="legal-awareness"
                    className="bg-[#FAF9F6] px-6 py-14 sm:px-8 lg:px-10 lg:py-20"
                >
                    <div className="mx-auto max-w-[1440px]">
                        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                            {/* LEFT CONTENT */}
                            <div>
                                <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[#927B4D]">
                                    Civic Awareness Programme
                                </p>

                                <h2 className="font-serif text-3xl font-normal leading-tight text-[#20235A] sm:text-4xl lg:text-[42px]">
                                    Understanding the
                                    <span className="block text-[#927B4D]">
                                        Right to Vote
                                    </span>
                                </h2>

                                <div className="mt-7 flex items-center gap-3 border-y border-[#D2B87C]/50 py-4">
                                    <div className="flex h-10 w-10 items-center justify-center bg-[#F2EFE8] text-[#927B4D]">
                                        <Scale size={19} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.14em] text-[#927B4D]">
                                            Resource Person
                                        </p>
                                        <p className="mt-1 text-sm text-[#20235A]">
                                            Adv. Archana T K
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-7 space-y-5 text-[15px] leading-8 text-[#62626B]">
                                    <p>
                                        Our recent legal awareness class on
                                        <span className="text-[#20235A]">
                                            {" "}‘Right to Vote’
                                        </span>{" "}
                                        was a huge success. Students and
                                        faculty gathered at MIC Hall,
                                        Bhaskara Block, Nehru College of
                                        Engineering and Research Centre,
                                        to learn from Adv. Archana T K.
                                    </p>

                                    <p>
                                        The session provided an opportunity
                                        for students and faculty to develop
                                        awareness of the importance of voting
                                        and the role of every citizen in the
                                        democratic process.
                                    </p>
                                </div>

                                {/* EVENT DETAILS */}
                                <div className="mt-9 grid gap-5 border-t border-[#D2B87C]/50 pt-6 sm:grid-cols-2">
                                    <div className="flex items-start gap-3">
                                        <CalendarDays
                                            size={19}
                                            className="mt-1 shrink-0 text-[#927B4D]"
                                            strokeWidth={1.5}
                                        />
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.14em] text-[#927B4D]">
                                                Programme
                                            </p>
                                            <p className="mt-1 text-sm text-[#20235A]">
                                                Legal Awareness Class
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <MapPin
                                            size={19}
                                            className="mt-1 shrink-0 text-[#927B4D]"
                                            strokeWidth={1.5}
                                        />
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.14em] text-[#927B4D]">
                                                Venue
                                            </p>
                                            <p className="mt-1 text-sm leading-6 text-[#20235A]">
                                                MIC Hall, Bhaskara Block,
                                                NCERC
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT HIGHLIGHT */}
                            <div className="relative flex min-h-[360px] flex-col justify-between overflow-hidden bg-[#20235A] p-8 sm:min-h-[420px] sm:p-10 lg:min-h-[500px]">
                                <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full border border-[#D2B87C]/20" />
                                <div className="pointer-events-none absolute -bottom-12 -right-8 h-48 w-48 rounded-full border border-[#D2B87C]/20" />

                                <div className="relative">
                                    <p className="text-xs uppercase tracking-[0.2em] text-[#D2B87C]">
                                        Legal Awareness
                                    </p>
                                    <div className="mt-8 h-px w-16 bg-[#D2B87C]" />
                                </div>

                                <div className="relative mt-16">
                                    <p className="font-serif text-3xl font-normal leading-snug text-[#FAF7F2] sm:text-4xl">
                                        Every vote matters.
                                    </p>
                                    <p className="mt-4 max-w-sm text-sm leading-7 text-[#FAF7F2]/70">
                                        Awareness of our rights is the first
                                        step towards responsible
                                        participation in democracy.
                                    </p>
                                </div>

                                <div className="relative mt-12 flex items-center justify-between border-t border-[#D2B87C]/30 pt-5">
                                    <span className="text-xs uppercase tracking-[0.14em] text-[#D2B87C]">
                                        NCERC · Pampady
                                    </span>
                                    <Scale
                                        size={23}
                                        className="text-[#D2B87C]"
                                        strokeWidth={1.3}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* IMAGE GALLERY */}
                <section
                    id="legal-awareness-gallery"
                    className="bg-[#F2EFE8] px-6 py-14 sm:px-8 lg:px-10 lg:py-20"
                >
                    <div className="mx-auto max-w-[1440px]">
                        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                            <div>
                                <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[#927B4D]">
                                    Event Gallery
                                </p>

                                <h2 className="font-serif text-3xl font-normal leading-tight text-[#20235A] sm:text-4xl lg:text-[42px]">
                                    Moments from the Session
                                </h2>
                            </div>

                            <p className="max-w-sm text-sm leading-7 text-[#777780]">
                                Glimpses from the legal awareness class
                                conducted at Nehru College of Engineering
                                and Research Centre.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            {activityImages.map((image, index) => (
                                <div
                                    key={image.src}
                                    className="group relative aspect-[4/3] overflow-hidden bg-[#E8E3D9]"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-contain"
                                    />

                                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#20235A]/75 to-transparent px-5 pb-5 pt-12">
                                        <span className="text-xs uppercase tracking-[0.16em] text-white">
                                            Legal Awareness Class
                                        </span>
                                        <span className="text-xs text-white/80">
                                            0{index + 1} / 02
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-[#D2B87C]/50 pt-4">
                            <p className="text-xs uppercase tracking-[0.16em] text-[#927B4D]">
                                Applied Science & Humanities
                            </p>
                            <p className="text-xs text-[#777780]">
                                Nehru College of Engineering and Research Centre
                            </p>
                        </div>
                    </div>
                </section>

               
               
            </main>

            <FooterSection />
        </>
    );
}
