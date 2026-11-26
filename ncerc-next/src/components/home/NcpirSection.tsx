"use client";

import Image, { type StaticImageData } from "next/image";
import {
    Briefcase,
    Building,
    FileCheck,
    GraduationCap,
    Handshake,
    Target,
    TrendingUp,
    Users,
    UsersRound,
} from "lucide-react";

const points = [
    {
        icon: GraduationCap,
        text: "NCPIR believes in 3 C's (Create-Construct-Compensate) which is to create skilled, eligible and employable students. Providing counselling training and support service to develop individual career plan, so the students perform better during the placement drives.",
    },
    {
        icon: Briefcase,
        text: "Equipping the students for the right kind of jobs where the Market demands.",
    },
    {
        icon: Users,
        text: "NCPIR establish an interface between the industry and institution with the primary objective of nurturing long lasting and mutually beneficial relationship between institute and industry.",
    },
    {
        icon: Target,
        text: "NCPIR is vibrant, supportive and a collaborative workspace with a great team that works hard and has fun doing meaningful work. The team immensely enjoys their part in contributing to student's career of their choice.",
    },
];

const stats = [
    {
        icon: Building,
        value: "250+",
        label: "Total Companies",
        panel: "dark" as const,
    },
    {
        icon: FileCheck,
        value: "3300+",
        label: "Total Offers",
        panel: "light" as const,
    },
    {
        icon: TrendingUp,
        value: "52",
        suffix: "LPA",
        label: "Highest CTC",
        panel: "dark" as const,
    },
    {
        icon: UsersRound,
        value: "100",
        suffix: "%",
        label: "Placement Assistance",
        panel: "light" as const,
    },
];

function StatCard({
    icon: Icon,
    value,
    suffix,
    label,
    panel,
}: {
    icon: typeof Building;
    value: string;
    suffix?: string;
    label: string;
    panel: "dark" | "light";
}) {
    const isDark = panel === "dark";

    return (
        <div
            className={`
                flex h-[145px] flex-col items-center justify-center
                rounded-lg border
                px-4 text-center
                shadow-[0_8px_24px_rgba(0,0,0,0.08)]
                ${isDark
                    ? "border-navy-950 bg-navy-950 text-white"
                    : "border-slate-100 bg-white text-navy-950"
                }
            `}
        >
            {/* Icon */}
            <span
                className="
                    flex h-12 w-12 items-center justify-center
                    rounded-full border border-gold-500
                "
            >
                <Icon
                    size={23}
                    strokeWidth={1.5}
                    className="text-gold-500"
                />
            </span>

            {/* Value */}
            <p
                className={`
                    mt-2 font-display text-[31px]
                    font-semibold leading-none
                    ${isDark
                        ? "text-gold-500"
                        : "text-navy-950"
                    }
                `}
            >
                {value}

                {suffix && (
                    <span className="ml-1 text-[16px] font-medium text-gold-500">
                        {suffix}
                    </span>
                )}
            </p>

            {/* Line */}
            <span className="mt-2 h-[2px] w-7 bg-gold-500" />

            {/* Label */}
            <p
                className={`
                    mt-2 text-sm font-semibold leading-snug
                    ${isDark
                        ? "text-white"
                        : "text-navy-950"
                    }
                `}
            >
                {label}
            </p>
        </div>
    );
}

export default function NcpirSection({
    image,
}: {
    image: StaticImageData;
}) {
    return (
        <section
            className="
                relative flex min-h-[100vh]
                items-center overflow-hidden
                bg-[#faf7f2]
                py-24
            "
        >
            {/* =====================================================
                BACKGROUND DECORATIONS
            ====================================================== */}

            {/* Dotted pattern */}
            <div
                aria-hidden
                className="
                    pointer-events-none absolute
                    right-8 top-16 hidden
                    h-40 w-40 lg:block
                "
                style={{
                    backgroundImage:
                        "radial-gradient(currentColor 1.3px, transparent 1.3px)",
                    backgroundSize: "13px 13px",
                    color: "#d9a441",
                    opacity: 0.35,
                }}
            />

            {/* Building line art */}
            <svg
                aria-hidden
                viewBox="0 0 400 260"
                className="
                    pointer-events-none absolute
                    bottom-0 right-0 hidden
                    h-[310px] w-auto
                    text-gold-500/10
                    lg:block
                "
                fill="none"
            >
                <path
                    d="M40 260V90h60V60h40v30h60v40h40v40h60v100"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />

                <path
                    d="
                        M100 90h40
                        M100 130h40
                        M100 170h40
                        M160 130h40
                        M160 170h40
                        M220 170h40
                    "
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
            </svg>

            {/* =====================================================
                MAIN CONTENT
            ====================================================== */}

            <div
                className="
                    relative mx-auto w-full
                    max-w-[1400px]
                    px-5 sm:px-8 lg:px-12
                "
            >
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-8
                        lg:grid-cols-[minmax(300px,32%)_1fr]
                        lg:gap-10
                        xl:grid-cols-[360px_1fr]
                    "
                >
                    {/* =================================================
                        LEFT IMAGE
                    ================================================== */}

                    <div className="relative">
                        {/* Gold corner */}
                        <span
                            aria-hidden
                            className="
                                absolute -left-2 -top-2 z-20
                                h-20 w-20
                                rounded-tl-[24px]
                                border-l-2 border-t-2
                                border-gold-500
                            "
                        />

                        <div
                            className="
                                relative
                                h-[calc(100vh-40px)]
                                min-h-[620px]
                                max-h-[760px]
                                w-full
                                overflow-hidden
                                rounded-[16px]
                                bg-navy-950
                            "
                        >
                            <Image
                                src={image}
                                alt="Industry partners shaking hands at NCERC"
                                fill
                                priority
                                sizes="
                                    (min-width: 1280px) 360px,
                                    (min-width: 1024px) 32vw,
                                    100vw
                                "
                                className="object-cover"
                            />

                            {/* =========================================
                                IMAGE TEXT
                            ========================================== */}

                            <div
                                className="
                                    absolute left-0 top-0
                                    w-[52%]
                                    min-h-[185px]
                                    bg-navy-950/95
                                    px-7 pt-12
                                "
                            >
                                <p
                                    className="
                                        font-display
                                        text-xs
                                        font-semibold
                                        uppercase
                                        leading-relaxed
                                        tracking-[0.2em]
                                        text-white
                                    "
                                >
                                    Building
                                    <br />
                                    Connections.
                                </p>

                                <p
                                    className="
                                        mt-1
                                        font-display
                                        text-xs
                                        font-semibold
                                        uppercase
                                        leading-relaxed
                                        tracking-[0.2em]
                                        text-gold-500
                                    "
                                >
                                    Creating
                                    <br />
                                    Careers.
                                </p>

                                <span className="mt-3 block h-[2px] w-7 bg-gold-500" />
                            </div>

                            {/* Dots */}
                            <div
                                aria-hidden
                                className="
                                    absolute bottom-12 left-0
                                    h-24 w-20 opacity-80
                                "
                                style={{
                                    backgroundImage:
                                        "radial-gradient(#d9a441 1px, transparent 1px)",
                                    backgroundSize: "8px 8px",
                                }}
                            />

                            {/* Gold divider above card */}
                            <span
                                aria-hidden
                                className="
                                    absolute bottom-[205px]
                                    left-1/2
                                    h-px w-[130px]
                                    -translate-x-1/2
                                    bg-gold-500/70
                                "
                            />

                            {/* =========================================
                                250+ CARD
                            ========================================== */}

                            <div
                                className="
                                    absolute
                                    bottom-3
                                    left-1/2
                                    w-[82%]
                                    -translate-x-1/2
                                "
                            >
                                <StatCard {...stats[0]} />
                            </div>
                        </div>
                    </div>

                    {/* =================================================
                        RIGHT CONTENT
                    ================================================== */}

                    <div
                        className="
                            flex min-h-[calc(100vh-40px)]
                            flex-col justify-between
                            py-1
                        "
                    >
                        {/* =============================================
                            TOP DECORATION
                        ============================================== */}

                        <div>
                            <div className="flex items-center justify-center gap-4">
                                <span className="h-px w-16 bg-gold-500" />

                                <span className="h-1 w-1 rounded-full bg-gold-500" />

                                <span
                                    className="
                                        flex h-12 w-12
                                        items-center justify-center
                                        rounded-full
                                        border border-gold-500
                                    "
                                >
                                    <Handshake
                                        size={23}
                                        strokeWidth={1.5}
                                        className="text-gold-500"
                                    />
                                </span>

                                <span className="h-1 w-1 rounded-full bg-gold-500" />

                                <span className="h-px w-16 bg-gold-500" />
                            </div>

                            {/* =========================================
                                HEADING
                            ========================================== */}

                            <h2
                                className="
                                    mt-4 text-center
                                    font-display
                                    text-4xl
                                    font-semibold
                                    leading-tight
                                    text-navy-950
                                    sm:text-5xl
                                    xl:text-5xl
                                "
                            >
                                Nehru Corporate Placements &amp;
                                <br />
                                Industry Relations{" "}
                                <span className="text-gold-500">
                                    (NCPIR)
                                </span>
                            </h2>

                            <div className="mx-auto mt-4 h-[2px] w-10 bg-gold-500" />

                            {/* =========================================
                                POINTS
                            ========================================== */}

                            <ul className="mt-7 space-y-5">
                                {points.map(
                                    ({ icon: Icon, text }, index) => (
                                        <li
                                            key={text}
                                            className="relative flex gap-5"
                                        >
                                            {/* Icon */}
                                            <div className="relative flex w-10 shrink-0 justify-center">
                                                <span
                                                    className="
                                                        relative z-10
                                                        flex h-10 w-10
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        rounded-full
                                                        bg-navy-950
                                                    "
                                                >
                                                    <Icon
                                                        size={18}
                                                        strokeWidth={1.5}
                                                        className="text-gold-500"
                                                    />
                                                </span>

                                                {/* Connector */}
                                                {index <
                                                    points.length - 1 && (
                                                        <span
                                                            aria-hidden
                                                            className="
                                                            absolute
                                                            left-1/2
                                                            top-10
                                                            h-[calc(100%+20px)]
                                                            -translate-x-1/2
                                                            border-l
                                                            border-dashed
                                                            border-navy-950/20
                                                        "
                                                        />
                                                    )}
                                            </div>

                                            {/* Text */}
                                            <p
                                                className="
                                                    pt-1
                                                    max-w-[850px]
                                                    text-base
                                                    leading-relaxed
                                                    text-slate-600
                                                "
                                            >
                                                {text}
                                            </p>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>

                        {/* =============================================
                            STAT CARDS
                        ============================================== */}

                        <div
                            className="
                                mt-7
                                grid grid-cols-3
                                gap-4
                            "
                        >
                            {stats.slice(1).map((stat) => (
                                <StatCard
                                    key={stat.label}
                                    {...stat}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}