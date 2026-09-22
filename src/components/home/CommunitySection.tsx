import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, Globe, Users } from "lucide-react";

import CampusStudents from "../../../public/images/campus_students.png";

const mainStats = [
    {
        icon: Globe,
        value: "5",
        label: "International\nStudents",
        description: "Bringing global perspectives\nto our campus. (2024–25)",
    },
    {
        icon: Users,
        value: "594",
        label: "Annual Student\nIntake",
        description: "Building the next generation\nof skilled professionals.",
    },
    {
        icon: GraduationCap,
        value: "₹10,000+",
        label: "Scholarships Every Year",
        description: "Supporting bright minds\nand deserving talent.",
    },
];

const sideStats = [
    { icon: Users, value: "3000+", label: "Students" },
    { icon: GraduationCap, value: "8500+", label: "Alumni" },
];

export default function CommunitySection() {
    return (
        <section className="relative overflow-hidden bg-white py-24">
            {/* ========================================================
                FAINT NCERC WATERMARK + BUILDING LINE-ART
            ======================================================== */}

            <div className="pointer-events-none absolute bottom-0 right-0 hidden select-none items-end lg:flex">
                <span className="font-display text-8xl font-bold text-slate-100">
                    NCERC
                </span>

                <svg
                    aria-hidden="true"
                    viewBox="0 0 400 260"
                    className="-ml-16 h-48 w-auto text-gold-500/20"
                    fill="none"
                >
                    <path
                        d="M40 260V90h60V60h40v30h60v40h40v40h60v100"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />

                    <path
                        d="M100 90h40M100 130h40M100 170h40M160 130h40M160 170h40M220 170h40"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                </svg>
            </div>

            {/* ========================================================
                MAIN CONTAINER
            ======================================================== */}

            <div className="relative mx-auto grid max-w-8xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-start">
                {/* ====================================================
                    LEFT / COPY COLUMN
                ==================================================== */}

                <div>
                    {/* Section Label */}

                    <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                            Our Community
                        </span>

                        <span className="h-px w-12 bg-gold-500" />
                    </div>

                    {/* Heading */}

                    <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl">
                        A Community That Inspires, Connects &amp; Grows
                    </h2>

                    {/* Gold Divider */}

                    <div className="my-6 h-1 w-16 bg-gold-500" />

                    {/* Description */}

                    <p className="max-w-xl text-base leading-relaxed text-slate-600">
                        At NCERC, you&apos;ll find more than just a college &mdash;
                        you&apos;ll find a vibrant community of learners, dreamers and
                        doers. Our students, faculty, and alumni come together to learn,
                        collaborate, innovate and build lasting connections that shape
                        brighter futures.
                    </p>

                    {/* ====================================================
                        MAIN STATS
                    ==================================================== */}

                    <div
                        className="
                            mt-10
                            grid
                            grid-cols-1
                            gap-10
                            sm:grid-cols-3
                            sm:gap-8
                            lg:gap-10
                        "
                    >
                        {mainStats.map(
                            ({ icon: Icon, value, label, description }) => (
                                <div
                                    key={label}
                                    className="
                                        min-w-0
                                        sm:flex
                                        sm:flex-col
                                    "
                                >
                                    {/* Icon */}

                                    <Icon
                                        size={30}
                                        strokeWidth={1.5}
                                        className="text-gold-500"
                                    />

                                    {/* Value */}

                                    <p className="mt-3 font-display text-4xl font-bold leading-none text-navy-950">
                                        {value}
                                    </p>

                                    {/* Label */}

                                    <p className="mt-2 whitespace-pre-line text-xs font-semibold uppercase leading-relaxed tracking-wide text-gold-500">
                                        {label}
                                    </p>

                                    {/* Description */}

                                    <p className="mt-3 whitespace-pre-line text-sm leading-snug text-slate-600">
                                        {description}
                                    </p>
                                </div>
                            )
                        )}
                    </div>

                    {/* ====================================================
                        CTA
                    ==================================================== */}

                    <Link
                        href="/about-ncerc"
                        className="
                            mt-20
                            inline-flex
                            items-center
                            gap-2
                            border-b-2
                            border-gold-500
                            pb-1
                            text-sm
                            font-semibold
                            uppercase
                            tracking-wide
                            text-gold-500
                            transition
                            hover:text-gold-400
                        "
                    >
                        Discover Our Community

                        <ArrowRight size={16} />
                    </Link>
                </div>

                {/* ====================================================
                    RIGHT / PHOTO + SIDE STATS
                ==================================================== */}

                <div>
                    {/* ==================================================
                        PHOTO
                    ================================================== */}

                    <div className="relative">
                        {/* Top-left corner */}

                        <span
                            aria-hidden="true"
                            className="
                                absolute
                                -left-3
                                -top-3
                                hidden
                                h-10
                                w-28
                                rounded-tl-2xl
                                border-l-2
                                border-t-2
                                border-gold-500
                                sm:block
                            "
                        />

                        {/* Bottom-right corner */}

                        <span
                            aria-hidden="true"
                            className="
                                absolute
                                -bottom-3
                                -right-3
                                hidden
                                h-10
                                w-28
                                rounded-br-2xl
                                border-b-2
                                border-r-2
                                border-gold-500
                                sm:block
                            "
                        />

                        {/* Dotted grid accent */}

                        <div
                            aria-hidden="true"
                            className="
                                absolute
                                -right-6
                                -top-6
                                hidden
                                h-20
                                w-20
                                sm:block
                            "
                            style={{
                                backgroundImage:
                                    "radial-gradient(currentColor 1.5px, transparent 1.5px)",
                                backgroundSize: "10px 10px",
                                color: "#d9a441",
                            }}
                        />

                        {/* Image */}

                        <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-xl sm:h-80 lg:h-96">
                            <Image
                                src={CampusStudents}
                                alt="Students collaborating on the NCERC campus"
                                fill
                                sizes="(min-width: 1024px) 45vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* ==================================================
                        SIDE STATS
                    ================================================== */}

                    <div className="mt-8 max-w-xs border-l-2 border-gold-500 pl-6">
                        <div className="flex flex-col gap-6">
                            {sideStats.map(
                                ({ icon: Icon, value, label }) => (
                                    <div
                                        key={label}
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                        "
                                    >
                                        {/* Icon */}

                                        <Icon
                                            size={22}
                                            strokeWidth={1.5}
                                            className="shrink-0 text-gold-500"
                                        />

                                        {/* Value */}

                                        <p className="m-0 text-lg font-bold leading-none text-navy-950">
                                            {value}
                                        </p>

                                        {/* Label */}

                                        <span className="text-xs font-semibold uppercase leading-none tracking-wide text-gold-500">
                                            {label}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>

                        {/* Side description */}

                        <p className="mt-6 text-sm leading-snug text-slate-600">
                            A strong network
                            <br />
                            for a brighter tomorrow.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}