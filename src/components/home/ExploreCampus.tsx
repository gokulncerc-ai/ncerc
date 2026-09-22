import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CornerDownLeft, CornerUpRight } from "lucide-react";

import CampusImage from "../../../public/images/explore_college.webp";

const ExploreCampus = () => {
    return (
        <section
            className="
                relative
                -mt-8
                overflow-hidden
                bg-[#faf7f2]
                pb-24
                pt-0
                sm:-mt-10
                lg:-mt-12
            "
        >
            {/* =====================================================
                DECORATIVE BACKGROUND - BOTTOM LEFT
            ====================================================== */}
            <div
                aria-hidden
                className="pointer-events-none absolute bottom-10 left-10 hidden h-24 w-24 lg:block"
                style={{
                    backgroundImage:
                        "radial-gradient(currentColor 1.5px, transparent 1.5px)",
                    backgroundSize: "12px 12px",
                    color: "#d9a441",
                    opacity: 0.5,
                }}
            />

            {/* =====================================================
                DECORATIVE BUILDING LINE ART - BOTTOM RIGHT
            ====================================================== */}
            <svg
                aria-hidden
                viewBox="0 0 400 260"
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    right-0
                    hidden
                    h-56
                    w-auto
                    text-gold-500/20
                    lg:block
                "
                fill="none"
            >
                <path
                    d="M180 260V90h60V60h40v30h60v40h40v40h20v100"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />

                <path
                    d="M220 90h40M220 130h40M220 170h40M280 130h40M280 170h40"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />

                <path
                    d="M60 260c0-60 20-100 20-140M80 120c10-20 30-30 30-30M60 150c-15-15-40-15-40 0"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
            </svg>

            {/* =====================================================
                MAIN CONTENT
            ====================================================== */}
            <div className="relative mx-auto max-w-8xl px-6">

                {/* =================================================
                    CAMPUS IMAGE
                    No top margin / padding
                ================================================== */}
                <div className="relative m-0 p-0">

                    {/* Gold top-left corner */}
                    <span
                        aria-hidden
                        className="
                            absolute
                            left-0
                            top-0
                            z-10
                            hidden
                            h-12
                            w-28
                            rounded-tl-2xl
                            border-l-2
                            border-t-2
                            border-gold-500
                            sm:block
                        "
                    />

                    {/* Gold bottom-right corner */}
                    <span
                        aria-hidden
                        className="
                            absolute
                            -bottom-3
                            -right-3
                            z-10
                            hidden
                            h-12
                            w-28
                            rounded-br-2xl
                            border-b-2
                            border-r-2
                            border-gold-500
                            sm:block
                        "
                    />

                    {/* Image wrapper */}
                    <div
                        className="
                            relative
                            m-0
                            h-64
                            w-full
                            overflow-hidden
                            rounded-2xl
                            shadow-xl
                            sm:h-80
                            lg:h-[420px]
                        "
                    >
                        <Image
                            src={CampusImage}
                            alt="Panoramic view of the NCERC campus"
                            fill
                            priority
                            sizes="100vw"
                            className="
                                object-cover
                                object-center
                            "
                        />
                    </div>
                </div>

                {/* =================================================
                    CONTENT BELOW IMAGE
                ================================================== */}
                <div className="mx-auto mt-14 max-w-2xl text-center">

                    {/* Section Label */}
                    <div className="flex items-center justify-center gap-3">
                        <span className="h-px w-14 bg-gold-500" />

                        <span
                            className="
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-gold-500
                            "
                        >
                            Explore NCERC
                        </span>

                        <span className="h-px w-14 bg-gold-500" />
                    </div>

                    {/* Heading */}
                    <h2
                        className="
                            mt-4
                            font-display
                            text-4xl
                            font-semibold
                            leading-tight
                            text-navy-950
                            sm:text-5xl
                        "
                    >
                        Explore NCERC &ndash; 360&deg; View
                    </h2>

                    {/* Description */}
                    <p
                        className="
                            mt-5
                            text-base
                            leading-relaxed
                            text-slate-600
                        "
                    >
                        Take a complete virtual tour of our campus and experience
                        the vibrant academic environment, modern facilities and
                        inspiring spaces that make NCERC unique.
                    </p>

                    {/* =================================================
                        360 BADGE + BUTTON
                    ================================================== */}
                    <div className="mt-8 flex items-center justify-center gap-4">

                        {/* 360 Badge */}
                        <span
                            className="
                                relative
                                flex
                                h-16
                                w-16
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-gold-500
                                text-sm
                                font-bold
                                text-gold-500
                            "
                        >
                            360&deg;

                            <CornerUpRight
                                size={14}
                                strokeWidth={2.5}
                                className="
                                    absolute
                                    -right-1
                                    -top-1
                                    text-gold-500
                                "
                            />

                            <CornerDownLeft
                                size={14}
                                strokeWidth={2.5}
                                className="
                                    absolute
                                    -bottom-1
                                    -left-1
                                    text-gold-500
                                "
                            />
                        </span>

                        {/* CTA */}
                        <Link
                            href="https://ncerc.ac.in/360/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-navy-950
                                px-7
                                py-3.5
                                text-sm
                                font-semibold
                                text-white
                                transition-all
                                duration-300
                                hover:bg-navy-900
                                hover:shadow-lg
                            "
                        >
                            360&deg; View of the College

                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExploreCampus;